import { useState } from "react"

export const AuthContext = {

    login: () => {},
    logout: () => {},
    isLoggedIn: false
}

function AuthContextProvider({children}) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function login() {
        localStorage.setItem('token', '1');
        setIsLoggedIn(true);
    }

    function logout() {
        localStorage.removeItem('token');
    }

    const value = {
        login: login,
        logout: logout,
        isLoggedIn: isLoggedIn
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContextProvider;