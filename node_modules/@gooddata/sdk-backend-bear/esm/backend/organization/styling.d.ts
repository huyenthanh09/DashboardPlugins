import { IOrganizationStylingService } from "@gooddata/sdk-backend-spi";
import { IColorPaletteDefinition, IThemeDefinition, ObjRef } from "@gooddata/sdk-model";
export declare class OrganizationStylingService implements IOrganizationStylingService {
    private defaultReject;
    private defaultRejectTheme;
    private defaultRejectColorPalette;
    getThemes: () => Promise<never>;
    getActiveTheme: () => Promise<never>;
    setActiveTheme: () => Promise<never>;
    clearActiveTheme: () => Promise<never>;
    createTheme: (_theme: IThemeDefinition) => Promise<never>;
    /**
     * Update existing theme on organization level.
     *
     * @returns promise
     */
    updateTheme: (_theme: IThemeDefinition) => Promise<never>;
    /**
     * Delete theme on organization level.
     *
     * @returns promise
     */
    deleteTheme: (_themeRef: ObjRef) => Promise<never>;
    getColorPalettes: () => Promise<never>;
    getActiveColorPalette: () => Promise<never>;
    setActiveColorPalette: () => Promise<never>;
    clearActiveColorPalette: () => Promise<never>;
    createColorPalette: (_colorPalette: IColorPaletteDefinition) => Promise<never>;
    updateColorPalette: (_colorPalette: IColorPaletteDefinition) => Promise<never>;
    deleteColorPalette: (_colorPaletteRef: ObjRef) => Promise<never>;
}
//# sourceMappingURL=styling.d.ts.map