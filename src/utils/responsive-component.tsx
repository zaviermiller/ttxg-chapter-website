import Responsive from "../components/Responsive";

export default function responsiveComponent(mobile: React.ReactNode, desktop: React.ReactNode) {
  return <Responsive mobile={mobile} desktop={desktop} />;
}