import { Item } from "../Item/item"

export const ItemList = (props) => {
    return props.celulares.map((item) => (
      
        <Item
            id={item.id}
            title={item.title}
            price={item.price}
            imagen={item.imagen}
        />
    ))
}