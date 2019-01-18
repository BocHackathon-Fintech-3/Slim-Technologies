interface Object {
    prop(obj, prop, val): any;
}

Object.prop = function (obj, prop, val) {
    const props = prop.split('.');
    const final = props.pop();

    let p;

    while (p = props.shift()) {
        if (typeof obj[p] === 'undefined' || !obj[p])
            return undefined;
        obj = obj[p];
    }
    return val ? (obj[final] = val) : obj[final];
};
