import React, { createContext, useState, useEffect } from 'react';
export const TransactionContext = createContext();

function TransactionContextProvider({ children }) {
	const DUMMY = [
		{
			category: 'Food',
			categoryId: '1',
			transactions: [
				{ title: 'Biryani', id: '1', amount: 1200 },
				{ title: 'Pizza', id: '2', amount: 200 },
			],
			totalAmount: 1400,
		},
		{
			category: 'Medicine',
			categoryId: '2',
			transactions: [
				{ title: 'Insuline', id: '1', amount: 200 },
				{ title: 'Capsules', id: '2', amount: 200 },
			],
			totalAmount: 400,
		},
	];
	const transactionsFromLocal = () => {
		const savedTransactions = localStorage.getItem('transactions')
		return savedTransactions ? JSON.parse(savedTransactions) : DUMMY
	}
	const [transactionList, setTransactionList] = useState(transactionsFromLocal);

	useEffect(() => {
		localStorage.setItem('transactions', JSON.stringify(transactionList));
	}, [transactionList]);

	return (
		<TransactionContext.Provider value={{ transactionList, setTransactionList: setTransactionList }}>
			{children}
		</TransactionContext.Provider>
	);
}

export default TransactionContextProvider;
