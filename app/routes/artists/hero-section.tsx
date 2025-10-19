import FoldedBadge from "~/components/folded-badge";
import {ChevronUp} from "lucide-react";

const HeroSection = () => {
    return (
        <section className={"pb-12 md:pb-24"}>

            <div className={"relative flex flex-col items-center xl:h-115"}>
                <div className={"xl:absolute relative w-full"}>
                    <img src={"/theweeknd.jpg"} className={"h-50 md:h-80 w-full object-cover object-[0%_30%]"}/>
                    <div
                        className='absolute before:content-[""] bottom-0 right-0 border-16 border-solid border-b-white dark:border-b-[#212121] border-r-white dark:border-r-[#212121] border-t-fuchsia-600 border-l-fuchsia-600 block w-0'/>
                </div>


                <div className={"max-w-screen-xl w-full bg-transparent h-full z-30 px-4 xl:px-0"}>
                    <div className={"w-full bg-transparent hidden xl:grid grid-cols-5 h-full"}>
                        {/* First Column - Stack from bottom to top */}
                        <div className={"h-full grid grid-rows-3 "}>
                            <div className={"w-full h-full  row-start-1 flex flex-col justify-center text-white"}>
                                <h1 className={"font-bold text-3xl"}>Top 20 Artists</h1>
                                <p className={"italic font-light"}>the week of June 30, 2020</p>
                            </div>
                            <div className={"relative w-full mask-intersect h-full row-start-2 row-span-2"}>
                                <img src={"/theweeknd2.jpg"}
                                     className={"aspect-square h-80 w-80 object-cover cursor-pointer"}/>
                                <FoldedBadge textClassName={"font-bold text-4xl"} text={"1"}
                                             className={"absolute top-0 left-4"}/>
                                <div
                                    className='absolute before:content-[""] bottom-0 right-0 border-24 border-solid border-b-white dark:border-b-[#212121] border-r-white  dark:border-r-[#212121] border-t-fuchsia-600 border-l-fuchsia-600 block w-0'/>
                            </div>
                        </div>

                        {/* Second Column - Stack from bottom to top */}
                        <div className={"h-full grid grid-rows-3 col-span-2 justify-center"}>
                            <div
                                className={"w-full flex flex-col gap-4 justify-center h-full  text-neutral-500 row-start-3"}>
                                <div className={"flex gap-2 items-center"}>
                                    <div>genres:</div>
                                    <div>R&B, Pop, Alternative R&B</div>
                                </div>
                                <div className={"flex gap-2 items-center"}>
                                    <div>label:</div>
                                    <div>XO | Republic</div>
                                </div>
                            </div>
                            <div className={"w-full h-full row-start-2 flex flex-col justify-end text-white "}>
                                <h2 className={"font-bold text-4xl pb-4"}>The Weeknd</h2>
                            </div>
                        </div>

                        {/* Third Column */}
                        <div className={"h-full grid grid-rows-3  text-neutral-500 col-span-2"}>
                            <div className={"row-start-3 flex flex-col justify-center"}>
                                <div className={"flex gap-8 items-center "}>
                                    <div className={"flex flex-col items-center gap-2"}>
                                        <div className={"text-4xl flex items-center font-bold text-[#121212] dark:text-white  "}>
                                            <span>1</span><span><ChevronUp className={"text-green-600"}/></span></div>
                                        <div className={"text-sm text-center"}>this week</div>
                                    </div>
                                    <div className={"h-10 w-[1px] bg-neutral-500"}/>
                                    <div className={"flex flex-col items-center gap-2"}>
                                        <div className={"text-4xl font-bold text-[#121212] dark:text-white  "}>3</div>
                                        <div className={"text-sm text-center"}>last week</div>
                                    </div>
                                    <div className={"h-10 w-[1px] bg-neutral-500"}/>
                                    <div className={"flex flex-col items-center gap-2"}>
                                        <div className={"text-4xl font-bold text-[#121212] dark:text-white  "}>258</div>
                                        <div className={"text-sm text-center "}>weeks on chart</div>
                                    </div>
                                    <div className={"h-10 w-[1px] bg-neutral-500"}/>
                                    <div className={"flex flex-col items-center gap-2"}>
                                        <div className={"text-4xl font-bold text-[#121212] dark:text-white  "}>1</div>
                                        <div className={"text-sm text-center"}>peak</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"xl:hidden flex items-center justify-between w-full px-4 text-[#121212] dark:text-white py-8"}>
                    <div className={"flex items-center gap-8 w-full"}>
                        <div>
                            <FoldedBadge textClassName={"font-bold text-4xl"} text={"1"}/>
                        </div>
                        <div className={"flex flex-col md:gap-2 w-full"}>
                            <h2 className={"font-bold text-2xl md:text-4xl"}>The Weeknd</h2>
                            <div
                                className={"w-full text-xs text-neutral-500 md:text-sm flex justify-between items-center"}>
                                <div>R&B, Pop, Alternative R&B</div>
                                <div>XO | Republic</div>
                            </div>

                        </div>
                    </div>
                </div>
                <div
                    className={"xl:hidden flex items-center justify-between w-full px-4 md:px-8 text-white bg-fuchsia-600 py-8"}>
                    <div className={"flex gap-4 md:gap-8 items-center w-full justify-between "}>
                        <div className={"flex flex-col items-center gap-2"}>
                            <div className={"text-2xl md:text-4xl flex items-center font-bold text-white "}>
                                <span>1</span><span><ChevronUp className={"size-4 md:size-auto text-green-600"}/></span>
                            </div>
                            <div className={"text-xs md:text-sm text-center"}>this week</div>
                        </div>
                        <div className={"h-10 w-[1px] bg-white"}/>
                        <div className={"flex flex-col items-center gap-2"}>
                            <div className={"text-2xl md:text-4xl font-bold text-white "}>3</div>
                            <div className={"text-xs md:text-sm text-center"}>last week</div>
                        </div>
                        <div className={"h-10 w-[1px] bg-white"}/>
                        <div className={"flex flex-col items-center gap-2"}>
                            <div className={"text-2xl md:text-4xl font-bold text-white "}>258</div>
                            <div className={"text-xs md:text-sm text-center "}>weeks on chart</div>
                        </div>
                        <div className={"h-10 w-[1px] bg-white"}/>
                        <div className={"flex flex-col items-center gap-2"}>
                            <div className={"text-2xl md:text-4xl font-bold text-white "}>1</div>
                            <div className={"text-xs md:text-sm text-center"}>peak</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;