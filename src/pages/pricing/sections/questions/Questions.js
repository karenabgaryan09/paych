import React from "react";
import { Dropdown, Accordion } from "../../../../components";

export default function Questions() {
    return (
        <section className="questions">
            <div className="container">
                <h2 className="questions-title display-2">Frequntly Asked questions</h2>
                <div className="questions-content">
                    <div className="accordion-group" data-lazy-block>
                        {/* <Dropdown
                            title="How does the Free plan work?"
                            text={`
                 Once your account is approved, you can subscribe to a Free plan.
                 This plan lets you send up to 12,000 emails per month for free!
                 <br/><br/>
                 Simply go to the Plan and billing page and enter your organization’s
                 address and credit card information to complete your subscription.
                 The billing period starts right after you enter your credit card details.
                 `}
                        />
                        <Dropdown
                            title="How does the Free plan work?"
                            text={`
                 Once your account is approved, you can subscribe to a Free plan.
                 This plan lets you send up to 12,000 emails per month for free!
                 <br/><br/>
                 Simply go to the Plan and billing page and enter your organization’s
                 address and credit card information to complete your subscription.
                 The billing period starts right after you enter your credit card details.
                 `}
                        />
                        <Dropdown
                            title="How does the Free plan work?"
                            text={`
                 Once your account is approved, you can subscribe to a Free plan.
                 This plan lets you send up to 12,000 emails per month for free!
                 <br/><br/>
                 Simply go to the Plan and billing page and enter your organization’s
                 address and credit card information to complete your subscription.
                 The billing period starts right after you enter your credit card details.
                 `}
                        />
                        <Dropdown
                            title="Can I change my plan later?"
                            text={`
                 Once your account is approved, you can subscribe to a Free plan.
                 This plan lets you send up to 12,000 emails per month for free!
                 <br/><br/>
                 Simply go to the Plan and billing page and enter your organization’s
                 address and credit card information to complete your subscription.
                 The billing period starts right after you enter your credit card details.
                 `}
                        />
                        <Dropdown
                            title="What if I hit a limit on my free plan?"
                            text={`
                 Once your account is approved, you can subscribe to a Free plan.
                 This plan lets you send up to 12,000 emails per month for free!
                 <br/><br/>
                 Simply go to the Plan and billing page and enter your organization’s
                 address and credit card information to complete your subscription.
                 The billing period starts right after you enter your credit card details.
                 `}
                        /> */}

                        <Accordion
                            accordionItems={[
                                {
                                    button: "How does the Free plan work?",
                                    title: "collapseOne",
                                    text: `Once your account is approved, you can subscribe to a Free plan.
                                    This plan lets you send up to 12,000 emails per month for free!
                                    <br/><br/>
                                    Simply go to the Plan and billing page and enter your organization’s
                                    address and credit card information to complete your subscription.
                                    The billing period starts right after you enter your credit card details.`,
                                },
                                {
                                    button: "How does the Free plan work?",
                                    title: "collapseTwo",
                                    text: ` Once your account is approved, you can subscribe to a Free plan.
                                    This plan lets you send up to 12,000 emails per month for free!
                                    <br/><br/>
                                    Simply go to the Plan and billing page and enter your organization’s
                                    address and credit card information to complete your subscription.
                                    The billing period starts right after you enter your credit card details.`,
                                },
                                {
                                    button: "How does the Free plan work?",
                                    title: "collapseThree",
                                    text: ` Once your account is approved, you can subscribe to a Free plan.
                                    This plan lets you send up to 12,000 emails per month for free!
                                    <br/><br/>
                                    Simply go to the Plan and billing page and enter your organization’s
                                    address and credit card information to complete your subscription.
                                    The billing period starts right after you enter your credit card details.`,
                                },
                                {
                                    button: "Can I change my plan later?",
                                    title: "collapseFour",
                                    text: ` Once your account is approved, you can subscribe to a Free plan.
                                    This plan lets you send up to 12,000 emails per month for free!
                                    <br/><br/>
                                    Simply go to the Plan and billing page and enter your organization’s
                                    address and credit card information to complete your subscription.
                                    The billing period starts right after you enter your credit card details.`,
                                },
                                {
                                    button: "What if I hit a limit on my free plan?",
                                    title: "collapseFive",
                                    text: ` Once your account is approved, you can subscribe to a Free plan.
                                    This plan lets you send up to 12,000 emails per month for free!
                                    <br/><br/>
                                    Simply go to the Plan and billing page and enter your organization’s
                                    address and credit card information to complete your subscription.
                                    The billing period starts right after you enter your credit card details.`,
                                },
                            ]}
                        />
                    </div>
                    <hr className="divider" />
                    <div className="accordion-group" data-lazy-block>
                        {/* <Dropdown
                            title="What if I hit a limit on my free plan?"
                            text={`
                 Once your account is approved, you can subscribe to a Free plan.
                 This plan lets you send up to 12,000 emails per month for free!
                 <br/><br/>
                 Simply go to the Plan and billing page and enter your organization’s
                 address and credit card information to complete your subscription.
                 The billing period starts right after you enter your credit card details.
                 `}
                        />
                        <Dropdown
                            title="What if I decide to cancel?"
                            text={`
                 Once your account is approved, you can subscribe to a Free plan.
                 This plan lets you send up to 12,000 emails per month for free!
                 <br/><br/>
                 Simply go to the Plan and billing page and enter your organization’s
                 address and credit card information to complete your subscription.
                 The billing period starts right after you enter your credit card details.
                 `}
                        />
                        <Dropdown
                            title="How does the Premium plan work?"
                            text={`
                 Once your account is approved, you can subscribe to a Free plan.
                 This plan lets you send up to 12,000 emails per month for free!
                 <br/><br/>
                 Simply go to the Plan and billing page and enter your organization’s
                 address and credit card information to complete your subscription.
                 The billing period starts right after you enter your credit card details.
                 `}
                        />
                        <Dropdown
                            title="Why do you need my credit card details for the Free plan?"
                            text={`
                 Once your account is approved, you can subscribe to a Free plan.
                 This plan lets you send up to 12,000 emails per month for free!
                 <br/><br/>
                 Simply go to the Plan and billing page and enter your organization’s
                 address and credit card information to complete your subscription.
                 The billing period starts right after you enter your credit card details.
                 `}
                        />
                        <Dropdown
                            title="What if I hit a limit on my free plan?"
                            text={`
                 Once your account is approved, you can subscribe to a Free plan.
                 This plan lets you send up to 12,000 emails per month for free!
                 <br/><br/>
                 Simply go to the Plan and billing page and enter your organization’s
                 address and credit card information to complete your subscription.
                 The billing period starts right after you enter your credit card details.
                 `}s
                        /> */}

                        <Accordion
                            accordionItems={[
                                {
                                    button: "What if I hit a limit on my free plan?",
                                    title: "collapseOne",
                                    text: `Once your account is approved, you can subscribe to a Free plan.
                                    This plan lets you send up to 12,000 emails per month for free!
                                    <br/><br/>
                                    Simply go to the Plan and billing page and enter your organization’s
                                    address and credit card information to complete your subscription.
                                    The billing period starts right after you enter your credit card details.`,
                                },
                                {
                                    button: "What if I decide to cancel?",
                                    title: "collapseTwo",
                                    text: ` Once your account is approved, you can subscribe to a Free plan.
                                    This plan lets you send up to 12,000 emails per month for free!
                                    <br/><br/>
                                    Simply go to the Plan and billing page and enter your organization’s
                                    address and credit card information to complete your subscription.
                                    The billing period starts right after you enter your credit card details.`,
                                },
                                {
                                    button: "How does the Premium plan work?",
                                    title: "collapseThree",
                                    text: ` Once your account is approved, you can subscribe to a Free plan.
                                    This plan lets you send up to 12,000 emails per month for free!
                                    <br/><br/>
                                    Simply go to the Plan and billing page and enter your organization’s
                                    address and credit card information to complete your subscription.
                                    The billing period starts right after you enter your credit card details.`,
                                },
                                {
                                    button: "Why do you need my credit card details for the Free plan?",
                                    title: "collapseFour",
                                    text: ` Once your account is approved, you can subscribe to a Free plan.
                                    This plan lets you send up to 12,000 emails per month for free!
                                    <br/><br/>
                                    Simply go to the Plan and billing page and enter your organization’s
                                    address and credit card information to complete your subscription.
                                    The billing period starts right after you enter your credit card details.`,
                                },
                                {
                                    button: "What if I hit a limit on my free plan?",
                                    title: "collapseFive",
                                    text: ` Once your account is approved, you can subscribe to a Free plan.
                                    This plan lets you send up to 12,000 emails per month for free!
                                    <br/><br/>
                                    Simply go to the Plan and billing page and enter your organization’s
                                    address and credit card information to complete your subscription.
                                    The billing period starts right after you enter your credit card details.`,
                                },
                            ]}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
