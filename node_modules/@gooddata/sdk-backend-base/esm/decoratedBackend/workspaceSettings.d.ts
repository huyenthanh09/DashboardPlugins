import { IUserWorkspaceSettings, IWorkspaceSettings, IWorkspaceSettingsService } from "@gooddata/sdk-backend-spi";
/**
 * @alpha
 */
export declare abstract class DecoratedWorkspaceSettingsService implements IWorkspaceSettingsService {
    protected decorated: IWorkspaceSettingsService;
    protected constructor(decorated: IWorkspaceSettingsService);
    getSettings(): Promise<IWorkspaceSettings>;
    getSettingsForCurrentUser(): Promise<IUserWorkspaceSettings>;
    setLocale(locale: string): Promise<void>;
}
//# sourceMappingURL=workspaceSettings.d.ts.map