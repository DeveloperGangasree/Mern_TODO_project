import React, { useState,useEffect } from 'react'
//import React,{useState} from 'react'

function Example() {
    
  const [count, setCount] = useState(0);
    useEffect(() => {
    console.log("Count updated:", count);
  },[count])

  return (
    <div>
            <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>

    </div>
  )
}

export default Example
