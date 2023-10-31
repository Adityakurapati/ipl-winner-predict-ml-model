import { useStoreState, useStoreActions } from 'easy-peasy';

const Options=( { options, showOptions, setShowOptions } ) =>
{
        // Store States
        // Store Actions 
        const { teams }=useStoreState( state => state.teams );
        const { setBattingTeam }=useStoreActions( action => action.setBattingTeam );
        const { setBowlingTeam }=useStoreActions( action => action.setBowlingTeam );
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
                        { options.map( ( team, index ) => (
                                <span key={ index } className="team-field" onClick={ ( e ) => handleClick( e, team ) } >
                                        <h1>{ team }</h1>
                                </span>
                                // <span key={ index } className="team-field" onClick={ ( e ) => handleClick( e, team ) } style={ { background: colors[ index ] } }>
                                //         <h1>{ team }</h1>
                                // </span>
                        ) ) }
                </div>
        );
};

export default Options;
