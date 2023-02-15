import React from "react";
import { IColor, IColorPalette } from "@gooddata/sdk-model";
export interface IColorPaletteProps {
    selectedColorGuid?: string;
    colorPalette: IColorPalette;
    onColorSelected: (color: IColor) => void;
}
export default class ColorPalette extends React.PureComponent<IColorPaletteProps> {
    render(): JSX.Element;
    private getClassNames;
    private renderItems;
    private isColorPaletteLarge;
    private isItemSelected;
    private onColorSelected;
}
//# sourceMappingURL=ColorPalette.d.ts.map