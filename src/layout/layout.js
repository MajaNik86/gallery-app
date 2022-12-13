import React from "react";
import MainNavigation from "./MainNavigation";
import { Fragment } from "react";
import Footer from "./Footer";

const Layout = ({ children }) => {

    return <Fragment>
        <MainNavigation />
        <main>{children}</main>
        <Footer />
    </Fragment>
}

export default Layout;