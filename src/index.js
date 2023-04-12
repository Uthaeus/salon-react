import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';

import ReactDOM from 'react-dom/client';

import '../src/styles/main.scss';
import App from './App';
import AuthContextProvider from './store/auth-context';
import ProductContextProvider from './store/product-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthContextProvider>
        <ProductContextProvider>
            <App />
        </ProductContextProvider>
    </AuthContextProvider>
);
