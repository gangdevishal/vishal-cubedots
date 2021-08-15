import React, { useState } from "react";
import { Link } from "react-router-dom";
import residantialData from "../residantialData/test_unit_data.json";
import "./style.css";

const Building = () => {
  const [buildingData, setBuildingData] = useState(residantialData);
  const [searchInput, setSearchInput] = useState("");
  
  return (
    <>
      <div className="input-group">
        <div className="form-outline">
          <input
            id="search-input"
            type="search"
            id="form1"
            className="form-control"
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search for flats,location,price and availability......"
            autoComplete="off"
          />
        </div>
      </div>
      <br /><br />
      <div className="row">
        {
          buildingData
          .filter((items) => {
            if (searchInput === "") {
              return items;
            } else if (
              items.bedroom.toLowerCase().includes(searchInput.toLowerCase())
            ) {
              return items;
            }else if (
              items.location.toLowerCase().includes(searchInput.toLowerCase())
            ) {
              return items;
            }
             else if (
              items.availability
                .toLowerCase()
                .includes(searchInput.toLowerCase())
            ) {
              return items;
            } else if (
              items.price.toLowerCase().includes(searchInput.toLowerCase())
            ) {
              return items;
            }
          })
          .map((items) => {
            return (
              <div
                className="card mb-3"
                style={{ maxWidth: "540px",margin:"0.8rem" }}
                key={items.uniqueID}
                
              >
                <Link
                  to={`/residential-property/building/floor/${items.uniqueID}`}
                >
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <img
                        src="/images/shalev-cohen-KjueSklMNyY-unsplash.jpg"
                        className="card-img"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">
                          <strong>Flat </strong>
                          {items.bedroom} BHK , {items.location}
                        </h5>
                        <p className="card-text">
                          <small className="text-muted">Description</small>
                          {items.description}
                        </p>
                        <p className="card-text">
                          <small className="text-muted">
                            Price{" "}
                            <strong
                              style={{
                                backgroundColor: "green",
                                color: "white",
                              }}
                            >
                              {items.price} ₹
                            </strong>
                          </small>
                          <br />
                          <br />
                          <small className="text-muted">
                            Avaliblity{" "}
                            <strong style={{ backgroundColor: "yellow" }}>
                              {items.availability}
                            </strong>
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
          <h1>No exact match found </h1>
      </div>
    </>
  );
};

export default Building;
