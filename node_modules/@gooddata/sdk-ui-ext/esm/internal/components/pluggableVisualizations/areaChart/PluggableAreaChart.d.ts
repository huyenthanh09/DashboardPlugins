import { IInsight, IInsightDefinition } from "@gooddata/sdk-model";
import { IDrillDownContext, IExtendedReferencePoint, IReferencePoint, IUiConfig, IVisConstruct, IVisProps } from "../../../interfaces/Visualization";
import { PluggableBaseChart } from "../baseChart/PluggableBaseChart";
import { ISortConfig } from "../../../interfaces/SortConfig";
/**
 * PluggableAreaChart
 *
 * ## Buckets
 *
 * | Name     | Id       | Accepts             |
 * |----------|----------|---------------------|
 * | Measures | measures | measures only       |
 * | ViewBy   | view     | attributes or dates |
 * | StackBy  | stack    | attributes only     |
 *
 * The ViewBy can accept one date at most, unless "enableMultipleDates" FF is on.
 *
 * ### Bucket axioms
 *
 * - |Measures| ≥ 1
 * - |ViewBy| ≤ 2
 * - |StackBy| ≤ 1
 * - |ViewBy| + |StackBy| ≤ 2
 * - |ViewBy| + |StackBy| = 2 ⇒ |Measures| ≤ 1
 * - |ViewBy| + |StackBy| \< 2 ⇒ |Measures| ≤ 20
 *
 * ## Dimensions
 *
 * The PluggableAreaChart always creates two dimensional execution.
 *
 * - |StackBy| = 1 ∧ |ViewBy| ≥ 1 ⇒ [[StackBy[0]], [ViewBy[0], MeasureGroupIdentifier]]
 * - |StackBy| = 1 ∧ |ViewBy| = 0 ⇒ [[StackBy[0]], [MeasureGroupIdentifier]]
 * - |StackBy| = 0 ∧ |ViewBy| = 2 ⇒ [[ViewBy[1]], [ViewBy[0], MeasureGroupIdentifier]]
 * - |StackBy| = 0 ∧ |ViewBy| = 1 ⇒ [[MeasureGroupIdentifier], [ViewBy[0]]]
 * - |StackBy| = 0 ∧ |ViewBy| = 0 ⇒ [[MeasureGroupIdentifier], []]]
 *
 * ## Sorts
 *
 * Unless the user specifies otherwise, PluggableAreaChart does not use any sorts.
 *
 */
export declare class PluggableAreaChart extends PluggableBaseChart {
    constructor(props: IVisConstruct);
    getUiConfig(): IUiConfig;
    getExtendedReferencePoint(referencePoint: IReferencePoint): Promise<IExtendedReferencePoint>;
    getInsightWithDrillDownApplied(source: IInsight, drillDownContext: IDrillDownContext, backendSupportsElementUris: boolean): IInsight;
    getSortConfig(referencePoint: IReferencePoint): Promise<ISortConfig>;
    protected updateInstanceProperties(options: IVisProps, insight: IInsightDefinition, insightPropertiesMeta: any): void;
    protected configureBuckets(extendedReferencePoint: IExtendedReferencePoint): void;
    protected getSupportedPropertiesList(): string[];
    protected renderConfigurationPanel(insight: IInsightDefinition): void;
    private addFilters;
    private updateCustomSupportedProperties;
    private addSupportedProperties;
    private getAllAttributes;
    private getAllAttributesWithoutDate;
    private filterStackItems;
    private getBucketItems;
    private getViewByMaxItemCount;
    private getBucketItemsWithMultipleDates;
    private getDefaultAndAvailableSort;
    private isSortDisabled;
}
//# sourceMappingURL=PluggableAreaChart.d.ts.map