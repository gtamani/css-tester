import React, { useState, useEffect, useRef } from 'react';
import cssTypes from '../helpers/Types';

export default function Borders () {
    const [width, setWidth] = useState(5),
    [type, setType] = useState("solid"),
    [color, setColor] = useState("#4C547B"),
    [radius, setRadius] = useState(24);
    
    const square = useRef();
    const { borderTypes } = cssTypes

    useEffect(() => {
        square.current.style.border = width+"px "+type+" "+color
        square.current.style.borderRadius = radius+"%"
    }, [width,type,color,radius]);

    return(
        <div className="grid-container">
            <div className="settings grid-container">
                <h2>Borders</h2>
                <div/>
                    {/* Border width */}
                    <label htmlFor="width">width</label>
                    <input type="range" name="width"
                    min="1" max="50" value={width}
                    onChange={(e) => setWidth(e.target.value)}/>
                
                    {/* Border type */}
                    <label htmlFor="type">type</label>
                    <select
                    name = "type" 
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    >
                    {borderTypes.map((e) => <option>{e}</option>)}
                    </select>

                    {/* Border color */}
                    <label htmlFor="color">Color</label>
                    <input 
                    type="color" name="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    />

                    {/* Border radius */}
                    <label htmlFor="radius">radius</label>
                    <input type="range" name="radius"
                    min="1" max="50" value={radius}
                    onChange={(e) => setRadius(e.target.value)}/>
                
            </div>
            <div className="output">
                <div ref={square} className="square"></div>
            </div>
        </div>
    )
}