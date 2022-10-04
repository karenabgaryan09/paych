import React, { useState, useEffect } from "react";
import { Footer, Button, NewsCard } from "../../components";
import { motion } from "framer-motion";
import { useGlobalContext } from "../../context";
import FadeOnScreen from "../../utils/fadeOnScreen";
import localData from "../../localData";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Link } from "react-router-dom";

export default function Blog() {
    const { fade } = useGlobalContext().animations;
    useEffect(() => FadeOnScreen.createObserver(), []);

    const { technology, construction, business } = localData.images;
    const { angleLeft, angleRight, preloader,search } = localData.svgs;


    const navigationPrevRef = React.useRef(null);
    const navigationNextRef = React.useRef(null);

    const [news, setNews] = useState([
        {
            cover: technology,
            category: "Technology",
            date: "2022 SEPT 10",
            title: "4 signs your team needs construction technology",
            slug: "blog-1",
        },
        {
            cover: construction,
            category: "Construction",
            date: "2022 SEPT 10",
            title: "Construction Delivery Method Training",
            slug: "blog-2",
        },
        {
            cover: business,
            category: "Business",
            date: "2022 SEPT 10",
            title: "How to be a better construction project manager",
            slug: "blog-3",
        },
    ]);



    return (
        <motion.div {...fade} className="blog-page">
            {/* <div data-lazy-block>
                <div className="circle" data-lazy="scale"></div>
            </div> */}
            <div className="container ">
                <aside className="sidebar details">
                    <div className="wrapper">
                        <div className="input-group search-field">
                            <Button className="btn btn-light">{search}</Button>
                            <input type="text" className="form-control" placeholder="search" />
                        </div>
                        <p className="details-description">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
                            of classical Latin
                        </p>
                    </div>
                    <hr />
                    <div className="wrapper">
                        <p className="details-question">New to Paych?</p>
                        <div className="wrapper-inner">
                            <Button className="btn btn-primary rounded-pill">get free trial</Button>
                            <a href="#/" className="link-dark">
                                learn more
                            </a>
                        </div>
                    </div>
                    <hr />
                </aside>
                <hr className="divider" />
                <main className="main">
                    <section className="showcase">
                        <h6 className="showcase-sup display-8">product news project managment</h6>
                        <h1 className="showcase-title display-1">Paych: A new way to pay your subs and vendors</h1>
                        <div className="showcase-info">
                            By{" "}
                            <a href="#/" className="link-primary">
                                Chelsea Cole
                            </a>{" "}
                            • Published Aug 18, 2022
                        </div>
                        <div className="showcase-image">
                            <img src={technology} alt="" />
                        </div>
                        <div className="showcase-content">
                            <p>
                                A big part of managing cash flow is sending and receiving payments. With Buildertrend
                                Payments, you can do both faster and in one convenient location.
                            </p>
                            <br />
                            <p>
                                And now, with our newest integration, paying your subcontractors and vendors is as easy
                                as sending an email. You send the payment, and we take care of the rest. Plus, your subs
                                get to choose how they want to get paid.
                            </p>
                            <br />
                            <p>
                                To learn more about this updated payment experience, we talked to Emma Dickinson, one of
                                our product managers. She’s got all the insider information and answers you need before
                                getting started.
                            </p>
                            <br />
                            <br />
                            <h2>
                                What was the main reason for enhancing Paych process for sending payments to subs and
                                vendors?
                            </h2>
                            <br />
                            <br />
                            <p>
                                We wanted builders to be able to pay all their subcontractors through Buildertrend, and
                                with this update, the process is easy for both our customers and their subs. The new
                                process for sending payments removes some big hurdles associated with paying subs
                                previously.
                            </p>
                            <br />
                            <br />
                            <h2>What benefits are being added with the updated capabilities?</h2>
                            <br />
                            <br />
                            <p>By removing some hurdles, we’ve added three key benefits:</p>
                            <br />
                            <ul>
                                <li>
                                    <b>It’s free for subcontractors:</b> Because sending payments through Buildertrend
                                    is a subscription builders pay for, there are no fees for subs or vendors.
                                </li>
                                <li>
                                    <b>All e-checks are sent through email:</b> This means subs don’t have to be active
                                    in Buildertrend to accept payments.
                                </li>
                                <li>
                                    <b>Subs and vendors select how they get paid:</b> They can choose from ACH, printing
                                    the check themselves or having a physical check printed and mailed to them.
                                </li>
                            </ul>
                            <br />
                            <p>
                                Builders no longer have to remember how each sub wants to be paid, and they aren’t
                                limited to paying only subs who set up ACH transfers. Sending payments is now as easy as
                                sending an email.
                            </p>
                        </div>
                    </section>
                    <hr />
                </main>
            </div>
            <section className="integrated-news">
               <div className="container">
                 <div className="wrapper">
                     <h2 className="integrated-news-title display-2">next up in blog</h2>
                     <Link to="/blogs" className="btn btn-primary rounded-pill">view all</Link>
                 </div>
                 <div className="card-group">
                 {!news || !Object.keys(news).length ? (
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
                                    spaceBetween={20}
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
                                    {news.map((singleNews, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <NewsCard news={singleNews} />
                                            </SwiperSlide>
                                        );
                                    })}
                                </Swiper>
                            </div>
                        )}
                 </div>
               </div>
            </section>
            <Footer />
        </motion.div>
    );
}
