import { createContext } from 'react';

// BuiltIn Hooks
import { useState } from 'react';
// import api from '../api/posts';

//Custom Hooks
// import useAxiosFetch from '../hooks/useAxiosFetch';

const DataContext=createContext( {} );

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
        const teams=[
                "Mumbai Indians",
                "Sunrisers Hyderabad",
                "Chennai Super Kings",
                "Royal Challengers Bangalore",
                "Kolkata Knight Riders",
                "Sunrisers Hyderabad",
                "Delhi Capitals",
                "Kings XI Punjab",
                "Rajasthan Royals"
        ];
        const cities=[
                'Hyderabad', 'Bangalore', 'Mumbai', 'Indore', 'Kolkata', 'Delhi',
                'Chandigarh', 'Jaipur', 'Cape Town', 'Durban', 'Port Elizabeth',
                'Centurion', 'East London', 'Johannesburg', 'Kimberley', 'Bloemfontein',
                'Ahmedabad', 'Cuttack', 'Nagpur', 'Dharamsala', 'Chennai', 'Visakhapatnam',
                'Pune', 'Raipur', 'Ranchi', 'Abu Dhabi', 'Sharjah', 'Mohali', 'Bengaluru'
        ];
        const [ mycities, setMYCity ]=useState( teams )
        // const { data, fetchError, isLoading }=useAxiosFetch( "localhost:3500/posts" );


        // Pass All Values to Provider Instead of Drillling Them Down As Props 
        return <DataContext.Provider value={ {
                battingTeam: battingTeam, setBattingTeam,
                bowlingTeam, setBowlingTeam,
                showOptions: showOptions, setShowOptions: setShowOptions,
                city, setCity: setCity,
                target, setTarget,
                score, setScore,
                wickets, setWickets,
                overs, setOvers,
                teams: teams,
                cities
                , mycities
        } }>
                { children }
        </DataContext.Provider>
}
export default DataContext;
