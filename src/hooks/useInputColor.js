
export default function InputColor (props) {
    /* 
        RANGE INPUT WITH THEIR LABEL.
        Props:
        1. name - string
        2. var - variable which value will be updated
        3. handler - update function
    */
    
        return(
            <>
               <label htmlFor={props.name}>{props.name}</label>
                <input 
                type="color" name={props.name}
                value={props.var}
                onChange={props.handler}
                />
            </>
        )
    }