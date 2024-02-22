import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

const handleConfettiClick=() =>
{
        let canvas=document.createElement( 'canvas' );
        canvas.width=600;
        canvas.height=600;

        let container=document.getElementsByClassName( 'btn-wrapper' )[ 0 ];
        container.appendChild( canvas );

        var originX=50;
        var originY=50;
        let confettiButton=confetti.create( canvas );
        confettiButton( {
                particleCount: 500,
                spread: 80,
                origin: { x: originX, y: originY },
                startVelocity: 15,
                scaler: 1,
                ticks: 90,
        } ).then( () =>
        {
                container.removeChild( canvas ); // Remove the canvas from the container
        } );
};


const handleWinStuck=() =>
{
        // Select all elements with class 'team1' and 'team2'
        const elements1=document.querySelectorAll( '.team1' );
        const elements2=document.querySelectorAll( '.team2' );

        // Check if elements exist and have a length greater than 1
        if ( elements1.length>1&&elements2.length>1 )
        {
                // Access the second element in the NodeList
                const element1=elements1[ 1 ];
                const element2=elements2[ 1 ];

                const queryParams=new URLSearchParams( window.location.search );
                const wonTeam=queryParams.get( 'wonTeamNo' );

                if ( wonTeam==1 )
                {
                        element1.classList.add( 'stuck' );
                        element2.classList.add( 'blur' );
                } else if ( wonTeam==2 )
                {
                        element1.classList.add( 'blur' );
                        element2.classList.add( 'stuck' );
                }
                // Add an else statement if you want to handle other cases or provide default behavior.
        } else
        {
                console.error( "Error: Elements with class 'team1' or 'team2' not found or insufficient elements." );
        }
};

const Result=() =>
{
        const [ isLoading, setIsLoading ]=useState( true );
        const [ resultText, setResultText ]=useState( '' );

        const queryParams=new URLSearchParams( window.location.search );
        const win=queryParams.get( 'win' );
        const loss=queryParams.get( 'loss' );
        const wonTeamNo=queryParams.get( 'wonTeamNo' );
        const result=queryParams.get( 'result' );
        const team1=queryParams.get( 'team1' );
        const team2=queryParams.get( 'team2' );

        useEffect( () =>
        {
                const fetchData=async () =>
                {
                        try
                        {
                                // Simulate an API call or any asynchronous operation
                                await new Promise( ( resolve ) => setTimeout( resolve, 3000 ) );

                                setIsLoading( false );
                                setResultText( `${ result } has the most probability to win` );
                                // handleConfettiClick();
                                handleWinStuck();
                        } catch ( error )
                        {
                                console.error( 'Error fetching data:', error );
                        }
                };
                fetchData();
        }, [ result ] );

        return (
                <main className="result-container">
                        <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.0/dist/confetti.browser.min.js"></script>
                        <button className="btn-confetti" onClick={ handleConfettiClick }>
                                Click for Confetti
                        </button>
                        <div className="btn-wrapper"></div>
                        <div
                                className={ wonTeamNo===1? 'team1':'team1' } />
                        <div
                                className={ wonTeamNo===2? 'team2':'team2' } />
                        {/* <div
                                className={ wonTeamNo==1? 'team1 stuck':'team1 blur' }
                                style={ {
                                        background: `url('..\..\images\${ team1 }.jpg')`,
                                } }
                        ></div>
                        <div
                                className={ wonTeamNo==2? 'team2 stuck':'team2 blur' }
                                style={ {
                                        background: `url('../../images/${ team2 }.jpg')`,
                                } }
                        ></div> */}
                        <div className="probab1">{ win } %</div>
                        <div className="probab2">{ loss } %</div>
                        { !isLoading&&<div className="result-text">{ resultText }</div> }
                        { isLoading&&<div className="result-text">Loading ...</div> }
                </main>
        );
};

export default Result;
