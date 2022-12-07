import React from "react";
import { useHistory } from "react-router-dom";
import LoginComponent from "../components/LoginComponent";
import useAuth from "../hooks/useAuth";
import { useState } from "react";

export default function LoginPage(){
    const [newUser, setNewUser] = useState({ email: '', password: '' });
    const { user, login } = useAuth();

    const history = useHistory();
    const handleSubmitForm = async (e) => {
        e.preventDefault();
        await login(newUser);
        console.log('login successfull');
        history.push('/galleries');
      };

    return <LoginComponent
        handleOnLogin={handleSubmitForm}
        newUser={newUser}
        setNewUser={setNewUser} />;
}
