import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const History = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        const response = await fetch('http://localhost:8000/orders');
        const data = await response.json();
        setOrders(data);
    };

    const handleDelete = async (orderId) => {
        await fetch(`http://localhost:8000/orders/${orderId}`, {
            method: 'DELETE',
        });
        fetchOrders();
    };

    return (
        <div className='container mt-5'>
            <h2 className='text-center mb-4'>Order History</h2>

            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Customer Name</th>
                        <th>Food Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total Amount</th>
                        <th>Payment Method</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.orderId}>
                            <td>{order.orderId}</td>
                            <td>{order.customerName}</td>
                            <td>{order.foodName}</td>
                            <td>{order.quantity}</td>
                            <td>{order.price}</td>
                            <td>{order.totalAmount}</td>
                            <td>{order.paymentMethod}</td>

                            <td>
                                <Link to={`/edit/${order.orderId}`}
                                    className="btn btn-outline-info mr-2">Edit</Link>
                                <button onClick={() => handleDelete(order.orderId)}
                                    className="btn btn-outline-danger">Delete</button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default History;