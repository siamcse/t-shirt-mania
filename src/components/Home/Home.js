import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css';

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);
    const handleAddToCart = tshirt =>{
        const exists = cart.find(ts=>ts._id===tshirt._id);
        if(exists){
            alert('Product is already added');
        }
        else{
            const newCart = [...cart, tshirt];
            setCart(newCart);
            // alert('Successfully Added.')
        }
    }
    const removeItem = tshirt =>{
        const remaining = cart.filter(ts=> ts._id!==tshirt._id);
        setCart(remaining);
    }
    return (
        <div className='shop-container'>
            <div className="tshirts-container">
                {
                    tshirts.map(tshirt=> <Tshirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    ></Tshirt>)
                }
            </div>
            <div className="cart-container">
                <h2>Order Summary</h2>
                {
                    <Cart cart={cart}
                        removeItem={removeItem}
                    ></Cart>
                }
            </div>
        </div>
    );
};

export default Home;