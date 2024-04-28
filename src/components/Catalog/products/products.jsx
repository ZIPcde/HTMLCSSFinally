import React, { useState } from 'react';
import "./products.css";
import '../../../fonts/Lato-Regular.ttf';
import '../../../fonts/Lato-Bold.ttf';
import MyFormRandom from './formRandomiser';
import { Link } from 'react-router-dom';
import Arrow from '../products/img/Vector.png';
import Lines from '../products/img/Lines.svg';
import SizeSwitcher  from './menu/sizes/fillingOfMenu';
import Menufilter from './menu/menuFilter/fillingOfMenu';

const Products = () => {
    const [sizes, setSizes] = useState([
        { label: "XS", checked: false },
        { label: "S", checked: false },
        { label: "M", checked: false },
        { label: "L", checked: false },
        { label: "XL", checked: false }
      ]);
    
      const handleSizeChange = (label) => {
        const updatedSizes = sizes.map(size =>
          size.label === label ? { ...size, checked: !size.checked } : size
        );
        setSizes(updatedSizes);
      };

    const [isOpen, setIsOpen] = useState(false);
  
    const handleMouseEnter = () => {
      setIsOpen(true);
    };
  
    const handleMouseLeave = () => {
      setIsOpen(false);
    };

    const [isOpen2, setIsOpen2] = useState(false);
  
    const handleMouseEnter2 = () => {
      setIsOpen2(true);
    };
  
    const handleMouseLeave2 = () => {
      setIsOpen2(false);
    };

    return (
        <div className='product_all__catalog'>
            <div className='catalog_filters__positioner'>
            <div className='catalog_filter__holder2'>
                <div className='catalog_filter__holder1'>
                    <div className='catalog_h2__holder'>
                    <h2 className="product_h2up__catalog">FILTER</h2>
                    </div>
                    <div className="popup-menu-container" onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
                    <img className='catalog_filter__lines' src={Lines} alt='lines'/>
                            {isOpen2 && (
                            <div className="popup-menu popup-menu2">
                                <div className='filter_moved-filter__container'>
                                <h2 className="product_h2up__catalog2">FILTER</h2>
                                    <div className='filter_moved-lines__container'>
                                    <svg className="product_h2up__catalog2" width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.833333 10H4.16667C4.625 10 5 9.625 5 9.16667C5 8.70833 4.625 8.33333 4.16667 8.33333H0.833333C0.375 8.33333 0 8.70833 0 9.16667C0 9.625 0.375 10 0.833333 10ZM0 0.833333C0 1.29167 0.375 1.66667 0.833333 1.66667H14.1667C14.625 1.66667 15 1.29167 15 0.833333C15 0.375 14.625 0 14.1667 0H0.833333C0.375 0 0 0.375 0 0.833333ZM0.833333 5.83333H9.16667C9.625 5.83333 10 5.45833 10 5C10 4.54167 9.625 4.16667 9.16667 4.16667H0.833333C0.375 4.16667 0 4.54167 0 5C0 5.45833 0.375 5.83333 0.833333 5.83333Z" fill="currentColor"/>
                                    </svg>
                                    </div>
                                </div>
                                <Menufilter />
                            </div>
                            )}
                        </div>
                    
                </div>
                <div className='catalog_filter__trend-size-price'>
                    <div className='catalog_filter__holder'>
                        <h3 className='catalog_filter__text'>TRENDING NOW</h3>
                        <img className='catalog_filter__arrow' src={Arrow} alt=''/>
                    </div>
                    <div className='catalog_filter__holder'>
                    <h3 className='catalog_filter__text'>SIZE</h3>
                    <div className="popup-menu-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <img className='catalog_filter__arrow' src={Arrow} alt=''/>
                            {isOpen && (
                            <div className="popup-menu">
                                <SizeSwitcher sizes={sizes} onChange={handleSizeChange} />
                            </div>
                            )}
                        </div>
                        
                        
                    </div>
                    <div className='catalog_filter__holder'>
                        <h3 className='catalog_filter__text'>PRICE</h3>
                        <img className='catalog_filter__arrow' src={Arrow} alt=''/>
                    </div>
                </div>
            </div>
            
                
                
                
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