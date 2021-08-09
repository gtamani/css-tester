import React, { useState, useEffect, useRef } from 'react';
import cssTypes from '../helpers/Types'
import InputColor from '../hooks/useInputColor';
import Select from '../hooks/useSelect';


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
                <Select name="gradient" options={gradientOptions} var={vars.gradient} handler={handleChange}/>
                { vars.gradient !== "linear-gradient" ||
                    <Select name="direction" options={directionOptions} var={vars.direction} handler={handleChange}/>
                }
                <InputColor name="fromColor" var={vars.fromColor} handler={handleChange}/>
                <InputColor name="toColor" var={vars.toColor} handler={handleChange}/>
            </div>
            <div className="output">
                <div ref={square} className="square"></div>
            </div>

        </div>
    )
}