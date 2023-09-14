import React from "react";
import {Route, Routes} from "react-router-dom";
import Account from "./Account";
import Movies from "./Movies";
import NavBar from "./NavBar";
import About from "./About";
import Reviews from "./Reviews"

function App() {
  
  return (
    <div>
      <NavBar />
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
