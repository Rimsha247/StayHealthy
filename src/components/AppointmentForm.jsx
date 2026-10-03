import {useState} from 'react';
export default function AppointmentForm({onSubmit,onClose}){
  const [f,setF]=useState({name:'',phone:'',date:'',time:''});const ch=e=>setF({...f,[e.target.name]:e.target.value});
  return(<form className="form" onSubmit={e=>{e.preventDefault();onSubmit(f)}}>
    <label>Name<input name="name" required value={f.name} onChange={ch}/></label>
    <label>Phone Number<input name="phone" type="tel" required pattern="[0-9]{10}" value={f.phone} onChange={ch}/></label>
    <label>Date of Appointment<input name="date" type="date" required value={f.date} onChange={ch}/></label>
    <label>Time Slot<select name="time" required value={f.time} onChange={ch}><option value="">Select</option><option>09:00</option><option>11:00</option><option>14:00</option><option>16:00</option></select></label>
    <div className="row"><button className="btn">Book now</button><button type="button" className="btn ghost" onClick={onClose}>Close</button></div></form>);
}
