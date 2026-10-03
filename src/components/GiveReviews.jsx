import {useState} from 'react';
export default function GiveReviews(){
  const [f,setF]=useState({name:'',review:'',rating:5});const [done,setDone]=useState(false);
  return(<form className="card form" onSubmit={e=>{e.preventDefault();setDone(true)}}><h2>Give your review</h2>
    <label>Name<input required disabled={done} value={f.name} onChange={e=>setF({...f,name:e.target.value})}/></label>
    <label>Review<textarea required disabled={done} value={f.review} onChange={e=>setF({...f,review:e.target.value})}/></label>
    <label>Rating<select disabled={done} value={f.rating} onChange={e=>setF({...f,rating:e.target.value})}>{[5,4,3,2,1].map(n=><option key={n}>{n}</option>)}</select></label>
    <button className="btn" disabled={done}>{done?'Review submitted':'Submit'}</button>
    {done&&<p role="status">Thank you, {f.name}. Your review has been saved.</p>}</form>);
}
