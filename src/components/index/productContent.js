import React from 'react'
import LavagelProductImg from '../../images/lavagel-product-img.jpg'
import SafeIcon from '../../components/icons/safe-icon'
import PortableIcon from '../../components/icons/portable-icon'
import VersatileIcon from '../../components/icons/versatile-icon'

const ProductContent = () => (
  <div name="product">
    <div  className="product img-bg section">
      <h2>Welcome to mineral energy</h2>
      <p>Lava Gel is a flame-free heat engine, comprised of food-grade minerals from the earth and sea, that when combined, produce a controlled, instant source of sustained spot heat. Anytime. Anywhere. Any industry.</p>
    </div>
    <div className="product grey-box section">
      <h2>4 Minerals. 90+ Patents. Unlimited Possibilities.</h2>
      <p>Lava Gel’s heating properties are a result of a natural mineral reaction. When combined with water, safely heating the application for a pre-determined duration and temperature – 30 minutes to 4 hours, from room temperature to over 200°. </p>
      <div className="inline-content">
        <div className="product-box">
          <SafeIcon />
          <strong className="title">Safe</strong>
          <p>The compound itself is made from food-grade, friendly minerals making it safe in countless applications.</p>
        </div>
        <div className="product-box">
          <PortableIcon />
          <strong className="title">Portable</strong>
          <p>Our unique self-heating applications are completely portable and require no electricity, batteries or cords.</p>
        </div>
        <div className="product-box">
          <VersatileIcon />
          <strong className="title">Versatile</strong>
          <p>Lava Gel’s technology has the power to solve age-old problems and change the lives everyday people.</p>
        </div>
      </div>
    </div>
  </div>
)

export default ProductContent;
