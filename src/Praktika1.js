import React, {useState} from 'react'


function Praktika1() {
    const [text, setText] = useState("Hello");
    const [btn, setBtn] = useState(false);

    function handleClick() {
        setBtn(true)
        setText("Task is done")
      }
  return (
    <div>
        <h1>Pirma praktika</h1>
        <h3>{text}</h3>
      <button onClick={handleClick} type="button" class={btn == false ? "btn btn-danger": "btn btn-primary"}>  {btn ? "done" : "undone"}</button>


    </div>
  )
}

export default Praktika1