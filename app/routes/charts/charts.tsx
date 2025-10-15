import React from 'react';
import HeroSection from "~/routes/charts/hero-section";
import ChartSection from "~/routes/charts/chart-section";

const Charts = () => {
    return (
        <main className={"space-y-8 xl:space-y-24"}>
            <HeroSection/>
            <ChartSection/>
        </main>
    );
};

export default Charts;