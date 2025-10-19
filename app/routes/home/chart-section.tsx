import {Link} from "react-router";
import ChartListItem from "~/routes/home/chart-list-item";

const ChartSection = () => {
    return (
        <section className={"w-full flex flex-col items-center text-white"}>
            <div className={"max-w-screen-xl w-full flex space-y-8 flex-col items-center px-4 xl:px-0 h-full"}>
                <div className={"w-full text-[#121212] dark:text-white flex flex-col gap-2"}>
                    <div>
                        <h2 className={"text-center md:text-left font-bold text-2xl md:text-4xl"}>
                            Top Trending Music This Week
                        </h2>
                    </div>
                    <div className={"text-center lg:text-left"}>
                        <p className={"lg:text-lg text-neutral-500 max-w-sm"}>
                            The week of 30<sup>th</sup> June 2025.
                        </p>
                    </div>
                </div>
                <div className={"w-full"}>
                    {Array.from({length: 10}).map((_, index) => (
                        <ChartListItem key={index} index={index}/>
                    ))}
                </div>
                <Link to={"#"} className={"mt-8"}>
                    <button
                        className={"flex items-center font-bold bg-fuchsia-600 text-white dark:text-[#121212] dark:bg-white py-2 px-4"}>
                        View All
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default ChartSection;