import React, { createContext, useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { authService } from "../services/AuthService";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const history = useHistory();
    const [user, setUser] = useState({});

    const handleLogin = async (data) => {
        const response = await authService.login(data);
        setUser(response.user);  //response.data.user
        history.push("/galleries");
    };

    const handleLogout = async () => {
        await authService.logout();
        history.push("/login");
    };

    const handleRegister = async (data) => {
        const response = await authService.register(data);
        setUser(response.user);
        console.log("Registration successful.");
        history.push("/galleries");
    };

    const handleRefreshToken = async () => {
        const token = handleGetItemFromLS("token");

        if (token) {
            const { user } = await authService.refresh();
            setUser(user);
        }
    };

    const handleGetItemFromLS = (value) => {
        return localStorage.getItem(value);
    };

    useEffect(() => {
        handleRefreshToken();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                login: handleLogin,
                register: handleRegister,
                logout: handleLogout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default function useAuth() {
    return useContext(AuthContext);
}