const useFetchApi=async ( data, method ) =>
{
        if ( method==='post' )
        {
                try
                {
                        const response=await fetch( `${ window.location.href }/result`, {
                                method: 'post',
                                headers: {
                                        'Content-Type': 'application/json', // Corrected the header key
                                },
                                body: JSON.stringify( data ),
                        } );

                        return response;
                } catch ( error )
                {
                        // Handle network errors here
                        throw new Error( 'Network error' );
                }
        }
};

export default useFetchApi;
