import React, { createContext, useState } from 'react';
const DataContext=createContext( {} ); // Create a context with an initial empty object.

export const DataProvider=( { children } ) =>
{
        const [ battingTeam, setBattingTeam ]=useState( '' );
        const [ bowlingTeam, setBowlingTeam ]=useState( '' );
        const [ showOptions, setShowOptions ]=useState( false );
        const [ city, setCity ]=useState( '' );
        const [ target, setTarget ]=useState( '' );
        const [ score, setScore ]=useState( '' );
        const [ wickets, setWickets ]=useState( '' );
        const [ overs, setOvers ]=useState( '' );
        const [ teams, setTeams ]=useState( [
                "Mumbai Indians",
                "Sunrisers Hyderabad",
                "Chennai Super Kings",
                "Royal Challengers Bangalore",
                "Kolkata Knight Riders",
                "Sunrisers Hyderabad",
                "Delhi Capitals",
                "Kings XI Punjab",
                "Rajasthan Royals"
        ] );
        const [ cities, setCities ]=useState( [
                'Hyderabad', 'Bangalore', 'Mumbai', 'Indore', 'Kolkata', 'Delhi',
                'Chandigarh', 'Jaipur', 'Cape Town', 'Durban', 'Port Elizabeth',
                'Centurion', 'East London', 'Johannesburg', 'Kimberley', 'Bloemfontein',
                'Ahmedabad', 'Cuttack', 'Nagpur', 'Dharamsala', 'Chennai', 'Visakhapatnam',
                'Pune', 'Raipur', 'Ranchi', 'Abu Dhabi', 'Sharjah', 'Mohali', 'Bengaluru'
        ] );

        // Pass the state variables you want to share through the context
        const contextValue={
                battingTeam, setBattingTeam,
                bowlingTeam, setBowlingTeam,
                showOptions, setShowOptions,
                city, setCity,
                target, setTarget,
                score, setScore,
                wickets, setWickets,
                overs, setOvers,
                teams, setTeams,
                cities, setCities,
        };
        return <DataContext values={ { contextValues } } >
                { childen }
        </DataContext>
}


export default DataContext;
