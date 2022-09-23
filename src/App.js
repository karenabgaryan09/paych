import React from "react";
import { Home, Features,Plan, Error } from "./pages";
import { Header } from "./components";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

export default function App() {
    const location = useLocation();
    return (
        <>
            <div id="top"></div>
            {/* <div className={`circle ${location.pathname === '/' ? 'home-circle' : ''}`}></div> */}
            <Header />
            <AnimatePresence exitBeforeEnter>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="/features" element={<Features />} />
                    <Route path="/plan" element={<Plan />} />

                    <Route path="*" element={<Error />} />
                </Routes>
            </AnimatePresence>
        </>
    );
}
