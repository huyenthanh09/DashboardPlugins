import { IInsightDefinition, ISettings } from "@gooddata/sdk-model";
import { IVisualizationSizeInfo, PluggableVisualizationFactory } from "../../interfaces/VisualizationDescriptor";
import { IFluidLayoutDescriptor } from "../../interfaces/LayoutDescriptor";
import { BaseChartDescriptor } from "./baseChart/BaseChartDescriptor";
export declare abstract class BigChartDescriptor extends BaseChartDescriptor {
    abstract getFactory(): PluggableVisualizationFactory;
    getSizeInfo(_insight: IInsightDefinition, layoutDescriptor: IFluidLayoutDescriptor, settings: ISettings): IVisualizationSizeInfo;
    protected getMinHeight(enableCustomHeight: boolean): number;
}
//# sourceMappingURL=BigChartDescriptor.d.ts.map