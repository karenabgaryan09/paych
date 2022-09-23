import React from "react";
import { BuilderCard, Button } from "../../../../components";
import localData from "../../../../localData";

export default function Builder() {
    const { calculator,track,invoices,client,leads,expenses,books } = localData.images;

    return (
        <section className="builder">
            <div className="container">
                <h1 className="builder-title display-1">All the features builders need, under one login.</h1>
                <p className="builder-subtitle display-8">
                    Estimate, Invoice, Collect Payments, and Manage Projects from Anywhere.
                </p>
                <Button className="btn btn-primary rounded-pill">get started now</Button>
            </div>
            <div className="wrapper">
                <div className="container">
                    <h2 className="builder-description">
                        Our construction management software helps with every step of the build – from the sales process and
                        project planning to financial tracking and client communication.
                    </h2>
                </div>
            </div>
            <div className="container">
                <div className="cards-group">
                    <BuilderCard builder={{ image: calculator, title: "Estimates" }} />
                    <BuilderCard builder={{ image: track, title: "Track Project" }} />
                    <BuilderCard builder={{ image: invoices, title: "Invoices" }} />
                    <BuilderCard builder={{ image: client, title: "Client Managment" }} />
                    <BuilderCard builder={{ image: leads, title: "Manage + Track Leadsates" }} />
                    <BuilderCard builder={{ image: expenses, title: "Manage Expenses" }} />
                    <BuilderCard builder={{ image: books, title: "Quick Books Sync" }} />
                </div>
            </div>
        </section>
    );
}
