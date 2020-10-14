import React, { useState, useEffect } from 'react';
import './App.css';
import Profil from './Profil.js'

function App() {
  const [personnages,setPersonnages] = useState([]);

  useEffect(()=> {
    fetch('https://swapi.dev/api/people/')
      .then(result => result.json())
      .then(res => setPersonnages(res.results))
      .then(()=> console.log(personnages))
  }, [])

  const listePersonnages = personnages.map(personnage => <li><Profil name={personnage.name} height={personnage.height} birth_year={personnage.birth_year}/></li>)
  
  return (
    <div className="App">
      <ul>{listePersonnages}</ul>
    </div>
  );
}

export default App;
