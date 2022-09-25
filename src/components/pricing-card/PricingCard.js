import React from "react";
import { Button } from "../../components";
import localData from "../../localData";

export default function PricingCard({ pricing,index }) {
    const { checkmark } = localData.svgs;

    return (
        <div className="card pricing-card" data-lazy='fade-left'>
            <h4 className="card-title">{pricing.title}</h4>
            <p className="card-description">{pricing.description}</p>
            <div className="card-price">{pricing.price}$</div>
            <div className="card-date">/ year</div>
            <Button className="btn btn-outline-primary btn-lg">try free for 14 days</Button>
            <ul className="card-list" >
                {!pricing.plan.length ? (
                    <li className="card-item">no plan</li>
                ) : (
                    pricing.plan.map((item, index) => (
                        <li key={index} className={`card-item ${!item.isIncluded ? 'not-included': ''}`}  >
                            <div className="checkmark">{checkmark}</div> {item.text}
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
}
