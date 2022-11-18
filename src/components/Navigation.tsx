import { useEffect } from 'react';
import '../styles/components/navigations.scss';
import '../styles/elements/link.scss';
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
            <a href="#sec-1" className="link">
              Home
            </a>
            <a href="#sec-2" className="link">
              Aboute Us
            </a>
            <a href="#sec-3" className="link">
              Our Menu
            </a>
            <a href="#sec-4" className="link">
              Pages
            </a>
            <a href="#sec-5" className="link">
              Blog
            </a>
          </div>
          {/* Icons */}
          <div className="icons">
            <div className="icon">
              <img src={Instagram} alt="intagramm" />
            </div>
            <div className="numbers">
              <a href="tel:+380984956069" className="link">
                +380984956069
              </a>
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
