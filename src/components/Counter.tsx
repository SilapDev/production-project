import React, { useState } from 'react'
import classes from "./Counter.module.scss"

export const Counter = () => {

    const [count, setCount] = useState(0)

  return (
    <div>
        <h1>value: {count}</h1>
        <button className={classes.button}  onClick={()=>setCount(count+1)} >increment</button>
    </div>
  )
}
