import Options from './Options';
import { useState } from 'react';
// import DataContext from '../Context/DataContext';
const Row=( { battingTeam, bowlingTeam, setBattingTeam, setBowlingTeam } ) =>
{
        const [ showOptions, setShowOptions ]=useState( false );
        const [ target, setTarget ]=useState( '' );
        const [ score, setScore ]=useState( '' );
        const [ wickets, setWickets ]=useState( '' );
        const [ overs, setOvers ]=useState( '' );
        const [ city, setCity ]=useState( '' );

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
        return (
                <div >
                        <div className="ipl-row">
                                <input
                                        type="button"
                                        onClick={ () => setShowOptions( !showOptions ) }
                                        className="ipl-input-field"
                                        value="Select Batting Team"
                                />
                                <input
                                        type="button"
                                        onClick={ () => setShowOptions( !showOptions ) }
                                        className="ipl-input-field"
                                        value="Select Bowling Team"
                                />
                                <input
                                        type="button"
                                        onClick={ () => setShowOptions( !showOptions ) }
                                        className="ipl-input-field"
                                        value="Select City"
                                />
                                <input
                                        type="text"
                                        value={ target }
                                        onChange={ ( e ) => setTarget( e.target.value ) }
                                        placeholder="Target"
                                        className="ipl-input-field"
                                />
                                <input
                                        type="text"
                                        value={ score }
                                        onChange={ ( e ) => setScore( e.target.value ) }
                                        placeholder="Scored"
                                        className="ipl-input-field"
                                />
                                <input
                                        type="text"
                                        value={ overs }
                                        onChange={ ( e ) => setOvers( e.target.value ) }
                                        placeholder="Overs"
                                        className="ipl-input-field"
                                />
                                <input
                                        type="text"
                                        value={ wickets }
                                        onChange={ ( e ) => setWickets( e.target.value ) }
                                        placeholder="Wickets"
                                        className="ipl-input-field"
                                />
                        </div>
                        <div className="ipl-submit-btn">
                                <input type="submit" value="Predict Winning Team" />
                        </div>
                        <Options
                                showOptions={ showOptions }
                                setShowOptions={ setShowOptions }
                                options={ teams }
                                battingTeam={ battingTeam }
                                setBattingTeam={ setBattingTeam }
                                bowlingTeam={ bowlingTeam }
                                setBowlingTeam={ setBowlingTeam }
                        />
                        <Options
                                showOptions={ showOptions }
                                setShowOptions={ setShowOptions }
                                options={ teams }
                                battingTeam={ battingTeam }
                                setBattingTeam={ setBattingTeam }
                                bowlingTeam={ bowlingTeam }
                                setBowlingTeam={ setBowlingTeam }
                        />
                        <Options
                                showOptions={ showOptions }
                                setShowOptions={ setShowOptions }
                                options={ cities }
                                battingTeam={ battingTeam }
                                setBattingTeam={ setBattingTeam }
                                bowlingTeam={ bowlingTeam }
                                setBowlingTeam={ setBowlingTeam }
                        />
                </div>
        );
}

export default Row;
