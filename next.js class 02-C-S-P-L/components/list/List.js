import Item from "../item/Item";


export default function List({ arr }) {
    const items = arr.map ((item,idx) => <Item key={idx} text={item} />)
    
    return (
        <ul>
            {items}
        </ul>
    )

};
