import React from "react";

export const ReservationSection = () => {
  return (
    <section className="relative py-16">
      <div className=" container mx-auto flex  justify-between px-6 lg:px-36">
        {/* Left Section - Text Content */}
        <div className="w-1/2">
          <h6 className=" text-blue-500 tracking-widest mb-3">
            RESERVASI TEMPAT
          </h6>
          <h2 className="font-bold  text-3xl mb-10">
            Gak mau ngantri? Reservasi aja! 🤙🏻
          </h2>

          <div className="flex items-center gap-4 mb-7">
            <div className="icon bg-[#EFE0B4] rounded-2xl text-xl p-2">🔎</div>
            <div className="text-gray-400">
              <h6 className="font-bold text-xl mb-1">Cari tempat yang kamu mau</h6>
              <p className="text-base">
                Temukan destinasi selanjutnya yang akan kamu kunjungi dengan Destinize
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-7">
            <div className="icon bg-[#EFE0B4] rounded-2xl text-xl p-2">✏</div>
            <div className="text-gray-400">
              <h6 className="font-bold text-xl mb-1">Isi data dan konfirmasi pembayaran</h6>
              <p className="text-base">
                Tulis dan lengkapi data kamu untuk keperluan data booking
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-7">
            <div className="icon bg-[#EFE0B4] rounded-2xl text-xl p-2">😍</div>
            <div className="text-gray-400">
              <h6 className="font-bold text-xl mb-1">Tinggal masuk dan enjoy!</h6>
              <p className="text-base">
                Kamu bisa langsung masuk dan enjoy liburan kamu tanpa hambatan
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Image and Details */}
        <div className="w-1/2 relative ">
          <div className="absolute bottom-24 left-7 w-96 h-96 rounded-full bg-blue-500/60 blur-2xl -z-10"></div>

          {/* Bali Trip Card */}
          <div className="shadow-galeri w-96 h-auto bg-white rounded-3xl p-7">
            <img
              src="/assets/bali.jpg"
              alt="bali"
              className="w-full h-44 rounded-3xl object-cover object-center"
            />
            <div className="text-left">
              <h6 className="tracking-wide font-extrabold text-lg leading-6 mt-6">
                Liburan ke Bali 🚗
              </h6>
              <div className="flex gap-4 text-[#84829A] tracking-wide font-medium my-3">
                <p>14-29 Juni</p>
                <p>|</p>
                <p>by Shandika</p>
              </div>
              <div className="flex gap-3 my-3">
                <button className="rounded-full bg-[#F5F5F5] p-4">
                  <img src="/assets/icons/leaf 1.svg" alt="leaf" />
                </button>
                <button className="rounded-full bg-[#F5F5F5] p-4">
                  <img src="/assets/icons/map 1.svg" alt="map" />
                </button>
                <button className="rounded-full bg-[#F5F5F5] p-4">
                  <img src="/assets/icons/send 2.svg" alt="send" />
                </button>
              </div>
              <div className="flex justify-between mt-10">
                <div className="flex gap-2">
                  <img src="/assets/icons/building.svg" alt="build" />
                  <p className="text-[#84829A] tracking-tighter font-medium">
                    12 Orang pergi bersama
                  </p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-blue-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Ongoing Indonesia Trip */}
          <div className="absolute bottom-14 left-60 shadow-md w-72 h-auto bg-white rounded-3xl p-7 flex gap-3">
            <img
              src="/assets/indonesia.png"
              alt="Indonesia"
              className="object-cover object-left-bottom w-14 h-14 rounded-full"
            />
            <div className="w-full">
              <p className="text-[#84829A] mb-2 font-medium text-sm">Ongoing</p>
              <h6 className="font-bold text-xl text-[#080809] leading-6 mb-4">Jelajah Indonesia</h6>
              <p className="font-medium text-sm tracking-tight">
                <label className="text-blue-500">40%</label> completed
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                <div className="bg-blue-500 h-2 rounded-full w-2/5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
