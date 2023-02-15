// (C) 2021-2022 GoodData Corporation
import { isDashboardAttributeFilter, isDashboardDateFilter, } from "@gooddata/sdk-model";
/**
 * Tests whether the provided object is an instance of {@link BrokenAlertDateFilterInfo}
 *
 * @param item - object to test
 *
 * @alpha
 */
export function isBrokenAlertDateFilterInfo(item) {
    return isDashboardDateFilter(item.alertFilter);
}
/**
 * Tests whether the provided object is an instance of {@link BrokenAlertAttributeFilterInfo}
 *
 * @param item - object to test
 *
 * @alpha
 */
export function isBrokenAlertAttributeFilterInfo(item) {
    return isDashboardAttributeFilter(item.alertFilter);
}
//# sourceMappingURL=alertTypes.js.map