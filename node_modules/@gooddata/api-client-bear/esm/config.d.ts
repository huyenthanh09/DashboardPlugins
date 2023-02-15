export declare function sanitizeDomain(domain: string | null): string | undefined;
/**
 * Returns sanitized config
 *
 * @returns config with sanitized domain
 */
export declare function sanitizeConfig(config: any): any;
export interface IOriginPackage {
    name: string;
    version: string;
}
export interface IConfigStorage {
    domain?: string;
    originPackage?: IOriginPackage;
    xhrSettings?: {
        headers?: Record<string, string>;
    };
}
/**
 * Config factory
 *
 * @param configStorage - config object
 * @returns SDK config module
 */
export declare class ConfigModule {
    private configStorage;
    constructor(configStorage: IConfigStorage);
    /**
     * Sets custom domain. Parameter is url which has always to be https://
     * (if you don't provide it, we will do it for you).
     *
     * RegExp inspired taken from
     * https://github.com/jarib/google-closure-library/blob/master/closure/goog/string/linkify.js
     * @param domain - valid domain starting with https:// or null for removing
     */
    setCustomDomain(domain: string): void;
    /**
     * Returns current domain
     *
     */
    getCustomDomain(): string | undefined;
    /**
     * Sets JS package and version info
     *
     * @param name - package name
     * @param version - package version (semver)
     * @internal
     */
    setJsPackage(name: string, version: string): void;
    /**
     * Returns JS package and version info
     *
     * @returns with 'name' and 'version' properties
     * @internal
     */
    getJsPackage(): IOriginPackage | undefined;
    setRequestHeader(key: string, value: string): void;
    getRequestHeader(key: string): string | undefined;
}
//# sourceMappingURL=config.d.ts.map