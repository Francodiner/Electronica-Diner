import { Container, Row, Col, Image } from "react-bootstrap";

export const ItemDetail = (props) => {
    return (
        <div style={{ marginTop: '30px' }}>
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <Image src={props.imagen} fluid />
                    </Col>
                    <Col xs={6} md={4}>
                        <h1>{props.title}</h1>
                        <p>{props.price}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}