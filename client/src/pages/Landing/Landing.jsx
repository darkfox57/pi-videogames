import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '../../assets/gamers-lobby.png'
import { getGames, getGenres } from '../../redux/actions/actions.js'
import styles from './landing.module.css'

export default function Landing() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getGames())
  }, [dispatch])
  return (
    <div className={styles.landing}>
      <img src={logo} alt="Game Lobby" className={styles.logo} />
      <div className={styles.titleContainer}>
        <h1
          className={`${styles.title} ${styles.glitch}`}
          data-text="Find the perfect game for every occasion!"
        >
          Find the perfect game for every occasion!
        </h1>
      </div>
      <Link to="/home">
        <button className="main-button">Get started</button>
      </Link>
      <div className={styles.socialContainer}>
        <i className="fa fa-instagram" id="apple"></i>
        <i className="fa fa-twitter" id="twitter"></i>
        <i className="fa fa-github-square github" id="github"></i>
        <i className="fa fa-linkedin-square" id="facebook"></i>
      </div>
    </div>
  )
}
