import React, {useState, useEffect, useRef} from 'react';
import './shadow.scss'
import InputRange from '../hooks/useInputRange';
import InputColor from '../hooks/useInputColor';



export default function Shadow () {
    const [vars, setVars] = useState({
        shadowX : 10,
        shadowY : 10,
        blur : 50,
        spread : 10,
        inset : false,
        color : "#000000",
    }),
    square = useRef();

    useEffect(() => {
        const prefix = vars.inset ? "inset " : ""
        square.current.style.boxShadow = `${prefix}${vars.shadowX}px ${vars.shadowY}px ${vars.blur}px ${vars.spread}px ${vars.color}`
    },[vars])

    const handleChange = (e) => {
        setVars({
            ...vars, 
            [e.target.name]:e.target.value
        })
        console.log(e)
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
                    <InputColor name="color" var={vars.color} handler={handleChange}/>
            </div>

            <div className="output">
                <div ref={square} className="square"></div>
            </div>
        </div>
    )
}

