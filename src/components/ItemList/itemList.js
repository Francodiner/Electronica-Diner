import { Link } from 'react-router-dom'

export const ItemList = (props) => {
    return (
        <div class="col-md-3">
            <div href="#" class="card card-product-grid">
                <Link className="img-wrap" to={`/item/${props.title}`}> <img src={props.image} /></Link>
                <figcaption class="info-wrap">
                    <Link className="title" to={`/item/${props.title}`}>{props.title}</Link>
                    <div class="price mt-1">${props.price}</div>
                </figcaption>
                <Link to={`/item/${props.title}`}><button type="button" class="btn btn-dark">Ver mas</button></Link>
            </div>
        </div>
    )
}