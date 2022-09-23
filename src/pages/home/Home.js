import React,{useEffect} from "react";
import { Footer, Banner } from "../../components";
import Showcase from "./sections/showcase/Showcase";
import About from "./sections/about/About";
import Features from "./sections/features/Features";
import Managment from "./sections/managment/Managment";
import Pricing from "./sections/pricing/Pricing";
import Tracking from "./sections/tracking/Tracking";
import News from "./sections/news/News";
import FadeOnScreen from "../../utils/fadeOnScreen";

import { motion } from "framer-motion";
import { useGlobalContext } from "../../context";

export default function Home() {
    const { fade } = useGlobalContext().animations;

    useEffect(() => FadeOnScreen.createObserver(), []); 

    return (
        <>
            <motion.main {...fade} className="home-page">
            <div data-lazy-block>
                <div className="circle home-circle" data-lazy='scale'></div>
            </div>
                <Showcase />
                <About />
                <Features />
                <Managment />
                <Pricing />
                <Banner />
                <Tracking />
                <News/>
            </motion.main>
            <Footer />
        </>
    );
}
