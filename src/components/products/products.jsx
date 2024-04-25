import React from 'react';
import "./products.css";
import '../../fonts/Lato-Regular.ttf';
import '../../fonts/Lato-Bold.ttf';
import MyFormRandom from './formRandomiser';

const Products = () => {
    return (
        <div>
            <div>
                <h2 className="h2up">Fetured Items</h2>
                <h3 className="h3up">Shop for items based on what we featured in this week</h3>
            </div>
            <div className="divbtndown">
                <button className="btndown">Browse All Product</button>
            </div>
            <div className='product_holder__output'>
            <MyFormRandom />
            </div>
        </div>
    );
}

export default Products;