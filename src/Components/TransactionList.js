import React, { useContext } from 'react';
import { Box, Text } from 'stormbreaker';
import { TransactionContext } from '../Contexts/TransactionContext';
import Transaction from './Transaction';

function TransactionList() {
	const { transactionList, setTransactionList } = useContext(TransactionContext);
	return (
		<>
			<Box display='flex' justifyContent='space-between' alignItems='center'>
				<Text variant='body3' fontWeight='medium' color='mono700'>
					Create a new category
				</Text>
				<Text
					variant='body1'
					color='mono'
					fontWeight='semibold'
					onClick={() =>
						setTransactionList([
							...transactionList,
							{
								category: 'Sports',
								categoryId: '3',
							},
						])
					}
				>
					Add
				</Text>
			</Box>
      <Box mt={4} />
			<Box maxHeight='calc(100vh - 300px)' overflowY='auto' mx={-5} px={5} >
        {transactionList.map((transaction) => (
					<>
						<Transaction key={transaction.categoryId} title={transaction.category} amount={transaction.totalAmount} />
						<Box mt={3} />
					</>
				))}
			</Box>
		</>
	);
}

export default TransactionList;
