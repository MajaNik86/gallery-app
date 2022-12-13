import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsAuthenticated} from "../../store/auth/selector";

export default function PrivateRoute({ children, ...props }){
    const isAuthenticated = useSelector(selectIsAuthenticated);

    return (
        <Route {...props}>
            {isAuthenticated ? children : <Redirect to="/login"/>}
        </Route>
    )
}