import React from 'react'
import Cards from '../../components/Cards/Cards'
import Filters from '../../components/Filters/Filters'
import { HomeSection } from './home.styles'

export default function home() {
  return (
    <HomeSection>
      <Filters />
      <Cards />
    </HomeSection>
  )
}
