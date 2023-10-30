import { useState } from 'react';
const Row=() =>
{
        const [ battingTeam, setBattingTeam ]=useState( '' );
        return (
                <div className="ipl-row">
                        <div>
                                <input type="text"
                                        value={ battingTeam }
                                        onChange={ ( e ) => setBattingTeam( e.target.value ) }
                                        placeholder="Batting Team"
                                        className="ipl-input-field" />
                        </div>
                        <div>
                                <input type="submit"
                                />
                        </div>
                </div>
        )
}
export default Row;