import React, { useState, useEffect, useRef } from 'react';
import cssTypes from '../helpers/Types';
import InputRange from '../hooks/useInputRange';
import Select from '../hooks/useSelect';

function Element(props) {

    return(
        <div 
        className={"element-"+props.type}
        onClick={props.handler}
        key={"el"+props.number}>
            {props.number}
        </div>
    )
}


export default function Display() {
    const [vars, setVars] = useState({
        display:"flex",
        numberOfElements:10,
        elements: [1,2,3,4,5,6,7,8,9,10],
        gridColumns: [1,2,3],
        gridElsColumns: [4,1,2],
        gridRows: [1,2,3],
        gridElsRows: [4,1,2],
        direction: "row",
        justifyContent:"start",
        flexWrap:"wrap",
        selected: 1,
        elHandler: {1:"first"}
    }),
    { display, flexDirection, justifyContent, alignItems, alignContent, flexWrap } = cssTypes,
    displayContainer = useRef();


    useEffect(() => {

        if (vars.display == "flex") {

            displayContainer.current.style.cssText = `
            flex-direction : ${vars.direction};
            justify-content : ${vars.justifyContent};
            align-content : ${vars.alignContent};
            align-items : ${vars.alignItems};
            flex-wrap : ${vars.flexWrap}
            
            `
        } else if (vars.display == "grid") {
            let gridColumns = "",
            gridRows = ""
            for (var el in vars.gridColumns) {
                gridColumns += vars.gridElsColumns[el]+"fr "
            }
            for (var el in vars.gridRows) {
                gridRows += vars.gridElsRows[el]+"fr "
            }
            console.log(gridColumns)

            displayContainer.current.style.cssText = `
            grid-template-columns: ${gridColumns};
            grid-template-rows: ${gridRows};
            grid-gap: ${vars.gridGap}px;
            `
        }
        // placeContent
        console.log(vars)

    }, [vars]);

    const handleChange = (e) => {
        setVars({
            ...vars, 
            [e.target.name]:e.target.value
        })
    }

    const gridHandler = (e) => {
        const column = parseInt(e.target.name.slice(-1))-1;
        const value = e.target.value
        vars.gridElsColumns[column] = value
        console.log("Hi from element ",column,value)
        console.log(vars.gridElsColumns)
        handleChange(e);
    }

    const gridHandlerRow = (e) => {
        const column = parseInt(e.target.name.slice(-1))-1;
        const value = e.target.value
        vars.gridElsRows[column] = value
        console.log("Hi from element ",column,value)
        console.log(vars.gridElsRows)
        handleChange(e);
    }

    const addColumn = (e) => {
        const g = vars.gridColumns
        const last = g.length
        g.push(last + 1)
    }
    const substractColumn = (e) => {vars.gridColumns.pop()}

    const selectElement = (e) => {
        vars.selected = e.target.innerHTML
        console.log(vars.selected)
    }

    return(
        <div className="grid-container">
            <div className="settings grid-container">
                <h2>Display {vars.selected}</h2><div/>
                <Select name="display" options={display} var={vars.display} handler={handleChange}/>
                <br/>
                <div/>
                
                    
                
                    {
                        vars.display !== "flex" ||
                        <>
                        <label htmlFor="elements">Elements</label>
                        <input 
                        type="text"
                        name="elements"
                        value={vars.numberOfElements}
                        onChange={handleChange}></input>

                        <Select name="direction" options={flexDirection} var={vars.direction} handler={handleChange}/>
                        <Select name="justifyContent" options={justifyContent} var={vars.justifyContent} handler={handleChange}/>
                        <Select name="alignContent" options={alignContent} var={vars.alignContent} handler={handleChange}/>
                        <Select name="alignItems" options={alignItems} var={vars.alignItems} handler={handleChange}/>
                        <Select name="flexWrap" options={flexWrap} var={vars.flexWrap} handler={handleChange}/>
                        </>
                    }
                    {
                        vars.display !== "grid" ||
                        <>
                            <InputRange name="gridGap" range={[1,15]} var={vars.gridGap} handler={handleChange}/>
                            <p>grid-template-columns</p>

                            <div>
                                <button onClick={addColumn}> + </button>
                                <button onClick={substractColumn}> - </button>
                            </div>
                            {vars.gridColumns.map((e)=><InputRange name={"grid-el-col"+e} range={[1,5]} var={vars.gridElsColumns[e-1]} handler={gridHandler}/>)}

                            <p>grid-template-rows</p>
                            <div>
                                <button onClick={addColumn}> + </button>
                                <button onClick={substractColumn}> - </button>
                            </div>
                            {vars.gridColumns.map((e)=><InputRange name={"grid-el-row"+e} range={[1,5]} var={vars.gridElsRows[e-1]} handler={gridHandlerRow}/>)}
                        </>
                    }
                    {
                        vars.elHandler[vars.selected]
                    }
                
            </div>
            
            <div className="flex-container">
                {
                    vars.display === "flex" 
                        ?   <div ref={displayContainer} className="display-container display-flex">
                                {vars.elements.map((e)=><Element key={"flex-el-"+e} type="flex" number={e}/>)}
                            </div>
                        :   <div ref={displayContainer} className="display-container display-grid">
                                {vars.elements.map((e)=><Element handler={selectElement} type="grid" number={e}/>)}
                            </div>
                }
                
            </div>
        </div>
    )
}