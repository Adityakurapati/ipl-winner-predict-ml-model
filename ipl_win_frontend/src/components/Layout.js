import React from 'react'
// Static 
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom'
const Layout=( ) =>
{
        return (
                <>
                        <link
                                rel="stylesheet"
                                href="https://unicons.iconscout.com/release/v4.0.0/css/unicons.css"
                        />
                        <Header />
                        <Outlet />
                        <Footer />
                </>
        )
}

export default Layout