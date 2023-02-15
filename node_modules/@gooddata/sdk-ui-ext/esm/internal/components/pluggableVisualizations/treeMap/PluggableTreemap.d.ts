import { IDrillDownContext, IExtendedReferencePoint, IReferencePoint, IVisConstruct } from "../../../interfaces/Visualization";
import { PluggableBaseChart } from "../baseChart/PluggableBaseChart";
import { IInsight, IInsightDefinition } from "@gooddata/sdk-model";
/**
 * PluggableTreemap
 *
 * ## Buckets
 *
 * | Name      | Id       | Accepts             |
 * |-----------|----------|---------------------|
 * | Measures  | measures | measures only       |
 * | ViewBy    | view     | attributes or dates |
 * | SegmentBy | segment  | attributes or dates |
 *
 * ### Bucket axioms
 *
 * - |Measures| ≥ 1
 * - |ViewBy| ≥ 1 ⇒ |Measures| ≤ 1
 * - |ViewBy| = 0 ⇒ |Measures| ≤ 20
 * - |Measures| ≥ 1 ⇒ |ViewBy| = 0
 * - |Measures| ≤ 1 ⇒ |ViewBy| ≤ 1
 * - |SegmentBy| ≤ 1
 *
 * ## Dimensions
 *
 * The PluggableTreemap always creates two dimensional execution.
 *
 * - |ViewBy| + |SegmentBy| = 1 ⇒ [[MeasureGroupIdentifier], [...ViewBy, ...SegmentBy]]
 * - |ViewBy| + |SegmentBy| != 1 ⇒ [[...ViewBy, ...SegmentBy], [MeasureGroupIdentifier]]
 *
 * ## Sorts
 *
 * Unless the user specifies otherwise, the sorts used by default are:
 *
 * - |ViewBy| ≥ 1 ∧ |SegmentBy| ≥ 1 ⇒ [attributeSort(ViewBy[0]), measureSort(...Measures)]
 */
export declare class PluggableTreemap extends PluggableBaseChart {
    constructor(props: IVisConstruct);
    private getBucketItemsWithMultipleDates;
    private getBucketItems;
    protected configureBuckets(newReferencePoint: IExtendedReferencePoint): void;
    private getTreemapUIConfig;
    getExtendedReferencePoint(referencePoint: IReferencePoint): Promise<IExtendedReferencePoint>;
    private addFilters;
    getInsightWithDrillDownApplied(source: IInsight, drillDownContext: IDrillDownContext, backendSupportsElementUris: boolean): IInsight;
    protected renderConfigurationPanel(insight: IInsightDefinition): void;
}
//# sourceMappingURL=PluggableTreemap.d.ts.map