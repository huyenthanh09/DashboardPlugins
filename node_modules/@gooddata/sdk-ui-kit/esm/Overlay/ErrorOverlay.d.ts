import React, { ReactNode } from "react";
/**
 * @internal
 */
export interface IErrorOverlayProps {
    showButton?: boolean;
    showIcon?: boolean;
    icon?: ReactNode;
    title?: ReactNode;
    text?: ReactNode;
    buttonTitle?: string;
    onButtonClick?: () => void;
    className?: string;
    locale?: string;
}
/**
 * @internal
 */
export declare class ErrorOverlay extends React.PureComponent<IErrorOverlayProps> {
    render(): JSX.Element;
}
//# sourceMappingURL=ErrorOverlay.d.ts.map