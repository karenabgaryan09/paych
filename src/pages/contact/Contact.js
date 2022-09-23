import React, { useEffect } from "react";
import { Footer, Button } from "../../components";
import { motion } from "framer-motion";
import { useGlobalContext } from "../../context";
import FadeOnScreen from "../../utils/fadeOnScreen";
import localData from "../../localData";
import Validation from "../../utils/validation";

export default function Contact() {
    const { fade } = useGlobalContext().animations;
    useEffect(() => {
        FadeOnScreen.createObserver();
        Validation.init();
    }, []);

    const { phone, message, location } = localData.svgs;
    return (
        <>
            <motion.main {...fade} className="contact-page">
                <div data-lazy-block>
                    <div className="circle" data-lazy="scale"></div>
                </div>
                <section className="showcase">
                    <div className="container">
                        <h1 className="showcase-title display-1">We’re always here for you</h1>
                        <p className="showcase-subtitle display-8">
                            Our team has your back with unlimited support whenever you need it.
                        </p>
                        <Button className="btn btn-primary rounded-pill showcase-btn">get started now</Button>

                        <div className="showcase-content">
                            <div className="info">
                                <h2 className="info-title display-2">Contact us</h2>
                                <p className="info-description">
                                    Contact nullam usamcoen the drana duru metus utah osare asya mavna busnini viventa
                                    the ornare ipsum.
                                </p>
                                <ul className="details">
                                    <li className="details-item">
                                        <div className="details-icon">{phone}</div>
                                        <div className="wrapper">
                                            <h4 className="details-title">Call Us</h4>
                                            <a
                                                href="tel: +881900888666"
                                                className="details-link link-dark"
                                                underline="hover"
                                            >
                                                (+88) 1900 888 666
                                            </a>
                                        </div>
                                    </li>
                                    <li className="details-item">
                                        <div className="details-icon">{message}</div>
                                        <div className="wrapper">
                                            <h4 className="details-title">Send Us Email</h4>
                                            <a
                                                target="_blank"
                                                href="mailto:info@paych.com"
                                                className="details-link link-dark"
                                                underline="hover"
                                            >
                                                info@paych.com
                                            </a>
                                        </div>
                                    </li>
                                    <li className="details-item">
                                        <div className="details-icon">{location}</div>
                                        <div className="wrapper">
                                            <h4 className="details-title">Adress</h4>
                                            <a
                                                target="_blank"
                                                href="https://www.google.com/maps/place/Howard+St,+Toronto,+ON,+Canada/@43.6713196,-79.3758678,17z/data=!3m1!4b1!4m5!3m4!1s0x89d4cb51467e47e9:0x8a871249511f4c9a!8m2!3d43.6713196!4d-79.3736791"
                                                className="details-link link-dark"
                                                underline="hover"
                                            >
                                                1095 Howard Street, Ontario, Canada
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <form action="" className="form contact-form needs-validation" noValidate>
                                <h2 className="form-title display-2">Get in touch</h2>
                                <p className="form-description">
                                    Have questions or need help with your account? We’re here for you!{" "}
                                </p>

                                <div className="input-group">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="form-control"
                                        required
                                        placeholder="name"
                                    />
                                    <div className="valid-feedback">looks good.</div>
                                    <div className="invalid-feedback">name required.</div>
                                </div>
                                <div className="input-group">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="form-control"
                                        required
                                        placeholder="Email address"
                                    />
                                    <div className="valid-feedback">looks good.</div>
                                    <div className="invalid-feedback">email required.</div>
                                </div>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        name="question"
                                        id="question"
                                        className="form-control"
                                        // required
                                        placeholder="What can we help you with?"
                                    />
                                    <div className="valid-feedback">looks good.</div>
                                    <div className="invalid-feedback">subject required.</div>
                                </div>
                                <div className="input-group">
                                    <textarea
                                        name="message"
                                        id="message"
                                        cols="30"
                                        rows="7"
                                        className="form-control textarea"
                                        placeholder="message"
                                        required
                                    ></textarea>
                                    <div className="valid-feedback">looks good.</div>
                                    <div className="invalid-feedback">message required.</div>
                                </div>

                                <Button className="btn btn-primary rounded-pill">send message</Button>
                            </form>
                        </div>
                    </div>
                </section>
            </motion.main>
            <Footer />
        </>
    );
}
