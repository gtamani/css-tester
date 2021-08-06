import cssTypes from '../helpers/Types'

export default function Cursor () {
    const { cursors } = cssTypes

    return(
        <div className="grid-container">
            <h2 className="settings">Cursor</h2>
            <div className="flex-container">

                {cursors.map((el, index) => <div className="cursor-square" onClick={(e) => document.body.style.cursor = e.target.innerHTML} key={index}>{el}</div>)}
            </div>
        </div>
    )
}