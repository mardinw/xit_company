import * as React from 'react'

export default function Services() {
    return (
        <>
        <div id='services' className='bg-white border-b py-8'>
            <div className="container mx-auto flex flex-wrap pt-4 pb-12">
                <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                Services
                </h2>
                <div className="w-full mb-4">
                    <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                </div>
                <div className="w-full md:w-1/4 p-6 flex flex-col flex-grow flex-shrink">
                    <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                        <div className="w-full font-bold text-xl text-gray-800 px-6">
                            Call Center
                        </div>
                        <p className="text-gray-800 text-base px-6 mb-5">
                            Optimalkan komunikasi Anda dengan pelanggan melalui layanan Call Center kami yang andal.
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-1/4 p-6 flex flex-col flex-grow flex-shrink">
                    <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                        <div className="w-full font-bold text-xl text-gray-800 px-6">
                            Manajemen Data
                        </div>
                        <p className="text-gray-800 text-base px-6 mb-5">
                            Layanan Manajemen Data kami dirancang untuk membantu Anda mengelola, menyimpan, dan memanfaatkan data Anda secara efisien
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-1/4 p-6 flex flex-col flex-grow flex-shrink">
                    <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                        <div className="w-full font-bold text-xl text-gray-800 px-6">
                            Software Development
                        </div>
                        <p className="text-gray-800 text-base px-6 mb-5">
                            Kami menyediakan solusi pengembangan perangkat lunak yang dirancang untuk memenuhi kebutuhan bisnis Anda.
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-1/4 p-6 flex flex-col flex-grow flex-shrink">
                    <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                        <div className="w-full font-bold text-xl text-gray-800 px-6">
                            Web Application
                        </div>
                        <p className="text-gray-800 text-base px-6 mb-5">
                            Kami menawarkan layanan pengembangan aplikasi web yang memastikan bisnis Anda dapat diakses dan berfungsi dengan optimal di berbagai platform
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}