import Row from './Row'
const Content=( { csrfToken } ) =>
{
        return (
                <main className='ipl-main-container'>
                        <script>
        // Set a JavaScript variable with the CSRF token value
                                window.CSRF_TOKEN = "{ { csrf_token } }";
                        </script>

                        <script src="{% static 'ipl-win-frontend.js' %}"></script>
                        <section className='ipl-container'>
                                <form className='ipl-form' action='/result' method="POST" >
                                        <input type="hidden" name="csrfmiddlewaretoken" value={ csrfToken } />
                                        <Row />
                                </form>
                        </section>
                </main>
        )
}
export default Content;