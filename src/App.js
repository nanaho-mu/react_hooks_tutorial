import React,{useState} from 'react';
import './App.css';

//propsを引数で受け取ることでコンポーネント内で使える
const App=(props)=>{
  const [state,setState]=useState(props)
  //↓のようにすることで分割代入。オブジェクトの要素を分けることが出来てstate.nameなどとしなくてよい。nameだけでかける。
  const {name,price}=state
  
  
  return (
   <div>

     <p>現在の{name}は、{price}円です</p>
     <button onClick={()=>setState({...state,price:price+1})}>+1</button>
     <button onClick={()=>setState({...state,price:price-1})}>-1</button>
     <button onClick={()=>setState(props)}>reset</button>

     {/* ...state,変更するオブジェクト内のプロパティ：変更後の値でいったんstateの内容を展開してその後変更内容を更新する */}
     <input value={name} onChange={(e)=>setState({...state,name:e.target.value})}/>
    </div>
    
  );
}

//propsを使う関数コンポーネント名.defaultPropsでpropsを定義できる
App.defaultProps={
  name:'',
  price:1000
}

export default App;
