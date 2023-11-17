import "./Utils.css";

function Extracurriculars({extra}) {
    return (
        <>
            <p className="educationName allMargin headingSize">
                Extracurriculars
            </p>
            <ul className="educationList allMargin listNameSize">
                <li>{extra}</li>
            </ul>
        </>
    )
}

export default Extracurriculars;