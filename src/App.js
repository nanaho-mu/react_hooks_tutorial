import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

const App=()=>{
  const [count,setCount]=useState(0)
  const increment=()=>{
    setCount(count+1)
  }
  const decrement=()=>{
    setCount(count-1)
  }
  const increment2=()=>{
    setCount(prev=>prev+1)
  }
  const reset=()=>{
    setCount(0)
  }
  const modify=()=>{
    setCount(prev=>prev*2)//1行で書いて｛｝を省略したらreturnが省略できる
  }
  const divide3=()=>{
    if(count%3===0){
      setCount(count/3)
    }
  }
  const divide3_2=()=>setCount(prev=>{
    return prev%3===0?prev/3:prev
  })
  

  return (
    <div>
      <div>count:{count}</div>
      <div>
       <button onClick={increment}>+1</button>
       <button onClick={decrement}>-1</button>
      </div>
      <div>
       <button onClick={increment2}>+1</button>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
        <button onClick={modify}>×2</button>
        <button onClick={divide3}>3の倍数の時だけ3で割る</button>
        <button onClick={divide3_2}>3の倍数の時だけ3で割る</button>
      </div>
    </div>

  );
}

export default App;
