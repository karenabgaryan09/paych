import React from "react";
import { PricingCard } from "../../../../components";

export default function Pricing() {
    return (
        <section className="pricing">
            <div className="container">
                <h2 className="pricing-title display-2">Pricing & Plans</h2>
                <h3 className="pricing-subtitle display-6">
                    Get organized with one tool that manages all your projects. Whatever plan you choose, it includes
                    everything you need to build uninterrupted.
                </h3>

                <div className="pricing-content" data-lazy-block>
                    <PricingCard
                        pricing={{
                            title: "personal",
                            description: "perfect plan for starters",
                            price: "80",
                            plan: [
                                {isIncluded: true, text: "Everything in plan"},
                                {isIncluded: true, text: "100 Contracts"},
                                {isIncluded: true, text: "Share with 8 team members"},
                                {isIncluded: true, text: "Sharing permission"},
                                {isIncluded: true, text: "Sync across devices"},
                                {isIncluded: true, text: "Admin Tools"},
                                {isIncluded: true, text: "Phone support"},
                            ],
                        }}
                    />
                    <PricingCard
                        pricing={{
                            title: "professional",
                            description: "for users who want to do more",
                            price: "160",
                            plan: [
                                {isIncluded: true, text: "Everything in plan"},
                                {isIncluded: true, text: "100 Contracts"},
                                {isIncluded: true, text: "Share with 8 team members"},
                                {isIncluded: true, text: "Sharing permission"},
                                {isIncluded: true, text: "Sync across devices"},
                                {isIncluded: true, text: "Admin Tools"},
                                {isIncluded: true, text: "Phone support"},
                            ],
                        }}
                    />
                    <PricingCard
                        pricing={{
                            title: "team",
                            description: "your entire team at 1 one place",
                            price: "220",
                            plan: [
                                {isIncluded: true, text: "Everything in plan"},
                                {isIncluded: true, text: "100 Contracts"},
                                {isIncluded: true, text: "Share with 8 team members"},
                                {isIncluded: true, text: "Sharing permission"},
                                {isIncluded: true, text: "Sync across devices"},
                                {isIncluded: true, text: "Admin Tools"},
                                {isIncluded: true, text: "Phone support"},
                            ],
                        }}
                    />
                </div>
            </div>
        </section>
    );
}
