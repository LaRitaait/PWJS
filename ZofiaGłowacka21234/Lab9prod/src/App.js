import React from "react"
import Exercise1 from "./Exercise1"
import Exercise2 from "./Exercise2"
import Exercise3 from "./Exercise3"
import Exercise4 from "./Exercise4"
import './App.css'

export default function App() {
  return (
    <div className="App">
       <header>
        <h1>Laboratorium 9 - React</h1>
      </header>
      <h1>Ćwiczenie 1: Prosta referencja do funkcji</h1>
      <Exercise1 />
      <hr />
      <h1>Ćwiczenie 2: Problem z nową referencją</h1>
      <Exercise2 />
      <hr />
      <h1>Ćwiczenie 3: Rozwiązanie z useCallback</h1>
      <Exercise3 />
      <hr />
      <h1>Ćwiczenie 4: useCallback z tablicą jako zależnością</h1>
      <Exercise4 />
    </div>
  )
}
