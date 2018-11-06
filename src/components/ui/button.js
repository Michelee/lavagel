import React from 'react'
import { Link } from 'gatsby'
import '../../styles/ui/button.scss'

const Button = props => (
  <button
    type='submit'
    className={`btn ${props.addClass}`}>
    {props.label}
  </button>
)

export default Button;
