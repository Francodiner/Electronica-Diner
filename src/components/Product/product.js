import { Card, Button } from "react-bootstrap";

export const Product = (props) => {

  const oferta = () => {
    alert(`Compra esta ${props.title} que esta en promoción`);
  }

  const proximamente = () => {
    alert(`Proximamente...`);
  }

  /* ARMO LA ESTRUCTURA DEL PRODUCTO (LO QUE QUIERO MOSTRAR Y COMO LO QUIERO MOSTRAR) */
  return (

    <Card>
      <Card.Img variant="top" style={{height: '300px'}} src={props.imagen} />
      <Card.Body>
        <Card.Title onClick={oferta}>{props.title}</Card.Title>
        <Card.Text>
          ${props.price}
        </Card.Text>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Button variant="dark" onClick={proximamente}>Ver mas...</Button>
      </Card.Body>
    </Card>

  );
}
