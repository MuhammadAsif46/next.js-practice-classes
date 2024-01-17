// import Button from "@/components/button/Button";
// import Item from "@/components/item/Item";
// import List from "@/components/list/List";
import { useEffect, useState } from "react";

export default function Home (){

const [data,setData] = useState(0)

const [data2,setData2] = useState(0)

// Initilization,Updatetion,detroy/cleanup function :
// Use in UseEffect

  useEffect(()=> {
    console.log("called");
    const time = setTimeout(()=>{
      console.log("data");
    },1000)
    return()=>{
      clearTimeout(time)
    }
  },[data]);

  // useEffect(()=>{
  //   console.log("hello");
  //   const time1 = setTimeout(()=>{
  //     console.log("new hello");
  //   },1000)
  //   return()=>{
  //     clearTimeout(time1)
  //   }
  // },[data,data2])

  
  const increment = ()=>{
    setData((preState)=>{
      const d1 = preState + 1;
     return d1;
    });
  }
  
  const increment2 = ()=>{
    setData2((preState)=>{
      const d1 = preState + 1;
     return d1;
    });
  }
  
  // const increment2 = () =>{
  //   setData2((preState)=>{
  //    const p1 = preState + 1;
  //    return p1;
  //   })
  // }

  return (
    <div>
      {data}
      <button onClick={increment}>Add</button>
      {data2}
      <button onClick={increment2}>Add2</button>
    </div>
  )
}