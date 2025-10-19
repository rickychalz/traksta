import React from 'react';
import {Link} from "react-router";

const NewMusicSection = () => {
    return (
        <section className={"w-full flex flex-col items-center dark:text-white"}>
            <div className={"max-w-screen-xl w-full flex flex-col items-center px-4 xl:px-0 h-full space-y-8"}>
                <div className={"w-full"}>
                    <h2 className={"font-bold text-2xl md:text-4xl"}>
                        New Releases
                    </h2>
                </div>
                <div className={"flex items-start w-full justify-between gap-4 overflow-x-scroll no-scrollbar"}>
                    {Array.from({length: 4}).map((_, index) => (
                        <div className={"flex flex-col gap-4 shrink-0"} key={index}>
                            <div className={"relative"}>
                                <img src={"/theweeknd2.jpg"}
                                     className={"aspect-square w-56 lg:w-72 object-cover cursor-pointer"}/>
                                <div
                                    className='absolute before:content-[""] bottom-0 right-0 border-24 border-solid border-b-white border-r-white dark:border-b-[#212121] dark:border-r-[#212121] border-t-fuchsia-600 border-l-fuchsia-600 block w-0'/>
                            </div>
                            <div >
                                <h3 className={"dark:text-white "}>I feel it Coming - Daft Punk</h3>
                                <p className={"text-neutral-500 text-sm "}>ft. The Weeknd</p>
                                <p className={"text-neutral-500 text-xs "}>Single</p>
                            </div>
                        </div>
                    ))}
                </div>
                <Link to={"#"} className={"mt-8"} >
                    <button className={"flex items-center font-bold bg-fuchsia-600 text-white dark:text-[#121212] dark:bg-white py-2 px-4"}>
                        View All
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default NewMusicSection;