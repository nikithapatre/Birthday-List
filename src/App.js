import React, {useState} from "react";
import data from "./data";
import List from "./List"; 

function App() {

const [people, setPeople] = useState(data)

const handleClick = () => {
       setPeople([])
   } 
 return <main>
     <section>
         <h3>Birthday List</h3>
         <List people={people}/>
         <button onClick={handleClick} >Clear</button>
     </section>
 </main>
 
 
}



export default App;