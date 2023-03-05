import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addGame, getGenres } from '../../redux/actions/actions'
import styles from './addgame.module.css'
import { validate } from './validation.js'

export default function AddGame() {
  const genres = useSelector((state) => state.genres)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getGenres())
  }, [dispatch])

  const platforms = [
    { name: 'PlayStation' },
    { name: 'Xbox' },
    { name: 'PC' },
    { name: 'Nintendo' },
    { name: 'iOS' },
    { name: 'Android' },
  ]

  const [gameData, setGameData] = useState({
    name: '',
    description: '',
    image: '',
    launchDate: '',
    rating: '',
    genres: [],
    platforms: [],
  })

  const [errors, setErrors] = useState({
    ...gameData,
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    let updatedGameData = { ...gameData }

    // Checkboxes: update the corresponding array of objects
    if (e.target.type === 'checkbox') {
      let selectedValues = updatedGameData[name]
      if (e.target.checked) {
        // Add the selected value to the array
        selectedValues.push(value)
      } else {
        // Remove the selected value from the array
        selectedValues = selectedValues.filter((val) => val !== value)
      }
      updatedGameData[name] = selectedValues
    } else {
      // Other inputs: update the value directly
      updatedGameData[name] = value
    }

    setGameData(updatedGameData)
    setErrors(validate(updatedGameData))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    // Validate the form data
    const errors = validate(gameData)
    setErrors(errors)

    // If there are no errors, submit the form
    if (Object.keys(errors).length === 0) {
      // Dispatch the addGame action
      dispatch(addGame(gameData))
    }
  }

  return (
    <>
      <div className={styles.addGameContainer}>
        <h2>Add your game to our database</h2>
        <form
          className={styles.addGameForm}
          onSubmit={handleSubmit}
          method="post"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleInputChange}
          />
          <span>{errors.name}</span>
          <input
            type="text"
            name="image"
            placeholder="image"
            onChange={handleInputChange}
          />
          <span>{errors.image}</span>
          <textarea
            type="text"
            name="description"
            placeholder="description"
            onChange={handleInputChange}
          />
          <span>{errors.description}</span>
          <input
            type="date"
            name="launchDate"
            placeholder="Launch Date"
            onChange={handleInputChange}
          />
          <span>{errors.launchDate}</span>
          <input
            type="range"
            name="rating"
            placeholder="rating"
            min="0"
            max="5"
            step="0.10"
            onChange={handleInputChange}
          />
          <span>{gameData.rating}</span>
          <span>{errors.rating}</span>
          <div className={styles.genres}>
            {genres.map((genre) => (
              <label key={genre.id}>
                <input
                  type="checkbox"
                  name="genres"
                  value={genre.name}
                  onChange={handleInputChange}
                />
                {genre.name}
              </label>
            ))}
            <span>{errors.genres}</span>
          </div>
          <div className={styles.platforms}>
            {platforms.map((p, index) => (
              <label key={index}>
                <input
                  type="checkbox"
                  name="platforms"
                  value={p.name}
                  onChange={handleInputChange}
                />
                {p.name}
              </label>
            ))}
            <span>{errors.platforms}</span>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}
