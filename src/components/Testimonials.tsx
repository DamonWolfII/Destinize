import React from 'react'

export const Testimonials = () => {
    const testimonials = [
        {
          name: "Sandhika Galih",
          role: "Dosen di WPU",
          review: "Destinize membantu saya mencari tempat wisata baru di Indonesia dengan mudah.",
          image: "/sandhika.jpg",
        },
        {
          name: "Syauqizadan Khairan Khalaf",
          role: "Mahasiswa di WPU",
          review: "Destinize membantu saya mendapatkan jodoh!",
          image: "/syauqi.jpg",
        },
        {
          name: "Petrik Sesat",
          role: "Warga di Bikini Bottom",
          review: "Bikini Bottom menjadi sangat ramai didukung saat saya memasukannya di Destinize.",
          image: "/petrik.jpg",
        },
      ];
    return (
        <section className="relative py-16">
            <div className="container mx-auto flex  justify-between px-6 lg:px-36">
              <div className='text-center'>
              <p className="text-blue-500 tracking-widest font-bold mb-3">TESTIMONIAL DESTINIZE</p>
                <h2 className="font-bold  text-5xl  mb-5">💬 • Apa Kata Mereka Tentang Kami</h2>
                <p className="text-lg mb-10 w-3/4 mx-auto text-gray-500">
                  Penasaran apa saja review dari pengguna yang memakai aplikasi dan website Destinize buat nentuin kemana liburan mereka selanjutnya? Yuk cek dibawah!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-lg text-center shadow-lg py-6">
                    <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.role}</p>
                    <img
                        src='/images/stars.png'
                        alt='stars'
                        className='my-4 justify-center mx-auto'
                    />
                    <p className="mt-4 text-sm">{item.review}</p>
                    </div>
                ))}
                </div>
              </div>
            </div>
        </section>
    )
}
