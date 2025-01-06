import React from "react";

const Notifications = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Notifikasi</h2>
      <div className="space-y-4">
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Reservasi Diterima</h3>
          <p className="text-sm text-gray-600">
            Reservasi Anda untuk pukul 14:00 telah dikonfirmasi.
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Reservasi Ditolak</h3>
          <p className="text-sm text-gray-600">
            Reservasi Anda untuk pukul 16:00 tidak tersedia. Silakan pilih waktu
            lain.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
