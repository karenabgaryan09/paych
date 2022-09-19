import React from "react";
import {  Footer,Button } from "../../components";
import localData from "../../localData";

import { motion } from "framer-motion";
import { useGlobalContext } from "../../context";

export default function Home() {
    const { play } = localData.svgs;
    const { fade } = useGlobalContext().animations;

    return (
        <>
            {/* <Header title="home" /> */}
            <motion.main {...fade} className="home-page">
                <section className="showcase">
                    <div className="circle"></div>
                    <div className="container ">
                        <div className="showcase-content">
                            <div className="showcase-info">
                                <h1 className="showcase-title display-1">
                                    The Leader of <span className="text-primary">Construction Management</span> Software
                                </h1>
                                <p className="showcase-description">
                                    All-in-one construction software for home building and remodeling teams ready to
                                    take their business to the next level.
                                </p>
                                <Button className="btn btn-primary rounded-pill">get started now</Button>
                            </div>
                             <div className="showcase-cover">
                                 <div className="wrapper">
                                    <Button className="play-btn">
                                        {play}
                                    </Button>
                                 </div>
                             </div>
                        </div>
                    </div>
                </section>
            </motion.main>
            <Footer />
        </>
    );
}
