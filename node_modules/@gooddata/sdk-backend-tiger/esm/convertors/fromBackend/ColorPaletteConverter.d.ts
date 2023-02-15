import { IColorPalette, IColorPaletteMetadataObject } from "@gooddata/sdk-model";
import { JsonApiColorPaletteOutDocument, JsonApiColorPaletteOutWithLinks } from "@gooddata/api-client-tiger";
export declare const unwrapColorPaletteContent: (value: object) => IColorPalette;
export declare const convertColorPaletteWithLinks: (colorPaletteObject: JsonApiColorPaletteOutWithLinks) => IColorPaletteMetadataObject;
export declare const getColorPaletteFromMDObject: ({ attributes, }: JsonApiColorPaletteOutWithLinks) => IColorPalette;
export declare const isValidColorPalette: (colorPalette: IColorPalette) => boolean;
export declare const convertColorPalette: ({ data: { id, attributes, type }, links, }: JsonApiColorPaletteOutDocument) => IColorPaletteMetadataObject;
//# sourceMappingURL=ColorPaletteConverter.d.ts.map