"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function appGlobal(n, x, w, d, r, h) {
    (function (Context, resourcesUrl) {
        var store = function () { var t; Context.store = { getStore: function () { return t; }, setStore: function (e) { t = e; }, getState: function () { return t && t.getState(); }, mapDispatchToProps: function (e, n) { Object.keys(n).forEach(function (r) { var o = n[r]; Object.defineProperty(e, r, { get: function () { return function () { for (var e = [], n = 0; n < arguments.length; n++)
                    e[n] = arguments[n]; return t.dispatch(o.apply(void 0, e)); }; }, configurable: !0, enumerable: !0 }); }); }, mapStateToProps: function (e, n) { var r = function (r, o) { var u = n(t.getState()); Object.keys(u).forEach(function (t) { e[t] = u[t]; }); }, o = t.subscribe(function () { return r(); }); return r(), o; } }; };
        export default store;
    })(x, r);
}
exports.default = appGlobal;