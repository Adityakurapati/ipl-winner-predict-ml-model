import Options from './Options';
import { useContext } from 'react';
import { DataContext } from '../Context/DataContext'
const Row=() =>
{
        // Store Actions
        const { showOptions }=useContext( DataContext );
        const { city }=useContext( DataContext );
        const { cities }=useContext( DataContext );
        const { target }=useContext( DataContext );
        const { score }=useContext( DataContext );
        const { wickets }=useContext( DataContext );
        const { overs }=useContext( DataContext );
        const { teams }=useContext( DataContext );

        // Store Actions 
        const { setShowOptions }=useContext( DataContext );
        const { setCity }=useContext( DataContext );
        const { setTarget }=useContext( DataContext );
        const { setScore }=useContext( DataContext );
        const { setOvers }=useContext( DataContext );
        const { setWickets }=useContext( DataContext );

        return (
                <div >
                        <div className="ipl-row">
                                <input
                                        type="button"
                                        onClick={ () => setShowOptions( !showOptions ) }
                                        className="ipl-input-field"
                                        value="Select Batting Team"
                                />
                                <input
                                        type="button"
                                        onClick={ () => setShowOptions( !showOptions ) }
                                        className="ipl-input-field"
                                        value="Select Bowling Team"
                                />
                                <input
                                        type="button"
                                        onClick={ () => setShowOptions( !showOptions ) }
                                        className="ipl-input-field"
                                        value="Select City"
                                />
                                <input
                                        type="text"
                                        value={ target }
                                        onChange={ ( e ) => setTarget( e.target.value ) }
                                        placeholder="Target"
                                        className="ipl-input-field"
                                />
                                <input
                                        type="text"
                                        value={ score }
                                        onChange={ ( e ) => setScore( e.target.value ) }
                                        placeholder="Scored"
                                        className="ipl-input-field"
                                />
                                <input
                                        type="text"
                                        value={ overs }
                                        onChange={ ( e ) => setOvers( e.target.value ) }
                                        placeholder="Overs"
                                        className="ipl-input-field"
                                />
                                <input
                                        type="text"
                                        value={ wickets }
                                        onChange={ ( e ) => setWickets( e.target.value ) }
                                        placeholder="Wickets"
                                        className="ipl-input-field"
                                />
                        </div>
                        <div className="ipl-submit-btn">
                                <input type="submit" value="Predict Winning Team" />
                        </div>
                        <Options
                                showOptions={ showOptions }
                                setShowOptions={ setShowOptions }
                                options={ teams }
                        />
                        <Options
                                showOptions={ showOptions }
                                setShowOptions={ setShowOptions }
                                options={ teams }
                        />
                        <Options
                                showOptions={ showOptions }
                                setShowOptions={ setShowOptions }
                                options={ cities }
                        />
                </div>
        );
}

export default Row;
