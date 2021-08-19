import React, { useState, useEffect, useRef } from 'react';
import InputRange from '../hooks/useInputRange';

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
        console.log(vars)
        img.current.style.filter = `
        blur(`+vars.blur+`px) 
        brightness(`+vars.brightness+`%) 
        contrast(`+vars.contrast+`%) 
        grayscale(`+vars.grayScale+`%) 
        hue-rotate(`+vars.hueRotate+`deg) 
        opacity(`+vars.opacity+`%) 
        invert(`+vars.invert+`%) 
        saturate(`+vars.saturate+`%) 
        sepia(`+vars.sepia+`%)`
    },[vars])

    return(
        <div className="grid-container">
            <div className="settings grid-container">
                <h2>Filter</h2>
                <div/>
                    <InputRange name="blur" range={[0,50]} var={vars.blur} handler={handleChange}/>
                    <InputRange name="brightness" range={[0,200]} var={vars.brightness} handler={handleChange}/>
                    <InputRange name="contrast" range={[0,200]} var={vars.contrast} handler={handleChange}/>
                    <InputRange name="grayScale" range={[0,100]} var={vars.grayScale} handler={handleChange}/>
                    <InputRange name="hueRotate" range={[0,360]} var={vars.hueRotate} handler={handleChange}/>
                    <InputRange name="opacity" range={[0,100]} var={vars.opacity} handler={handleChange}/>
                    <InputRange name="invert" range={[0,100]} var={vars.invert} handler={handleChange}/>
                    <InputRange name="saturate" range={[0,500]} var={vars.saturate} handler={handleChange}/>
                    <InputRange name="sepia" range={[0,100]} var={vars.sepia} handler={handleChange}/>
                </div>

            <div className="centered">
                <img className="img-container img-object-fit" ref={img} src="https://i.pinimg.com/736x/2a/d6/1e/2ad61e44d13788dc5aa832ed2390cf8c.jpg" alt="drums"/>
            </div>
        </div>
    )
}