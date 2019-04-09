import React from "react"
import styles from "./css/gallery.module.scss"
import { Image } from "./Image.js"

const Gallerybox = props => (
  <figure className={styles.galleryBox}>
    <a href={props.href}>
      <h2 className={styles.galleryBoxTitle}>{props.title}</h2>
      <Image filename={props.filename}/>
    </a>
  </figure>
)

export default Gallerybox