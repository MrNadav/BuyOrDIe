import React from 'react';
import { Modal } from './ui/Modal'; // Import your Modal component here

export const ConfirmationModal = ({ isOpen, onConfirm, onCancel }) => {
  return (
    <Modal setIsModalOpen={onCancel} isModalOpen={isOpen} title="Confirm Deletion">
      <div className="text-center">
        <p className="mt-4 mb-6">Are you sure you want to delete this expense?</p>
        <div className="flex justify-center mb-4">
          <button
            onClick={onConfirm}
            className="bg-red-lite hover:bg-red-lite-hover text-white font-bold p-2 rounded-xl mr-4"
          >
            Yes
          </button>
          <button
            onClick={onCancel}
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold p-2 rounded-xl"
          >
            No
          </button>
        </div>
      </div>
    </Modal>
  );
};
