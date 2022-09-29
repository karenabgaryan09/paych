import React, { useEffect, useState } from "react";
import localData from "../../../../localData";
import { useGlobalContext } from "../../../../context";

export default function Features() {
    const { showcaseCoverSm } = localData.images;
    const { activeTab, setActiveTab } = useGlobalContext();

    return (
        <section className="features" id="features">
            <div className="container">
                <h2 className="display-2 features-title text-primary">
                    All the features builders need, under one login.
                </h2>
                <p className="features-description display-8">
                    Our construction management software helps with every step of the build – from the sales process and
                    project planning to financial tracking and client communication.
                </p>
                <div className="tabs"  id="tabs">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button
                                className={`nav-link ${activeTab === "process" ? "active" : ""}`}
                                id="home-tab"
                                data-toggle="tab"
                                data-target="#process"
                                type="button"
                                role="tab"
                                onClick={() => setActiveTab("process")}
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
                                onClick={() => setActiveTab("managment")}
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
                                onClick={() => setActiveTab("tools")}
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
                                onClick={() => setActiveTab("communication")}
                            >
                                Communication
                            </button>
                        </li>
                    </ul>

                    <div className="tab-content" id="myTabContent">
                        <div
                            className={`tab-pane fade ${activeTab === "process" ? "active" : ""}  ${
                                activeTab === "process" ? "show" : ""
                            }`}
                            id="process"
                            role="tabpanel"
                        >
                            <div className="sales-process">
                                <h3 className="display-3 sales-process-title">Sales process</h3>
                                <br />
                                <p className="sales-process-description display-7">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id ipsum explicabo quidem
                                    dicta! Non velit deleniti, voluptas nihil perferendis fugit eos voluptatum dolorem
                                    harum earum dignissimos veniam explicabo! Possimus odio minus ex assumenda debitis
                                    optio. Tempora aut atque quaerat illum accusantium rem ab dolores quidem in mollitia
                                    commodi perspiciatis earum voluptas recusandae, officiis tempore vitae dolor odio?
                                    Sint hic ullam a aperiam porro laborum laboriosam atque perferendis dolor autem iure
                                    quod aliquam excepturi, explicabo, repudiandae ex magni tenetur, dicta qui.
                                    Deleniti, atque quaerat! Ratione fugit vitae earum nesciunt perferendis facere! Odio
                                    non error minima natus dignissimos quam, iure ex eaque!
                                </p>
                            </div>
                        </div>
                        <div
                            className={`tab-pane fade ${activeTab === "managment" ? "active" : ""}  ${
                                activeTab === "managment" ? "show" : ""
                            }`}
                            id="managment"
                            role="tabpanel"
                        >
                            <div className="project-managment-process">
                                <h3 className="display-3 project-managment-process-title">Project managment</h3>
                                <br />
                                <p className="project-managment-process-description display-7">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id ipsum explicabo quidem
                                    dicta! Non velit deleniti, voluptas nihil perferendis fugit eos voluptatum dolorem
                                    harum earum dignissimos veniam explicabo! Possimus odio minus ex assumenda debitis
                                    optio. Tempora aut atque quaerat illum accusantium rem ab dolores quidem in mollitia
                                    commodi perspiciatis earum voluptas recusandae, officiis tempore vitae dolor odio?
                                    Sint hic ullam a aperiam porro laborum laboriosam atque perferendis dolor autem iure
                                    quod aliquam excepturi, explicabo.
                                </p>
                            </div>
                        </div>
                        <div
                            className={`tab-pane fade ${activeTab === "tools" ? "active" : ""}  ${
                                activeTab === "tools" ? "show" : ""
                            }`}
                            id="tools"
                            role="tabpanel"
                            
                        >
                            <div className="financial-tools" >
                               <div data-lazy-block>
                                 <div className="financial-tools-cover" data-lazy="fade-right" >
                                     <img src={showcaseCoverSm} alt="" />
                                 </div>
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
                                activeTab === "communication" ? "show" : ""
                            }`}
                            id="communication"
                            role="tabpanel"
                        >
                            <div className="communication-process">
                                <h3 className="display-3 communication-process-title">Communication</h3>
                                <br />
                                <p className="communication-process-description display-7">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id ipsum explicabo quidem
                                    dicta! Non velit deleniti, voluptas nihil perferendis fugit eos voluptatum dolorem
                                    harum earum dignissimos veniam explicabo! Possimus odio minus ex assumenda debitis
                                    optio. Tempora aut atque quaerat illum accusantium rem ab dolores quidem in mollitia
                                    commodi perspiciatis earum voluptas recusandae, officiis tempore vitae dolor odio?
                                    Sint hic ullam a aperiam porro.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
