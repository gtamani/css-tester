import React, { useState, useEffect, useRef } from 'react';
import cssTypes from '../helpers/Types';
import Select from '../hooks/useSelect';

export default function ObjectFit () {
    const [vars, setVars] = useState({
        objectFit : "fill",
    });
    const img = useRef(),
    { objectFit } = cssTypes

    const handleChange = (e) => {
        setVars({
            ...vars, 
            [e.target.name]:e.target.value
        })
    }

    useEffect(() => {
        console.log(vars.objectFit)
        img.current.style.objectFit = vars.objectFit
    }, [vars]);

    return(
        <div className="grid-container">
            <div className="settings grid-container">
                <h2>Object Fit</h2><div/>
                <Select name="objectFit" options={objectFit} var={vars.objectFit} handler={handleChange}/>

            </div>
            <div className="centered flex-container">
                <div className="img-container">
                    <img ref={img} 
                    className="img-object-fit"
                    src="https://mcdn.wallpapersafari.com/medium/42/47/vcmp6j.jpg" 
                    loading="lazy"
                    alt="guitar"/>
                </div>
            </div>
        </div>
    )
}