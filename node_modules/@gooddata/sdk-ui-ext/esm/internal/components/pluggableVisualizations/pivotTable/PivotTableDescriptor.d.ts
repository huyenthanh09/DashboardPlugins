import { IInsight, IInsightDefinition, ISettings } from "@gooddata/sdk-model";
import { IVisualizationDescriptor, IVisualizationMeta, IVisualizationSizeInfo, PluggableVisualizationFactory } from "../../../interfaces/VisualizationDescriptor";
import { IFluidLayoutDescriptor } from "../../../interfaces/LayoutDescriptor";
import { BaseChartDescriptor } from "../baseChart/BaseChartDescriptor";
import { IDrillDownContext } from "../../../interfaces/Visualization";
export declare class PivotTableDescriptor extends BaseChartDescriptor implements IVisualizationDescriptor {
    getFactory(): PluggableVisualizationFactory;
    getSizeInfo(_insight: IInsightDefinition, layoutDescriptor: IFluidLayoutDescriptor, settings: ISettings): IVisualizationSizeInfo;
    applyDrillDown(insight: IInsight, drillDownContext: IDrillDownContext, backendSupportsElementUris: boolean): IInsight;
    getEmbeddingCode: (insight: IInsightDefinition, config?: import("../../../interfaces/VisualizationDescriptor").IEmbeddingCodeConfig) => string;
    getMeta(): IVisualizationMeta;
}
//# sourceMappingURL=PivotTableDescriptor.d.ts.map