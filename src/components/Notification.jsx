import {useEffect,useState} from 'react';
export default function Notification(){
  const [msg,setMsg]=useState('');
  useEffect(()=>{const h=e=>{setMsg(e.detail);setTimeout(()=>setMsg(''),4000)};window.addEventListener('notify',h);return()=>window.removeEventListener('notify',h)},[]);
  return msg?<div className="toast" role="status">{msg}</div>:null;
}
