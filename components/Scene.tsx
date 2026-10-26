// The illustrated stage: the 3D rack and card (layers 0–3) and the matched-geometry zoom layers (4–9).
// `z` holds each layer's position class (is-active / is-past / is-next).
import Rack from './scene/Rack';
import Card from './scene/Card';
import Package from './scene/Package';
import Die from './scene/Die';
import SM from './scene/SM';
import Logic from './scene/Logic';
import Transistor from './scene/Transistor';
import Atoms from './scene/Atoms';

type Props = { z: Record<string, string> };

export default function Scene({ z }: Props) {
  return (
    <>
      <Rack />
      <Card z={z} />
      <Package z={z} />
      <Die z={z} />
      <SM z={z} />
      <Logic z={z} />
      <Transistor z={z} />
      <Atoms z={z} />
    </>
  );
}
