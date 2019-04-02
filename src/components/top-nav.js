import React from "react"
import { Link } from "gatsby"
import topnavStyles from "./css/topnav.module.css"

const ListLink = props => (
 <li className={topnavStyles.listItem}>
   <Link to={props.to}  className={topnavStyles.listLink}>{props.children}</Link>
 </li> 
)

export default ListLink