import React from 'react'
import PhoneIcon from '../icons/phone-icon'
import MailIcon from '../icons/mail-icon'
import PlaceIcon from '../icons/place-icon'
import LogoIcon from '../icons/lavagel-logo'
import TwitterIcon from '../icons/twitter-icon'
import FacebookIcon from '../icons/facebook-icon'
import InstagramIcon from '../icons/instagram-icon'

import '../../styles/ui/footer.scss'

const Footer = () => (
  <div className="footer-container">
    <div className="info-container">
      <div className="info-box">
        <PlaceIcon />
        <span>6744 Spencer St., <br />Las Vegas, NV 89119</span>
      </div>
      <div className="info-box">
        <MailIcon />
        <a href="mailto:heretohelp@lavagelusa.com">Support</a>
      </div>
      <div className="info-box">
        <PhoneIcon />
        <span>844-924-2538</span>
      </div>
    </div>
    <hr />
    <div className="footer-content section">
      <LogoIcon />
      <div className="social-media-icons">
        <TwitterIcon />
        <FacebookIcon />
        <InstagramIcon />
      </div>
      <span>Copyright 2018. All Rights Reserved</span>
    </div>
  </div>
)

export default Footer;
