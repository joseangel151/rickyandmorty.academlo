import React from 'react'
import './styles/locationInfo.css'

const LocationInfo = ({location}) => {

  
  return (
    <article className='card__location'>
      <h2 className='card__location-title'>{location?.name}</h2>
      <ul className='card__location-container'>
        <li className='card__location-list'><span className='card__span-list'>Type: </span>{location?.type}</li>
        <li className='card__location-list'><span className='card__span-list'>Dimension: </span>{location?.dimension}</li>
        <li className='card__location-list'><span className='card__span-list'>Population: </span>{location?.residents.length}</li>
      </ul>
      </article>
  )
}

export default LocationInfo