import React from 'react'
import { Link } from 'react-scroll'
import PropTypes from 'prop-types'
import Logo from '../icons/lavagel-logo'
import '../../styles/ui/header.scss'

const scrollConfig = {
  spy: true,
  smooth: true,
  duration: 1000
}

const Header = ({ addClass }) => (
  <div className={`header-container ${addClass}`}>
    <div className="header-content">
      <Link to="home" {...scrollConfig}>
        <Logo />
      </Link>
      <div className="menu">
        <Link to="home" {...scrollConfig}>Home</Link>
        <Link to="product" {...scrollConfig}>Product</Link>
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
