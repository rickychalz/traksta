import React from 'react';
import {InstagramLogo} from "~/components/icons/instagram-logo";
import {FacebookLogo} from "~/components/icons/facebook-logo";
import {ThreadsLogo} from "~/components/icons/threads-logo";
import {XLogo} from "~/components/icons/x-logo";
import {TikTokLogo} from "~/components/icons/tik-tok-logo";

const Footer = () => {
    return (
        <footer className="dark:bg-[#121212] mt-8">
            <div className="mx-auto max-w-screen-xl px-4 pb-6 lg:px-4 xl:px-0">
                <div
                    className="md:mt-16 grid grid-cols-1 gap-8  pt-8 md:pt-16 md:grid-cols-4 lg:grid-cols-6"
                >
                    <div className="text-center sm:text-left">
                        <p className="text-2xl  dark:text-white font-bold ">Traksta</p>

                    </div>

                    <div className="text-center dark:text-white sm:text-left">
                        <ul className="space-y-4 text-sm">
                            <li>
                                <a className="transition  hover:text-gray-700/75" href="#">
                                    Top 50 Songs
                                </a>
                            </li>

                            <li>
                                <a className="transition hover:text-gray-700/75" href="#"> Top 50
                                    Artists </a>
                            </li>

                            <li>
                                <a className="transition hover:text-gray-700/75" href="#"> New
                                    Releases </a>
                            </li>

                            <li>
                                <a className="transition hover:text-gray-700/75" href="#"> FAQ's </a>
                            </li>
                        </ul>
                    </div>

                    <div className="text-center sm:text-left dark:text-white">
                        <ul className="space-y-4 text-sm">
                            <li>
                                <a className=" transition hover:text-gray-700/75" href="#"> About </a>
                            </li>

                            <li>
                                <a className=" transition hover:text-gray-700/75" href="#">
                                    Contact
                                </a>
                            </li>

                            <li>
                                <a className=" transition hover:text-gray-700/75" href="#"> Terms &
                                    Conditions </a>
                            </li>

                        </ul>
                    </div>


                    <div className="text-center sm:text-right md:col-span-4 lg:col-span-3 dark:text-white flex justify-end">
                        <div className={"flex flex-col"}>
                        <p className="text-lg font-medium">Subscribe to our newsletter</p>

                        <div className="mx-auto mt-4 max-w-md w-full sm:ms-0">
                            <p className="text-center leading-relaxed text-gray-500 sm:text-right">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum id, iure consectetur et
                                error hic!
                            </p>

                            <form className="mt-4">
                                <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-end">
                                    <label htmlFor="email" className="sr-only">Email</label>

                                    <input
                                        className="w-full border border-gray-500 px-6 py-3 shadow-xs"
                                        type="email"
                                        placeholder="Enter your email"
                                    />

                                    <button
                                        className="block bg-fuchsia-600 text-white dark:bg-white dark:text-black px-8 py-3 font-bold transition"
                                        type="submit"
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-6 sm:flex sm:items-center sm:justify-between">
                    <p className="text-center text-sm text-gray-500 sm:text-left">
                        Copyright &copy; 2022. All rights reserved.
                    </p>

                    <ul className="mt-4 flex items-center justify-center dark:text-white gap-6 sm:mt-0 sm:justify-start">
                        <li>
                            <InstagramLogo className={"size-8"}/>
                        </li>

                        <li>
                            <FacebookLogo className={"size-5"}/>
                        </li>

                        <li>
                            <ThreadsLogo className={"size-5"}/>
                        </li>

                        <li>
                            <XLogo className={"size-5"}/>
                        </li>

                        <li>
                            <TikTokLogo className={"size-5"}/>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>

    );
};

export default Footer;