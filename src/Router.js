import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import useAuth from "./hooks/useAuth";
import Galleries from "./pages/Galleries";
import MyGalleriesPage from "./pages/MyGalleriesPage";

export default function Router() {

    const AuthRoute = ({ children, ...rest }) => {
        const { user } = useAuth();
        return <Route {...rest}> {user.first_name ? children : <Redirect to='/login' />}</Route>
    }
    const GuestRoute = ({ children, ...rest }) => {
        const { user } = useAuth();
        return <Route {...rest}>{user.first_name ? <Redirect to='/my-galleries' /> : children}</Route>
    }
    return <Switch>
        <GuestRoute path='/' exact>
            <Galleries />
        </GuestRoute>
        <GuestRoute path='/login' exact>
            <LoginPage />
        </GuestRoute>
        <GuestRoute path='/register' exact>
            <RegisterPage />
        </GuestRoute>
        <AuthRoute path='/my-galleries' exact>
            <MyGalleriesPage />
        </AuthRoute>
    </Switch>
}