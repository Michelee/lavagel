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
  {"title": "Trans-dermal patches.", "image": Application1, "description": "Imagine a world where medical needles are a thing of the past. Our team of scientists and researchers have created a “Trans-Dermal Patch” infused with Lava Gel which facilitates the effective absorption of life-saving medications and life-changing treatments. The technology permeates into the subcutaneous layers of the connective issues and the blood borne pathways of a person’s skin, thereby making the hypodermic needle an object of unfortunate history." },
  {"title": "Trauma Blanket", "image": Application2, "description": "Specifically designed for first responders, field medics, and health care professionals, our trauma blanket has been designed to cover the torso of a patient safely applying heat to the desired area. Using Lava Gel, we can control the duration the blanket will produce heat as well as presetting the temperature the blanket will achieve."},
  {"title": "Heat and eat", "image": Application3, "description": "Looking to enjoy a hot cup of coffee on the top of Mount Everest? Well you could. Lava Gel’s instant heat can be used to heat up any food product on the spot, and keep it hot for up to 2 hours. Simply pull the tab and let Lava Gel do the work. Lava Gel’s mineral energy provides a safe, reliable, controllable, and environmentally-friendly solution to the industry’s need for portable self-heating. Soup on the go. Hot mac and cheese at school. Chocolate fondue on the ski slopes. We’re heating up the food industry."},
  {"title": "Heat and hold", "image": Application4, "description": "For years, mobile heat has been imperfect. The industry has had to battle with fire dangers, dried out food, high labor costs and lack of mobility. Lava Gel’s controllable “natural mineral energy” is a smarter solution that is truly going to transform the food and beverage industry. Utilizing Lava Gel’s patented “heat curve” food is able to stay at 150° without continuing to cook. Finally, kitchen fresh quality food for up to 2 hours after it leaves the kitchen."},
  {"title": "Spa and salon", "image": Application5, "description": "Lava Gel has taken the salon market by storm with self-heated tools for hand, foot, body, and massage care. The long lasting, electricity-free heat offers unparalleled safety, convenience and quality of treatment. From manicures to massages, Lava Gel powered products have delighted both salon owners and customers alike."}
]

const IndexPage = () => (
  <Layout>
    <div className="main-container">
      <div className="title-container">
        <h1>LavaGel</h1>
        <p>The World’s First – Safe, Controllable, and Natural Self-Heating Technology.</p>
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
                <p>{item.description}</p>
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
