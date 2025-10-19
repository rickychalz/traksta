import React from 'react';
import HeroSection from "~/routes/home/hero-section";
import ChartSection from "~/routes/home/chart-section";
import NewMusicSection from "~/routes/home/new-music-section";
import UpcomingSection from "~/routes/home/upcoming-section";
import ChartNav from "~/routes/charts/chart-nav";

const Home = () => {
    return (
        <main className={"space-y-8 xl:space-y-16"}>
            <HeroSection/>
            <ChartSection/>
            <NewMusicSection/>
            {/*<UpcomingSection/>*/}
        </main>
    );
};

export default Home;