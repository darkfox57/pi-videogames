import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/game-lobby-logo.webp'
import Search from '../Search/Search'
import { Container, Item, Item__Link, Logo, NavList } from './header.styles.js'

export default function Header() {
  const handleClick = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
  }
  return (
    <Container>
      <Link to="/">
        <Logo src={logo} alt="Game Lobby App" />
      </Link>
      <Search />
      <nav>
        <NavList>
          <li>
            <Item onClick={handleClick} to="/home">
              <Item__Link>
                <i className="fa-solid fa-house"></i>
                <span>Home</span>
              </Item__Link>
            </Item>
          </li>
          <li>
            <Item onClick={handleClick} to="/add-game">
              <Item__Link>
                <i className="fa-solid fa-plus"></i>
                <span>Add Game</span>
              </Item__Link>
            </Item>
          </li>
        </NavList>
      </nav>
    </Container>
  )
}
