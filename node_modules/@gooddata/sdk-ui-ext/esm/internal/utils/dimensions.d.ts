import { IDimension, IInsightDefinition } from "@gooddata/sdk-model";
import { VisType } from "@gooddata/sdk-ui";
export declare function getPivotTableDimensions(insight: IInsightDefinition): IDimension[];
export declare function getHeadlinesDimensions(): IDimension[];
/**
 * Generates dimensions based on buckets and visualization objects.
 *
 * @param insight - insight being visualized
 * @param type - visualization type string
 * @internal
 */
export declare function generateDimensions(insight: IInsightDefinition, type: VisType): IDimension[];
export declare function generateStackedDimensions(insight: IInsightDefinition): IDimension[];
//# sourceMappingURL=dimensions.d.ts.map