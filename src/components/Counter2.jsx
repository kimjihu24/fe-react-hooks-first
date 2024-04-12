import React from 'react'
import {useEffect}from'react';
import { useState } from 'react';

const Counter2 = () => {
  const [count, setCount]=useState(0);
 
const [Text,setText]=useState('');

  const increase = () => {
    setCount(count +1)
  }
  const word = (e) => {
    setText(e.target.value)}

  useEffect(()=>{
    return console.log('렌더링이 완료되었습니다.')
  },[])

useEffect(()=>{
  return console.log('카운트 값이 변경되었습니다.')
},[count])

useEffect(()=>{
  return console.log('텍스트 값이 변경되었습니다.')
},[Text])

  // 이벤트 핸들러부터 state까지 모두 스스로 작성해보시길 바랍니다!
  // 과연 어떤 state를 생성해주어야하고, 또 어떤 이벤트 핸들러가 필요할까요?
  // useState와 useEffect를 둘다 사용해주셔서 진행해주시면 됩니다!

  return (
    <div className="counter">
      <h>Counter 2</h>
      <hr></hr>
      <h3>{count}</h3>
      <button onClick={increase}>+1</button>
      <hr></hr>
      <input onChange={word}></input>
      <h3>{Text}</h3>
    </div>
  )
}

export default Counter2
