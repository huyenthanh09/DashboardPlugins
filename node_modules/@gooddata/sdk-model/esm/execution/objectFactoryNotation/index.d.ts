/**
 * Returns a code for generating the provided input using convenience factory methods where possible.
 * @param data - data to return the generating code for
 * @param additionalConversion - specify other conversion that will be tried before falling back to standard stringify. return undefined when you want to fall back to standard stringify.
 * @public
 */
export declare const factoryNotationFor: (data: any, additionalConversion?: ((data: any) => string | undefined) | undefined) => string;
//# sourceMappingURL=index.d.ts.map