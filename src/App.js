
import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Keypad from './Components/Keypad';
const usedKeyCodes=[48,49,50,51,52,53,54,55,56,57,96,97,98,99,100,101,102,103,104,105,8,13,190,187,189,191,56,111,106,107,109];
const numbers=["0","1","2","3","4","5","6","7","8","9"];
const operators=["-","/","+","*"];

function App() {
  const [expression,setExpression]=useState("");
  const [result,setResult]=useState("");
  const [history,setHistory]=useState([]);
  const handleKeypress=(keyCode,key)=>{
   if(!keyCode){
    return;
   }
   if(!usedKeyCodes.includes(keyCode)){
    return;
    
   }
   if(numbers.includes(key)){
    if(key==="0"){
       if(expression.length===0){
        return;
       }}
       calculate(expression+key);
       setExpression(expression+key);
    
   }
   else if(operators.includes(key)){
    if(!expression){
      return;
    }
    const last=expression.slice(-1);
    if(operators.includes(last)|| last==="."){
      return;
    }
    setExpression(expression+key);
   }
   else if(key==="."){
    if(!expression){
      return;
    }
    const last=expression.slice(-1);
    if(!numbers.includes(last)){
      return;
    }
    setExpression(expression+key);

   }
   else if(keyCode===8){
    if(!expression){
      return;
    }
    calculate(expression.slice(0,-1));
    setExpression(expression.slice(0,-1));
   }
   else if(keyCode===13){
    if(!expression){
      return;
    }
    calculate(expression);
    const tempHistory=[...history];
    if (tempHistory>4){
      tempHistory=tempHistory.splice(0,1);
    }
    tempHistory.push(expression);
    setHistory(tempHistory);
   }
  }
  const calculate=(exp)=>{
    if(!exp) return;
    const last=exp.slice(-1);
    if(!numbers.includes(last)){
      exp=exp.slice(0,-1);
    }
    const answer=eval(exp).toFixed(8)+"";
    setResult(answer);
  }

  const clear=()=>{
    setExpression("");
    setResult("");
    
  }
  return (
    <div className="app"
    tabIndex="0"
    onKeyDown={(event)=>handleKeypress(event.keyCode,event.key)}>
    <div className="calculator">
    <Header expression={expression} result={result} history={history} clear={clear}/>
      <Keypad handleKeypress={handleKeypress}/>
    </div>
      
    </div>
    
  );
}

export default App;
