# Lefika Moalosi — GPU teardown portfolio

A portfolio told as a layer-by-layer teardown of an Nvidia 5090: rack → card → cooler → board → package → die → SM → logic cells → transistor → atoms. Built with Next.js (App Router).

## Running

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Layout

- `app/layout.tsx` — fonts (Barlow Condensed, JetBrains Mono, Poppins via `next/font`) and page metadata
- `app/page.tsx` — renders the teardown
- `app/globals.css` — all styling, including the 3D rack/card scenes and the zoom transitions
- `components/Teardown.tsx` — the client component: layer state, the step queue (scroll / swipe / buttons), and the camera-zoom clock that writes `--za` / `--pp` onto the stage box
- `components/Scene.tsx` — the illustrated stage (SVG + CSS 3D) for every layer
- `components/Panels.tsx` — the copy panel for each layer

The original design export (`Main.dc.html` and its runtime) is in git history before the Next.js conversion.
