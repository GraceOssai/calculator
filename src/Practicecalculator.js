import React, { useState } from 'react'

const Practicecalculator = () => {
  const [inputValue, setInputValue] = useState('');

  const displayFtn = (value) => {
    setInputValue(inputValue + value)
  }


  const calculateFtn = () => {
    let answer = eval(inputValue)
    setInputValue(answer);
  }


  const clearFtn = () => {
    setInputValue('')
  }
  return (
    <div>
      <form action="">
        <input type="text" value={inputValue}/>
        <span onClick={() => clearFtn('clear')}>clear</span>
        <span onClick={() => displayFtn('/')}>/</span>
        <span onClick={() => displayFtn('*')}>*</span>
        <span onClick={() => displayFtn('7')}>7</span>
        <span onClick={() => displayFtn('8')}>8</span>
        <span onClick={() => displayFtn('9')}>9</span>
        <span onClick={() => displayFtn('-')}>-</span>
        <span onClick={() => displayFtn('4')}>4</span>
        <span onClick={() => displayFtn('5')}>5</span>
        <span onClick={() => displayFtn('6')}>6</span>
        <span onClick={() => displayFtn('+')}>+</span>
        <span onClick={() => displayFtn('1')}>1</span>
        <span onClick={() => displayFtn('2')}>2</span>
        <span onClick={() => displayFtn('3')}>3</span>
        <span onClick={() => displayFtn('0')}>0</span>
        <span onClick={() => displayFtn('00')}>00</span>
        <span onClick={() => displayFtn('.')}>.</span>
        <span onClick={() => calculateFtn('=')}>=</span>
      </form>
    </div>
  )
}

export default Practicecalculator