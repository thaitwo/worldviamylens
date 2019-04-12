import React from "react"
import { Link } from "gatsby"
import buttonStyles from "../styles/button.module.scss"

const Button = props => (
  <Link to={props.to} className={buttonStyles.buttonSecondary}>{props.children}</Link>
)

export default Button