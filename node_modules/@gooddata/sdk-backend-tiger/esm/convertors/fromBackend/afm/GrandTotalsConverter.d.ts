import { DataValue, IExecutionDefinition, IResultHeader } from "@gooddata/sdk-model";
import { DimensionHeader, ExecutionResultGrandTotal } from "@gooddata/api-client-tiger";
/**
 * Transform the grand total structure from Tiger API into a form acceptable by the SDK.
 * @param grandTotals - Grand total structure from Tiger API
 * @param definition - Original Execution definition from the SDK
 * @param dataHeaderItems - Headers for the main result structure from the Tiger API
 * @param transformDimensionHeaders - A function to transform grand total dimension headers into SDK compatible headers
 */
export declare function transformGrandTotalData(grandTotals: ExecutionResultGrandTotal[], definition: IExecutionDefinition, dataHeaderItems: IResultHeader[][][], transformDimensionHeaders: (headers: DimensionHeader[]) => IResultHeader[][][]): DataValue[][][] | undefined;
//# sourceMappingURL=GrandTotalsConverter.d.ts.map