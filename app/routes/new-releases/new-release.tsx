import React from 'react';
import {AppleMusicLogo} from "~/components/icons/apple-music-logo";
import {AudiomackLogo} from "~/components/icons/audiomack-logo";
import {SpotifyLogo} from "~/components/icons/spotify-logo";
import {BoomplayLogo} from "~/components/icons/boomplay-logo";
import {YoutubeLogo} from "~/components/icons/youtube-logo";

const NewRelease = () => {
    return (
        <section className={"w-full flex flex-col items-center text-[#121212] dark:text-white"}>
            <div className={"max-w-screen-xl w-full flex flex-col items-center px-4 xl:px-0 h-full py-8"}>
                <div className={"w-full text-[#121212] dark:text-white flex flex-col gap-2 mb-8"}>
                    <div>
                        <h2 className={"text-center md:text-left font-bold text-2xl md:text-4xl"}>
                            New Release
                        </h2>
                    </div>
                    <div className={"text-center lg:text-left"}>
                        <p className={"lg:text-lg text-neutral-500 max-w-sm"}>
                            The week of 30<sup>th</sup> June 2025.
                        </p>
                    </div>
                </div>
                <div className={"space-y-8 w-full"}>
                    {Array.from({length: 4}).map((_, index) => (
                        <div key={index}
                             className={"pb-4 border-b  flex flex-col items-start md:flex-row md:items-center justify-between border-[#eeeeee] dark:border-neutral-800 w-full gap-8 lg:gap-0"}>
                            <div className={"flex items-center justify-between md:justify-start gap-8"}>
                                <div className={"relative w-fit"}>
                                    <img src={"/theweeknd2.jpg"}
                                         className={"h-44 w-44 lg:h-72 lg:w-72 object-cover cursor-pointer"}/>
                                    <div
                                        className='absolute before:content-[""] bottom-0 right-0 border-24 border-solid border-b-white dark:border-b-[#212121]  border-r-white dark:border-r-[#212121] border-t-fuchsia-600 border-l-fuchsia-600 block w-0'/>
                                </div>
                                <div>
                                    <h3 className={" "}>I feel it Coming - Daft Punk</h3>
                                    <p className={"text-neutral-500 text-sm "}>ft. The Weeknd</p>
                                    <p className={"text-neutral-500 text-xs "}>Single</p>
                                </div>
                            </div>
                            <div
                                className={"flex flex-row justify-between md:flex-col md:items-end gap-2 w-full md:w-auto items-center"}>
                                <div className={"flex items-center gap-4"}>
                                    <AudiomackLogo className={"size-6"}/>
                                    <BoomplayLogo className={"size-6"}/>
                                    <SpotifyLogo className={"size-6"}/>
                                    <YoutubeLogo className={"size-8"}/>
                                    <AppleMusicLogo className={"size-6"}/>
                                </div>
                                <div>
                                    9/10/2025
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewRelease;