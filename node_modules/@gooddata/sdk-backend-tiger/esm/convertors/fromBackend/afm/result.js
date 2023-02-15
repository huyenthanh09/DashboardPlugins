export function transformExecutionResult(result, transformDimensionHeaders) {
    return {
        // in API is data typed as Array<object>
        data: result.data,
        headerItems: transformDimensionHeaders(result.dimensionHeaders),
        offset: result.paging.offset,
        count: result.paging.count,
        total: result.paging.total,
    };
}
//# sourceMappingURL=result.js.map