import React from "react";
/**
 * Props of the {@link ErrorComponent}.
 * @public
 */
export interface IErrorProps {
    code?: string;
    icon?: string;
    message: string;
    description?: string;
    className?: string;
    style?: object;
    width?: any;
    /**
     * Size of the error component.
     */
    height?: any;
    /**
     * Size of the visualisation content when custom size layouting is enabled.
     */
    clientHeight?: any;
}
/**
 * Component that renders a default error message.
 *
 * @remarks
 * See {@link https://sdk.gooddata.com/gooddata-ui/docs/error_component.html | ErrorComponent}
 *
 * @public
 */
export declare class ErrorComponent extends React.Component<IErrorProps> {
    static defaultProps: Partial<IErrorProps>;
    render(): JSX.Element;
}
//# sourceMappingURL=ErrorComponent.d.ts.map