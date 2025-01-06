import React, { useEffect, useState } from "react";

const RiwayatReservasi = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const storedReservations = JSON.parse(localStorage.getItem("reservations")) || [];
    setReservations(storedReservations);
  }, []);

  const handleDelete = (id) => {
    const updatedReservations = reservations.filter((reservation) => reservation.id !== id);
    setReservations(updatedReservations);
    localStorage.setItem("reservations", JSON.stringify(updatedReservations));
    alert("Reservasi berhasil dihapus.");
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Riwayat Reservasi</h2>
      {reservations.length === 0 ? (
        <p>Tidak ada riwayat reservasi.</p>
      ) : (
        <ul>
          {reservations.map((reservation) => (
            <li key={reservation.id} className="mb-4">
              <p>
                <strong>Nama:</strong> {reservation.name}
              </p>
              <p>
                <strong>Tanggal:</strong> {reservation.date}
              </p>
              <p>
                <strong>Waktu:</strong> {reservation.time}
              </p>
              <p>
                <strong>Metode Pembayaran:</strong> {reservation.paymentMethod}
              </p>
              <button
                onClick={() => handleDelete(reservation.id)}
                className="bg-red-500 text-white px-4 py-2 rounded mt-2"
              >
                Hapus
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RiwayatReservasi;
