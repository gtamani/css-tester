import React, { useState, useEffect } from 'react';

export default function TesterButton(props) {
    const test = () => {
        console.log("Hi!")
        console.log(props.range)
        console.log(props.current)
        props.current++;
    }

    return(
        <>
            <button onClick={test}>Test it!</button>
        </>
    )
}