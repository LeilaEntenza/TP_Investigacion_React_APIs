import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [image, setImage] = useState();
  const [activity, setActivity] = useState();
  const [loading,setLoading] = useState(false);

  useEffect(() =>{
    getImage('https://api.thecatapi.com/v1/images/search');
    getActivity('https://api.adviceslip.com/advice');
  }, [])

  const getImage = (api) =>{
    setLoading(true);
    axios.get(api)
    .then(function (response) {
      console.log(response)
      const objeto = response.data[0];
      setImage(objeto.url)
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function(){
      setLoading(false);
    })
  }

  const getActivity = (api) =>{
    axios.get(api)
    .then(function (response) {
      const objeto = response.data;
      setActivity(objeto.slip.advice)
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  return (
    <div className='gatos'>
      {loading && <h1>Loading....</h1>}
    <img width='20%' src={image}/>
    <p>El consejo para este gato es: {activity}</p>
    <button onClick={()=>getActivity('https://api.adviceslip.com/advice')}>Cambiar consejo</button>
    </div>
  )
}

export default App
