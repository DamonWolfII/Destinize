import React from "react";
import { FaPlay } from "react-icons/fa";

export const Hero = () => {
  return (
    <>
      <section className="relative py-16">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-36">
          <div className="text-center lg:text-left lg:max-w-lg">
            <div className="text-sm font-medium text-blue-600 bg-blue-100 inline-block px-3 py-1 rounded-full mb-4">
              ✈️ Explore the wonderful Indonesia!
            </div>
            <h1 className="text-4xl font-extrabold leading-snug md:text-5xl text-gray-900">
              Liburan & nikmati{" "}
              <span className="text-blue-600">tempat baru</span> di indonesia 🌴
            </h1>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Destinize membuat kamu selalu update terkait tempat liburan baru di
              Indonesia dengan mengikuti perkembangan para influencer di sosial
              media ✨
            </p>
            <div className="flex flex-wrap gap-4 mt-6 justify-center lg:justify-start">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Mulai sekarang →
              </button>
              <div className="flex items-center px-6 py-3">
                <button className="p-3 border-2 bg-white border-blue-500 text-blue-500 rounded-full">
                  <FaPlay size={20} />
                </button>
                <span className="ml-2">Putar Demo</span>
              </div>
            </div>
          </div>

          <div className="relative w-full md:w-1/2 mt-12 md:mt-0 lg:flex justify-end">
            <img
              src="/images/explorer.png"
              alt="Explorer"
              className="w-full mx-auto md:max-w-md"
            />
          </div>
        </div>
      </section>

      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center">
          {['partner-1', 'partner-2', 'partner-3', 'partner-4', 'partner-5'].map((partner) => (
            <img
              key={partner}
              src={`/assets/${partner}.svg`}
              alt={partner}
              className="grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500"
            />
          ))}
        </div>
      </div>
    </>
  );
};
