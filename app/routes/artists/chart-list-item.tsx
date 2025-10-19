import React, {useState} from 'react';
import FoldedBadge from "~/components/folded-badge";
import {ChevronUp} from "lucide-react";
import {AltArrowDown, Danger, MenuDots} from "@solar-icons/react/ssr";
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "~/components/ui/collapsible";

interface Props {
    index: number;
}

const ChartListItem = ({index}: Props) => {
    const [openItems, setOpenItems] = useState<number[]>([])

    const toggleItem = (index: number) => {
        setOpenItems(prev =>
            prev.includes(index)
                ? prev.filter(item => item !== index)
                : [...prev, index]
        )
    }
    return (
        <Collapsible key={index}
                     open={openItems.includes(index)}
                     onOpenChange={() => toggleItem(index)}
                     className={"bg-[#f5f5f5] dark:bg-neutral-800 p-4 w-full border-b border-[#eeeeee] dark:border-neutral-700/50"}>
            <div className="w-full">
                <div className="grid grid-cols-5 md:grid-cols-9 items-center w-full">
                    <div className={"hidden md:flex justify-center font-semibold text-white text-2xl"}>
                        <FoldedBadge className={"dark:text-white"} text={`${index + 2}`}/>
                    </div>
                    <div className={"md:hidden flex-col items-center gap-2"}>
                        <div className={"text-lg flex items-center font-bold text-[#121212] dark:text-white"}>
                            <span>{index + 2}</span>
                            <span>
                                                <ChevronUp className={"size-4 md:size-auto text-green-600"}/>
                                            </span>
                        </div>
                    </div>
                    <div className={"col-span-3 flex items-center md:justify-center xl:justify-start gap-4"}>
                        <div className={"relative"}>
                            <img src={"/theweeknd2.jpg"}
                                 alt="The Weeknd"
                                 className={"aspect-square h-16 w-16 object-cover"}/>
                            <div
                                className='absolute before:content-[""] bottom-0 right-0 border-6 border-solid border-b-[#f5f5f5] border-r-[#f5f5f5] dark:border-b-neutral-800 dark:border-r-neutral-800 border-t-fuchsia-600 border-l-fuchsia-600 block w-0'/>
                        </div>
                        <div className={"flex flex-col items-start"}>
                                            <span
                                                className={"md:text-xl font-bold text-[#121212] dark:text-white"}>The Weeknd</span>
                            <span className={"text-xs text-neutral-500"}>labels</span>
                        </div>
                    </div>
                    <div className={"hidden md:flex flex-col items-center gap-2"}>
                        <div
                            className={"text-xl flex items-center font-bold text-[#121212] dark:text-white "}>
                            <span>1</span><span><ChevronUp className={"text-green-600"}/></span></div>
                        <div className={"text-xs text-center text-neutral-500"}>this week</div>
                    </div>
                    <div className={"hidden md:flex flex-col items-center gap-2"}>
                        <div className={"text-xl font-bold text-[#121212] dark:text-white "}>3</div>
                        <div className={"text-xs text-center text-neutral-500"}>last week</div>
                    </div>
                    <div className={"hidden md:flex flex-col items-center gap-2"}>
                        <div className={"text-xl font-bold text-[#121212] dark:text-white "}>258</div>
                        <div className={"text-xs text-center text-neutral-500 "}>weeks on chart</div>
                    </div>
                    <div className={"hidden md:flex flex-col items-center gap-2"}>
                        <div className={"text-xl font-bold text-[#121212] dark:text-white "}>1</div>
                        <div className={"text-xs text-center text-neutral-500"}>peak</div>
                    </div>
                    <div className={"hidden md:flex w-full justify-center text-[#121212] dark:text-white"}>
                        <MenuDots weight={"BoldDuotone"} className={"size-5"}/>
                    </div>
                    <CollapsibleTrigger className={`md:hidden w-full justify-end text-[#121212] dark:text-white flex`}>
                        <AltArrowDown className={`h-4 w-4 transition-transform duration-200 ${
                            openItems.includes(index) ? "transform rotate-180" : ""
                        }`}/>
                    </CollapsibleTrigger>
                </div>
                <CollapsibleContent className="w-full px-4">
                    <div className="flex justify-between items-center gap-4 pt-4 md:hidden w-full">
                        <div className={"flex flex-col items-center gap-2"}>
                            <div className={"text-xl font-bold text-[#121212] dark:text-white "}>3</div>
                            <div className={"text-xs text-center text-neutral-500"}>last week</div>
                        </div>
                        <div className={"flex flex-col items-center gap-2"}>
                            <div className={"text-xl font-bold text-[#121212] dark:text-white "}>258</div>
                            <div className={"text-xs text-center text-neutral-500 "}>weeks on chart</div>
                        </div>
                        <div className={"flex flex-col items-center gap-2"}>
                            <div className={"text-xl font-bold text-[#121212] dark:text-white "}>1</div>
                            <div className={"text-xs text-center text-neutral-500"}>peak</div>
                        </div>
                        <div>
                            <MenuDots weight={"BoldDuotone"} className={"size-5"}/>
                        </div>
                    </div>
                </CollapsibleContent>
            </div>
        </Collapsible>
    );
};

export default ChartListItem;