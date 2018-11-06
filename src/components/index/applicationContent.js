import React from 'react'
import { FoodApplications, MedicalApplications, BeautyApplications } from '../../constants/applications'

const Applications = () => (
  <div name="application" className="applications section">
    <h2>Food and Beverage</h2>
    {
      FoodApplications.map((item, index) => (
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
    <h2>Medical</h2>
    {
      MedicalApplications.map((item, index) => (
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
    <h2>Beauty</h2>
    {
      BeautyApplications.map((item, index) => (
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
)

export default Applications;
