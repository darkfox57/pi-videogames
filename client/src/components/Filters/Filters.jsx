import React from 'react'
import styles from './filters.module.css'

export default function Filters() {
  const selectOption = [
    {
      id: 1,
      value: 'Ascendent',
      label: 'Ascendent',
    },
    { id: 2, value: 'Descendent', label: 'Descendent' },
  ]

  const handleClick = (e) => {
    e.preventDefault()
    const { value, name } = e.target
    if (name === 'filter') {
      return dispatch(filterCards(value))
    }
    if (name === 'order') {
      return dispatch(orderCards(value))
    }
  }
  return (
    <section className={styles.filterSection}>
      <div>Filters</div>
      <div className={styles.selectors}>
        <select name="order" onChange={handleClick} defaultValue={'default'}>
          <option value="default" disabled>
            Select option ...
          </option>
          {selectOption.map((element) => (
            <option key={element.id} value={element.value}>
              {element.label}
            </option>
          ))}
        </select>
      </div>
    </section>
  )
}
