import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Reservasi = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [countdown, setCountdown] = useState(null);
  const navigate = useNavigate();

  // Membuat handleSendReservation stabil menggunakan useCallback
  const handleSendReservation = useCallback(() => {
    const newReservation = {
      id: Date.now().toString(),
      name,
      date,
      time,
      paymentMethod,
    };
    const storedReservations =
      JSON.parse(localStorage.getItem("reservations")) || [];
    localStorage.setItem(
      "reservations",
      JSON.stringify([...storedReservations, newReservation])
    );
    alert("Reservasi berhasil dikirim!");
    resetForm();
    navigate("/riwayat");
  }, [name, date, time, paymentMethod, navigate]);

  useEffect(() => {
    if (countdown === 0) {
      handleSendReservation();
    }
    const timer =
      countdown > 0 &&
      setInterval(() => setCountdown((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [countdown, handleSendReservation]); // Tambahkan handleSendReservation ke array dependensi

  const handleEditReservation = () => {
    alert("Silakan edit data reservasi Anda.");
    setCountdown(null);
  };

  const handleCancelReservation = () => {
    alert("Reservasi telah dibatalkan.");
    resetForm();
    setCountdown(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Anda memiliki waktu 1 menit untuk mengedit atau membatalkan reservasi."
    );
    setCountdown(60); // Set waktu 1 menit untuk pengeditan atau pembatalan
  };

  const resetForm = () => {
    setName("");
    setDate("");
    setTime("");
    setPaymentMethod("");
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Formulir Reservasi</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Nama</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Tanggal</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Waktu</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Metode Pembayaran</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full border rounded px-3 py-2"
            required
          >
            <option value="">Pilih Metode Pembayaran</option>
            <option value="Cash">Cash</option>
            <option value="Transfer BRI">Transfer BRI</option>
            <option value="Transfer BNI">Transfer BNI</option>
            <option value="Transfer BCA">Transfer BCA</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        >
          Konfirmasi
        </button>
        {countdown !== null && (
          <div>
            <p className="text-sm text-red-500">
              Waktu tersisa: {countdown} detik
            </p>
            <button
              type="button"
              onClick={handleEditReservation}
              className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
            >
              Edit
            </button>
            <button
              type="button"
              onClick={handleCancelReservation}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Batalkan
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Reservasi;
