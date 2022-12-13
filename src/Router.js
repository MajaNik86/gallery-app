import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Galleries from "./pages/Galleries";
import GalleryPage from "./pages/GalleryPage";
import CreateGalleryPage from "./pages/CreateGalleryPage";
import { useDispatch, useSelector } from "react-redux";
import { getActiveUser } from "./store/auth/slice";
import { selectIsAuthenticated, selectActiveUser } from "./store/auth/selector";
import { useEffect } from "react";
import PrivateRoute from "./components/shared/PrivateRoute";
import GuestRoute from "./components/shared/GuestRoute";

export default function Router() {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const activeUser = useSelector(selectActiveUser);

    useEffect(() => {
        if (isAuthenticated) {
            dispatch(getActiveUser());
        }
    }, [dispatch, isAuthenticated]);

    return (
        <Switch>
            <Route path="/" exact>
                <Redirect to="/galleries"></Redirect>
            </Route>
            <Route path="/galleries" exact>
                <Galleries />
            </Route>
            <GuestRoute path="/login" exact>
                <LoginPage />
            </GuestRoute>
            <GuestRoute path="/register" exact>
                <RegisterPage />
            </GuestRoute>
            <PrivateRoute path="/galleries/:id" exact>
                <GalleryPage />
            </PrivateRoute>
            <PrivateRoute path="/create" exact>
                <CreateGalleryPage />
            </PrivateRoute>
            <PrivateRoute exact path="/edit-gallery/:id">
                <CreateGalleryPage />
            </PrivateRoute>
            <PrivateRoute exact path="/my-galleries">
                <Galleries selfId={isAuthenticated ? activeUser?.id : null} />
            </PrivateRoute>
            <Route exact path="/authors/:id">
                <Galleries />
            </Route>
        </Switch>
    );
}
