import React from "react";
import whatsappLogo from "../assets/whatsapp.png"; // Path ke logo WhatsApp
import instagramLogo from "../assets/instagram.png"; // Path ke logo Instagram
import locationLogo from "../assets/location.png"; // Path ke logo Lokasi

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <div className="container mx-auto">
        <p className="mb-4">&copy; 2024 Haircut Reservation. All Rights Reserved.</p>
        <div className="flex justify-center space-x-6">
          {/* WhatsApp */}
          <a
            href="https://wa.me/+6289644147854"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80"
          >
            <img src={whatsappLogo} alt="WhatsApp" className="h-6 w-6" />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/your-instagram-username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80"
          >
            <img src={instagramLogo} alt="Instagram" className="h-6 w-6" />
          </a>

          {/* Location */}
          <a
            href="https://maps.app.goo.gl/yHCsbFekg9z3uy9s5?g_st=com.google.maps.preview."
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80"
          >
            <img src={locationLogo} alt="Location" className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
