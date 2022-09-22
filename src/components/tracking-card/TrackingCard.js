import React from "react";

export default function TrackingCard({ tracking }) {
    return (
        <div className="card tracking-card">
             <div className="card-image">
                <img src={tracking.image} alt="" />
            </div>
            <div className="card-info">
              <div className="wrapper">
                  <h4 className="card-title display-2">{tracking.title}</h4>
                  <p className="card-description display-6">
                      {tracking.description}
                  </p>
              </div>
            </div>
           
        </div>
    );
}
