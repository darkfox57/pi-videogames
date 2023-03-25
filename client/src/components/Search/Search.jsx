import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SearchBar, SearchBarInput, SearchSubmit } from './search.styles'

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
    <SearchBar onSubmit={handleSubmit}>
      <SearchBarInput
        type="search"
        placeholder="Search your favorite videogame"
        name={search}
        onChange={handleInputValue}
        value={search}
      />
      <SearchSubmit type="submit">Search</SearchSubmit>
    </SearchBar>
  )
}
