import React, { useContext } from 'react';
import { Box, Text } from 'stormbreaker';
import TransactionList from '../Components/TransactionList';
import StickyBottomBar from '../Components/StickyBottomBar';
import { UserContext } from '../Contexts/UserContext';
import { AuthContext } from '../Contexts/AuthContext';
import Summary from '../Components/Summary';
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
			<Summary />
			<Box mt={6} />
			<TransactionList />
			{/* <StickyBottomBar /> */}
		</Box>
	);
}
export default Dashboard;
