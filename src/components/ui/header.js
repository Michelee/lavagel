import React, { Component } from 'react'
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

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    }
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle () {
    const toggle = this.state.toggle
    this.setState({
      toggle: !toggle
    })
  }

  render () {
    const { toggle } = this.state;
    return (
      <div className="header-container">
        <div className="header-content">
          <a className="menu-icon-btn" onClick={this.handleToggle}>
            <MenuIcon />
          </a>
          <Link to="home" {...scrollConfig}>
            <Logo />
          </Link>
          <div className={`menu ${toggle ? 'show' : 'hide'}`}>
            
            <Link to="home" {...scrollConfig}>Home</Link>
            <Link to="product" {...scrollConfig}>Technology</Link>
            <Link to="application" {...scrollConfig}>Applications</Link>
            <Link to="about" {...scrollConfig}>About</Link>
            <Link to="contact" {...scrollConfig}>Contact Us</Link>        
          </div>
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  addClass: PropTypes.string,
}

Header.defaultProps = {
  addClass: ''
}

export default Header
