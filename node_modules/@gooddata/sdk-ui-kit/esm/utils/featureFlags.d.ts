import { ISettings } from "@gooddata/sdk-model";
/**
 * @internal
 */
export declare function shouldHidePPExperience(featureFlags: ISettings): boolean;
/**
 * @internal
 */
export declare function isFreemiumEdition(platformEdition: string | undefined): boolean;
/**
 * @internal
 */
export declare function generateSupportUrl(projectId?: string, sessionId?: string, userEmail?: string, url?: string): string;
/**
 * @internal
 */
export declare function shouldEnableNewNavigation(featureFlags: ISettings): boolean;
//# sourceMappingURL=featureFlags.d.ts.map