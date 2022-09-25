import React from "react";
import { Button } from "../../components";
import localData from "../../localData";

export default function BuilderCard({ builder }) {

    return (
        <div className="card builder-card" data-lazy='scale'>
         <div className="card-image">
          <img src={builder.image} alt="" />
         </div>
         <h4 className="card-title">{builder.title}</h4>
        </div>
    );
}
