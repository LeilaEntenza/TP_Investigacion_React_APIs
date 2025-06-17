import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [image, setImage] = useState();
  const [actividad, setActividad] = useState();

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

  const getActivity = (api) =>{
    axios.get(api)
    .then(function (response) {
      const objeto = response.data;
      setActividad(objeto.slip.advice)
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  useEffect(() =>{
    getImage('https://api.thecatapi.com/v1/images/search');
    getActivity('https://api.adviceslip.com/advice');
  }, [])
  return (
    <div className='gatos'>
      <h1>Gato consejero</h1>
    <img width='20%' src={image}/>
    <p>El consejo de este gato es: {actividad}</p>
    </div>
  )
}

export default App
