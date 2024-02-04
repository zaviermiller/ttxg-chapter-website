import { useMediaQuery } from "usehooks-ts";
import config from '../../tailwind.config'
const { theme } = config;

const breakpoints = theme.screens;

export function useResponsive() {
  const is2xl = useMediaQuery(`(min-width: ${breakpoints['2xl']})`);
  const isXl = useMediaQuery(`(min-width: ${breakpoints.xl})`);
  const isLg = useMediaQuery(`(min-width: ${breakpoints.lg})`);
  const isMd = useMediaQuery(`(min-width: ${breakpoints.md})`);
  const isSm = useMediaQuery(`(min-width: ${breakpoints.sm})`);

  const currentSize = is2xl ? '2xl' : isXl ? 'xl' : isLg ? 'lg' : isMd ? 'md' : isSm ? 'sm' : 'xs';

  const xs = currentSize === 'xs';
  const sm = currentSize === 'sm';
  const md = currentSize === 'md';
  const lg = currentSize === 'lg';
  const xl = currentSize === 'xl';
  const xxl = currentSize === '2xl';

  const smAndDown = xs || sm;
  const mdAndDown = smAndDown || md;
  const lgAndDown = mdAndDown || lg;
  const xlAndDown = lgAndDown || xl;

  // We define mobile as being sm and down and desktop as being md and up
  const isMobile = smAndDown;
  const isDesktop = isMd;

  return {
    xs,
    sm,
    md,
    lg,
    xl,
    xxl,
    smAndDown,
    mdAndDown,
    lgAndDown,
    xlAndDown,
    smAndUp: isSm,
    mdAndUp: isMd,
    lgAndUp: isLg,
    xlAndUp: isXl,
    currentSize,
    isMobile,
    isDesktop
  };
}