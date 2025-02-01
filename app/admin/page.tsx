'use client';
import React, { useState } from 'react';

const AccountTable: React.FC = () => {
  // State to store bank accounts data
  const [accounts, setAccounts] = useState<{
    id: number;
    holderName: string;
    bankName: string;
    accountNumber: string;
    ifscCode: string;
    email: string;
  }[]>([]);

  // State for modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State for form inputs
  const [newAccount, setNewAccount] = useState({
    holderName: '',
    bankName: '',
    accountNumber: '',
    ifscCode: '',
    email: ''
  });

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewAccount((prev) => ({ ...prev, [name]: value }));
  };

  // Handle adding a new bank account
  const handleAddAccount = () => {
    if (
      newAccount.holderName &&
      newAccount.bankName &&
      newAccount.accountNumber &&
      newAccount.ifscCode &&
      newAccount.email
    ) {
      setAccounts((prev) => [
        ...prev,
        { ...newAccount, id: prev.length ? prev[prev.length - 1].id + 1 : 1 }
      ]);
      setNewAccount({
        holderName: '',
        bankName: '',
        accountNumber: '',
        ifscCode: '',
        email: ''
      }); // Reset form
      setIsModalOpen(false); // Close modal after submission
    }
  };

  return (
    <div className="relative p-6">
      {/* Add Account Button */}
      <div className='flex justify-end'>
        <button
            onClick={() => setIsModalOpen(true)}
            className="top-4 right-4 bg-red-500 text-white p-3 rounded-md shadow-lg hover:bg-red-600"
        >
            Add Bank Account
        </button>
      </div>

      {/* Modal Form for Adding Bank Account */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md shadow-lg w-96">
            <h2 className="text-2xl mb-4">Add Bank Account</h2>
            <div className="mb-4">
              <label htmlFor="holderName" className="block text-sm font-medium text-gray-700">
                Account Holder Name:
              </label>
              <input
                type="text"
                id="holderName"
                name="holderName"
                value={newAccount.holderName}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter Account Holder Name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="bankName" className="block text-sm font-medium text-gray-700">
                Bank Name:
              </label>
              <input
                type="text"
                id="bankName"
                name="bankName"
                value={newAccount.bankName}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter Bank Name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700">
                Account Number:
              </label>
              <input
                type="text"
                id="accountNumber"
                name="accountNumber"
                value={newAccount.accountNumber}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter Account Number"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="ifscCode" className="block text-sm font-medium text-gray-700">
                IFSC Code:
              </label>
              <input
                type="text"
                id="ifscCode"
                name="ifscCode"
                value={newAccount.ifscCode}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter IFSC Code"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={newAccount.email}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter Email"
              />
            </div>
            <div className="flex justify-between">
              <button
                onClick={handleAddAccount}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Add
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Accounts Table */}
      <table className="min-w-full mt-6 border-collapse">
        <thead>
          <tr className="bg-red-600 text-white">
            <th className="py-3 px-6 text-left border-b">ID</th>
            <th className="py-3 px-6 text-left border-b">Holder Name</th>
            <th className="py-3 px-6 text-left border-b">Bank Name</th>
            <th className="py-3 px-6 text-left border-b">Account Number</th>
            <th className="py-3 px-6 text-left border-b">IFSC Code</th>
            <th className="py-3 px-6 text-left border-b">Email</th>
          </tr>
        </thead>
        <tbody>
          {accounts.length > 0 ? (
            accounts.map((account) => (
              <tr key={account.id} className="hover:bg-gray-100">
                <td className="py-3 px-6 border-b">{account.id}</td>
                <td className="py-3 px-6 border-b">{account.holderName}</td>
                <td className="py-3 px-6 border-b">{account.bankName}</td>
                <td className="py-3 px-6 border-b">{account.accountNumber}</td>
                <td className="py-3 px-6 border-b">{account.ifscCode}</td>
                <td className="py-3 px-6 border-b">{account.email}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="py-3 px-6 text-center border-b">
                No accounts added yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AccountTable;
