import React, { ReactNode } from "react";
/**
 * @internal
 */
export interface IDropdownButtonProps {
    id?: string;
    className?: string;
    value?: ReactNode;
    title?: string;
    disabled?: boolean;
    isOpen?: boolean;
    isSmall?: boolean;
    iconLeft?: string;
    onClick?: (e: React.MouseEvent) => void;
}
/**
 * @internal
 */
export declare const DropdownButton: React.FC<IDropdownButtonProps>;
//# sourceMappingURL=DropdownButton.d.ts.map