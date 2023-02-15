import { PureComponent } from "react";
/**
 * @internal
 */
export interface IMultiSelectListItemProps {
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
export declare class MultiSelectListItem extends PureComponent<IMultiSelectListItemProps> {
    render(): JSX.Element;
    private getClassNames;
    private renderOnly;
}
//# sourceMappingURL=MultiSelectListItem.d.ts.map