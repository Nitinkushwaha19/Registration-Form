import { useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Login";
import SignUp from "./Components/Signup";
import Index from "./Components/Index.jsx";
import UserContext from "./Components/context/UserProvider";
import './App.css'


function App() {

  const { user, loading } = useContext(UserContext);

  return (
    loading?<div>Loading...</div>:<>
      <Router>
        <Navbar user={user} />
        <Routes>
          user ? <Route path="/index"  element={<Index user = {user}/>} /> 
          <Route path="/" element = { <Navigate to="/login" /> } />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
