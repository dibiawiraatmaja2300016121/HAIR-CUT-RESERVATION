import React, { useEffect, useState } from "react";

const Profil = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  if (!user) {
    return <p>Tidak ada data pengguna. Silakan login terlebih dahulu.</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Profil Pengguna</h2>
      <p><strong>Nama:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Umur:</strong> {user.age}</p>
      <p><strong>Gender:</strong> {user.gender}</p>
    </div>
  );
};

export default Profil;
