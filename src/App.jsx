import './App.css';
import { useState } from 'react';
import { PageLoading } from './page/loading/loading';
import { PageSearch } from './page/search/search';
import { PageNotFound } from './page/notFound/notFound'
import { PageView } from './page/view/view';

function AppWeather() {
  const [weather, setWeather] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  console.log(weather)

  const handleSubmit = (e) => {
    e.preventDefault()
    const location = e.target.sendLocation.value
    if( location === "") return
    loadDataCurrent(location)
  }

  const loadDataCurrent = (location = "london") => {
    const key = process.env.REACT_APP_KEY
    const url = process.env.REACT_APP_URL
    setIsLoading(true)
    fetch(url + "&key=" + key + "&q=" + location)
    .then(response => response.json())
    .then(data => {
      setTimeout(() => {
        setIsLoading(false)
        setWeather(data)
      },600)
    })
    .catch(err => {
      alert("Ha habido un problema con la peticion: " + err)
      setIsLoading(false)
    })
  }

  if(isLoading) return <PageLoading />
  else if(!weather) return <PageSearch onSubmit={handleSubmit} />
  else if(weather.current) return <PageView weather={weather} onSubmit={handleSubmit} />
  else if(weather.error) return <PageNotFound weather={weather} />
}

export default AppWeather;
