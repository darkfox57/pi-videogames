import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/game-lobby-logo.webp'
import Search from '../Search/Search'
import styles from './header.module.css'

export default function Header() {
  const onSearch = () => {}

  const handleClick = (e) => {
    console.log(e.target)
    setTimeout(() => {
      window.scrollTo(0, 0)
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
              <i className="fa-solid fa-house"></i>
              <span>Home</span>
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
              <i className="fa-solid fa-plus"></i>
              <span>Add Game</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}
