import React, { useState } from 'react'
import styles from './pagination.module.css'

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 15
  const totalPages = Math.ceil(games.length / itemsPerPage)
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <div className={styles.pagination}>
      <button
        disabled={currentPage === 1}
        onClick={() => {
          setCurrentPage(currentPage - 1), handleClick()
        }}
      >
        Anterior
      </button>
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          className={`${styles.pageNumber} ${
            currentPage === pageNumber ? styles.active : ''
          }`}
          onClick={() => {
            setCurrentPage(pageNumber), handleClick()
          }}
        >
          {pageNumber}
        </button>
      ))}
      <button
        disabled={games.length <= currentPage * 15}
        onClick={() => {
          setCurrentPage(currentPage + 1)
          handleClick()
        }}
      >
        Siguiente
      </button>
    </div>
  )
}
