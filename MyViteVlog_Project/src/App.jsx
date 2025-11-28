import Welcome from "./Components/Welcome"
import Counter from "./Components/Counter"
import Example from "./Components/Example"
import {Route,Routes} from 'react-router-dom'
import Home from "./Screens/Home"



function App () {
  //let name ='ganga'
  return (
    // <h1>Hello welcome to my world</h1>
    // <div>
    //   <Welcome userName={name} />
  
    // <Welcome userName={'Gangss'} pwdd={'abcd'}></Welcome> 
    //  </div>
    //------------------
//     <div>
// <Counter></Counter>
// <Welcome></Welcome>
// <Example></Example>

//     </div>
<>

<Routes>
  <Route path="/" element={<Home></Home>}>
  </Route>
</Routes>
</>
   )
}
export default App