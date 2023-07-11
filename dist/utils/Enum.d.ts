import { EnumType } from "../types/EnumType";
declare class EnumDefault {
    getValues<T extends EnumType>(value: T): T[keyof T][];
    findKeys<T extends EnumType>(value: T): string[];
}
export declare const Enum: EnumDefault;
export {};
