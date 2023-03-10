import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  filterByGenres,
  filterByOrigin,
  getGenres,
  orderNames,
  orderRating,
} from '../../redux/actions/actions'
import styles from './filters.module.css'

export default function Filters() {
  // obtener y usar generos
  const genres = useSelector((state) => state.genres)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getGenres())
  }, [dispatch])

  const filterOrder = [
    {
      id: 1,
      value: 'Ascendent',
      label: 'Ascendent',
    },
    {
      id: 2,
      value: 'Descendent',
      label: 'Descendent',
    },
  ]

  const filterOrigin = [
    {
      id: 1,
      value: 'Api',
      label: 'Api',
    },
    {
      id: 2,
      value: 'Created',
      label: 'Created',
    },
  ]

  const handleFilter = (e) => {
    e.preventDefault()
    const { value, name } = e.target
    if (name === 'filterByGenres') {
      dispatch(filterByGenres(value))
      document.getElementsByName('orderByName')[0].value = 'Default'
      document.getElementsByName('orderByRating')[0].value = 'Default'
      document.getElementsByName('Origin')[0].value = 'Default'
    }
    if (name === 'orderByName') {
      dispatch(orderNames(value))
      document.getElementsByName('filterByGenres')[0].value = 'Default'
      document.getElementsByName('orderByRating')[0].value = 'Default'
      document.getElementsByName('Origin')[0].value = 'Default'
    }
    if (name === 'orderByRating') {
      dispatch(orderRating(value))
      document.getElementsByName('filterByGenres')[0].value = 'Default'
      document.getElementsByName('orderByName')[0].value = 'Default'
      document.getElementsByName('Origin')[0].value = 'Default'
    }
    if (name === 'Origin') {
      dispatch(filterByOrigin(value))
      document.getElementsByName('filterByGenres')[0].value = 'Default'
      document.getElementsByName('orderByName')[0].value = 'Default'
      document.getElementsByName('orderByRating')[0].value = 'Default'
    }
  }

  return (
    <section className={styles.filterSection}>
      <div>Filters</div>
      <div className={styles.selectors}>
        <div className={styles.orderName}>
          <p>Sort by name</p>
          <select
            name="orderByName"
            defaultValue={'default'}
            onChange={handleFilter}
            className={styles.inputFilter}
          >
            <option value="Default">--</option>
            {filterOrder.map((element) => (
              <option value={element.value} key={element.id}>
                {element.value}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.orderRating}>
          <p>Sort by Rating</p>
          <select
            name="orderByRating"
            defaultValue={'default'}
            onChange={handleFilter}
            className={styles.inputFilter}
          >
            <option value="Default">--</option>
            {filterOrder.map((element) => (
              <option value={element.value} key={element.id}>
                {element.value}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.orderGender}>
          <p>Filter by Gender</p>
          <select
            name="filterByGenres"
            defaultValue={'default'}
            onChange={handleFilter}
            className={styles.inputFilter}
          >
            <option value="Default">--</option>
            {genres.map((genre) => (
              <option key={genre.id} value={genre.name}>
                {genre.name}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.filterOrigin}>
          <p>Filter by Origin</p>
          <select
            name="Origin"
            defaultValue={'default'}
            onChange={handleFilter}
            className={styles.inputFilter}
          >
            <option value="Default">--</option>
            {filterOrigin.map((o) => (
              <option key={o.id} value={o.value}>
                {o.value}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  )
}
