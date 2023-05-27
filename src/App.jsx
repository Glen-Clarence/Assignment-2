import { useEffect } from 'react'
import './App.scss'
import Card from './assets/components/Card'
import axios from 'axios'

function App() {
  // useEffect(()=> {
  //   getData()
  // },[])
  // const getData = () => {
  //   axios.get('https://jsonplaceholder.typicode.com/users')
  //         .then(res => {
  //           console.log(res.data)
  //         })
  //         .catch(err => {
  //           console.log(err)
  //         })
  // }

  return (
    <>
      <Card />
    </>
  )
}

export default App
