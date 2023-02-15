/// <reference types="react" />
/**
 * @internal
 */
export interface IInvertableSelectStatusBarProps<T> {
    className?: string;
    isInverted: boolean;
    selectedItems: T[];
    getItemTitle: (item: T) => string;
    selectedItemsLimit: number;
}
/**
 * @internal
 */
export declare function InvertableSelectStatusBar<T>(props: IInvertableSelectStatusBarProps<T>): JSX.Element;
//# sourceMappingURL=InvertableSelectStatusBar.d.ts.map