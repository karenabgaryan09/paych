import React from "react";
import { Button } from "../../../../components";
import localData from "../../../../localData";

export default function Managment() {
    const { phoneTop, phoneMiddle, phoneBottom } = localData.images;
    return (
        <section className="managment" data-lazy-block>
            <div className="container">
                <div className="managment-content">
                    <div className="managment-info">
                        <div className="wrapper">
                            <h2 className="display-2 managment-title">
                                Construction software designed to make your business better
                            </h2>
                            <h6 className="display-7 managment-subtitle">
                                Easily manage projects, clients, and contractors
                            </h6>
                            <p className="managment-description">
                                From the office or the field, Paych keeps you on top of your projects, and in control of
                                your business. Win more jobs, run them better, and control your financials -- all while
                                making the building process a joy for your customers
                            </p>
                            <Button className="btn btn-light rounded-pill">get free trial</Button>
                        </div>
                    </div>
                    <div className="managment-cover">
                        <img className="phone-tablet" src={phoneMiddle} alt="" />
                        <div className="phone-cover phone-top" data-lazy='fade-down-long' data-lazy-delay='0'>
                            <img className="" src={phoneTop} alt="" />
                        </div>
                        <div className="phone-cover phone-middle" data-lazy='fade' data-lazy-delay='0'>
                            <img className="" src={phoneMiddle} alt="" />
                        </div>
                        <div className="phone-cover phone-bottom" data-lazy='fade-up-long' data-lazy-delay='0'>
                            <img className="" src={phoneBottom} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
