import './App.css';
import './Result.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import Content from './components/Content';
import Result from './components/Result';

function App ()
{

        // Home Page States
        const [ battingTeam, setBattingTeam ]=useState( 'Select Batting Team' );
        const [ bowlingTeam, setBowlingTeam ]=useState( 'Select Bowling Team' );
        const [ showOptions, setShowOptions ]=useState( false );
        const [ target, setTarget ]=useState( '' );
        const [ score, setScore ]=useState( '' );
        const [ wickets, setWickets ]=useState( '' );
        const [ overs, setOvers ]=useState( '' );
        const [ city, setCity ]=useState( 'Select Venue City' );

        // Result States
        const [ result, setResult ]=useState( '' );
        const [ wonTeam, setWonTeam ]=useState( '' );
        const [ lossTeam, setLossTeam ]=useState( '' );
        const [ win, setWin ]=useState( 0 );
        const [ loss, setLoss ]=useState( 1 );
        const [ wonTeamNo, setWonTeamNo ]=useState();

        const data_object={ battingTeam, bowlingTeam, showOptions, target, score, wickets, overs, city, setBattingTeam, setBowlingTeam, setShowOptions, setTarget, setScore, setWickets, setOvers, setCity }
        return (
                <Routes>
                        <Route path="/" element={ <Layout /> }>
                                <Route index element={
                                        <Content
                                                battingTeam={ battingTeam }
                                                setBattingTeam={ setBattingTeam }
                                                bowlingTeam={ bowlingTeam }
                                                setBowlingTeam={ setBowlingTeam }
                                                showOptions={ showOptions }
                                                setShowOptions={ setShowOptions }
                                                target={ target }
                                                setTarget={ setTarget }
                                                score={ score }
                                                setScore={ setScore }
                                                wickets={ wickets }
                                                setWickets={ setWickets }
                                                overs={ overs }
                                                setOvers={ setOvers }
                                                city={ city }
                                                setCity={ setCity }

                                                win={ win }
                                                loss={ loss }
                                                wonTeam={ wonTeam }
                                                result={ result }
                                                wonTeamNo={ wonTeamNo }
                                                setWin={ setWin }
                                                setLoss={ setLoss }
                                                setWonTeam={ setWonTeam }
                                                setLossTeam={ setLossTeam }
                                                setResult={ setResult }
                                                setWonTeamNo={ setWonTeamNo }
                                        /> } />
                                <Route path="/result" element={ <Result
                                        result={ result }
                                        wonTeamNo={ wonTeamNo }
                                        win={ win }
                                        loss={ loss }
                                /> } />
                        </Route>
                </Routes>
        );
}

export default App;
