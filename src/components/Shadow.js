import React, {useState, useEffect, useRef} from 'react';
import './shadow.scss'

export default function Shadow () {
    const [shadowX, setShadowX] = useState(10);
    const [shadowY, setShadowY] = useState(10);
    const [blur, setBlur] = useState(50);
    const [spread, setSpread] = useState(10);
    const [inset, setInset] = useState(false);
    const [color, setColor] = useState("black");


    let square = useRef();

    useEffect(() => {
        
        const prefix = inset ? "inset " : ""
        console.log(inset,prefix)
        console.log(`${prefix}${shadowX}px ${shadowY}px ${blur}px ${spread}px ${color}`)
        square.current.style.boxShadow = `${prefix}${shadowX}px ${shadowY}px ${blur}px ${spread}px ${color}`
    },[shadowX,shadowY,blur,spread,inset,color])


    return(
        <div className="flex-container">
            <div>

                <h2>Shadows</h2>

                <div>
                    <label htmlFor="inset">Inset</label>
                    <input
                    type="checkbox" name="inset"
                    value={inset}
                    onChange={(e) => setInset(e.target.checked)}
                    />
                </div>

                <div> 
                    <label htmlFor="shadowX">Horizontal</label>
                    <input type="range" name="shadowX"
                    min="-100" max="100" value={shadowX}
                    onChange={(e) => setShadowX(e.target.value)}/>
                </div>
                
                <div>
                    <label htmlFor="shadowY">Vertical</label>
                    <input type="range" name="shadowY"
                    min="-100" max="100" value={shadowY}
                    onChange={(e) => setShadowY(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="blur">Blur</label>
                    <input type="range" name="blur"
                    min="0" max="100" value={blur}
                    onChange={(e) => setBlur(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="spread">Spread</label>
                    <input type="range" name="spread"
                    min="-10" max="20" value={spread}
                    onChange={(e) => setSpread(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="color">Color</label>
                    <input 
                    type="color" name="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    />
                </div>
                
                <span>box-shadow:{shadowX}px {shadowY}px {blur}px {spread}px {color}</span>
            </div>

            <div className="output">
                <div ref={square} className="square"></div>
            </div>
        </div>
    )
}