import { useEffect } from 'react';
import '../styles/components/navigations.scss';
// import Link from '../../elements/link/Link';
const Instagram = require('../assets/images/instagram.png');
// import Burger from './Burger';

const Navigation = () => {
  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = (e: any) => {
    const header = document.querySelector(
      '.header-section'
    ) as HTMLCanvasElement;
    const banner = document.querySelector('#sec-1') as HTMLCanvasElement;
    const scrollTop = window.scrollY;
    scrollTop >= 250
      ? header.classList.add('is-sticky')
      : header.classList.remove('is-sticky');
    scrollTop >= 250
      ? banner.classList.add('vidstup')
      : banner.classList.remove('vidstup');
  };

  return (
    <nav className="header-section">
      <div className="nav_container">
        <div className="nav_block">
          {/* Nav */}
          <div className="navigation">
            {/* <Link text="Home" href="#sec-1" />
            <Link text="Aboute Us" href="#sec-2" />
            <Link text="Our Menu" href="#sec-3" />
            <Link text="Pages" href="#sec-4" />
            <Link text="Blog" href="#sec-5" /> */}
          </div>
          {/* Icons */}
          <div className="icons">
            <div className="icon">
              <img src={Instagram} alt="intagramm" />
            </div>
            <div className="numbers">
              {/* <Link
                text="+380984956069"
                href="tel:+380984956069"
                type={LinkTypes.WHITE}
              /> */}
            </div>
          </div>
          {/* Burger */}
          <div className="burger">{/* <Burger></Burger> */}</div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
