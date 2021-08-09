export default function Select(props) {
/* 
    SELECT TAG WITH THEIR LABEL.
    Props:
    1. name - string
    2. options - list
    3. var - variable which value will be updated
    4. handler - update function
*/
    return(
        <>
        
            <label htmlFor={props.name}>{props.name}</label>
            <select name={props.name}
            value={props.var} onChange={props.handler}>
                {props.options.map((e) => <option>{e}</option>)}
            </select>
        </>
    )
}