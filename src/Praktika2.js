import React from 'react'
import { useState } from "react"

function Praktika2() { 
  const [like, setLike] = useState(0)
  const [dislike, setDislike] = useState(0)
  const [reset, setReset] = useState(0)

  function increment() {
      setLike(like + 1)
  }

  function increment2() {
    setDislike(dislike + 1)
}

function Reset() {
    setLike(0)
    setDislike(0)
}

  return (
    <div>
        <h1>Antra praktika</h1>
     <button onClick={increment}type="button" className="btn btn-success"> Like {like}</button>
     <button onClick={increment2}type="button" class="btn btn-danger">Hate {dislike}</button>
     <button onClick={Reset }type="button" class="btn btn-info">Reset</button>

    </div>
  )
}

export default Praktika2