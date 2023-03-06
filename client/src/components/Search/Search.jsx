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
    setSearch('')
  }
  return (
    <form onSubmit={handleSubmit} className={styles.searchBar}>
      <input
        className={styles.input}
        type="search"
        placeholder="Search your favorite videogame"
        name={search}
        onChange={handleInputValue}
        value={search}
      />
      <button className={styles.submit} type="submit">
        Search
      </button>
    </form>
  )
}
