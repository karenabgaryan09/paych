import React from "react";
import { Banner, Button, TrackingCard } from "../../../../components";
import localData from "../../../../localData";

export default function Estimating() {
    const { phone1, phone2, phone3, phone4,phone5 } = localData.images;
    return (
        <section className="estimating">
            <div className="container">
                <TrackingCard
                    tracking={{
                        title: "Accurate Estimating",
                        description: `Create & share estimates in just minutes with our easy-to-use mobile estimating tool. Packed with powerful features built for contractors including <b>Deposits, Markups, Contracts and Photos</b>.<br/><br/>
                            Construction estimating software makes it easy to build and send out customized estimates. You can create a cost catalog, have detailed line items visible to the customer and collect <b>digital signatures</b>. `,
                        image: phone1,
                        isReversed:false
                    }}
                />
                <TrackingCard
                    tracking={{
                        title: "Create & Track projects from start to finish",
                        description: `Store all of your project details securely in one place, accessible from your mobile device and the web. 
                            In our project planning software, you can document and share important information with your team, subcontractors and clients. Send notifications with updates, conveniently make notes.
                            <br/>
                            <br/>
                            -More efficient projects<br/>
                            -Easier to manage projects off the job site<br/>
                            -Easier to maintain timelines`,
                        image: phone2,
                        isReversed:true
                    }}
                />
                <TrackingCard
                    tracking={{
                        title: "Send professional invoices to your customers",
                        description: `Create & share invoices in just minutes with our easy-to-use mobile invoicing tool. Record payments, issue payment reminders and easily keep track of your monthly sales.
                        `,
                        image: phone3,
                        isReversed:false
                    }}
                />
            </div>
            {/* ========================================================================= */}
            <Banner />
            {/* ========================================================================= */}

            <div className="container reverse">
                <TrackingCard
                    tracking={{
                        title: "Stay organized and manage Clients",
                        description:
                            "Store, access, and export customer information from anywhere, at any time. Keeping track of customers and jobs just got that much easier.",
                        image: phone4,
                        isReversed:true
                    }}
                />
                <TrackingCard
                    tracking={{
                        title: "Make collecting payments the easiest, most efficient part of your business",
                        description: `We’ve made it incredibly simple to accept credit card payments from your clients. 
                            Simply issue your invoice, switch on Payments and get paid! 
                            You’ll cut cash flow delays, spend less time tracking down payments, and be able to collect down payments on-site.`,
                        image: phone5,
                        isReversed:false
                    }}
                />
                <TrackingCard
                    tracking={{
                        title: "Automate book keeping by syncing your Paych and QuickBooks Online accounts",
                        description: `Manage, organize, and automate your bookkeeping with our QuickBooks Online sync. Spend less time keeping records and more time delighting customers, all while keeping your books organized.`,
                        image: phone2,
                        isReversed:true
                    }}
                />
            </div>
        </section>
    );
}
