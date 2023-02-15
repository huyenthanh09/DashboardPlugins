import { IChartConfig } from "@gooddata/sdk-ui-charts";
import { IInsightDefinition } from "@gooddata/sdk-model";
import { PluggableBaseChart } from "../baseChart/PluggableBaseChart";
import { IExtendedReferencePoint, IReferencePoint, IVisConstruct, IVisProps, IVisualizationProperties, IBucketItem } from "../../../interfaces/Visualization";
import { ISortConfig } from "../../../interfaces/SortConfig";
/**
 * PluggablePieChart
 *
 * ## Buckets
 *
 * | Name     | Id       | Accepts             |
 * |----------|----------|---------------------|
 * | Measures | measures | measures only       |
 * | ViewBy   | view     | attribute or date   |
 *
 * ### Bucket axioms
 *
 * - |ViewBy| ≤ 1
 * - |Measures| ≥ 1 ∧ ≤ 20
 * - |ViewBy| = 1 ⇒ |Measures| = 1
 * - |ViewBy| = 0 ⇒ |Measures| ≥ 1
 *
 * ## Dimensions
 *
 * The PluggablePieChart always creates two dimensional execution.
 *
 * With measures only:
 * - [[], [MeasureGroupIdentifier]]
 * With viewBy:
 * - [[MeasureGroupIdentifier], [ViewBy]]
 *
 * ## Default sorts
 *
 * When Pie Chart is used with measures only, it's sorted by their order by default.
 * When Pie Chart chart is used with viewBy attribute or date, it's sorted by the values of the measure by default.
 *
 * Default sort behavior can be overriden by sortBy option.
 *
 */
export declare class PluggablePieChart extends PluggableBaseChart {
    constructor(props: IVisConstruct);
    getExtendedReferencePoint(referencePoint: IReferencePoint): Promise<IExtendedReferencePoint>;
    protected getDefaultAndAvailableSort(measures: IBucketItem[], viewBy: IBucketItem[]): {
        defaultSort: ISortConfig["defaultSort"];
        availableSorts: ISortConfig["availableSorts"];
    };
    private isSortDisabled;
    getSortConfig(referencePoint: IReferencePoint): Promise<ISortConfig>;
    protected renderConfigurationPanel(insight: IInsightDefinition): void;
    protected buildVisualizationConfig(options: IVisProps, supportedControls: IVisualizationProperties): IChartConfig;
}
//# sourceMappingURL=PluggablePieChart.d.ts.map