import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useSearchParams } from 'react-router-dom'
import Card from '../../components/Card/Card'
import { searchGame } from '../../redux/actions/actions'
import styles from './results.module.css'

export default function SearchResults() {
  const dispatch = useDispatch()
  const searched = useSelector((state) => state.searched)

  const [searchParams] = useSearchParams()
  const search = searchParams.get('name')
  useEffect(() => {
    dispatch(searchGame(search))
  }, [search, dispatch])
  return (
    <div className={styles.cardsContainer}>
      {searched?.map((game) => (
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
  )
}
