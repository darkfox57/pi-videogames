import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getGame, resetGame } from '../../redux/actions/actions'
import Loading from '../../utils/Loading'
import styles from './detail.module.scss'

export default function Detail() {
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const game = useSelector((state) => state.game)
  const dispatch = useDispatch()

  useEffect(() => {
    setLoading(true)
    dispatch(getGame(id)).finally(() => {
      setLoading(false)
    })
  }, [id])

  useEffect(() => {
    dispatch(resetGame())
  }, [dispatch])
  return (
    <section className={styles.detailWrapper}>
      {loading && <Loading />}
      {!loading ? (
        <div className={styles.detailGame}>
          <div className={styles.mainContent}>
            <div className={styles.featuredImg}>
              <img src={game.image} alt={game.name} />
            </div>
            <div className={styles.content}>
              <h1>{game.name}</h1>
              <p>{game.description}</p>
              <div className={styles.data}>
                <p>
                  Launch Date: {new Date(game.launchdate).toLocaleDateString()}
                </p>
                <p>Clasification: {game.esrb_rating?.name}</p>
                <p>Rating: {game.rating}</p>
                <p>Votes: {game.ratings_count}</p>
              </div>
              <div className={styles.features}>
                <div className={styles.feature}>
                  <p>Platforms: </p>
                  {game.platforms?.map((platform, index) => (
                    <span key={index}>{platform.name}</span>
                  ))}
                </div>
                <div className={styles.feature}>
                  <p>Stores: </p>
                  {game.stores?.map((store, index) => (
                    <span key={index}>{store.name}</span>
                  ))}
                </div>
                <div className={styles.feature}>
                  <p>Genres: </p>
                  {game.genres?.map((genre, index) => (
                    <span key={index}>{genre.name}</span>
                  ))}
                </div>
                <div className={styles.feature}>
                  <p>Tags: </p>
                  {game.tags?.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.gallery}>
            {game.short_screenshots?.map((img, index) => (
              <img key={index} src={img} alt={`${img} ${index}`} />
            ))}
          </div>
          <div className={styles.trailers}>
            {game.trailers?.map((trailer, index) => (
              <video controls key={index} poster={trailer.cover}>
                <source src={trailer.media} type="video/mp4" />
                Tu navegador no soporta la reproducción de video.
              </video>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  )
}
