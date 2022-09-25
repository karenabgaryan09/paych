import React, { useEffect, useState } from "react";
import localData from "../../../../localData";

export default function Features() {
    const { showcaseCoverSm,underConstruction } = localData.images;

    const [activeTab, setActiveTab] = useState("tools");
    const [nextActiveTab, setNextActiveTab] = useState("tools");
    const [isActiveTabShown, setIsActiveTabShown] = useState(true);

    useEffect(() => {
        setIsActiveTabShown(false);
    }, [nextActiveTab]);

    useEffect(() => {
        setIsActiveTabShown(true);
    }, [activeTab]);

    return (
        <section className="features" >
            <div className="container">
                <h2 className="display-2 features-title text-primary">
                    All the features builders need, under one login.
                </h2>
                <p className="features-description display-8">
                    Our construction management software helps with every step of the build – from the sales process and
                    project planning to financial tracking and client communication.
                </p>
                <div className="tabs" data-lazy-block>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button
                                className={`nav-link ${activeTab === "process" ? "active" : ""}`}
                                id="home-tab"
                                data-toggle="tab"
                                data-target="#process"
                                type="button"
                                role="tab"
                                onClick={() => setNextActiveTab("process")}
                            >
                                Sales process
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className={`nav-link ${activeTab === "managment" ? "active" : ""}`}
                                id="profile-tab"
                                data-toggle="tab"
                                data-target="#managment"
                                type="button"
                                role="tab"
                                onClick={() => setNextActiveTab("managment")}
                            >
                                Project management
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className={`nav-link ${activeTab === "tools" ? "active" : ""}`}
                                id="contact-tab"
                                data-toggle="tab"
                                data-target="#tools"
                                type="button"
                                role="tab"
                                onClick={() => setNextActiveTab("tools")}
                            >
                                Financial tools
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className={`nav-link ${activeTab === "communication" ? "active" : ""}`}
                                id="contact-tab"
                                data-toggle="tab"
                                data-target="#communication"
                                type="button"
                                role="tab"
                                onClick={() => setNextActiveTab("communication")}
                            >
                                Communication
                            </button>
                        </li>
                    </ul>

                    <div className="tab-content" id="myTabContent">
                        <div
                            className={`tab-pane fade ${activeTab === "process" ? "active" : ""}  ${
                                isActiveTabShown && activeTab === "process" ? "show" : ""
                            }`}
                            id="process"
                            role="tabpanel"
                            onTransitionEnd={() => {
                                setActiveTab(nextActiveTab);
                            }}
                        >
                            <h3 className="display-3" style={{textAlign:'center'}}>Sales process</h3>
                            <img src={underConstruction} alt="" style={{margin: '0 auto',display: 'block'}}  />
                        </div>
                        <div
                            className={`tab-pane fade ${activeTab === "managment" ? "active" : ""}  ${
                                isActiveTabShown && activeTab === "managment" ? "show" : ""
                            }`}
                            id="managment"
                            role="tabpanel"
                            onTransitionEnd={() => {
                                setActiveTab(nextActiveTab);
                            }}
                        >
                             <h3 className="display-3" style={{textAlign:'center'}}>Project management</h3>
                           <img src={underConstruction} alt="" style={{margin: '0 auto',display: 'block'}} />
                        </div>
                        <div
                            className={`tab-pane fade ${activeTab === "tools" ? "active" : ""}  ${
                                isActiveTabShown && activeTab === "tools" ? "show" : ""
                            }`}
                            id="tools"
                            role="tabpanel"
                            onTransitionEnd={() => {
                                setIsActiveTabShown(true);
                                setActiveTab(nextActiveTab);
                            }}
                        >
                            <div className="financial-tools">
                                <div className="financial-tools-cover" data-lazy='fade-right'>
                                    <img src={showcaseCoverSm} alt="" />
                                </div>

                                <div className="financial-tools-info">
                                    <div className="wrapper">
                                        <h3 className="financial-tools-title display-3">Financial tools</h3>
                                        <p className="financial-tools-description display-8">
                                            Paych money-saving features track cash flow and manage budgets, down to the
                                            last penny.
                                        </p>
                                        <ul className="list">
                                            <li className="list-item text-primary display-8">
                                                -Bills and Purchase Orders
                                            </li>
                                            <li className="list-item text-primary display-8">-Budget</li>
                                            <li className="list-item text-primary display-8">-Accurate Estimating</li>
                                            <li className="list-item text-primary display-8">-Invoicing</li>
                                            <li className="list-item text-primary display-8">-Online payments</li>
                                            <li className="list-item text-primary display-8">-Advanced reporting</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className={`tab-pane fade ${activeTab === "communication" ? "active" : ""}  ${
                                isActiveTabShown && activeTab === "communication" ? "show" : ""
                            }`}
                            id="communication"
                            role="tabpanel"
                            onTransitionEnd={() => {
                                setIsActiveTabShown(true);
                                setActiveTab(nextActiveTab);
                            }}
                        >
                            <h3 className="display-3" style={{textAlign:'center'}}>Communication</h3>
                            <img src={underConstruction} alt="" style={{margin: '0 auto',display: 'block'}} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
