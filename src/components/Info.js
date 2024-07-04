import { useState} from 'react'


function Info() {

    // let count = 0;
   // count = 7;
   const [count , setCount] = useState(0);
   const increment = ()=>{
    setCount(count+1);
   }
   const decrement =()=>{
    if (count > 0 ){setCount(count-1);}
    else (setCount(count))
    
   }
    
  return (
    <div className="App">

     
     <button onClick={decrement} >-</button>
     <button>{count}</button>
     <button onClick={increment}>+</button>
     <button className="boxB">Add To Cart</button>
    </div>
  );
}

export default Info;