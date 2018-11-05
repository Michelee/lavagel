import React from 'react'
import TextLoop from 'react-text-loop'

import Layout from '../components/ui/layout'
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
      <div name="home" className="title-container">
        <h1>LavaGel</h1>
        <p>The World’s First – Safe, Controllable,and Natural Self-Heating Technology.</p>
        <TextLoop mask>
          <p>Reversing the signs of aging.</p>
          <p>Making medical needles a thing of the past.</p>
          <p>Serving oven fresh food, 2 hours after it leaves the oven.</p>
        </TextLoop>
        <div className="btn-container">
          <Button
            label="Watch video"
          />
        </div>
      </div>
      <div name="product" className="product section">
        <h2>Welcome to mineral energy</h2>
        <p>Lava Gel is a flame-free heat engine, comprised of food-grade minerals from the earth and sea, that when combined, produce a controlled, instant source of sustained spot heat.  Anytime.  Anywhere. Any industry.</p>
        <img src={LavagelProductImg} alt="lavagel-prod" />
        <h2>4 Minerals.  90+ Patents.  Unlimited Possibilities.</h2>
        <p>Lava Gel’s heating properties are a result of a natural mineral reaction.  When combined with water, the minerals react immediately, safely heating the application for a pre-determined duration and temperature – 30 minutes to 4 hours, from room temperature to over 200°.  The minerals used in Lava Gel’s proprietary heating engine are completely controllable, formulated to the needs of the specific industry and application.</p>
        <p className="text-left"><strong>SAFE.</strong> Not only is mineral energy flame-free, the compound itself is made from food-grade, environmentally friendly minerals making it safe in countless applications, from consumer products to medical devices.</p>
        <p className="text-left"><strong>PORTABLE.</strong> Our unique self-heating applications are completely portable and lightweight, requiring absolutely no electricity, batteries or cords.</p>
        <p className="text-left"><strong>VERSATILE.</strong> From food, medical, beauty, and beyond, Lava Gel’s technology has the power to solve age-old problems and change the lives everyday people.</p>
      </div>
      <div name="application" className="applications section">
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
      <div name="about" className="about section">
        <h2>We’re on a mision</h2>
        <p>Lava Gel is a privately held company based in Las Vegas, NV.  We’re comprised of a diverse group of ambitious scientists, manufacturers, marketers, and industry veterans who are all dedicated to using mineral energy to transform the world we live in.  We believe bringing a safe, reliable heating source to everyday applications, from medical devices to food and beverage and everything in between is long overdue.  It’s this challenge that drives us every day.  And we wouldn’t have it any other way.</p>
      </div>
      <div name="contact" className="contact section">
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
