import React, { useState } from "react"

function Counter({ onLog }) {
  console.log("Counter zrenderowany")
  return <button onClick={onLog}>Pokaż licznik</button>
}

export default function Exercise2() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Zwiększ: {count}</button>
      <Counter onLog={() => console.log("Licznik:", count)} />
    </div>
  )
}
