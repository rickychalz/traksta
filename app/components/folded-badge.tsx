import {cn} from "~/lib/utils";

interface PurpleBadgeProps {
    text?: string;
    className?: string;
    textClassName?: string;
}

const FoldedBadge: React.FC<PurpleBadgeProps> = ({text,textClassName, className = ""}) => {
    return (
        <div
            className={cn("bg-fuchsia-600 relative h-14 w-8 text-white overflow-clip flex items-center justify-center", className)}>
            <p className={cn('text-xl pb-3',textClassName)}>{text}</p>
            <div
                className='absolute before:content-[""] bottom-0 right-0 border-8 border-solid border-b-[#f5f5f5] border-r-[#f5f5f5]  dark:border-b-neutral-800 dark:border-r-neutral-800 border-t-fuchsia-800 border-l-fuchsia-800 block w-0'/>
        </div>
    );
};

export default FoldedBadge;