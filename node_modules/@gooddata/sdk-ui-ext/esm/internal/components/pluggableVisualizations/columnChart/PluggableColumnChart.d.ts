import { PluggableColumnBarCharts } from "../PluggableColumnBarCharts";
import { IVisConstruct, IReferencePoint } from "../../../interfaces/Visualization";
import { ISortConfig } from "../../../interfaces/SortConfig";
/**
 * PluggableColumnChart
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
 * The PluggableColumnChart always creates two dimensional execution.
 *
 * - |StackBy| != 0 ⇒ [[StackBy[0]], [...ViewBy, MeasureGroupIdentifier]]
 * - |StackBy| = 0 ⇒ [[MeasureGroupIdentifier], [...ViewBy]]
 *
 * ##  Sorts
 *
 * The PluggableColumnChart does not use any sorts.
 *
 * If "enableChartsSorting" is enabled, the sorts can be changed by the user.
 */
export declare class PluggableColumnChart extends PluggableColumnBarCharts {
    constructor(props: IVisConstruct);
    getSupportedPropertiesList(): string[];
    protected getDefaultAndAvailableSort(referencePoint: IReferencePoint, canSortStackTotalValue: boolean): {
        defaultSort: ISortConfig["defaultSort"];
        availableSorts: ISortConfig["availableSorts"];
    };
    private isSortDisabled;
    getSortConfig(referencePoint: IReferencePoint): Promise<ISortConfig>;
}
//# sourceMappingURL=PluggableColumnChart.d.ts.map