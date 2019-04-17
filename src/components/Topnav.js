import React from "react"
import { Link } from "gatsby"
import headerStyles from "../styles/_header.module.scss"

const ListLink = props => (
 <li className={headerStyles.topnavListItem}>
   <Link to={props.to}  className={headerStyles.listLink}>{props.children}</Link>
 </li> 
)

export default ListLink