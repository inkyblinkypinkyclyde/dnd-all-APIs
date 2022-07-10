import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './components/Home';
import Header from './components/Header'
import MonstersPage from './components/MonstersPage';


function App() {

  const [monsters, setMonsters] = useState([])
  const [selectedMonster, setSelectedMonster] = useState(null)


  useEffect(() => {
    getMonsters();
  }, [])

  const getMonsters = function () {
    fetch("https://api.open5e.com/monsters/")
      .then(results => results.json())
      .then(monstersData => setMonsters(monstersData.results))
    // .then(if (monstersData.next != null){
    //   fetch(monstersData.next)
    // })
  }

  const onMonsterClick = function (monster) {
    setSelectedMonster(monster)
  }


  return (
    <Router>
      < Header />
      <Routes>
        <Route
          exact path="/"
          element={
            < Home />
          } />
        <Route
          path="/monsters"
          element={
            < MonstersPage
              monsters={monsters}
              onMonsterClick={onMonsterClick}
              selectedMonster={selectedMonster}
            />}
        />
      </Routes>
    </Router>
  );
}

export default App;
