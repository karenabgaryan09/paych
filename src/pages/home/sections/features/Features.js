import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../../../context";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import localData from "../../../../localData";

export default function Features() {
    const { showcaseCoverSm } = localData.images;
    const { angleLeft, angleRight, preloader } = localData.svgs;
    // const { activeTab, setActiveTab } = useGlobalContext();

    const navigationPrevRef = React.useRef(null);
    const navigationNextRef = React.useRef(null);

    const setActiveTab = (nextActiveLink) => {
        const wrapper = nextActiveLink.closest(".tabs");
        const activeLink = wrapper.querySelector(`.nav-link.active`);
        const activePane = wrapper.querySelector(`.tab-pane.active`);
        const nextActivePane = wrapper.querySelector(nextActiveLink.dataset.target);

        if (activeLink) activeLink.classList.remove("active");
        nextActiveLink.classList.add("active");

        if (activePane) {
            activePane.classList.remove("show");
            activePane.addEventListener(
                "transitionend",
                () => {
                    activePane.classList.remove("active");
                    nextActivePane.classList.add("active");
                    setTimeout(() => nextActivePane.classList.add("show"), 0);
                },
                { once: true }
            );
        } else {
            nextActivePane.classList.add("active");
            setTimeout(() => nextActivePane.classList.add("show"), 0);
        }
    };

    const handleOnClick = () => {
        if (window.innerWidth > 576) return;
        const activeSlide = document.querySelector(".swiper-slide-active");
        if (!activeSlide) return;
        const link = activeSlide.querySelector(".nav-link");
        if (link) link.click();
    };

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
                                        onClick={handleOnClick}
                                    >
                                        {angleLeft}
                                    </span>
                                    <span
                                        className="swiper-custom-angle swiper-custom-angle-right"
                                        ref={navigationNextRef}
                                        onClick={handleOnClick}
                                    >
                                        {angleRight}
                                    </span>
                                </div>
                                <Swiper
                                    touchStartPreventDefault={false}
                                    modules={[Navigation, Pagination]}
                                    // spaceBetween={30}
                                    // slidesPerView={1}
                                    initialSlide={2}
                                    centeredSlides={window.innerWidth < 576 ? true : false}
                                    slidesPerView="auto"
                                    onSlideChange={() => console.log("slide change")}
                                    navigation={{
                                        prevEl: navigationPrevRef.current,
                                        nextEl: navigationNextRef.current,
                                    }}
                                    onBeforeInit={(swiper) => {
                                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                                        swiper.params.navigation.nextEl = navigationNextRef.current;
                                    }}
                                    // breakpoints={{
                                    //     0: {
                                    //         slidesPerView: 1,
                                    //     },
                                    //     576: {
                                    //         slidesPerView: 2,
                                    //     },
                                    //     768: {
                                    //         slidesPerView: 3,
                                    //     },
                                    //     1100: {
                                    //         slidesPerView: 4,
                                    //     },
                                    // }}
                                >
                                    <SwiperSlide>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link"
                                                id="process-tab"
                                                data-toggle="tab"
                                                data-target="#process"
                                                type="button"
                                                role="tab"
                                                onClick={(e) => setActiveTab(e.target)}
                                            >
                                                Sales process
                                            </button>
                                        </li>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <li className="nav-item nav-item-managment" role="presentation">
                                            <button
                                                className="nav-link"
                                                id="managment-tab"
                                                data-toggle="tab"
                                                data-target="#managment"
                                                type="button"
                                                role="tab"
                                                onClick={(e) => setActiveTab(e.target)}
                                            >
                                                Project management
                                            </button>
                                        </li>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link active"
                                                id="tools-tab"
                                                data-toggle="tab"
                                                data-target="#tools"
                                                type="button"
                                                role="tab"
                                                onClick={(e) => setActiveTab(e.target)}
                                            >
                                                Financial tools
                                            </button>
                                        </li>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link"
                                                id="communication-tab"
                                                data-toggle="tab"
                                                data-target="#communication"
                                                type="button"
                                                role="tab"
                                                onClick={(e) => setActiveTab(e.target)}
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
                        <div className="tab-pane fade" id="process" role="tabpanel">
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
                        <div className="tab-pane fade" id="managment" role="tabpanel">
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
                        <div className="tab-pane fade active show" id="tools" role="tabpanel">
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
                        <div className="tab-pane fade" id="communication" role="tabpanel">
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
