import { Container, Row, Col } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from '../../context/cartContext'
export const ItemDetail = ({product}) => {
    const { addToCart } = useContext(CartContext);
    const { removeFromCart } = useContext(CartContext);
  
    return (
        <div style={{ marginTop: '30px' }}>
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <div href="#" className="card card-product-grid">
                            <img className="img-wrap" src={product.image} />
                        </div>
                    </Col>
                    <Col xs={6} md={4}>
                        <h1>{product.title}</h1>
                        <p>{product.price}</p>
                        <br></br>
                        <button type="button" onClick={() => addToCart(product)} className="btn btn-primary">Añadir al carrito</button>
                        <button type="button" onClick={() => removeFromCart(product)} className="btn btn-danger">Eliminar del carrito</button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}