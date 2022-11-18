import '../styles/components/header.scss';
const Logo = require('../assets/images/LOGO.png');

const Header = () => {
  return (
    <header className="header">
      {/* Logo */}
      <div className="containerh">
        <div className="header__logo">
          <img src={Logo} alt="logo" />
        </div>
      </div>
      {/* Line */}
      <hr className="header__line" />
    </header>
  );
};

export default Header;
