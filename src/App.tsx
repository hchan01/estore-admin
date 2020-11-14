import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { NavigationMenu, Header } from './components';
import { Routes } from './routes';

function App() {
	if ( window.innerWidth <= 450 ) {
		window.document.body.classList.add("hide-sidebar");
	}

    return (
        <BrowserRouter>
            <Header />
            <NavigationMenu />
            <Routes />
        </BrowserRouter>
    );
}

export default App;