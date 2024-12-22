import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

export const TravelTipsSection = () => {
  return (
    <section className='relative py-16'>
        <div className='container mx-auto  items-center justify-between px-6 lg:px-36'>
        <div className="flex justify-between items-center">
            <h2 className="font-bold  text-3xl">
            <div className="text-blue-500 tracking-widest mb-3 text-base">MENGENAL DESTINIZE</div>
            🖼 • Galeri Pariwisata & Blog Travel
            </h2>
            <button className="text-blue-600  text-lg flex items-center">
            Lihat Semua
            <FaChevronRight />
            </button>
        </div>
        <div className="flex justify-between gap-x-8 my-12">
            <div className="w-1/4 bg-white rounded-lg shadow-lg">
            <div>
                <img
                src="/assets/dest-4.svg"
                alt=""
                className="object-cover object-center w-full h-[200px] rounded-t-lg"
                />
                <div className="p-8 flex flex-col gap-y-4">
                <p className=" text-sm font-light">26 DESEMBER 2021</p>
                <p className="title font-bold">Tips naik gunung Bromo Biar gak capek cyin 😥😛</p>
                <p className="text-[#737373] text-sm font-semibold">Jadi gini gann, anda tau bromo? yaaa gunung kann!</p>
                <p className="text-sm font-bold text-blue-600">Baca selengkapnya ...</p>
                </div>
            </div>
            </div>
            <div className="relative w-3/4 rounded-lg overflow-hidden">
            <img
                src="/assets/video.jpg"
                alt="thumb"
                className="object-cover object-center w-full h-full"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)14.58%,rgba(56,56,56,0.84)100%)]"></div>
            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary text-white p-10 z-10">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8"
                >
                <path
                    fillRule="evenodd"
                    d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                    clipRule="evenodd"
                />
                </svg>
            </button>
            </div>
        </div>

        <div
            className="w-full bg-[url('/assets/2.jpg'),linear-gradient(180deg,rgba(0,0,0,0.15)0%,rgba(56,56,56,0.84)100%)] bg-no-repeat bg-cover p-10 text-white rounded-lg"
        >
            <div className="w-1/2">
            <h6 className="text-2xl font-extrabold mb-7">Tips meminum air kawah biar lidah melepuh 😁</h6>
            <p className="font-semibold">Lidah melepuh? why nott, kawah bukan untuk dilihat kawan.. tapi untuk di minum.. rasakan kepanasan yang brutal 🔥</p>
            <div className="flex gap-x-5 my-5">
                <p>Google</p>
                <p>Trending</p>
                <p>Baru</p>
            </div>
            </div>
        </div>
        </div>
    </section>
  );
};
