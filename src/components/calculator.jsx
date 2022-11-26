import { useState } from "react";
import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import './calculator.css';

function Calculator() {
  const [num, setNum] = useState(0);
  const [oldNum, setOldNum] = useState(0);
  const [operator, setOperator] = useState();
  function inputNum(event) {
    let input = event.target.value;
    if (num === 0 ){
        setNum(input)
    }else {
        setNum(num+input)
    }
  }
  function clear(){
    setNum(0)
    setOldNum(0)
  }
  function porcentagem(event){
    setNum(num/100)
  }
  function changeSign(){
    if (num>0){
        setNum(-num)
    }else{
        setNum(Math.abs(num))
    }
  }
  function operatorHandler(event){
    let operatorInput = event.target.value
    setOperator(operatorInput)
    setOldNum(num)
    setNum(0)
  }
  function calculate(){
    if (operator==="/"){
        setNum(parseFloat(oldNum)/parseFloat(num))
    } else if (operator==="X"){
        setNum(parseFloat(oldNum)*parseFloat(num))
    }else if (operator==="-"){
        setNum(parseFloat(oldNum)-parseFloat(num))
    }else if (operator==="+"){
        setNum(parseFloat(oldNum)+parseFloat(num))
    }
 }
  return (
    <div>
        <Box m={5}/>
        <Container maxWidth="xs">
            <div className="wrapper">
            <box m={12}/>
                <h1 className="conclusion">{num}</h1>
                <button onClick={clear}>AC</button>
                <button onClick={changeSign}>+/-</button>
                <button onClick={porcentagem}>%</button>
                <button className="orange" onClick={operatorHandler} value={"/"}>/</button>
                <button className="grey" onClick={inputNum} value={7}>7</button>
                <button className="grey" onClick={inputNum} value={8}>8</button>
                <button className="grey" onClick={inputNum} value={9}>9</button>
                <button className="orange" onClick={operatorHandler} value={"X"}>X</button>
                <button className="grey" onClick={inputNum} value={4}>4</button>
                <button className="grey" onClick={inputNum} value={5}>5</button>
                <button className="grey" onClick={inputNum} value={6}>6</button>
                <button className="orange" onClick={operatorHandler} value={"-"}>-</button>
                <button className="grey" onClick={inputNum} value={1}>1</button>
                <button className="grey" onClick={inputNum} value={2}>2</button>
                <button className="grey" onClick={inputNum} value={3}>3</button>
                <button className="orange" onClick={operatorHandler} value={"+"}>+</button>
                <button className="grey zero" onClick={inputNum} value={"0"}>0</button>
                {/* <button style={{visibility:"hidden"}}>k</button> */}
                <button className="grey" onClick={inputNum} value={"."}>,</button>
                <button className="orange" onClick={calculate}>=</button>
            </div>
        </Container>
    </div>
  )
  
}

export default Calculator;
