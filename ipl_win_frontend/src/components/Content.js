import Row from './Row';

const Content=( { battingTeam, bowlingTeam, showOptions, target, score, wickets, overs, city, setBattingTeam, setBowlingTeam, setShowOptions, setTarget, setScore, setWickets, setOvers, setCity,

        win, loss, wonTeam, result, wonTeamNo, setWin, setLoss, setWonTeam, setLossTeam, setResult, setWonTeamNo } ) =>
{
        const handleSubmit=async ( e ) =>
        {
                e.preventDefault();

                let requestData={
                        'battingTeam': battingTeam,
                        'bowlingTeam': bowlingTeam,
                        'target': target,
                        'score': score,
                        'wickets': wickets,
                        'overs': overs,
                        'city': city
                };
                const queryParams=new URLSearchParams( requestData ).toString();
                const response=await fetch( `${ window.location.href }resultPredict?${ queryParams }` );
                const data=await response.json();

                console.log( "Response  ", response )
                console.log( "Data   ", data )
                console.log( "win   ", data.win )
                console.log( "loss   ", data.loss )

                setWin( Math.ceil( data.win ) );
                setLoss( Math.ceil( data.loss ) );

                if ( win>loss )
                {
                        console.log( "win Is Greater " )
                        setWonTeam( battingTeam )
                        setLossTeam( bowlingTeam )
                        setWonTeamNo( 1 )
                }
                else
                {
                        console.log( "Loss Is Greater " )
                        setWonTeam( bowlingTeam )
                        setLossTeam( battingTeam )
                        setWonTeamNo( 2 )
                }
                console.log( "Win ", win, loss, wonTeamNo, wonTeam )
                setResult( ( wonTeam.replaceAll( ' ', '_' ) ).toString() )
                console.log( result )
                const targetUrl=`${ window.location.href }result?result=${ result }&win=${ win }&loss=${ loss }&wonTeamNo=${ wonTeamNo }&team1=${ battingTeam.replace( ' ', '_' ) }&team2=${ bowlingTeam.replace( ' ', '_' ) }`
                // setTimeout( () =>
                // {
                //         window.location.href=targetUrl
                // }, 10000 )
                console.log( `Target : ${ targetUrl }` )
        };

        return (
                <main className='ipl-main-container'>
                        <section className='ipl-container'>
                                <form className='ipl-form' method="POST" action="/result" onSubmit={ ( e ) => handleSubmit( e ) }>
                                        {/* <input type="hidden" name="csrfmiddlewaretoken" value="{% csrf_token %}" /> */ }
                                        <Row
                                                battingTeam={ battingTeam }
                                                setBattingTeam={ setBattingTeam }
                                                bowlingTeam={ bowlingTeam }
                                                setBowlingTeam={ setBowlingTeam }
                                                showOptions={ showOptions }
                                                setShowOptions={ setShowOptions }
                                                target={ target }
                                                setTarget={ setTarget }
                                                score={ score }
                                                setScore={ setScore }
                                                wickets={ wickets }
                                                setWickets={ setWickets }
                                                overs={ overs }
                                                setOvers={ setOvers }
                                                city={ city }
                                                setCity={ setCity }
                                        />
                                </form>
                                <div className='ball'></div>
                        </section>
                </main>
        );
};

export default Content;
