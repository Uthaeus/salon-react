import { createContext, useState } from "react";

export const ProductContext = createContext({
    products: [],
    addProduct: (product) => {},
    removeProduct: (id) => {},
    initializeProducts: (prodArr) => {}
});

function ProductContextProvider({children}) {
    const [products, setProducts] = useState([]);

    function addProduct(product) {
        let tempProducts = [...products, product];
        setProducts(tempProducts);
    }

    function removeProduct(id) {
        let filteredProducts = products.filter(product => product.id !== id);
        setProducts(filteredProducts);
    }

    function initializeProducts(prodArr) {
        setProducts(prodArr);
    }

    const value = {
        products: products,
        addProduct: addProduct,
        removeProduct: removeProduct,
        initializeProducts: initializeProducts
    };

    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
}

export default ProductContextProvider;