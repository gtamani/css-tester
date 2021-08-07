import React, {useState, useEffect, useRef} from 'react';
import './shadow.scss'
import InputRange from '../hooks/useInputRange';

export default function Shadow () {

    const [vars, setVars] = useState({
        shadowX : 10,
        shadowY : 10,
        blur : 50,
        spread : 10,
        inset : false,
        color : "black"
    }),
    square = useRef();

    useEffect(() => {
        const prefix = vars.inset ? "inset " : ""
        console.log(vars.inset,prefix)
        //console.log(`${prefix}${shadowX}px ${shadowY}px ${blur}px ${spread}px ${color}`)
        square.current.style.boxShadow = `${prefix}${vars.shadowX}px ${vars.shadowY}px ${vars.blur}px ${vars.spread}px ${vars.color}`
    },[vars])

    const handleChange = (e) => {
        setVars({
            ...vars, 
            [e.target.name]:e.target.value
        })
        console.log(vars)
    }

    return(
        <div className="grid-container">
            <div className="settings grid-container">

                <h2>Shadows</h2>

                <div/>

                    {/* Inset checkbox */}
                    <label htmlFor="inset">Inset</label>
                    <input
                    type="checkbox" name="inset"
                    value={vars.inset}
                    onChange={handleChange}
                    />
                
                    <InputRange name="shadowX" range={[-100,100]} var={vars.shadowX} handler={handleChange}/>
                    <InputRange name="shadowY" range={[-100,100]} var={vars.shadowY} handler={handleChange}/>
                    <InputRange name="blur" range={[0,100]} var={vars.blur} handler={handleChange}/>
                    <InputRange name="spread" range={[-10,20]} var={vars.spread} handler={handleChange}/>

                    {/* Shadow color */}
                    <label htmlFor="color">Color</label>
                    <input 
                    type="color" name="color"
                    value={vars.color}
                    onChange={handleChange}
                    />
                
                
            </div>

            <div className="output">
                <div ref={square} className="square"></div>
            </div>
        </div>
    )
}