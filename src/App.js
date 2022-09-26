import React, { useEffect } from "react";
import { Home, Features, Pricing, Contact, Error, Blogs, Blog } from "./pages";
import { Header, Footer } from "./components";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

export default function App() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <>
            <div id="top"></div>
            <Header />
            <AnimatePresence exitBeforeEnter>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="/features" element={<Features />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/blogs/:slug" element={<Blog />} />

                    <Route path="*" element={<Error />} />
                </Routes>
            </AnimatePresence>
        </>
    );
}
