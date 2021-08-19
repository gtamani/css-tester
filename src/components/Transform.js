import React, { useState, useEffect, useRef } from 'react';
import InputRange from '../hooks/useInputRange';

export default function Transform() {
    const [vars, setVars] = useState({
        traslateX:0,
        traslateY:15,
        traslateZ:0,
        rotate:20,
        rotateX:0,
        rotateY:20,
        skewX:0,
        skewY:20,
        scaleX:1,
        scaleY:1,
    }),

    square = useRef()

    useEffect(() => {
        console.log(`skew(${vars.skewX}deg,${vars.skewY}deg)`)
        square.current.style.cssText = `
        transform : translate3d(${vars.traslateX}px,${vars.traslateY}px,${vars.traslateZ}px)
        rotate(${vars.rotate}deg)
        rotateX(${vars.rotateX}deg)
        rotateY(${vars.rotateY}deg)
        skewX(${vars.skewX}deg)
        skewY(${vars.skewY}deg)
        scaleX(${vars.scaleX})
        scaleY(${vars.scaleY}); 
        `
    },[vars])

    const handleChange = (e) => {
        setVars({
            ...vars, 
            [e.target.name]:e.target.value
        })
    }

    return(
        <div className="grid-container">
            <div className="settings grid-container">
                <h2>Transform</h2>
                <div/>
                    <InputRange name="traslateX" range={[0,100]} var={vars.traslateX} handler={handleChange}/>
                    <InputRange name="traslateY" range={[0,100]} var={vars.traslateY} handler={handleChange}/>
                    <InputRange name="traslateZ" range={[0,100]} var={vars.traslateZ} handler={handleChange}/>
                    <InputRange name="rotate" range={[0,360]} var={vars.rotate} handler={handleChange}/>
                    <InputRange name="rotateX" range={[0,360]} var={vars.rotateX} handler={handleChange}/>
                    <InputRange name="rotateY" range={[0,360]} var={vars.rotateY} handler={handleChange}/>
                    <InputRange name="skewX" range={[0,360]} var={vars.skewX} handler={handleChange}/>
                    <InputRange name="skewY" range={[0,360]} var={vars.skewY} handler={handleChange}/>
                    <InputRange name="scaleX" range={[0.5,2,0.05]} var={vars.scaleX} handler={handleChange}/>
                    <InputRange name="scaleY" range={[0.5,2,0.05]} var={vars.scaleY} handler={handleChange}/>
            </div>
            <div className="output" style={{"perspective":"500px"}}>
                <div ref={square} className="square"></div>
            </div>
        </div>
    )
}