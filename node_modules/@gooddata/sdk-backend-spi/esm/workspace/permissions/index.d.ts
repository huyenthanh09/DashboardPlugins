import { IWorkspacePermissions } from "@gooddata/sdk-model";
/**
 * Service to query workspace permissions
 *
 * @public
 */
export interface IWorkspacePermissionsService {
    /**
     * Request workspace permissions for the currently authenticated user
     *
     * @returns promise of user workspace permissions
     */
    getPermissionsForCurrentUser(): Promise<IWorkspacePermissions>;
}
//# sourceMappingURL=index.d.ts.map