import React from 'react'
import {useState} from 'react';

function Example() {
    const [lightTheme, setLightTheme] = useState(false);
    function changeTheme() {
        setLightTheme(!lightTheme)
    }
  return (
    <div>
        <h1 className={lightTheme ? "text-danger" : "text-success"}>
            My theme is {lightTheme ? "red" : "green"}
        </h1>
        <button onClick={changeTheme} type="buton" className='btn btn-dark'>
            Change theme
        </button>
    </div>
  )
}

export default Example