import { IInsightDefinition } from "@gooddata/sdk-model";
/**
 * The function fills the format of the measures that does not have it set.
 *
 * @param insight - insight or insight definition that must be processed.
 *
 * @returns a copy of insight with auto-generated format for measures
 *
 * @internal
 */
export declare function fillMissingFormats<T extends IInsightDefinition>(insight: T): T;
//# sourceMappingURL=fillMissingFormats.d.ts.map