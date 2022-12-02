import React, { useEffect } from "react";
import { Footer } from "../../components";
import { motion } from "framer-motion";
import { useGlobalContext } from "../../context";
import FadeOnScreen from "../../utils/fadeOnScreen";
import Builder from "./sections/builder/Builder";
import Estimating from "./sections/estimating/Estimating";

export default function Features() {
    const { fade } = useGlobalContext().animations;
    useEffect(() => FadeOnScreen.createObserver(), []);


    useEffect(() => {
        document.title = "features";
    }, []);

    return (
        <>
            <motion.main {...fade}>
                <div data-lazy-block>
                    <div className="circle" data-lazy="scale"></div>
                </div>
                <Builder />
                <Estimating />
            </motion.main>
            <Footer />
        </>
    );
}
