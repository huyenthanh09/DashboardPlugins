import { ISettings, IInsight, IInsightDefinition } from "@gooddata/sdk-model";
import { IVisualizationSizeInfo, IVisualizationDescriptor, PluggableVisualizationFactory, IVisualizationMeta } from "../../../interfaces/VisualizationDescriptor";
import { IFluidLayoutDescriptor } from "../../../interfaces/LayoutDescriptor";
export declare class HeadlineDescriptor implements IVisualizationDescriptor {
    getFactory(): PluggableVisualizationFactory;
    getSizeInfo(insight: IInsightDefinition, layoutDescriptor: IFluidLayoutDescriptor, settings: ISettings): IVisualizationSizeInfo;
    private getDefaultHeight;
    private getMinHeight;
    private getMaxHeight;
    applyDrillDown(insight: IInsight): IInsight;
    getEmbeddingCode: (insight: IInsightDefinition, config?: import("../../../interfaces/VisualizationDescriptor").IEmbeddingCodeConfig) => string;
    getMeta(): IVisualizationMeta;
}
//# sourceMappingURL=HeadlineDescriptor.d.ts.map