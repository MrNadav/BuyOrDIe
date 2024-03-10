import React from 'react'
import { Pencil, Trash2 } from 'lucide-react'
import { getIcon } from '../lib/utils'
import { format } from 'date-fns'
export const Transactions = ({ items, setIsModalOpen, isModalOpen }) => {
  return (
   <>
           {items?.map((expense) => (
        <div key={expense.id} className=" group w-full max-w-sm p-6 m-3 text-center text-white shadow-lg hover:-translate-y-1 hover: hover:scale-100 shadow-red-lite/50 bg-gray-500/10  rounded-2xl hover:shadow-black/40 xl:w-full lg:w-11/12  sm:m-0 sm:mb-4">
           <div className='flex justify-end gap-2'>
                <Pencil onClick={() => editExpense(expense)}  className='cursor-pointer h-5 w-5 text-sky-400' />
                <Trash2 onClick={() => {
                  setSelectedExpense(expense);
                  setIsConfirmationModalOpen(true);
                }}  className='cursor-pointer h-5 w-5 text-red-500' />
            </div>
            <h3 className='text-xl font-semibold text-center'>{expense.title}</h3>
            <p className='group-hover:text-red-lite group-hover:text-4xl mt-10 mb-10 flex-grow text-3xl font-bold text-center'>${(+expense.amount).toFixed(2)}</p>
            <div className='flex justify-between items-center'>
              <p className='text-gray-500'>{format(expense.date, 'dd/MM/yyyy')}</p>
              <span className='text-end'>{getIcon(expense.rating)}</span>
            </div>
            
          </div>
        ))}
   </>
  )
}
