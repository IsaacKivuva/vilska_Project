import React from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import Account from "./Account";
import Movies from "./Movies";
import NavBar from "./NavBar";
import About from "./About";
import Reviews from "./Reviews"
import {ToastContainer} from 'react-toastify';

function App() {
  const location = useLocation();
  const isAccountPage = location.pathname === '/';
  return (
    <div>
      <ToastContainer theme='colored'></ToastContainer>
      {!isAccountPage && <NavBar />}
       <Routes>
       <Route path="/" element={<Account />} />
       <Route path="/movies" element={<Movies />} />
       <Route path="/about" element={<About />} />
       <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </div>
  );
}

export default App;
