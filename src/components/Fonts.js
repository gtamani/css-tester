import React, { useState, useEffect, useRef } from 'react';
import cssTypes from '../helpers/Types';
import InputRange from '../hooks/useInputRange';
import Select from '../hooks/useSelect';

export default function Fonts () {
    const [vars, setVars] = useState({
        fontFamily:"Courier New",
        fontSize:20,
        textIndent:10,
        textAlign : "justify",
        lineHeight : 1.3,
        letterSpace: 1

    }),
    { fontFamily, fontStyle, fontWeight, textTransform, textAlign, textJustify } = cssTypes,
    fontStretch =  ["normal","expanded"],
    loremIpsum = useRef();

    const handleChange = (e) => {
        setVars({
            ...vars, 
            [e.target.name]:e.target.value
        })
    }

    useEffect(() => {
        console.log(vars)
        loremIpsum.current.style.cssText = 
        `font-family: ${vars.fontFamily};
        font-style: ${vars.fontStyle};
        font-weight: ${vars.fontWeight};
        font-size: ${vars.fontSize}px;
        font-stretch: ${vars.fontSize}px;
        text-indent: ${vars.textIndent}px;
        text-transform: ${vars.textTransform};
        text-align: ${vars.textAlign};
        text-justify: ${vars.textJustify};
        letter-spacing: ${vars.letterSpace}px;
        line-height: ${vars.lineHeight};
        word-spacing: ${vars.wordSpacing}px;`
        
    }, [vars]);

    return(
        <div className="grid-container">
            <div className="settings grid-container">
                <h2>Fonts and Text</h2><div/>
                
                <Select name="fontFamily" options={fontFamily} var={vars.fontFamily} handler={handleChange}/>
                <Select name="fontStyle" options={fontStyle} var={vars.fontStyle} handler={handleChange}/>
                <Select name="fontWeight" options={fontStretch} var={vars.fontStretch} handler={handleChange}/>
                <Select name="fontStretch" options={fontStretch} var={vars.fontStretch} handler={handleChange}/>
                <InputRange name="fontSize" range={[12,30]} var={vars.fontSize} handler={handleChange}/>

                <div/><br/>

                <InputRange name="textIndent" range={[0,20]} var={vars.textIndent} handler={handleChange}/>
                <InputRange name="letterSpace" range={[0,20,0.5]} var={vars.letterSpace} handler={handleChange}/>
                <InputRange name="lineHeight" range={[0,5,0.2]} var={vars.lineHeight} handler={handleChange}/>
                <InputRange name="wordSpacing" range={[0,20]} var={vars.wordSpacing} handler={handleChange}/>
                <Select name="textTransform" options={textTransform} var={vars.textTransform} handler={handleChange}/>
                <Select name="textAlign" options={textAlign} var={vars.textAlign} handler={handleChange}/>

                { vars.textAlign !== "justify" || 
                    <Select name="textJustify" options={textJustify} var={vars.textJustify} handler={handleChange}/>
                }

            </div>
            <div ref={loremIpsum} className="flex-container">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo cum laboriosam 
                temporibus alias et! Aspernatur deserunt velit nesciunt quos odio ex nihil, asperiores
                 qui vitae repellendus. Explicabo sit maxime voluptatibus.</p>
            </div>
        </div>
    )
}