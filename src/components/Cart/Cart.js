import React from 'react';

const Cart = ({cart, removeItem}) => {
    return (
        <div>
            <p>Selected Item: {cart.length}</p>
            {
                cart.map(tshirt=> <p
                    key={tshirt._id}
                >
                    {tshirt.name}
                    <button onClick={()=>removeItem(tshirt)}>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;