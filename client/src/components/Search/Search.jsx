import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './search.module.css'

export default function Search() {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const handleInputValue = (e) => {
    setSearch(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/search-results?name=${search}`)
    if (Object.keys(search).length) {
      e.target.reset
    }
  }
  return (
    <form onSubmit={handleSubmit} className={styles.searchBar}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search your favorite videogame"
        name={search}
        onChange={handleInputValue}
      />
      <button className={styles.submit} type="submit">
        Search
      </button>
    </form>
  )
}
