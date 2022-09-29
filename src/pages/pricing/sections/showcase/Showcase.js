import React,{useState} from "react";
import { Button, PricingCard } from "../../../../components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import localData from "../../../../localData";

export default function Showcase() {
    const { angleLeft, angleRight, preloader } = localData.svgs;
    const [pricing, setPricing] = useState([
        {
            title: "personal",
            description: "perfect plan for starters",
            price: "80",
            plan: [
                { isIncluded: true, text: "Unlimited Estimates, Invoices, and Clients" },
                { isIncluded: true, text: "Lead Management" },
                { isIncluded: true, text: "Document & Photo storage" },
                { isIncluded: true, text: "Change Orders" },
                { isIncluded: true, text: "Work Orders" },
                { isIncluded: true, text: "Change Order" },
                { isIncluded: true, text: "Bills" },
                { isIncluded: true, text: "Surveys" },
                { isIncluded: true, text: "Accept Online Payments" },
                { isIncluded: true, text: "Deposits & Payments Schedules" },
                { isIncluded: false, text: "Sync with QuickBooks Online" },
                { isIncluded: false, text: "License and Insurance" },
                { isIncluded: false, text: "Sharing permission" },
                { isIncluded: false, text: "Admin Tools" },
                { isIncluded: false, text: "Sync across devices" },
                { isIncluded: false, text: "Notifications" },
                { isIncluded: false, text: "Branding" },
            ],
        },
        {
            title: "professional",
            description: "for users who want to do more",
            price: "160",
            plan: [
                { isIncluded: true, text: "Unlimited Estimates, Invoices, and Clients" },
                { isIncluded: true, text: "Lead Management" },
                { isIncluded: true, text: "Document & Photo storage" },
                { isIncluded: true, text: "Change Orders" },
                { isIncluded: true, text: "Work Orders" },
                { isIncluded: true, text: "Change Order" },
                { isIncluded: true, text: "Bills" },
                { isIncluded: true, text: "Surveys" },
                { isIncluded: true, text: "Accept Online Payments" },
                { isIncluded: true, text: "Deposits & Payments Schedules" },
                { isIncluded: true, text: "Sync with QuickBooks Online" },
                { isIncluded: true, text: "License and Insurance" },
                { isIncluded: true, text: "Sharing permission" },
                { isIncluded: true, text: "Admin Tools" },
                { isIncluded: false, text: "Sync across devices" },
                { isIncluded: false, text: "Notifications" },
                { isIncluded: false, text: "Branding" },
            ],
        },
        {
            title: "team",
            description: "your entire team at 1 one place",
            price: "220",
            plan: [
                { isIncluded: true, text: "Unlimited Estimates, Invoices, and Clients" },
                { isIncluded: true, text: "Lead Management" },
                { isIncluded: true, text: "Document & Photo storage" },
                { isIncluded: true, text: "Change Orders" },
                { isIncluded: true, text: "Work Orders" },
                { isIncluded: true, text: "Change Order" },
                { isIncluded: true, text: "Bills" },
                { isIncluded: true, text: "Surveys" },
                { isIncluded: true, text: "Accept Online Payments" },
                { isIncluded: true, text: "Deposits & Payments Schedules" },
                { isIncluded: true, text: "Sync with QuickBooks Online" },
                { isIncluded: true, text: "License and Insurance" },
                { isIncluded: true, text: "Sharing permission" },
                { isIncluded: true, text: "Admin Tools" },
                { isIncluded: true, text: "Sync across devices" },
                { isIncluded: true, text: "Notifications" },
                { isIncluded: true, text: "Branding" },
            ],
        },
    ]);

    const navigationPrevRef = React.useRef(null);
    const navigationNextRef = React.useRef(null);
    return (
        <section className="showcase">
            <div className="container">
                <h1 className="showcase-title display-1">Pick your plan</h1>
                <p className="showcase-subtitle display-8">
                    Discover the most robust and complete construction software for home builders, remodelers and
                    specialty contractors. It’s built to scale – so you can upgrade as you grow.
                </p>
                <Button className="btn btn-primary rounded-pill showcase-btn">get started now</Button>

                <div className="card-group">
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
                                modules={[Navigation, Pagination]}
                                spaceBetween={30}
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
                                    768: {
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
