import { Button, Form, FormControl } from "react-bootstrap";
import { useState } from "react";

export const ItemCount = (props) => {
    const [cantidad, setCantidad] = useState(0);

    const onAdd = (e) => {
        setCantidad({
            contador: e.target.value 
        })
    }

    const mostrar = () => {
        alert(`Añadiste ${cantidad.contador} productos al carrito.`)
    }

    return (
        <Form inline>
            <FormControl type='number' min={props.initial} max={props.stock} className="mr-sm-2 ml-auto" onChange={onAdd} />
            <Button variant="dark" onClick={mostrar}>Añadir al carrito</Button>
        </Form>
    );
}