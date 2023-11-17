import "./Utils.css";

function Education({edu1,edu2}){
    return(
        <>
            <p className="educationName allMargin headingSize">
                Education
            </p>
            <ul className="educationList allMargin listNameSize">
                <li>{edu1}</li>
                <li>{edu2}</li>
            </ul>
        </>
    )
}

export default Education;
