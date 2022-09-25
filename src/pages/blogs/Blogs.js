import React, { useEffect } from "react";
import { Footer, Button, NewsCard } from "../../components";
import { motion } from "framer-motion";
import { useGlobalContext } from "../../context";
import FadeOnScreen from "../../utils/fadeOnScreen";
import localData from "../../localData";

export default function Blogs() {
    const { fade } = useGlobalContext().animations;
    useEffect(() => FadeOnScreen.createObserver(), []);

    const { technology, construction, business } = localData.images;
    return (
        <>
            <motion.main {...fade} className="blogs-page">
                <div data-lazy-block>
                    <div className="circle" data-lazy="scale"></div>
                </div>
                <section className="showcase">
                    <div className="container">
                        <h1 className="showcase-title display-1">Latest News & Blogs</h1>
                        <p className="showcase-subtitle display-8">
                            Our team has your back with unlimited support whenever you need it.
                        </p>
                        <Button className="btn btn-primary rounded-pill showcase-btn">get free trial</Button>

                        <div className="card-group">
                            <NewsCard
                                news={{
                                    cover: technology,
                                    category: "Technology",
                                    date: "2022 SEPT 10",
                                    title: "4 signs your team needs construction technology",
                                    slug: "blog-1",
                                }}
                            />
                            <NewsCard
                                news={{
                                    cover: construction,
                                    category: "Construction",
                                    date: "2022 SEPT 10",
                                    title: "Construction Delivery Method Training",
                                    slug: "blog-2",
                                }}
                            />
                            <NewsCard
                                news={{
                                    cover: business,
                                    category: "Business",
                                    date: "2022 SEPT 10",
                                    title: "How to be a better construction project manager",
                                    slug: "blog-3",
                                }}
                            />
                            <NewsCard
                                news={{
                                    cover: technology,
                                    category: "Technology",
                                    date: "2022 SEPT 10",
                                    title: "4 signs your team needs construction technology",
                                    slug: "blog-4",
                                }}
                            />
                            <NewsCard
                                news={{
                                    cover: construction,
                                    category: "Construction",
                                    date: "2022 SEPT 10",
                                    title: "Construction Delivery Method Training",
                                    slug: "blog-5",
                                }}
                            />
                            <NewsCard
                                news={{
                                    cover: business,
                                    category: "Business",
                                    date: "2022 SEPT 10",
                                    title: "How to be a better construction project manager",
                                    slug: "blog-6",
                                }}
                            />
                            <NewsCard
                                news={{
                                    cover: technology,
                                    category: "Technology",
                                    date: "2022 SEPT 10",
                                    title: "4 signs your team needs construction technology",
                                    slug: "blog-7",
                                }}
                            />
                            <NewsCard
                                news={{
                                    cover: construction,
                                    category: "Construction",
                                    date: "2022 SEPT 10",
                                    title: "Construction Delivery Method Training",
                                    slug: "blog-8",
                                }}
                            />
                            <NewsCard
                                news={{
                                    cover: business,
                                    category: "Business",
                                    date: "2022 SEPT 10",
                                    title: "How to be a better construction project manager",
                                    slug: "blog-9",
                                }}
                            />
                        </div>
                    </div>
                </section>
            </motion.main>
            <Footer />
        </>
    );
}
