import React, { useState, useEffect } from "react";
import AccordionItem from "./AccordionItem";

export default function Accordion({accordionItems}) {
    const [active,setActive] = useState('')
    const [isShown, setIsShown] = useState("");
    const [isCollapsing, setIsCollapsing] = useState(false);

    // const [accordionItems, setAccordionItems] = useState([
    //     {
    //         button: "Accordion Item #1",
    //         title: "collapseOne",
    //         text: `  <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse
    //         plugin adds the appropriate classes that we use to style each element. These classes control the
    //         overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of
    //         this with custom CSS or overriding our default variables. It's also worth noting that just about any
    //         HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.`,
    //     },
    //     {
    //         button: "Accordion Item #2",
    //         title: "collapseTwo",
    //         text: `  <strong>This is the first item's accordion body.</strong> It is shown by default, until the
    //         collapse plugin adds the appropriate classes that we use to style each element. These classes
    //         control the overall appearance, as well as the showing and hiding via CSS transitions. You can
    //         modify any of this with custom CSS or overriding our default variables. It's also worth noting
    //         that just about any HTML can go within the <code>.accordion-body</code>, though the transition
    //         does limit overflow.`,
    //     },
    //     {
    //         button: "Accordion Item #3",
    //         title: "collapseThree",
    //         text: ` <strong>This is the first item's accordion body.</strong> It is shown by default, until the
    //         collapse plugin adds the appropriate classes that we use to style each element. These classes
    //         control the overall appearance, as well as the showing and hiding via CSS transitions. You can
    //         modify any of this with custom CSS or overriding our default variables. It's also worth noting
    //         that just about any HTML can go within the <code>.accordion-body</code>, though the transition
    //         does limit overflow.`,
    //     },
    // ]);

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
