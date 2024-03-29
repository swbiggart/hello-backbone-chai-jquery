/*jshint
 curly: true, eqeqeq: true, immed: true, latedef: true, newcap: true, noarg: true, nonew: true, trailing: true,
 undef: true, white: true, es5: true, strict: true, node: true */
/*global define: false */

(function (sinonChai) {
    "use strict";

    // Module systems magic dance.

    if (typeof require === "function" && typeof exports === "object" && typeof module === "object") {
        // NodeJS
        module.exports = sinonChai;
    } else if (typeof define === "function" && define.amd) {
        // AMD
        define(function () {
            return sinonChai;
        });
    } else {
        // Other environment (usually <script> tag): attach to global.
        var global = (false || eval)("this");
        global.sinonChai = sinonChai;
    }
}(function sinonChai(chai) {
    "use strict";

    var slice = Function.prototype.call.bind(Array.prototype.slice);

    function flagger(word) {
        Object.defineProperty(chai.Assertion.prototype, word, {
            get: function () {
                this["_" + word] = true;
                return this;
            },
            configurable: true
        });
    }

    function property(name, asserter) {
        Object.defineProperty(chai.Assertion.prototype, name, {
            get: function () {
                asserter.call(this);
                return this;
            },
            configurable: true
        });
    }

    function method(name, asserter) {
        chai.Assertion.prototype[name] = function () {
            asserter.apply(this, arguments);
            return this;
        };
    }

    function getMessages(spy, action, nonNegatedSuffix, always, args) {
        var verbPhrase = always ? "always have " : "have ";
        nonNegatedSuffix = nonNegatedSuffix || "";
        var printfArray = Function.prototype.apply.bind(spy.printf, spy);

        return {
            affirmative: printfArray(["expected %n to " + verbPhrase + action + nonNegatedSuffix].concat(args)),
            negative: printfArray(["expected %n to not " + verbPhrase + action].concat(args))
        };
    }

    function sinonProperty(name, action, nonNegatedSuffix) {
        property(name, function () {
            var messages = getMessages(this.obj, action, nonNegatedSuffix, false);
            this.assert(this.obj[name], messages.affirmative, messages.negative);
        });
    }

    function exceptionalSinonMethod(chaiName, sinonName, action, nonNegatedSuffix) {
        method(chaiName, function () {
            var alwaysSinonMethod = "always" + sinonName[0].toUpperCase() + sinonName.substring(1);
            var shouldBeAlways = this._always && typeof this.obj[alwaysSinonMethod] === "function";
            var sinonMethod = shouldBeAlways ? alwaysSinonMethod : sinonName;

            var messages = getMessages(this.obj, action, nonNegatedSuffix, shouldBeAlways, slice(arguments));
            this.assert(this.obj[sinonMethod].apply(this.obj, arguments), messages.affirmative, messages.negative);
        });
    }

    function sinonMethod(name, action, nonNegatedSuffix) {
        exceptionalSinonMethod(name, name, action, nonNegatedSuffix);
    }

    flagger("always");

    sinonProperty("called", "been called", " at least once, but it was never called");
    sinonProperty("calledOnce", "been called exactly once", ", but it was called %c%C");
    sinonProperty("calledTwice", "been called exactly twice", ", but it was called %c%C");
    sinonProperty("calledThrice", "been called exactly thrice", ", but it was called %c%C");
    sinonMethod("calledBefore", "been called before %1");
    sinonMethod("calledAfter", "been called after %1");
    sinonMethod("calledOn", "been called with %1 as this", ", but it was called with %t instead");
    sinonMethod("calledWith", "been called with arguments %*", "%C");
    sinonMethod("calledWithExactly", "been called with exact arguments %*", "%C");
    sinonMethod("returned", "returned %1");
    exceptionalSinonMethod("thrown", "threw", "thrown %1");
}));