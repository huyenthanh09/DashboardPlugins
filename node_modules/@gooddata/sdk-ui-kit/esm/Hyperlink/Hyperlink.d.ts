import React from "react";
/**
 * @internal
 */
export interface IHyperlinkProps {
    href: string;
    text?: string;
    className?: string;
    iconClass?: string;
    onClick?: () => void;
}
/**
 * This component was implemented to follow current design of links
 * with minimal necessary stylization.
 *
 * @internal
 */
export declare const Hyperlink: React.FC<IHyperlinkProps>;
//# sourceMappingURL=Hyperlink.d.ts.map