
import ChartListItem from "~/routes/artists/chart-list-item";

const ChartSection = () => {
    return (
        <section className={"w-full flex flex-col items-center"}>
            <div className={"max-w-screen-xl w-full flex flex-col items-center px-4 xl:px-0 h-full"}>
                {Array.from({length: 19}).map((_, index) => (
                   <ChartListItem index={index} key={index}/>
                ))}
            </div>
        </section>
    );
};

export default ChartSection;