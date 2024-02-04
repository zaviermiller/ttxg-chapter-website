import { useLocation } from '@reach/router';
import { useResponsive } from '../../hooks/use-responsive';
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';
import Responsive from '../Responsive';


export default function Navbar() {
  const { pathname } = useLocation();
  
  // strip trailing slash
  const path = pathname.replace(/\/$/, '')

  return (
    <Responsive mobile={<NavbarMobile path={path} />} desktop={<NavbarDesktop path={path} />} />
  )
}

