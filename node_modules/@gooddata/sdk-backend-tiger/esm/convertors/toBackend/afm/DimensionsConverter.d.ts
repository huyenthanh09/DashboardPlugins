import { Dimension } from "@gooddata/api-client-tiger";
import { IExecutionDefinition } from "@gooddata/sdk-model";
export declare function dimensionLocalIdentifier(idx: number): string;
/**
 * Converts data in execution definition into dimension specifications for tiger. The tiger specifics
 * are that dimensions have localIds and that sorting is specified per-dimension.
 *
 * @param def - execution definition to convert
 */
export declare function convertDimensions(def: IExecutionDefinition): Dimension[];
//# sourceMappingURL=DimensionsConverter.d.ts.map