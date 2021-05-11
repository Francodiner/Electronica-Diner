import { Button, Form, FormControl } from "react-bootstrap";
import { useState } from "react";

export const ItemCount = (props) => {

    const [cantidad, setCantidad] = useState(0);

    const sumarContador = (e) => {
        setCantidad({
            contador: e.target.value 
        })
    }

    const mostrar = () => {
        alert(`Queres ${cantidad.contador} productos para comprar.`)
    }

    return (
        <Form inline>
            <FormControl type='number' min={props.initial} max={props.stock} className="mr-sm-2 ml-auto" onChange={sumarContador} />
            <Button variant="dark" onClick={mostrar}>Comprar</Button>
        </Form>
    );
}