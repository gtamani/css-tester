import React, { useState, useEffect, useRef } from 'react';

export default function Filter () {
    const [vars, setVars] = useState({
        blur:0,
        brightness:100,
        contrast:100,
        grayScale:0,
        hueRotate:0,
        invert:0,
        opacity:100,
        saturate:100,
        sepia:0
    })
    
    const handleChange = (e) => {
        setVars({
            ...vars, 
            [e.target.name]:e.target.value
        })
    }

    const img = useRef()

    useEffect(() => {
        console.log(`blur(`+vars.blur+`px) brightness(`+vars.brightness+`%) contrast(`+vars.contrast+`%) grayscale(`+vars.grayScale+`%) hue-rotate(`+vars.hueRotate+`deg) opacity(`+vars.opacity+`%) invert(`+vars.invert+`%) saturate(`+vars.saturate+`%) sepia(`+vars.sepia+`%)`)
        img.current.style.filter = `blur(`+vars.blur+`px) brightness(`+vars.brightness+`%) contrast(`+vars.contrast+`%) grayscale(`+vars.grayScale+`%) hue-rotate(`+vars.hueRotate+`deg) opacity(`+vars.opacity+`%) invert(`+vars.invert+`%) saturate(`+vars.saturate+`%) sepia(`+vars.sepia+`%)`
    },[vars])

    return(
        <div className="grid-container">
            <div className="settings grid-container">
                <h2>Filter</h2>

                <div/>
                {/* Blur effect */} 
                <label htmlFor="blur">Blur</label>
                <input type="range" name="blur"
                min="0" max="50" value={vars.blur}
                onChange={handleChange}/>
            
            
                {/* Brightness */}
                <label htmlFor="brightness">brightness</label>
                <input type="range" name="brightness"
                min="0" max="200" value={vars.brightness}
                onChange={handleChange}/>
            
            
                {/* Contrast */}
                <label htmlFor="contrast">contrast</label>
                <input type="range" name="contrast"
                min="0" max="200" value={vars.contrast}
                onChange={handleChange}/>
            
            
                {/* Grayscale */}
                <label htmlFor="grayScale">grayScale</label>
                <input type="range" name="grayScale"
                min="0" max="100" value={vars.grayScale}
                onChange={handleChange}/>
            
            
                {/* Hue Rotate */}
                <label htmlFor="hueRotate">hueRotate</label>
                <input type="range" name="hueRotate"
                min="0" max="360" value={vars.hueRotate}
                onChange={handleChange}/>
            
            
                {/* Opacity */}
                <label htmlFor="opacity">opacity</label>
                <input type="range" name="opacity"
                min="0" max="100" value={vars.opacity}
                onChange={handleChange}/>
            
            
                {/* Invert */}
                <label htmlFor="invert">invert</label>
                <input type="range" name="invert"
                min="0" max="100" value={vars.invert}
                onChange={handleChange}/>
            
            
                {/* Saturate */}
                <label htmlFor="saturate">saturate</label>
                <input type="range" name="saturate"
                min="0" max="500" value={vars.saturate}
                onChange={handleChange}/>
            
            
                {/* Sepia */}
                <label htmlFor="sepia">sepia</label>
                <input type="range" name="sepia"
                min="0" max="100" value={vars.sepia}
                onChange={handleChange}/>
            </div>

            <div className="centered">
                <img ref={img} src="https://i.pinimg.com/736x/2a/d6/1e/2ad61e44d13788dc5aa832ed2390cf8c.jpg" alt="drums"/>
            </div>
        </div>
    )
}