"use strict";
/**
 * Creates a throttled function that only invokes the provided function (`func`) at most once per within a given number of milliseconds
 * (`limit`)
 */
export function throttle(func, limit) {
    var inThrottle;
    var lastResult;
    return function () {
        var args = arguments;
        var context = this;
        if (!inThrottle) {
            inThrottle = true;
            setTimeout(function () { return (inThrottle = false); }, limit);
            lastResult = func.apply(context, args);
        }
        return lastResult;
    };
}
