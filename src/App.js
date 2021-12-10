import './App.css';
import Poster from './Poster';
import Display from './Display'
import Form from './Form'
import { useState, useEffect } from 'react'

function App() {

  const [bounties, setBounties] = useState([])
  const [current, setCurrent] = useState({})

  useEffect(()=> {
    fetch('http://localhost:8000/bounties')
    .then(response=>response.json())
    .then(foundBounties=>{
      setBounties(foundBounties)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  // helper methods 
  const changeCurrent = (b) => {
    setCurrent(b)
  } 

  const posters = bounties.map(b => {
    return <Poster bounty={b} key={b.name} handleClick={changeCurrent}/>
  })


  return (
    <div className="App">
      <header className="App-header">
        <h1>Wanted</h1>
        <Display bounty={current}/>
      </header>
      <div className="allPosters">
        {posters}
      </div>
      <section className="App-header">
        <Form/>
      </section>
    </div>
  );
}

export default App;
