import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  filterByGenres,
  filterByOrigin,
  getGenres,
  orderNames,
  orderRating,
} from '../../redux/actions/actions'
import {
  FiltersContainer,
  FiltersWrapper,
  InputFilter,
  ResetBtn,
} from './filters.styles'

export default function Filters() {
  // obtener y usar generos
  const genres = useSelector((state) => state.genres)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getGenres())
  }, [])

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
      document.getElementsByName('orderByRating')[0].value = 'Default'
    }
    if (name === 'orderByRating') {
      dispatch(orderRating(value))
      document.getElementsByName('orderByName')[0].value = 'Default'
    }
    if (name === 'Origin') {
      dispatch(filterByOrigin(value))
      document.getElementsByName('filterByGenres')[0].value = 'Default'
      document.getElementsByName('orderByName')[0].value = 'Default'
      document.getElementsByName('orderByRating')[0].value = 'Default'
    }
  }
  const handleReset = () => {
    dispatch(filterByGenres('Default'))
    dispatch(orderNames('Default'))
    dispatch(orderRating('Default'))
    dispatch(filterByOrigin('Default'))
    document.getElementsByName('filterByGenres')[0].value = 'Default'
    document.getElementsByName('orderByName')[0].value = 'Default'
    document.getElementsByName('orderByRating')[0].value = 'Default'
    document.getElementsByName('Origin')[0].value = 'Default'
  }

  return (
    <FiltersWrapper>
      <FiltersContainer>
        <h2>Filters</h2>
        <div>
          <p>Sort by name</p>
          <InputFilter
            name="orderByName"
            defaultValue={'default'}
            onChange={handleFilter}
          >
            <option value="Default">--</option>
            {filterOrder.map((element) => (
              <option value={element.value} key={element.id}>
                {element.value}
              </option>
            ))}
          </InputFilter>
        </div>
        <div>
          <p>Sort by Rating</p>
          <InputFilter
            name="orderByRating"
            defaultValue={'default'}
            onChange={handleFilter}
          >
            <option value="Default">--</option>
            {filterOrder.map((element) => (
              <option value={element.value} key={element.id}>
                {element.value}
              </option>
            ))}
          </InputFilter>
        </div>
        <div>
          <p>Filter by Gender</p>
          <InputFilter
            name="filterByGenres"
            defaultValue={'default'}
            onChange={handleFilter}
          >
            <option value="Default">--</option>
            {genres.map((genre) => (
              <option key={genre.id} value={genre.name}>
                {genre.name}
              </option>
            ))}
          </InputFilter>
        </div>
        <div>
          <p>Filter by Origin</p>
          <InputFilter
            name="Origin"
            defaultValue={'default'}
            onChange={handleFilter}
          >
            <option value="Default">--</option>
            {filterOrigin.map((o) => (
              <option key={o.id} value={o.value}>
                {o.value}
              </option>
            ))}
          </InputFilter>
        </div>
        <ResetBtn onClick={handleReset}>Reset Filters</ResetBtn>
      </FiltersContainer>
    </FiltersWrapper>
  )
}
