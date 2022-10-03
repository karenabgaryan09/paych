import React, { useState, useEffect } from "react";
import AccordionItem from "./AccordionItem";

export default function Accordion({accordionItems}) {
    const [active,setActive] = useState('')
    const [isShown, setIsShown] = useState("");
    const [isCollapsing, setIsCollapsing] = useState(false);

    useEffect(()=>{
        if (isCollapsing) setIsShown(active);
    },[isCollapsing])

    const getHeight = (element) => {
        let computedHeight = null;
        [...element.children].forEach((each) => (computedHeight += getAbsoluteHeight(each)));
        return computedHeight + "px";
    };

    const getAbsoluteHeight = (el) => {
        el = typeof el === "string" ? document.querySelector(el) : el;

        let styles = window.getComputedStyle(el);
        let margin = parseFloat(styles["marginTop"]) + parseFloat(styles["marginBottom"]);
        let border = parseFloat(styles["borderTop"]) + parseFloat(styles["borderBottom"]);

        return Math.ceil(el.offsetHeight + margin + border);
    };
    return (
        <div className="accordion" id="accordionExample" >
            {accordionItems.map((item, index) => (
                <AccordionItem
                    key={index}
                    item={item}
                    {...{ isShown, setActive, isCollapsing, setIsCollapsing, getHeight }}
                />
            ))}
        </div>
    );
}
