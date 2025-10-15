import type {FC} from "react";

export interface IconProps {
    className?: string;
    strokeWidth?: string | number | undefined;
}

export type IconType = FC<IconProps>;