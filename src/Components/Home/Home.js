import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import fakeData from '../../data/FakeData.json';
import './Home.css';

const Home = () => {

    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        setVehicles(fakeData)
    }, [])

    return (
        <div className="container ">
            {
                vehicles.map(vehicle => <Card vehicle = {vehicle} ></Card>)
            }
        </div>
    );
};

export default Home;
