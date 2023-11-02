import Options from './Options';
import { useState, useContext } from 'react';
import DataContext from '../Context/DataContext';

const Row=( { battingTeam, bowlingTeam, showOptions, target, score, wickets, overs, city, setBattingTeam, setBowlingTeam, setShowOptions, setTarget, setScore, setWickets, setOvers, setCity } ) =>
{
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
        const [ forComponent, setForComponent ]=useState( '' );
        const [ options, setOptions ]=useState( teams );


        const handleOptions=( component ) =>
        {
                setShowOptions( !showOptions )
                if ( component=='batting' )
                {
                        setOptions( teams );
                        setForComponent( component )
                }
                if ( component=='bowling' )
                {
                        setOptions( teams );
                        setForComponent( component );
                }
                if ( component=='city' )
                {
                        setOptions( cities );
                        setForComponent( component );
                }
        }
        return (
                <div >
                        <div className="ipl-row">
                                <input
                                        type="button"
                                        onClick={ () => handleOptions( 'batting' ) }
                                        className="ipl-input-field"
                                        value={battingTeam}
                                />
                                <input
                                        type="button"
                                        onClick={ () => handleOptions( 'bowling' ) }
                                        className="ipl-input-field"
                                        value={bowlingTeam}
                                />
                                <input
                                        type="button"
                                        onClick={ () => handleOptions( 'city' ) }
                                        className="ipl-input-field"
                                        value={city}
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
                                options={ options }
                                setBattingTeam={ setBattingTeam }
                                setBowlingTeam={ setBowlingTeam }
                                setCity={ setCity }
                                forcomponent={ forComponent }
                        />
                </div>
        );
}

export default Row;
