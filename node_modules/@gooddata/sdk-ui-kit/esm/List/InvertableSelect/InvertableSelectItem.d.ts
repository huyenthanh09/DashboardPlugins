/// <reference types="react" />
/**
 * @internal
 */
export interface IInvertableSelectItem {
    title?: string;
    isSelected?: boolean;
    onMouseOut?: () => void;
    onMouseOver?: () => void;
    onOnly?: () => void;
    onClick?: () => void;
}
/**
 * @internal
 */
export declare function InvertableSelectItem(props: IInvertableSelectItem): JSX.Element;
//# sourceMappingURL=InvertableSelectItem.d.ts.map