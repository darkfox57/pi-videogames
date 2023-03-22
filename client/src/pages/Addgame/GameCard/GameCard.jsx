import React, { useEffect, useState } from 'react'
import { emptyStar, star } from '../../../utils/icons'
import styles from './gameCard.module.scss'

export default function GameCard(props) {
  const { gameData } = props
  const currentDate = new Date()
  const [data, setData] = useState({
    name: 'Game name',
    description: 'Game description',
    image: 'https://dummyimage.com/640x360/fff/aaa',
    launchDate: currentDate.toISOString().slice(0, 10),
    rating: '0',
    genres: ['Game genre'],
    platforms: ['Game platForm'],
  })

  useEffect(() => {
    const info = () => {
      if (gameData.name.length > 0)
        setData((data) => ({ ...data, name: gameData.name }))
      if (gameData.description.length > 0)
        setData((data) => ({ ...data, description: gameData.description }))
      if (gameData.image.length > 0)
        setData((data) => ({ ...data, image: gameData.image }))
      if (gameData.launchDate.length > 0)
        setData((data) => ({ ...data, launchDate: gameData.launchDate }))
      if (gameData.rating.length > 0)
        setData((data) => ({ ...data, rating: gameData.rating }))
      if (gameData.genres.length > 0)
        setData((data) => ({ ...data, genres: gameData.genres }))
      if (gameData.platforms.length > 0)
        setData((data) => ({ ...data, platforms: gameData.platforms }))
    }

    info()
  }, [gameData])

  const stars = star.repeat(Math.floor(data.rating))
  const emptystar = emptyStar.repeat(Math.floor(5 - Math.floor(data.rating)))
  return (
    <section className={styles.gameCardWrapper}>
      <h2 className={styles.gameCardTitle}>
        Preview your fricking awesome game.
      </h2>
      <div className={styles.addGameCard}>
        <figure className={styles.image}>
          <img src={data.image} alt={data.name} className={styles.cardImage} />
          <figcaption
            className={styles.caption}
            dangerouslySetInnerHTML={{ __html: stars + emptystar }}
          ></figcaption>
        </figure>
        <div className={styles.cardContent}>
          <h2>Name: {data.name}</h2>
          <p>Launch Date: {new Date(data.launchDate).toLocaleDateString()}</p>
          <p>Description: {data.description}</p>
          <div className={styles.genres}>
            <span>Genres</span>
            <div className={styles.genre}>
              {data.genres.map((genre, index) => (
                <span key={index}>{genre}</span>
              ))}
            </div>
          </div>
          <div className={styles.stores}>
            <span>Platforms</span>
            <div className={styles.platforms}>
              {data.platforms.map((platform, index) => (
                <span key={index}>{platform}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
