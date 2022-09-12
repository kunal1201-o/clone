import "./App.css";
import Navbar from "./component/Navbar";
import{Route,Routes  } from 'react-router-dom'
import Home from "./component/screen/Home";
import Login from "./component/screen/Login";
import Signup from "./component/screen/Signup";
import Profile from "./component/screen/Profile";
import Createpost from "./component/screen/Createpost";
function App() {
  return (
    <div className="App">
   

  
    <Navbar/>
    <Routes>
      
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/create" element={<Createpost/>}/>
    </Routes>
  
    </div>
  );
}

export default App;
