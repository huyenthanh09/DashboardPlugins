/**
 * Type guard checking whether the object is an instance of {@link IElementsQueryOptionsElementsByValue}.
 *
 * @public
 */
export function isElementsQueryOptionsElementsByValue(obj) {
    return !!obj && !!obj.values;
}
/**
 * Type guard checking whether the object is an instance of {@link IElementsQueryOptionsElementsByPrimaryDisplayFormValue}.
 *
 * @public
 */
export function isElementsQueryOptionsElementsByPrimaryDisplayFormValue(obj) {
    return !!obj && !!obj.primaryValues;
}
/**
 * Type guard checking whether the object is an instance of {@link IElementsQueryOptionsElementsByValue} or {@link IElementsQueryOptionsElementsByPrimaryDisplayFormValue}.
 *
 * @public
 */
export function isValueBasedElementsQueryOptionsElements(obj) {
    return (isElementsQueryOptionsElementsByValue(obj) ||
        isElementsQueryOptionsElementsByPrimaryDisplayFormValue(obj));
}
//# sourceMappingURL=index.js.map