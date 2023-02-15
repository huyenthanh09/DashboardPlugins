import React from "react";
import { IUserWorkspaceSettings } from "@gooddata/sdk-backend-spi";
import { IInsightDefinition, IColorPalette, ITheme } from "@gooddata/sdk-model";
import { IInsightViewProps } from "../internal";
import { OnError, ILocale } from "@gooddata/sdk-ui";
/**
 * @internal
 */
export interface IInsightRendererProps extends Omit<IInsightViewProps, "insight" | "TitleComponent" | "onInsightLoaded" | "showTitle" | "afterRender"> {
    insight: IInsightDefinition | undefined;
    locale: ILocale;
    settings: IUserWorkspaceSettings | undefined;
    colorPalette: IColorPalette | undefined;
    onError?: OnError;
    theme?: ITheme;
}
export declare const IntlInsightRenderer: any;
/**
 * Renders insight passed as a parameter.
 *
 * @internal
 */
export declare const InsightRenderer: React.FC<IInsightRendererProps>;
//# sourceMappingURL=InsightRenderer.d.ts.map