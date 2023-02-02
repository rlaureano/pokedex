import React from 'react'
import { Link } from 'react-router-dom'
import styles from './footer.module.css'

import PikachuPic from '../assets/pikachu.png'
import LocationPic from '../assets/pointer.png'
import ItemsPic from '../assets/pokeball.png'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <Link to={'/pokemons'} className={styles.footerLink}>
            <img src={PikachuPic} alt="Pokeball" className={styles.footerIcon}/>
            Pokemons
        </Link>
        <Link to={'/items'} className={styles.footerLink}>
            <img src={LocationPic} alt="Pokeball" className={styles.footerIcon}/>
            Items
        </Link>
        <Link to={'/location'} className={styles.footerLink}>
            <img src={ItemsPic} alt="Pokeball" className={styles.footerIcon}/>
            Map
        </Link>
    </footer>
  )
}

export default Footer