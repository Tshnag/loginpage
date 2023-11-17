import "./Utils.css"

function Skills({skill1, skill2, skill3}) {
    return (
        <>
            <p className="skillsName allMargin headingSize">
                Skills
            </p>
            <ul className="skillsList allMargin listNameSize">
                <li>{skill1}</li>
                <li>{skill2}</li>
                <li>{skill3}</li>
            </ul>
        </>
    );
}

export default Skills;