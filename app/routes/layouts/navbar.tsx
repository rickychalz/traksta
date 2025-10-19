import React, {useState} from 'react';
import {NavLink, Link} from "react-router";
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
import MobileNavigation from "~/routes/layouts/mobile-nav";


const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return <>
        <header
            className={"fixed top-0 w-full flex items-center justify-center p-4 text-white bg-white dark:bg-[#121212] z-50"}>
            <nav className={"w-full max-w-screen-xl flex items-center lg:justify-between"}>
                <div className={"lg:hidden"} onClick={() => setIsMobileMenuOpen(true)}><List
                    className={"size-8 text-[#121212] dark:text-white"}/></div>
                <div
                    className={"text-[#121212] dark:text-white flex-1 lg:flex-0 flex justify-center lg:justify-start font-bold text-2xl"}>
                    Traksta
                </div>
                <NavigationMenu viewport={false}>
                    <NavigationMenuList
                        className={"hidden lg:flex item-center gap-10 text-sm font-medium text-neutral-500"}>
                        <NavigationMenuItem>
                            <NavLink
                                to={"/"}
                                className={({isActive}) => `relative hover:text-[#121212] dark:hover:text-white transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-fuchsia-600 after:transition-all after:duration-300 after:ease-in-out ${isActive ? 'text-[#121212] dark:text-white after:w-full' : 'after:w-0 hover:after:w-full'}`}
                            >
                                Home
                            </NavLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger
                                className={"cursor-pointer p-0 text-neutral-500 hover:text-[#121212] dark:hover:text-white focus:text-[#121212] dark:focus:text-white"}>
                                Top 50 Hits
                            </NavigationMenuTrigger>
                            <NavigationMenuContent className={"dark:!bg-neutral-800 !rounded-none !shadow border-none"}>
                                <div className={"flex gap-4 w-[600px] p-1 "}>
                                    <div className={"relative bg-neutral-200 aspect-square w-38 h-38"}>
                                        <div
                                            className='absolute before:content-[""] bottom-0 right-0 border-16 border-solid border-b-white border-r-white dark:border-b-neutral-800 dark:border-r-neutral-800 border-t-fuchsia-600 border-l-fuchsia-600 block w-0'/>
                                    </div>
                                    <Link to={"/charts"}
                                          className="flex flex-col gap-4 col-span-3 w-full no-shrink no-wrap">
                                        <div
                                            className="group py-2 px-4 hover:bg-fuchsia-600 cursor-pointer transition-colors duration-300 ease-in-out">
                                            <h2 className="font-semibold group-hover:text-[#121212] dark:group-hover:text-gray-100 transition-colors duration-300 ease-in-out">Top
                                                50 Local Hits</h2>
                                            <p className="text-xs !text-neutral-500 group-hover:text-white transition-colors duration-300 ease-in-out">
                                                Homegrown hits only. The 50 songs running the streets and topping the
                                                charts.
                                            </p>
                                        </div>

                                        <div
                                            className="group py-2 px-4 hover:bg-fuchsia-600 cursor-pointer transition-colors duration-300 ease-in-out">
                                            <h2 className="font-semibold group-hover:text-[#121212] dark:group-hover:text-gray-100 transition-colors duration-300 ease-in-out">Top
                                                50 Local & International Hits</h2>
                                            <p className="text-xs !text-neutral-500 group-hover:text-white transition-colors duration-300 ease-in-out">
                                                The top 50 tracks combining both local and international hits making
                                                waves in the country .
                                            </p>
                                        </div>

                                    </Link>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavLink
                                to={"/artists"}
                                className={({isActive}) => `relative hover:text-[#121212] dark:hover:text-white transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-fuchsia-600 after:transition-all after:duration-300 after:ease-in-out ${isActive ? 'text-[#121212] dark:text-white after:w-full' : 'after:w-0 hover:after:w-full'}`}
                            >
                                Top 20 Artists
                            </NavLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavLink
                                to={"new-release"}
                                className={({isActive}) => `relative hover:text-[#121212] dark:hover:text-white transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-fuchsia-600 after:transition-all after:duration-300 after:ease-in-out ${isActive ? 'text-[#121212] dark:text-white after:w-full' : 'after:w-0 hover:after:w-full'}`}
                            >
                                New Releases
                            </NavLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <div className={"text-[#121212] dark:text-white hidden lg:flex items-center gap-4"}>
                    <InstagramLogo className={"size-8"}/>
                    <FacebookLogo className={"size-5"}/>
                    <ThreadsLogo className={"size-5"}/>
                    <XLogo className={"size-4"}/>
                    <TikTokLogo className={"size-5"}/>
                </div>
                <div className={"lg:hidden"}><MinimalisticMagnifer className={"size-5 text-[#121212] dark:text-white"}/>
                </div>
            </nav>
        </header>
        <MobileNavigation
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
        />
    </>

};

export default Navbar;