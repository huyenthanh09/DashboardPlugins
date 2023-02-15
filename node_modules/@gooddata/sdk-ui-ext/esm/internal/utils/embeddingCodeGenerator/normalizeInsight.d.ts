import { IInsightDefinition } from "@gooddata/sdk-model";
/**
 * Creates an insight that has reasonable local ids instead of potentially long illegible ones in the original insight.
 *
 * @privateRemarks
 * Makes use of the {@link @gooddata/sdk-backed-base#Normalizer} to do most of the work.
 *
 * @param insight - the insight to "normalize"
 * @returns always a new instance
 * @internal
 */
export declare function normalizeInsight(insight: IInsightDefinition): IInsightDefinition;
//# sourceMappingURL=normalizeInsight.d.ts.map