import { IBackendCapabilities, IExecutionFactory } from "@gooddata/sdk-backend-spi";
import { IDimension, IInsight, IInsightDefinition, ISettings } from "@gooddata/sdk-model";
import { VisualizationEnvironment } from "@gooddata/sdk-ui";
import { ColumnWidthItem, IPivotTableConfig } from "@gooddata/sdk-ui-pivot";
import { IBucketItem, IBucketOfFun, IDrillDownContext, IExtendedReferencePoint, IGdcConfig, IReferencePoint, IVisConstruct, IVisProps } from "../../../interfaces/Visualization";
import { AbstractPluggableVisualization } from "../AbstractPluggableVisualization";
export declare const getColumnAttributes: (buckets: IBucketOfFun[]) => IBucketItem[];
export declare const getRowAttributes: (buckets: IBucketOfFun[]) => IBucketItem[];
/**
 * PluggablePivotTable
 *
 * ## Buckets
 *
 * | Name     | Id         | Accepts             |
 * |----------|------------|---------------------|
 * | Measures | measures   | measures only       |
 * | Rows     | attributes | attributes or dates |
 * | Columns  | columns    | attributes or dates |
 *
 * The Rows and Columns can each accept one date at most, unless "enableMultipleDates" FF is on.
 *
 * ### Bucket axioms
 *
 * - |Measures| ≤ 20
 * - |Rows| ≤ 20
 * - |Columns| ≤ 20
 * - |Measures| + |Rows| + |Columns| ≥ 1
 *
 * ## Dimensions
 *
 * The PluggablePivotTable always creates two dimensional execution.
 *
 * - |Measures| ≥ 1 ⇒ [[...Rows], [...Columns, MeasureGroupIdentifier]]
 * - |Measures| = 0 ⇒ [[...Rows], [...Columns]]
 *
 * ## Sorts
 *
 * Unless the user specifies otherwise, the sorts used by default are:
 *
 * - |Rows| ≥ 1 ⇒ [attributeSort(Rows[0])]
 */
export declare class PluggablePivotTable extends AbstractPluggableVisualization {
    private environment;
    private renderFun;
    private readonly settings;
    private backendCapabilities;
    constructor(props: IVisConstruct);
    unmount(): void;
    getExtendedReferencePoint(referencePoint: IReferencePoint, previousReferencePoint?: IReferencePoint): Promise<IExtendedReferencePoint>;
    getInsightWithDrillDownApplied(sourceVisualization: IInsight, drillDownContext: IDrillDownContext, backendSupportsElementUris: boolean): IInsight;
    getExecution(options: IVisProps, insight: IInsightDefinition, executionFactory: IExecutionFactory): import("@gooddata/sdk-backend-spi").IPreparedExecution;
    private createCorePivotTableProps;
    protected updateInstanceProperties(options: IVisProps, insight: IInsightDefinition, insightPropertiesMeta: any): void;
    protected renderVisualization(options: IVisProps, insight: IInsightDefinition, executionFactory: IExecutionFactory): void;
    protected renderConfigurationPanel(insight: IInsightDefinition): void;
    protected getDimensions(insight: IInsightDefinition): IDimension[];
    private adaptPropertiesToInsight;
    private sanitizeColumnWidths;
    private onColumnResized;
    private handlePushData;
}
/**
 * Given plug viz GDC config, current environment and platform settings, this creates pivot table config.
 *
 * @internal
 */
export declare function createPivotTableConfig(config: IGdcConfig, environment: VisualizationEnvironment, settings: ISettings, capabilities: IBackendCapabilities, columnWidths: ColumnWidthItem[]): IPivotTableConfig;
//# sourceMappingURL=PluggablePivotTable.d.ts.map