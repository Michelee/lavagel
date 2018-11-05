import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import Logo from '../icons/lavagel-logo'
import '../../styles/ui/header.scss'

const Header = ({ addClass }) => (
  <div className={`header-container ${addClass}`}>
    <div className="header-content">
      <Link to="/" >
        <Logo />
      </Link>
      <div className="menu">
        <Link to="#product">Product</Link>
        <Link to="#application">Application</Link>
        <Link to="#about">About</Link>
        <Link to="#contact">Contact Us</Link>        
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
