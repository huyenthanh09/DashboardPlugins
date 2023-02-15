import { IExecutionFactory } from "@gooddata/sdk-backend-spi";
import { IInsightDefinition } from "@gooddata/sdk-model";
import { IBucketItem, IBucketOfFun, IExtendedReferencePoint, IReferencePoint, IVisConstruct, IVisProps } from "../../../interfaces/Visualization";
import { AbstractPluggableVisualization } from "../AbstractPluggableVisualization";
/**
 * PluggableHeadline
 *
 * ## Buckets
 *
 * | Name             | Id                 | Accepts       |
 * |------------------|--------------------|---------------|
 * | MeasurePrimary   | measures           | measures only |
 * | MeasureSecondary | secondary_measures | measures only |
 *
 * ### Bucket axioms
 *
 * - |MeasurePrimary| = 1
 * - |MeasureSecondary| ≤ 1
 *
 * ## Dimensions
 *
 * The PluggableHeadline always creates one dimensional execution.
 *
 * - ⊤ ⇒ [[MeasureGroupIdentifier]]
 *
 * ## Sorts
 *
 * The PluggableHeadline does not use any sorts.
 */
export declare class PluggableHeadline extends AbstractPluggableVisualization {
    private readonly settings?;
    private readonly renderFun;
    constructor(props: IVisConstruct);
    unmount(): void;
    getExtendedReferencePoint(referencePoint: Readonly<IReferencePoint>): Promise<IExtendedReferencePoint>;
    getExecution(options: IVisProps, insight: IInsightDefinition, executionFactory: IExecutionFactory): import("@gooddata/sdk-backend-spi").IPreparedExecution;
    protected checkBeforeRender(insight: IInsightDefinition): boolean;
    protected renderVisualization(options: IVisProps, insight: IInsightDefinition, executionFactory: IExecutionFactory): void;
    protected renderConfigurationPanel(): void;
    protected mergeDerivedBucketItems(referencePoint: IReferencePoint, bucket: IBucketOfFun, newDerivedBucketItems: IBucketItem[]): IBucketItem[];
}
//# sourceMappingURL=PluggableHeadline.d.ts.map