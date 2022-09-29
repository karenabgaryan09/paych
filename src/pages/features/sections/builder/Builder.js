import React from "react";
import { BuilderCard, Button } from "../../../../components";
import localData from "../../../../localData";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";

export default function Builder() {
    const { calculator, track, invoices, client, leads, expenses, books } = localData.images;
    const { angleLeft, angleRight, preloader } = localData.svgs;

    const navigationPrevRef = React.useRef(null);
    const navigationNextRef = React.useRef(null);

    return (
        <section className="builder">
            <div className="container">
                <h1 className="builder-title display-1">All the features builders need, under one login.</h1>
                <p className="builder-subtitle display-8">
                    Estimate, Invoice, Collect Payments, and Manage Projects from Anywhere.
                </p>
                <Button className="btn btn-primary rounded-pill">get started now</Button>
            </div>
            <div className="wrapper">
                <div className="container">
                    <h2 className="builder-description">
                        Our construction management software helps with every step of the build – from the sales process
                        and project planning to financial tracking and client communication.
                    </h2>
                </div>
            </div>
            <div className="container" data-lazy-block>
                <div className="cards-group">
                    {false ? (
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
                                spaceBetween={10}
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
                                        slidesPerView: 2,
                                    },
                                    420: {
                                        slidesPerView: 3,
                                    },
                                    576: {
                                        slidesPerView: 4,
                                    },
                                    // 768: {
                                    //     slidesPerView: 4,
                                    // },
                                    992: {
                                        slidesPerView: 5,
                                    },
                                    1200: {
                                        slidesPerView: 6,
                                    },
                                    1400: {
                                        slidesPerView: 7,
                                    },
                                }}
                            >
                                {
                                    <>
                                        <SwiperSlide>
                                            <BuilderCard builder={{ image: calculator, title: "Estimates" }} />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <BuilderCard builder={{ image: track, title: "Track Project" }} />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <BuilderCard builder={{ image: invoices, title: "Invoices" }} />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <BuilderCard builder={{ image: client, title: "Client Managment" }} />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <BuilderCard
                                                builder={{ image: leads, title: "Manage + Track Leadsates" }}
                                            />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <BuilderCard builder={{ image: expenses, title: "Manage Expenses" }} />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <BuilderCard builder={{ image: books, title: "Quick Books Sync" }} />
                                        </SwiperSlide>
                                    </>
                                }
                            </Swiper>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
