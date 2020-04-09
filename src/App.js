import React from 'react';
import { ThemeProvider, Global, theme, globalStyles } from 'stormbreaker';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Global styles={globalStyles} />
			<div>This is expense tracker</div>
		</ThemeProvider>
	);
}

export default App;
