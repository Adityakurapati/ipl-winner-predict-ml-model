import confetti from 'canvas-confetti';
const Result=( { result } ) =>
{
        const handleConfettiClick=() =>
        {
                let canvas=document.createElement( 'canvas' );
                canvas.width=600;
                canvas.height=600;

                let container=document.getElementsByClassName( 'btn-wrapper' )[ 0 ];
                container.appendChild( canvas );

                let confetti_button=confetti.create( canvas );
                confetti_button( {
                        particleCount: 500,
                        spread: 80,
                        startingVelocity: 15, // Typo: 'startingVelocity' instead of 'staringVelocity'
                        scaler: 1,
                        ticks: 90,
                } ).then( () =>
                {
                        container.removeChild( canvas ); // Remove the canvas from the container
                } );
        };

        return (
                <main className="result-container">
                        <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.0/dist/confetti.browser.min.js"></script>
                        <button className="btn-confetti" onClick={ handleConfettiClick }>
                                Click for Confetti
                        </button>
                        <div className="btn-wrapper"></div> {/* Add a wrapper for the confetti canvas */ }
                        <div className="team1"></div>
                        <div className="team2"></div>
                        <div className="result-text">...Loading</div>

                </main>
        );
};

export default Result;