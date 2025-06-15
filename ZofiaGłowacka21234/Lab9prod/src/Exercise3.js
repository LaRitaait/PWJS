import React, { useCallback, useState } from "react"

function Counter({ onLog }) {
  console.log("Counter zrenderowany")
  return <button onClick={onLog}>Pokaż licznik</button>
}

export default function Exercise3() {
  const [count, setCount] = useState(0)

  const onLog = useCallback(() => {
    console.log("Licznik:", count)
  }, [count])

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Zwiększ: {count}</button>
      <Counter onLog={onLog} />
    </div>
  )
}
