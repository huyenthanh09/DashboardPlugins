import { IInsightDefinition } from "@gooddata/sdk-model";
import { PluggableColumnBarCharts } from "../PluggableColumnBarCharts";
import { IReferencePoint, IVisConstruct } from "../../../interfaces/Visualization";
import { ISortConfig } from "../../../interfaces/SortConfig";
/**
 * PluggableBarChart
 *
 * ## Buckets
 *
 * | Name     | Id       | Accepts             |
 * |----------|----------|---------------------|
 * | Measures | measures | measures only       |
 * | ViewBy   | view     | attributes or dates |
 * | StackBy  | stack    | attributes or dates |
 *
 * ### Bucket axioms
 *
 * - |Measures| ≥ 1
 * - |ViewBy| ≤ 2
 * - |StackBy| ≤ 1
 * - |StackBy| = 1 ⇒ |Measures| ≤ 1
 * - |StackBy| = 0 ⇒ |Measures| ≤ 20
 * - |Measures| ≥ 2 ⇒ |StackBy| = 0
 * - ∀ a, b ∈ ViewBy (isDate(a) ∧ isDate(b) ⇒ dateDataset(a) = dateDataset(b))
 *
 * ## Dimensions
 *
 * The PluggableBarChart always creates two dimensional execution.
 *
 * - |StackBy| != 0 ⇒ [[StackBy[0]], [...ViewBy, MeasureGroupIdentifier]]
 * - |StackBy| = 0 ⇒ [[MeasureGroupIdentifier], [...ViewBy]]
 *
 * ## Sorts
 *
 * Unless the user specifies otherwise, the sorts used by default are:
 *
 * - |ViewBy| = 2 ∧ |Measures| ≥ 2 ∧ ¬stackMeasures ⇒ [attributeAreaSort(ViewBy[0]), measureSort(Measures[0])]
 * - |ViewBy| = 2 ∧ ¬(|Measures| ≥ 2 ∧ ¬stackMeasures) ⇒ [attributeAreaSort(ViewBy[0]), attributeAreaSort(ViewBy[1])]
 * - |ViewBy| = 1 ∧ (|StackBy| = 1 ∨ stackMeasures) ⇒ [attributeAreaSort(ViewBy[0])]
 * - |ViewBy| = 1 ∧ ¬(|StackBy| = 1 ∨ stackMeasures) ∧ |Measures| ≥ 1 ⇒ [measureSort(Measures[0])]
 *
 * In any other case the sorts are not used.
 *
 * If "enableChartsSorting" is enabled, the sorts can be changed by the user.
 */
export declare class PluggableBarChart extends PluggableColumnBarCharts {
    constructor(props: IVisConstruct);
    getSupportedPropertiesList(): string[];
    protected renderConfigurationPanel(insight: IInsightDefinition): void;
    protected getDefaultAndAvailableSort(referencePoint: IReferencePoint, canSortStackTotalValue: boolean): {
        defaultSort: ISortConfig["defaultSort"];
        availableSorts: ISortConfig["availableSorts"];
    };
    private isSortDisabled;
    getSortConfig(referencePoint: IReferencePoint): Promise<ISortConfig>;
}
//# sourceMappingURL=PluggableBarChart.d.ts.map