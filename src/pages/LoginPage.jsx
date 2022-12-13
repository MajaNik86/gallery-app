import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/auth/slice";
import LoginComponent from '../components/LoginComponent'
import { useHistory } from "react-router-dom";

export default function Login(){
    const dispatch = useDispatch();
    const history = useHistory();
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    });

    function handleOnLogin(e) {
        e.preventDefault();
        dispatch(login(credentials));
        console.log('Success!');
        history.push('/galleries')
    }


    return <LoginComponent
        handleOnLogin={handleOnLogin}
        credentials={credentials}
        setCredentials={setCredentials} />;
}
