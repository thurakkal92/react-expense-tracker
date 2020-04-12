import React, { useContext, useState } from 'react';
import { Box, Text } from 'stormbreaker';
import styled from   '@emotion/styled'
import { TransactionContext } from '../Contexts/TransactionContext';
import Transaction from './Transaction';
import Collapse from './Collapse';
import { TextInput } from 'stormbreaker/components/TextInput';
import { Button } from 'stormbreaker/components/Button';
import { ReactComponent as CirclePlus } from '../assets/circle-plus.svg';
import { ReactComponent as CircleMinus } from '../assets/circle-minus.svg';

const PlusIcon = styled(CirclePlus)`
	color: ${(props) => props.theme.colors.primary};
	margin-left: 8px;
`;
const MinusIcon = styled(CircleMinus)`
	color: ${(props) => props.theme.colors.primary};
	margin-left: 8px;
`;

function TransactionList() {
	const [transactionList, setTransactionList] = useContext(TransactionContext);
	const [toggle, setTogggle] = useState(false);
	const [category, setCategory] = useState('');

	return (
		<>
			<Box display='flex' justifyContent='space-between' alignItems='center' onClick={() => setTogggle(!toggle)}>
				<Text variant='body3' fontWeight='medium' color='mono700'>
					Create a new category
				</Text>
				{toggle ? <MinusIcon height={20} width={20} /> : <PlusIcon height={20} width={20} />}
			</Box>
			<Collapse pose={toggle ? 'open' : 'collapsed'}>
				<Box mt={5} />
				<form>
					<TextInput placeholder='Add category' value={category} onChange={(e) => setCategory(e.target.value)} />
					<Box mt={3} />
					<Button
						type='submit'
						onClick={(e) => {
							e.preventDefault();
							e.stopPropagation();
							setTransactionList([
								...transactionList,
								{
									name: category,
									id: Math.random().toFixed(0),
									transactions: [],
								},
							]);
						}}
					>
						Add category
					</Button>
				</form>
				<Box mt={5} />
			</Collapse>
			<Box mt={4} />
			{/* <Box maxHeight='calc(100vh - 320px)' overflowY='auto' mx={-5} px={5}> */}
			<Box>
				{transactionList.map((transaction) => (
					<Box key={transaction.id}>
						<Transaction transaction={transaction} />
						<Box mt={3} />
					</Box>
				))}
			</Box>
		</>
	);
}

export default TransactionList;
