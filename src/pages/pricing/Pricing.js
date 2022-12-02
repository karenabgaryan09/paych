import React, { useEffect } from "react";
import { Footer, Banner2 } from "../../components";
import { motion } from "framer-motion";
import { useGlobalContext } from "../../context";
import FadeOnScreen from "../../utils/fadeOnScreen";
import Showcase from "./sections/showcase/Showcase";
import Questions from "./sections/questions/Questions";

export default function Pricing() {
    const { fade } = useGlobalContext().animations;
    useEffect(() => FadeOnScreen.createObserver(), []);

    useEffect(() => {
        document.title = "pricing";
    }, []);

    return (
        <>
            <motion.main {...fade} className="pricing-page">
                <div data-lazy-block>
                    <div className="circle" data-lazy="scale"></div>
                </div>
                <Showcase />
                <Banner2 />
                <Questions />
            </motion.main>
            <Footer />
        </>
    );
}
