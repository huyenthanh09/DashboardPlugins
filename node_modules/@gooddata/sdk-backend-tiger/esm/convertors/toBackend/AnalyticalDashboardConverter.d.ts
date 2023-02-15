import { AnalyticalDashboardModelV2 } from "@gooddata/api-client-tiger";
import { LayoutPath } from "@gooddata/sdk-backend-spi";
import { ObjRef, IFilterContextDefinition, IDashboardLayout, IDashboardWidget, IDashboardDefinition, IDashboardPluginDefinition, IDashboardPluginLink } from "@gooddata/sdk-model";
export declare function convertAnalyticalDashboard(dashboard: IDashboardDefinition, filterContextRef?: ObjRef): AnalyticalDashboardModelV2.IAnalyticalDashboard;
export declare function convertFilterContextToBackend(filterContext: IFilterContextDefinition): AnalyticalDashboardModelV2.IFilterContext;
export declare function convertDashboardPluginToBackend(plugin: IDashboardPluginDefinition): AnalyticalDashboardModelV2.IDashboardPlugin;
export declare function convertDashboardPluginLinkToBackend(pluginLink: IDashboardPluginLink): AnalyticalDashboardModelV2.IDashboardPluginLink;
export declare function getDrillToCustomUrlPaths(layout: IDashboardLayout): LayoutPath[];
export declare function convertDrillToCustomUrlInLayoutToBackend(layout?: IDashboardLayout): IDashboardLayout<IDashboardWidget> | undefined;
//# sourceMappingURL=AnalyticalDashboardConverter.d.ts.map