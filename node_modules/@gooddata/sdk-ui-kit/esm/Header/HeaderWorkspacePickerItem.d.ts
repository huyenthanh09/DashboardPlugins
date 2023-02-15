import React from "react";
import { IntlShape } from "react-intl";
export interface IHeaderWorkspacePickerItemProps {
    title: string;
    isDemo?: boolean;
    isSelected?: boolean;
    isLoading?: boolean;
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
    intl: IntlShape;
}
export declare const CoreHeaderWorkspacePickerItem: React.FC<IHeaderWorkspacePickerItemProps>;
export declare const HeaderWorkspacePickerItem: React.FC<import("react-intl").WithIntlProps<IHeaderWorkspacePickerItemProps>> & {
    WrappedComponent: React.ComponentType<IHeaderWorkspacePickerItemProps>;
};
//# sourceMappingURL=HeaderWorkspacePickerItem.d.ts.map