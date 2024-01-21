import React from 'react'
import logo from '../assets/images/logo.webp'
import { useNavigate } from 'react-router-dom'
export const Home = () => {
  const navigate = useNavigate()

  return (
    <>
        <div className='flex flex-col justify-center p-5 mt-24 text-center'>
            <h1 className='text-4xl text-white mb-25 '>Buy Or Die</h1>
            <div className='flex justify-center p-10 mx-auto'>
                {<img src={logo} alt='react logo' className='w-36' />}
            </div>
            <div className='flex justify-center p-5'>
                <span className='text-xl text-white sm:text-2xl '>
                    <h1>Track your money</h1>
                </span>
            </div>

            <button onClick={()=> navigate('/expenses')} className= 'bg-red-lite text-white font-bold h-10 w-60 rounded-lg mx-auto animate-bounce mt-10'>
                Expenses
            </button>
        </div>

    </>
  )
}
