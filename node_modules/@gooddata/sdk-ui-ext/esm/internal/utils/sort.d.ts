import { IntlShape } from "react-intl";
import { IBucket, IInsightDefinition, IMeasure, SortDirection, ISortItem, ISettings } from "@gooddata/sdk-model";
import { IBucketItem, IExtendedReferencePoint, IVisualizationProperties } from "../interfaces/Visualization";
import { IAvailableSortsGroup } from "../interfaces/SortConfig";
export declare function getAttributeSortItem(identifier: string, direction?: SortDirection, aggregation?: boolean): ISortItem;
export declare function getDefaultTreemapSortFromBuckets(viewBy: IBucket, segmentBy: IBucket, measures: IMeasure[]): ISortItem[];
/**
 * Defaults created by this helper need to be the same
 * as defaults created by method getDefaultAndAvailableSort in each PV's class
 */
export declare function createSorts(type: string, insight: IInsightDefinition, supportedControls: IVisualizationProperties, featureFlags: ISettings): ISortItem[];
export declare function getBucketItemIdentifiers(referencePoint: IExtendedReferencePoint): string[];
export declare function removeSort(referencePoint: Readonly<IExtendedReferencePoint>): IExtendedReferencePoint;
/**
 * Validates the previous sort in context of new available sorts for new buckets state.
 * Keeps current sort item if valid.
 * If current sort is not valid it is replaced by the most similar sort or default one for current moment.
 * - metric sort replaced by area sort if available
 * - area sort replaced by metric sort if available
 * - attribute sort used regardless its position
 * @param previousAvailableSorts - available sorts for previous setup (buckets content, set properties)
 * @param previousSort - current sorts to validate
 * @param availableSorts - available sorts for current moment (buckets content, set properties)
 * @param defaultSort - default sorts for current moment
 */
export declare function validateCurrentSort(previousAvailableSorts?: IAvailableSortsGroup[], previousSort?: ISortItem[], availableSorts?: IAvailableSortsGroup[], defaultSort?: ISortItem[]): ISortItem[];
export declare function getCustomSortDisabledExplanation(relevantMeasures: IBucketItem[], relevantAttributes: IBucketItem[], intl: IntlShape): string;
//# sourceMappingURL=sort.d.ts.map