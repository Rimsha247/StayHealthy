import {useState} from 'react';
// Instant Consultation form: Name and Phone Number only
export default function AppointmentFormIC({onSubmit}){
  const [name,setName]=useState('');const [phone,setPhone]=useState('');
  return(<form className="form" onSubmit={e=>{e.preventDefault();onSubmit?.({name,phone})}}>
    <label>Name<input required value={name} onChange={e=>setName(e.target.value)}/></label>
    <label>Phone Number<input type="tel" required pattern="[0-9]{10}" value={phone} onChange={e=>setPhone(e.target.value)}/></label>
    <button className="btn">Book now</button></form>);
}
