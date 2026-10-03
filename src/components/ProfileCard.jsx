import {useState} from 'react';
export default function ProfileCard(){
  const [p,setP]=useState({name:sessionStorage.getItem('name')||'Guest',email:'',phone:''});const [edit,setEdit]=useState(false);
  return(<section className="card form"><h2>Your profile</h2>
    {edit?(<form className="form" onSubmit={e=>{e.preventDefault();sessionStorage.setItem('name',p.name);setEdit(false)}}>
      <label>Name<input value={p.name} onChange={e=>setP({...p,name:e.target.value})}/></label>
      <label>Email<input type="email" value={p.email} onChange={e=>setP({...p,email:e.target.value})}/></label>
      <label>Phone<input type="tel" value={p.phone} onChange={e=>setP({...p,phone:e.target.value})}/></label>
      <button className="btn">Save</button></form>)
    :(<div><p><b>Name:</b> {p.name}</p><p><b>Email:</b> {p.email||'Not set'}</p><p><b>Phone:</b> {p.phone||'Not set'}</p>
      <button className="btn" onClick={()=>setEdit(true)}>Edit</button></div>)}</section>);
}
