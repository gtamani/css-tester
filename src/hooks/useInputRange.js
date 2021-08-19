import TesterButton from "./useTesterButton"

export default function InputRange (props) {
/* 
    RANGE INPUT WITH THEIR LABEL.
    Props:
    1. name - string
    2. range - list[from:to]
    3. var - variable which value will be updated
    4. handler - update function
*/
    const test = () => {
        console.log("Hi!")
        console.log(props.range);
        console.log(typeof props.var);
        
        
    }


    return(
        <>
            <div>
                <button onClick={test}>Test it!</button>
                <label 
                htmlFor={props.name}
                >{props.name}</label>
            </div>

            <input 
            type="range" 
            name={props.name}
            min={props.range[0]} 
            max={props.range[1]}
            step={props.range[2] || 1 } 
            value={props.var}
            onChange={props.handler}/>
        </>
    )
}