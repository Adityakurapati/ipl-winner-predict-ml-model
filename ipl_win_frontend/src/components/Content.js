import Row from './Row'
const Content=( { battingTeam, bowlingTeam, setBattingTeam, setBowlingTeam } ) =>
{
        return (
                <main className='ipl-main-container'>
                        <section className='ipl-container'>
                                <form className='ipl-form' action='/result' method="POST" >
                                        {/* <input type="hidden" name="csrfmiddlewaretoken" value={ csrfToken } /> */ }
                                        <Row
                                                battingTeam={ battingTeam }
                                                setBattingTeam={ setBattingTeam }
                                                bowlingTeam={ bowlingTeam }
                                                setBowlingTeam={ setBowlingTeam } />
                                </form>
                                <div className='ball'></div>
                        </section>
                </main>
        )
}
export default Content;