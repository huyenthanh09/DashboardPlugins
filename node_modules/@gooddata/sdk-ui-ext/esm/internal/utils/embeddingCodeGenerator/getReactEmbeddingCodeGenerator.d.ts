import { IInsightDefinition } from "@gooddata/sdk-model";
import { IEmbeddingCodeConfig } from "../../interfaces/VisualizationDescriptor";
import { IEmbeddingCodeGeneratorSpecification } from "./types";
/**
 * Creates a React embedding code generator.
 *
 * @remarks
 * This abstracts away much of the particular-pluggable-visualization-type-agnostic logic,
 * taking the visualization-type-specific information in the `specification` parameter.
 *
 * @param specification - specification of the code generator
 * @returns function that can be used to obtain React embedding code
 */
export declare function getReactEmbeddingCodeGenerator<TProps extends object>(specification: IEmbeddingCodeGeneratorSpecification<TProps>): (insight: IInsightDefinition, config?: IEmbeddingCodeConfig) => string;
//# sourceMappingURL=getReactEmbeddingCodeGenerator.d.ts.map