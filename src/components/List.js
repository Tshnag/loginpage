import "./List.css";

function List({ layout, itemList }) {

    
    return (
        <ul className={layout}>
            {itemList.map(i=> <li>{i}</li>)}
        </ul>
    );
}

export default List;