import { useReveal } from "../hooks/useReveal";
import DynamicVisuals from "../components/exmedia/DynamicVisuals";
import ElevateBusiness from "../components/exmedia/ElevateBusiness";
import PlanwithPurpose from "../components/exmedia/PlanwithPurpose";
import ScaleBrand from "../components/exmedia/ScaleBrand";
import TransformVision from "../components/exmedia/TransformVision";
import ExploreMedia from "../components/exmedia/ExploreMedia";

const Exmedia = () => {
  const revealRef = useReveal<HTMLDivElement>();

  return (
    <div
      ref={revealRef}
      className="min-h-screen bg-background text-foreground font-sans relative overflow-hidden"
    >
      <TransformVision />
      <ElevateBusiness />
      <PlanwithPurpose />
      <DynamicVisuals />
      <ScaleBrand />
      <ExploreMedia />
    </div>
  );
};

export default Exmedia;
