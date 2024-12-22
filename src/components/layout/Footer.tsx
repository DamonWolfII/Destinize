import React from 'react'
import { CiLocationOn, CiMail } from 'react-icons/ci'
import { FaCopyright } from 'react-icons/fa'
import { FiPhoneCall } from 'react-icons/fi'
import { LiaFaxSolid } from 'react-icons/lia'

export const Footer = () => {
  return (
    <>
      <footer className="flex items-center justify-between px-6 lg:px-36 py-12 bg-gray-50">
        <div className="container mx-auto flex flex-col md:flex-row justify-between">
          <div>
            <img src="images/logo.png" alt="Logo" className="w-8 h-8 rounded-full mb-4" />
            <span className="text-lg font-bold ">Destinize</span>
            <p className="text-sm text-gray-600 mt-4 w-1/2">
              Destinize adalah website atau layanan aplikasi yang membantu kamu memilih atau merekomendasikan tempat yang dijuluki ‘hidden gems’ agar lebih dikenal dan ramai  
              <span className='text-blue-500 font-bold ml-2'>Baca Selengkapnya</span>
            </p>
            <div className='flex-row gap-4 text-gray-400 font-light text-lg mt-4'>
              <div className=" flex gap-2">
                <FiPhoneCall className='mt-1'/>
                <p>0851-5616-2840</p>
              </div>
              <div className="flex gap-2">
                <CiMail className='mt-1'/>
                <p>syaokay@gmail.com</p>
              </div>
              <div className="flex gap-2">
                <CiLocationOn className='mt-1'/>
                <p>Ciamis, Jawa Barat. Indonesia</p>
              </div>
              <div className="flex gap-2">
                <LiaFaxSolid className='mt-1'/>
                <p>+1-212-9876543</p>
              </div>
            </div>
          </div>
          {/* second half */}
          <div className="flex  md:flex-row w-1/2 justify-center items-center space-y-6 md:space-y-0 md:space-x-10">
            <div>
              <h4 className="text-lg font-semibold">Tentang</h4>
              <ul className="mt-2 space-y-3 text-sm text-gray-600">
                <li>Tentang Kami</li>
                <li>Blog</li>
                <li>Karir</li>
                <li>Pekerjaan</li>
                <li>Berita</li>
                <li>Galeri</li>
                <li>Afiliasi</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold">Support</h4>
              <ul className="mt-2 space-y-3 text-sm text-gray-600">
                <li>Kontak Kami</li>
                <li>Online Chat</li>
                <li>Call Center</li>
                <li>Whatsapp</li>
                <li>Telegram</li>
                <li>Tiket</li>
                <li>Bantuan</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold">FAQ</h4>
              <ul className="mt-2 space-y-3 text-sm text-gray-600">
                <li>Akun</li>
                <li>Order</li>
                <li>Pengembalian</li>
                <li>Organisir</li>
                <li>Pembayaran</li>
                <li>Copyright</li>
                <li>Bahasa</li>                
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="flex items-center justify-between px-6 lg:px-36 bg-gray-50 text-sm text-gray-600">
        <div className='flex gap-2'>
          <FaCopyright className='mt-1'/>
          <p>2021-2022, All Rights Reserved</p>
        </div>
        <div className='flex justify-between w-1/2'>
        <p>Tentang Kami</p>
        <p>Kontak</p>
        <p>Privasi & policy</p>
        <p>Sitemap</p>
        <p>Panduan Pengunaan</p>
        </div>
      </div>
    </>
  )
}
