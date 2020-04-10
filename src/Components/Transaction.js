import React from 'react';
import { Box, Text } from 'stormbreaker';

function Transaction(props) {
	const { title, amount, ...otherProps } = props;
	return (
		<Box
			{...otherProps}
			style={{
				boxShadow: '0 0 20px 3px rgba(49,27,146,0.18)',
      }}
      bg="white"
			px={3}
			py={3}
			display='flex'
			justifyContent='space-between'
      alignItems='center'
      borderRadius={8}
		>
			<Text variant='body2' color='mono700' fontWeight='bold'>
				{title}
			</Text>
			<Box display="flex" alignItems="center">
				<Text variant='body3' color='success' fontWeight='semibold'>
					{amount}
				</Text>
				<Box mr={3} />
				<Text variant='body1' color='mono500' fontWeight='semibold'>
					Expand
				</Text>
			</Box>
		</Box>
	);
}

export default Transaction;
