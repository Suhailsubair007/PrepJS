
import { use } from "react";
import Counter from "./Counter"
import ParentToChilld from "./ParentToChilld";
import InputEqualOrNot from "./InputEqualOrNot";
import ToDo from "./ToDo";
function App() {

  // const array = ['suhail', 'akshay', 'ajmal'];
  const user = {
    name: "suhail subair",
    age: 22
  }

  return (
    <>


      {/* list rendering */}

      {/* <ul>
        {
          array.map((name, i) => (
            <li key={i}>{name}</li>
          ))
        }
      </ul> */}

      {/* <ParentToChilld/> passing sat from child to parent */}

      {/* <Counter name={user.name} age={user.age} /> */}

{/* <InputEqualOrNot/> */}
<ToDo/>
    </>
  )
}

export default App
