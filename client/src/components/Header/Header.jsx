import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/game-lobby-logo.webp'
import Search from '../Search/Search'
import styles from './header.module.scss'

export default function Header() {
  const onSearch = () => {}

  const handleClick = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
  }
  return (
    <div className={styles.header}>
      <Link to="/">
        <img src={logo} alt="Game Lobby App" className={styles.logo} />
      </Link>
      <Search />
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <NavLink
              onClick={handleClick}
              to="/home"
              className={({ isActive }) =>
                isActive ? `${styles.item} ${styles.current}` : styles.item
              }
            >
              <div className={styles.link}>
                <i className="fa-solid fa-house"></i>
                <span>Home</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={handleClick}
              to="/add-game"
              className={({ isActive }) =>
                isActive ? `${styles.item} ${styles.current}` : styles.item
              }
            >
              <div className={styles.link}>
                <i className="fa-solid fa-plus"></i>
                <span>Add Game</span>
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}
