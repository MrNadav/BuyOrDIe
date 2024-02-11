import React, {useEffect, useReducer, useState} from 'react'
import { H1 } from './ui/H1'
import { exmp } from '../data/exp'
import { Pencil, Trash2 } from 'lucide-react'
import { AddModal } from './AddModal'
import { useForm } from 'react-hook-form'
import {v4 as uuidv4} from 'uuid'
import { getIcon } from '../lib/utils'
import { ConfirmationModal } from './ConfirmationModal'
import { EditModal } from './EditModal'

export const Expenses = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const[expenses, setExpenses] = useState([])
  const [selectedExpense, setSelectedExpense] = useState(null);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");  
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [showAll, setShowAll] = useState(false);


  const goToPreviousMonth = () => {
    setCurrentMonth(prevMonth => (prevMonth === 0 ? 11 : prevMonth - 1));
    setCurrentYear(prevYear => (currentMonth === 0 ? prevYear - 1 : prevYear));
  };

  // Function to move to the next month
  const goToNextMonth = () => {
    setCurrentMonth(prevMonth => (prevMonth === 11 ? 0 : prevMonth + 1));
    setCurrentYear(prevYear => (currentMonth === 11 ? prevYear + 1 : prevYear));
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredExpenses = expenses.filter(expense => {
    const expenseDate = new Date(expense.date);
    return (
      (expense.title.toLowerCase().includes(searchQuery) || expense.amount.toString().includes(searchQuery)) &&
      (showAll || expenseDate.getMonth() === currentMonth && expenseDate.getFullYear() === currentYear)
    );
  });

  const totalAmount = filteredExpenses.reduce((acc, expense) => acc + parseFloat(expense.amount), 0);

  const onSubmit = (data) => {
    const newExpense = { ...data, rating, id: uuidv4() };
    const existingExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    existingExpenses.unshift(newExpense);

    console.log('Saving expenses to localStorage:', existingExpenses); // checking

    localStorage.setItem('expenses', JSON.stringify(existingExpenses));
    setExpenses(existingExpenses);
    setIsModalOpen(false);
    setRating(0);
};

const deleteExpense = () => {
  if (selectedExpense) {
    const updatedExpenses = expenses.filter((expense) => expense.id !== selectedExpense.id);
    console.log('Deleting expense with id:', selectedExpense.id);
    localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
    setExpenses(updatedExpenses);
  }
  setIsConfirmationModalOpen(false); // Close the confirmation modal
};

const editExpense = (expense) => {
  // Log the expense before opening the EditModal
  console.log('Editing expense:', expense);

  setSelectedExpense(expense);
  setIsEditModalOpen(true);
};



const updateExpense = (updatedExpense) => {
  const updatedExpenses = expenses.map((expense) =>
    expense.id === updatedExpense.id ? updatedExpense : expense
  );
  localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
  setExpenses(updatedExpenses);
};

useEffect(() => {
  if(!isModalOpen) setRating(0)
  const storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
  if(expenses)
    setExpenses(storedExpenses);
  else setExpenses([]);

}, [isModalOpen]);



  return (

    <main className=''>
      <div className='flex flex-col text-center justify-center p-6'>
        <H1>Expenses</H1>
        <div className='flex flex-row gap-2 justify-center mt-8'>
          <input type='text' placeholder='Search Expenses' onChange={handleSearchChange} className='w-10/12 sm:w-72 p-2text-gray-700 bg-gray-200 rounded-xl'/>
          <button onClick={() => setIsModalOpen({...isModalOpen, add:true})}  className="bg-red-lite hover:bg-red-lite-hover text-white font-bold p-2 rounded-xl">Add Expenses</button>
        </div>
      <div className="flex justify-center items-center rounded-lg pt-4">
        <button className="bg-red-lite hover:bg-red-lite-hover text-white font-bold py-2 px-4 rounded-lg" onClick={goToPreviousMonth}>{'<'}</button>
        <span className="text-xl font-bold mx-4 text-white">
        {new Date(currentYear, currentMonth).toLocaleDateString('default', { month: 'long', year: 'numeric' })}
        </span>
        <button className="bg-red-lite hover:bg-red-lite-hover text-white font-bold py-2 px-4 rounded-lg" onClick={goToNextMonth}>{'>'}</button>
        <button
            onClick={() => setShowAll(!showAll)}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold ml-4  py-2 px-4 rounded-xl ${showAll ? 'bg-opacity-50' : ''}`}
          >
            {showAll ? 'Show Filtered' : 'Show All'}
        </button>
      </div>
      <div className='flex justify-center items-center  mt-8 text-2xl bg-green-500 rounded-2xl'>
        <p className='text-white text-bold '>Total Amount: ${totalAmount.toFixed(2)}</p>
      </div>
      </div>

      <div className='flex justify-center flex-wrap gap-6 m-2'>
        {filteredExpenses?.map((expense) => (
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
              <p className='text-gray-500'>{expense.date}</p>
              <span className='text-end'>{getIcon(expense.rating)}</span>
            </div>
            
          </div>
        ))}
    </div>
    {isModalOpen.add ? (
              <AddModal
              setIsModalOpen={setIsModalOpen} 
              isModalOpen={isModalOpen} 
              title='New Expenses' 
              onSubmit={onSubmit}
              setRating={setRating}
              rating={rating}

              />
            ) : null}
    {isConfirmationModalOpen && (
      <ConfirmationModal
        isOpen={isConfirmationModalOpen}
        onConfirm={deleteExpense}
        onCancel={() => setIsConfirmationModalOpen(false)}
        title='Delete Expenses'
      />
    )}

    {isEditModalOpen && (
        <EditModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          onSubmit={updateExpense}
          expense={selectedExpense}
        />
      )}


      
    </main>
  )
}
