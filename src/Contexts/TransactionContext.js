import React, { createContext, useState, useEffect } from 'react';
export const TransactionContext = createContext([{}, () => {}]);

function TransactionContextProvider({ children }) {
	// const DUMMY = [
	// 	{
	// 		name: 'Food',
	// 		id: 1,
	// 		transactions: [
	// 			{ name: 'Biryani', id: 1, amount: 1200 },
	// 			{ name: 'Pizza', id: 2, amount: 200 },
	// 		],
	// 	},
	// 	{
	// 		name: 'Medicine',
	// 		id: 2,
	// 		transactions: [
	// 			{ name: 'Insuline', id: 1, amount: 200 },
	// 			{ name: 'Capsules', id: 2, amount: 200 },
	// 		], 
	// 	},
	// ];
	
	const transactionsFromLocal = () => {
		const savedTransactions = localStorage.getItem('transactions');
		return savedTransactions ? JSON.parse(savedTransactions) : [];
	};
	const transactionHook = useState(transactionsFromLocal);

	useEffect(() => {
		localStorage.setItem('transactions', JSON.stringify(transactionHook[0]));
	}, [transactionHook[0]]);

	return <TransactionContext.Provider value={transactionHook}>{children}</TransactionContext.Provider>;
}

export default TransactionContextProvider;
