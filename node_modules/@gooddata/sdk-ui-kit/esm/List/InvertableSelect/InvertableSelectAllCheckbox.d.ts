/// <reference types="react" />
/**
 * @internal
 */
export interface IInvertableSelectAllCheckboxProps {
    checked: boolean;
    onChange: (value: boolean) => void;
    onToggle: () => void;
    isFiltered: boolean;
    totalItemsCount: number;
    isPartialSelection: boolean;
    isVisible: boolean;
}
/**
 * @internal
 */
export declare function InvertableSelectAllCheckbox(props: IInvertableSelectAllCheckboxProps): JSX.Element;
//# sourceMappingURL=InvertableSelectAllCheckbox.d.ts.map