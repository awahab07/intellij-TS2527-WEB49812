import { Opaque } from 'types-lib';


declare const ProgramNameSymbol: unique symbol;
export type ProgramName = Opaque<string, typeof ProgramNameSymbol>;
