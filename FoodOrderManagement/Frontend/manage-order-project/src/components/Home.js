import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Prepare order data
        const orderData = {
            orderId: document.getElementById('orderId').value,
            customerName: document.getElementById('customerName').value,
            foodName: document.getElementById('foodName').value,
            quantity: parseInt(document.getElementById('quantity').value),
            price: parseFloat(document.getElementById('price').value),
            totalAmount: parseInt(document.getElementById('quantity').value) * parseFloat(document.getElementById('price').value),
            paymentMethod: document.getElementById('paymentMethod').value,
        };

        // Send data to backend
        const response = await fetch('http://localhost:8000/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderData),
        });

        if (response.ok) {
            // After successful order submission, redirect to history
            navigate('/history');
        } else {
            console.error('Failed to add order');
        }
    };

    return (
        <div className='container mt-3'>
            <style>
                {`
                    form{
                        background-color: #D3C5E5;
                        border: 2px solid black;
                        border-radius: 5px;
                        padding : 20px;
                    }
                `}
            </style>

            <h2 className='text-center mb-4'>Food Order Form</h2>

            <div>

                <form className="p-5" onSubmit={handleSubmit} >

                    <div className='form-row'>
                        <div className="form-group col-md-4 mx-auto">
                            <label htmlFor="orderId">Order ID</label>
                            <input type="text" className="form-control" id="orderId" required />
                        </div>
                    </div>

                    <div className='form-row'>
                        <div className="form-group col-md-4 mx-auto">
                            <label htmlFor="customerName">Customer Name</label>
                            <input type="text" className="form-control" id="customerName" required />
                        </div>
                    </div>

                    <div className='form-row'>
                        <div className="form-group col-md-4 mx-auto">
                            <label htmlFor="foodName">Food Name</label>
                            <input type="text" className="form-control" id="foodName" required />
                        </div>
                    </div>

                    <div className='form-row'>
                        <div className="form-group col-md-4 mx-auto">
                            <label htmlFor="quantity">Quantity</label>
                            <input type="number" className="form-control" id="quantity" required />
                        </div>
                    </div>

                    <div className='form-row'>
                        <div className="form-group col-md-4 mx-auto">
                            <label htmlFor="price">Price</label>
                            <input type="number" className="form-control" id="price" required />
                        </div>
                    </div>

                    <div className='form-row'>
                        <div className="form-group col-md-4 mx-auto">
                            <label htmlFor="paymentMethod">Payment Method</label>
                            <select className="form-control" id="paymentMethod" required>
                                <option value="Cash">Cash</option>
                                <option value="Card">Card</option>
                                <option value="Online">Online</option>
                            </select>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-outline-primary m-3">Submit Order</button>
                </form>
            </div>
        </div>
    );
};

export default Home;