import React, { useState, useEffect, useRef } from 'react';
import cssTypes from '../helpers/Types';
import InputRange from '../hooks/useInputRange';
import Select from '../hooks/useSelect';
import InputColor from '../hooks/useInputColor';

export default function Borders () {
    const [vars, setVars] = useState({
        type:"solid",
        width:5,
        color:"#4C547B",
        radius:24
    }),
    square = useRef(),
    { borderTypes } = cssTypes

    useEffect(() => {
        square.current.style.border = `${vars.width}px ${vars.type} ${vars.color}`
        square.current.style.borderRadius = vars.radius+"%"
    }, [vars]);

    const handleChange = (e) => {
        setVars({
            ...vars, 
            [e.target.name]:e.target.value
        })
    }

    return(
        <div className="grid-container">
            <div className="settings grid-container">
                <h2>Borders</h2>
                <div/>

                    <InputRange name="width" range={[1,50]} var={vars.width} handler={handleChange}/>
                    <Select name="type" options={borderTypes} var={vars.type} handler={handleChange}/>
                    <InputColor name="color" var={vars.color} handler={handleChange}/>
                    <InputRange name="radius" range={[1,50]} var={vars.radius} handler={handleChange}/>

            </div>
            <div className="output">
                <div ref={square} className="square"></div>
            </div>
        </div>
    )
}