import "./Interest.css";
import "./Utils.css";

function Interests({interest1, interest2}) {

    return (
        <>
            <p className="interest allMargin headingSize">
                Interests
            </p>
            <ul className="interestList allMargin listNameSize">
                <li>{interest1}</li>
                <li>{interest2}</li>
            </ul>
        </>

    );

}

export default Interests;