import React, { useState, useContext, useRef, createRef, useEffect } from 'react';
import styled from '@emotion/styled';
import { Box, Text, Button } from 'stormbreaker';
import { TransactionContext } from '../Contexts/TransactionContext';
import Collapse from './Collapse';
import {ReactComponent as CirclePlus} from '../assets/circle-plus.svg'
import {ReactComponent as CircleMinus} from '../assets/circle-minus.svg'

const PlusIcon = styled(CirclePlus)`
	color: ${props => props.theme.colors.primary};
	margin-left: 8px;
`
const MinusIcon = styled(CircleMinus)`
	color: ${props => props.theme.colors.primary};
	margin-left: 8px;
`

const TextInput = styled('input')`
	border: 1px solid;
	border-color: ${(props) => props.theme.colors.primary};
	color: ${(props) => props.theme.colors.primary};
	outline: none;
	padding: 8px 12px;
	border-radius: 4px;
`;

function Transaction({ transaction, ...props }) {
	const [transactionList, setTransactionList] = useContext(TransactionContext);
	const { name, amount } = transaction;
	const [toggle, setToggle] = useState(false);
	const nameRef = useRef(null);
	const amountRef = useRef(null);

	function getTotalAmount(trancations) {
		const amounts = trancations.map(transaction => transaction.amount)
		const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(1);
		return parseFloat(total)
	}

	function formSubmit(e) {
			e.preventDefault();
			e.stopPropagation();
			let tempArray = [...transactionList];
			tempArray = tempArray.map((item) => {
				if (item.id === transaction.id) {
					item.transactions.push({
						name: nameRef.current.value,
						amount: parseInt(amountRef.current.value),
						id: Math.random() * 1000,
					});
					item.amount = getTotalAmount(item.transactions);
				}
				return item;
			});
			setTransactionList(tempArray);
	}
	
	return (
		<Box
			{...props}
			style={{
				boxShadow: '0 0 4px 1px rgba(154,91,247,0.10)',
			}}
			bg='white'
			px={3}
			py={3}
			borderRadius={8}
		>
			<Box onClick={() => setToggle(!toggle)}  display='flex' justifyContent='space-between' alignItems='center'>
				<Text variant='body2' color='mono700' fontWeight='bold'>
					{name}
				</Text>
				<Box display='flex' alignItems='center'>
					{amount && (
						<Text variant='body3' color='error' fontWeight='semibold'>
							&#x20B9;{amount}
						</Text>
					)}
					{!toggle ? <PlusIcon height={20} width={20}/> : <MinusIcon height={20} width={20}/>}
					
				</Box>
			</Box>
			<Collapse pose={toggle ? 'open' : 'collapsed'}>
				<Box mt={5} />
				<form
					name='add-expense'
					onSubmit={formSubmit}
				>
					<TextInput
						ref={nameRef}
						required
						name='title'
						type='text'
						placeholder='Title'
					/>
					<Box mt={3} />
					<TextInput
						ref={amountRef}
						name='amout'
						required
						type='number'
						placeholder='Amount'
					/>
					<Box mt={3} />
					<Button type='submit'>Add Expense</Button>
				</form>
				<Box mt={5} />
			</Collapse>
		</Box>
	);
}

export default Transaction;
