import {useState} from 'react';import DoctorCard from './DoctorCard.jsx';
const DOCS=[{name:'Dr. Amina Rahman',speciality:'General Physician',experience:12,rating:4.8},{name:'Dr. Sara Malik',speciality:'Pediatrician',experience:9,rating:4.7},{name:'Dr. Omar Siddiqui',speciality:'Cardiologist',experience:15,rating:4.9},{name:'Dr. Nadia Khan',speciality:'Dermatologist',experience:7,rating:4.5},{name:'Dr. Bilal Ahmed',speciality:'Gynecologist',experience:11,rating:4.6}];
export default function FindDoctorSearch(){
  const [q,setQ]=useState('');
  const list=DOCS.filter(d=>(d.name+d.speciality).toLowerCase().includes(q.toLowerCase()));
  return(<section className="wrap"><h2>Find a doctor</h2>
    <input className="search" type="search" placeholder="Search by name or speciality" aria-label="Search doctors" value={q} onChange={e=>setQ(e.target.value)}/>
    <div className="grid">{list.map(d=><DoctorCard key={d.name} doc={d}/>)}</div>
    {!list.length&&<p>No doctors match "{q}". Try a different speciality.</p>}</section>);
}
