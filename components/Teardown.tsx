'use client';

import React from 'react';
import Panels from './Panels';
import Scene from './Scene';

const LEVELS = [
  { name: 'Rack', fov: '≈ 9.6 m', m: 9.6, pre: 'this is a', key: 'datacenter' },
  { name: 'Card', fov: '≈ 36 cm', m: 0.36, pre: 'pull out one', key: 'GPU' },
  { name: 'Cooler', fov: '≈ 34 cm', m: 0.34, pre: 'take off the', key: 'cooler' },
  { name: 'PCB', fov: '≈ 22 cm', m: 0.22, pre: 'lift out the', key: 'board' },
  { name: 'Package', fov: '≈ 7 cm', m: 0.07, pre: 'zoom into the', key: 'package' },
  { name: 'Die', fov: '≈ 29 mm', m: 0.029, pre: 'now the', key: 'die' },
  { name: 'SM', fov: '≈ 1.8 mm', m: 0.0018, pre: 'one of 192:', key: 'an SM' },
  { name: 'Logic', fov: '≈ 4.2 µm', m: 4.2e-6, pre: 'down to', key: 'logic cells' },
  { name: 'Transistor', fov: '≈ 68.9 nm', m: 6.89e-8, pre: 'a single', key: 'transistor' },
  { name: 'Atoms', fov: '≈ 1.6 nm', m: 1.6e-9, pre: 'and finally,', key: 'atoms' }
];

// the card stays a 3D scene through layer 3; layers 4+ are matched-geometry zooms
const FIRST_ZOOM = 4;
// zoom ratio (1/s) from each layer's parent into it — the CSS reads --pp = ratio^progress
const ZOOM_RATIO: Record<number, number> = { 4: 1.7274, 5: 3.2223, 6: 12.2727, 7: 11.5628, 8: 3.8095, 9: 4.5714 };
const ZOOM_MS = 1800;
// when more steps are queued behind this one (fast scrolling), each zoom runs quicker so the chain keeps up
const FAST_MS = 950;
// deep layers stand up in 3D once settled; they lie flat again (CSS, .5s) before the camera moves
const UNTILT_MS = 550;
// the CSS-driven steps (rack → card → cooler → board) take this long to land; a camera zoom waits for them,
// and the next CSS step waits at least CSS_GAP_MS so quick scrolling still plays each one
const CSS_STEP_MS: Record<number, number> = { 1: 2400, 2: 1900, 3: 1700 };
const CSS_GAP_MS = 700;
// queued scrolling may run at most this many layers ahead of the one on screen
const MAX_AHEAD = 3;
const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

type State = { level: number; from: number; dir: 'fwd' | 'back'; eduHsOpen: boolean; letterOpen: boolean };
type Zoom = { from: number; to: number; za: number; rush?: (() => void) | null };

export default class Teardown extends React.Component<object, State> {
  state: State = { level: 0, from: 0, dir: 'fwd', eduHsOpen: false, letterOpen: false };

  stageRef = React.createRef<HTMLDivElement>();
  target?: number;
  zoom: Zoom | null = null;
  pendingZoom: { from: number; to: number; reversing: boolean } | null = null;
  raf = 0;
  wait?: ReturnType<typeof setTimeout>;
  cssAt = 0;
  cssStep = 0;
  lastEvt = 0;
  lastStep = 0;
  touch: { x: number; y: number } | null = null;

  level() {
    return this.state.level;
  }

  // a camera step: one clock drives both layers of a matched zoom, so it must never be cut mid-flight
  isZoom(a: number, b: number) {
    return Math.abs(a - b) === 1 && Math.max(a, b) >= FIRST_ZOOM;
  }

  // dots and Reassemble: go straight there, dropping anything queued
  go(n: number) {
    const cur = this.level();
    const level = Math.max(0, Math.min(LEVELS.length - 1, n));
    this.target = level;
    if (level === cur) return;
    if (this.raf) cancelAnimationFrame(this.raf);
    this.raf = 0;
    this.zoom = null;
    clearTimeout(this.wait);
    this.start(cur, level, false);
  }

  // scroll, swipe, Back and Dissect: move the target one layer and let the queue walk there a step at a time
  step(d: number) {
    const cur = this.level();
    const base = this.target === undefined ? cur : this.target;
    const t = Math.max(cur - MAX_AHEAD, Math.min(cur + MAX_AHEAD, base + d));
    this.target = Math.max(0, Math.min(LEVELS.length - 1, t));
    // more steps now wait behind a zoom running at normal speed: let it hurry to land
    if (this.zoom && this.zoom.rush && this.target !== this.zoom.to) this.zoom.rush();
    this.pump();
  }

  pump() {
    clearTimeout(this.wait);
    const cur = this.level();
    if (this.target === undefined || this.target === cur) return;
    const next = cur + (this.target > cur ? 1 : -1);
    if (this.zoom) {
      // turning round mid-zoom: it is the same two layers, so the same clock simply runs back from where it is
      if (next === this.zoom.from) this.start(cur, next, true);
      // anything else waits; the clock calls pump() when it lands
      return;
    }
    const since = Date.now() - this.cssAt;
    const need = this.isZoom(cur, next) ? CSS_STEP_MS[this.cssStep] || 0 : CSS_GAP_MS;
    if (this.cssAt && since < need) {
      this.wait = setTimeout(() => this.pump(), need - since);
      return;
    }
    this.start(cur, next, false);
  }

  start(from: number, to: number, reversing: boolean) {
    // the clock starts in componentDidUpdate, once the new level's classes are on the page —
    // starting it here would repaint the old level with the reset clock for a frame (a flicker)
    this.pendingZoom = { from, to, reversing };
    this.setState({ level: to, from, dir: to > from ? 'fwd' : 'back' });
  }

  componentDidUpdate() {
    if (!this.pendingZoom) return;
    const { from, to, reversing } = this.pendingZoom;
    this.pendingZoom = null;
    const css = Math.abs(to - from) === 1 && !this.isZoom(from, to);
    this.cssAt = css ? Date.now() : 0;
    this.cssStep = Math.max(from, to);
    this.runZoomClock(from, to, reversing);
    if (css) this.pump();
  }

  // is this deep layer currently standing up in 3D? (then it needs to lie flat before the camera moves)
  raised(k: number) {
    const zs = this.stageRef.current?.querySelector('.Z' + k + ' .zs');
    if (!zs) return false;
    const m = getComputedStyle(zs).transform;
    if (!m || m.indexOf('matrix3d(') !== 0) return false;
    return Math.abs(parseFloat(m.slice(9).split(',')[10])) > 0.05;
  }

  // one clock per step, written straight onto the stage box so parent and child layers stay locked frame by frame
  runZoomClock(from: number, to: number, reversing: boolean) {
    const box = this.stageRef.current?.querySelector<HTMLElement>('.box');
    if (!box) return;
    if (this.raf) cancelAnimationFrame(this.raf);
    this.raf = 0;
    const fwd = to > from;
    const ratio = ZOOM_RATIO[Math.max(from, to)] || 1;
    const end = fwd ? 1 : 0;
    const camera = this.isZoom(from, to);
    const begin = reversing && this.zoom ? this.zoom.za : 1 - end;
    const zoom: Zoom | null = camera ? { from, to, za: begin } : null;
    this.zoom = zoom;
    const set = (z: number) => {
      box.style.setProperty('--za', String(z));
      box.style.setProperty('--pp', String(Math.pow(ratio, z)));
      if (this.zoom) this.zoom.za = z;
    };
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!zoom || reduce) {
      set(end);
      this.zoom = null;
      if (camera) this.pump();
      return;
    }
    const hold = !reversing && this.raised(from) ? UNTILT_MS : 0;
    const queued = this.target !== undefined && this.target !== to;
    // one leg of the clock: from a value to the end, over a time, with an ease; rush() swaps in a quicker leg mid-flight
    let a = begin;
    let dur = Math.abs(end - begin) * (queued ? FAST_MS : ZOOM_MS);
    let ease = reversing ? easeOut : easeInOut;
    let t0 = performance.now() + hold;
    if (!queued) {
      zoom.rush = () => {
        const now = performance.now();
        a = zoom.za;
        dur = Math.abs(end - a) * FAST_MS;
        ease = easeOut;
        t0 = Math.max(now, t0);
        zoom.rush = null;
      };
    }
    set(begin);
    const tick = (now: number) => {
      const t = dur > 0 ? Math.max(0, Math.min(1, (now - t0) / dur)) : 1;
      set(a + (end - a) * ease(t));
      if (t < 1) {
        this.raf = requestAnimationFrame(tick);
        return;
      }
      this.raf = 0;
      this.zoom = null;
      this.pump();
    };
    this.raf = requestAnimationFrame(tick);
  }

  componentWillUnmount() {
    if (this.raf) cancelAnimationFrame(this.raf);
    clearTimeout(this.wait);
  }

  onWheel(e: React.WheelEvent) {
    if (window.innerWidth <= 980) return;
    const now = Date.now();
    const quiet = now - this.lastEvt > 220;
    this.lastEvt = now;
    const pnl = (e.target as Element).closest?.('.pnl');
    if (pnl && pnl.scrollHeight > pnl.clientHeight + 2) {
      const atTop = pnl.scrollTop <= 0;
      const atBot = pnl.scrollTop + pnl.clientHeight >= pnl.scrollHeight - 2;
      if ((e.deltaY > 0 && !atBot) || (e.deltaY < 0 && !atTop)) {
        this.lastStep = now;
        return;
      }
    }
    if (Math.abs(e.deltaY) < 8) return;
    const since = now - this.lastStep;
    if (!((quiet && since > 700) || since > 2200)) return;
    this.lastStep = now;
    this.step(e.deltaY > 0 ? 1 : -1);
  }

  onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    this.touch = t ? { x: t.clientX, y: t.clientY } : null;
  };

  onTouchEnd = (e: React.TouchEvent) => {
    const t = e.changedTouches[0];
    if (!t || !this.touch) return;
    const dx = t.clientX - this.touch.x;
    const dy = t.clientY - this.touch.y;
    this.touch = null;
    const d = Math.abs(dx) > Math.abs(dy) ? -dx : -dy;
    if (Math.abs(d) < 40) return;
    this.step(d > 0 ? 1 : -1);
  };

  render() {
    const { level: lv, from, dir, eduHsOpen, letterOpen } = this.state;
    const last = LEVELS.length - 1;
    const pos = (i: number) => (i === lv ? 'is-active' : i < lv ? 'is-past' : 'is-next');
    const show: Record<string, boolean> = {};
    LEVELS.forEach((_, i) => {
      show['s' + i] = i === lv;
    });
    const z: Record<string, string> = { za: 'ZA ' + (lv < FIRST_ZOOM ? 'is-active' : 'is-past') };
    for (let k = FIRST_ZOOM; k < LEVELS.length; k++) z['z' + k] = pos(k);
    const fovPos = Math.max(0, Math.min(100, ((1 - Math.log10(LEVELS[lv].m)) / 11) * 100)).toFixed(2);
    const fovVal = LEVELS[lv].fov;
    const num = String(lv + 1).padStart(2, '0');

    return (
      <div className="stage" ref={this.stageRef} onWheel={(e) => this.onWheel(e)}>
        <header className="top">
          <div className="brand">
            <b>LEFIKA MOALOSI</b>
            <span>Portfolio — an Nvidia 5090 gpu teardown</span>
          </div>
          <nav className="links" aria-label="Contact">
            <a href="https://github.com/Bugitoy" target="_blank" rel="noopener">GitHub</a>
            <a href="https://www.linkedin.com/in/lefikamoalosi/" target="_blank" rel="noopener">LinkedIn</a>
            <a href="mailto:lefikatmoalosi@gmail.com">Email</a>
          </nav>
        </header>
        <div className="main">
          <section className="viz" aria-label="GPU teardown illustration">
            <div className="caps" aria-hidden="true">
              {LEVELS.map((l, i) => (
                <p className={'cap ' + pos(i)} key={i}>{l.pre} <span className="sel">{l.key}<i /><i /></span></p>
              ))}
            </div>
            <div className="viewport" onTouchStart={this.onTouchStart} onTouchEnd={this.onTouchEnd}>
              <div className="fovb" aria-hidden="true">FOV {fovVal}</div>
              <div className={'box lv-' + lv + ' from-' + from + ' dir-' + dir} aria-hidden="true">
                <Scene z={z} />
              </div>
            </div>
          </section>
          <section className="panel" aria-live="polite">
            <Panels
              show={show}
              eduHsOpen={eduHsOpen}
              eduHsBtn={eduHsOpen ? 'Show less' : 'Show high school background'}
              toggleEduHs={() => this.setState({ eduHsOpen: !eduHsOpen })}
              letterOpen={letterOpen}
              toggleLetter={() => this.setState({ letterOpen: !letterOpen })}
              restart={() => this.go(0)}
            />
          </section>
          <aside className="fov" aria-hidden="true">
            <p className="fovh">FIELD<br />OF VIEW</p>
            <div className="track">
              <span className="tick" style={{ top: "0%" }}>10 m</span>
              <span className="tick" style={{ top: "9.09%" }}>1 m</span>
              <span className="tick" style={{ top: "18.18%" }}>10 cm</span>
              <span className="tick" style={{ top: "27.27%" }}>1 cm</span>
              <span className="tick" style={{ top: "36.36%" }}>1 mm</span>
              <span className="tick" style={{ top: "45.45%" }}>100 µm</span>
              <span className="tick" style={{ top: "54.55%" }}>10 µm</span>
              <span className="tick" style={{ top: "63.64%" }}>1 µm</span>
              <span className="tick" style={{ top: "72.73%" }}>100 nm</span>
              <span className="tick" style={{ top: "81.82%" }}>10 nm</span>
              <span className="tick" style={{ top: "90.91%" }}>1 nm</span>
              <span className="tick" style={{ top: "100%" }}>0.1 nm</span>
              <span className="mark" style={{ top: `${fovPos}%` }}>{fovVal}</span>
            </div>
          </aside>
        </div>
        <footer className="bot">
          <div className="legend">
            <span><i className="sw" />Next layer</span>
            <span><i className="swl" />Callout</span>
            <span>Illustrative · proportions approximate</span>
          </div>
          <nav className="dots" aria-label="Layers">
            {LEVELS.map((l, i) => (
              <button
                className={i === lv ? 'dot on' : 'dot'}
                type="button"
                onClick={() => this.go(i)}
                aria-label={'Layer ' + (i + 1) + ': ' + l.name}
                aria-current={i === lv ? 'step' : 'false'}
                key={i}
              >
                {String(i + 1).padStart(2, '0')}
              </button>
            ))}
          </nav>
          <div className="nav">
            <span className="cnt">{num} / 10</span>
            <button className="btn" type="button" onClick={() => this.step(-1)} disabled={lv === 0} aria-label="Back up one layer"><svg className="ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7" /></svg>Back</button>
            <button className="btn pri" type="button" onClick={() => (lv === last ? this.go(0) : this.step(1))}>{lv === last ? 'Reassemble' : 'Dissect'}<svg className="ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12l7 7 7-7" /></svg></button>
          </div>
        </footer>
      </div>
    );
  }
}
