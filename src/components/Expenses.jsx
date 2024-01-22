import React, {useState} from 'react'
import { H1 } from './ui/H1'
import { exmp } from '../data/exp'
import { Pencil, Trash2 } from 'lucide-react'


export const Expenses = () => {
  return (

    <main className=''>
            <div className='flex flex-col text-center justify-center p-6'>
        <H1>Expenses</H1>
        <div className='flex flex-row gap-2 justify-center mt-8'>
          <input type='text' placeholder='Seatch Expenses' className='w-10/12 sm:w-72 p-2text-gray-700 bg-gray-200 rounded-xl'/>
          <button className="bg-red-lite hover:bg-red-lite-hover text-white font-bold p-2 rounded-xl">Add Expenses</button>
        </div>
      </div>

      <div className='flex justify-center flex-wrap gap-6 m-2'>
        {exmp?.map((expense) => (
        <div key={expense.id} className=" group w-full max-w-sm p-6 m-3 text-center text-white shadow-lg hover:-translate-y-1 hover: hover:scale-100 shadow-red-lite/50 bg-gray-500/10  rounded-2xl hover:shadow-black/40 xl:w-full lg:w-11/12  sm:m-0 sm:mb-4">
           <div className='flex justify-end gap-2'>
                <Pencil className='cursor-pointer h-5 w-5 text-sky-400' />
                <Trash2 className='cursor-pointer h-5 w-5 text-red-500' />
            </div>
            <h3 className='text-xl font-semibold text-center'>{expense.title}</h3>
            <p className='group-hover:text-red-lite group-hover:text-4xl mt-10 mb-10 flex-grow text-3xl font-bold text-center'>${expense.amount}</p>
            <div className='flex justify-between items-center'>
              <p className='text-gray-500'>{expense.date.toDateString()}</p>
              <span className='text-end'>🌟</span>
            </div>
            
          </div>
        ))}
    </div>
    </main>
  )
}
