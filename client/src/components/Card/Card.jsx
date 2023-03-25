import React from 'react'
import { Link } from 'react-router-dom'
import { emptyStar, star, storesNames } from '../../utils/icons'
import {
  CaptionImg,
  CardContainer,
  CardContentBlock,
  CardContentGenres,
  CardContentStores,
  CardImage,
  ImageContainer,
} from './card.styles'

export default function Card(props) {
  const { id, title, image, rating, genres, index, stores } = props

  const stars = star.repeat(Math.floor(rating))
  const emptystar = emptyStar.repeat(Math.floor(5 - Math.floor(rating)))

  const handleClick = () => {
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 100)
  }

  return (
    <CardContainer index={index}>
      <Link to={`/detail/${id}`} onClick={handleClick}>
        <ImageContainer>
          <CardImage src={image} alt={title} />
          <CaptionImg
            dangerouslySetInnerHTML={{ __html: stars + emptystar }}
          ></CaptionImg>
        </ImageContainer>
        <CardContentBlock>
          <h2>{title}</h2>
          <CardContentGenres>
            {genres?.slice(0, 3).map((genre, index) => (
              <span key={index}>{genre?.name}</span>
            ))}
          </CardContentGenres>
          <CardContentStores>
            {stores?.map((store, index) => {
              const storeName = storesNames.find(
                (s) => s.name === store?.store.name
              )
              const displayName = storeName
                ? storeName.value
                : store?.store.name

              return <span key={index}>{displayName}</span>
            })}
          </CardContentStores>
        </CardContentBlock>
      </Link>
    </CardContainer>
  )
}
