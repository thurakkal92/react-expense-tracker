import React, { useContext } from 'react';
import { Box, Text } from 'stormbreaker';
import TransactionList from '../Components/TransactionList';
import StickyBottomBar from '../Components/StickyBottomBar';
import { UserContext } from '../Contexts/UserContext';
import { AuthContext } from '../Contexts/AuthContext';
function Dashboard() {
	const user = useContext(UserContext);
	const { auth, setAuth } = useContext(AuthContext);
	return (
		<Box px={7} bg='primary50' flex={1} height='100vh'>
			<Box pt={6} />
			<Box display='flex' justifyContent='space-between' alignItems='center'>
				{auth && (
					<>
						<Text variant='h4' fontWeight='bold'>
							Hi {user.name}
						</Text>
						<Text variant='body1' fontWeight='bold' onClick={() => setAuth(!auth)}>
							Logout
						</Text>
					</>
				)}
			</Box>
			<Box pt={5} />
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
						$2000
					</Text>
				</Box>
				<Box>
					<Text variant='body2' fontWeight='semibold' color='mono300'>
						Income
					</Text>
					<Text pt={3} fontWeight='bold' color='success' variant='h2'>
						$2000
					</Text>
				</Box>
			</Box>
			<Box mt={6} />
			<TransactionList />
			<StickyBottomBar />
		</Box>
	);
}
export default Dashboard;
