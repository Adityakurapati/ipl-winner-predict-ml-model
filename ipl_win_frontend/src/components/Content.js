import Row from './Row';

const Content=( { battingTeam, bowlingTeam, showOptions, target, score, wickets, overs, city, setBattingTeam, setBowlingTeam, setShowOptions, setTarget, setScore, setWickets, setOvers, setCity } ) =>
{
        const handleSubmit=async ( e ) =>
        {
                e.preventDefault();

                let postData={
                        'battingTeam': battingTeam,
                        'bowlingTeam': bowlingTeam,
                        'target': target,
                        'score': score,
                        'wickets': wickets,
                        'overs': overs,
                        'city': city
                };

                const response=await fetch( `${ window.location.href }result`, {
                        method: 'post',
                        headers: {
                                'Content-Type': 'application/json'
                        },
                        body: JSON.stringify( postData ),
                } );
                // window.location.href=`${ window.location.href }/result`;

                // Handle the response
        };

        return (
                <main className='ipl-main-container'>
                        <section className='ipl-container'>
                                <form className='ipl-form' method="POST" onSubmit={ ( e ) => handleSubmit( e ) }>
                                        {/* {% csrf_token %} */ }
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
