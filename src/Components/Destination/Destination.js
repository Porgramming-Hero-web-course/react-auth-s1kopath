import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Map from '../Map/Map';
import fakeData from '../../data/FakeData.json';
import './Destination.css';


const Destination = () => {

    const { id } = useParams();

    const [vehicle, setVehicle] = useState([])

    useEffect(() => {
        setVehicle(fakeData[id - 1])
    }, [id])


    const [destination, setDestination] = useState({
        from: '',
        to: ''
    })

    const handleBlur = (e) => {
        const newDestinationInfo = { ...destination }
        newDestinationInfo[e.target.name] = e.target.value;
        setDestination(newDestinationInfo);
    }


    return (
        <div class="d-flex container">
            <div class="shadow-lg bg-light rounded mt-4 p-2 w-25 mb-3">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">From</label>
                    <input type="text" onBlur={handleBlur} name="from" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">To</label>
                    <input type="text" onBlur={handleBlur} name="to" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>

                <button class="search-btn">Search</button>
                <div class="mt-5">
                    <h5>From: <strong>{destination.from}</strong> </h5>
                    <h5>To: <strong>{destination.to}</strong> </h5>
                </div>
                <div class="border rounded mt-3 mb-3">
                    <img style={{ width: '75px' }} src={vehicle.vehicleImage} alt="" />
                    <img class="ml-3" style={{ width: '40px' }} src="https://static.thenounproject.com/png/292059-200.png" alt=""/> <strong> {vehicle.vehicleSeat}</strong> <strong class="ml-5"> ${vehicle.ticketPrice}</strong>
                </div>
                <div class="border rounded mt-3 mb-3">
                    <img style={{ width: '75px' }} src={vehicle.vehicleImage} alt="" />
                    <img class="ml-3" style={{ width: '40px' }} src="https://static.thenounproject.com/png/292059-200.png" alt=""/> <strong> {vehicle.vehicleSeat}</strong> <strong class="ml-5"> ${vehicle.ticketPrice}</strong>
                </div>
                <div class="border rounded mt-3 mb-3">
                    <img style={{ width: '75px' }} src={vehicle.vehicleImage} alt="" />
                    <img class="ml-3" style={{ width: '40px' }} src="https://static.thenounproject.com/png/292059-200.png" alt=""/> <strong> {vehicle.vehicleSeat}</strong> <strong class="ml-5"> ${vehicle.ticketPrice}</strong>
                </div>
            </div>
            <div class="m-5">
                <Map></Map>
            </div>
        </div>
    );
};

export default Destination;
