import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useGlobalContext } from "../../context";
import localData from "../../localData";
import { Button } from "../../components";

export default function Footer() {
    const { fade } = useGlobalContext().animations;

    const { logo, arrow } = localData.svgs;
    const { googlePlay, appStore } = localData.images;
    return (
        <motion.footer {...fade} className="footer bg-dark" data-lazy-block>
            <div className="container">
                <div className="subscribe" data-lazy='fade'>
                    <div className="wrapper">
                        <h2 className="subscribe-title">Subscribe to Our Newsletter</h2>
                        <p className="subscribe-description">
                            Get notified about updates and be the first to get early access to new episodes.
                        </p>
                    </div>
                    <form onSubmit={(e)=>e.preventDefault()}>
                        <label className="form-group">
                            <input type="text" className="form-control"  placeholder="You email address here"/>
                            <Button className="btn btn-primary rounded-pill">subscribe</Button>
                        </label>
                    </form>
                </div>
                <div className="footer-content">
                    <Link className="footer-brand" to="/">
                        {logo}
                    </Link>
                    <div className="contact-info">
                        <h4 className="footer-subtitle  contact-info-title">contact info</h4>
                        <ul className="contact-info-list">
                            <li className="contact-info-item  contact-info-item-question">
                                Need I help? Talk to an Expert
                            </li>
                            <li className="contact-info-item ">
                                <a
                                    href="tel:+881900888666"
                                    className="contact-info-link contact-info-link-tel btn btn-text-dark "
                                >
                                    (+88) 1900 888 666
                                </a>
                            </li>
                            <li className="contact-info-item">
                                <a
                                    target="_blank"
                                    href="https://www.google.com/maps/place/Howard+St,+Toronto,+ON,+Canada/@43.6713235,-79.3758678,17z/data=!3m1!4b1!4m5!3m4!1s0x89d4cb51467e47e9:0x8a871249511f4c9a!8m2!3d43.6713196!4d-79.3736791"
                                    className="contact-info-link contact-info-link-location btn btn-text-dark"
                                >
                                    1095 Howard Street, Ontario, Canada
                                </a>
                            </li>
                            <li className="contact-info-item">
                                <a
                                    target="_blank"
                                    href="mailto:info@paych.com"
                                    className="contact-info-link btn btn-text-dark"
                                >
                                    info@paych.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    

                    <div className="features-links">
                        <h4 className="footer-subtitle  features-links-title">features</h4>
                        <ul className="features-links-list">
                            <li className="quick-links-item">
                                <a target="_blank" href="#/" className="quick-links-link btn btn-text-dark">
                                    Sales process
                                </a>
                            </li>
                            <li className="features-links-item">
                                <a target="_blank" href="#/" className="features-links-link btn btn-text-dark">
                                    Project management
                                </a>
                            </li>
                            <li className="features-links-item">
                                <a target="_blank" href="#/" className="features-links-link btn btn-text-dark">
                                    Financial tools
                                </a>
                            </li>
                            <li className="features-links-item">
                                <a target="_blank" href="#/" className="features-links-link btn btn-text-dark">
                                    Communication
                                </a>
                            </li>
                            <li className="features-links-item">
                                <a target="_blank" href="#/" className="features-links-link btn btn-text-dark">
                                    Mobile app
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="quick-links">
                        <h4 className="footer-subtitle  quick-links-title">quick links</h4>
                        <ul className="quick-links-list">
                         
                            <li className="quick-links-item">
                                <Link to="/contact" className="quick-links-link btn btn-text-dark">
                                    contact us
                                </Link>
                            </li>
                            <li className="quick-links-item">
                                <Link to="/blogs/blog" className="quick-links-link btn btn-text-dark">
                                    blog
                                </Link>
                            </li>
                            <li className="quick-links-item">
                                <Link to="/pricing" className="quick-links-link btn btn-text-dark">
                                    pricing
                                </Link>
                            </li>
                          
                        </ul>
                    </div>

                    <div className="support">
                        <h4 className="footer-subtitle  support-title">support</h4>
                        <ul className="support-list">
                            <li className="support-item">
                                <a href="#/" target="_blank" className="support-link btn btn-text-dark">
                                    Help Center
                                </a>
                            </li>
                            <li className="support-item">
                                <a href="#/" target="_blank" className="support-link btn btn-text-dark">
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="app">
                        <h4 className="footer-subtitle  app-title">download the app</h4>
                        <div className="app-links">
                            <Button className="btn btn-text-dark">
                                <img src={googlePlay} alt="" />
                            </Button>
                            <Button className="btn btn-text-dark">
                                <img src={appStore} alt="" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom-content">
                        <p className="footer-bottom-text">
                            Copyright © 2022 | Paych. | All Right Reserved | Terms of Use
                        </p>
                        <a href="#top" className="btn btn-primary scroll-top-btn">
                            {arrow}
                        </a>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
}
