import { EnumType } from "../types/EnumType";

class EnumDefault {
  getValues<T extends EnumType>(value: T): T[keyof T][] {
    const values: T[keyof T][] = [];
    for (const propName in value) {
      const propValue = value[propName];
      if (!parseInt(propValue)) {
        values.push(propValue);
      }
    }
    return values;
  }

  findKeys<T extends EnumType>(value: T): string[] {
    const keys: string[] = [];
    for (const propName in value) {
      const propValue = value[propName];
      if (!parseInt(propValue)) {
        keys.push(propName);
      }
    }
    return keys;
  }
}

export const Enum = new EnumDefault();
