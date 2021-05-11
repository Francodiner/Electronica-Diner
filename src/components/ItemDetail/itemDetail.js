import { Container, Row, Col } from "react-bootstrap";
import { ItemCount } from "../ItemCount/itemCount"

export const ItemDetail = (props) => {
    return (
        <div style={{ marginTop: '30px' }}>
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <div href="#" class="card card-product-grid">
                            <img className="img-wrap" src={props.image} />
                        </div>
                    </Col>
                    <Col xs={6} md={4}>
                        <h1>{props.title}</h1>
                        <p>{props.price}</p>
                        <ItemCount initial="1" stock="5"/>
                        <br></br>
                        <button type="button" onClick={props.onAdd} class="btn btn-primary">Añadir al carrito</button>
                        <button type="button" onClick={props.onDelete} class="btn btn-danger">Eliminar del carrito</button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}