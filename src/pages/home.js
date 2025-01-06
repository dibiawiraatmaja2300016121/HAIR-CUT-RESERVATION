import React, { useState } from "react";
import { Link } from "react-router-dom";

// Path relatif yang benar untuk gambar
import TempatCukur from "../assets/tempatcukur.jpg";
import Image1 from "../assets/image1.jpg";
import Image2 from "../assets/image2.jpg";
import Image3 from "../assets/image3.jpg";

const Home = () => {
  const [bgColor, setBgColor] = useState("bg-white");

  const handleChangeBgColor = (colorClass) => {
    setBgColor(colorClass);
  };

  return (
    <div className={`container mx-auto p-4 ${bgColor}`}>
      <div
        className="bg-cover bg-center bg-no-repeat text-white p-6 rounded-lg shadow-lg mb-8"
        style={{
          backgroundImage: `url(${TempatCukur})`,
        }}
      >
        <h2 className="text-2xl font-bold text-left mb-4">
          Gaya rambut baru, semangat baru. Ayo, upgrade gayamu!
        </h2>
        <p className="text-left">
          "Selamat datang di JESPER BARBER HAIR STUDIO, tempat di mana
          penampilan terbaik Anda dimulai! Kami menghadirkan pengalaman cukur
          rambut yang tidak hanya rapi, tetapi juga stylish, sesuai dengan
          kepribadian dan gaya Anda. Dengan sentuhan tangan ahli dan produk
          berkualitas, kami memastikan setiap pelanggan pulang dengan senyuman
          puas dan percaya diri. Di sini, kenyamanan Anda adalah prioritas kami,
          dari layanan ramah hingga suasana toko yang modern dan cozy. Jangan
          ragu untuk mencoba, karena rambut Anda pantas mendapatkan yang
          terbaik."
        </p>
      </div>

      <div
        className="p-6 rounded-lg shadow-lg mb-8 text-white"
        style={{
          background:
            "linear-gradient(to right, rgb(187, 197, 214), rgb(175, 189, 237))",
        }}
      >
        <h3 className="text-xl font-bold text-left mb-4">Jam Operasional</h3>
        <ul className="text-left">
          <li className="flex items-center gap-2">
            Senin - Sabtu: <strong>10.00 - 21.00</strong>
          </li>
          <li className="flex items-center gap-2">
            Minggu: <strong>Tutup</strong>
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        <img src={Image1} alt="Gaya Rambut 1" className="custom-image" />
        <img src={Image2} alt="Gaya Rambut 2" className="custom-image" />
        <img src={Image3} alt="Gaya Rambut 3" className="custom-image" />
      </div>

      <div className="text-center">
        <Link
          to="/reservasi"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
        >
          Buat Reservasi
        </Link>
      </div>

      <div className="flex justify-center space-x-4 mt-8">
        <button
          onClick={() => handleChangeBgColor("bg-white")}
          className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400 transition duration-300"
        >
          Putih
        </button>
        <button
          onClick={() => handleChangeBgColor("bg-blue-100")}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
        >
          Biru Muda
        </button>
        <button
          onClick={() => handleChangeBgColor("bg-yellow-100")}
          className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600 transition duration-300"
        >
          Kuning Muda
        </button>
        <button
          onClick={() => handleChangeBgColor("bg-green-100")}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300"
        >
          Hijau Muda
        </button>
      </div>
    </div>
  );
};

export default Home;
