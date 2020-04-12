import React, { useContext, useEffect, useState } from 'react';
import { Box, Text } from 'stormbreaker';
import {TransactionContext} from '../Contexts/TransactionContext';
function Summary() {
	const [transactions] = useContext(TransactionContext)
	const [totalAmount, setTotalAmount] = useState(0);

	useEffect(() => {
		const amounts = transactions.map((transaction) => transaction.amount ? transaction.amount : 0);
		if(amounts.length) {
			const total = amounts.reduce((acc, item) => (acc += item), 0);
			console.log(total)
			setTotalAmount(total);
		}
		
	}, [transactions]);
	
	return (
		<Box
			style={{
				boxShadow: '0 0 20px 3px rgba(49,27,146,0.18)',
			}}
			display='flex'
			bg='white'
			justifyContent='space-between'
			px={6}
			py={4}
			borderRadius={16}
		>
			<Box>
				<Text variant='body2' fontWeight='semibold' color='mono300'>
					Expense
				</Text>
				<Text pt={3} fontWeight='bold' color='error' variant='h2'>
				&#x20B9;{totalAmount}
				</Text>
			</Box>
			<Box>
				{/* <Text variant='body2' fontWeight='semibold' color='mono300'>
					Income
				</Text>
				<Text pt={3} fontWeight='bold' color='success' variant='h2'>
					$2000
				</Text> */}
			</Box>
		</Box>
	);
}

export default Summary;
