import './App.css';
import './Result.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import DataContext from './Context/DataContext'; // Make sure the import path is correct

import Layout from './components/Layout';
import Content from './components/Content';
import Result from './components/Result';

function App ()
{

        const [ battingTeam, setBattingTeam ]=useState( '' );
        const [ bowlingTeam, setBowlingTeam ]=useState( '' );
        return (
                <Routes>
                        <Route path="/" element={ <Layout /> }>
                                <Route index element={
                                        <Content
                                                battingTeam={ battingTeam }
                                                setBattingTeam={ setBattingTeam }
                                                bowlingTeam={ bowlingTeam }
                                                setBowlingTeam={ setBowlingTeam }
                                        /> } />
                                <Route path="/result" element={ <Result /> } />
                        </Route>
                </Routes>
        );
}

export default App;
