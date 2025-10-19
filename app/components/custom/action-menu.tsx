import React, { type ReactNode } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

export interface DropdownItem {
    label: string;
    onClick?: () => void;
    disabled?: boolean;
}

interface ActionMenuProps {
    trigger: ReactNode;
    items: DropdownItem[];
    align?: "start" | "center" | "end";
    width?: string;
    label?: string;
}

const ActionMenu: React.FC<ActionMenuProps> = ({
                                                   trigger,
                                                   items,
                                                   align = "center",
                                                   width = "w-48",
                                                   label,
                                               }) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
            <DropdownMenuContent className={width} align={align}>
                {label && <DropdownMenuLabel>{label}</DropdownMenuLabel>}
                {items.map((item, index) => (
                    <DropdownMenuItem
                        key={index}
                        onClick={item.onClick}
                        disabled={item.disabled}
                    >
                        {item.label}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ActionMenu;