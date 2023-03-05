import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import logo from '../../assets/gamers-lobby.png'
import { getGenres } from '../../redux/actions/actions.js'
import styles from './landing.module.css'

export default function Landing() {
  return (
    <div className={styles.landing}>
      <img src={logo} alt="Game Lobby" className={styles.logo} />
      <h1 className={styles.title}>Find the perfect game for every occasion</h1>
      <button className="main-button">Get started</button>
    </div>
  )
}
