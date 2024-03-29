import React from "react";
import { Link } from "react-router-dom";

export default function NewsCard({ news }) {
    return (
        <div className="card news-card" data-lazy-block>
            <div className="card-image" data-lazy='fade-up' data-lazy-delay='0'>
                <img src={news.cover} alt="" />
                <div className="card-body">
                    <div className="wrapper">
                        <div className="card-category">{news.category}</div>
                        <div className="card-date">{news.date}</div>
                    </div>
                    <h4 className="card-title">{news.title}</h4>
                    <Link to={`/blogs/${news.slug}`} className="link link-primary card-link">
                        read more
                    </Link>
                </div>
            </div>
        </div>
    );
}
