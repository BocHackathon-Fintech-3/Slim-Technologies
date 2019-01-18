export function stringEnumToArray(type: any, key?: string, value?: any): Object[] {

    return Object.keys(type).map(item => {
            if (key && value) {
                const obj = {};
                obj[key] = type[item];
                obj[value] = item.humanize();
                return obj;
            } else {
                return { id: type[item], name: item.humanize() };
            }
        }
    );
}

export function enumToArray(type: any): Object[] {

    return Object.keys(type).filter(item => {
        return !Number.isInteger(+item);

    }).map(key => ({ id: type[key], name: key.humanize() }));
}


export function isFunction(functionToCheck: any): functionToCheck is Function {
    const getType = {};
    return !!functionToCheck && functionToCheck instanceof Function && getType.toString.call(functionToCheck) === '[object Function]';
}

export function isPlainObject(value: any): boolean {
    if (Object.prototype.toString.call(value) !== '[object Object]') {
        return false;
    } else {
        const prototype = Object.getPrototypeOf(value);
        return prototype === null || prototype === Object.prototype;
    }
}

export function isString(value: any): value is string {
    return !!value && typeof value === 'string';
}

export function isBoolean(value: any): value is boolean {
    return typeof value === 'boolean';
}

export function isPromise(promise: any) {
    return Object.prototype.toString.call(promise) === '[object Promise]';
}

export function notEmptyValue(value: any): boolean {
    if (Array.isArray(value)) {
        return value.length > 0;
    }
    return !!value;
}

export function transformStringToArray(value: any): string[] {
    if (isString(value)) {
        return [value];
    }
    return value;
}


export function getProperty(propertyName, object): any {

    const parts = propertyName.split('.');
    const length = parts.length;

    let property = object || this;

    for (let i = 0; i < length; i++) {
        property = property[parts[i]];
    }

    return property;
}

export function swapArrayElements(a, x, y) {
    if (a.length === 1) return a;
    a.splice(y, 1, a.splice(x, 1, a[y])[0]);
    return a;
}

export function stringToColor(str: string) {

    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }

    const c = (hash & 0x00FFFFFF)
        .toString(16)
        .toUpperCase();

    return '00000'.substring(0, 6 - c.length) + c;

}
