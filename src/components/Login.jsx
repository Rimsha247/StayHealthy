import {useState} from 'react';import {useNavigate} from 'react-router-dom';import {API} from '../api.js';
export default function Login(){
  const [f,setF]=useState({email:'',password:''});const [err,setErr]=useState('');const nav=useNavigate();
  const submit=async e=>{e.preventDefault();setErr('');
    try{const r=await fetch(`${API}/api/auth/login`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(f)});
      const d=await r.json();if(!r.ok)return setErr(d.error||'Login failed');
      sessionStorage.setItem('auth-token',d.authtoken);sessionStorage.setItem('name',d.name);nav('/');window.location.reload();
    }catch{setErr('Server not reachable.')}};
  return(<form className="card form" onSubmit={submit}><h2>Login</h2>
    <label>Email<input type="email" required value={f.email} onChange={e=>setF({...f,email:e.target.value})}/></label>
    <label>Password<input type="password" required value={f.password} onChange={e=>setF({...f,password:e.target.value})}/></label>
    {err&&<p className="err" role="alert">{err}</p>}
    <div className="row"><button className="btn">Login</button><button type="reset" className="btn ghost">Reset</button></div>
    <p>New here? <a href="/signup">Sign up</a></p></form>);
}
