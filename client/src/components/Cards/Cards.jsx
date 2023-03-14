import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import loadgif from '../../assets/loading-cat.gif'

import { getGames } from '../../redux/actions/actions'
import Card from '../Card/Card'
import styles from './cards.module.css'

export default function Cards() {
  const dispatch = useDispatch()
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(false)

  const games = useSelector((state) => state.filtredGames)

  useEffect(() => {
    setLoading(true)
    dispatch(getGames()).finally(() => {
      setLoading(false)
    })
  }, [dispatch])

  const itemsPerPage = 15
  const totalPages = Math.ceil(games.length / itemsPerPage)
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <section className={styles.cardsWrapper}>
      <div className={styles.cardsContainer}>
        {games.length === 0
          ? loading && (
              <img src={loadgif} alt="Loading..." className={styles.loading} />
            )
          : null}
        {games
          ?.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
          .map((game) => (
            <Card
              key={game.id}
              id={game.id}
              title={game.name}
              image={game.image}
              rating={game.rating}
              genres={game.genres}
              released={game.launchDate}
              stores={game.stores}
            />
          ))}
      </div>
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
    </section>
  )
}
