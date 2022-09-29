import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../../../context";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import localData from "../../../../localData";

export default function Features() {
    const { showcaseCoverSm } = localData.images;
    const { angleLeft, angleRight, preloader } = localData.svgs;
    const { activeTab, setActiveTab } = useGlobalContext();

    const navigationPrevRef = React.useRef(null);
    const navigationNextRef = React.useRef(null);

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
                <div className="tabs" id="tabs">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        {false ? (
                            <img src={preloader} width="300" />
                        ) : (
                            <div className="swiper-custom-wrapper" data-lazy-block>
                                <div className="swiper-custom-center">
                                    <span
                                        className="swiper-custom-angle swiper-custom-angle-left"
                                        ref={navigationPrevRef}
                                    >
                                        {angleLeft}
                                    </span>
                                    <span
                                        className="swiper-custom-angle swiper-custom-angle-right"
                                        ref={navigationNextRef}
                                    >
                                        {angleRight}
                                    </span>
                                </div>
                                <Swiper
                                    touchStartPreventDefault={false}
                                    modules={[Navigation, Pagination]}
                                    // spaceBetween={30}
                                    slidesPerView={1}
                                    onSlideChange={() => console.log("slide change")}
                                    navigation={{
                                        prevEl: navigationPrevRef.current,
                                        nextEl: navigationNextRef.current,
                                    }}
                                    onBeforeInit={(swiper) => {
                                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                                        swiper.params.navigation.nextEl = navigationNextRef.current;
                                    }}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                        },
                                        576: {
                                            slidesPerView: 2,
                                        },
                                        768: {
                                            slidesPerView: 3,
                                        },
                                        1100: {
                                            slidesPerView: 4,
                                        },
                                    }}
                                >
                                    <SwiperSlide>
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
                                    </SwiperSlide>
                                    <SwiperSlide>
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
                                    </SwiperSlide>
                                    <SwiperSlide>
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
                                    </SwiperSlide>
                                    <SwiperSlide>
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
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        )}
                    </ul>

                    <div className="tab-content" id="myTabContent">
                        <div
                            className={`tab-pane fade ${activeTab === "process" ? "active" : ""}  ${
                                activeTab === "process" ? "show" : ""
                            }`}
                            id="process"
                            role="tabpanel"
                        >
                            <div className="financial-tools">
                                <div data-lazy-block>
                                    <div className="financial-tools-cover" data-lazy="fade-right">
                                        <img src={showcaseCoverSm} alt="" />
                                    </div>
                                </div>

                                <div className="financial-tools-info">
                                    <div className="wrapper">
                                        <h3 className="financial-tools-title display-3">sales process</h3>
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
                            className={`tab-pane fade ${activeTab === "managment" ? "active" : ""}  ${
                                activeTab === "managment" ? "show" : ""
                            }`}
                            id="managment"
                            role="tabpanel"
                        >
                            <div className="financial-tools">
                                <div data-lazy-block>
                                    <div className="financial-tools-cover" data-lazy="fade-right">
                                        <img src={showcaseCoverSm} alt="" />
                                    </div>
                                </div>

                                <div className="financial-tools-info">
                                    <div className="wrapper">
                                        <h3 className="financial-tools-title display-3">project managment</h3>
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
                            className={`tab-pane fade ${activeTab === "tools" ? "active" : ""}  ${
                                activeTab === "tools" ? "show" : ""
                            }`}
                            id="tools"
                            role="tabpanel"
                        >
                            <div className="financial-tools">
                                <div data-lazy-block>
                                    <div className="financial-tools-cover" data-lazy="fade-right">
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
                            <div className="financial-tools">
                                <div data-lazy-block>
                                    <div className="financial-tools-cover" data-lazy="fade-right">
                                        <img src={showcaseCoverSm} alt="" />
                                    </div>
                                </div>

                                <div className="financial-tools-info">
                                    <div className="wrapper">
                                        <h3 className="financial-tools-title display-3">communication</h3>
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
                    </div>
                </div>
            </div>
        </section>
    );
}
