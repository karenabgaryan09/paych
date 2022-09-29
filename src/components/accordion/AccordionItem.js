import React, { useState, useRef, useEffect } from "react";

export default function AccordionItem({ item, isShown, setActive, isCollapsing, setIsCollapsing, getHeight }) {
    const content = useRef(null);

    return (
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button
                    onClick={() => {
                        setActive(item.title !== isShown ? item.title : '' );
                        setIsCollapsing(true)
                    }}
                    className={`accordion-button ${isShown == item.title ? "collapsed" : ""}`}
                    type="button"
                    data-toggle="collapse"
                    data-target={`#${item.title}`}
                >
                    {item.button}
                </button>
            </h2>
            <div
                id={item.title}
                className={`accordion-collapse  ${isCollapsing ? "collapsing" : "collapse"}  ${
                    isShown == item.title ? "show" : ""
                } `}
                data-parent="#accordionExample"
                onTransitionEnd={() => setIsCollapsing(false)}
                ref={content}
                style={isCollapsing && isShown == item.title ? { height: getHeight(content.current) } : {}}
                
            >
                <div className="accordion-body" >
                    <p className="accordion-text" dangerouslySetInnerHTML={{__html: item.text}}></p>
                </div>
            </div>
        </div>
    );
}
