import React from 'react';
import { useHistory } from 'react-router';
import './Card.css';

const Card = (props) => {

    const { vehicleImage, vehicleName, vehicleDescription, id } = props.vehicle;

    const history = useHistory();

    const handleCardClick = () => {
        history.push(`/destination/${id}`);
    }

    return (
        <div className="container card-style">
            <div onClick={handleCardClick} class="row row-cols-1 row-cols-md-2 g-4 cardInfo d-flex mt-5">
                <div class="col card-body">

                    <img src={vehicleImage} class="" alt="" />

                    <div class="float-right">
                        <h5>{vehicleName}</h5>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default Card;
