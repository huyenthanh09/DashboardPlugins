// (C) 2022 GoodData Corporation
import { serializeObjRef } from "@gooddata/sdk-model";
/**
 * Wrapper around {@link @gooddata/sdk-model#serializeObjRef} that can handle undefined values.
 *
 * @param ref - ref to serialize
 */
export function safeSerializeObjRef(ref) {
    return ref ? serializeObjRef(ref) : "";
}
//# sourceMappingURL=safeSerializeObjRef.js.map