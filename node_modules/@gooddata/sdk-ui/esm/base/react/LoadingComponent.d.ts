import React from "react";
/**
 * Props of the {@link LoadingComponent}.
 * @public
 */
export interface ILoadingProps {
    className?: string;
    color?: string;
    speed?: number;
    inline?: boolean;
    height?: any;
    width?: any;
    imageHeight?: any;
    imageWidth?: any;
}
/**
 * Component that renders a default loading indicator.
 *
 * @remarks
 * See {@link https://sdk.gooddata.com/gooddata-ui/docs/loading_component.html | LoadingComponent }
 *
 * @public
 */
export declare class LoadingComponent extends React.Component<ILoadingProps> {
    static defaultProps: Partial<ILoadingProps>;
    render(): JSX.Element;
}
//# sourceMappingURL=LoadingComponent.d.ts.map