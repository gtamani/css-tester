import React, { useState, useEffect, useRef } from 'react';

export default function Filter () {
    const [blur, setBlur] = useState(0);
    const [brightness, setBrightness] = useState(100);
    const [contrast, setContrast] = useState(100);
    const [grayScale, setGrayScale] = useState();
    const [hueRotate, setHueRotate] = useState();
    const [invert, setInvert] = useState();
    const [opacity, setOpacity] = useState();
    const [saturate, setSaturate] = useState();
    const [sepia, setSepia] = useState();

    const img = useRef()

    useEffect(() => {
        console.log("blur("+blur+"px)")
        img.current.style.filter = "blur("+blur+"px) brightness("+brightness+"%) contrast("+contrast+"%)"
    },[blur,brightness,contrast,grayScale,hueRotate,invert,opacity,saturate,sepia])

    return(
        <>
            <h2>Filter</h2>
            
            <div> 
                <label htmlFor="blur">Blur</label>
                <input type="range" name="blur"
                min="0" max="50" value={blur}
                onChange={(e) => setBlur(e.target.value)}/>
            </div>
            
            <div> 
                <label htmlFor="brightness">brightness</label>
                <input type="range" name="brightness"
                min="0" max="200" value={brightness}
                onChange={(e) => setBrightness(e.target.value)}/>
            </div>
            
            <div> 
                <label htmlFor="contrast">contrast</label>
                <input type="range" name="contrast"
                min="0" max="200" value={contrast}
                onChange={(e) => setContrast(e.target.value)}/>
            </div>
            
            <div> 
                <label htmlFor="grayScale">grayScale</label>
                <input type="range" name="grayScale"
                min="-100" max="100" value={grayScale}
                onChange={(e) => setGrayScale(e.target.value)}/>
            </div>
            
            <div> 
                <label htmlFor="hueRotate">hueRotate</label>
                <input type="range" name="hueRotate"
                min="-100" max="100" value={hueRotate}
                onChange={(e) => setHueRotate(e.target.value)}/>
            </div>
            
            <div> 
                <label htmlFor="opacity">opacity</label>
                <input type="range" name="opacity"
                min="-100" max="100" value={opacity}
                onChange={(e) => setOpacity(e.target.value)}/>
            </div>
            
            <div> 
                <label htmlFor="invert">invert</label>
                <input type="range" name="invert"
                min="-100" max="100" value={invert}
                onChange={(e) => setInvert(e.target.value)}/>
            </div>
            
            <div> 
                <label htmlFor="saturate">saturate</label>
                <input type="range" name="saturate"
                min="-100" max="100" value={saturate}
                onChange={(e) => setSaturate(e.target.value)}/>
            </div>
            
            <div> 
                <label htmlFor="sepia">sepia</label>
                <input type="range" name="sepia"
                min="-100" max="100" value={sepia}
                onChange={(e) => setSepia(e.target.value)}/>
            </div>
            
            <img ref={img} src="https://i.pinimg.com/736x/2a/d6/1e/2ad61e44d13788dc5aa832ed2390cf8c.jpg" alt="drums"/>

        </>
    )
}