import "./Utils.css";

function Experience({company, year, role}){
    return(
        <>
            <p className="experienceName allMargin headingSize">
                Experience
            </p>
            <ul className="experienceList allMargin listNameSize">
                <li>{company}</li>
                <li>{year}</li>
                <li>{role}</li>
            </ul>
        </>
    )
}

export default Experience;