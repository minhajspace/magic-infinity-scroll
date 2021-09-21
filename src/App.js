import React,{useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {getCoinList} from './state/actions/CryptoAction'
import {coinService} from './services/Coinservice'


import './App.css';


const  App =() => {
   const disatch = useDispatch()
  useEffect(()=>{
    disatch(getCoinList())
},[])

const state = useSelector((state)=>state.crypto.coinList)
console.log("state===",state)

  return (
    <div className="App">
      <header className="App-header">
      

      </header>
    </div>
  );
}

export default App;