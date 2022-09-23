import React, { useEffect } from "react";
import { Footer, Button,NewsCard } from "../../components";
import { motion } from "framer-motion";
import { useGlobalContext } from "../../context";
import FadeOnScreen from "../../utils/fadeOnScreen";
import localData from "../../localData";


export default function Blog() {
    const { fade } = useGlobalContext().animations;
    useEffect(() => FadeOnScreen.createObserver(), []);

    const { technology,construction, business } = localData.images;
    return (
        <div className="wrapper">
            <motion.main {...fade} className="blogs-page">
                <div data-lazy-block>
                    <div className="circle" data-lazy="scale"></div>
                </div>
                <section className="showcase">
                    <div className="container">
                       showcase
                    </div>
                </section>
            </motion.main>
            <Footer/>
        </div>
    );
}
