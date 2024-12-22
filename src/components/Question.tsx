import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

export const Question = () => {
  return (
    <section className='relative py-16'>
        <div className='container mx-auto  items-center justify-between px-6 lg:px-36'>
        <div className="flex justify-between items-center">
            <h2 className="font-bold  text-3xl">
            <div className="text-blue-500 tracking-widest mb-3 text-base">FREQUENTLY ASKED QUESTION</div>
            🤔• Pertanyaan yang Sering Diajukan
            </h2>
            <button className="text-blue-600  text-lg flex items-center">
            Lihat Semua
            <FaChevronRight />
            </button>
        </div>
        <div className='mt-10'>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>Kenapa ya pembayaranku gagal banh? 😁</AccordionTrigger>
                    <AccordionContent>
                        Mungkin ada masalah dengan metode pembayaran yang digunakan, atau bisa juga karena ada pembatasan dari pihak bank atau sistem pembayaran. Coba cek kembali informasi pembayaran atau hubungi customer support.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Apakah rehan wangsaff adalah CEO dari Destinize? 😅😅😅</AccordionTrigger>
                    <AccordionContent>
                        No, Rehan Wangsaff is not the CEO of Destinize. The CEO of Destinize is Nishant Adhikari.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Kenapa harus memilih Destinize?</AccordionTrigger>
                    <AccordionContent>
                        Destinize menawarkan pengalaman perjalanan yang personal, mudah, dan menyenangkan. Kami menyediakan informasi lengkap tentang destinasi wisata, rekomendasi tempat, serta penawaran terbaik untuk mempermudah perjalanan Anda. Dengan antarmuka yang user-friendly, Destinize membantu Anda merencanakan perjalanan dengan cepat dan efisien.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>Afa iyah bang? Gapeduli 👆🏻😅</AccordionTrigger>
                    <AccordionContent>
                        Gak apa-apa, santai aja! 😅
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger>Apa rekomendasi tempat buat orang yang jomblo? 😥</AccordionTrigger>
                    <AccordionContent>
                        Coba pergi ke kafe yang nyaman atau tempat wisata yang menyenangkan, di mana bisa bertemu orang baru dan menikmati waktu sendiri.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
        </div>
    </section>
  )
}
