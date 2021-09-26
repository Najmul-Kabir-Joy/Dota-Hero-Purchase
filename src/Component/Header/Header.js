import React from 'react';
import dotologo from '../../images/dotalogo.png';
import './Header.css'

const Header = () => {
    return (
        <div>
            <img src={dotologo} alt="" className='d-block mx-auto dotologo' />
            <h1 className='text-center text-white'>The Battle Begins</h1>
            <h4 className='text-center text-white'>Pick Your Best Hero and Dominate The Game</h4>
            <h6 className='text-center text-white mb-3'>Max Limit: $<span>50000</span></h6>

        </div>
    );
};

export default Header;