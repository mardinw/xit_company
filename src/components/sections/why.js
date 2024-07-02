import * as React from 'react'

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
                        <div className="w-full font-bold text-xl text-gray-800 px-6">
                            Keahlian Profesional
                        </div>
                        <p className="text-gray-800 text-base px-6 mb-5">
                            Tim kami terdiri dari para ahli di bidangnya masing-masing
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-1/4 p-6 flex flex-col flex-grow flex-shrink">
                    <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                        <div className="w-full font-bold text-xl text-gray-800 px-6">
                            Solusi yang Disesuaikan
                        </div>
                        <p className="text-gray-800 text-base px-6 mb-5">
                            Kami memahami bahwa setiap bisnis unik dan membutuhkan pendekatan yang berbeda.
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-1/4 p-6 flex flex-col flex-grow flex-shrink">
                    <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                        <div className="w-full font-bold text-xl text-gray-800 px-6">
                            Teknologi Terdepan
                        </div>
                        <p className="text-gray-800 text-base px-6 mb-5">
                            Kami menggunakan teknologi terbaru untuk memberikan hasil terbaik.
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-1/4 p-6 flex flex-col flex-grow flex-shrink">
                    <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                        <div className="w-full font-bold text-xl text-gray-800 px-6">
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