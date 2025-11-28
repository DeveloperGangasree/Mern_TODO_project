import React,{ useState, useEffect} from 'react'
import './Style.css'

function Counter(){

const [count , setCount]= useState(0)
//let count = 0
  console.log(count)
  useEffect(()=>{
    console.log('loaded')
  },[count])
  return(
  <div> 
<button onClick={()=> setCount(count + 1)}> + </button>
<p>{count}</p>
<button onClick={()=> setCount(count - 1)}> - </button>

{/* <button onClick={()=> count + 1}> + </button>
<p>{count}</p>
<button onClick={()=> count - 1}> - </button> */}
  </div>)
    
  
}
export default Counter