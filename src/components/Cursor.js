import React, { useState } from 'react';
import cssTypes from '../helpers/Types'
import Select from '../hooks/useSelect'

export default function Cursor () {
    const [vars, setVars] = useState({});
    const { cursors } = cssTypes

    const handler = (e) => {
        document.body.style.cursor = e.target.value
    }
    return(
        <div className="grid-container">
            <h2 className="settings">Cursor</h2>
            <div className="flex-container">

                <Select name="cursor" options={cursors} var={vars.cursor} handler={handler}/>
            </div>
        </div>
    )
}