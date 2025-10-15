import React from 'react';

const UpcomingSection = () => {
    return (
        <section className={"w-full flex flex-col items-center text-white"}>
            <div className={"max-w-screen-xl w-full flex flex-col items-center px-4 xl:px-0 h-full"}>
                <div className={"w-full mb-8"}>
                    <h2 className={"font-bold text-2xl"}>
                        Upcoming hidden gems
                    </h2>
                </div>
                <div className={"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4"}>
                    {Array.from({length: 4}).map((_, index) => (
                        <div className={"flex flex-col gap-4"} key={index}>
                            <div className={"relative"}>
                                <img src={"/theweeknd2.jpg"}
                                     className={"aspect-square object-cover cursor-pointer"}/>
                                <div
                                    className='absolute before:content-[""] bottom-0 right-0 border-24 border-solid border-b-[#212121] border-r-[#212121] border-t-fuchsia-600 border-l-fuchsia-600 block w-0'/>
                            </div>
                            <div >
                                <h3 className={"text-white "}>I feel it Coming - Daft Punk</h3>
                                <p className={"text-neutral-500 text-sm "}>ft. The Weeknd</p>
                                <p className={"text-neutral-500 text-xs "}>Single</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UpcomingSection;