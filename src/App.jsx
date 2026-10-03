import {Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Notification from './components/Notification.jsx';
import Landing from './components/Landing.jsx';
import Sign_Up from './components/Sign_Up.jsx';
import Login from './components/Login.jsx';
import FindDoctorSearch from './components/FindDoctorSearch.jsx';
import GiveReviews from './components/GiveReviews.jsx';
import ProfileCard from './components/ProfileCard.jsx';
export default function App(){
  return(<>
    <Navbar/>
    <Notification/>{/* app-wide: sits above all routes */}
    <main>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/signup" element={<Sign_Up/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/appointments" element={<FindDoctorSearch/>}/>
        <Route path="/reviews" element={<GiveReviews/>}/>
        <Route path="/profile" element={<ProfileCard/>}/>
      </Routes>
    </main>
  </>);
}
