import { createStore, action, thunk } from 'easy-peasy';

export default createStore( {
        teams: [
                "Mumbai Indians",
                "Sunrisers Hyderabad",
                "Chennai Super Kings",
                "Royal Challengers Bangalore",
                "Kolkata Knight Riders",
                "Sunrisers Hyderabad",
                "Delhi Capitals",
                "Kings XI Punjab",
                "Rajasthan Royals"
        ],
        cities: [
                'Hyderabad', 'Bangalore', 'Mumbai', 'Indore', 'Kolkata', 'Delhi',
                'Chandigarh', 'Jaipur', 'Cape Town', 'Durban', 'Port Elizabeth',
                'Centurion', 'East London', 'Johannesburg', 'Kimberley', 'Bloemfontein',
                'Ahmedabad', 'Cuttack', 'Nagpur', 'Dharamsala', 'Chennai', 'Visakhapatnam',
                'Pune', 'Raipur', 'Ranchi', 'Abu Dhabi', 'Sharjah', 'Mohali', 'Bengaluru'
        ],
        battingTeam: '',
        setBattingTeam: action( ( state, payload ) =>
        {
                state.battingTeam=payload
        } ),
        bowlingTeam: '',
        setBowlingTeam: action( ( state, payload ) =>
        {
                state.bowlingTeam=payload
        } ),
        showOptions: false,
        setShowOptions: action( ( state, payload ) =>
        {
                state.showOptions=payload
        } ),
        city: '',
        setCity: action( ( state, payload ) =>
        {
                state.city=payload
        } ),
        target: '',
        setTarget: action( ( state, payload ) =>
        {
                state.target=payload
        } ),
        score: '',
        setScore: action( ( state, payload ) =>
        {
                state.score=payload
        } ),
        overs: '',
        setOvers: action( ( state, payload ) =>
        {
                state.overs=payload
        } ),
        wickets: '',
        setWickets: action( ( state, payload ) =>
        {
                state.wickets=payload
        } )
} )