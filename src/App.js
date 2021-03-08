import React, {useState} from "react";
import Accordion from "./components/Accordion";
const items = [
  {
    title:"what is React?",
    content:"React is front end javascript framework"
  },
  {
    title:"why use react?",
    content:"react is favorite js library among engineers"
  },
  {
    title:"How do you use React?",
    content:"you use react by creating Component"
  }
]
 const App = () => {

  return(
    <div>

<Accordion items={items} />

  </div>
)
}
export default App;
