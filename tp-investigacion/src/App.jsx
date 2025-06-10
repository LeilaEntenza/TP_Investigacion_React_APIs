import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [image, setImage] = useState();

  const getImage = async () =>{
    const response = await axios.get(`https://api.thecatapi.com/v1/images/search`);
    setImage(response.data);
    console.log(response.data);
  }

  useEffect(() =>{
    getImage();
  }, [])
  return (
    <>
    <img src=''/>
    </>
  )
}

export default App
