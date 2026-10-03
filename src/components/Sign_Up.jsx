import {useState} from 'react';import {useNavigate} from 'react-router-dom';import {API} from '../api.js';
export default function Sign_Up(){
  const [f,setF]=useState({role:'patient',name:'',email:'',phone:'',password:''});const [err,setErr]=useState('');const nav=useNavigate();
  const ch=e=>setF({...f,[e.target.name]:e.target.value});
  const submit=async e=>{e.preventDefault();setErr('');
    try{const r=await fetch(`${API}/api/auth/register`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(f)});
      const d=await r.json();if(!r.ok)return setErr(d.error||'Could not register');
      sessionStorage.setItem('auth-token',d.authtoken);sessionStorage.setItem('name',f.name);nav('/');window.location.reload();
    }catch{setErr('Server not reachable.')}};
  return(<form className="card form" onSubmit={submit}><h2>Sign Up</h2>
    <label>Role<select name="role" value={f.role} onChange={ch}><option value="patient">Patient</option><option value="doctor">Doctor</option></select></label>
    <label>Name<input name="name" required value={f.name} onChange={ch}/></label>
    <label>Email<input name="email" type="email" required value={f.email} onChange={ch}/></label>
    <label>Phone<input name="phone" type="tel" required pattern="[0-9]{10}" title="10 digits" value={f.phone} onChange={ch}/></label>
    <label>Password<input name="password" type="password" minLength="6" required value={f.password} onChange={ch}/></label>
    {err&&<p className="err" role="alert">{err}</p>}
    <div className="row"><button className="btn">Submit</button><button type="reset" className="btn ghost" onClick={()=>setF({role:'patient',name:'',email:'',phone:'',password:''})}>Reset</button></div>
  </form>);
}
