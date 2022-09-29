import React, { useState } from "react";
import { PricingCard } from "../../../../components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import localData from "../../../../localData";

export default function Pricing() {
    const { angleLeft, angleRight, preloader } = localData.svgs;

    const navigationPrevRef = React.useRef(null);
    const navigationNextRef = React.useRef(null);

    const [pricing, setPricing] = useState([
        {
            title: "personal",
            description: "perfect plan for starters",
            price: "80",
            plan: [
                { isIncluded: true, text: "Everything in plan" },
                { isIncluded: true, text: "100 Contracts" },
                { isIncluded: true, text: "Share with 8 team members" },
                { isIncluded: true, text: "Sharing permission" },
                { isIncluded: true, text: "Sync across devices" },
                { isIncluded: true, text: "Admin Tools" },
                { isIncluded: true, text: "Phone support" },
            ],
        },
        {
            title: "personal",
            description: "perfect plan for starters",
            price: "80",
            plan: [
                { isIncluded: true, text: "Everything in plan" },
                { isIncluded: true, text: "100 Contracts" },
                { isIncluded: true, text: "Share with 8 team members" },
                { isIncluded: true, text: "Sharing permission" },
                { isIncluded: true, text: "Sync across devices" },
                { isIncluded: true, text: "Admin Tools" },
                { isIncluded: true, text: "Phone support" },
            ],
        },
        {
            title: "personal",
            description: "perfect plan for starters",
            price: "80",
            plan: [
                { isIncluded: true, text: "Everything in plan" },
                { isIncluded: true, text: "100 Contracts" },
                { isIncluded: true, text: "Share with 8 team members" },
                { isIncluded: true, text: "Sharing permission" },
                { isIncluded: true, text: "Sync across devices" },
                { isIncluded: true, text: "Admin Tools" },
                { isIncluded: true, text: "Phone support" },
            ],
        },
    ]);
    return (
        <section className="pricing">
            <div className="container">
                <h2 className="pricing-title display-2">Pricing & Plans</h2>
                <h3 className="pricing-subtitle display-6">
                    Get organized with one tool that manages all your projects. Whatever plan you choose, it includes
                    everything you need to build uninterrupted.
                </h3>

                <div className="pricing-content">
                    {!pricing || !Object.keys(pricing).length ? (
                        <img src={preloader} width="300" />
                    ) : (
                        <div className="swiper-custom-wrapper" data-lazy-block>
                            <div className="swiper-custom-center">
                                <span className="swiper-custom-angle swiper-custom-angle-left" ref={navigationPrevRef}>
                                    {angleLeft}
                                </span>
                                <span className="swiper-custom-angle swiper-custom-angle-right" ref={navigationNextRef}>
                                    {angleRight}
                                </span>
                            </div>
                            <Swiper
                                touchStartPreventDefault={false}
                                // loop={true}
                                modules={[Navigation, Pagination]}
                                spaceBetween={30}
                                slidesPerView={1}
                                onSlideChange={() => console.log("slide change")}
                                // onSwiper={(swiper) => console.log(swiper)}
                                navigation={{
                                    prevEl: navigationPrevRef.current,
                                    nextEl: navigationNextRef.current,
                                }}
                                onBeforeInit={(swiper) => {
                                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                                    swiper.params.navigation.nextEl = navigationNextRef.current;
                                }}
                                // pagination={{ clickable: true }}
                                // scrollbar={{ draggable: true }}
                                breakpoints={{
                                    // when window width is >= 640px
                                    0: {
                                        //   width: 640,
                                        slidesPerView: 1,
                                    },
                                    // when window width is >= 768px
                                    768: {
                                        //   width: 768,
                                        slidesPerView: 2,
                                    },
                                    1200: {
                                        slidesPerView: 3,
                                    },
                                }}
                            >
                                {pricing.map((pricing, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <PricingCard pricing={pricing} index={index} />
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
