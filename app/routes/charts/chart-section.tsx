import {ChevronUp} from "lucide-react";
import FoldedBadge from "~/components/folded-badge";
import {AltArrowDown, MenuDots} from "@solar-icons/react/ssr";

const ChartSection = () => {
    return (
        <section className={"w-full flex flex-col items-center"}>
            <div className={"max-w-screen-xl w-full flex flex-col items-center px-4 xl:px-0 h-full"}>
                {Array.from({length: 20}).map((_, index) => (
                    <div key={index}
                         className={"bg-neutral-800 p-4 w-full border-b border-neutral-700/50 flex justify-center"}>
                        <div className={"grid grid-cols-5 md:grid-cols-9 items-center w-full"}>
                            <div className={"hidden md:flex justify-center font-semibold text-white text-2xl"}>
                                <FoldedBadge className={"text-white"} text={`${index + 2}`}/></div>
                            <div className={"md:hidden flex-col items-center gap-2"}>
                                <div className={"text-lg flex items-center font-bold text-white"}>
                                    <span>{index + 2}</span><span><ChevronUp
                                    className={"size-4 md:size-auto text-green-600"}/></span></div>
                            </div>
                            <div className={"col-span-3 flex items-center md:justify-center xl:justify-start gap-4"}>
                                <div className={"relative"}>
                                    <img src={"/theweeknd2.jpg"}
                                         className={"aspect-square h-16 w-16 object-cover"}/>
                                    <div
                                        className='absolute before:content-[""] bottom-0 right-0 border-6 border-solid border-b-neutral-800 border-r-neutral-800 border-t-fuchsia-600 border-l-fuchsia-600 block w-0'/>
                                </div>
                                <div className={"flex flex-col"}>
                                    <span className={"text-lg font-bold text-white"}>The Weeknd</span>
                                    <span className={"text-xs text-neutral-500"}>labels</span>
                                </div>
                            </div>
                            <div className={"hidden md:flex flex-col items-center gap-2"}>
                                <div className={"text-lg flex items-center font-bold text-white "}>
                                    <span>1</span><span><ChevronUp className={"text-green-600"}/></span></div>
                                <div className={"text-xs text-center text-neutral-500"}>this week</div>
                            </div>
                            <div className={"hidden md:flex flex-col items-center gap-2"}>
                                <div className={"text-lg font-bold text-white "}>3</div>
                                <div className={"text-xs text-center text-neutral-500"}>last week</div>
                            </div>
                            <div className={"hidden md:flex flex-col items-center gap-2"}>
                                <div className={"text-lg font-bold text-white "}>258</div>
                                <div className={"text-xs text-center text-neutral-500 "}>weeks on chart</div>
                            </div>
                            <div className={"hidden md:flex flex-col items-center gap-2"}>
                                <div className={"text-lg font-bold text-white "}>1</div>
                                <div className={"text-xs text-center text-neutral-500"}>peak</div>
                            </div>
                            <div className={"md:flex w-full justify-center text-white hidden "}><MenuDots/></div>
                            <div className={"md:hidden w-full justify-end text-white flex "}><AltArrowDown/></div>
                        </div>
                    </div>))}
            </div>
        </section>
    );
};

export default ChartSection;