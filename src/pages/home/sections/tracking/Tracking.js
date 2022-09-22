import React from "react";
import { TrackingCard } from "../../../../components";
import localData from "../../../../localData";

export default function Tracking() {
    const { phone1,phone2,phone3,phone4 } = localData.images;
    return (
        <section className="tracking">
            <div className="container">
                <TrackingCard
                    tracking={{
                        title: "client management",
                        description:
                            "Store all of your client information securely in one place, accessible from your mobile device and the web.",
                        image: phone1,
                    }}
                />
                <TrackingCard
                    tracking={{
                        title: "Create & Track projects from start to finish",
                        description:
                            "Store all of your project details securely in one place, accessible from your mobile device and the web.",
                        image: phone2,
                    }}
                />
                <TrackingCard
                    tracking={{
                        title: "Manage & Track Leads ",
                        description:
                            "Store all of your client information securely in one place, accessible from your mobile device and the web.",
                        image: phone3,
                    }}
                />
                <TrackingCard
                    tracking={{
                        title: "Track Change Orders + Expenses",
                        description:
                            "Store all of your project details securely in one place, accessible from your mobile device and the web.",
                        image: phone4,
                    }}
                />
            </div>
        </section>
    );
}
