import React, {useState} from 'react'
import { H1 } from './ui/H1'
import { exmp } from '../data/exp'
import { Pencil, Trash2 } from 'lucide-react'

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
      <div className='bg-white p-5 rounded'>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export const Expenses = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open modal
  const openModal = () => setIsModalOpen(true);

  // Function to close modal
  const closeModal = () => setIsModalOpen(false);
  return (

    <main className=''>
            <div className='flex flex-col text-center justify-center p-6'>
        <H1>Expenses</H1>
        <div className='flex flex-row gap-2 justify-center mt-8'>
          <input type='text' placeholder='Seatch Expenses' className='w-10/12 sm:w-72 p-2text-gray-700 bg-gray-200 rounded-xl'/>
          <button onClick={openModal} className="bg-red-lite hover:bg-red-lite-hover text-white font-bold p-2 rounded-xl">Add Expenses</button>
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
              <span className='text-end'>{expense.rating}</span>
            </div>
            
          </div>
        ))}
    </div>
    <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Add New Expense</h2>
        <input type='text' placeholder='Seatch Expenses' className='w-10/12 sm:w-72 p-2text-gray-700 bg-gray-200 rounded-xl p-2'/>
    </Modal>
    </main>
  )
}
