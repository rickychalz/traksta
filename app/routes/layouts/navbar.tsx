import React from 'react';
import {Link} from "react-router";
import {List, MinimalisticMagnifer} from "@solar-icons/react/ssr";
import {InstagramLogo} from "~/components/icons/instagram-logo";
import {XLogo} from "~/components/icons/x-logo";
import {TikTokLogo} from "~/components/icons/tik-tok-logo";
import {FacebookLogo} from '~/components/icons/facebook-logo';
import {ThreadsLogo} from "~/components/icons/threads-logo";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem, NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from "~/components/ui/navigation-menu";


const Navbar = () => {
    return (
        <header className={"sticky top-0 w-full flex items-center justify-center p-4 text-white bg-[#121212] z-50"}>
            <nav className={"w-full max-w-screen-xl flex items-center md:justify-between"}>
                <div className={"md:hidden"}><List className={"size-8"}/></div>
                <div className={"flex-1 md:flex-0 flex justify-center md:justify-start font-bold text-2xl"}>
                    Traksta
                </div>
                <NavigationMenu viewport={false}>
                    <NavigationMenuList
                        className={"hidden md:flex item-center gap-10 text-sm font-medium text-neutral-500"}>
                        <NavigationMenuItem>
                            <Link to={"/"}>Home</Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className={"p-0 text-neutral-500 hover:text-white focus:text-white"}>
                                Charts
                            </NavigationMenuTrigger>
                            <NavigationMenuContent className={"!bg-neutral-800 !rounded-none !shadow border-none"}>
                                <div className={"flex gap-4 w-[800px] p-1 "}>
                                    <div className={"relative bg-neutral-200 aspect-square w-72 h-72"}>
                                        <div
                                            className='absolute before:content-[""] bottom-0 right-0 border-16 border-solid border-b-neutral-800 border-r-neutral-800 border-t-fuchsia-600 border-l-fuchsia-600 block w-0'/>
                                    </div>
                                    <div className="flex flex-col gap-4 col-span-3 w-full no-shrink no-wrap">
                                        <Link to={"charts"}>
                                        <div
                                            className="group py-2 px-4 hover:bg-fuchsia-600 cursor-pointer transition-colors duration-300 ease-in-out">
                                            <h2 className="font-semibold   group-hover:text-gray-100 transition-colors duration-300 ease-in-out">Top
                                                50 Songs</h2>
                                            <p className="text-xs !text-neutral-500 group-hover:text-white transition-colors duration-300 ease-in-out">
                                                The hottest 50 tracks in the country from local legends to global hits,
                                                all in one vibe.
                                            </p>
                                        </div>
                                        </Link>
                                        <div
                                            className="group py-2 px-4 hover:bg-fuchsia-600 cursor-pointer transition-colors duration-300 ease-in-out">
                                            <h2 className="font-semibold group-hover:text-gray-100 transition-colors duration-300 ease-in-out">Top
                                                50 Local Hits</h2>
                                            <p className="text-xs !text-neutral-500 group-hover:text-white transition-colors duration-300 ease-in-out">
                                                Homegrown hits only. The 50 songs running the streets and topping the
                                                charts.
                                            </p>
                                        </div>

                                        <div
                                            className="group py-2 px-4 hover:bg-fuchsia-600 cursor-pointer transition-colors duration-300 ease-in-out">
                                            <h2 className="font-semibold group-hover:text-gray-100 transition-colors duration-300 ease-in-out">Top
                                                50 Global Hits</h2>
                                            <p className="text-xs !text-neutral-500 group-hover:text-white transition-colors duration-300 ease-in-out">
                                                The top 50 global tracks making waves in the country from worldwide
                                                superstars to viral hits.
                                            </p>
                                        </div>

                                        <div
                                            className="group py-2 px-4 hover:bg-fuchsia-600 cursor-pointer transition-colors duration-300 ease-in-out">
                                            <h2 className="font-semibold group-hover:text-gray-100 transition-colors duration-300 ease-in-out">Top
                                                20 Artist</h2>
                                            <p className="text-xs !text-neutral-500 group-hover:text-white transition-colors duration-300 ease-in-out">
                                                The artists dominating playlists and charts the top 20 you need to know.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link to={"#"}>New Hits!</Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link to={"#"}>Upcoming</Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <div className={"hidden md:flex items-center gap-4"}>
                    <InstagramLogo className={"size-8"}/>
                    <FacebookLogo className={"size-5"}/>
                    <ThreadsLogo className={"size-5"}/>
                    <XLogo className={"size-4"}/>
                    <TikTokLogo className={"size-5"}/>
                </div>
                <div className={"md:hidden"}><MinimalisticMagnifer className={"size-5"}/></div>
            </nav>
        </header>
    );
};

export default Navbar;