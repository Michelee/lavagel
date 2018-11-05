import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/ui/layout'
import Image from '../components/ui/image'
import Button from '../components/ui/button'
import LavagelProductImg from '../images/lavagel-product-img.jpg'
import Application1 from '../images/application-1.png'
import Application2 from '../images/application-2.png'
import Application3 from '../images/application-3.png'
import Application4 from '../images/application-4.png'
import Application5 from '../images/application-5.png'
import '../styles/pages/index.scss'

const applicationsItems = [
  {"title": "Application 1", "image": Application1},
  {"title": "Application 2", "image": Application2},
  {"title": "Application 3", "image": Application3},
  {"title": "Application 4", "image": Application4},
  {"title": "Application 5", "image": Application5}
]

const IndexPage = () => (
  <Layout>
    <div className="main-container">
      <div className="title-container">
        <h1>Lorem ipsum dolor</h1>
        <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut <br /> labore et dolore magna aliqua. Ut enim ad minim veniam,
          nostrud <br />exercitation ullamco ex ea commodo consequat.</p>
        <div className="btn-container">
          <Button
            label="Watch video"
          />
        </div>
      </div>
      <div id="product" className="product section">
        <h2>Lorem ipsum dolor</h2>
        <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut <br /> labore et dolore magna aliqua. Ut enim ad minim veniam,
          nostrud <br />exercitation ullamco ex ea commodo consequat.</p>
        <img src={LavagelProductImg} alt="lavagel-prod" />
      </div>
      <div id="application" className="applications section">
        {
          applicationsItems.map((item, index) => (
            <div className={`application-item 
            ${index % 2 === 0 ? '' : 'inverse'}`}>
              <img src={item.image} alt={`application-${index}`} />
              <div className="application-info">
                <h3>{item.title}</h3>
                <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              </div>
            </div>
          ))
        }
      </div>
      <div id="contact" className="contact section">
        <h2>Contact Us</h2>
        <p>Consectetur adipiscing elit, sed do eiusmod tempor <br /> 
          incididunt ut labore et dolore magna aliqua.</p>
        <div className="contact-form">
          <input type="text" placeholder="Enter email address" />
          <Button 
            label="Subscribe"
          />
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
