import { Link } from "react-router-dom";


function ProductItem({prod}) {

    return (
        <div className="row">
            <div className="col-md-6">
                <img src={prod.thumb_image} alt='t' />
            </div>
            <div className="col-md-6">
                <h2><Link to={`products/${prod.id}`}>{prod.title}</Link></h2>
                <p>{prod.description}</p>
            </div>
        </div>
    );
}

export default ProductItem;