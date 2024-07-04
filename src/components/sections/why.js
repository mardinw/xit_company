import * as React from 'react'
import { CgProfile } from 'react-icons/cg';
import { FaChartPie, FaDatabase, FaLocationArrow } from 'react-icons/fa';
import { IoIosPeople } from 'react-icons/io';

export default function Why() {
    return (
        <>
        <div id='why' className='bg-white border-b py-8'>
            <div className="container mx-auto flex flex-wrap pt-4 pb-12">
                <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                Mengapa Memilih Kami?
                </h2>
                <div className="w-full mb-4">
                    <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                </div>
                <div className="w-full md:w-1/4 p-6 flex flex-col flex-grow flex-shrink">
                    <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                        <div className='flex mx-auto lg:mx-0 my-6 py-4 px-8 justify-center'>
                            <CgProfile size={60} className='text-cyan-400'/>
                        </div>
                        <div className="flex justify-center mb-4 w-full font-bold text-xl text-gray-800 px-6">
                            Keahlian Profesional
                        </div>
                        <p className="text-gray-800 text-base px-6 mb-5">
                            Tim kami terdiri dari para ahli di bidangnya masing-masing
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-1/4 p-6 flex flex-col flex-grow flex-shrink">
                    <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                        <div className='flex mx-auto lg:mx-0 my-6 py-4 px-8 justify-center'>
                            <FaChartPie size={60} className='text-orange-400'/>
                        </div>
                        <div className="flex justify-center mb-4 w-full font-bold text-xl text-gray-800 px-6">
                            Solusi yang Disesuaikan
                        </div>
                        <p className="text-gray-800 text-base px-6 mb-5">
                            Kami memahami bahwa setiap bisnis unik dan membutuhkan pendekatan yang berbeda.
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-1/4 p-6 flex flex-col flex-grow flex-shrink">
                    <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                        <div className='flex mx-auto lg:mx-0 my-6 py-4 px-8 justify-center'>
                            <FaLocationArrow size={60} className='text-blue-400'/>
                        </div>
                        <div className="flex justify-center mb-4 w-full font-bold text-xl text-gray-800 px-6">
                            Teknologi Terdepan
                        </div>
                        <p className="text-gray-800 text-base px-6 mb-5">
                            Kami menggunakan teknologi terbaru untuk memberikan hasil terbaik.
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-1/4 p-6 flex flex-col flex-grow flex-shrink">
                    <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                        <div className='flex mx-auto lg:mx-0 my-6 py-4 px-8 justify-center'>
                            <IoIosPeople size={60} className='text-green-400'/>
                        </div>
                        <div className="flex justify-center mb-4 w-full font-bold text-xl text-gray-800 px-6">
                            Dedikasi terhadap Klien
                        </div>
                        <p className="text-gray-800 text-base px-6 mb-5">
                            Kepuasan klien adalah prioritas utama kami.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}