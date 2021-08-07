import React, { useState, useEffect, useRef } from 'react';
import cssTypes from '../helpers/Types'


export default function Gradient () {
    const [vars, setVars] = useState({
        direction:"to bottom",
        gradient:"linear-gradient",
        fromColor:"#15acff",
        toColor:"#4C547B",
        new:3,
    }),
    { gradientOptions } = cssTypes,
    { directionOptions } = cssTypes;

    
    const square = useRef()
    const handleChange = (e) => {
        setVars({
            ...vars, 
            [e.target.name]:e.target.value
        })
    }

    useEffect(() => {
        let style = vars.gradient === "linear-gradient" ? vars.direction+", " : "";
        let px = 
            vars.gradient === "repeating-radial-gradient" || 
            vars.gradient == "repeating-linear-gradient" 
            ? ", 20px" 
            : ""
        square.current.style.background = `${vars.gradient}(${style}${vars.fromColor}, ${vars.toColor})`
    },[vars]); // When updated...

    return(
        <div className="grid-container">
            <div className="settings grid-container">
                <h2>Gradient</h2><br/>
                
                <label htmlFor="gradient">Gradient type</label>
                <select
                name = "gradient" value={vars.gradient}
                onChange={handleChange}
                >
                    {gradientOptions.map((e) => <option key={e}>{e}</option>)}
                </select>

                <label htmlFor="direction">direction type</label>
                <select
                name = "direction" value={vars.direction}
                onChange={handleChange}
                >
                    {directionOptions.map((e) => <option key={e}>{e}</option>)}
                </select>

                <label htmlFor="fromColor">fromColor</label>
                <input 
                type="color" name="fromColor"
                value={vars.fromColor}
                onChange={handleChange}
                />

                <label htmlFor="toColor">toColor</label>
                <input 
                type="color" name="toColor"
                value={vars.toColor}
                onChange={handleChange}
                />

            </div>
            <div className="output">
                <div ref={square} className="square"></div>
            </div>

        </div>
    )
}