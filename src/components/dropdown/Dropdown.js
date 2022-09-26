import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Dropdown({ title, className, category, text }) {
    const [isShown, setIsShown] = useState(false);
    const [isDropping, setIsDropping] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (isDropping) setIsShown(!isShown);
    }, [isDropping]);

    useEffect(() => {
        if (isShown) window.addEventListener("click", () => setIsDropping(true), { once: true });
    }, [isShown]);

    return (
        <div className="dropdown" >
            <div
                className={`${className ? className : ""} dropdown-toggle ${!isShown ? "dropped" : ""}`}
                data-toggle="dropdown"
                onClick={() => setIsDropping(true)}
            >
                {title || "dropdown"}
            </div>
            <div
                className={`dropdown-menu  ${isDropping ? "dropping" : "drop"} ${isShown ? "show" : ""}`}
                onTransitionEnd={() => setIsDropping(false)}
                style={isShown && isDropping ? { opacity: 1, transform: "none" } : null}
            >
                <p className="dropdown-text" dangerouslySetInnerHTML={{ __html: text }}></p>
            </div>
        </div>
    );
}
