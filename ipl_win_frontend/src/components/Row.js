import Options from './Options';
import { useStoreState, useStoreActions } from 'easy-peasy';

const Row=() =>
{
        // Store Actions
        const { showOptions }=useStoreState( state => state.showOptions );
        const { city }=useStoreState( state => state.city );
        const { cities }=useStoreState( state => state.cities );
        const { target }=useStoreState( state => state.target );
        const { score }=useStoreState( state => state.score );
        const { wickets }=useStoreState( state => state.wickets );
        const { overs }=useStoreState( state => state.overs );
        const { teams }=useStoreState( state => state.teams );

        // Store Actions 
        const { setShowOptions }=useStoreActions( action => action.setShowOptions );
        const { setCity }=useStoreActions( action => action.setCity );
        const { setTarget }=useStoreActions( action => action.setTarget );
        const { setScore }=useStoreActions( action => action.setScore );
        const { setOvers }=useStoreActions( action => action.setOvers );
        const { setWickets }=useStoreActions( action => action.setWickets );

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
