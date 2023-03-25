import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  max-width: 100%;
  height: 75px;
  position: sticky;
  place-items: center;
  place-content: space-around;
  background-color: rgba(16, 18, 27, 0.4);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(223, 223, 223, 0.45);
  z-index: 100;
  display: flex;
  top: 0;
`

export const Logo = styled.img`
  width: auto;
  max-height: 80px;
  cursor: pointer;
`

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 30px;
`

export const Item = styled(NavLink)` 
  position: relative;
  min-width: 105px;
  text-align: center;
  color: #fff;
  -webkit-transition: color 0.3s;
  transition: color 0.3s;
  display: block;
  padding: 1em;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  &:hover {
    color: #be0d51;
  }
  &[aria-current]:not([aria-current="false"]) {
    color: #be0d51;
  }
`

export const Item__Link = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`
