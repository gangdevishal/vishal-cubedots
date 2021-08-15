import React, { useState } from "react";
import { useParams } from "react-router-dom";
import residantialData from "../../residantialData/test_unit_data.json";
import "./style.css";
const Apartment = () => {
  const [apartmentDetails, setApartmentDetails] = useState(residantialData);
  console.log("apartmentDetails", apartmentDetails);
  const { id } = useParams();
  const data = apartmentDetails.find(
    (details) => details.uniqueID === Number(id)
  );
  const {
    description,
    price,
    blockNew,
    location,
    grossm2,
    aptNo,
    floor,
    layout,
    availability,
    bedroom,
  } = data;
  console.log(id);
  console.log("data", data);
  return (
    <>
      <div className="container py-4 my-4 mx-auto d-flex flex-column">
        <div className="header">
          <div className="row r1">
            <div className="card">
              <div className="card-body">
                <div className="col-md-9 abc">
                  <h1 style={{textAlign:"center"}}>{bedroom} BHK, {location} Indore</h1>
                </div>
                <div className="col-md-3 text-right pqr">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>
            </div>
            <div className="container-body mt-4">
              <div className="row r3">
                <div className="col-md-5 p-0 klo">
                  <ul>
                    <li>Layout: <strong>{layout}</strong></li>
                    <li>Floor: <strong>{floor}</strong></li>
                    <li>Apartment No: <strong>{aptNo}</strong></li>
                    <li>Grossm2: <strong>{grossm2}</strong></li>
                    <li>Location: <strong>{location}</strong></li>
                    <li>Block No: <strong>{blockNew}</strong></li> 
                    <li>Price: <strong>{price}</strong> </li> 
                    <li>Description: <strong>{description}</strong></li> 
                    <li>Availability: <strong>{availability}</strong></li> 
                  </ul>
                </div>
                <div className="col-md-7">
                  {" "}
                  <img
                    src="/images/shalev-cohen-KjueSklMNyY-unsplash.jpg"
                    width="80%"
                    height="85%"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Apartment;
