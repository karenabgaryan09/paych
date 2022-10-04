import React,{useState} from "react";
import { Button, NewsCard } from "../../../../components";
import localData from "../../../../localData";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";

export default function News() {
    const { technology, construction, business } = localData.images;
    const { angleLeft, angleRight, preloader } = localData.svgs;

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

    const navigationPrevRef = React.useRef(null);
    const navigationNextRef = React.useRef(null);

    return (
        <section className="news">
            <div className="news-top-half"></div>
            <div className="news-bottom-half">
                <div className="container">
                    <div className="wrapper">
                        <h2 className="news-title display-2">Latest News & Blogs</h2>
                        <Link to="/blogs" className="btn btn-light rounded-pill">
                            view all
                        </Link>
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
            </div>
        </section>
    );
}
