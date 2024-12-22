import React from 'react';

interface MapFeature {
  icon: JSX.Element;
  title: string;
  description: string;
}

export const Map: React.FC = () => {
  const features: MapFeature[] = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#323232"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: 'Populer di dekatmu',
      description:
        'Tempat pariwisata yang populer dan pasti dikenal semua orang didekatmu',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
        </svg>
      ),
      title: 'Favorit di dekatmu',
      description:
        'Tempat favorit dan disukai semua orang orang di sekitar daerah kamu',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z"
            clipRule="evenodd"
          />
          <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
        </svg>
      ),
      title: 'Ramai di dekatmu',
      description:
        'Spot yang paling ramai dikunjungi para warga sekaligus para wisatawan',
    },
  ];

  return (
    <section className='relative py-16'>
      <div className="container mx-auto flex  justify-between px-6 lg:px-36">
        <div className="text-center  ">
          <p className="text-blue-500 tracking-widest font-bold mb-3">CARI TEMPAT WISATA</p>
          <h2 className="font-bold  text-5xl  mb-5">🗺 • Cari Tempat Wisata Didekatmu</h2>
          <p className="text-lg mb-10 w-3/4 mx-auto text-gray-500">
            Fitur ini memungkinkan kamu untuk mencari tempat wisata atau tempat yang
            sedang populer di daerah kamu dengan begitu kamu akan selalu update dan
            gak kudet lagi 👍🏻
          </p>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15869514.886478122!2d106.61329409720412!3d-1.7667490544186284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c4c07d7496404b7%3A0xe37b4de71badf485!2sIndonesia!5e0!3m2!1sen!2sid!4v1687259362213!5m2!1sen!2sid"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="flex justify-between my-7 mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-x-5 p-2">
                <div className="self-start rounded-full bg-[#EFF2F6] p-5">
                  {feature.icon}
                </div>
                <div className="text-left ">
                  <p className="text-textColor-headline font-bold text-xl mb-2">
                    {feature.title}
                  </p>
                  <p className="font-medium  text-gray-400- w-1/2">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
