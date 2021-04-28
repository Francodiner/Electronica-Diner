import { Card } from "react-bootstrap";

export const ItemList = (props) => {
    return (
        <div style={{marginTop: '30px'}}>
            <Card>
                <Card.Img variant="top" style={{ height: '300px' }} src={props.imagen} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.id}
                    </Card.Text>
                    <Card.Text>
                        ${props.price}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}