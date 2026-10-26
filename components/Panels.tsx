// The copy panel for each layer; only the active layer's panel is rendered.
import RackPanel from './panels/RackPanel';
import CardPanel from './panels/CardPanel';
import CoolerPanel from './panels/CoolerPanel';
import BoardPanel from './panels/BoardPanel';
import PackagePanel from './panels/PackagePanel';
import DiePanel from './panels/DiePanel';
import SMPanel from './panels/SMPanel';
import LogicPanel from './panels/LogicPanel';
import TransistorPanel from './panels/TransistorPanel';
import AtomsPanel from './panels/AtomsPanel';

type Props = {
  show: Record<string, boolean>;
  eduHsOpen: boolean;
  eduHsBtn: string;
  toggleEduHs: () => void;
  letterOpen: boolean;
  toggleLetter: () => void;
  restart: () => void;
};

export default function Panels({ show, eduHsOpen, eduHsBtn, toggleEduHs, letterOpen, toggleLetter, restart }: Props) {
  return (
    <>
      {show.s0 && <RackPanel />}
      {show.s1 && <CardPanel />}
      {show.s2 && <CoolerPanel eduHsOpen={eduHsOpen} eduHsBtn={eduHsBtn} toggleEduHs={toggleEduHs} />}
      {show.s3 && <BoardPanel />}
      {show.s4 && <PackagePanel />}
      {show.s5 && <DiePanel />}
      {show.s6 && <SMPanel />}
      {show.s7 && <LogicPanel />}
      {show.s8 && <TransistorPanel />}
      {show.s9 && <AtomsPanel letterOpen={letterOpen} toggleLetter={toggleLetter} restart={restart} />}
    </>
  );
}
