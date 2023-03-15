import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/game-lobby-logo.webp'
import styles from './success.module.css'

export default function Success() {
  return (
    <div className={styles.succesWrapper}>
      <img src={logo} alt="Game Lobby" className={styles.successLogo} />
      <h1
        className={`${styles.successTitle} ${styles.glitch}`}
        data-Text={'Your game has been added to our Database.'}
      >
        Your game has been added to our Database.
      </h1>
      <Link to="/home">
        <button className="main-button">Volver al home</button>
      </Link>
    </div>
  )
}
