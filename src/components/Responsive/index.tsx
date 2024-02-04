import { useState, useEffect } from "react";
import { useResponsive } from "../../hooks/use-responsive";

interface ResponsiveProps {
  mobile: React.ReactNode;
  desktop: React.ReactNode;
}

export default function Responsive({ mobile, desktop }: ResponsiveProps) {
  const [useMobile, setUseMobile] = useState(false);
  const { isMobile } = useResponsive();
  useEffect(() => {
    setUseMobile(isMobile);
  }, [isMobile]);

  return useMobile ? mobile : desktop;
}