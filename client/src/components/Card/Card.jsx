import React from 'react'
import { Link } from 'react-router-dom'
import styles from './card.module.css'

export default function Card(props) {
  const { id, title, image, rating, genres, released, stores } = props
  const handleClick = () => {
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 100)
  }
  return (
    <div className={styles.cardContainer}>
      <Link to={`/detail/${id}`} onClick={handleClick}>
        <figure className={styles.image}>
          <img src={image} alt={title} className={styles.cardImage} />
          <figcaption className={styles.caption}>{rating}</figcaption>
        </figure>
        <div className={styles.cardContent}>
          <h2>{title}</h2>
          <div className={styles.genres}>
            <p>Genres:</p>
            <div className={styles.genre}>
              {genres?.map((genre, index) => (
                <span key={index}>{genre?.name}</span>
              ))}
            </div>
          </div>
          <div className={styles.stores}>
            <p>Stores:</p>
            <div className={styles.store}>
              {stores?.map((store, index) => (
                <span key={index}>{store?.store.name}</span>
              ))}
            </div>
          </div>
          <span>{new Date(released).toLocaleDateString()}</span>
        </div>
      </Link>
    </div>
  )
}
