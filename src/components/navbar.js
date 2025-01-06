import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">JESPER BARBER HAIR STUDIO</h1>
        <ul className="flex space-x-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/profil">Profil</Link>
          </li>
          <li>
            <Link to="/reservasi">Reservasi</Link>
          </li>
          <li>
            <Link to="/riwayat">Riwayat Reservasi</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;