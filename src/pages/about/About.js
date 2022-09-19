import React from "react";
import { Link } from "react-router-dom";
import { Header, Footer } from "../../components";
import localData from "../../localData";
import { motion } from "framer-motion";
import { useGlobalContext } from "../../context";

export default function About() {
    const { angleLeft } = localData.svgs;
    const { fade } = useGlobalContext().animations;

    return (
        <>
            {/* <Header /> */}
                
            <motion.main {...fade}>
                <section className="example">
                    <div className="container">
                        <h2 className="example-title">example</h2>
                        <p className="example-description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eius et consequatur eaque
                            recusandae ipsa quae harum, illo quidem cum quos ratione blanditiis iure sequi vero nam odit
                            dolor rerum? Quam itaque harum molestias explicabo suscipit quas voluptates maiores
                            mollitia.
                        </p>
                    </div>
                </section>
            </motion.main>
            <Footer />
        </>
    );
}
