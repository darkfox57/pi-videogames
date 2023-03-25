import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/game-lobby-logo.webp'
import {
  MainBtn,
  SuccessLogo,
  SuccessTitle,
  SuccessWrapper,
} from './success.styles'

export default function Success() {
  return (
    <SuccessWrapper>
      <SuccessLogo src={logo} alt="Game Lobby" />
      <SuccessTitle>Your game has been added to our Database.</SuccessTitle>
      <Link to="/home">
        <MainBtn>Volver al home</MainBtn>
      </Link>
    </SuccessWrapper>
  )
}
