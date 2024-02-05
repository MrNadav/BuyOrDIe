import React, { useState, useEffect } from 'react';
import { Modal } from './ui/Modal';
import { getIcon } from '../lib/utils';

export const EditModal = ({ isOpen, onClose, onSubmit, expense }) => {
    const [editedExpense, setEditedExpense] = useState(expense);
    const [rating, setRating] = useState(expense.rating); // Initialize the rating with the expense's rating
  
    useEffect(() => {
      // Update the rating state whenever the expense prop changes
      setRating(expense.rating);
    }, [expense]);
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setEditedExpense({
        ...editedExpense,
        [name]: value,
      });
    };
  
    const handleSliderChange = (e) => {
        setRating(e.target.value); // Update the rating using the setRating prop
      };
  
    const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    
    // Include the updated rating in the editedExpense before submitting
    const updatedExpenseWithRating = {
        ...editedExpense,
        rating: rating, // Ensure this is the updated rating
    };
    
    onSubmit(updatedExpenseWithRating);
    onClose();
    };

  return (
    <Modal setIsModalOpen={onClose} isModalOpen={isOpen} title="Edit Expense">
      <form onSubmit={handleSubmit} className="flex flex-wrap justify-center p-6 m-4 gap-y-7">
        <div className="w-full">
          <label htmlFor="title" className="font-semibold">
            Title
          </label>
          <input
            name="title"
            type="text"
            className="w-full pl-2 rounded-lg h-8"
            placeholder="Title"
            value={editedExpense.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="w-full">
          <label htmlFor="amount" className="font-semibold">
            Amount
          </label>
          <input
            name="amount"
            type="number"
            className="w-full pl-2 rounded-lg h-8"
            step="0.01"
            placeholder="Amount"
            value={editedExpense.amount}
            onChange={handleInputChange}
          />
        </div>
        <div className="w-full">
          <label htmlFor="date" className="font-semibold">
            Date
          </label>
          <input
            name="date"
            type="date"
            className="w-full pl-2 rounded-lg h-8"
            placeholder="Date"
            value={editedExpense.date}
            onChange={handleInputChange}
          />
        </div>
        <div className="w-full">
          <div className="relative mb-6">
            <input
              type="range"
              className="w-full accent-zinc-800"
              min="0"
              max="100"
              step="1"
              value={rating}
              onChange={handleSliderChange}
            />
            <span className="text-sm text-gray-500 dark:text-gray-400 absolute left-0 -bottom-6">😅</span>
            <span className="text-sm text-gray-500 dark:text-gray-400 absolute left-1/4 transform -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">😊</span>
            <span className="text-sm text-gray-500 dark:text-gray-400 absolute left-1/2 transform -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">😄</span>
            <span className="text-sm text-gray-500 dark:text-gray-400 absolute left-3/4 transform -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">😃</span>
            <span className="text-sm text-gray-500 dark:text-gray-400 absolute right-0 -bottom-6">😁</span>
          </div>
          <div className="text-center mt-8">
            Current Rating: <b>{rating}</b> - Current Icon: {getIcon(rating)}
          </div>
        </div>
        <button className="w-8/12 sm:w-72 p-2 lg:ml-5 mt-8 text-white border bg-black rounded-xl">
          Update
        </button>
      </form>
    </Modal>
  );
};
