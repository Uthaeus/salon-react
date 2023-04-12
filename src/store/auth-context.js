import React, {useState} from "react"; 

export const AuthContext = React.createContext({

    login: () => {},
    logout: () => {},
    isLoggedIn: false,
    userEmail: '',
    userPassword: ''
});

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
        isLoggedIn: isLoggedIn,
        userEmail: "test@test.com",
        userPassword: "foobar"
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContextProvider;