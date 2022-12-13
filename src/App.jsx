import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardResident from './components/CardResident'
import ErrorScream from './components/ErrorScream'
import FilterList from './components/FilterList'
import LocationInfo from './components/LocationInfo'
import getRandomNumber from './utils/getRandomNumber'
function App() {
const [location, setLocation] = useState()
const [searchInput, setSearchInput] = useState('')
const [suggestedList, setSuggestedList] = useState()
const [hasError, setHasError] = useState(false)

console.log(searchInput)

useEffect(() => {
  let id = getRandomNumber()
 if (searchInput) {
id = searchInput
 }
 
  const URL = `https://rickandmortyapi.com/api/location/${id}` 
axios.get(URL)
.then(res => {
  setHasError(false)
  setLocation(res.data)})
.catch(err => setHasError(true))
  }, [searchInput])

const handleSubmit = event =>{
  event.preventDefault()
  setSearchInput(event.target.idLocation.value)
}
const handleChange = event => {

  if(event.target.value === ''){
  return setSuggestedList()
} else {
  const URL = `https://rickandmortyapi.com/api/location?name=${event.target.value}` 
axios.get(URL)
.then(res => setSuggestedList(res.data.results))
.catch(err => console.log(err))
}
}

  return (
    <div className="App">
      <img className='card__image' src='images/The-best-Rick-And-Morty.jpg' alt="" />
      <img className='card__image-title' src="https://lyricstranslate.com/files/styles/artist/public/Rick_and_Morty_logo.png" alt="" />  
    <form className='card__form'  onSubmit={handleSubmit}>
      <div className='card__form-search'>
        <input className='card__input'  
        id='idLocation'
        placeholder='Enter another number from 1 to 126' type="text" 
        onChange = {handleChange}
        />
        <button className='btn__search'>Search</button>
      </div>
      <FilterList
      suggestedList={suggestedList}
      setSearchInput={setSearchInput}
      />
    </form>
    {
      hasError ?
      <ErrorScream/>
      :
      <>
    <LocationInfo location = {location}/>
    <div className='card-container'>
      {
      location?.residents.map(url => (
        <CardResident 
        key = {url}
        url= {url}
        />
      ))
      }
    </div>
    </>
    }
    </div>
    
  )
}

export default App
