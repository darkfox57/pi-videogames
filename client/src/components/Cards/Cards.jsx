import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGames, setCurrentPage } from '../../redux/actions/actions'
import Error from '../../utils/Error'
import Loading from '../../utils/Loading'
import Card from '../Card/Card'
import {
  CardContainer,
  CardsContainer,
  CardsWrapper,
  PageNumber,
  Pagination,
} from './Cards.styles'

const NoResults = () => <div>we have not found games.</div>

export default function Cards() {
  const dispatch = useDispatch()
  const currentPage = useSelector((state) => state.currentPage)
  const error = useSelector((state) => state.error)
  const [loading, setLoading] = useState(false)

  const games = useSelector((state) => state.filtredGames)

  useEffect(() => {
    dispatch(getGames()).finally(() => {
      setLoading(false)
    })
  }, [])

  const itemsPerPage = 15
  const totalPages = Math.ceil(games.length / itemsPerPage)
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1)

  const handleClick = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
  }

  return (
    <CardsWrapper>
      <CardsContainer>
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
            <Card
              index={index}
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
      </CardsContainer>
      {!loading ? (
        <Pagination>
          <button
            disabled={currentPage === 1}
            onClick={() =>
              dispatch(setCurrentPage(currentPage - 1), handleClick())
            }
          >
            Anterior
          </button>
          {pageNumbers.map((pageNumber) => (
            <PageNumber
              key={pageNumber}
              disabled={currentPage === pageNumber}
              onClick={() =>
                dispatch(setCurrentPage(pageNumber), handleClick())
              }
            >
              {pageNumber}
            </PageNumber>
          ))}
          <button
            disabled={games.length <= currentPage * 15}
            onClick={() =>
              dispatch(setCurrentPage(currentPage + 1), handleClick())
            }
          >
            Siguiente
          </button>
        </Pagination>
      ) : (
        ''
      )}
    </CardsWrapper>
  )
}
