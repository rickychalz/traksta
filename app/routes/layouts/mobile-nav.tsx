import React, {useState, useEffect} from 'react';
import {NavLink, Link} from "react-router";
import {AltArrowDown, CloseCircle} from "@solar-icons/react/ssr";
import {InstagramLogo} from "~/components/icons/instagram-logo";
import {XLogo} from "~/components/icons/x-logo";
import {TikTokLogo} from "~/components/icons/tik-tok-logo";
import {FacebookLogo} from '~/components/icons/facebook-logo';
import {ThreadsLogo} from "~/components/icons/threads-logo";

interface Props {
    onClose: () => void,
    isOpen: boolean,
}

const MobileNavigation = ({isOpen, onClose}: Props) => {
    const [isChartsExpanded, setIsChartsExpanded] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setShouldRender(true);
            // Small delay to ensure DOM is ready before animation
            requestAnimationFrame(() => {
                requestAnimationFrame(() => setIsVisible(true));
            });
        } else {
            // Start closing animation
            setIsVisible(false);
            // Wait for animation to complete before unmounting
            const timer = setTimeout(() => {
                setShouldRender(false);
            }, 300); // Match this with your CSS transition duration
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    const handleLinkClick = () => {
        // Start closing animation immediately on link click
        setIsVisible(false);
        setTimeout(() => {
            onClose();
        }, 250); // Slightly shorter than full animation for responsiveness
    };

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            setIsVisible(false);
            setTimeout(() => {
                onClose();
            }, 250);
        }
    };

    const handleCloseClick = () => {
        setIsVisible(false);
        setTimeout(() => {
            onClose();
        }, 250);
    };

    if (!shouldRender) return null;

    return (
        <>
            {/* Backdrop */}
                <div
                    className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 ease-in-out ${
                        isVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                    onClick={handleBackdropClick}
                />

            {/* Navigation Panel */}
                <div className="fixed inset-0 z-50 lg:hidden overflow-hidden">
                    <div
                        className={`fixed inset-y-0 left-0 w-full bg-white dark:bg-[#121212] overflow-y-auto transform transition-all duration-300 ease-in-out ${
                            isVisible ? 'translate-x-0' : '-translate-x-full'
                        }`}
                    >
                        {/* Header */}
                        <div
                            className="flex items-center justify-between p-4 border-b border-neutral-200 dark:border-neutral-800">
                            <div className="text-[#121212] dark:text-white font-bold text-2xl">
                                Traksta
                            </div>
                            <button
                                onClick={handleCloseClick}
                                className="text-[#121212] dark:text-white transition-transform hover:scale-110 active:scale-95"
                            >
                                <CloseCircle className="size-8"/>
                            </button>
                        </div>

                        {/* Navigation Links */}
                        <nav className="flex flex-col p-4">
                            <NavLink
                                to="/"
                                onClick={handleLinkClick}
                                className={({isActive}) =>
                                    `py-4 px-4 text-lg font-medium border-b border-neutral-200 dark:border-neutral-800 transition-all duration-200 ${
                                        isActive
                                            ? 'text-fuchsia-600 transform scale-[1.02]'
                                            : 'text-neutral-700 dark:text-neutral-300 hover:text-fuchsia-600 dark:hover:text-fuchsia-600 hover:translate-x-1'
                                    }`
                                }
                            >
                                Home
                            </NavLink>

                            {/* Top 50 Hits Expandable */}
                            <div className="border-b border-neutral-200 dark:border-neutral-800 overflow-hidden">
                                <button
                                    onClick={() => setIsChartsExpanded(!isChartsExpanded)}
                                    className="w-full py-4 px-4 text-lg font-medium text-left text-neutral-700 dark:text-neutral-300 hover:text-fuchsia-600 dark:hover:text-fuchsia-600 transition-all duration-200 flex items-center justify-between hover:translate-x-1"
                                >
                                    <span>Top 50 Hits</span>
                                    <AltArrowDown
                                        className={`size-5 transform transition-transform duration-300 ${
                                            isChartsExpanded ? 'rotate-180' : ''
                                        }`}
                                    />
                                </button>

                                <div
                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                                        isChartsExpanded ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                                >
                                    <div className="pb-2 pl-4 space-y-4">
                                        <Link
                                            to="/charts"
                                            onClick={handleLinkClick}
                                            className="block py-3 px-4 hover:bg-fuchsia-600 hover:text-white transition-all duration-200 rounded-lg hover:translate-x-2"
                                        >
                                            <h3 className="mb-1">Top 50 Local Hits</h3>
                                        </Link>

                                        <Link
                                            to="/charts"
                                            onClick={handleLinkClick}
                                            className="block py-3 px-4 hover:bg-fuchsia-600 hover:text-white transition-all duration-200 rounded-lg hover:translate-x-2"
                                        >
                                            <h3 className="mb-1">Top 50 Local & International Hits</h3>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <NavLink
                                to="/artists"
                                onClick={handleLinkClick}
                                className={({isActive}) =>
                                    `py-4 px-4 text-lg font-medium border-b border-neutral-200 dark:border-neutral-800 transition-all duration-200 ${
                                        isActive
                                            ? 'text-fuchsia-600 transform scale-[1.02]'
                                            : 'text-neutral-700 dark:text-neutral-300 hover:text-fuchsia-600 dark:hover:text-fuchsia-600 hover:translate-x-1'
                                    }`
                                }
                            >
                                Top 20 Artists
                            </NavLink>

                            <NavLink
                                to="/new-release"
                                onClick={handleLinkClick}
                                className={({isActive}) =>
                                    `py-4 px-4 text-lg font-medium border-b border-neutral-200 dark:border-neutral-800 transition-all duration-200 ${
                                        isActive
                                            ? 'text-fuchsia-600 transform scale-[1.02]'
                                            : 'text-neutral-700 dark:text-neutral-300 hover:text-fuchsia-600 dark:hover:text-fuchsia-600 hover:translate-x-1'
                                    }`
                                }
                            >
                                New Releases
                            </NavLink>
                        </nav>

                        {/* Social Media Icons */}
                        <div className="p-4 mt-auto">
                            <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-4 transition-all duration-200">
                                Follow Us
                            </p>
                            <div className="flex items-center gap-6 text-[#121212] dark:text-white">
                                {[
                                    { Icon: InstagramLogo, className: "size-8" },
                                    { Icon: FacebookLogo, className: "size-6" },
                                    { Icon: ThreadsLogo, className: "size-6" },
                                    { Icon: XLogo, className: "size-5" },
                                    { Icon: TikTokLogo, className: "size-6" },
                                ].map(({ Icon, className }, index) => (
                                    <Icon
                                        key={index}
                                        className={`${className} transition-all duration-200 hover:scale-110 hover:text-fuchsia-600 cursor-pointer`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
};

export default MobileNavigation;