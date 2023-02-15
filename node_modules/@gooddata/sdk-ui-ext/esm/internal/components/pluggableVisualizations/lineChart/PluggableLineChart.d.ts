import { IInsight, IInsightDefinition } from "@gooddata/sdk-model";
import { IDrillDownContext, IExtendedReferencePoint, IReferencePoint, IVisConstruct, IUiConfig } from "../../../interfaces/Visualization";
import { PluggableBaseChart } from "../baseChart/PluggableBaseChart";
import { ISortConfig } from "../../../interfaces/SortConfig";
/**
 * PluggableLineChart
 *
 * ## Buckets
 *
 * | Name      | Id       | Accepts             |
 * |-----------|----------|---------------------|
 * | Measures  | measures | measures only       |
 * | TrendBy   | trend    | attributes or dates |
 * | SegmentBy | segment  | attributes or dates |
 *
 * ### Bucket axioms
 *
 * - |Measures| ≥ 1
 * - |TrendBy| ≤ 1
 * - |SegmentBy| ≤ 1
 * - |SegmentBy| = 1 ⇒ |Measures| = 1
 * - |SegmentBy| = 0 ⇒ |Measures| ≤ 20
 * - |Measures| ≥ 2 ⇒ |SegmentBy| = 0
 *
 * ## Dimensions
 *
 * The PluggableLineChart always creates two dimensional execution.
 *
 * - |SegmentBy| = 1 ⇒ [[...SegmentBy], [...TrendBy, MeasureGroupIdentifier]]
 * - |SegmentBy| = 0 ⇒ [[MeasureGroupIdentifier], [...TrendBy]]
 *
 * ## Sorts
 *
 * The PluggableLineChart does not use any sorts.
 */
export declare class PluggableLineChart extends PluggableBaseChart {
    constructor(props: IVisConstruct);
    getSupportedPropertiesList(): string[];
    getUiConfig(): IUiConfig;
    getExtendedReferencePoint(referencePoint: IReferencePoint): Promise<IExtendedReferencePoint>;
    getInsightWithDrillDownApplied(source: IInsight, drillDownContext: IDrillDownContext, backendSupportsElementUris: boolean): IInsight;
    getSortConfig(referencePoint: IReferencePoint): Promise<ISortConfig>;
    protected configureBuckets(newReferencePoint: IExtendedReferencePoint): void;
    protected renderConfigurationPanel(insight: IInsightDefinition): void;
    private configureBucketsWithMultipleDates;
    private addFilters;
    private getDefaultAndAvailableSort;
    private isSortDisabled;
}
//# sourceMappingURL=PluggableLineChart.d.ts.map