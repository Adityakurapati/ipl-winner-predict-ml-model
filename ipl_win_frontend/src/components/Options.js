import { useContext } from 'react';
import DataContext from '../Context/DataContext';
const Options=( { battingTeam, bowlingTeam, setBattingTeam, setBowlingTeam, showOptions, setShowOptions, options } ) =>
{
        // Store States
        const handleClick=( e, team ) =>
        {
                setBattingTeam( team );
                setShowOptions( !showOptions );
        };

        // Change the colors in the colors array
        const colors=[
                'orange',
                'yellow',
                'brown',
                'purple',
                'grey',
                'violet',
                'red',
                'pebbleblue',
        ];

        return (
                <div className={ showOptions? "teams-container team-container-names":"teams-container teams-hidden-container" }>
                        { options }
                </div>
        );
};

export default Options;
