import "./Themebtn.css"

function Themebutton({btnname, btntype}) {

    return (
        <div className={`btn-size ${btntype}`}>
            <button>{btnname}</button>
        </div>
    )
}

export default Themebutton;