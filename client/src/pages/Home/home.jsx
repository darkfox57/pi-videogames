import React from 'react'
import Cards from '../../components/Cards/Cards'
import Filters from '../../components/Filters/Filters'
import styles from './home.module.scss'

export default function home() {
  return (
    <section className={styles.homeSection}>
      <Filters />
      <Cards />
    </section>
  )
}
