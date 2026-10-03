import {useState} from 'react';import {Link,useNavigate} from 'react-router-dom';
export default function Navbar(){
  const nav=useNavigate();const [open,setOpen]=useState(false);
  const [user,setUser]=useState(sessionStorage.getItem('name'));
  const logout=()=>{sessionStorage.clear();setUser(null);window.dispatchEvent(new CustomEvent('notify',{detail:'You have logged out.'}));nav('/login');};
  return(<header className="nav">
    <Link to="/" className="brand">StayHealthy</Link>
    <button className="burger" aria-label="Menu" aria-expanded={open} onClick={()=>setOpen(!open)}>☰</button>
    <nav className={open?'open':''} onClick={()=>setOpen(false)}>
      <Link to="/">Home</Link><Link to="/appointments">Appointments</Link><Link to="/reviews">Reviews</Link>
      {user?(<><Link to="/profile">{user}</Link><button className="btn ghost" onClick={logout}>Logout</button></>)
      :(<><Link to="/signup" className="btn">Sign Up</Link><Link to="/login" className="btn ghost">Login</Link></>)}
    </nav></header>);
}
