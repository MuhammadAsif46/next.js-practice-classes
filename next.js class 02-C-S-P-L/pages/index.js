import { useState } from "react";
import Button from "@/components/button/Button";
// import Greet from "@/components/greet/Greet";
import List from "@/components/list/List";

export default function Home() {

  // const arr = [
  //     "This is an Item 01",
  //     "This is an Item 02",
  //     "This is an Item 03"
  // ];

  const [arr, setArr] = useState([
    "this is an item",
    "this is an another item",
    "this is an another item 2"]);

  const addHandler = () => {
    // arr.push();  
    setArr([...arr, "New Item"]);
  };
  


  return (
    <div>
      {/* <Greet /> */}
      <List arr={arr} />
      <Button click={addHandler}>Add</Button>
      {/* <Button>Save</Button> */}
      {/* <Button name="Delete"/> */}
      {/* <Button name="Remove"/> */}
    </div>
  )
}
