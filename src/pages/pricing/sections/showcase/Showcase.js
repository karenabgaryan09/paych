import React from "react";
import { Button, PricingCard } from "../../../../components";

export default function Showcase() {
    return (
        <section className="showcase">
            <div className="container">
                <h1 className="showcase-title display-1">Pick your plan</h1>
                <p className="showcase-subtitle display-8">
                    Discover the most robust and complete construction software for home builders, remodelers and
                    specialty contractors. It’s built to scale – so you can upgrade as you grow.
                </p>
                <Button className="btn btn-primary rounded-pill showcase-btn">get started now</Button>

                <div className="card-group" data-lazy-block>
                    <PricingCard
                        pricing={{
                            title: "personal",
                            description: "perfect plan for starters",
                            price: "80",
                            plan: [
                                { isIncluded: true, text: "Unlimited Estimates, Invoices, and Clients" },
                                { isIncluded: true, text: "Lead Management" },
                                { isIncluded: true, text: "Document & Photo storage" },
                                { isIncluded: true, text: "Change Orders" },
                                { isIncluded: true, text: "Work Orders" },
                                { isIncluded: true, text: "Change Order" },
                                { isIncluded: true, text: "Bills" },
                                { isIncluded: true, text: "Surveys" },
                                { isIncluded: true, text: "Accept Online Payments" },
                                { isIncluded: true, text: "Deposits & Payments Schedules" },
                                { isIncluded: false, text: "Sync with QuickBooks Online" },
                                { isIncluded: false, text: "License and Insurance" },
                                { isIncluded: false, text: "Sharing permission" },
                                { isIncluded: false, text: "Admin Tools" },
                                { isIncluded: false, text: "Sync across devices" },
                                { isIncluded: false, text: "Notifications" },
                                { isIncluded: false, text: "Branding" },
                            ],
                        }}
                    />
                    <PricingCard
                        pricing={{
                            title: "professional",
                            description: "for users who want to do more",
                            price: "160",
                            plan: [
                                { isIncluded: true, text: "Unlimited Estimates, Invoices, and Clients" },
                                { isIncluded: true, text: "Lead Management" },
                                { isIncluded: true, text: "Document & Photo storage" },
                                { isIncluded: true, text: "Change Orders" },
                                { isIncluded: true, text: "Work Orders" },
                                { isIncluded: true, text: "Change Order" },
                                { isIncluded: true, text: "Bills" },
                                { isIncluded: true, text: "Surveys" },
                                { isIncluded: true, text: "Accept Online Payments" },
                                { isIncluded: true, text: "Deposits & Payments Schedules" },
                                { isIncluded: true, text: "Sync with QuickBooks Online" },
                                { isIncluded: true, text: "License and Insurance" },
                                { isIncluded: true, text: "Sharing permission" },
                                { isIncluded: true, text: "Admin Tools" },
                                { isIncluded: false, text: "Sync across devices" },
                                { isIncluded: false, text: "Notifications" },
                                { isIncluded: false, text: "Branding" },
                            ],
                        }}
                    />
                    <PricingCard
                        pricing={{
                            title: "team",
                            description: "your entire team at 1 one place",
                            price: "220",
                            plan: [
                                { isIncluded: true, text: "Unlimited Estimates, Invoices, and Clients" },
                                { isIncluded: true, text: "Lead Management" },
                                { isIncluded: true, text: "Document & Photo storage" },
                                { isIncluded: true, text: "Change Orders" },
                                { isIncluded: true, text: "Work Orders" },
                                { isIncluded: true, text: "Change Order" },
                                { isIncluded: true, text: "Bills" },
                                { isIncluded: true, text: "Surveys" },
                                { isIncluded: true, text: "Accept Online Payments" },
                                { isIncluded: true, text: "Deposits & Payments Schedules" },
                                { isIncluded: true, text: "Sync with QuickBooks Online" },
                                { isIncluded: true, text: "License and Insurance" },
                                { isIncluded: true, text: "Sharing permission" },
                                { isIncluded: true, text: "Admin Tools" },
                                { isIncluded: true, text: "Sync across devices" },
                                { isIncluded: true, text: "Notifications" },
                                { isIncluded: true, text: "Branding" },
                            ],
                        }}
                    />
                </div>
            </div>
        </section>
    );
}
