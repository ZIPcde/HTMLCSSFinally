import React from 'react';
import "./products.css";
import '../../../fonts/Lato-Regular.ttf';
import '../../../fonts/Lato-Bold.ttf';
import MyFormRandom from './formRandomiser';
import { Link } from 'react-router-dom';

const Products = () => {
    return (
        <div className='product_all'>
            <div>
                <h2 className="product_h2up">Fetured Items</h2>
                <h3 className="product_h3up">Shop for items based on what we featured in this week</h3>
            </div>
            <div className='product_holder__output'>
            <MyFormRandom />
            </div>
            <div className="product_btnadd__div">
                <Link to="/catalog">
                    <button className="product_btnadd__btn">Browse All Product</button>
                </Link>
                
            </div>
        </div>
    );
}

export default Products;