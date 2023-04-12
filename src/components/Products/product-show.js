import { useContext } from "react";
import { useParams } from "react-router-dom";

import { ProductContext } from "../../store/product-context";

function ProductShow() {
    let prodId = useParams();
    let prodCtx = useContext(ProductContext);

    let product = prodCtx.products.find(item => item.id === prodId.id);

    return (
        <div className="product-show-container">
            <div className="row">
                <div className="col-lg-8">
                    <img src={product.main_image} alt='m' />
                </div>
                <div className="col-lg-4">
                    <h1>{product.title}</h1>
                    <hr />
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                </div>
            </div>
        </div>
    );
}

export default ProductShow;