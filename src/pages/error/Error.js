import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../context";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Spinner } from "../../components";
import localData from "../../localData";
import { motion } from "framer-motion";

export default function Error() {
    const { angleLeft } = localData.svgs;
    const [data, setData] = useState({});

    const { error } = useGlobalContext().localData;
    const { fade } = useGlobalContext().animations;

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const { message, cover } = error[params?.["*"]] || error["not-found"];
        setData({ message, cover });
    }, []);

    if (!data || !Object.entries(data).length) return <Spinner />;
    return (
        <motion.main className="error-page" {...fade}>
            <section className="error">
                <div className="container">
                    <a onClick={() => navigate(-1)} className="btn btn-primary">
                        <span className="startIcon">{angleLeft}</span>
                        return to home page
                    </a>
                    <div className="wrapper">
                        <div className="error-img">
                            <img src={data.cover} alt={data.cover} />
                        </div>
                    </div>
                    <h2 className="error-title">{data.message}</h2>
                </div>
            </section>
        </motion.main>
    );
}
