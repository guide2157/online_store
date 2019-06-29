import React from "react";
import Header from "./header";

export default class About extends React.Component {
    render() {
        return (
            <section className="section-about-us">
                <Header url={process.env.PUBLIC_URL + "/images/logo.png"}/>
                <div className="row">
                    <h2>About us</h2>
                    <p>Tane Inc has run business on marigold full system cut flowers. Control by experienced and professional persons more than 20 years. We are one of pioneers in marigold business group.
                        First time, 10 years ago until now… We hope that we will be a promoter in marigold seed to be like gold for the richness of the agriculturist. </p>

                </div>
            </section>

        );
    }
}