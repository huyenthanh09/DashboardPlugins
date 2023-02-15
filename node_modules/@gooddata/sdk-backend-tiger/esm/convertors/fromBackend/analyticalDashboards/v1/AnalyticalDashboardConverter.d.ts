import { AnalyticalDashboardModelV1, JsonApiAnalyticalDashboardOutDocument, JsonApiFilterContextOutDocument } from "@gooddata/api-client-tiger";
import { FilterContextItem, IFilterContext, IDashboard } from "@gooddata/sdk-model";
export declare function convertDashboard(analyticalDashboard: JsonApiAnalyticalDashboardOutDocument, filterContext?: IFilterContext): IDashboard;
export declare function convertFilterContextFromBackend(filterContext: JsonApiFilterContextOutDocument): IFilterContext;
export declare function convertFilterContextFilters(content: AnalyticalDashboardModelV1.IFilterContext): FilterContextItem[];
//# sourceMappingURL=AnalyticalDashboardConverter.d.ts.map