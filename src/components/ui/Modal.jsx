import React, { useEffect } from 'react';

export const Modal = ({ children, setIsModalOpen, isModalOpen, title }) => {
    
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isModalOpen]);

    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
            <div className='relative flex flex-col sm:w-3/4 max-w-xl bg-white/95 rounded-2xl w-11/12 h-5/12'>
                <h1 className='mt-6 text-2xl text-center text-black'>{title}</h1>
                <div className='absolute z-50 text-3xl font-bold text-black cursor-pointer right-2' onClick={() => setIsModalOpen(false)}>
                    &times;
                </div>
                {children}
            </div>
        </div>
    );
};
