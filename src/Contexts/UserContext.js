import React, { createContext, useState } from 'react';
export const UserContext = createContext();
function UserContextProvider({ children }) {
	const [users, setUsers] = useState({ name: 'Sreejith', id: '1234'});
	return <UserContext.Provider value={{ ...users, setUsers: setUsers }}>{children}</UserContext.Provider>;
}
export default UserContextProvider;
