import Row from './Row'
const Content=() =>
{
        return (
                <main className='ipl-main-container'>
                        <section className='ipl-container'>
                                <form className='ipl-form' action='/result' method="POST" >
                                        <Row />
                                </form>
                        </section>
                </main>
        )
}
export default Content;