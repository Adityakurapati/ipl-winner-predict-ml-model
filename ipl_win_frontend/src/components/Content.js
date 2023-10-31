import Row from './Row'
const Content=() =>
{
        return (
                <main className='ipl-main-container'>
                        <section className='ipl-container'>
                                <form className='ipl-form' action='/result' method="POST" >
                                        {/* <input type="hidden" name="csrfmiddlewaretoken" value={ csrfToken } /> */ }
                                        <Row />
                                </form>
                                <div className='ball'></div>
                        </section>
                </main>
        )
}
export default Content;