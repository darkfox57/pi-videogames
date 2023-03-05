import React from 'react'
import Cards from '../../components/Cards/Cards'
import Filters from '../../components/filters/Filters'
import styles from './home.module.css'

export default function home() {
  return (
    <section className={styles.homeSection}>
      <Filters />
      <Cards />
    </section>
  )
}
