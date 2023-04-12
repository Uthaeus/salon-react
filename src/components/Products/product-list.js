import { useContext } from "react";

import { ProductContext } from "../../store/product-context";
import ProductItem from "./product-item";


function ProductList() {
    const prodCtx = useContext(ProductContext);

    let content = prodCtx.products.map(prod => <ProductItem prod={prod} key={prod.id} />)

    return (
        <div className="product-list-wrapper">
            {content}
        </div>
    );
}

export default ProductList;