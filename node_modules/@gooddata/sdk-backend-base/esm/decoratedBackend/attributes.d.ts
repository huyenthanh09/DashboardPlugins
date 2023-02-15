import { IElementsQueryFactory, IWorkspaceAttributesService } from "@gooddata/sdk-backend-spi";
import { IAttributeDisplayFormMetadataObject, IAttributeMetadataObject, IMetadataObject, ObjRef } from "@gooddata/sdk-model";
/**
 * @alpha
 */
export declare abstract class DecoratedWorkspaceAttributesService implements IWorkspaceAttributesService {
    protected readonly decorated: IWorkspaceAttributesService;
    protected constructor(decorated: IWorkspaceAttributesService);
    elements(): IElementsQueryFactory;
    getAttributeDisplayForm(ref: ObjRef): Promise<IAttributeDisplayFormMetadataObject>;
    getAttributeDisplayForms(refs: ObjRef[]): Promise<IAttributeDisplayFormMetadataObject[]>;
    getAttribute(ref: ObjRef): Promise<IAttributeMetadataObject>;
    getAttributeByDisplayForm(ref: ObjRef): Promise<IAttributeMetadataObject>;
    getAttributes(refs: ObjRef[]): Promise<IAttributeMetadataObject[]>;
    getCommonAttributes(attributeRefs: ObjRef[]): Promise<ObjRef[]>;
    getCommonAttributesBatch(attributesRefsBatch: ObjRef[][]): Promise<ObjRef[][]>;
    getAttributeDatasetMeta(ref: ObjRef): Promise<IMetadataObject>;
}
//# sourceMappingURL=attributes.d.ts.map