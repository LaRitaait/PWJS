import React, { useState, useCallback } from "react"

export default function Exercise4() {
  const [products, setProducts] = useState(["Jabłko", "Gruszka", "Banan"])

  const removeProduct = useCallback((item) => {
    setProducts(prev => prev.filter(p => p !== item))
  }, [])

  return (
    <div>
      <h2>Lista produktów:</h2>
      <ul>
        {products.map(item => (
          <li key={item}>
            {item} <button onClick={() => removeProduct(item)}>Usuń</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
