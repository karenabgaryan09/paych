import React, { useEffect, useRef } from "react";
import localData from "../../localData";

export default function Modal({ isModalShown, setIsModalShown, dialogClassName, callback = () => {} }) {
    const { close } = localData.svgs;
    const video = useRef(null);
    useEffect(() => {
        const removeBodyScroll = (isModified) => {
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth + "px";
            const navbar = document.querySelector(".navbar");

            document.querySelector("html").style.paddingRight = scrollbarWidth;
            document.querySelector("html").style.overflow = "hidden";
            // navbar.style.borderRight = `${scrollbarWidth} solid transparent`;
        };

        const addBodyScroll = () => {
            const navbar = document.querySelector(".navbar");

            document.querySelector("html").style.paddingRight = "";
            document.querySelector("html").style.overflow = "";
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
            onClick={() => {
                setIsModalShown(false);
                video.current.pause();
            }}
        >
            <div
                className={`modal-dialog ${dialogClassName ? dialogClassName : ""}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="modal-content">
                    <button
                        type="button"
                        className="btn-close"
                        onClick={() => {
                            setIsModalShown(false);
                            video.current.pause();
                        }}
                    >
                        {close}
                    </button>
                    {/* <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            Modal title
                        </h5>
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
                        {/* <iframe
                            ref={video}
                            src="https://www.youtube.com/embed/EpLX09EwhcY"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe> */}
                        <video ref={video} src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" controls></video>
                    </div>
                </div>
            </div>
        </div>
    );
}
