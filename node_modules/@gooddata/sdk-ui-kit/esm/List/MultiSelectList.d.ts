import React from "react";
import { IntlShape } from "react-intl";
/**
 * @internal
 */
export interface IMultiSelectRenderItemProps<T> {
    item: T;
    isSelected: boolean;
}
/**
 * @internal
 */
export interface IMultiSelectListProps<T> {
    intl: IntlShape;
    height?: number;
    width?: number;
    itemHeight?: number;
    isInverted?: boolean;
    isSearching?: boolean;
    isMobile?: boolean;
    selectAllCheckbox?: boolean;
    selectedItems?: T[];
    items?: T[];
    itemsCount?: number;
    filteredItemsCount?: number;
    isSelected?: (item: T) => boolean;
    maxSelectionSize?: number;
    onScrollEnd?: (visibleRowsStartIndex: number, visibleRowsEndIndex: number) => void;
    onSelectAll?: () => void;
    onSelectNone?: () => void;
    renderItem: (props: IMultiSelectRenderItemProps<T>) => JSX.Element;
    tagName?: string;
    listClassNames?: string;
}
/**
 * @internal
 */
export declare const MultiSelectList: React.FC<import("react-intl").WithIntlProps<IMultiSelectListProps<unknown>>> & {
    WrappedComponent: React.ComponentType<IMultiSelectListProps<unknown>>;
};
//# sourceMappingURL=MultiSelectList.d.ts.map