import { IExecutionFactory } from "@gooddata/sdk-backend-spi";
import { IInsightDefinition } from "@gooddata/sdk-model";
import { IPushData } from "@gooddata/sdk-ui";
import { IExtendedReferencePoint, IReferencePoint, IVisConstruct, IVisProps, IVisualizationOptions } from "../../../interfaces/Visualization";
import { AbstractPluggableVisualization } from "../AbstractPluggableVisualization";
/**
 * PluggableXirr
 *
 * ## Buckets
 *
 * | Name           | Id        | Accepts       |
 * |----------------|-----------|---------------|
 * | Measure        | measures  | measures only |
 * | Date Attribute | attribute | dates only    |
 *
 * ### Bucket axioms
 *
 * - |Measure| = 1
 * - |DateAttribute| = 1
 *
 * ## Dimensions
 *
 * The PluggableXirr always creates one dimensional execution.
 *
 * - ⊤ ⇒ [[MeasureGroupIdentifier, DateAttribute]]
 *
 * ## Sorts
 *
 * The PluggableXirr does not use any sorts.
 */
export declare class PluggableXirr extends AbstractPluggableVisualization {
    private settings?;
    private renderFun;
    constructor(props: IVisConstruct);
    unmount(): void;
    getExtendedReferencePoint: (referencePoint: Readonly<IReferencePoint>) => Promise<IExtendedReferencePoint>;
    getExecution(options: IVisProps, insight: IInsightDefinition, executionFactory: IExecutionFactory): import("@gooddata/sdk-backend-spi").IPreparedExecution;
    protected renderVisualization(options: IVisProps, insight: IInsightDefinition, executionFactory: IExecutionFactory): void;
    protected renderConfigurationPanel(): void;
    private getXirrDimensions;
    private withEmptyAttributeTargets;
    private superPushData;
    protected pushData: (data: IPushData, options?: IVisualizationOptions) => void;
}
//# sourceMappingURL=PluggableXirr.d.ts.map