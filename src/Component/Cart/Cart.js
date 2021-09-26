import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const product of cart) {
        total = total + product.price;
    }
    const shipping = cart.length * 10;
    const tax = total * 0.15;
    const grandTotal = total + shipping + tax;
    return (
        <div className='ms-5 me-5 cart'>
            <h4 className='text-center'>Total Items: {cart.length}</h4>
            <div className='table_container'>
                <table className="table text-white">
                    <thead>
                        <tr>
                            <th scope="col">Product Name</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody id='tableid'>
                        {
                            cart.map((value, key) => {

                                return (
                                    <tr key={key}>
                                        <th scope="row">
                                            {value.name}
                                        </th>
                                        <td>{value.quantity}</td>
                                        <td>{value.price}</td>
                                    </tr>

                                );
                            })
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <th scope="row" colSpan="2" className='text-success'>Total</th>
                            <td className='text-success'>${total}</td>
                        </tr>
                        <tr>
                            <th scope="row" colSpan="2" className=''>Shipping</th>
                            <td className=''>${shipping}</td>
                        </tr>
                        <tr>
                            <th scope="row" colSpan="2" className=''>Tax</th>
                            <td className=''>${tax.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <th scope="row" colSpan="2" className='text-danger fs-5'>Grand Total</th>
                            <td className='text-danger fs-5'>${grandTotal.toFixed(2)}</td>
                        </tr>
                    </tfoot>
                </table>
                <button className='btn btn-success d-block mx-auto mb-2'>Proceed Chekout</button>
            </div>



        </div>
    );
};

export default Cart;