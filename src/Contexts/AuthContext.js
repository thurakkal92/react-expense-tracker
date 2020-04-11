import React, { createContext, useState, useEffect } from 'react';
export const AuthContext = createContext();

function AuthContextProvider({ children }) {
	const authFromLocal = () => {
		const localAuth = localStorage.getItem('auth');
		return localAuth && JSON.parse(localAuth.toLowerCase());
	};
	const [auth, setAuth] = useState(authFromLocal);
	useEffect(() => {
		if (auth !== null || undefined) localStorage.setItem('auth', auth);
	}, [auth]);
	return <AuthContext.Provider value={{ auth, setAuth: setAuth }}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
