import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [image, setImage] = useState();

  const getImage = (api) =>{
    axios.get(api)
    .then(function (response) {
      const [objeto] = response.data;
      setImage(objeto.url)
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  useEffect(() =>{
    getImage('https://api.thecatapi.com/v1/images/search');
  }, [])
  return (
    <>
    <img width='100%' src={image}/>
    </>
  )
}

export default App
