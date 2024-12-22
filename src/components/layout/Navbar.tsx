import React from 'react'
import { BsCart4 } from 'react-icons/bs'
import { CiSearch } from 'react-icons/ci'
import { FaChevronDown, FaGlobe, FaUser } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'

export const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between px-6 lg:px-36 py-4 bg-white shadow">
        <div className="flex items-center space-x-4">
          <img src="images/logo.png" alt="Logo" className="w-8 h-8 rounded-full" />
          <span className="text-lg font-bold">Destinize</span>
        </div>
        <div className="w-[40%]">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
            <CiSearch size={20}/>
            </div>
            <input
              type="search"
              id="default-search"
              className="w-full p-4 pl-10 text-sm text-textColor-smallText border bg-gray-200 border-none  rounded-3xl"
              placeholder="Cari apapun disini..."
            />
          </div>
			  </div>
        <div className="flex items-center space-x-4">
          <button className="text-sm font-light text-gray-400 flex gap-1"><FaGlobe className='' size={20}/>Bahasa Indonesia <FaChevronDown className='mt-1' /></button>
          <div className='flex gap-1'>
            <div className='content-center'>
              <div className='rounded-full p-3 bg-blue-200'>
                <FaLocationDot  className='text-blue-400'/>
              </div>
            </div>
            <div>
              <div className='text-gray-400 text-sm font-light'>Lokasi</div>
              <div className='text-blue-400 text-xl font-semibold flex gap-1'>Indonesia, Yogyakarta <FaChevronDown className='mt-1'/></div>
            </div>
          </div>
        </div>
      </nav>
      <div className="container flex justify-between items-center px-6 lg:px-36 py-4">
        <ul className="flex gap-10">
          {['Gunung', 'Pantai', 'Kuliner', 'Outbond', 'Sejarah', 'Edukasi', 'Romantis', 'Alam'].map((category) => (
            <li key={category}>
              <button className="flex gap-1 items-center text-sm text-gray-400 font-light">
                {category}
                <FaChevronDown className=" mt-1" />
              </button>
            </li>
          ))}
        </ul>
        <div className="flex gap-x-3">
          <button className="p-2 bg-blue-500 text-white rounded-full"><BsCart4 /></button>
          <button className="p-2 bg-gray-200 rounded-full"><FaUser /></button>
        </div>
      </div>
    </>
  )
}
