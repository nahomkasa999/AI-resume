'use client';
import { useState } from 'react';

export default function Card() {
    const myInfo = {
        fullName: 'Nahom Kasa',
        position: 'Expert Resume Maker & Freelancer',
        email: 'nahomkasa345@gmail.com',
        phone: '+251929333563',
        telegram: '@nahomkasa',
        description: 'I specialize in creating professional resumes that help you stand out. Reach out to me through any of the contact methods below to get started with your resume.'
    };

    return (
        <div className="flex align-center justify-center w-full min-h-screen py-12 px-4 bg-gray-50">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
                {/* Profile Header */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">
                        {myInfo.fullName}
                    </h2>
                    <p className="text-xl text-blue-600 mb-4">
                        {myInfo.position}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        {myInfo.description}
                    </p>
                </div>

                {/* Contact Information */}
                <div className="space-y-6">
                    {/* Email */}
                    <div className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-500">Email</p>
                            <a href={`mailto:${myInfo.email}`} className="text-blue-600 hover:underline">
                                {myInfo.email}
                            </a>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-500">Phone</p>
                            <a href={`tel:${myInfo.phone}`} className="text-blue-600 hover:underline">
                                {myInfo.phone}
                            </a>
                        </div>
                    </div>

                    {/* Telegram */}
                    <div className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                        <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.717-.962 4.084-1.362 5.411c-.168.56-.336.759-.552.779c-.468.044-.824-.308-1.279-.605c-.711-.466-1.115-.756-1.802-1.209c-.796-.523-.28-.81.173-1.28c.118-.123 2.168-1.979 2.207-2.148c.005-.021.005-.121-.045-.172c-.051-.051-.149-.034-.213-.02c-.091.019-1.535 0.974-4.332 2.863c-.41.281-.781.418-1.114.41c-.366-.009-1.07-.207-1.593-.378c-.642-.208-1.152-.318-1.107-.671c.023-.184.358-.374 1.004-.572c3.933-1.711 6.565-2.839 7.897-3.386c3.768-1.54 4.555-.922 4.118-.022z"/>
                        </svg>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-500">Telegram</p>
                            <a href={`https://t.me/${myInfo.telegram.substring(1)}`} 
                               target="_blank" 
                               rel="noopener noreferrer" 
                               className="text-blue-600 hover:underline">
                                {myInfo.telegram}
                            </a>
                        </div>
                    </div>
                </div>

                {/* Call-to-Action */}
                <div className="mt-8 text-center">
                    <p className="text-gray-600 mb-4">
                        Ready to get your professional resume? Contact me through any of these channels!
                    </p>
                    <a 
                        href={`https://t.me/${myInfo.telegram.substring(1)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-600 text-white py-3 px-8 rounded-md hover:bg-blue-700 transition duration-200 mt-15"
                    >
                        Message me on Telegram - Let's Talk
                    </a>
                </div>
            </div>
        </div>
    );
}