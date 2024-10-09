import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditOrder = () => {
    const { id } = useParams(); // Get order ID from URL
    const navigate = useNavigate();
    const [order, setOrder] = useState({
        customerName: '',
        foodName: '',
        quantity: '',
        price: '',
        totalAmount: '',
        paymentMethod: '',
    });

    useEffect(() => {
        // Fetch order details by ID
        fetch(`http://localhost:8000/orders/${id}`)
            .then((res) => res.json())
            .then((data) => setOrder(data))
            .catch((error) => console.log(error));
    }, [id]);

    const handleChange = (e) => {
        setOrder({ ...order, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Update the order in the database
        fetch(`http://localhost:8000/orders/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order),
        })
            .then((res) => res.json())
            .then(() => {
                navigate('/history'); // Redirect back to history after update
            })
            .catch((error) => console.log(error));
    };

    const handleCancel = () => {
        navigate('/history'); // Redirect back to History page when Cancel Button is clicked
    };

    return (
        <div className='container mt-3'>

            <h2 className='text-center mb-4'>Edit Order</h2>

            <form onSubmit={handleSubmit}>

                <div className='form-row'>
                    <div className="form-group col-md-4">
                        <label>Customer Name</label>
                        <input
                            type="text"
                            name="customerName"
                            value={order.customerName}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                </div>

                <div className='form-row'>
                    <div className="form-group col-md-4">
                        <label>Food Name</label>
                        <input
                            type="text"
                            name="foodName"
                            value={order.foodName}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                </div>

                <div className='form-row'>
                    <div className="form-group col-md-4">
                        <label>Quantity</label>
                        <input
                            type="number"
                            name="quantity"
                            value={order.quantity}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                </div>

                <div className='form-row'>
                    <div className="form-group col-md-4">
                        <label>Price</label>
                        <input
                            type="number"
                            name="price"
                            value={order.price}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                </div>

                <div className='form-row'>
                    <div className="form-group col-md-4">
                        <label>Total Amount</label>
                        <input
                            type="number"
                            name="totalAmount"
                            value={order.totalAmount}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                </div>

                <div className='form-row'>
                    <div className="form-group col-md-4">
                        <label>Payment Method</label>
                        <input
                            type="text"
                            name="paymentMethod"
                            value={order.paymentMethod}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                </div>

                <button type="submit" className="btn btn-outline-primary">
                    Save Changes
                </button>

                <button type="button" className="btn btn-outline-secondary m-2" onClick={handleCancel}>
                    Cancel
                </button>
                
            </form>
        </div>
    );
};

export default EditOrder;