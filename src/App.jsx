import { useEffect, useState } from 'react'
import './App.scss'
import Card from './assets/components/Card'
import axios from 'axios'

function App() {
  const [data, setData] = useState([])
  useEffect(()=> {
    getData()
  },[])
  const getData = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
          .then(res => {
            console.log(res.data)
            setData(res.data)
          })
          .catch(err => {
            console.log(err)
          })
  }

  return (
    <>
    <div className="cards-container">
    {
      data.map((el,idx)=> (
        <Card key={idx} name={el.name} company={el.company} address={el.address} website={el.website} />
      ))
    }
    </div>
    </>
  )
}

export default App
