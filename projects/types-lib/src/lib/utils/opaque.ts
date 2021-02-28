// Tag type taken from https://github.com/Microsoft/TypeScript/issues/4895

declare const OpaqueTagSymbol: unique symbol;

declare class OpaqueTag<S extends symbol> {
  private [OpaqueTagSymbol]: S;
}


export type Opaque<T, S extends symbol> = T & OpaqueTag<S>;
