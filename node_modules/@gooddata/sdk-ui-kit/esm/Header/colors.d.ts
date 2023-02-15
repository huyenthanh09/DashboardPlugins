interface IRgbaColor {
    r: number;
    g: number;
    b: number;
    a: 1;
}
/**
 * Helper function that transforms any string representation of a color
 * into dojo.Color object.
 */
export declare function toColor(hexColor: string): IRgbaColor;
/**
 * Helper function that returns a luminance of a color.
 * Color must be an object with r, g and b properties.
 *
 * @returns Luminance in interval 0 - 255
 */
export declare function luminanceOf(color: IRgbaColor): number;
/**
 * Function that chooses from two colors based on luminance
 * of control color. This luminance is compared to specified threshold value.
 *
 * @param color - color as a String
 * @param threshold - Luminance threshold value in interval 1 - 255
 * @param dark - Dark color variant for when control color luminance is higher than threshold
 * @param light - Light color variant for when control color luminance is lower or equal than threshold
 */
export declare function chooseColor(hexColor: string, threshold: number, dark: string, light: string): string;
export declare function getTextColor(headerTextColor: string, headerColor: string): string;
export declare function getItemActiveColor(activeColor: string, headerColor: string): string;
export declare function getWorkspacePickerHoverColor(headerColor: string): string;
export declare function getItemHoverColor(headerColor: string, activeColor: string, lightOpacity?: number, darkOpacity?: number): string;
export declare function getSeparatorColor(headerColor: string, activeColor: string): string;
export {};
//# sourceMappingURL=colors.d.ts.map