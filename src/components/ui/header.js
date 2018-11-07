import React from 'react'
import { Link } from 'react-scroll'
import PropTypes from 'prop-types'
import Logo from '../icons/lavagel-logo'
import MenuIcon from '../icons/menu-icon'
import '../../styles/ui/header.scss'

const scrollConfig = {
  spy: true,
  smooth: true,
  duration: 1000
}

const Header = ({ addClass, showMenu }) => (
  <div className="header-container">
    <div className="header-content">
      <a className="menu-icon-btn" onCLick={showMenu}>
        <MenuIcon />
      </a>
      <Link to="home" {...scrollConfig}>
        <Logo />
      </Link>
      <div className={`menu ${addClass}`}>
        <Link to="home" {...scrollConfig}>Home</Link>
        <Link to="product" {...scrollConfig}>Technology</Link>
        <Link to="application" {...scrollConfig}>Applications</Link>
        <Link to="about" {...scrollConfig}>About</Link>
        <Link to="contact" {...scrollConfig}>Contact Us</Link>        
      </div>
    </div>
  </div>
)

Header.propTypes = {
  addClass: PropTypes.string,
}

Header.defaultProps = {
  addClass: ''
}

export default Header
