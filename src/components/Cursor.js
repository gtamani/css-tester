import React, { useState, useEffect, useRef } from 'react';

export default function Cursor () {
    const cursors = ["alias","all-scroll","auto","cell","context-menu","col-resize",
    "copy",
    "crosshair",
    "default",
    "e-resize",
    "ew-resize",
    "grab",
    "grabbing",
    "help",
    "move",
    "n-resize",
    "ne-resize",
    "nesw-resize",
    "ns-resize",
    "nw-resize",
    "nwse-resize",
    "no-drop",
    "none",
    "not-allowed",
    "pointer",
    "progress",
    "row-resize",
    "s-resize",
    "se-resize",
    "sw-resize",
    "text",
    "vertical-text",
    "w-resize",
    "wait",
    "zoom-in",
    "zoom-out",
    "initial"]

    const dicter = useRef()

     
   
    
    useEffect(() => {
        
    },[])

    return(
        <>
            <h2>Cursor</h2>
            <div className="flex-container">

                {cursors.map((el, index) => <div className="cursor-square" onClick={(e) => document.body.style.cursor = e.target.innerHTML} key={index}>{el}</div>)}
            </div>
        </>
    )
}