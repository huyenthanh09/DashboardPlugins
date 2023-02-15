import React from "react";
import { IExtendedReferencePoint, IReferencePoint, IVisConstruct } from "../../../interfaces/Visualization";
import { PluggableBaseChart } from "../baseChart/PluggableBaseChart";
import { IInsightDefinition } from "@gooddata/sdk-model";
/**
 * PluggableBubbleChart
 *
 * ## Buckets
 *
 * | Name             | Id                 | Accepts             |
 * |------------------|--------------------|---------------------|
 * | Measure (X-axis) | measures           | measures only       |
 * | Measure (Y-axis) | secondary_measures | measures only       |
 * | Measure (Size)   | tertiary_measures  | measures only       |
 * | ViewBy           | view               | attributes or dates |
 *
 * ### Bucket axioms
 *
 * - |MeasureX| ≤ 1
 * - |MeasureY| ≤ 1
 * - |MeasureSize| ≤ 1
 * - |ViewBy| ≤ 1
 * - |MeasureX| + |MeasureY| + |MeasureSize| ≥ 1
 *
 * ## Dimensions
 *
 * The PluggableBubbleChart always creates the same two dimensional execution.
 *
 * - ⊤ ⇒ [[...ViewBy], [MeasureGroupIdentifier]]
 *
 * ## Sorts
 *
 * The PluggableBubbleChart does not use any sorts.
 */
export declare class PluggableBubbleChart extends PluggableBaseChart {
    constructor(props: IVisConstruct);
    getExtendedReferencePoint(referencePoint: IReferencePoint): Promise<IExtendedReferencePoint>;
    protected renderConfigurationPanel(insight: IInsightDefinition): React.ReactNode;
}
//# sourceMappingURL=PluggableBubbleChart.d.ts.map