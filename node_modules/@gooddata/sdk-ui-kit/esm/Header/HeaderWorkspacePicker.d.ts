import React from "react";
import { IntlShape } from "react-intl";
/**
 * @internal
 */
export interface IHeaderWorkspace {
    id: string;
    title: string;
    description: string;
    isDemo?: boolean;
}
/**
 * @internal
 */
export interface IHeaderWorkspacePickerProps {
    intl: IntlShape;
    className?: string;
    isLoading?: boolean;
    selectedWorkspace?: IHeaderWorkspace;
    workspaces?: IHeaderWorkspace[];
    totalWorkspacesCount?: number;
    searchString?: string;
    showSearch?: boolean;
    onOpen?: () => void;
    onSearch?: (searchString: string) => void;
    onSelect?: (item: IHeaderWorkspace) => void;
    onScrollEnd?: (visibleRowsStartIndex: number, visibleRowsEndIndex: number) => void;
    projectPickerFooter?: React.ReactNode;
    isRenamingProjectToWorkspaceEnabled?: boolean;
}
export declare const CoreHeaderWorkspacePicker: React.FC<IHeaderWorkspacePickerProps>;
/**
 * @internal
 */
export declare const HeaderWorkspacePicker: React.FC<import("react-intl").WithIntlProps<IHeaderWorkspacePickerProps>> & {
    WrappedComponent: React.ComponentType<IHeaderWorkspacePickerProps>;
};
//# sourceMappingURL=HeaderWorkspacePicker.d.ts.map