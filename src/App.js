import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Login from "./pages/login";
import Profil from "./pages/profil";
import Reservasi from "./pages/Reservasi";
import RiwayatReservasi from "./components/RiwayatReservasi";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/profil" element={<Profil />} />
        <Route path="/reservasi" element={<Reservasi />} />
        <Route path="/riwayat" element={<RiwayatReservasi />} />
      </Routes>
    </Router>
  );
};

export default App;