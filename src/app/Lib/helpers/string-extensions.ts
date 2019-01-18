interface String {
    trim(): string;

    contains(s: string): boolean;

    slugify(): string;

    upperCaseFirst(): string;

    humanize(): string;

    ucwords(): string;

    splitCaps(): string;

    getWords(s: string, n: number): string;
}

String.prototype.upperCaseFirst = function () {
    const lowerCase = this.toLowerCase();
    return lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
};

String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, '');
};

String.prototype.contains = function (s) {
    return this.indexOf(s) !== -1;
};

String.prototype.humanize = function () {
    return this
        .replace(/^[\s_]+|[\s_]+$/g, '')
        .replace(/[_-]+/g, ' ')
        .replace(/[_\s]+/g, ' ')
        .ucwords();
};

String.prototype.splitCaps = function () {
    return this.split(/(?=[A-Z])/).join(' ');
};


String.prototype.ucwords = function () {
    let str = this.toLowerCase();
    return str.replace(/(^([a-zA-Z\p{M}]))|([ -][a-zA-Z\p{M}])/g,
        function (s) {
            return s.toUpperCase();
        });
};


String.prototype.slugify = function () {

    return this.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text

};


String.prototype.getWords = function (s, n) {
    // ?: non-capturing subsequent sp+word.Change {} if you want to require n instead of allowing fewer
    const a = s.match(new RegExp('[\\w\\.]+' + '(?:[\\s-]*[\\w\\.]+){0,' + (n - 1) + '}'));
    return (a === undefined || a === null) ? '' : a[0];
};
