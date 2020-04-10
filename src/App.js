import React from 'react';
import { ThemeProvider, Global, globalStyles } from 'stormbreaker';
import { AppRouter } from './AppRouter';
import { CustomTheme } from './theme';
import UserContextProvider from './Contexts/UserContext';
import AuthContextProvider from './Contexts/AuthContext';
import TransactionContextProvider from './Contexts/TransactionContext'

function App() {
	return (
		<ThemeProvider theme={CustomTheme}>
			<Global styles={globalStyles} />
			<AuthContextProvider>
				<UserContextProvider>
					<TransactionContextProvider>{AppRouter}</TransactionContextProvider>
				</UserContextProvider>
			</AuthContextProvider>
		</ThemeProvider>
	);
}

export default App;
