import React from "react";
import { PluggableBaseChart } from "../baseChart/PluggableBaseChart";
import { IReferencePoint, IExtendedReferencePoint, IVisConstruct, IBucketItem, IBucketOfFun, IDrillDownContext, IUiConfig } from "../../../interfaces/Visualization";
import { IInsight, IInsightDefinition } from "@gooddata/sdk-model";
import { ISortConfig } from "../../../interfaces/SortConfig";
/**
 * PluggableBulletChart
 *
 * ## Buckets
 *
 * | Name                  | Id                 | Accepts             |
 * |-----------------------|--------------------|---------------------|
 * | Measure (Primary)     | measures           | measures only       |
 * | Measure (Target)      | secondary_measures | measures only       |
 * | Measure (Comparative) | tertiary_measures  | measures only       |
 * | ViewBy                | view               | attributes or dates |
 *
 * ### Bucket axioms
 *
 * - |MeasurePrimary| = 1
 * - |MeasureTarget| ≤ 1
 * - |MeasureComparative| ≤ 1
 * - |ViewBy| ≤ 1
 *
 * ## Dimensions
 *
 * The PluggableBulletChart always creates the same two dimensional execution.
 *
 * - ⊤ ⇒ [[MeasureGroupIdentifier], [...ViewBy]]
 *
 * ## Sorts
 *
 * The PluggableBulletChart does not use any sorts.
 */
export declare class PluggableBulletChart extends PluggableBaseChart {
    constructor(props: IVisConstruct);
    getUiConfig(): IUiConfig;
    getExtendedReferencePoint(referencePoint: IReferencePoint): Promise<IExtendedReferencePoint>;
    private addFiltersForBullet;
    getInsightWithDrillDownApplied(source: IInsight, drillDownContext: IDrillDownContext, backendSupportsElementUris: boolean): IInsight;
    protected renderConfigurationPanel(insight: IInsightDefinition): React.ReactNode;
    protected mergeDerivedBucketItems(referencePoint: IReferencePoint, bucket: IBucketOfFun, newDerivedBucketItems: IBucketItem[]): IBucketItem[];
    protected checkBeforeRender(insight: IInsightDefinition): boolean;
    private isSortDisabled;
    private getDefaultAndAvailableSort;
    getSortConfig(referencePoint: IReferencePoint): Promise<ISortConfig>;
}
//# sourceMappingURL=PluggableBulletChart.d.ts.map