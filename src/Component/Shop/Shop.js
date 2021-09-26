import React, { useEffect, useState } from 'react';
import './Shop.css'
import Cards from '../Cards/Cards';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [heroes, setHeroes] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./herodetails.json')
            .then(res => res.json())
            .then(data => setHeroes(data))
    }, []);

    const handleBuyNow = (product) => {
        let newCart = [...cart, product];
        setCart(newCart);

    }
    return (
        <div>
            <div className='shop_container'>
                <div className="card_container">
                    {
                        heroes.map(hero => <Cards key={hero.key} data={hero} handleBuyNow={handleBuyNow}></Cards>)
                    }
                </div>
                <div className="cart_container text-white">
                    <Cart key={cart.key} cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;