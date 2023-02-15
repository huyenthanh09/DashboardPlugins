import { ObjRef } from "@gooddata/sdk-model";
import { MetadataGetEntitiesWorkspaceParams } from "@gooddata/api-client-tiger";
export declare function tagsToRsqlFilter({ includeTags, excludeTags, }: {
    includeTags: ObjRef[];
    excludeTags: ObjRef[];
}): string;
export declare function addRsqlFilterToParams<T extends MetadataGetEntitiesWorkspaceParams>(params: T, filter: string): T;
//# sourceMappingURL=rsqlFilter.d.ts.map