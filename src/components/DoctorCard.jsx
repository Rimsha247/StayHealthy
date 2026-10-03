import {useState} from 'react';import AppointmentForm from './AppointmentForm.jsx';
export default function DoctorCard({doc}){
  const [booking,setBooking]=useState(false);const [appt,setAppt]=useState(null);
  const notify=m=>window.dispatchEvent(new CustomEvent('notify',{detail:m}));
  const book=d=>{setAppt(d);setBooking(false);notify(`Appointment booked with ${doc.name}.`)};
  const cancel=()=>{setAppt(null);notify('Appointment cancelled.')};
  return(<article className="card doc"><h3>{doc.name}</h3><p>{doc.speciality} · {doc.experience} yrs · ★ {doc.rating}</p>
    {appt?(<div><p><b>Booked:</b> {appt.date} at {appt.time} for {appt.name}</p><button className="btn danger" onClick={cancel}>Cancel appointment</button></div>)
    :booking?<AppointmentForm onSubmit={book} onClose={()=>setBooking(false)}/>
    :<button className="btn" onClick={()=>setBooking(true)}>Book appointment</button>}</article>);
}
