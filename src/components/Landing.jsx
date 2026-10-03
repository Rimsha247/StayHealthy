import {Link} from 'react-router-dom';
export default function Landing(){return(<section className="hero">
  <h1>Healthcare within reach, wherever you are.</h1>
  <p>StayHealthy is a non-profit platform that connects patients in remote areas with doctors online, any time of day.</p>
  <Link className="btn" to="/appointments">Find a doctor</Link></section>);}
