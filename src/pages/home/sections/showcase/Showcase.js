import React from "react";
import { Button, Modal } from "../../../../components";
import localData from "../../../../localData";
import { useGlobalContext } from "../../../../context";

export default function Showcase() {
    const { play } = localData.svgs;
    const { isModalShown, setIsModalShown } = useGlobalContext();

    const callback = () => {
        setIsModalShown(false);
    };

    return (
        <section className="showcase" data-lazy-block>
            <div className="container ">
                <div className="showcase-content">
                    <div className="showcase-info">
                        <h1 className="showcase-title display-1">
                            The Leader of <span className="text-primary">Construction Management</span> Software
                        </h1>
                        <p className="showcase-description display-8">
                            All-in-one construction software for home building and remodeling teams ready to take their
                            business to the next level.
                        </p>
                        <Button className="btn btn-primary rounded-pill">get started now</Button>
                    </div>
                    <div className="showcase-cover">
                        <div className="wrapper video" data-lazy="fade-left" onClick={() => setIsModalShown(true)}>
                            <Button className="play-btn">{play}</Button>
                        </div>
                    </div>
                    <Modal
                        isModalShown={isModalShown}
                        setIsModalShown={setIsModalShown}
                        // dialogClassName="modal-dialog-scrollable"
                        dialogClassName="modal-dialog-centered modal-xl"
                        // dialogClassName="modal-lg"
                        callback={callback}
                    />
                </div>
            </div>
        </section>
    );
}
