import { IExtendedReferencePoint, IReferencePoint, IVisConstruct } from "../../../interfaces/Visualization";
import { PluggableBaseChart } from "../baseChart/PluggableBaseChart";
import { IInsightDefinition } from "@gooddata/sdk-model";
/**
 * PluggableScatterPlot
 *
 * ## Buckets
 *
 * | Name             | Id                 | Accepts             |
 * |------------------|--------------------|---------------------|
 * | Measure (X-axis) | measures           | measures only       |
 * | Measure (Y-axis) | secondary_measures | measures only       |
 * | ViewBy           | attribute          | attributes or dates |
 *
 * ### Bucket axioms
 *
 * - |MeasureX| ≤ 1
 * - |MeasureY| ≤ 1
 * - |ViewBy| ≤ 1
 * - |MeasureX| + |MeasureY| ≥ 1
 *
 * ## Dimensions
 *
 * The PluggableScatterPlot always creates the same two dimensional execution.
 *
 * - ⊤ ⇒ [[...ViewBy], [MeasureGroupIdentifier]]
 *
 * ## Sorts
 *
 * The PluggableScatterPlot does not use any sorts.
 */
export declare class PluggableScatterPlot extends PluggableBaseChart {
    constructor(props: IVisConstruct);
    getExtendedReferencePoint(referencePoint: IReferencePoint): Promise<IExtendedReferencePoint>;
    protected renderConfigurationPanel(insight: IInsightDefinition): void;
}
//# sourceMappingURL=PluggableScatterPlot.d.ts.map