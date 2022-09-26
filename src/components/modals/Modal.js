import React, { useEffect } from "react";
import localData from "../../localData";

export default function Modal({ isModalShown, setIsModalShown, dialogClassName, callback = () => {} }) {
    const { close } = localData.svgs;

    useEffect(() => {
        const removeBodyScroll = (isModified) => {
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth + "px";
            const navbar = document.querySelector(".navbar");

            document.body.style.paddingRight = scrollbarWidth;
            document.body.style.overflow = "hidden";
            // navbar.style.borderRight = `${scrollbarWidth} solid transparent`;
        };

        const addBodyScroll = () => {
            const navbar = document.querySelector(".navbar");

            document.body.style.paddingRight = "";
            document.body.style.overflow = "";
            // if(navbar)navbar.style.borderRight = "";
        };
        isModalShown ? removeBodyScroll() : addBodyScroll();
    }, [isModalShown]);

    return (
        <div
            className={`modal fade ${isModalShown ? "show" : ""} `}
            id="exampleModal"
            tabIndex="-1"
            style={isModalShown ? { display: "block" } : {}}
            onClick={() => setIsModalShown(false)}
        >
            <div
                className={`modal-dialog ${dialogClassName ? dialogClassName : ""}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="modal-content">
                    {/* <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            Modal title
                        </h5>
                        <button type="button" className="btn-close" onClick={() => setIsModalShown(false)}>
                            {close}
                        </button>
                    </div>
                    <div className="modal-body">...</div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary me-2" onClick={() => setIsModalShown(false)}>
                            Close
                        </button>
                        <button type="button" className="btn btn-primary" onClick={() => callback()}>
                            open second modal
                        </button>
                    </div> */}
                      <div className="video">
                            <iframe
                           
                                src="https://www.youtube.com/embed/EpLX09EwhcY"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                </div>
            </div>
        </div>
    );
}
