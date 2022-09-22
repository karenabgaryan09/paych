import React from "react";
import { Button, NewsCard } from "../../../../components";
import localData from "../../../../localData";

export default function News() {
    const {technology,construction,business} = localData.images

    return (
        <section className="news">
            <div className="news-top-half"></div>
            <div className="news-bottom-half">
                <div className="container">
                    <div className="wrapper">
                        <h2 className="news-title display-2">Latest News & Blogs</h2>
                        <Button className="btn btn-light rounded-pill">view all</Button>
                    </div>
                    <div className="news-content">
                        <NewsCard
                            news={{
                                cover: technology,
                                category: "Technology",
                                date: "2022 SEPT 10",
                                title: "4 signs your team needs construction technology",
                                link: "#/",
                            }}
                        />
                        <NewsCard
                            news={{
                                cover: construction,
                                category: "Construction",
                                date: "2022 SEPT 10",
                                title: "Construction Delivery Method Training",
                                link: "#/",
                            }}
                        />
                        <NewsCard
                            news={{
                                cover: business,
                                category: "Business",
                                date: "2022 SEPT 10",
                                title: "How to be a better construction project manager",
                                link: "#/",
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
