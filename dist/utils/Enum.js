"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enum = void 0;
class EnumDefault {
    getValues(value) {
        const values = [];
        for (const propName in value) {
            const propValue = value[propName];
            if (!parseInt(propValue)) {
                values.push(propValue);
            }
        }
        return values;
    }
    findKeys(value) {
        const keys = [];
        for (const propName in value) {
            const propValue = value[propName];
            if (!parseInt(propValue)) {
                keys.push(propName);
            }
        }
        return keys;
    }
}
exports.Enum = new EnumDefault();
//# sourceMappingURL=Enum.js.map