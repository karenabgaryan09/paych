import React from "react";
import {Button} from '../../../../components'
import localData from "../../../../localData";

export default function About() {
    const { aboutCover } = localData.images;

    return (
        <section className="about" data-lazy-block>
            <div className="container">
                <div className="about-content">
                    <div className="about-cover" data-lazy='fade-right'>
                        <img src={aboutCover} alt="" />
                    </div>
                    <div className="about-info">
                        <div className="wrapper">
                            <h2 className="about-title display-2 text-primary">About PAYCH</h2>
                            <h3 className="about-subtitle display-6">
                                A simple solution to manage complex project processes
                            </h3>
                            <p className="about-description">
                                We’re changing the way the world builds
                                <br /> We’ve built Paych to be the world’s easiest estimating & invoicing tool for trade
                                service pros, and we’re constantly listening to ensure we deliver on our goal: to make
                                contractors heroes. That’s what motivates and excites us!”
                            </p>
                            <Button className="btn btn-primary rounded-pill">get started now</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
