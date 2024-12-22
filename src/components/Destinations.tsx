import React from "react";
import { DestinationCard } from "@/components/DestinationCard";

export const Destinations = () => {
  const destinations = [
    {
      image: "/images/raja-ampat.jpg",
      title: "Raja Ampat",
      location: "Bali",
    },
    {
      image: "/images/labuan-bajo.jpg",
      title: "Labuan Bajo",
      location: "NTT",
    },
    {
      image: "/images/kawah-ijen.jpg",
      title: "Kawah Ijen",
      location: "Jawa Timur",
    },
    {
      image: "/images/bromo.jpg",
      title: "Bromo",
      location: "Jawa Timur",
    },
  ];

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-6 lg:px-36">
        {/* Heading */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            ✈️ Temukan Destinasi Favoritmu
          </h2>
          <a
            href="#"
            className="text-blue-600 hover:underline text-sm font-medium"
          >
            Lihat semua →
          </a>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <DestinationCard
              key={index}
              image={destination.image}
              title={destination.title}
              location={destination.location}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
