import React from "react";

type DestinationCardProps = {
  image: string;
  title: string;
  location: string;
};

export const DestinationCard: React.FC<DestinationCardProps> = ({
  image,
  title,
  location,
}) => {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-md group">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
        <h3 className="text-white font-semibold text-lg">{title}</h3>
        <p className="text-gray-300 text-sm">{location}</p>
      </div>
    </div>
  );
};
