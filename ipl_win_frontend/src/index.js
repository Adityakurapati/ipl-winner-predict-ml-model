import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StoreProvider } from 'easy-peasy';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import store from './store';
import Content from './components/Content';
const root=ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render(
        <React.StrictMode>
                {/* <StoreProvider store={ store }> */ }
                {/* <App /> */ }
                <Router>
                        <Routes>
                                <Route path='/' element={ <Content /> } />
                        </Routes>
                </Router>
                {/* </StoreProvider> */ }
        </React.StrictMode>
);
