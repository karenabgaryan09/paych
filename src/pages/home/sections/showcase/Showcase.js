import React from "react";
import {Button} from '../../../../components'
import localData from "../../../../localData";

export default function Showcase() {
    const { play } = localData.svgs;
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
                        <div className="wrapper video" data-lazy='rotate'>
                            <Button className="play-btn">{play}</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
