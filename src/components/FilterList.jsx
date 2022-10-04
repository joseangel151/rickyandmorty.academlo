import React from 'react'
import './styles/filterList.css'

const FilterList = ({suggestedList, setSearchInput}) => {

  console.log(suggestedList)
  const handleClíck = id => setSearchInput(id)
  
  
  return (
    <ul className='card__filter'>
       {
        suggestedList?.map(location =>(
          <li className='card__filter-list' onClick={() => handleClíck (location.id)} key={location.id}>{location.name}</li>
        ) )
       } 
    </ul>
  )
}

export default FilterList