import { IThemeDefinition, IColorPaletteDefinition, ITheme, IColorPalette } from "@gooddata/sdk-model";
/**
 * Dummy theme metadata object which represents the default colors of GD.
 *
 * This object is used as default when rendering theme as a sequence of colored elements in styling
 * picker. It's properties are also used as defaults when some custom theme is missing a crucial
 * property for the same rendering purposes.
 *
 * @internal
 */
export declare const defaultThemeMetadataObject: IThemeDefinition;
/**
 * This function transforms a theme metadata object into an array of colors which is used
 * to render the theme in styling picker. When provided theme object is missing some properties,
 * defaults are taken from the {@link defaultThemeMetadataObject}.
 *
 * @internal
 */
export declare const getColorsPreviewFromTheme: (theme: ITheme) => string[];
/**
 * Dummy theme metadata object which represents the default colors of GD.
 *
 * This object is used as default when rendering theme as a sequence of colored elements in styling
 * picker. It's properties are also used as defaults when some custom theme is missing a crucial
 * property for the same rendering purposes.
 *
 * @internal
 */
export declare const defaultColorPaletteMetadataObject: IColorPaletteDefinition;
/**
 * This function transforms a color palette into an array of max ten colors which is used
 * to render the color palette in styling picker.
 *
 * @internal
 */
export declare const getColorsPreviewFromColorPalette: (colorPalette: IColorPalette) => string[];
//# sourceMappingURL=utils.d.ts.map