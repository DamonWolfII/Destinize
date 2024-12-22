import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

export const Section = () => {
  return (
    <section className="  text-white flex items-center justify-center lg:px-36 px-8 py-16">
    <div className="container bg-blue-500  pl-6 flex items-center  rounded-lg">
      
      <div className="text-center md:text-left">
        <h2 className="text-2xl font-bold mb-4">
          Masih bingung cari tempat yang cocok? 🤔
        </h2>
        <p className="text-sm mb-6">
          Tenang, kami mempunyai fitur rekomendasi yang membantu kamu mencari
          tempat berlibur yang tepat dengan menjawab pertanyaan yang kami
          berikan.
        </p>
        <button className="bg-blue-500 text-white flex gap-1 font-semibold py-2 px-4 rounded-lg">
          Mulai sekarang <FaArrowRight className='mt-1' size={17}/>
        </button>
      </div>

      
      <div className=" md:mt-0">
        <img
          src="/images/lost.png" 
          alt="Woman searching for destinations"
          className="w-full max-w-xs rounded-lg"
        />
      </div>
    </div>
  </section>
  )
}
