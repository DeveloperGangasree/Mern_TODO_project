import React,{useState} from 'react'
import './Style.css'


// function Welcome(props) {
//     console.log(props)
//   return (
//     <div>
//       <h1>welcome .{props.userName}.page</h1>
//     </div>
//   )
// }
// function Welcome({ userName, pwdd }) {
//   //console.log(props)
//let istrue = true;
//   let isTrue = true;
//   const clickHandler=()=>{
//   let istrue=!istrue
// }

//   return (
//     <div>
//       <h1 style={{ backgroundColor: "yellow", color: "violet" }}>welcome .{userName}.page and password is {pwdd}</h1>
//       <p className="mypclass" style={IsTrue ? { backgroundColor: 'red' } : { backgroundColor: 'green' }}>This is the example for external styling</p>
//       <p className={IsTrue ? 'active':'not-active'}>This is the example for external styling with class selector</p>
//       <button onClick={()=>clickHandler()}>ClickMe</button>
//     </div>
//   )
// }
function Welcome(){

  const [view , setview]= useState(true)
  return(
  <div> 
{/* <input type="text" placeholder='Enter name' onChange={(e)=>setName(e.target.value)}/> */}
{view && <p>this is my task</p>}

<button onClick={()=>setview(true)}>Show</button>
<button onClick={()=>setview(false)}>Hide</button>
  </div>)
    
  
}
export default Welcome
