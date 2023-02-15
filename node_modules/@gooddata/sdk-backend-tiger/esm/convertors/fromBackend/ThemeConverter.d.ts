import { JsonApiThemeOutWithLinks, JsonApiThemeOutDocument } from "@gooddata/api-client-tiger";
import { IThemeMetadataObject } from "@gooddata/sdk-model";
export declare const convertThemeWithLinks: ({ id, attributes, links, }: JsonApiThemeOutWithLinks) => IThemeMetadataObject;
export declare const convertTheme: ({ data: { id, attributes, type }, links, }: JsonApiThemeOutDocument) => IThemeMetadataObject;
//# sourceMappingURL=ThemeConverter.d.ts.map