import React from 'react';
import NavBar from '../componets/NavBar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
        <NavBar/>
        {/* the changing context */}
        <Outlet/>
        {/* // */}
        <footer className="bg-gray-900 text-white p-8">
           <div className="container mx-auto text-center">
             <p>&copy; 2024 EdTech Startup. All rights reserved.</p>
           </div>
        </footer>
        </div>
    );
}

export default Main;
