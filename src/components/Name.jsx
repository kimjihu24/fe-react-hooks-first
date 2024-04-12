import React from 'react'
import {useEffect}from'react';
import { useState } from 'react';


const Name = () => {
  const [name,setname]=useState('');
  const [nickname,setnickname]=useState('');
  
  const text1 = (e) => {
    setname(e.target.value)}
  const text2 = (e) => {
    setnickname(e.target.value)}

  return (
    <div className="name">
      <h>Name</h>
      <hr></hr>
      <input name="myName" placeholder="이름을 입력해주세요" onChange={text1}/>
      <input name="nickName" placeholder="닉네임을 입력해주세요" onChange={text2}/>
      <p>이름:{name}</p>
      <p>닉네임:{nickname}</p>
    </div>
  )
}

export default Name
