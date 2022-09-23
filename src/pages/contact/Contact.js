import React, { useEffect } from "react";
import { Footer } from "../../components";
import { motion } from "framer-motion";
import { useGlobalContext } from "../../context";
import FadeOnScreen from "../../utils/fadeOnScreen";

export default function Contact() {
    const { fade } = useGlobalContext().animations;
    useEffect(() => FadeOnScreen.createObserver(), []);
    return (
        <>
            <motion.main {...fade} className='contact-page'>
                <div data-lazy-block>
                    <div className="circle" data-lazy="scale"></div>
                </div>
                <section className="showcase">showcase</section>
            </motion.main>
            <Footer />
        </>
    );
}
