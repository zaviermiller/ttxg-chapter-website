import Marquee from "react-fast-marquee";
import { useResponsive } from "../../hooks/use-responsive";
import "./styles.css";

interface ImageScrollerProps {
  imageSrcs: [string, string, string];
  direction: "left" | "right";
  delay?: number;
}

export default function ImageScroller({ imageSrcs, direction, delay }: ImageScrollerProps) {
  const { isMobile } = useResponsive();
  return (
    <Marquee direction={direction} autoFill={true} speed={20} gradient={true} delay={delay} gradientWidth={ isMobile ? '50px' : '200px'}>
      {imageSrcs.map((src, i) => (
        <img key={i} src={src} className="w-80 aspect-video object-cover mx-3" />
      ))}
    </Marquee>
  )
}