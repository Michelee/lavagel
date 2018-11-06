import React from 'react'
import TextLoop from 'react-text-loop'

import Layout from '../components/ui/layout'
import Button from '../components/ui/button'
import Carousel from '../components/ui/carousel'

import ProductContent from '../components/index/productContent'
import ApplicationsContent from '../components/index/applicationContent'
import '../styles/pages/index.scss'

const IndexPage = () => (
  <Layout>
    <div className="main-container">
      <div name="home" className="title-container">
        <Carousel />
      </div>
      <ProductContent />
      <ApplicationsContent />
      <div name="about" className="about section">
        <h2>We’re on a mission</h2>
        <p>Lava Gel is a privately held company based in Las Vegas, NV.  We’re comprised of a diverse group of ambitious scientists, manufacturers, marketers, and industry veterans who are all dedicated to using mineral energy to transform the world we live in.  We believe bringing a safe, reliable heating source to everyday applications, from medical devices to food and beverage and everything in between is long overdue.  It’s this challenge that drives us every day.  And we wouldn’t have it any other way.</p>
      </div>
      <div name="contact" className="contact section">
        <h2>Contact Us</h2>
        <p>We’re here to answer questions, drop us a line.</p>
          <form action="https://lavagelusa.us19.list-manage.com/subscribe/post?u=d33952fceab5342823408db34&amp;id=41139b8770" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
            <div className="contact-form">
              <input id="mce-EMAIL" type="email" name="EMAIL" type="text" placeholder="Enter email address" required/>
              <Button
                label="Submit"
              />
            </div>
            <div style={{'position': 'absolute', 'left': '-5000px'}} aria-hidden="true">
              <input type="text" name="b_d33952fceab5342823408db34_41139b8770" tabindex="-1" value="" />
            </div>
          </form>
      </div>
    </div>
  </Layout>
)

export default IndexPage
