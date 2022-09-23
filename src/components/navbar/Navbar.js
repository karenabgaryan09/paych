import React, { useEffect, useRef, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import localData from "../../localData";
import { Button } from "../../components";

export default function Navbar() {
    const location = useLocation();

    const { togglerIcon, telegram, logo } = localData.svgs;

    // COLLAPSE
    let navbarCollapse = useRef();
    const [isCollapsing, setIsCollapsing] = useState(false);
    const [isShown, setIsShown] = useState(false);

    useEffect(() => {
        if (!isCollapsing) return;
        setIsShown(!isShown);
    }, [isCollapsing]);

    const getHeight = () => {
        let computedHeight = null;
        [...navbarCollapse.current.children].forEach((each) => (computedHeight += getAbsoluteHeight(each)));
        return computedHeight + "px";
    };

    const getAbsoluteHeight = (el) => {
        el = typeof el === "string" ? document.querySelector(el) : el;

        let styles = window.getComputedStyle(el);
        let margin = parseFloat(styles["marginTop"]) + parseFloat(styles["marginBottom"]);
        let border = parseFloat(styles["borderTop"]) + parseFloat(styles["borderBottom"]);

        return Math.ceil(el.offsetHeight + margin + border);
    };
    //

    useEffect(() => {
    
        (function () {
            const target = document.querySelector(".navbar .target");
            const links = document.querySelectorAll(".navbar li a");
            const nav = document.querySelector(".navbar-nav");
            function mouseenterFunc() {
                if (!this.parentNode.classList.contains("active")) {
                    for (let i = 0; i < links.length; i++) {
                        if (links[i].parentNode.classList.contains("active")) {
                            links[i].parentNode.classList.remove("active");
                        }
                        links[i].style.opacity = "0.3";
                    }

                    this.parentNode.classList.add("active");
                    this.style.opacity = "1";

                    const width = this.getBoundingClientRect().width;
                    const height = this.getBoundingClientRect().height;
                    const left = this.getBoundingClientRect().left + window.pageXOffset;
                    const top = this.getBoundingClientRect().top + window.pageYOffset;

                    target.style.display = "block";
                    target.style.width = `${width}px`;
                    target.style.height = `${height}px`;
                    target.style.left = `${left}px`;
                    target.style.top = `${top}px`;
                    target.style.borderColor = this.classList.contains("active") ? "rgba(155, 57, 44, 1)" : "#000";
                    target.style.transform = "none";
                }
            }

            for (let i = 0; i < links.length; i++) {
                links[i].addEventListener("mouseenter", mouseenterFunc);
            }

            function resizeFunc() {
                const active = document.querySelector(".navbar li.active");

                if (active) {
                    const left = active.getBoundingClientRect().left + window.pageXOffset;
                    const top = active.getBoundingClientRect().top + window.pageYOffset;

                    target.style.left = `${left}px`;
                    target.style.top = `${top}px`;
                }
            }

            function resetFunc() {
                if (!links) return;
                target.style.display = "none";
                links.forEach((link) => {
                    link.style.opacity = "1";
                    if (!link.parentElement.classList.contains("active")) return;
                    link.parentElement.classList.remove("active");
                });
            }

            window.addEventListener("resize", resizeFunc);
            // document.addEventListener("click", resetFunc);
            nav.addEventListener("mouseleave", resetFunc);
        })();
    }, []);

    useEffect(()=>{
        const target = document.querySelector('.navbar .target')
        target.style.borderColor ="rgba(155, 57, 44, 1)" 
    },[location])

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    {logo}
                </Link>
                <Button className="btn btn-primary rounded-pill trial-btn">get free trial</Button>

                {/* <button
                    className={`navbar-toggler ${isShown ? "collapsed" : ""}`}
                    type="button"
                    onClick={() => setIsCollapsing(true)}
                >
                    <span className="navbar-toggler-icon">{togglerIcon}</span>
                </button> */}
                <div className="navbar-toggler" onClick={() => setIsCollapsing(true)}>
                    <div className={` header_burger  ${isShown ? "active" : ""}`}>
                        <span></span>
                    </div>
                </div>
                <div
                    ref={navbarCollapse}
                    className={`navbar-collapse ${isCollapsing ? "collapsing" : "collapse"} ${isShown ? "show" : ""}`}
                    id="navbarSupportedContent"
                    onTransitionEnd={() => setIsCollapsing(false)}
                    style={isShown && isCollapsing ? { height: getHeight() } : {}}
                >
                    <ul className="navbar-nav me-auto">
                        <span className="target"></span>
                        <li className="nav-item">
                            <Link
                                to="/"
                                className={`nav-link ${"/" === location.pathname ? "active" : ""}`}
                                aria-current="page"
                            >
                                home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/about"
                                className={`nav-link ${"/about" === location.pathname ? "active" : ""}`}
                                aria-current="page"
                            >
                                about us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/features"
                                className={`nav-link ${"/features" === location.pathname ? "active" : ""}`}
                                aria-current="page"
                            >
                                features
                            </Link>
                        </li>
                       
                        <li className="nav-item">
                            <Link
                                to="/pricing"
                                className={`nav-link ${"/pricing" === location.pathname ? "active" : ""}`}
                                aria-current="page"
                            >
                                pricing
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/blogs"
                                className={`nav-link ${"/blogs" === location.pathname ? "active" : ""}`}
                                aria-current="page"
                            >
                                blogs
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/contact"
                                className={`nav-link ${"/contact" === location.pathname ? "active" : ""}`}
                                aria-current="page"
                            >
                                contact us
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
