import React from "react";

export default function TrackingCard({ tracking }) {
    return (
        <div className={`card tracking-card ${tracking.isReversed ? 'reversed' : ''}`} data-lazy-block>
             <div className="card-image" data-lazy='scale'>
                <img src={tracking.image} alt="" />
            </div>
            <div className="card-info">
              <div className="wrapper">
                  <h4 className="card-title display-2">{tracking.title}</h4>
                  <p className="card-description display-7" dangerouslySetInnerHTML={{__html: tracking.description}}>
                      {/* {tracking.description} */}

                  </p>
              </div>
            </div>
           
        </div>
    );
}
