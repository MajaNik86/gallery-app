import React from "react";
import MainNavigation from "./MainNavigation";
import { Fragment } from "react";
import useAuth from "../hooks/useAuth";

const Layout = ({ children }) => {
    const { user } = useAuth();
    return <Fragment>
        <MainNavigation />
        <main>{children}</main>
        <footer> Hello there{user && user.first_name}</footer>
    </Fragment>
}

export default Layout;