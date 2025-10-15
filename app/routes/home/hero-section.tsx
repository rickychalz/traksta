import FoldedBadge from "~/components/folded-badge";
import {ChevronUp} from "lucide-react";

const HeroSection = () => {
    return (
            <section className={"relative flex flex-col items-center"}>
                <div className={"relative w-full"}>
                    <img src={"/theweeknd.jpg"} className={"h-40 md:h-120 w-full object-cover object-[0%_30%]"}/>
                    <div
                        className='absolute before:content-[""] bottom-0 right-0 border-16 border-solid border-b-[#212121] border-r-[#212121] border-t-fuchsia-600 border-l-fuchsia-600 block w-0'/>
                </div>
            </section>
    );
};

export default HeroSection;