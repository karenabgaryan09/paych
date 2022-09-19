import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useGlobalContext } from "../../context";

export default function Footer() {
    const { fade } = useGlobalContext().animations;
    return (
        <motion.footer {...fade} className="footer bg-dark">
            <div className="container">
                <h4>footer</h4>
                <Link to="#/" className="link link-secondary d-block">
                    external link default
                </Link>
                <Link to="#/" className="link link-primary d-block" underline="hover">
                    external link hover
                </Link>
                <Link to="#/" className="link link-success d-block" underline="always">
                    external link always
                </Link>
                <Link to="#/" className="link link-danger d-block" underline="none">
                    external link none
                </Link>
            </div>
        </motion.footer>
    );
}
