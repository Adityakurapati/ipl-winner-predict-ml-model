import { useContext } from 'react';
import DataContext from '../Context/DataContext';
const Options=( { forcomponent, setBattingTeam, setBowlingTeam, showOptions, setShowOptions, options, setCity } ) =>
{
        const handleClick=( e, option ) =>
        {
                if ( forcomponent=='batting' )
                {
                        setBattingTeam( option );
                }
                if ( forcomponent=='bowling' )
                {
                        setBowlingTeam( option );
                }
                if ( forcomponent=='city' )
                {
                        setCity( option );
                }
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
                <div className={ showOptions? "teams-container team-container-names":"teams-container teams-hidden-container" } style={ { zIndex: 10 } }>
                        { options.map( ( option, index ) => (
                                <span key={ index } className="team-field" onClick={ ( e ) => handleClick( e, option ) } >
                                        <h1>{ option }</h1>
                                </span>
                        ) ) }
                </div>
        );
};

export default Options;
