import React from 'react'
import { Link } from 'react-router-dom'
import { emptyStar, star, storesNames } from '../../utils/icons'
import styles from './card.module.scss'

export default function Card(props) {
  const { id, title, image, rating, genres, released, stores } = props

  const stars = star.repeat(Math.floor(rating))
  const emptystar = emptyStar.repeat(Math.floor(5 - Math.floor(rating)))

  const handleClick = () => {
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 100)
  }

  return (
    <Link to={`/detail/${id}`} onClick={handleClick}>
      <figure className={styles.image}>
        <img src={image} alt={title} className={styles.cardImage} />
        <figcaption
          className={styles.caption}
          dangerouslySetInnerHTML={{ __html: stars + emptystar }}
        ></figcaption>
      </figure>
      <div className={styles.cardContent}>
        <h2>{title}</h2>
        <div className={styles.genres}>
          <div className={styles.genre}>
            {genres?.slice(0, 3).map((genre, index) => (
              <span key={index}>{genre?.name}</span>
            ))}
          </div>
        </div>
        <div className={styles.stores}>
          {stores?.map((store, index) => {
            const storeName = storesNames.find(
              (s) => s.name === store?.store.name
            )
            const displayName = storeName ? storeName.value : store?.store.name

            return <span key={index}>{displayName}</span>
          })}
        </div>
      </div>
    </Link>
  )
}
