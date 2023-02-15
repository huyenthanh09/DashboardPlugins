import React from "react";
import { IInsight, IInsightDefinition } from "@gooddata/sdk-model";
import { PluggableBaseChart } from "../baseChart/PluggableBaseChart";
import { IDrillDownContext, IExtendedReferencePoint, IReferencePoint, IVisConstruct, IBucketItem } from "../../../interfaces/Visualization";
import { ISortConfig } from "../../../interfaces/SortConfig";
/**
 * PluggableHeatmap
 *
 * ## Buckets
 *
 * | Name    | Id       | Accepts             |
 * |---------|----------|---------------------|
 * | Measure | measures | measures only       |
 * | Rows    | view     | attributes or dates |
 * | Columns | stack    | attributes or dates |
 *
 * ### Bucket axioms
 *
 * - |Measure| = 1
 * - |Rows| ≤ 1
 * - |Columns| ≤ 1
 *
 * ## Dimensions
 *
 * The PluggableHeatmap always creates the same two dimensional execution.
 *
 * - ⊤ ⇒ [[...Rows], [...Columns, MeasureGroupIdentifier]]
 *
 * ## Sorts
 *
 * Unless the user specifies otherwise, the sorts used by default are:
 *
 * - |Rows| ≥ 1 ⇒ [attributeAreaSort(Rows[0])]
 */
export declare class PluggableHeatmap extends PluggableBaseChart {
    constructor(props: IVisConstruct);
    getExtendedReferencePoint(referencePoint: IReferencePoint): Promise<IExtendedReferencePoint>;
    private addFilters;
    getInsightWithDrillDownApplied(source: IInsight, drillDownContext: IDrillDownContext, backendSupportsElementUris: boolean): IInsight;
    protected getDefaultAndAvailableSort(measures: IBucketItem[], viewBy: IBucketItem[], stackBy: IBucketItem[]): {
        defaultSort: ISortConfig["defaultSort"];
        availableSorts: ISortConfig["availableSorts"];
    };
    private isSortDisabled;
    getSortConfig(referencePoint: IReferencePoint): Promise<ISortConfig>;
    protected renderConfigurationPanel(insight: IInsightDefinition): React.ReactNode;
}
//# sourceMappingURL=PluggableHeatmap.d.ts.map