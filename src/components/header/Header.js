import React from "react";
import { Navbar } from "../";
import { useGlobalContext } from "../../context";

export default function Header() {
    const { fade } = useGlobalContext().animations;
    return (
        <header {...fade} className="hero">
            <Navbar />
        </header>
    );
}
