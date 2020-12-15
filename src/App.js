import React,{useState} from 'react';
import './App.css';

const App=(props)=>{
  const [name,setName]=useState(props.name)
  const [price,setPrice]=useState(props.price)
  const reset=()=>{
    setPrice(props.price)
    setName(props.name)
  }
  return (
   <div>

     <p>現在の{name}は、{price}円です</p>
     <button onClick={()=>setPrice(price+1)}>+1</button>
     <button onClick={()=>setPrice(price-1)}>-1</button>
     <button onClick={reset}>reset</button>
     <input value={name} onChange={(e)=>setName(e.target.value)}/>
    </div>
    
  );
}

App.defaultProps={
  name:'',
  price:1000
}

export default App;
