import React from 'react';
import Rating from 'react-rating';
import './Cards.css'

const Cards = (props) => {
    const { name, category, counter, boot, dialouge, img, rating, price } = props.data;
    const handleBuyNow = props.handleBuyNow;
    return (
        <div className='cards'>
            <div className="image text-center">
                <img src={img} alt="" />
            </div>
            <div className='card-header text-center fw-bolder fs-2'>
                <p>{name}</p>
            </div>
            <div className='details'>
                <table className="table">
                    <tbody>
                        <tr>
                            <th scope="row">Category</th>
                            <td>:</td>
                            <td>{category}</td>
                        </tr>
                        <tr>
                            <th scope="row">Counter</th>
                            <td>:</td>
                            <td>{counter}</td>
                        </tr>
                        <tr>
                            <th scope="row">Favorite Boot</th>
                            <td>:</td>
                            <td>{boot}</td>
                        </tr>
                        <tr>
                            <th scope="row">Favorite Dialouge</th>
                            <td>:</td>
                            <td>{dialouge}</td>
                        </tr>
                        <tr>
                            <th scope="row">Rating</th>
                            <td>:</td>
                            <td><Rating
                                initialRating={rating}
                                readonly
                                emptySymbol="far fa-star"
                                fullSymbol="fas fa-star"
                            ></Rating></td>
                        </tr>
                        <tr>
                            <th scope="row">Price</th>
                            <td>:</td>
                            <td>${price}</td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <div className='buy_now_container'>
                <button onClick={() => handleBuyNow(props.data)} className='btn btn-rounded mb-2 d-block mx-auto btn-primary fw-bold'><i className="fas fa-shopping-cart me-3"></i>ADD TO CART</button>
            </div>

        </div>
    );
};

export default Cards;