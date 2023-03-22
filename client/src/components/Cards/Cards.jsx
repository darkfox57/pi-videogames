import React, { Suspense, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGames, setCurrentPage } from '../../redux/actions/actions'
import Error from '../../utils/Error'
import Loading from '../../utils/Loading'
import Card from '../Card/Card'
import styles from './cards.module.scss'

const NoResults = () => <div>we have not found games.</div>

export default function Cards() {
  const dispatch = useDispatch()
  const currentPage = useSelector((state) => state.currentPage)
  const error = useSelector((state) => state.error)
  const [loading, setLoading] = useState(false)
  const cardsRef = useRef([])

  const games = useSelector((state) => state.filtredGames)

  useEffect(() => {
    dispatch(getGames()).finally(() => {
      setLoading(false)
    })
  }, [])

  useEffect(() => {
    animateCards()
    // setTimeout(() => {
    //   removeAnimateCards()
    // }, 6000)
  })

  const animateCards = () => {
    cardsRef.current.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add(styles.animateCard)
      }, 200 * index)
    })
  }

  const itemsPerPage = 15
  const totalPages = Math.ceil(games.length / itemsPerPage)
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)

  const handleClick = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      animateCards()
    }, 100)
  }

  return (
    <section className={styles.cardsWrapper}>
      <div className={styles.cardsContainer}>
        {games.length === 0 ? (
          <Loading />
        ) : games.length === 0 && !loading ? (
          <NoResults />
        ) : (
          ''
        )}
        {games
          ?.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
          .map((game, index) => (
            <div
              key={game.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className={styles.cardContainer}
            >
              <Card
                id={game.id}
                title={game.name}
                image={game.image}
                rating={game.rating}
                genres={game.genres}
                released={game.launchDate}
                stores={game.stores}
              />
            </div>
          ))}
      </div>
      {cardsRef.current || !loading ? (
        <div className={styles.pagination}>
          <button
            disabled={currentPage === 1}
            onClick={() =>
              dispatch(setCurrentPage(currentPage - 1), handleClick())
            }
          >
            Anterior
          </button>
          {pageNumbers.map((pageNumber) => (
            <button
              key={pageNumber}
              className={`${styles.pageNumber} ${
                currentPage === pageNumber ? styles.active : ''
              }`}
              onClick={() =>
                dispatch(setCurrentPage(pageNumber), handleClick())
              }
            >
              {pageNumber}
            </button>
          ))}
          <button
            disabled={games.length <= currentPage * 15}
            onClick={() =>
              dispatch(setCurrentPage(currentPage + 1), handleClick())
            }
          >
            Siguiente
          </button>
        </div>
      ) : (
        ''
      )}
    </section>
  )
}
