import React from 'react';

const About = ()=>{
    return (
        <div className="container mt-5 p-5 bg-dark rounded shadow display-flex">

            <h1 className="text-center text-light">About Our System</h1>

            <p className="mt-4 text-secondary text-center">
                Welcome to the Food Order Management system, a simple yet efficient way to manage food orders. This system allows users to place, edit, and delete food orders while maintaining a history of all past orders.
            </p>

            <p className="text-secondary text-center">
                We are leveraging modern technologies like React for the frontend and MongoDB for the backend, ensuring scalability and a smooth user experience. The interface is styled with Bootstrap to ensure responsiveness and a clean look across all devices.
            </p>
            <p className="text-secondary text-center">
                Thank you for using the Food Order Management System!
            </p>

            <div className="mt-5">
                <h2 className="text-center text-light">Developer Information</h2>
                <p className="text-secondary text-center">
                    <h6>Name: Smit Ranipa</h6>
                </p>
                <p className="text-secondary text-center">
                    Email : 23010101429@darshan.ac.in
                </p>

                <p className="text-secondary text-center">
                    I am a 3rd semester B.Tech student pursuing Computer Science Engineering(CSE).
                </p>

                <p className="text-secondary text-center">This project is part of my Web Technology course, where I aim to create a user-friendly Food Order Management System.</p>
            </div>
        </div>
    );
};

export default About;