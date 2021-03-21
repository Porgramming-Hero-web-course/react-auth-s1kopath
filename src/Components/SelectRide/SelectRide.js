import React from 'react';
import { Link } from 'react-router-dom';

const SelectRide = () => {
    return (
        <div class="container text-center mt-3">
            <h3>Select a Ride First</h3>
            <Link to="/home">
            <button class="btn btn-success">Select Ride</button>
            </Link>
        </div>
    );
};

export default SelectRide;
