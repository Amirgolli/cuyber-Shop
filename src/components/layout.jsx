import { Outlet } from "react-router-dom";
import Header from './header.jsx';
import Footer from './footer.jsx'
import React from 'react'

export default function layout() {
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
