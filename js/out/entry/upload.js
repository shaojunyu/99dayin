/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */

/*! iScroll v5.1.3 ~ (c) 2008-2014 Matteo Spinelli ~ http://cubiq.org/license */

/**
 * mOxie - multi-runtime File API & XMLHttpRequest L2 Polyfill
 * v1.3.4
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 *
 * Date: 2015-07-18
 */

/**
 * Plupload - multi-runtime File Uploader
 * v2.1.8
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 *
 * Date: 2015-07-21
 */

function toggleShow(e) {
    e.css("display") === "none" ? e.show() : e.hide()
}

function changeClass(e, t) {
    e.addClass(t).siblings().removeClass(t)
}

function bindScroll(e) {
    var t = new Array;
    return e.each(function() {
        var e = new IScroll("#" + $(this).attr("id"), {
            scrollbars: !0,
            mouseWheel: !0,
            interactiveScrollbars: !0,
            shrinkScrollbars: "scale",
            useTransition: !0
        });
        t.push(e)
    })
}

function refreshScroll(e) {
    e.forEach(function(e) {
        e.refresh()
    })
}

function sendAjax(e) {
    var e = $.extend({}, sendAjax.DEFAULT, e);
    $.ajax({
        url: e.url,
        type: e.type,
        data: e.data,
        success: function(n) {
            e.success(n)
        },
        complete: function() {
            e.complete()
        },
        beforeSend: function() {
            e.beforeSend()
        }
    })
}

function openModal(e, t) {
    $.modal.close(), e.modal({
        overlayClose: t,
        onOpen: function(t) {
            t.overlay.fadeIn("fast", function() {
                t.data.hide(), t.container.fadeIn("fast", function() {
                    t.data.fadeIn("normal")
                })
            })
        },
        overlayCss: {
            backgroundColor: "#000"
        },
        opacity: 85
    })
}

function moveBlock(e, t) {
    e.css("transform", "translateX(" + t + "px)")
}

function changeShow(e, t) {
    e.show(), t.hide()
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(a, b) {
    function s(e) {
        var t = "length" in e && e.length,
            r = n.type(e);
        return "function" === r || n.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === r || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function x(e, t, r) {
        if (n.isFunction(t)) return n.grep(e, function(e, n) {
            return !!t.call(e, n, e) !== r
        });
        if (t.nodeType) return n.grep(e, function(e) {
            return e === t !== r
        });
        if ("string" == typeof t) {
            if (w.test(t)) return n.filter(t, e, r);
            t = n.filter(t, e)
        }
        return n.grep(e, function(e) {
            return g.call(t, e) >= 0 !== r
        })
    }

    function D(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType);
        return e
    }

    function G(e) {
        var t = F[e] = {};
        return n.each(e.match(E) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function I() {
        l.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), n.ready()
    }

    function K() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = n.expando + K.uid++
    }

    function P(e, t, r) {
        var i;
        if (void 0 === r && 1 === e.nodeType)
            if (i = "data-" + t.replace(O, "-$1").toLowerCase(), r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : N.test(r) ? n.parseJSON(r) : r
                } catch (s) {}
                M.set(e, t, r)
            } else r = void 0;
        return r
    }

    function Z() {
        return !0
    }

    function $() {
        return !1
    }

    function _() {
        try {
            return l.activeElement
        } catch (e) {}
    }

    function ja(e, t) {
        return n.nodeName(e, "table") && n.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function ka(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function la(e) {
        var t = ga.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function ma(e, t) {
        for (var n = 0, r = e.length; r > n; n++) L.set(e[n], "globalEval", !t || L.get(t[n], "globalEval"))
    }

    function na(e, t) {
        var r, i, s, o, u, a, f, l;
        if (1 === t.nodeType) {
            if (L.hasData(e) && (o = L.access(e), u = L.set(t, o), l = o.events)) {
                delete u.handle, u.events = {};
                for (s in l)
                    for (r = 0, i = l[s].length; i > r; r++) n.event.add(t, s, l[s][r])
            }
            M.hasData(e) && (a = M.access(e), f = n.extend({}, a), M.set(t, f))
        }
    }

    function oa(e, t) {
        var r = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && n.nodeName(e, t) ? n.merge([e], r) : r
    }

    function pa(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && T.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
    }

    function sa(e, t) {
        var r, i = n(t.createElement(e)).appendTo(t.body),
            s = a.getDefaultComputedStyle && (r = a.getDefaultComputedStyle(i[0])) ? r.display : n.css(i[0], "display");
        return i.detach(), s
    }

    function ta(e) {
        var t = l,
            r = ra[e];
        return r || (r = sa(e, t), "none" !== r && r || (qa = (qa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = qa[0].contentDocument, t.write(), t.close(), r = sa(e, t), qa.detach()), ra[e] = r), r
    }

    function xa(e, t, r) {
        var i, s, o, u, a = e.style;
        return r = r || wa(e), r && (u = r.getPropertyValue(t) || r[t]), r && ("" !== u || n.contains(e.ownerDocument, e) || (u = n.style(e, t)), va.test(u) && ua.test(t) && (i = a.width, s = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = u, u = r.width, a.width = i, a.minWidth = s, a.maxWidth = o)), void 0 !== u ? u + "" : u
    }

    function ya(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function Fa(e, t) {
        if (t in e) return t;
        var n = t[0].toUpperCase() + t.slice(1),
            r = t,
            i = Ea.length;
        while (i--)
            if (t = Ea[i] + n, t in e) return t;
        return r
    }

    function Ga(e, t, n) {
        var r = Aa.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function Ha(e, t, r, i, s) {
        for (var o = r === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, u = 0; 4 > o; o += 2) "margin" === r && (u += n.css(e, r + R[o], !0, s)), i ? ("content" === r && (u -= n.css(e, "padding" + R[o], !0, s)), "margin" !== r && (u -= n.css(e, "border" + R[o] + "Width", !0, s))) : (u += n.css(e, "padding" + R[o], !0, s), "padding" !== r && (u += n.css(e, "border" + R[o] + "Width", !0, s)));
        return u
    }

    function Ia(e, t, r) {
        var i = !0,
            s = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = wa(e),
            u = "border-box" === n.css(e, "boxSizing", !1, o);
        if (0 >= s || null == s) {
            if (s = xa(e, t, o), (0 > s || null == s) && (s = e.style[t]), va.test(s)) return s;
            i = u && (k.boxSizingReliable() || s === e.style[t]), s = parseFloat(s) || 0
        }
        return s + Ha(e, t, r || (u ? "border" : "content"), i, o) + "px"
    }

    function Ja(e, t) {
        for (var r, i, s, o = [], u = 0, a = e.length; a > u; u++) i = e[u], i.style && (o[u] = L.get(i, "olddisplay"), r = i.style.display, t ? (o[u] || "none" !== r || (i.style.display = ""), "" === i.style.display && S(i) && (o[u] = L.access(i, "olddisplay", ta(i.nodeName)))) : (s = S(i), "none" === r && s || L.set(i, "olddisplay", s ? r : n.css(i, "display"))));
        for (u = 0; a > u; u++) i = e[u], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[u] || "" : "none"));
        return e
    }

    function Ka(e, t, n, r, i) {
        return new Ka.prototype.init(e, t, n, r, i)
    }

    function Sa() {
        return setTimeout(function() {
            La = void 0
        }), La = n.now()
    }

    function Ta(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = R[r], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function Ua(e, t, n) {
        for (var r, i = (Ra[t] || []).concat(Ra["*"]), s = 0, o = i.length; o > s; s++)
            if (r = i[s].call(n, t, e)) return r
    }

    function Va(e, t, r) {
        var i, s, o, u, a, f, l, c, h = this,
            p = {},
            d = e.style,
            v = e.nodeType && S(e),
            m = L.get(e, "fxshow");
        r.queue || (a = n._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, f = a.empty.fire, a.empty.fire = function() {
            a.unqueued || f()
        }), a.unqueued++, h.always(function() {
            h.always(function() {
                a.unqueued--, n.queue(e, "fx").length || a.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (r.overflow = [d.overflow, d.overflowX, d.overflowY], l = n.css(e, "display"), c = "none" === l ? L.get(e, "olddisplay") || ta(e.nodeName) : l, "inline" === c && "none" === n.css(e, "float") && (d.display = "inline-block")), r.overflow && (d.overflow = "hidden", h.always(function() {
            d.overflow = r.overflow[0], d.overflowX = r.overflow[1], d.overflowY = r.overflow[2]
        }));
        for (i in t)
            if (s = t[i], Na.exec(s)) {
                if (delete t[i], o = o || "toggle" === s, s === (v ? "hide" : "show")) {
                    if ("show" !== s || !m || void 0 === m[i]) continue;
                    v = !0
                }
                p[i] = m && m[i] || n.style(e, i)
            } else l = void 0;
        if (n.isEmptyObject(p)) "inline" === ("none" === l ? ta(e.nodeName) : l) && (d.display = l);
        else {
            m ? "hidden" in m && (v = m.hidden) : m = L.access(e, "fxshow", {}), o && (m.hidden = !v), v ? n(e).show() : h.done(function() {
                n(e).hide()
            }), h.done(function() {
                var t;
                L.remove(e, "fxshow");
                for (t in p) n.style(e, t, p[t])
            });
            for (i in p) u = Ua(v ? m[i] : 0, i, h), i in m || (m[i] = u.start, v && (u.end = u.start, u.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function Wa(e, t) {
        var r, i, s, o, u;
        for (r in e)
            if (i = n.camelCase(r), s = t[i], o = e[r], n.isArray(o) && (s = o[1], o = e[r] = o[0]), r !== i && (e[i] = o, delete e[r]), u = n.cssHooks[i], u && "expand" in u) {
                o = u.expand(o), delete e[i];
                for (r in o) r in e || (e[r] = o[r], t[r] = s)
            } else t[i] = s
    }

    function Xa(e, t, r) {
        var i, s, o = 0,
            u = Qa.length,
            a = n.Deferred().always(function() {
                delete f.elem
            }),
            f = function() {
                if (s) return !1;
                for (var t = La || Sa(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, i = 1 - r, o = 0, u = l.tweens.length; u > o; o++) l.tweens[o].run(i);
                return a.notifyWith(e, [l, i, n]), 1 > i && u ? n : (a.resolveWith(e, [l]), !1)
            },
            l = a.promise({
                elem: e,
                props: n.extend({}, t),
                opts: n.extend(!0, {
                    specialEasing: {}
                }, r),
                originalProperties: t,
                originalOptions: r,
                startTime: La || Sa(),
                duration: r.duration,
                tweens: [],
                createTween: function(t, r) {
                    var i = n.Tween(e, l.opts, t, r, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(i), i
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; r > n; n++) l.tweens[n].run(1);
                    return t ? a.resolveWith(e, [l, t]) : a.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (Wa(c, l.opts.specialEasing); u > o; o++)
            if (i = Qa[o].call(l, e, c, l.opts)) return i;
        return n.map(c, Ua, l), n.isFunction(l.opts.start) && l.opts.start.call(e, l), n.fx.timer(n.extend(f, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function qb(e) {
        return function(t, r) {
            "string" != typeof t && (r = t, t = "*");
            var i, s = 0,
                o = t.toLowerCase().match(E) || [];
            if (n.isFunction(r))
                while (i = o[s++]) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(r)) : (e[i] = e[i] || []).push(r)
        }
    }

    function rb(e, t, r, i) {
        function u(l) {
            var h;
            return s[l] = !0, n.each(e[l] || [], function(e, n) {
                var a = n(t, r, i);
                return "string" != typeof a || o || s[a] ? o ? !(h = a) : void 0 : (t.dataTypes.unshift(a), u(a), !1)
            }), h
        }
        var s = {},
            o = e === mb;
        return u(t.dataTypes[0]) || !s["*"] && u("*")
    }

    function sb(e, t) {
        var r, i, s = n.ajaxSettings.flatOptions || {};
        for (r in t) void 0 !== t[r] && ((s[r] ? e : i || (i = {}))[r] = t[r]);
        return i && n.extend(!0, e, i), e
    }

    function tb(e, t, n) {
        var r, i, s, o, u = e.contents,
            a = e.dataTypes;
        while ("*" === a[0]) a.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in u)
                if (u[i] && u[i].test(r)) {
                    a.unshift(i);
                    break
                }
        if (a[0] in n) s = a[0];
        else {
            for (i in n) {
                if (!a[0] || e.converters[i + " " + a[0]]) {
                    s = i;
                    break
                }
                o || (o = i)
            }
            s = s || o
        }
        return s ? (s !== a[0] && a.unshift(s), n[s]) : void 0
    }

    function ub(e, t, n, r) {
        var i, s, o, u, a, f = {},
            l = e.dataTypes.slice();
        if (l[1])
            for (o in e.converters) f[o.toLowerCase()] = e.converters[o];
        s = l.shift();
        while (s)
            if (e.responseFields[s] && (n[e.responseFields[s]] = t), !a && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), a = s, s = l.shift())
                if ("*" === s) s = a;
                else if ("*" !== a && a !== s) {
            if (o = f[a + " " + s] || f["* " + s], !o)
                for (i in f)
                    if (u = i.split(" "), u[1] === s && (o = f[a + " " + u[0]] || f["* " + u[0]])) {
                        o === !0 ? o = f[i] : f[i] !== !0 && (s = u[0], l.unshift(u[1]));
                        break
                    }
            if (o !== !0)
                if (o && e["throws"]) t = o(t);
                else try {
                    t = o(t)
                } catch (c) {
                    return {
                        state: "parsererror",
                        error: o ? c : "No conversion from " + a + " to " + s
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function Ab(e, t, r, i) {
        var s;
        if (n.isArray(t)) n.each(t, function(t, n) {
            r || wb.test(e) ? i(e, n) : Ab(e + "[" + ("object" == typeof n ? t : "") + "]", n, r, i)
        });
        else if (r || "object" !== n.type(t)) i(e, t);
        else
            for (s in t) Ab(e + "[" + s + "]", t[s], r, i)
    }

    function Jb(e) {
        return n.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var c = [],
        d = c.slice,
        e = c.concat,
        f = c.push,
        g = c.indexOf,
        h = {},
        i = h.toString,
        j = h.hasOwnProperty,
        k = {},
        l = a.document,
        m = "2.1.4",
        n = function(e, t) {
            return new n.fn.init(e, t)
        },
        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function(e, t) {
            return t.toUpperCase()
        };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return d.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : d.call(this)
        },
        pushStack: function(e) {
            var t = n.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return n.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(n.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(d.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: f,
        sort: c.sort,
        splice: c.splice
    }, n.extend = n.fn.extend = function() {
        var e, t, r, i, s, o, u = arguments[0] || {},
            a = 1,
            f = arguments.length,
            l = !1;
        for ("boolean" == typeof u && (l = u, u = arguments[a] || {}, a++), "object" == typeof u || n.isFunction(u) || (u = {}), a === f && (u = this, a--); f > a; a++)
            if (null != (e = arguments[a]))
                for (t in e) r = u[t], i = e[t], u !== i && (l && i && (n.isPlainObject(i) || (s = n.isArray(i))) ? (s ? (s = !1, o = r && n.isArray(r) ? r : []) : o = r && n.isPlainObject(r) ? r : {}, u[t] = n.extend(l, o, i)) : void 0 !== i && (u[t] = i));
        return u
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === n.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            return !n.isArray(e) && e - parseFloat(e) + 1 >= 0
        },
        isPlainObject: function(e) {
            return "object" !== n.type(e) || e.nodeType || n.isWindow(e) ? !1 : e.constructor && !j.call(e.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? h[i.call(e)] || "object" : typeof e
        },
        globalEval: function(a) {
            var b, c = eval;
            a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"), b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function(e) {
            return e.replace(p, "ms-").replace(q, r)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, n) {
            var r, i = 0,
                o = e.length,
                u = s(e);
            if (n) {
                if (u) {
                    for (; o > i; i++)
                        if (r = t.apply(e[i], n), r === !1) break
                } else
                    for (i in e)
                        if (r = t.apply(e[i], n), r === !1) break
            } else if (u) {
                for (; o > i; i++)
                    if (r = t.call(e[i], i, e[i]), r === !1) break
            } else
                for (i in e)
                    if (r = t.call(e[i], i, e[i]), r === !1) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(o, "")
        },
        makeArray: function(e, t) {
            var r = t || [];
            return null != e && (s(Object(e)) ? n.merge(r, "string" == typeof e ? [e] : e) : f.call(r, e)), r
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : g.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; n > r; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r, i = [], s = 0, o = e.length, u = !n; o > s; s++) r = !t(e[s], s), r !== u && i.push(e[s]);
            return i
        },
        map: function(t, n, r) {
            var i, o = 0,
                u = t.length,
                a = s(t),
                f = [];
            if (a)
                for (; u > o; o++) i = n(t[o], o, r), null != i && f.push(i);
            else
                for (o in t) i = n(t[o], o, r), null != i && f.push(i);
            return e.apply([], f)
        },
        guid: 1,
        proxy: function(e, t) {
            var r, i, s;
            return "string" == typeof t && (r = e[t], t = e, e = r), n.isFunction(e) ? (i = d.call(arguments, 2), s = function() {
                return e.apply(t || this, i.concat(d.call(arguments)))
            }, s.guid = e.guid = e.guid || n.guid++, s) : void 0
        },
        now: Date.now,
        support: k
    }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        h["[object " + t + "]"] = t.toLowerCase()
    });
    var t = function(e) {
        function ot(e, t, r, i) {
            var s, u, f, l, c, d, g, y, S, x;
            if ((t ? t.ownerDocument || t : E) !== p && h(t), t = t || p, r = r || [], l = t.nodeType, "string" != typeof e || !e || 1 !== l && 9 !== l && 11 !== l) return r;
            if (!i && v) {
                if (11 !== l && (s = Z.exec(e)))
                    if (f = s[1]) {
                        if (9 === l) {
                            if (u = t.getElementById(f), !u || !u.parentNode) return r;
                            if (u.id === f) return r.push(u), r
                        } else if (t.ownerDocument && (u = t.ownerDocument.getElementById(f)) && b(t, u) && u.id === f) return r.push(u), r
                    } else {
                        if (s[2]) return D.apply(r, t.getElementsByTagName(e)), r;
                        if ((f = s[3]) && n.getElementsByClassName) return D.apply(r, t.getElementsByClassName(f)), r
                    }
                if (n.qsa && (!m || !m.test(e))) {
                    if (y = g = w, S = t, x = 1 !== l && e, 1 === l && "object" !== t.nodeName.toLowerCase()) {
                        d = o(e), (g = t.getAttribute("id")) ? y = g.replace(tt, "\\$&") : t.setAttribute("id", y), y = "[id='" + y + "'] ", c = d.length;
                        while (c--) d[c] = y + gt(d[c]);
                        S = et.test(e) && vt(t.parentNode) || t, x = d.join(",")
                    }
                    if (x) try {
                        return D.apply(r, S.querySelectorAll(x)), r
                    } catch (T) {} finally {
                        g || t.removeAttribute("id")
                    }
                }
            }
            return a(e.replace(z, "$1"), t, r, i)
        }

        function ut() {
            function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
            var e = [];
            return t
        }

        function at(e) {
            return e[w] = !0, e
        }

        function ft(e) {
            var t = p.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function lt(e, t) {
            var n = e.split("|"),
                i = e.length;
            while (i--) r.attrHandle[n[i]] = t
        }

        function ct(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || L) - (~e.sourceIndex || L);
            if (r) return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function ht(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function pt(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function dt(e) {
            return at(function(t) {
                return t = +t, at(function(n, r) {
                    var i, s = e([], n.length, t),
                        o = s.length;
                    while (o--) n[i = s[o]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function vt(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function mt() {}

        function gt(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
            return r
        }

        function yt(e, t, n) {
            var r = t.dir,
                i = n && "parentNode" === r,
                s = x++;
            return t.first ? function(t, n, s) {
                while (t = t[r])
                    if (1 === t.nodeType || i) return e(t, n, s)
            } : function(t, n, o) {
                var u, a, f = [S, s];
                if (o) {
                    while (t = t[r])
                        if ((1 === t.nodeType || i) && e(t, n, o)) return !0
                } else
                    while (t = t[r])
                        if (1 === t.nodeType || i) {
                            if (a = t[w] || (t[w] = {}), (u = a[r]) && u[0] === S && u[1] === s) return f[2] = u[2];
                            if (a[r] = f, f[2] = e(t, n, o)) return !0
                        }
            }
        }

        function bt(e) {
            return e.length > 1 ? function(t, n, r) {
                var i = e.length;
                while (i--)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function wt(e, t, n) {
            for (var r = 0, i = t.length; i > r; r++) ot(e, t[r], n);
            return n
        }

        function Et(e, t, n, r, i) {
            for (var s, o = [], u = 0, a = e.length, f = null != t; a > u; u++)(s = e[u]) && (!n || n(s, r, i)) && (o.push(s), f && t.push(u));
            return o
        }

        function St(e, t, n, r, i, s) {
            return r && !r[w] && (r = St(r)), i && !i[w] && (i = St(i, s)), at(function(s, o, u, a) {
                var f, l, c, h = [],
                    p = [],
                    d = o.length,
                    v = s || wt(t || "*", u.nodeType ? [u] : u, []),
                    m = !e || !s && t ? v : Et(v, h, e, u, a),
                    g = n ? i || (s ? e : d || r) ? [] : o : m;
                if (n && n(m, g, u, a), r) {
                    f = Et(g, p), r(f, [], u, a), l = f.length;
                    while (l--)(c = f[l]) && (g[p[l]] = !(m[p[l]] = c))
                }
                if (s) {
                    if (i || e) {
                        if (i) {
                            f = [], l = g.length;
                            while (l--)(c = g[l]) && f.push(m[l] = c);
                            i(null, g = [], f, a)
                        }
                        l = g.length;
                        while (l--)(c = g[l]) && (f = i ? H(s, c) : h[l]) > -1 && (s[f] = !(o[f] = c))
                    }
                } else g = Et(g === o ? g.splice(d, g.length) : g), i ? i(null, o, g, a) : D.apply(o, g)
            })
        }

        function xt(e) {
            for (var t, n, i, s = e.length, o = r.relative[e[0].type], u = o || r.relative[" "], a = o ? 1 : 0, l = yt(function(e) {
                    return e === t
                }, u, !0), c = yt(function(e) {
                    return H(t, e) > -1
                }, u, !0), h = [function(e, n, r) {
                    var i = !o && (r || n !== f) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r));
                    return t = null, i
                }]; s > a; a++)
                if (n = r.relative[e[a].type]) h = [yt(bt(h), n)];
                else {
                    if (n = r.filter[e[a].type].apply(null, e[a].matches), n[w]) {
                        for (i = ++a; s > i; i++)
                            if (r.relative[e[i].type]) break;
                        return St(a > 1 && bt(h), a > 1 && gt(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(z, "$1"), n, i > a && xt(e.slice(a, i)), s > i && xt(e = e.slice(i)), s > i && gt(e))
                    }
                    h.push(n)
                }
            return bt(h)
        }

        function Tt(e, t) {
            var n = t.length > 0,
                i = e.length > 0,
                s = function(s, o, u, a, l) {
                    var c, h, d, v = 0,
                        m = "0",
                        g = s && [],
                        y = [],
                        b = f,
                        w = s || i && r.find.TAG("*", l),
                        E = S += null == b ? 1 : Math.random() || .1,
                        x = w.length;
                    for (l && (f = o !== p && o); m !== x && null != (c = w[m]); m++) {
                        if (i && c) {
                            h = 0;
                            while (d = e[h++])
                                if (d(c, o, u)) {
                                    a.push(c);
                                    break
                                }
                            l && (S = E)
                        }
                        n && ((c = !d && c) && v--, s && g.push(c))
                    }
                    if (v += m, n && m !== v) {
                        h = 0;
                        while (d = t[h++]) d(g, y, o, u);
                        if (s) {
                            if (v > 0)
                                while (m--) g[m] || y[m] || (y[m] = M.call(a));
                            y = Et(y)
                        }
                        D.apply(a, y), l && !s && y.length > 0 && v + t.length > 1 && ot.uniqueSort(a)
                    }
                    return l && (S = E, f = b), g
                };
            return n ? at(s) : s
        }
        var t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w = "sizzle" + 1 * new Date,
            E = e.document,
            S = 0,
            x = 0,
            T = ut(),
            N = ut(),
            C = ut(),
            k = function(e, t) {
                return e === t && (c = !0), 0
            },
            L = 1 << 31,
            A = {}.hasOwnProperty,
            O = [],
            M = O.pop,
            _ = O.push,
            D = O.push,
            P = O.slice,
            H = function(e, t) {
                for (var n = 0, r = e.length; r > n; n++)
                    if (e[n] === t) return n;
                return -1
            },
            B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            j = "[\\x20\\t\\r\\n\\f]",
            F = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            I = F.replace("w", "w#"),
            q = "\\[" + j + "*(" + F + ")(?:" + j + "*([*^$|!~]?=)" + j + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + j + "*\\]",
            R = ":(" + F + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + q + ")*)|.*)\\)|)",
            U = new RegExp(j + "+", "g"),
            z = new RegExp("^" + j + "+|((?:^|[^\\\\])(?:\\\\.)*)" + j + "+$", "g"),
            W = new RegExp("^" + j + "*," + j + "*"),
            X = new RegExp("^" + j + "*([>+~]|" + j + ")" + j + "*"),
            V = new RegExp("=" + j + "*([^\\]'\"]*?)" + j + "*\\]", "g"),
            $ = new RegExp(R),
            J = new RegExp("^" + I + "$"),
            K = {
                ID: new RegExp("^#(" + F + ")"),
                CLASS: new RegExp("^\\.(" + F + ")"),
                TAG: new RegExp("^(" + F.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + q),
                PSEUDO: new RegExp("^" + R),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + j + "*(even|odd|(([+-]|)(\\d*)n|)" + j + "*(?:([+-]|)" + j + "*(\\d+)|))" + j + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + B + ")$", "i"),
                needsContext: new RegExp("^" + j + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + j + "*((?:-\\d)?\\d*)" + j + "*\\)|)(?=[^-]|$)", "i")
            },
            Q = /^(?:input|select|textarea|button)$/i,
            G = /^h\d$/i,
            Y = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            et = /[+~]/,
            tt = /'|\\/g,
            nt = new RegExp("\\\\([\\da-f]{1,6}" + j + "?|(" + j + ")|.)", "ig"),
            rt = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            it = function() {
                h()
            };
        try {
            D.apply(O = P.call(E.childNodes), E.childNodes), O[E.childNodes.length].nodeType
        } catch (st) {
            D = {
                apply: O.length ? function(e, t) {
                    _.apply(e, P.call(t))
                } : function(e, t) {
                    var n = e.length,
                        r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }
        n = ot.support = {}, s = ot.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, h = ot.setDocument = function(e) {
            var t, i, o = e ? e.ownerDocument || e : E;
            return o !== p && 9 === o.nodeType && o.documentElement ? (p = o, d = o.documentElement, i = o.defaultView, i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", it, !1) : i.attachEvent && i.attachEvent("onunload", it)), v = !s(o), n.attributes = ft(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), n.getElementsByTagName = ft(function(e) {
                return e.appendChild(o.createComment("")), !e.getElementsByTagName("*").length
            }), n.getElementsByClassName = Y.test(o.getElementsByClassName), n.getById = ft(function(e) {
                return d.appendChild(e).id = w, !o.getElementsByName || !o.getElementsByName(w).length
            }), n.getById ? (r.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && v) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, r.filter.ID = function(e) {
                var t = e.replace(nt, rt);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete r.find.ID, r.filter.ID = function(e) {
                var t = e.replace(nt, rt);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, r = [],
                    i = 0,
                    s = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = s[i++]) 1 === n.nodeType && r.push(n);
                    return r
                }
                return s
            }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
                return v ? t.getElementsByClassName(e) : void 0
            }, g = [], m = [], (n.qsa = Y.test(o.querySelectorAll)) && (ft(function(e) {
                d.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + j + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + j + "*(?:value|" + B + ")"), e.querySelectorAll("[id~=" + w + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || m.push(".#.+[+~]")
            }), ft(function(e) {
                var t = o.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + j + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
            })), (n.matchesSelector = Y.test(y = d.matches || d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ft(function(e) {
                n.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), g.push("!=", R)
            }), m = m.length && new RegExp(m.join("|")), g = g.length && new RegExp(g.join("|")), t = Y.test(d.compareDocumentPosition), b = t || Y.test(d.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !!r && 1 === r.nodeType && !!(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r))
            } : function(e, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === e) return !0;
                return !1
            }, k = t ? function(e, t) {
                if (e === t) return c = !0, 0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r ? r : (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & r || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === o || e.ownerDocument === E && b(E, e) ? -1 : t === o || t.ownerDocument === E && b(E, t) ? 1 : l ? H(l, e) - H(l, t) : 0 : 4 & r ? -1 : 1)
            } : function(e, t) {
                if (e === t) return c = !0, 0;
                var n, r = 0,
                    i = e.parentNode,
                    s = t.parentNode,
                    u = [e],
                    a = [t];
                if (!i || !s) return e === o ? -1 : t === o ? 1 : i ? -1 : s ? 1 : l ? H(l, e) - H(l, t) : 0;
                if (i === s) return ct(e, t);
                n = e;
                while (n = n.parentNode) u.unshift(n);
                n = t;
                while (n = n.parentNode) a.unshift(n);
                while (u[r] === a[r]) r++;
                return r ? ct(u[r], a[r]) : u[r] === E ? -1 : a[r] === E ? 1 : 0
            }, o) : p
        }, ot.matches = function(e, t) {
            return ot(e, null, null, t)
        }, ot.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== p && h(e), t = t.replace(V, "='$1']"), !(!n.matchesSelector || !v || g && g.test(t) || m && m.test(t))) try {
                var r = y.call(e, t);
                if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (i) {}
            return ot(t, p, null, [e]).length > 0
        }, ot.contains = function(e, t) {
            return (e.ownerDocument || e) !== p && h(e), b(e, t)
        }, ot.attr = function(e, t) {
            (e.ownerDocument || e) !== p && h(e);
            var i = r.attrHandle[t.toLowerCase()],
                s = i && A.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !v) : void 0;
            return void 0 !== s ? s : n.attributes || !v ? e.getAttribute(t) : (s = e.getAttributeNode(t)) && s.specified ? s.value : null
        }, ot.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, ot.uniqueSort = function(e) {
            var t, r = [],
                i = 0,
                s = 0;
            if (c = !n.detectDuplicates, l = !n.sortStable && e.slice(0), e.sort(k), c) {
                while (t = e[s++]) t === e[s] && (i = r.push(s));
                while (i--) e.splice(r[i], 1)
            }
            return l = null, e
        }, i = ot.getText = function(e) {
            var t, n = "",
                r = 0,
                s = e.nodeType;
            if (s) {
                if (1 === s || 9 === s || 11 === s) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                } else if (3 === s || 4 === s) return e.nodeValue
            } else
                while (t = e[r++]) n += i(t);
            return n
        }, r = ot.selectors = {
            cacheLength: 50,
            createPseudo: at,
            match: K,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(nt, rt), e[3] = (e[3] || e[4] || e[5] || "").replace(nt, rt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ot.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ot.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return K.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && $.test(n) && (t = o(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(nt, rt).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = T[e + " "];
                    return t || (t = new RegExp("(^|" + j + ")" + e + "(" + j + "|$)")) && T(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, n) {
                    return function(r) {
                        var i = ot.attr(r, e);
                        return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(U, " ") + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var s = "nth" !== e.slice(0, 3),
                        o = "last" !== e.slice(-4),
                        u = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, a) {
                        var f, l, c, h, p, d, v = s !== o ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            g = u && t.nodeName.toLowerCase(),
                            y = !a && !u;
                        if (m) {
                            if (s) {
                                while (v) {
                                    c = t;
                                    while (c = c[v])
                                        if (u ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) return !1;
                                    d = v = "only" === e && !d && "nextSibling"
                                }
                                return !0
                            }
                            if (d = [o ? m.firstChild : m.lastChild], o && y) {
                                l = m[w] || (m[w] = {}), f = l[e] || [], p = f[0] === S && f[1], h = f[0] === S && f[2], c = p && m.childNodes[p];
                                while (c = ++p && c && c[v] || (h = p = 0) || d.pop())
                                    if (1 === c.nodeType && ++h && c === t) {
                                        l[e] = [S, p, h];
                                        break
                                    }
                            } else if (y && (f = (t[w] || (t[w] = {}))[e]) && f[0] === S) h = f[1];
                            else
                                while (c = ++p && c && c[v] || (h = p = 0) || d.pop())
                                    if ((u ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) && ++h && (y && ((c[w] || (c[w] = {}))[e] = [S, h]), c === t)) break; return h -= i, h === r || h % r === 0 && h / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || ot.error("unsupported pseudo: " + e);
                    return i[w] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? at(function(e, n) {
                        var r, s = i(e, t),
                            o = s.length;
                        while (o--) r = H(e, s[o]), e[r] = !(n[r] = s[o])
                    }) : function(e) {
                        return i(e, 0, n)
                    }) : i
                }
            },
            pseudos: {
                not: at(function(e) {
                    var t = [],
                        n = [],
                        r = u(e.replace(z, "$1"));
                    return r[w] ? at(function(e, t, n, i) {
                        var s, o = r(e, null, i, []),
                            u = e.length;
                        while (u--)(s = o[u]) && (e[u] = !(t[u] = s))
                    }) : function(e, i, s) {
                        return t[0] = e, r(t, null, s, n), t[0] = null, !n.pop()
                    }
                }),
                has: at(function(e) {
                    return function(t) {
                        return ot(e, t).length > 0
                    }
                }),
                contains: at(function(e) {
                    return e = e.replace(nt, rt),
                        function(t) {
                            return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                        }
                }),
                lang: at(function(e) {
                    return J.test(e || "") || ot.error("unsupported lang: " + e), e = e.replace(nt, rt).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = v ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === d
                },
                focus: function(e) {
                    return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !r.pseudos.empty(e)
                },
                header: function(e) {
                    return G.test(e.nodeName)
                },
                input: function(e) {
                    return Q.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: dt(function() {
                    return [0]
                }),
                last: dt(function(e, t) {
                    return [t - 1]
                }),
                eq: dt(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: dt(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: dt(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: dt(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: dt(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }, r.pseudos.nth = r.pseudos.eq;
        for (t in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) r.pseudos[t] = ht(t);
        for (t in {
                submit: !0,
                reset: !0
            }) r.pseudos[t] = pt(t);
        return mt.prototype = r.filters = r.pseudos, r.setFilters = new mt, o = ot.tokenize = function(e, t) {
            var n, i, s, o, u, a, f, l = N[e + " "];
            if (l) return t ? 0 : l.slice(0);
            u = e, a = [], f = r.preFilter;
            while (u) {
                (!n || (i = W.exec(u))) && (i && (u = u.slice(i[0].length) || u), a.push(s = [])), n = !1, (i = X.exec(u)) && (n = i.shift(), s.push({
                    value: n,
                    type: i[0].replace(z, " ")
                }), u = u.slice(n.length));
                for (o in r.filter) !(i = K[o].exec(u)) || f[o] && !(i = f[o](i)) || (n = i.shift(), s.push({
                    value: n,
                    type: o,
                    matches: i
                }), u = u.slice(n.length));
                if (!n) break
            }
            return t ? u.length : u ? ot.error(e) : N(e, a).slice(0)
        }, u = ot.compile = function(e, t) {
            var n, r = [],
                i = [],
                s = C[e + " "];
            if (!s) {
                t || (t = o(e)), n = t.length;
                while (n--) s = xt(t[n]), s[w] ? r.push(s) : i.push(s);
                s = C(e, Tt(i, r)), s.selector = e
            }
            return s
        }, a = ot.select = function(e, t, i, s) {
            var a, f, l, c, h, p = "function" == typeof e && e,
                d = !s && o(e = p.selector || e);
            if (i = i || [], 1 === d.length) {
                if (f = d[0] = d[0].slice(0), f.length > 2 && "ID" === (l = f[0]).type && n.getById && 9 === t.nodeType && v && r.relative[f[1].type]) {
                    if (t = (r.find.ID(l.matches[0].replace(nt, rt), t) || [])[0], !t) return i;
                    p && (t = t.parentNode), e = e.slice(f.shift().value.length)
                }
                a = K.needsContext.test(e) ? 0 : f.length;
                while (a--) {
                    if (l = f[a], r.relative[c = l.type]) break;
                    if ((h = r.find[c]) && (s = h(l.matches[0].replace(nt, rt), et.test(f[0].type) && vt(t.parentNode) || t))) {
                        if (f.splice(a, 1), e = s.length && gt(f), !e) return D.apply(i, s), i;
                        break
                    }
                }
            }
            return (p || u(e, d))(s, t, !v, i, et.test(e) && vt(t.parentNode) || t), i
        }, n.sortStable = w.split("").sort(k).join("") === w, n.detectDuplicates = !!c, h(), n.sortDetached = ft(function(e) {
            return 1 & e.compareDocumentPosition(p.createElement("div"))
        }), ft(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || lt("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), n.attributes && ft(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || lt("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), ft(function(e) {
            return null == e.getAttribute("disabled")
        }) || lt(B, function(e, t, n) {
            var r;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), ot
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = n.expr.match.needsContext,
        v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        w = /^.[^:#\[\.,]*$/;
    n.filter = function(e, t, r) {
        var i = t[0];
        return r && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? n.find.matchesSelector(i, e) ? [i] : [] : n.find.matches(e, n.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, n.fn.extend({
        find: function(e) {
            var t, r = this.length,
                i = [],
                s = this;
            if ("string" != typeof e) return this.pushStack(n(e).filter(function() {
                for (t = 0; r > t; t++)
                    if (n.contains(s[t], this)) return !0
            }));
            for (t = 0; r > t; t++) n.find(e, s[t], i);
            return i = this.pushStack(r > 1 ? n.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i
        },
        filter: function(e) {
            return this.pushStack(x(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(x(this, e || [], !0))
        },
        is: function(e) {
            return !!x(this, "string" == typeof e && u.test(e) ? n(e) : e || [], !1).length
        }
    });
    var y, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        A = n.fn.init = function(e, t) {
            var r, i;
            if (!e) return this;
            if ("string" == typeof e) {
                if (r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : z.exec(e), !r || !r[1] && t) return !t || t.jquery ? (t || y).find(e) : this.constructor(t).find(e);
                if (r[1]) {
                    if (t = t instanceof n ? t[0] : t, n.merge(this, n.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : l, !0)), v.test(r[1]) && n.isPlainObject(t))
                        for (r in t) n.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                return i = l.getElementById(r[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = l, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : n.isFunction(e) ? "undefined" != typeof y.ready ? y.ready(e) : e(n) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), n.makeArray(e, this))
        };
    A.prototype = n.fn, y = n(l);
    var B = /^(?:parents|prev(?:Until|All))/,
        C = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    n.extend({
        dir: function(e, t, r) {
            var i = [],
                s = void 0 !== r;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (s && n(e).is(r)) break;
                    i.push(e)
                }
            return i
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), n.fn.extend({
        has: function(e) {
            var t = n(e, this),
                r = t.length;
            return this.filter(function() {
                for (var e = 0; r > e; e++)
                    if (n.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            for (var r, i = 0, s = this.length, o = [], a = u.test(e) || "string" != typeof e ? n(e, t || this.context) : 0; s > i; i++)
                for (r = this[i]; r && r !== t; r = r.parentNode)
                    if (r.nodeType < 11 && (a ? a.index(r) > -1 : 1 === r.nodeType && n.find.matchesSelector(r, e))) {
                        o.push(r);
                        break
                    }
            return this.pushStack(o.length > 1 ? n.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? g.call(n(e), this[0]) : g.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(n.unique(n.merge(this.get(), n(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), n.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return n.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, r) {
            return n.dir(e, "parentNode", r)
        },
        next: function(e) {
            return D(e, "nextSibling")
        },
        prev: function(e) {
            return D(e, "previousSibling")
        },
        nextAll: function(e) {
            return n.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return n.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, r) {
            return n.dir(e, "nextSibling", r)
        },
        prevUntil: function(e, t, r) {
            return n.dir(e, "previousSibling", r)
        },
        siblings: function(e) {
            return n.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return n.sibling(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || n.merge([], e.childNodes)
        }
    }, function(e, t) {
        n.fn[e] = function(r, i) {
            var s = n.map(this, t, r);
            return "Until" !== e.slice(-5) && (i = r), i && "string" == typeof i && (s = n.filter(i, s)), this.length > 1 && (C[e] || n.unique(s), B.test(e) && s.reverse()), this.pushStack(s)
        }
    });
    var E = /\S+/g,
        F = {};
    n.Callbacks = function(e) {
        e = "string" == typeof e ? F[e] || G(e) : n.extend({}, e);
        var t, r, i, s, o, u, a = [],
            f = !e.once && [],
            l = function(n) {
                for (t = e.memory && n, r = !0, u = s || 0, s = 0, o = a.length, i = !0; a && o > u; u++)
                    if (a[u].apply(n[0], n[1]) === !1 && e.stopOnFalse) {
                        t = !1;
                        break
                    }
                i = !1, a && (f ? f.length && l(f.shift()) : t ? a = [] : c.disable())
            },
            c = {
                add: function() {
                    if (a) {
                        var r = a.length;
                        ! function u(t) {
                            n.each(t, function(t, r) {
                                var i = n.type(r);
                                "function" === i ? e.unique && c.has(r) || a.push(r) : r && r.length && "string" !== i && u(r)
                            })
                        }(arguments), i ? o = a.length : t && (s = r, l(t))
                    }
                    return this
                },
                remove: function() {
                    return a && n.each(arguments, function(e, t) {
                        var r;
                        while ((r = n.inArray(t, a, r)) > -1) a.splice(r, 1), i && (o >= r && o--, u >= r && u--)
                    }), this
                },
                has: function(e) {
                    return e ? n.inArray(e, a) > -1 : !!a && !!a.length
                },
                empty: function() {
                    return a = [], o = 0, this
                },
                disable: function() {
                    return a = f = t = void 0, this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return f = void 0, t || c.disable(), this
                },
                locked: function() {
                    return !f
                },
                fireWith: function(e, t) {
                    return !a || r && !f || (t = t || [], t = [e, t.slice ? t.slice() : t], i ? f.push(t) : l(t)), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return c
    }, n.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", n.Callbacks("memory")]
                ],
                r = "pending",
                i = {
                    state: function() {
                        return r
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return n.Deferred(function(r) {
                            n.each(t, function(t, o) {
                                var u = n.isFunction(e[t]) && e[t];
                                s[o[1]](function() {
                                    var e = u && u.apply(this, arguments);
                                    e && n.isFunction(e.promise) ? e.promise().done(r.resolve).fail(r.reject).progress(r.notify) : r[o[0] + "With"](this === i ? r.promise() : this, u ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? n.extend(e, i) : i
                    }
                },
                s = {};
            return i.pipe = i.then, n.each(t, function(e, n) {
                var o = n[2],
                    u = n[3];
                i[n[1]] = o.add, u && o.add(function() {
                    r = u
                }, t[1 ^ e][2].disable, t[2][2].lock), s[n[0]] = function() {
                    return s[n[0] + "With"](this === s ? i : this, arguments), this
                }, s[n[0] + "With"] = o.fireWith
            }), i.promise(s), e && e.call(s, s), s
        },
        when: function(e) {
            var t = 0,
                r = d.call(arguments),
                i = r.length,
                s = 1 !== i || e && n.isFunction(e.promise) ? i : 0,
                o = 1 === s ? e : n.Deferred(),
                u = function(e, t, n) {
                    return function(r) {
                        t[e] = this, n[e] = arguments.length > 1 ? d.call(arguments) : r, n === a ? o.notifyWith(t, n) : --s || o.resolveWith(t, n)
                    }
                },
                a, f, l;
            if (i > 1)
                for (a = new Array(i), f = new Array(i), l = new Array(i); i > t; t++) r[t] && n.isFunction(r[t].promise) ? r[t].promise().done(u(t, l, r)).fail(o.reject).progress(u(t, f, a)) : --s;
            return s || o.resolveWith(l, r), o.promise()
        }
    });
    var H;
    n.fn.ready = function(e) {
        return n.ready.promise().done(e), this
    }, n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? n.readyWait++ : n.ready(!0)
        },
        ready: function(e) {
            (e === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, e !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))))
        }
    }), n.ready.promise = function(e) {
        return H || (H = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(e)
    }, n.ready.promise();
    var J = n.access = function(e, t, r, i, s, o, u) {
        var a = 0,
            f = e.length,
            l = null == r;
        if ("object" === n.type(r)) {
            s = !0;
            for (a in r) n.access(e, t, a, r[a], !0, o, u)
        } else if (void 0 !== i && (s = !0, n.isFunction(i) || (u = !0), l && (u ? (t.call(e, i), t = null) : (l = t, t = function(e, t, r) {
                return l.call(n(e), r)
            })), t))
            for (; f > a; a++) t(e[a], r, u ? i : i.call(e[a], a, t(e[a], r)));
        return s ? e : l ? t.call(e) : f ? t(e[0], r) : o
    };
    n.acceptData = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }, K.uid = 1, K.accepts = n.acceptData, K.prototype = {
        key: function(e) {
            if (!K.accepts(e)) return 0;
            var t = {},
                r = e[this.expando];
            if (!r) {
                r = K.uid++;
                try {
                    t[this.expando] = {
                        value: r
                    }, Object.defineProperties(e, t)
                } catch (i) {
                    t[this.expando] = r, n.extend(e, t)
                }
            }
            return this.cache[r] || (this.cache[r] = {}), r
        },
        set: function(e, t, r) {
            var i, s = this.key(e),
                o = this.cache[s];
            if ("string" == typeof t) o[t] = r;
            else if (n.isEmptyObject(o)) n.extend(this.cache[s], t);
            else
                for (i in t) o[i] = t[i];
            return o
        },
        get: function(e, t) {
            var n = this.cache[this.key(e)];
            return void 0 === t ? n : n[t]
        },
        access: function(e, t, r) {
            var i;
            return void 0 === t || t && "string" == typeof t && void 0 === r ? (i = this.get(e, t), void 0 !== i ? i : this.get(e, n.camelCase(t))) : (this.set(e, t, r), void 0 !== r ? r : t)
        },
        remove: function(e, t) {
            var r, i, s, o = this.key(e),
                u = this.cache[o];
            if (void 0 === t) this.cache[o] = {};
            else {
                n.isArray(t) ? i = t.concat(t.map(n.camelCase)) : (s = n.camelCase(t), t in u ? i = [t, s] : (i = s, i = i in u ? [i] : i.match(E) || [])), r = i.length;
                while (r--) delete u[i[r]]
            }
        },
        hasData: function(e) {
            return !n.isEmptyObject(this.cache[e[this.expando]] || {})
        },
        discard: function(e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    };
    var L = new K,
        M = new K,
        N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        O = /([A-Z])/g;
    n.extend({
        hasData: function(e) {
            return M.hasData(e) || L.hasData(e)
        },
        data: function(e, t, n) {
            return M.access(e, t, n)
        },
        removeData: function(e, t) {
            M.remove(e, t)
        },
        _data: function(e, t, n) {
            return L.access(e, t, n)
        },
        _removeData: function(e, t) {
            L.remove(e, t)
        }
    }), n.fn.extend({
        data: function(e, t) {
            var r, i, s, o = this[0],
                u = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (s = M.get(o), 1 === o.nodeType && !L.get(o, "hasDataAttrs"))) {
                    r = u.length;
                    while (r--) u[r] && (i = u[r].name, 0 === i.indexOf("data-") && (i = n.camelCase(i.slice(5)), P(o, i, s[i])));
                    L.set(o, "hasDataAttrs", !0)
                }
                return s
            }
            return "object" == typeof e ? this.each(function() {
                M.set(this, e)
            }) : J(this, function(t) {
                var r, i = n.camelCase(e);
                if (o && void 0 === t) {
                    if (r = M.get(o, e), void 0 !== r) return r;
                    if (r = M.get(o, i), void 0 !== r) return r;
                    if (r = P(o, i, void 0), void 0 !== r) return r
                } else this.each(function() {
                    var n = M.get(this, i);
                    M.set(this, i, t), -1 !== e.indexOf("-") && void 0 !== n && M.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                M.remove(this, e)
            })
        }
    }), n.extend({
        queue: function(e, t, r) {
            var i;
            return e ? (t = (t || "fx") + "queue", i = L.get(e, t), r && (!i || n.isArray(r) ? i = L.access(e, t, n.makeArray(r)) : i.push(r)), i || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var r = n.queue(e, t),
                i = r.length,
                s = r.shift(),
                o = n._queueHooks(e, t),
                u = function() {
                    n.dequeue(e, t)
                };
            "inprogress" === s && (s = r.shift(), i--), s && ("fx" === t && r.unshift("inprogress"), delete o.stop, s.call(e, u, o)), !i && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var r = t + "queueHooks";
            return L.get(e, r) || L.access(e, r, {
                empty: n.Callbacks("once memory").add(function() {
                    L.remove(e, [t + "queue", r])
                })
            })
        }
    }), n.fn.extend({
        queue: function(e, t) {
            var r = 2;
            return "string" != typeof e && (t = e, e = "fx", r--), arguments.length < r ? n.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var r = n.queue(this, e, t);
                n._queueHooks(this, e), "fx" === e && "inprogress" !== r[0] && n.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                n.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var r, i = 1,
                s = n.Deferred(),
                o = this,
                u = this.length,
                a = function() {
                    --i || s.resolveWith(o, [o])
                };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (u--) r = L.get(o[u], e + "queueHooks"), r && r.empty && (i++, r.empty.add(a));
            return a(), s.promise(t)
        }
    });
    var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        R = ["Top", "Right", "Bottom", "Left"],
        S = function(e, t) {
            return e = t || e, "none" === n.css(e, "display") || !n.contains(e.ownerDocument, e)
        },
        T = /^(?:checkbox|radio)$/i;
    ! function() {
        var e = l.createDocumentFragment(),
            t = e.appendChild(l.createElement("div")),
            n = l.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), k.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var U = "undefined";
    k.focusinBubbles = "onfocusin" in a;
    var V = /^key/,
        W = /^(?:mouse|pointer|contextmenu)|click/,
        X = /^(?:focusinfocus|focusoutblur)$/,
        Y = /^([^.]*)(?:\.(.+)|)$/;
    n.event = {
        global: {},
        add: function(e, t, r, i, s) {
            var o, u, a, f, l, c, h, p, d, v, m, g = L.get(e);
            if (g) {
                r.handler && (o = r, r = o.handler, s = o.selector), r.guid || (r.guid = n.guid++), (f = g.events) || (f = g.events = {}), (u = g.handle) || (u = g.handle = function(t) {
                    return typeof n !== U && n.event.triggered !== t.type ? n.event.dispatch.apply(e, arguments) : void 0
                }), t = (t || "").match(E) || [""], l = t.length;
                while (l--) a = Y.exec(t[l]) || [], d = m = a[1], v = (a[2] || "").split(".").sort(), d && (h = n.event.special[d] || {}, d = (s ? h.delegateType : h.bindType) || d, h = n.event.special[d] || {}, c = n.extend({
                    type: d,
                    origType: m,
                    data: i,
                    handler: r,
                    guid: r.guid,
                    selector: s,
                    needsContext: s && n.expr.match.needsContext.test(s),
                    namespace: v.join(".")
                }, o), (p = f[d]) || (p = f[d] = [], p.delegateCount = 0, h.setup && h.setup.call(e, i, v, u) !== !1 || e.addEventListener && e.addEventListener(d, u, !1)), h.add && (h.add.call(e, c), c.handler.guid || (c.handler.guid = r.guid)), s ? p.splice(p.delegateCount++, 0, c) : p.push(c), n.event.global[d] = !0)
            }
        },
        remove: function(e, t, r, i, s) {
            var o, u, a, f, l, c, h, p, d, v, m, g = L.hasData(e) && L.get(e);
            if (g && (f = g.events)) {
                t = (t || "").match(E) || [""], l = t.length;
                while (l--)
                    if (a = Y.exec(t[l]) || [], d = m = a[1], v = (a[2] || "").split(".").sort(), d) {
                        h = n.event.special[d] || {}, d = (i ? h.delegateType : h.bindType) || d, p = f[d] || [], a = a[2] && new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = p.length;
                        while (o--) c = p[o], !s && m !== c.origType || r && r.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, h.remove && h.remove.call(e, c));
                        u && !p.length && (h.teardown && h.teardown.call(e, v, g.handle) !== !1 || n.removeEvent(e, d, g.handle), delete f[d])
                    } else
                        for (d in f) n.event.remove(e, d + t[l], r, i, !0);
                n.isEmptyObject(f) && (delete g.handle, L.remove(e, "events"))
            }
        },
        trigger: function(e, t, r, i) {
            var s, o, u, f, c, h, p, d = [r || l],
                v = j.call(e, "type") ? e.type : e,
                m = j.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = u = r = r || l, 3 !== r.nodeType && 8 !== r.nodeType && !X.test(v + n.event.triggered) && (v.indexOf(".") >= 0 && (m = v.split("."), v = m.shift(), m.sort()), c = v.indexOf(":") < 0 && "on" + v, e = e[n.expando] ? e : new n.Event(v, "object" == typeof e && e), e.isTrigger = i ? 2 : 3, e.namespace = m.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : n.makeArray(t, [e]), p = n.event.special[v] || {}, i || !p.trigger || p.trigger.apply(r, t) !== !1)) {
                if (!i && !p.noBubble && !n.isWindow(r)) {
                    for (f = p.delegateType || v, X.test(f + v) || (o = o.parentNode); o; o = o.parentNode) d.push(o), u = o;
                    u === (r.ownerDocument || l) && d.push(u.defaultView || u.parentWindow || a)
                }
                s = 0;
                while ((o = d[s++]) && !e.isPropagationStopped()) e.type = s > 1 ? f : p.bindType || v, h = (L.get(o, "events") || {})[e.type] && L.get(o, "handle"), h && h.apply(o, t), h = c && o[c], h && h.apply && n.acceptData(o) && (e.result = h.apply(o, t), e.result === !1 && e.preventDefault());
                return e.type = v, i || e.isDefaultPrevented() || p._default && p._default.apply(d.pop(), t) !== !1 || !n.acceptData(r) || c && n.isFunction(r[v]) && !n.isWindow(r) && (u = r[c], u && (r[c] = null), n.event.triggered = v, r[v](), n.event.triggered = void 0, u && (r[c] = u)), e.result
            }
        },
        dispatch: function(e) {
            e = n.event.fix(e);
            var t, r, i, s, o, u = [],
                a = d.call(arguments),
                f = (L.get(this, "events") || {})[e.type] || [],
                l = n.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                u = n.event.handlers.call(this, e, f), t = 0;
                while ((s = u[t++]) && !e.isPropagationStopped()) {
                    e.currentTarget = s.elem, r = 0;
                    while ((o = s.handlers[r++]) && !e.isImmediatePropagationStopped())(!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, i = ((n.event.special[o.origType] || {}).handle || o.handler).apply(s.elem, a), void 0 !== i && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()))
                }
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var r, i, s, o, u = [],
                a = t.delegateCount,
                f = e.target;
            if (a && f.nodeType && (!e.button || "click" !== e.type))
                for (; f !== this; f = f.parentNode || this)
                    if (f.disabled !== !0 || "click" !== e.type) {
                        for (i = [], r = 0; a > r; r++) o = t[r], s = o.selector + " ", void 0 === i[s] && (i[s] = o.needsContext ? n(s, this).index(f) >= 0 : n.find(s, this, null, [f]).length), i[s] && i.push(o);
                        i.length && u.push({
                            elem: f,
                            handlers: i
                        })
                    }
            return a < t.length && u.push({
                elem: this,
                handlers: t.slice(a)
            }), u
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, s = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || l, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === s || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
            }
        },
        fix: function(e) {
            if (e[n.expando]) return e;
            var t, r, i, s = e.type,
                o = e,
                u = this.fixHooks[s];
            u || (this.fixHooks[s] = u = W.test(s) ? this.mouseHooks : V.test(s) ? this.keyHooks : {}), i = u.props ? this.props.concat(u.props) : this.props, e = new n.Event(o), t = i.length;
            while (t--) r = i[t], e[r] = o[r];
            return e.target || (e.target = l), 3 === e.target.nodeType && (e.target = e.target.parentNode), u.filter ? u.filter(e, o) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== _() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === _() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return n.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, r, i) {
            var s = n.extend(new n.Event, r, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? n.event.trigger(s, null, t) : n.event.dispatch.call(t, s), s.isDefaultPrevented() && r.preventDefault()
        }
    }, n.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }, n.Event = function(e, t) {
        return this instanceof n.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? Z : $) : this.type = e, t && n.extend(this, t), this.timeStamp = e && e.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(e, t)
    }, n.Event.prototype = {
        isDefaultPrevented: $,
        isPropagationStopped: $,
        isImmediatePropagationStopped: $,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Z, e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Z, e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Z, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        n.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var r, i = this,
                    s = e.relatedTarget,
                    o = e.handleObj;
                return (!s || s !== i && !n.contains(i, s)) && (e.type = o.origType, r = o.handler.apply(this, arguments), e.type = t), r
            }
        }
    }), k.focusinBubbles || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var r = function(e) {
            n.event.simulate(t, e.target, n.event.fix(e), !0)
        };
        n.event.special[t] = {
            setup: function() {
                var n = this.ownerDocument || this,
                    i = L.access(n, t);
                i || n.addEventListener(e, r, !0), L.access(n, t, (i || 0) + 1)
            },
            teardown: function() {
                var n = this.ownerDocument || this,
                    i = L.access(n, t) - 1;
                i ? L.access(n, t, i) : (n.removeEventListener(e, r, !0), L.remove(n, t))
            }
        }
    }), n.fn.extend({
        on: function(e, t, r, i, s) {
            var o, u;
            if ("object" == typeof e) {
                "string" != typeof t && (r = r || t, t = void 0);
                for (u in e) this.on(u, t, r, e[u], s);
                return this
            }
            if (null == r && null == i ? (i = t, r = t = void 0) : null == i && ("string" == typeof t ? (i = r, r = void 0) : (i = r, r = t, t = void 0)), i === !1) i = $;
            else if (!i) return this;
            return 1 === s && (o = i, i = function(e) {
                return n().off(e), o.apply(this, arguments)
            }, i.guid = o.guid || (o.guid = n.guid++)), this.each(function() {
                n.event.add(this, e, i, r, t)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, t, r) {
            var i, s;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, n(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (s in e) this.off(s, t, e[s]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (r = t, t = void 0), r === !1 && (r = $), this.each(function() {
                n.event.remove(this, e, r, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                n.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var r = this[0];
            return r ? n.event.trigger(e, t, r, !0) : void 0
        }
    });
    var aa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        ba = /<([\w:]+)/,
        ca = /<|&#?\w+;/,
        da = /<(?:script|style|link)/i,
        ea = /checked\s*(?:[^=]|=\s*.checked.)/i,
        fa = /^$|\/(?:java|ecma)script/i,
        ga = /^true\/(.*)/,
        ha = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        ia = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    ia.optgroup = ia.option, ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead, ia.th = ia.td, n.extend({
        clone: function(e, t, r) {
            var i, s, o, u, a = e.cloneNode(!0),
                f = n.contains(e.ownerDocument, e);
            if (!(k.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || n.isXMLDoc(e)))
                for (u = oa(a), o = oa(e), i = 0, s = o.length; s > i; i++) pa(o[i], u[i]);
            if (t)
                if (r)
                    for (o = o || oa(e), u = u || oa(a), i = 0, s = o.length; s > i; i++) na(o[i], u[i]);
                else na(e, a);
            return u = oa(a, "script"), u.length > 0 && ma(u, !f && oa(e, "script")), a
        },
        buildFragment: function(e, t, r, i) {
            for (var s, o, u, a, f, l, c = t.createDocumentFragment(), h = [], p = 0, d = e.length; d > p; p++)
                if (s = e[p], s || 0 === s)
                    if ("object" === n.type(s)) n.merge(h, s.nodeType ? [s] : s);
                    else if (ca.test(s)) {
                o = o || c.appendChild(t.createElement("div")), u = (ba.exec(s) || ["", ""])[1].toLowerCase(), a = ia[u] || ia._default, o.innerHTML = a[1] + s.replace(aa, "<$1></$2>") + a[2], l = a[0];
                while (l--) o = o.lastChild;
                n.merge(h, o.childNodes), o = c.firstChild, o.textContent = ""
            } else h.push(t.createTextNode(s));
            c.textContent = "", p = 0;
            while (s = h[p++])
                if ((!i || -1 === n.inArray(s, i)) && (f = n.contains(s.ownerDocument, s), o = oa(c.appendChild(s), "script"), f && ma(o), r)) {
                    l = 0;
                    while (s = o[l++]) fa.test(s.type || "") && r.push(s)
                }
            return c
        },
        cleanData: function(e) {
            for (var t, r, i, s, o = n.event.special, u = 0; void 0 !== (r = e[u]); u++) {
                if (n.acceptData(r) && (s = r[L.expando], s && (t = L.cache[s]))) {
                    if (t.events)
                        for (i in t.events) o[i] ? n.event.remove(r, i) : n.removeEvent(r, i, t.handle);
                    L.cache[s] && delete L.cache[s]
                }
                delete M.cache[r[M.expando]]
            }
        }
    }), n.fn.extend({
        text: function(e) {
            return J(this, function(e) {
                return void 0 === e ? n.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = ja(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = ja(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var r, i = e ? n.filter(e, this) : this, s = 0; null != (r = i[s]); s++) t || 1 !== r.nodeType || n.cleanData(oa(r)), r.parentNode && (t && n.contains(r.ownerDocument, r) && ma(oa(r, "script")), r.parentNode.removeChild(r));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (n.cleanData(oa(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return n.clone(this, e, t)
            })
        },
        html: function(e) {
            return J(this, function(e) {
                var t = this[0] || {},
                    r = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !da.test(e) && !ia[(ba.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(aa, "<$1></$2>");
                    try {
                        for (; i > r; r++) t = this[r] || {}, 1 === t.nodeType && (n.cleanData(oa(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (s) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode, n.cleanData(oa(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(t, r) {
            t = e.apply([], t);
            var i, s, o, u, a, f, l = 0,
                c = this.length,
                h = this,
                p = c - 1,
                d = t[0],
                v = n.isFunction(d);
            if (v || c > 1 && "string" == typeof d && !k.checkClone && ea.test(d)) return this.each(function(e) {
                var n = h.eq(e);
                v && (t[0] = d.call(this, e, n.html())), n.domManip(t, r)
            });
            if (c && (i = n.buildFragment(t, this[0].ownerDocument, !1, this), s = i.firstChild, 1 === i.childNodes.length && (i = s), s)) {
                for (o = n.map(oa(i, "script"), ka), u = o.length; c > l; l++) a = i, l !== p && (a = n.clone(a, !0, !0), u && n.merge(o, oa(a, "script"))), r.call(this[l], a, l);
                if (u)
                    for (f = o[o.length - 1].ownerDocument, n.map(o, la), l = 0; u > l; l++) a = o[l], fa.test(a.type || "") && !L.access(a, "globalEval") && n.contains(f, a) && (a.src ? n._evalUrl && n._evalUrl(a.src) : n.globalEval(a.textContent.replace(ha, "")))
            }
            return this
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        n.fn[e] = function(e) {
            for (var r, i = [], s = n(e), o = s.length - 1, u = 0; o >= u; u++) r = u === o ? this : this.clone(!0), n(s[u])[t](r), f.apply(i, r.get());
            return this.pushStack(i)
        }
    });
    var qa, ra = {},
        ua = /^margin/,
        va = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"),
        wa = function(e) {
            return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : a.getComputedStyle(e, null)
        };
    ! function() {
        var e, t, r = l.documentElement,
            i = l.createElement("div"),
            s = l.createElement("div");
        if (s.style) {
            s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === s.style.backgroundClip, i.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", i.appendChild(s);

            function o() {
                s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s.innerHTML = "", r.appendChild(i);
                var n = a.getComputedStyle(s, null);
                e = "1%" !== n.top, t = "4px" === n.width, r.removeChild(i)
            }
            a.getComputedStyle && n.extend(k, {
                pixelPosition: function() {
                    return o(), e
                },
                boxSizingReliable: function() {
                    return null == t && o(), t
                },
                reliableMarginRight: function() {
                    var e, t = s.appendChild(l.createElement("div"));
                    return t.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", s.style.width = "1px", r.appendChild(i), e = !parseFloat(a.getComputedStyle(t, null).marginRight), r.removeChild(i), s.removeChild(t), e
                }
            })
        }
    }(), n.swap = function(e, t, n, r) {
        var i, s, o = {};
        for (s in t) o[s] = e.style[s], e.style[s] = t[s];
        i = n.apply(e, r || []);
        for (s in t) e.style[s] = o[s];
        return i
    };
    var za = /^(none|table(?!-c[ea]).+)/,
        Aa = new RegExp("^(" + Q + ")(.*)$", "i"),
        Ba = new RegExp("^([+-])=(" + Q + ")", "i"),
        Ca = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Da = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ea = ["Webkit", "O", "Moz", "ms"];
    n.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = xa(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(e, t, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var s, o, u, a = n.camelCase(t),
                    f = e.style;
                return t = n.cssProps[a] || (n.cssProps[a] = Fa(f, a)), u = n.cssHooks[t] || n.cssHooks[a], void 0 === r ? u && "get" in u && void 0 !== (s = u.get(e, !1, i)) ? s : f[t] : (o = typeof r, "string" === o && (s = Ba.exec(r)) && (r = (s[1] + 1) * s[2] + parseFloat(n.css(e, t)), o = "number"), null != r && r === r && ("number" !== o || n.cssNumber[a] || (r += "px"), k.clearCloneStyle || "" !== r || 0 !== t.indexOf("background") || (f[t] = "inherit"), u && "set" in u && void 0 === (r = u.set(e, r, i)) || (f[t] = r)), void 0)
            }
        },
        css: function(e, t, r, i) {
            var s, o, u, a = n.camelCase(t);
            return t = n.cssProps[a] || (n.cssProps[a] = Fa(e.style, a)), u = n.cssHooks[t] || n.cssHooks[a], u && "get" in u && (s = u.get(e, !0, r)), void 0 === s && (s = xa(e, t, i)), "normal" === s && t in Da && (s = Da[t]), "" === r || r ? (o = parseFloat(s), r === !0 || n.isNumeric(o) ? o || 0 : s) : s
        }
    }), n.each(["height", "width"], function(e, t) {
        n.cssHooks[t] = {
            get: function(e, r, i) {
                return r ? za.test(n.css(e, "display")) && 0 === e.offsetWidth ? n.swap(e, Ca, function() {
                    return Ia(e, t, i)
                }) : Ia(e, t, i) : void 0
            },
            set: function(e, r, i) {
                var s = i && wa(e);
                return Ga(e, r, i ? Ha(e, t, i, "border-box" === n.css(e, "boxSizing", !1, s), s) : 0)
            }
        }
    }), n.cssHooks.marginRight = ya(k.reliableMarginRight, function(e, t) {
        return t ? n.swap(e, {
            display: "inline-block"
        }, xa, [e, "marginRight"]) : void 0
    }), n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        n.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, s = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + R[r] + t] = s[r] || s[r - 2] || s[0];
                return i
            }
        }, ua.test(e) || (n.cssHooks[e + t].set = Ga)
    }), n.fn.extend({
        css: function(e, t) {
            return J(this, function(e, t, r) {
                var i, s, o = {},
                    u = 0;
                if (n.isArray(t)) {
                    for (i = wa(e), s = t.length; s > u; u++) o[t[u]] = n.css(e, t[u], !1, i);
                    return o
                }
                return void 0 !== r ? n.style(e, t, r) : n.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return Ja(this, !0)
        },
        hide: function() {
            return Ja(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                S(this) ? n(this).show() : n(this).hide()
            })
        }
    }), n.Tween = Ka, Ka.prototype = {
        constructor: Ka,
        init: function(e, t, r, i, s, o) {
            this.elem = e, this.prop = r, this.easing = s || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (n.cssNumber[r] ? "" : "px")
        },
        cur: function() {
            var e = Ka.propHooks[this.prop];
            return e && e.get ? e.get(this) : Ka.propHooks._default.get(this)
        },
        run: function(e) {
            var t, r = Ka.propHooks[this.prop];
            return this.options.duration ? this.pos = t = n.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), r && r.set ? r.set(this) : Ka.propHooks._default.set(this), this
        }
    }, Ka.prototype.init.prototype = Ka.prototype, Ka.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = n.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                n.fx.step[e.prop] ? n.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[n.cssProps[e.prop]] || n.cssHooks[e.prop]) ? n.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, Ka.propHooks.scrollTop = Ka.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, n.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, n.fx = Ka.prototype.init, n.fx.step = {};
    var La, Ma, Na = /^(?:toggle|show|hide)$/,
        Oa = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
        Pa = /queueHooks$/,
        Qa = [Va],
        Ra = {
            "*": [function(e, t) {
                var r = this.createTween(e, t),
                    i = r.cur(),
                    s = Oa.exec(t),
                    o = s && s[3] || (n.cssNumber[e] ? "" : "px"),
                    u = (n.cssNumber[e] || "px" !== o && +i) && Oa.exec(n.css(r.elem, e)),
                    a = 1,
                    f = 20;
                if (u && u[3] !== o) {
                    o = o || u[3], s = s || [], u = +i || 1;
                    do a = a || ".5", u /= a, n.style(r.elem, e, u + o); while (a !== (a = r.cur() / i) && 1 !== a && --f)
                }
                return s && (u = r.start = +u || +i || 0, r.unit = o, r.end = s[1] ? u + (s[1] + 1) * s[2] : +s[2]), r
            }]
        };
    n.Animation = n.extend(Xa, {
            tweener: function(e, t) {
                n.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var r, i = 0, s = e.length; s > i; i++) r = e[i], Ra[r] = Ra[r] || [], Ra[r].unshift(t)
            },
            prefilter: function(e, t) {
                t ? Qa.unshift(e) : Qa.push(e)
            }
        }), n.speed = function(e, t, r) {
            var i = e && "object" == typeof e ? n.extend({}, e) : {
                complete: r || !r && t || n.isFunction(e) && e,
                duration: e,
                easing: r && t || t && !n.isFunction(t) && t
            };
            return i.duration = n.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in n.fx.speeds ? n.fx.speeds[i.duration] : n.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                n.isFunction(i.old) && i.old.call(this), i.queue && n.dequeue(this, i.queue)
            }, i
        }, n.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(S).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, r, i) {
                var s = n.isEmptyObject(e),
                    o = n.speed(t, r, i),
                    u = function() {
                        var t = Xa(this, n.extend({}, e), o);
                        (s || L.get(this, "finish")) && t.stop(!0)
                    };
                return u.finish = u, s || o.queue === !1 ? this.each(u) : this.queue(o.queue, u)
            },
            stop: function(e, t, r) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(r)
                };
                return "string" != typeof e && (r = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        s = null != e && e + "queueHooks",
                        o = n.timers,
                        u = L.get(this);
                    if (s) u[s] && u[s].stop && i(u[s]);
                    else
                        for (s in u) u[s] && u[s].stop && Pa.test(s) && i(u[s]);
                    for (s = o.length; s--;) o[s].elem !== this || null != e && o[s].queue !== e || (o[s].anim.stop(r), t = !1, o.splice(s, 1));
                    (t || !r) && n.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, r = L.get(this),
                        i = r[e + "queue"],
                        s = r[e + "queueHooks"],
                        o = n.timers,
                        u = i ? i.length : 0;
                    for (r.finish = !0, n.queue(this, e, []), s && s.stop && s.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; u > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete r.finish
                })
            }
        }), n.each(["toggle", "show", "hide"], function(e, t) {
            var r = n.fn[t];
            n.fn[t] = function(e, n, i) {
                return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(Ta(t, !0), e, n, i)
            }
        }), n.each({
            slideDown: Ta("show"),
            slideUp: Ta("hide"),
            slideToggle: Ta("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            n.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), n.timers = [], n.fx.tick = function() {
            var e, t = 0,
                r = n.timers;
            for (La = n.now(); t < r.length; t++) e = r[t], e() || r[t] !== e || r.splice(t--, 1);
            r.length || n.fx.stop(), La = void 0
        }, n.fx.timer = function(e) {
            n.timers.push(e), e() ? n.fx.start() : n.timers.pop()
        }, n.fx.interval = 13, n.fx.start = function() {
            Ma || (Ma = setInterval(n.fx.tick, n.fx.interval))
        }, n.fx.stop = function() {
            clearInterval(Ma), Ma = null
        }, n.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, n.fn.delay = function(e, t) {
            return e = n.fx ? n.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        function() {
            var e = l.createElement("input"),
                t = l.createElement("select"),
                n = t.appendChild(l.createElement("option"));
            e.type = "checkbox", k.checkOn = "" !== e.value, k.optSelected = n.selected, t.disabled = !0, k.optDisabled = !n.disabled, e = l.createElement("input"), e.value = "t", e.type = "radio", k.radioValue = "t" === e.value
        }();
    var Ya, Za, $a = n.expr.attrHandle;
    n.fn.extend({
        attr: function(e, t) {
            return J(this, n.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                n.removeAttr(this, e)
            })
        }
    }), n.extend({
        attr: function(e, t, r) {
            var i, s, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === U ? n.prop(e, t, r) : (1 === o && n.isXMLDoc(e) || (t = t.toLowerCase(), i = n.attrHooks[t] || (n.expr.match.bool.test(t) ? Za : Ya)), void 0 === r ? i && "get" in i && null !== (s = i.get(e, t)) ? s : (s = n.find.attr(e, t), null == s ? void 0 : s) : null !== r ? i && "set" in i && void 0 !== (s = i.set(e, r, t)) ? s : (e.setAttribute(t, r + ""), r) : void n.removeAttr(e, t))
        },
        removeAttr: function(e, t) {
            var r, i, s = 0,
                o = t && t.match(E);
            if (o && 1 === e.nodeType)
                while (r = o[s++]) i = n.propFix[r] || r, n.expr.match.bool.test(r) && (e[i] = !1), e.removeAttribute(r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!k.radioValue && "radio" === t && n.nodeName(e, "input")) {
                        var r = e.value;
                        return e.setAttribute("type", t), r && (e.value = r), t
                    }
                }
            }
        }
    }), Za = {
        set: function(e, t, r) {
            return t === !1 ? n.removeAttr(e, r) : e.setAttribute(r, r), r
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var r = $a[t] || n.find.attr;
        $a[t] = function(e, t, n) {
            var i, s;
            return n || (s = $a[t], $a[t] = i, i = null != r(e, t, n) ? t.toLowerCase() : null, $a[t] = s), i
        }
    });
    var _a = /^(?:input|select|textarea|button)$/i;
    n.fn.extend({
        prop: function(e, t) {
            return J(this, n.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[n.propFix[e] || e]
            })
        }
    }), n.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, r) {
            var i, s, o, u = e.nodeType;
            if (e && 3 !== u && 8 !== u && 2 !== u) return o = 1 !== u || !n.isXMLDoc(e), o && (t = n.propFix[t] || t, s = n.propHooks[t]), void 0 !== r ? s && "set" in s && void 0 !== (i = s.set(e, r, t)) ? i : e[t] = r : s && "get" in s && null !== (i = s.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    return e.hasAttribute("tabindex") || _a.test(e.nodeName) || e.href ? e.tabIndex : -1
                }
            }
        }
    }), k.optSelected || (n.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        n.propFix[this.toLowerCase()] = this
    });
    var ab = /[\t\r\n\f]/g;
    n.fn.extend({
        addClass: function(e) {
            var t, r, i, s, o, u, a = "string" == typeof e && e,
                f = 0,
                l = this.length;
            if (n.isFunction(e)) return this.each(function(t) {
                n(this).addClass(e.call(this, t, this.className))
            });
            if (a)
                for (t = (e || "").match(E) || []; l > f; f++)
                    if (r = this[f], i = 1 === r.nodeType && (r.className ? (" " + r.className + " ").replace(ab, " ") : " ")) {
                        o = 0;
                        while (s = t[o++]) i.indexOf(" " + s + " ") < 0 && (i += s + " ");
                        u = n.trim(i), r.className !== u && (r.className = u)
                    }
            return this
        },
        removeClass: function(e) {
            var t, r, i, s, o, u, a = 0 === arguments.length || "string" == typeof e && e,
                f = 0,
                l = this.length;
            if (n.isFunction(e)) return this.each(function(t) {
                n(this).removeClass(e.call(this, t, this.className))
            });
            if (a)
                for (t = (e || "").match(E) || []; l > f; f++)
                    if (r = this[f], i = 1 === r.nodeType && (r.className ? (" " + r.className + " ").replace(ab, " ") : "")) {
                        o = 0;
                        while (s = t[o++])
                            while (i.indexOf(" " + s + " ") >= 0) i = i.replace(" " + s + " ", " ");
                        u = e ? n.trim(i) : "", r.className !== u && (r.className = u)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var r = typeof e;
            return "boolean" == typeof t && "string" === r ? t ? this.addClass(e) : this.removeClass(e) : this.each(n.isFunction(e) ? function(r) {
                n(this).toggleClass(e.call(this, r, this.className, t), t)
            } : function() {
                if ("string" === r) {
                    var t, i = 0,
                        s = n(this),
                        o = e.match(E) || [];
                    while (t = o[i++]) s.hasClass(t) ? s.removeClass(t) : s.addClass(t)
                } else(r === U || "boolean" === r) && (this.className && L.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : L.get(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(ab, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    });
    var bb = /\r/g;
    n.fn.extend({
        val: function(e) {
            var t, r, i, s = this[0];
            if (arguments.length) return i = n.isFunction(e), this.each(function(r) {
                var s;
                1 === this.nodeType && (s = i ? e.call(this, r, n(this).val()) : e, null == s ? s = "" : "number" == typeof s ? s += "" : n.isArray(s) && (s = n.map(s, function(e) {
                    return null == e ? "" : e + ""
                })), t = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, s, "value") || (this.value = s))
            });
            if (s) return t = n.valHooks[s.type] || n.valHooks[s.nodeName.toLowerCase()], t && "get" in t && void 0 !== (r = t.get(s, "value")) ? r : (r = s.value, "string" == typeof r ? r.replace(bb, "") : null == r ? "" : r)
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = n.find.attr(e, "value");
                    return null != t ? t : n.trim(n.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, r, i = e.options, s = e.selectedIndex, o = "select-one" === e.type || 0 > s, u = o ? null : [], a = o ? s + 1 : i.length, f = 0 > s ? a : o ? s : 0; a > f; f++)
                        if (r = i[f], !(!r.selected && f !== s || (k.optDisabled ? r.disabled : null !== r.getAttribute("disabled")) || r.parentNode.disabled && n.nodeName(r.parentNode, "optgroup"))) {
                            if (t = n(r).val(), o) return t;
                            u.push(t)
                        }
                    return u
                },
                set: function(e, t) {
                    var r, i, s = e.options,
                        o = n.makeArray(t),
                        u = s.length;
                    while (u--) i = s[u], (i.selected = n.inArray(i.value, o) >= 0) && (r = !0);
                    return r || (e.selectedIndex = -1), o
                }
            }
        }
    }), n.each(["radio", "checkbox"], function() {
        n.valHooks[this] = {
            set: function(e, t) {
                return n.isArray(t) ? e.checked = n.inArray(n(e).val(), t) >= 0 : void 0
            }
        }, k.checkOn || (n.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        n.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), n.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var cb = n.now(),
        db = /\?/;
    n.parseJSON = function(e) {
        return JSON.parse(e + "")
    }, n.parseXML = function(e) {
        var t, r;
        if (!e || "string" != typeof e) return null;
        try {
            r = new DOMParser, t = r.parseFromString(e, "text/xml")
        } catch (i) {
            t = void 0
        }
        return (!t || t.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + e), t
    };
    var eb = /#.*$/,
        fb = /([?&])_=[^&]*/,
        gb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        hb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        ib = /^(?:GET|HEAD)$/,
        jb = /^\/\//,
        kb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        lb = {},
        mb = {},
        nb = "*/".concat("*"),
        ob = a.location.href,
        pb = kb.exec(ob.toLowerCase()) || [];
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ob,
            type: "GET",
            isLocal: hb.test(pb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": nb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? sb(sb(e, n.ajaxSettings), t) : sb(n.ajaxSettings, e)
        },
        ajaxPrefilter: qb(lb),
        ajaxTransport: qb(mb),
        ajax: function(e, t) {
            function T(e, t, o, a) {
                var l, g, y, w, E, x = t;
                2 !== b && (b = 2, u && clearTimeout(u), r = void 0, s = a || "", S.readyState = e > 0 ? 4 : 0, l = e >= 200 && 300 > e || 304 === e, o && (w = tb(c, S, o)), w = ub(c, w, S, l), l ? (c.ifModified && (E = S.getResponseHeader("Last-Modified"), E && (n.lastModified[i] = E), E = S.getResponseHeader("etag"), E && (n.etag[i] = E)), 204 === e || "HEAD" === c.type ? x = "nocontent" : 304 === e ? x = "notmodified" : (x = w.state, g = w.data, y = w.error, l = !y)) : (y = x, (e || !x) && (x = "error", 0 > e && (e = 0))), S.status = e, S.statusText = (t || x) + "", l ? d.resolveWith(h, [g, x, S]) : d.rejectWith(h, [S, x, y]), S.statusCode(m), m = void 0, f && p.trigger(l ? "ajaxSuccess" : "ajaxError", [S, c, l ? g : y]), v.fireWith(h, [S, x]), f && (p.trigger("ajaxComplete", [S, c]), --n.active || n.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var r, i, s, o, u, a, f, l, c = n.ajaxSetup({}, t),
                h = c.context || c,
                p = c.context && (h.nodeType || h.jquery) ? n(h) : n.event,
                d = n.Deferred(),
                v = n.Callbacks("once memory"),
                m = c.statusCode || {},
                g = {},
                y = {},
                b = 0,
                w = "canceled",
                S = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!o) {
                                o = {};
                                while (t = gb.exec(s)) o[t[1].toLowerCase()] = t[2]
                            }
                            t = o[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return b || (e = y[n] = y[n] || e, g[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return b || (c.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > b)
                                for (t in e) m[t] = [m[t], e[t]];
                            else S.always(e[S.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || w;
                        return r && r.abort(t), T(0, t), this
                    }
                };
            if (d.promise(S).complete = v.add, S.success = S.done, S.error = S.fail, c.url = ((e || c.url || ob) + "").replace(eb, "").replace(jb, pb[1] + "//"), c.type = t.method || t.type || c.method || c.type, c.dataTypes = n.trim(c.dataType || "*").toLowerCase().match(E) || [""], null == c.crossDomain && (a = kb.exec(c.url.toLowerCase()), c.crossDomain = !(!a || a[1] === pb[1] && a[2] === pb[2] && (a[3] || ("http:" === a[1] ? "80" : "443")) === (pb[3] || ("http:" === pb[1] ? "80" : "443")))), c.data && c.processData && "string" != typeof c.data && (c.data = n.param(c.data, c.traditional)), rb(lb, c, t, S), 2 === b) return S;
            f = n.event && c.global, f && 0 === n.active++ && n.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !ib.test(c.type), i = c.url, c.hasContent || (c.data && (i = c.url += (db.test(i) ? "&" : "?") + c.data, delete c.data), c.cache === !1 && (c.url = fb.test(i) ? i.replace(fb, "$1_=" + cb++) : i + (db.test(i) ? "&" : "?") + "_=" + cb++)), c.ifModified && (n.lastModified[i] && S.setRequestHeader("If-Modified-Since", n.lastModified[i]), n.etag[i] && S.setRequestHeader("If-None-Match", n.etag[i])), (c.data && c.hasContent && c.contentType !== !1 || t.contentType) && S.setRequestHeader("Content-Type", c.contentType), S.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ("*" !== c.dataTypes[0] ? ", " + nb + "; q=0.01" : "") : c.accepts["*"]);
            for (l in c.headers) S.setRequestHeader(l, c.headers[l]);
            if (!c.beforeSend || c.beforeSend.call(h, S, c) !== !1 && 2 !== b) {
                w = "abort";
                for (l in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) S[l](c[l]);
                if (r = rb(mb, c, t, S)) {
                    S.readyState = 1, f && p.trigger("ajaxSend", [S, c]), c.async && c.timeout > 0 && (u = setTimeout(function() {
                        S.abort("timeout")
                    }, c.timeout));
                    try {
                        b = 1, r.send(g, T)
                    } catch (x) {
                        if (!(2 > b)) throw x;
                        T(-1, x)
                    }
                } else T(-1, "No Transport");
                return S
            }
            return S.abort()
        },
        getJSON: function(e, t, r) {
            return n.get(e, t, r, "json")
        },
        getScript: function(e, t) {
            return n.get(e, void 0, t, "script")
        }
    }), n.each(["get", "post"], function(e, t) {
        n[t] = function(e, r, i, s) {
            return n.isFunction(r) && (s = s || i, i = r, r = void 0), n.ajax({
                url: e,
                type: t,
                dataType: s,
                data: r,
                success: i
            })
        }
    }), n._evalUrl = function(e) {
        return n.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, n.fn.extend({
        wrapAll: function(e) {
            var t;
            return n.isFunction(e) ? this.each(function(t) {
                n(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = n(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function(e) {
            return this.each(n.isFunction(e) ? function(t) {
                n(this).wrapInner(e.call(this, t))
            } : function() {
                var t = n(this),
                    r = t.contents();
                r.length ? r.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = n.isFunction(e);
            return this.each(function(r) {
                n(this).wrapAll(t ? e.call(this, r) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    }), n.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0
    }, n.expr.filters.visible = function(e) {
        return !n.expr.filters.hidden(e)
    };
    var vb = /%20/g,
        wb = /\[\]$/,
        xb = /\r?\n/g,
        yb = /^(?:submit|button|image|reset|file)$/i,
        zb = /^(?:input|select|textarea|keygen)/i;
    n.param = function(e, t) {
        var r, i = [],
            s = function(e, t) {
                t = n.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(e) || e.jquery && !n.isPlainObject(e)) n.each(e, function() {
            s(this.name, this.value)
        });
        else
            for (r in e) Ab(r, e[r], t, s);
        return i.join("&").replace(vb, "+")
    }, n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = n.prop(this, "elements");
                return e ? n.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !n(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(e) && (this.checked || !T.test(e))
            }).map(function(e, t) {
                var r = n(this).val();
                return null == r ? null : n.isArray(r) ? n.map(r, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(xb, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: r.replace(xb, "\r\n")
                }
            }).get()
        }
    }), n.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (e) {}
    };
    var Bb = 0,
        Cb = {},
        Db = {
            0: 200,
            1223: 204
        },
        Eb = n.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var e in Cb) Cb[e]()
    }), k.cors = !!Eb && "withCredentials" in Eb, k.ajax = Eb = !!Eb, n.ajaxTransport(function(e) {
        var t;
        return k.cors || Eb && !e.crossDomain ? {
            send: function(n, r) {
                var i, s = e.xhr(),
                    o = ++Bb;
                if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (i in e.xhrFields) s[i] = e.xhrFields[i];
                e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                for (i in n) s.setRequestHeader(i, n[i]);
                t = function(e) {
                    return function() {
                        t && (delete Cb[o], t = s.onload = s.onerror = null, "abort" === e ? s.abort() : "error" === e ? r(s.status, s.statusText) : r(Db[s.status] || s.status, s.statusText, "string" == typeof s.responseText ? {
                            text: s.responseText
                        } : void 0, s.getAllResponseHeaders()))
                    }
                }, s.onload = t(), s.onerror = t("error"), t = Cb[o] = t("abort");
                try {
                    s.send(e.hasContent && e.data || null)
                } catch (u) {
                    if (t) throw u
                }
            },
            abort: function() {
                t && t()
            }
        } : void 0
    }), n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return n.globalEval(e), e
            }
        }
    }), n.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), n.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, r;
            return {
                send: function(i, s) {
                    t = n("<script>").prop({
                        async: !0,
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", r = function(e) {
                        t.remove(), r = null, e && s("error" === e.type ? 404 : 200, e.type)
                    }), l.head.appendChild(t[0])
                },
                abort: function() {
                    r && r()
                }
            }
        }
    });
    var Fb = [],
        Gb = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Fb.pop() || n.expando + "_" + cb++;
            return this[e] = !0, e
        }
    }), n.ajaxPrefilter("json jsonp", function(e, t, r) {
        var i, s, o, u = e.jsonp !== !1 && (Gb.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Gb.test(e.data) && "data");
        return u || "jsonp" === e.dataTypes[0] ? (i = e.jsonpCallback = n.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, u ? e[u] = e[u].replace(Gb, "$1" + i) : e.jsonp !== !1 && (e.url += (db.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
            return o || n.error(i + " was not called"), o[0]
        }, e.dataTypes[0] = "json", s = a[i], a[i] = function() {
            o = arguments
        }, r.always(function() {
            a[i] = s, e[i] && (e.jsonpCallback = t.jsonpCallback, Fb.push(i)), o && n.isFunction(s) && s(o[0]), o = s = void 0
        }), "script") : void 0
    }), n.parseHTML = function(e, t, r) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (r = t, t = !1), t = t || l;
        var i = v.exec(e),
            s = !r && [];
        return i ? [t.createElement(i[1])] : (i = n.buildFragment([e], t, s), s && s.length && n(s).remove(), n.merge([], i.childNodes))
    };
    var Hb = n.fn.load;
    n.fn.load = function(e, t, r) {
        if ("string" != typeof e && Hb) return Hb.apply(this, arguments);
        var i, s, o, u = this,
            a = e.indexOf(" ");
        return a >= 0 && (i = n.trim(e.slice(a)), e = e.slice(0, a)), n.isFunction(t) ? (r = t, t = void 0) : t && "object" == typeof t && (s = "POST"), u.length > 0 && n.ajax({
            url: e,
            type: s,
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, u.html(i ? n("<div>").append(n.parseHTML(e)).find(i) : e)
        }).complete(r && function(e, t) {
            u.each(r, o || [e.responseText, t, e])
        }), this
    }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        n.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), n.expr.filters.animated = function(e) {
        return n.grep(n.timers, function(t) {
            return e === t.elem
        }).length
    };
    var Ib = a.document.documentElement;
    n.offset = {
        setOffset: function(e, t, r) {
            var i, s, o, u, a, f, l, c = n.css(e, "position"),
                h = n(e),
                p = {};
            "static" === c && (e.style.position = "relative"), a = h.offset(), o = n.css(e, "top"), f = n.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (o + f).indexOf("auto") > -1, l ? (i = h.position(), u = i.top, s = i.left) : (u = parseFloat(o) || 0, s = parseFloat(f) || 0), n.isFunction(t) && (t = t.call(e, r, a)), null != t.top && (p.top = t.top - a.top + u), null != t.left && (p.left = t.left - a.left + s), "using" in t ? t.using.call(e, p) : h.css(p)
        }
    }, n.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                n.offset.setOffset(this, e, t)
            });
            var t, r, i = this[0],
                s = {
                    top: 0,
                    left: 0
                },
                o = i && i.ownerDocument;
            if (o) return t = o.documentElement, n.contains(t, i) ? (typeof i.getBoundingClientRect !== U && (s = i.getBoundingClientRect()), r = Jb(o), {
                top: s.top + r.pageYOffset - t.clientTop,
                left: s.left + r.pageXOffset - t.clientLeft
            }) : s
        },
        position: function() {
            if (this[0]) {
                var e, t, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === n.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), n.nodeName(e[0], "html") || (i = e.offset()), i.top += n.css(e[0], "borderTopWidth", !0), i.left += n.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - i.top - n.css(r, "marginTop", !0),
                    left: t.left - i.left - n.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || Ib;
                while (e && !n.nodeName(e, "html") && "static" === n.css(e, "position")) e = e.offsetParent;
                return e || Ib
            })
        }
    }), n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var r = "pageYOffset" === t;
        n.fn[e] = function(n) {
            return J(this, function(e, n, i) {
                var s = Jb(e);
                return void 0 === i ? s ? s[t] : e[n] : void(s ? s.scrollTo(r ? a.pageXOffset : i, r ? i : a.pageYOffset) : e[n] = i)
            }, e, n, arguments.length, null)
        }
    }), n.each(["top", "left"], function(e, t) {
        n.cssHooks[t] = ya(k.pixelPosition, function(e, r) {
            return r ? (r = xa(e, t), va.test(r) ? n(e).position()[t] + "px" : r) : void 0
        })
    }), n.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        n.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(r, i) {
            n.fn[i] = function(i, s) {
                var o = arguments.length && (r || "boolean" != typeof i),
                    u = r || (i === !0 || s === !0 ? "margin" : "border");
                return J(this, function(t, r, i) {
                    var s;
                    return n.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (s = t.documentElement, Math.max(t.body["scroll" + e], s["scroll" + e], t.body["offset" + e], s["offset" + e], s["client" + e])) : void 0 === i ? n.css(t, r, u) : n.style(t, r, i, u)
                }, t, o ? i : void 0, o, null)
            }
        })
    }), n.fn.size = function() {
        return this.length
    }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return n
    });
    var Kb = a.jQuery,
        Lb = a.$;
    return n.noConflict = function(e) {
        return a.$ === n && (a.$ = Lb), e && a.jQuery === n && (a.jQuery = Kb), n
    }, typeof b === U && (a.jQuery = a.$ = n), n
}),
function(e, t, n) {
    function s(e, n) {
        this.wrapper = typeof e == "string" ? t.querySelector(e) : e, this.scroller = this.wrapper.children[0], this.scrollerStyle = this.scroller.style, this.options = {
            resizeScrollbars: !0,
            mouseWheelSpeed: 20,
            snapThreshold: .334,
            startX: 0,
            startY: 0,
            scrollY: !0,
            directionLockThreshold: 5,
            momentum: !0,
            bounce: !0,
            bounceTime: 600,
            bounceEasing: "",
            preventDefault: !0,
            preventDefaultException: {
                tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
            },
            HWCompositing: !0,
            useTransition: !0,
            useTransform: !0
        };
        for (var r in n) this.options[r] = n[r];
        this.translateZ = this.options.HWCompositing && i.hasPerspective ? " translateZ(0)" : "", this.options.useTransition = i.hasTransition && this.options.useTransition, this.options.useTransform = i.hasTransform && this.options.useTransform, this.options.eventPassthrough = this.options.eventPassthrough === !0 ? "vertical" : this.options.eventPassthrough, this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault, this.options.scrollY = this.options.eventPassthrough == "vertical" ? !1 : this.options.scrollY, this.options.scrollX = this.options.eventPassthrough == "horizontal" ? !1 : this.options.scrollX, this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough, this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold, this.options.bounceEasing = typeof this.options.bounceEasing == "string" ? i.ease[this.options.bounceEasing] || i.ease.circular : this.options.bounceEasing, this.options.resizePolling = this.options.resizePolling === undefined ? 60 : this.options.resizePolling, this.options.tap === !0 && (this.options.tap = "tap"), this.options.shrinkScrollbars == "scale" && (this.options.useTransition = !1), this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1, this.x = 0, this.y = 0, this.directionX = 0, this.directionY = 0, this._events = {}, this._init(), this.refresh(), this.scrollTo(this.options.startX, this.options.startY), this.enable()
    }

    function o(e, n, r) {
        var i = t.createElement("div"),
            s = t.createElement("div");
        return r === !0 && (i.style.cssText = "position:absolute;z-index:9999", s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"), s.className = "iScrollIndicator", e == "h" ? (r === !0 && (i.style.cssText += ";height:7px;left:2px;right:2px;bottom:0", s.style.height = "100%"), i.className = "iScrollHorizontalScrollbar") : (r === !0 && (i.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px", s.style.width = "100%"), i.className = "iScrollVerticalScrollbar"), i.style.cssText += ";overflow:hidden", n || (i.style.pointerEvents = "none"), i.appendChild(s), i
    }

    function u(n, r) {
        this.wrapper = typeof r.el == "string" ? t.querySelector(r.el) : r.el, this.wrapperStyle = this.wrapper.style, this.indicator = this.wrapper.children[0], this.indicatorStyle = this.indicator.style, this.scroller = n, this.options = {
            listenX: !0,
            listenY: !0,
            interactive: !1,
            resize: !0,
            defaultScrollbars: !1,
            shrink: !1,
            fade: !1,
            speedRatioX: 0,
            speedRatioY: 0
        };
        for (var s in r) this.options[s] = r[s];
        this.sizeRatioX = 1, this.sizeRatioY = 1, this.maxPosX = 0, this.maxPosY = 0, this.options.interactive && (this.options.disableTouch || (i.addEvent(this.indicator, "touchstart", this), i.addEvent(e, "touchend", this)), this.options.disablePointer || (i.addEvent(this.indicator, i.prefixPointerEvent("pointerdown"), this), i.addEvent(e, i.prefixPointerEvent("pointerup"), this)), this.options.disableMouse || (i.addEvent(this.indicator, "mousedown", this), i.addEvent(e, "mouseup", this))), this.options.fade && (this.wrapperStyle[i.style.transform] = this.scroller.translateZ, this.wrapperStyle[i.style.transitionDuration] = i.isBadAndroid ? "0.001s" : "0ms", this.wrapperStyle.opacity = "0")
    }
    var r = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function(t) {
            e.setTimeout(t, 1e3 / 60)
        },
        i = function() {
            function o(e) {
                return s === !1 ? !1 : s === "" ? e : s + e.charAt(0).toUpperCase() + e.substr(1)
            }
            var r = {},
                i = t.createElement("div").style,
                s = function() {
                    var e = ["t", "webkitT", "MozT", "msT", "OT"],
                        t, n = 0,
                        r = e.length;
                    for (; n < r; n++) {
                        t = e[n] + "ransform";
                        if (t in i) return e[n].substr(0, e[n].length - 1)
                    }
                    return !1
                }();
            r.getTime = Date.now || function() {
                return (new Date).getTime()
            }, r.extend = function(e, t) {
                for (var n in t) e[n] = t[n]
            }, r.addEvent = function(e, t, n, r) {
                e.addEventListener(t, n, !!r)
            }, r.removeEvent = function(e, t, n, r) {
                e.removeEventListener(t, n, !!r)
            }, r.prefixPointerEvent = function(t) {
                return e.MSPointerEvent ? "MSPointer" + t.charAt(9).toUpperCase() + t.substr(10) : t
            }, r.momentum = function(e, t, r, i, s, o) {
                var u = e - t,
                    a = n.abs(u) / r,
                    f, l;
                return o = o === undefined ? 6e-4 : o, f = e + a * a / (2 * o) * (u < 0 ? -1 : 1), l = a / o, f < i ? (f = s ? i - s / 2.5 * (a / 8) : i, u = n.abs(f - e), l = u / a) : f > 0 && (f = s ? s / 2.5 * (a / 8) : 0, u = n.abs(e) + f, l = u / a), {
                    destination: n.round(f),
                    duration: l
                }
            };
            var u = o("transform");
            return r.extend(r, {
                hasTransform: u !== !1,
                hasPerspective: o("perspective") in i,
                hasTouch: "ontouchstart" in e,
                hasPointer: e.PointerEvent || e.MSPointerEvent,
                hasTransition: o("transition") in i
            }), r.isBadAndroid = /Android /.test(e.navigator.appVersion) && !/Chrome\/\d/.test(e.navigator.appVersion), r.extend(r.style = {}, {
                transform: u,
                transitionTimingFunction: o("transitionTimingFunction"),
                transitionDuration: o("transitionDuration"),
                transitionDelay: o("transitionDelay"),
                transformOrigin: o("transformOrigin")
            }), r.hasClass = function(e, t) {
                var n = new RegExp("(^|\\s)" + t + "(\\s|$)");
                return n.test(e.className)
            }, r.addClass = function(e, t) {
                if (r.hasClass(e, t)) return;
                var n = e.className.split(" ");
                n.push(t), e.className = n.join(" ")
            }, r.removeClass = function(e, t) {
                if (!r.hasClass(e, t)) return;
                var n = new RegExp("(^|\\s)" + t + "(\\s|$)", "g");
                e.className = e.className.replace(n, " ")
            }, r.offset = function(e) {
                var t = -e.offsetLeft,
                    n = -e.offsetTop;
                while (e = e.offsetParent) t -= e.offsetLeft, n -= e.offsetTop;
                return {
                    left: t,
                    top: n
                }
            }, r.preventDefaultException = function(e, t) {
                for (var n in t)
                    if (t[n].test(e[n])) return !0;
                return !1
            }, r.extend(r.eventType = {}, {
                touchstart: 1,
                touchmove: 1,
                touchend: 1,
                mousedown: 2,
                mousemove: 2,
                mouseup: 2,
                pointerdown: 3,
                pointermove: 3,
                pointerup: 3,
                MSPointerDown: 3,
                MSPointerMove: 3,
                MSPointerUp: 3
            }), r.extend(r.ease = {}, {
                quadratic: {
                    style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    fn: function(e) {
                        return e * (2 - e)
                    }
                },
                circular: {
                    style: "cubic-bezier(0.1, 0.57, 0.1, 1)",
                    fn: function(e) {
                        return n.sqrt(1 - --e * e)
                    }
                },
                back: {
                    style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                    fn: function(e) {
                        var t = 4;
                        return (e -= 1) * e * ((t + 1) * e + t) + 1
                    }
                },
                bounce: {
                    style: "",
                    fn: function(e) {
                        return (e /= 1) < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
                    }
                },
                elastic: {
                    style: "",
                    fn: function(e) {
                        var t = .22,
                            r = .4;
                        return e === 0 ? 0 : e == 1 ? 1 : r * n.pow(2, -10 * e) * n.sin((e - t / 4) * 2 * n.PI / t) + 1
                    }
                }
            }), r.tap = function(e, n) {
                var r = t.createEvent("Event");
                r.initEvent(n, !0, !0), r.pageX = e.pageX, r.pageY = e.pageY, e.target.dispatchEvent(r)
            }, r.click = function(e) {
                var n = e.target,
                    r;
                /(SELECT|INPUT|TEXTAREA)/i.test(n.tagName) || (r = t.createEvent("MouseEvents"), r.initMouseEvent("click", !0, !0, e.view, 1, n.screenX, n.screenY, n.clientX, n.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null), r._constructed = !0, n.dispatchEvent(r))
            }, r
        }();
    s.prototype = {
        version: "5.1.3",
        _init: function() {
            this._initEvents(), (this.options.scrollbars || this.options.indicators) && this._initIndicators(), this.options.mouseWheel && this._initWheel(), this.options.snap && this._initSnap(), this.options.keyBindings && this._initKeys()
        },
        destroy: function() {
            this._initEvents(!0), this._execEvent("destroy")
        },
        _transitionEnd: function(e) {
            if (e.target != this.scroller || !this.isInTransition) return;
            this._transitionTime(), this.resetPosition(this.options.bounceTime) || (this.isInTransition = !1, this._execEvent("scrollEnd"))
        },
        _start: function(e) {
            if (i.eventType[e.type] != 1 && e.button !== 0) return;
            if (!this.enabled || this.initiated && i.eventType[e.type] !== this.initiated) return;
            this.options.preventDefault && !i.isBadAndroid && !i.preventDefaultException(e.target, this.options.preventDefaultException) && e.preventDefault();
            var t = e.touches ? e.touches[0] : e,
                r;
            this.initiated = i.eventType[e.type], this.moved = !1, this.distX = 0, this.distY = 0, this.directionX = 0, this.directionY = 0, this.directionLocked = 0, this._transitionTime(), this.startTime = i.getTime(), this.options.useTransition && this.isInTransition ? (this.isInTransition = !1, r = this.getComputedPosition(), this._translate(n.round(r.x), n.round(r.y)), this._execEvent("scrollEnd")) : !this.options.useTransition && this.isAnimating && (this.isAnimating = !1, this._execEvent("scrollEnd")), this.startX = this.x, this.startY = this.y, this.absStartX = this.x, this.absStartY = this.y, this.pointX = t.pageX, this.pointY = t.pageY, this._execEvent("beforeScrollStart")
        },
        _move: function(e) {
            if (!this.enabled || i.eventType[e.type] !== this.initiated) return;
            this.options.preventDefault && e.preventDefault();
            var t = e.touches ? e.touches[0] : e,
                r = t.pageX - this.pointX,
                s = t.pageY - this.pointY,
                o = i.getTime(),
                u, a, f, l;
            this.pointX = t.pageX, this.pointY = t.pageY, this.distX += r, this.distY += s, f = n.abs(this.distX), l = n.abs(this.distY);
            if (o - this.endTime > 300 && f < 10 && l < 10) return;
            !this.directionLocked && !this.options.freeScroll && (f > l + this.options.directionLockThreshold ? this.directionLocked = "h" : l >= f + this.options.directionLockThreshold ? this.directionLocked = "v" : this.directionLocked = "n");
            if (this.directionLocked == "h") {
                if (this.options.eventPassthrough == "vertical") e.preventDefault();
                else if (this.options.eventPassthrough == "horizontal") {
                    this.initiated = !1;
                    return
                }
                s = 0
            } else if (this.directionLocked == "v") {
                if (this.options.eventPassthrough == "horizontal") e.preventDefault();
                else if (this.options.eventPassthrough == "vertical") {
                    this.initiated = !1;
                    return
                }
                r = 0
            }
            r = this.hasHorizontalScroll ? r : 0, s = this.hasVerticalScroll ? s : 0, u = this.x + r, a = this.y + s;
            if (u > 0 || u < this.maxScrollX) u = this.options.bounce ? this.x + r / 3 : u > 0 ? 0 : this.maxScrollX;
            if (a > 0 || a < this.maxScrollY) a = this.options.bounce ? this.y + s / 3 : a > 0 ? 0 : this.maxScrollY;
            this.directionX = r > 0 ? -1 : r < 0 ? 1 : 0, this.directionY = s > 0 ? -1 : s < 0 ? 1 : 0, this.moved || this._execEvent("scrollStart"), this.moved = !0, this._translate(u, a), o - this.startTime > 300 && (this.startTime = o, this.startX = this.x, this.startY = this.y)
        },
        _end: function(e) {
            if (!this.enabled || i.eventType[e.type] !== this.initiated) return;
            this.options.preventDefault && !i.preventDefaultException(e.target, this.options.preventDefaultException) && e.preventDefault();
            var t = e.changedTouches ? e.changedTouches[0] : e,
                r, s, o = i.getTime() - this.startTime,
                u = n.round(this.x),
                a = n.round(this.y),
                f = n.abs(u - this.startX),
                l = n.abs(a - this.startY),
                c = 0,
                h = "";
            this.isInTransition = 0, this.initiated = 0, this.endTime = i.getTime();
            if (this.resetPosition(this.options.bounceTime)) return;
            this.scrollTo(u, a);
            if (!this.moved) {
                this.options.tap && i.tap(e, this.options.tap), this.options.click && i.click(e), this._execEvent("scrollCancel");
                return
            }
            if (this._events.flick && o < 200 && f < 100 && l < 100) {
                this._execEvent("flick");
                return
            }
            this.options.momentum && o < 300 && (r = this.hasHorizontalScroll ? i.momentum(this.x, this.startX, o, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
                destination: u,
                duration: 0
            }, s = this.hasVerticalScroll ? i.momentum(this.y, this.startY, o, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
                destination: a,
                duration: 0
            }, u = r.destination, a = s.destination, c = n.max(r.duration, s.duration), this.isInTransition = 1);
            if (this.options.snap) {
                var p = this._nearestSnap(u, a);
                this.currentPage = p, c = this.options.snapSpeed || n.max(n.max(n.min(n.abs(u - p.x), 1e3), n.min(n.abs(a - p.y), 1e3)), 300), u = p.x, a = p.y, this.directionX = 0, this.directionY = 0, h = this.options.bounceEasing
            }
            if (u != this.x || a != this.y) {
                if (u > 0 || u < this.maxScrollX || a > 0 || a < this.maxScrollY) h = i.ease.quadratic;
                this.scrollTo(u, a, c, h);
                return
            }
            this._execEvent("scrollEnd")
        },
        _resize: function() {
            var e = this;
            clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(function() {
                e.refresh()
            }, this.options.resizePolling)
        },
        resetPosition: function(e) {
            var t = this.x,
                n = this.y;
            return e = e || 0, !this.hasHorizontalScroll || this.x > 0 ? t = 0 : this.x < this.maxScrollX && (t = this.maxScrollX), !this.hasVerticalScroll || this.y > 0 ? n = 0 : this.y < this.maxScrollY && (n = this.maxScrollY), t == this.x && n == this.y ? !1 : (this.scrollTo(t, n, e, this.options.bounceEasing), !0)
        },
        disable: function() {
            this.enabled = !1
        },
        enable: function() {
            this.enabled = !0
        },
        refresh: function() {
            var e = this.wrapper.offsetHeight;
            this.wrapperWidth = this.wrapper.clientWidth, this.wrapperHeight = this.wrapper.clientHeight, this.scrollerWidth = this.scroller.offsetWidth, this.scrollerHeight = this.scroller.offsetHeight, this.maxScrollX = this.wrapperWidth - this.scrollerWidth, this.maxScrollY = this.wrapperHeight - this.scrollerHeight, this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0, this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0, this.hasHorizontalScroll || (this.maxScrollX = 0, this.scrollerWidth = this.wrapperWidth), this.hasVerticalScroll || (this.maxScrollY = 0, this.scrollerHeight = this.wrapperHeight), this.endTime = 0, this.directionX = 0, this.directionY = 0, this.wrapperOffset = i.offset(this.wrapper), this._execEvent("refresh"), this.resetPosition()
        },
        on: function(e, t) {
            this._events[e] || (this._events[e] = []), this._events[e].push(t)
        },
        off: function(e, t) {
            if (!this._events[e]) return;
            var n = this._events[e].indexOf(t);
            n > -1 && this._events[e].splice(n, 1)
        },
        _execEvent: function(e) {
            if (!this._events[e]) return;
            var t = 0,
                n = this._events[e].length;
            if (!n) return;
            for (; t < n; t++) this._events[e][t].apply(this, [].slice.call(arguments, 1))
        },
        scrollBy: function(e, t, n, r) {
            e = this.x + e, t = this.y + t, n = n || 0, this.scrollTo(e, t, n, r)
        },
        scrollTo: function(e, t, n, r) {
            r = r || i.ease.circular, this.isInTransition = this.options.useTransition && n > 0, !n || this.options.useTransition && r.style ? (this._transitionTimingFunction(r.style), this._transitionTime(n), this._translate(e, t)) : this._animate(e, t, n, r.fn)
        },
        scrollToElement: function(e, t, r, s, o) {
            e = e.nodeType ? e : this.scroller.querySelector(e);
            if (!e) return;
            var u = i.offset(e);
            u.left -= this.wrapperOffset.left, u.top -= this.wrapperOffset.top, r === !0 && (r = n.round(e.offsetWidth / 2 - this.wrapper.offsetWidth / 2)), s === !0 && (s = n.round(e.offsetHeight / 2 - this.wrapper.offsetHeight / 2)), u.left -= r || 0, u.top -= s || 0, u.left = u.left > 0 ? 0 : u.left < this.maxScrollX ? this.maxScrollX : u.left, u.top = u.top > 0 ? 0 : u.top < this.maxScrollY ? this.maxScrollY : u.top, t = t === undefined || t === null || t === "auto" ? n.max(n.abs(this.x - u.left), n.abs(this.y - u.top)) : t, this.scrollTo(u.left, u.top, t, o)
        },
        _transitionTime: function(e) {
            e = e || 0, this.scrollerStyle[i.style.transitionDuration] = e + "ms", !e && i.isBadAndroid && (this.scrollerStyle[i.style.transitionDuration] = "0.001s");
            if (this.indicators)
                for (var t = this.indicators.length; t--;) this.indicators[t].transitionTime(e)
        },
        _transitionTimingFunction: function(e) {
            this.scrollerStyle[i.style.transitionTimingFunction] = e;
            if (this.indicators)
                for (var t = this.indicators.length; t--;) this.indicators[t].transitionTimingFunction(e)
        },
        _translate: function(e, t) {
            this.options.useTransform ? this.scrollerStyle[i.style.transform] = "translate(" + e + "px," + t + "px)" + this.translateZ : (e = n.round(e), t = n.round(t), this.scrollerStyle.left = e + "px", this.scrollerStyle.top = t + "px"), this.x = e, this.y = t;
            if (this.indicators)
                for (var r = this.indicators.length; r--;) this.indicators[r].updatePosition()
        },
        _initEvents: function(t) {
            var n = t ? i.removeEvent : i.addEvent,
                r = this.options.bindToWrapper ? this.wrapper : e;
            n(e, "orientationchange", this), n(e, "resize", this), this.options.click && n(this.wrapper, "click", this, !0), this.options.disableMouse || (n(this.wrapper, "mousedown", this), n(r, "mousemove", this), n(r, "mousecancel", this), n(r, "mouseup", this)), i.hasPointer && !this.options.disablePointer && (n(this.wrapper, i.prefixPointerEvent("pointerdown"), this), n(r, i.prefixPointerEvent("pointermove"), this), n(r, i.prefixPointerEvent("pointercancel"), this), n(r, i.prefixPointerEvent("pointerup"), this)), i.hasTouch && !this.options.disableTouch && (n(this.wrapper, "touchstart", this), n(r, "touchmove", this), n(r, "touchcancel", this), n(r, "touchend", this)), n(this.scroller, "transitionend", this), n(this.scroller, "webkitTransitionEnd", this), n(this.scroller, "oTransitionEnd", this), n(this.scroller, "MSTransitionEnd", this)
        },
        getComputedPosition: function() {
            var t = e.getComputedStyle(this.scroller, null),
                n, r;
            return this.options.useTransform ? (t = t[i.style.transform].split(")")[0].split(", "), n = +(t[12] || t[4]), r = +(t[13] || t[5])) : (n = +t.left.replace(/[^-\d.]/g, ""), r = +t.top.replace(/[^-\d.]/g, "")), {
                x: n,
                y: r
            }
        },
        _initIndicators: function() {
            function a(e) {
                for (var t = i.indicators.length; t--;) e.call(i.indicators[t])
            }
            var e = this.options.interactiveScrollbars,
                t = typeof this.options.scrollbars != "string",
                n = [],
                r, i = this;
            this.indicators = [], this.options.scrollbars && (this.options.scrollY && (r = {
                el: o("v", e, this.options.scrollbars),
                interactive: e,
                defaultScrollbars: !0,
                customStyle: t,
                resize: this.options.resizeScrollbars,
                shrink: this.options.shrinkScrollbars,
                fade: this.options.fadeScrollbars,
                listenX: !1
            }, this.wrapper.appendChild(r.el), n.push(r)), this.options.scrollX && (r = {
                el: o("h", e, this.options.scrollbars),
                interactive: e,
                defaultScrollbars: !0,
                customStyle: t,
                resize: this.options.resizeScrollbars,
                shrink: this.options.shrinkScrollbars,
                fade: this.options.fadeScrollbars,
                listenY: !1
            }, this.wrapper.appendChild(r.el), n.push(r))), this.options.indicators && (n = n.concat(this.options.indicators));
            for (var s = n.length; s--;) this.indicators.push(new u(this, n[s]));
            this.options.fadeScrollbars && (this.on("scrollEnd", function() {
                a(function() {
                    this.fade()
                })
            }), this.on("scrollCancel", function() {
                a(function() {
                    this.fade()
                })
            }), this.on("scrollStart", function() {
                a(function() {
                    this.fade(1)
                })
            }), this.on("beforeScrollStart", function() {
                a(function() {
                    this.fade(1, !0)
                })
            })), this.on("refresh", function() {
                a(function() {
                    this.refresh()
                })
            }), this.on("destroy", function() {
                a(function() {
                    this.destroy()
                }), delete this.indicators
            })
        },
        _initWheel: function() {
            i.addEvent(this.wrapper, "wheel", this), i.addEvent(this.wrapper, "mousewheel", this), i.addEvent(this.wrapper, "DOMMouseScroll", this), this.on("destroy", function() {
                i.removeEvent(this.wrapper, "wheel", this), i.removeEvent(this.wrapper, "mousewheel", this), i.removeEvent(this.wrapper, "DOMMouseScroll", this)
            })
        },
        _wheel: function(e) {
            if (!this.enabled) return;
            e.preventDefault(), e.stopPropagation();
            var t, r, i, s, o = this;
            this.wheelTimeout === undefined && o._execEvent("scrollStart"), clearTimeout(this.wheelTimeout), this.wheelTimeout = setTimeout(function() {
                o._execEvent("scrollEnd"), o.wheelTimeout = undefined
            }, 400);
            if ("deltaX" in e) e.deltaMode === 1 ? (t = -e.deltaX * this.options.mouseWheelSpeed, r = -e.deltaY * this.options.mouseWheelSpeed) : (t = -e.deltaX, r = -e.deltaY);
            else if ("wheelDeltaX" in e) t = e.wheelDeltaX / 120 * this.options.mouseWheelSpeed, r = e.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
            else if ("wheelDelta" in e) t = r = e.wheelDelta / 120 * this.options.mouseWheelSpeed;
            else {
                if (!("detail" in e)) return;
                t = r = -e.detail / 3 * this.options.mouseWheelSpeed
            }
            t *= this.options.invertWheelDirection, r *= this.options.invertWheelDirection, this.hasVerticalScroll || (t = r, r = 0);
            if (this.options.snap) {
                i = this.currentPage.pageX, s = this.currentPage.pageY, t > 0 ? i-- : t < 0 && i++, r > 0 ? s-- : r < 0 && s++, this.goToPage(i, s);
                return
            }
            i = this.x + n.round(this.hasHorizontalScroll ? t : 0), s = this.y + n.round(this.hasVerticalScroll ? r : 0), i > 0 ? i = 0 : i < this.maxScrollX && (i = this.maxScrollX), s > 0 ? s = 0 : s < this.maxScrollY && (s = this.maxScrollY), this.scrollTo(i, s, 0)
        },
        _initSnap: function() {
            this.currentPage = {}, typeof this.options.snap == "string" && (this.options.snap = this.scroller.querySelectorAll(this.options.snap)), this.on("refresh", function() {
                var e = 0,
                    t, r = 0,
                    i, s, o, u = 0,
                    a, f = this.options.snapStepX || this.wrapperWidth,
                    l = this.options.snapStepY || this.wrapperHeight,
                    c;
                this.pages = [];
                if (!this.wrapperWidth || !this.wrapperHeight || !this.scrollerWidth || !this.scrollerHeight) return;
                if (this.options.snap === !0) {
                    s = n.round(f / 2), o = n.round(l / 2);
                    while (u > -this.scrollerWidth) {
                        this.pages[e] = [], t = 0, a = 0;
                        while (a > -this.scrollerHeight) this.pages[e][t] = {
                            x: n.max(u, this.maxScrollX),
                            y: n.max(a, this.maxScrollY),
                            width: f,
                            height: l,
                            cx: u - s,
                            cy: a - o
                        }, a -= l, t++;
                        u -= f, e++
                    }
                } else {
                    c = this.options.snap, t = c.length, i = -1;
                    for (; e < t; e++) {
                        if (e === 0 || c[e].offsetLeft <= c[e - 1].offsetLeft) r = 0, i++;
                        this.pages[r] || (this.pages[r] = []), u = n.max(-c[e].offsetLeft, this.maxScrollX), a = n.max(-c[e].offsetTop, this.maxScrollY), s = u - n.round(c[e].offsetWidth / 2), o = a - n.round(c[e].offsetHeight / 2), this.pages[r][i] = {
                            x: u,
                            y: a,
                            width: c[e].offsetWidth,
                            height: c[e].offsetHeight,
                            cx: s,
                            cy: o
                        }, u > this.maxScrollX && r++
                    }
                }
                this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0), this.options.snapThreshold % 1 === 0 ? (this.snapThresholdX = this.options.snapThreshold, this.snapThresholdY = this.options.snapThreshold) : (this.snapThresholdX = n.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold), this.snapThresholdY = n.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold))
            }), this.on("flick", function() {
                var e = this.options.snapSpeed || n.max(n.max(n.min(n.abs(this.x - this.startX), 1e3), n.min(n.abs(this.y - this.startY), 1e3)), 300);
                this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, e)
            })
        },
        _nearestSnap: function(e, t) {
            if (!this.pages.length) return {
                x: 0,
                y: 0,
                pageX: 0,
                pageY: 0
            };
            var r = 0,
                i = this.pages.length,
                s = 0;
            if (n.abs(e - this.absStartX) < this.snapThresholdX && n.abs(t - this.absStartY) < this.snapThresholdY) return this.currentPage;
            e > 0 ? e = 0 : e < this.maxScrollX && (e = this.maxScrollX), t > 0 ? t = 0 : t < this.maxScrollY && (t = this.maxScrollY);
            for (; r < i; r++)
                if (e >= this.pages[r][0].cx) {
                    e = this.pages[r][0].x;
                    break
                }
            i = this.pages[r].length;
            for (; s < i; s++)
                if (t >= this.pages[0][s].cy) {
                    t = this.pages[0][s].y;
                    break
                }
            return r == this.currentPage.pageX && (r += this.directionX, r < 0 ? r = 0 : r >= this.pages.length && (r = this.pages.length - 1), e = this.pages[r][0].x), s == this.currentPage.pageY && (s += this.directionY, s < 0 ? s = 0 : s >= this.pages[0].length && (s = this.pages[0].length - 1), t = this.pages[0][s].y), {
                x: e,
                y: t,
                pageX: r,
                pageY: s
            }
        },
        goToPage: function(e, t, r, i) {
            i = i || this.options.bounceEasing, e >= this.pages.length ? e = this.pages.length - 1 : e < 0 && (e = 0), t >= this.pages[e].length ? t = this.pages[e].length - 1 : t < 0 && (t = 0);
            var s = this.pages[e][t].x,
                o = this.pages[e][t].y;
            r = r === undefined ? this.options.snapSpeed || n.max(n.max(n.min(n.abs(s - this.x), 1e3), n.min(n.abs(o - this.y), 1e3)), 300) : r, this.currentPage = {
                x: s,
                y: o,
                pageX: e,
                pageY: t
            }, this.scrollTo(s, o, r, i)
        },
        next: function(e, t) {
            var n = this.currentPage.pageX,
                r = this.currentPage.pageY;
            n++, n >= this.pages.length && this.hasVerticalScroll && (n = 0, r++), this.goToPage(n, r, e, t)
        },
        prev: function(e, t) {
            var n = this.currentPage.pageX,
                r = this.currentPage.pageY;
            n--, n < 0 && this.hasVerticalScroll && (n = 0, r--), this.goToPage(n, r, e, t)
        },
        _initKeys: function(t) {
            var n = {
                    pageUp: 33,
                    pageDown: 34,
                    end: 35,
                    home: 36,
                    left: 37,
                    up: 38,
                    right: 39,
                    down: 40
                },
                r;
            if (typeof this.options.keyBindings == "object")
                for (r in this.options.keyBindings) typeof this.options.keyBindings[r] == "string" && (this.options.keyBindings[r] = this.options.keyBindings[r].toUpperCase().charCodeAt(0));
            else this.options.keyBindings = {};
            for (r in n) this.options.keyBindings[r] = this.options.keyBindings[r] || n[r];
            i.addEvent(e, "keydown", this), this.on("destroy", function() {
                i.removeEvent(e, "keydown", this)
            })
        },
        _key: function(e) {
            if (!this.enabled) return;
            var t = this.options.snap,
                r = t ? this.currentPage.pageX : this.x,
                s = t ? this.currentPage.pageY : this.y,
                o = i.getTime(),
                u = this.keyTime || 0,
                a = .25,
                f;
            this.options.useTransition && this.isInTransition && (f = this.getComputedPosition(), this._translate(n.round(f.x), n.round(f.y)), this.isInTransition = !1), this.keyAcceleration = o - u < 200 ? n.min(this.keyAcceleration + a, 50) : 0;
            switch (e.keyCode) {
                case this.options.keyBindings.pageUp:
                    this.hasHorizontalScroll && !this.hasVerticalScroll ? r += t ? 1 : this.wrapperWidth : s += t ? 1 : this.wrapperHeight;
                    break;
                case this.options.keyBindings.pageDown:
                    this.hasHorizontalScroll && !this.hasVerticalScroll ? r -= t ? 1 : this.wrapperWidth : s -= t ? 1 : this.wrapperHeight;
                    break;
                case this.options.keyBindings.end:
                    r = t ? this.pages.length - 1 : this.maxScrollX, s = t ? this.pages[0].length - 1 : this.maxScrollY;
                    break;
                case this.options.keyBindings.home:
                    r = 0, s = 0;
                    break;
                case this.options.keyBindings.left:
                    r += t ? -1 : 5 + this.keyAcceleration >> 0;
                    break;
                case this.options.keyBindings.up:
                    s += t ? 1 : 5 + this.keyAcceleration >> 0;
                    break;
                case this.options.keyBindings.right:
                    r -= t ? -1 : 5 + this.keyAcceleration >> 0;
                    break;
                case this.options.keyBindings.down:
                    s -= t ? 1 : 5 + this.keyAcceleration >> 0;
                    break;
                default:
                    return
            }
            if (t) {
                this.goToPage(r, s);
                return
            }
            r > 0 ? (r = 0, this.keyAcceleration = 0) : r < this.maxScrollX && (r = this.maxScrollX, this.keyAcceleration = 0), s > 0 ? (s = 0, this.keyAcceleration = 0) : s < this.maxScrollY && (s = this.maxScrollY, this.keyAcceleration = 0), this.scrollTo(r, s, 0), this.keyTime = o
        },
        _animate: function(e, t, n, s) {
            function c() {
                var h = i.getTime(),
                    p, d, v;
                if (h >= l) {
                    o.isAnimating = !1, o._translate(e, t), o.resetPosition(o.options.bounceTime) || o._execEvent("scrollEnd");
                    return
                }
                h = (h - f) / n, v = s(h), p = (e - u) * v + u, d = (t - a) * v + a, o._translate(p, d), o.isAnimating && r(c)
            }
            var o = this,
                u = this.x,
                a = this.y,
                f = i.getTime(),
                l = f + n;
            this.isAnimating = !0, c()
        },
        handleEvent: function(e) {
            switch (e.type) {
                case "touchstart":
                case "pointerdown":
                case "MSPointerDown":
                case "mousedown":
                    this._start(e);
                    break;
                case "touchmove":
                case "pointermove":
                case "MSPointerMove":
                case "mousemove":
                    this._move(e);
                    break;
                case "touchend":
                case "pointerup":
                case "MSPointerUp":
                case "mouseup":
                case "touchcancel":
                case "pointercancel":
                case "MSPointerCancel":
                case "mousecancel":
                    this._end(e);
                    break;
                case "orientationchange":
                case "resize":
                    this._resize();
                    break;
                case "transitionend":
                case "webkitTransitionEnd":
                case "oTransitionEnd":
                case "MSTransitionEnd":
                    this._transitionEnd(e);
                    break;
                case "wheel":
                case "DOMMouseScroll":
                case "mousewheel":
                    this._wheel(e);
                    break;
                case "keydown":
                    this._key(e);
                    break;
                case "click":
                    e._constructed || (e.preventDefault(), e.stopPropagation())
            }
        }
    }, u.prototype = {
        handleEvent: function(e) {
            switch (e.type) {
                case "touchstart":
                case "pointerdown":
                case "MSPointerDown":
                case "mousedown":
                    this._start(e);
                    break;
                case "touchmove":
                case "pointermove":
                case "MSPointerMove":
                case "mousemove":
                    this._move(e);
                    break;
                case "touchend":
                case "pointerup":
                case "MSPointerUp":
                case "mouseup":
                case "touchcancel":
                case "pointercancel":
                case "MSPointerCancel":
                case "mousecancel":
                    this._end(e)
            }
        },
        destroy: function() {
            this.options.interactive && (i.removeEvent(this.indicator, "touchstart", this), i.removeEvent(this.indicator, i.prefixPointerEvent("pointerdown"), this), i.removeEvent(this.indicator, "mousedown", this), i.removeEvent(e, "touchmove", this), i.removeEvent(e, i.prefixPointerEvent("pointermove"), this), i.removeEvent(e, "mousemove", this), i.removeEvent(e, "touchend", this), i.removeEvent(e, i.prefixPointerEvent("pointerup"), this), i.removeEvent(e, "mouseup", this)), this.options.defaultScrollbars && this.wrapper.parentNode.removeChild(this.wrapper)
        },
        _start: function(t) {
            var n = t.touches ? t.touches[0] : t;
            t.preventDefault(), t.stopPropagation(), this.transitionTime(), this.initiated = !0, this.moved = !1, this.lastPointX = n.pageX, this.lastPointY = n.pageY, this.startTime = i.getTime(), this.options.disableTouch || i.addEvent(e, "touchmove", this), this.options.disablePointer || i.addEvent(e, i.prefixPointerEvent("pointermove"), this), this.options.disableMouse || i.addEvent(e, "mousemove", this), this.scroller._execEvent("beforeScrollStart")
        },
        _move: function(e) {
            var t = e.touches ? e.touches[0] : e,
                n, r, s, o, u = i.getTime();
            this.moved || this.scroller._execEvent("scrollStart"), this.moved = !0, n = t.pageX - this.lastPointX, this.lastPointX = t.pageX, r = t.pageY - this.lastPointY, this.lastPointY = t.pageY, s = this.x + n, o = this.y + r, this._pos(s, o), e.preventDefault(), e.stopPropagation()
        },
        _end: function(t) {
            if (!this.initiated) return;
            this.initiated = !1, t.preventDefault(), t.stopPropagation(), i.removeEvent(e, "touchmove", this), i.removeEvent(e, i.prefixPointerEvent("pointermove"), this), i.removeEvent(e, "mousemove", this);
            if (this.scroller.options.snap) {
                var r = this.scroller._nearestSnap(this.scroller.x, this.scroller.y),
                    s = this.options.snapSpeed || n.max(n.max(n.min(n.abs(this.scroller.x - r.x), 1e3), n.min(n.abs(this.scroller.y - r.y), 1e3)), 300);
                if (this.scroller.x != r.x || this.scroller.y != r.y) this.scroller.directionX = 0, this.scroller.directionY = 0, this.scroller.currentPage = r, this.scroller.scrollTo(r.x, r.y, s, this.scroller.options.bounceEasing)
            }
            this.moved && this.scroller._execEvent("scrollEnd")
        },
        transitionTime: function(e) {
            e = e || 0, this.indicatorStyle[i.style.transitionDuration] = e + "ms", !e && i.isBadAndroid && (this.indicatorStyle[i.style.transitionDuration] = "0.001s")
        },
        transitionTimingFunction: function(e) {
            this.indicatorStyle[i.style.transitionTimingFunction] = e
        },
        refresh: function() {
            this.transitionTime(), this.options.listenX && !this.options.listenY ? this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? "block" : "none" : this.options.listenY && !this.options.listenX ? this.indicatorStyle.display = this.scroller.hasVerticalScroll ? "block" : "none" : this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? "block" : "none", this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ? (i.addClass(this.wrapper, "iScrollBothScrollbars"), i.removeClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "8px" : this.wrapper.style.bottom = "8px")) : (i.removeClass(this.wrapper, "iScrollBothScrollbars"), i.addClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "2px" : this.wrapper.style.bottom = "2px"));
            var e = this.wrapper.offsetHeight;
            this.options.listenX && (this.wrapperWidth = this.wrapper.clientWidth, this.options.resize ? (this.indicatorWidth = n.max(n.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8), this.indicatorStyle.width = this.indicatorWidth + "px") : this.indicatorWidth = this.indicator.clientWidth, this.maxPosX = this.wrapperWidth - this.indicatorWidth, this.options.shrink == "clip" ? (this.minBoundaryX = -this.indicatorWidth + 8, this.maxBoundaryX = this.wrapperWidth - 8) : (this.minBoundaryX = 0, this.maxBoundaryX = this.maxPosX), this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX), this.options.listenY && (this.wrapperHeight = this.wrapper.clientHeight, this.options.resize ? (this.indicatorHeight = n.max(n.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8), this.indicatorStyle.height = this.indicatorHeight + "px") : this.indicatorHeight = this.indicator.clientHeight, this.maxPosY = this.wrapperHeight - this.indicatorHeight, this.options.shrink == "clip" ? (this.minBoundaryY = -this.indicatorHeight + 8, this.maxBoundaryY = this.wrapperHeight - 8) : (this.minBoundaryY = 0, this.maxBoundaryY = this.maxPosY), this.maxPosY = this.wrapperHeight - this.indicatorHeight, this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY), this.updatePosition()
        },
        updatePosition: function() {
            var e = this.options.listenX && n.round(this.sizeRatioX * this.scroller.x) || 0,
                t = this.options.listenY && n.round(this.sizeRatioY * this.scroller.y) || 0;
            this.options.ignoreBoundaries || (e < this.minBoundaryX ? (this.options.shrink == "scale" && (this.width = n.max(this.indicatorWidth + e, 8), this.indicatorStyle.width = this.width + "px"), e = this.minBoundaryX) : e > this.maxBoundaryX ? this.options.shrink == "scale" ? (this.width = n.max(this.indicatorWidth - (e - this.maxPosX), 8), this.indicatorStyle.width = this.width + "px", e = this.maxPosX + this.indicatorWidth - this.width) : e = this.maxBoundaryX : this.options.shrink == "scale" && this.width != this.indicatorWidth && (this.width = this.indicatorWidth, this.indicatorStyle.width = this.width + "px"), t < this.minBoundaryY ? (this.options.shrink == "scale" && (this.height = n.max(this.indicatorHeight + t * 3, 8), this.indicatorStyle.height = this.height + "px"), t = this.minBoundaryY) : t > this.maxBoundaryY ? this.options.shrink == "scale" ? (this.height = n.max(this.indicatorHeight - (t - this.maxPosY) * 3, 8), this.indicatorStyle.height = this.height + "px", t = this.maxPosY + this.indicatorHeight - this.height) : t = this.maxBoundaryY : this.options.shrink == "scale" && this.height != this.indicatorHeight && (this.height = this.indicatorHeight, this.indicatorStyle.height = this.height + "px")), this.x = e, this.y = t, this.scroller.options.useTransform ? this.indicatorStyle[i.style.transform] = "translate(" + e + "px," + t + "px)" + this.scroller.translateZ : (this.indicatorStyle.left = e + "px", this.indicatorStyle.top = t + "px")
        },
        _pos: function(e, t) {
            e < 0 ? e = 0 : e > this.maxPosX && (e = this.maxPosX), t < 0 ? t = 0 : t > this.maxPosY && (t = this.maxPosY), e = this.options.listenX ? n.round(e / this.sizeRatioX) : this.scroller.x, t = this.options.listenY ? n.round(t / this.sizeRatioY) : this.scroller.y, this.scroller.scrollTo(e, t)
        },
        fade: function(e, t) {
            if (t && !this.visible) return;
            clearTimeout(this.fadeTimeout), this.fadeTimeout = null;
            var n = e ? 250 : 500,
                r = e ? 0 : 300;
            e = e ? "1" : "0", this.wrapperStyle[i.style.transitionDuration] = n + "ms", this.fadeTimeout = setTimeout(function(e) {
                this.wrapperStyle.opacity = e, this.visible = +e
            }.bind(this, e), r)
        }
    }, s.utils = i, typeof module != "undefined" && module.exports ? module.exports = s : e.IScroll = s
}(window, document, Math), define("iscroll", function() {}), define("prompt", ["jquery"], function(e) {
        function t(n) {
            this.opts = e.extend({}, t.DEFAULT, n), this.prompt_ele = this.opts.prompt, this.dist = this.prompt_ele.height()
        }
        return t.DEFAULT = {
            prompt: e(".prompt-frame")
        }, t.prototype.showPrompt = function() {
            this.prompt_ele.css("transform", "translateY(" + this.dist + "px)")
        }, t.prototype.hidePrompt = function() {
            this.prompt_ele.css("transform", "translateY(0px)")
        }, t.prototype.changeInfo = function(e) {
            this.prompt_ele.text(e), this.showPrompt();
            var t = this;
            setTimeout(function() {
                t.hidePrompt()
            }, 1500)
        }, t.prototype.loading = function(e) {
            this.showPrompt();
            var t = Number(e),
                n = this;
            this.prompt_ele.text(t + "%")
        }, t.prototype.detactInfo = function(e) {
            this.showPrompt(), this.prompt_ele.text("检验文件中:" + e + "%");
            var t = this;
            e === 100 && (this.prompt_ele.text("检测成功~开始上传"), setTimeout(function() {
                t.hidePrompt()
            }, 800))
        }, t.prototype.goPay = function(e) {
            this.showPrompt(), this.prompt_ele.text("您的未解析文件数目:" + percent), e === 0 && this.prompt_ele.text("文件解析完成")
        }, {
            Prompt: t
        }
    }),
    function(e) {
        if (typeof exports == "object") module.exports = e();
        else if (typeof define == "function" && define.amd) define("md5", e);
        else {
            var t;
            try {
                t = window
            } catch (n) {
                t = self
            }
            t.SparkMD5 = e()
        }
    }(function(e) {
        "use strict";

        function r(e, n, r, i, s, o) {
            return n = t(t(n, e), t(i, o)), t(n << s | n >>> 32 - s, r)
        }

        function i(e, t, n, i, s, o, u) {
            return r(t & n | ~t & i, e, t, s, o, u)
        }

        function s(e, t, n, i, s, o, u) {
            return r(t & i | n & ~i, e, t, s, o, u)
        }

        function o(e, t, n, i, s, o, u) {
            return r(t ^ n ^ i, e, t, s, o, u)
        }

        function u(e, t, n, i, s, o, u) {
            return r(n ^ (t | ~i), e, t, s, o, u)
        }

        function a(e, n) {
            var r = e[0],
                a = e[1],
                f = e[2],
                l = e[3];
            r = i(r, a, f, l, n[0], 7, -680876936), l = i(l, r, a, f, n[1], 12, -389564586), f = i(f, l, r, a, n[2], 17, 606105819), a = i(a, f, l, r, n[3], 22, -1044525330), r = i(r, a, f, l, n[4], 7, -176418897), l = i(l, r, a, f, n[5], 12, 1200080426), f = i(f, l, r, a, n[6], 17, -1473231341), a = i(a, f, l, r, n[7], 22, -45705983), r = i(r, a, f, l, n[8], 7, 1770035416), l = i(l, r, a, f, n[9], 12, -1958414417), f = i(f, l, r, a, n[10], 17, -42063), a = i(a, f, l, r, n[11], 22, -1990404162), r = i(r, a, f, l, n[12], 7, 1804603682), l = i(l, r, a, f, n[13], 12, -40341101), f = i(f, l, r, a, n[14], 17, -1502002290), a = i(a, f, l, r, n[15], 22, 1236535329), r = s(r, a, f, l, n[1], 5, -165796510), l = s(l, r, a, f, n[6], 9, -1069501632), f = s(f, l, r, a, n[11], 14, 643717713), a = s(a, f, l, r, n[0], 20, -373897302), r = s(r, a, f, l, n[5], 5, -701558691), l = s(l, r, a, f, n[10], 9, 38016083), f = s(f, l, r, a, n[15], 14, -660478335), a = s(a, f, l, r, n[4], 20, -405537848), r = s(r, a, f, l, n[9], 5, 568446438), l = s(l, r, a, f, n[14], 9, -1019803690), f = s(f, l, r, a, n[3], 14, -187363961), a = s(a, f, l, r, n[8], 20, 1163531501), r = s(r, a, f, l, n[13], 5, -1444681467), l = s(l, r, a, f, n[2], 9, -51403784), f = s(f, l, r, a, n[7], 14, 1735328473), a = s(a, f, l, r, n[12], 20, -1926607734), r = o(r, a, f, l, n[5], 4, -378558), l = o(l, r, a, f, n[8], 11, -2022574463), f = o(f, l, r, a, n[11], 16, 1839030562), a = o(a, f, l, r, n[14], 23, -35309556), r = o(r, a, f, l, n[1], 4, -1530992060), l = o(l, r, a, f, n[4], 11, 1272893353), f = o(f, l, r, a, n[7], 16, -155497632), a = o(a, f, l, r, n[10], 23, -1094730640), r = o(r, a, f, l, n[13], 4, 681279174), l = o(l, r, a, f, n[0], 11, -358537222), f = o(f, l, r, a, n[3], 16, -722521979), a = o(a, f, l, r, n[6], 23, 76029189), r = o(r, a, f, l, n[9], 4, -640364487), l = o(l, r, a, f, n[12], 11, -421815835), f = o(f, l, r, a, n[15], 16, 530742520), a = o(a, f, l, r, n[2], 23, -995338651), r = u(r, a, f, l, n[0], 6, -198630844), l = u(l, r, a, f, n[7], 10, 1126891415), f = u(f, l, r, a, n[14], 15, -1416354905), a = u(a, f, l, r, n[5], 21, -57434055), r = u(r, a, f, l, n[12], 6, 1700485571), l = u(l, r, a, f, n[3], 10, -1894986606), f = u(f, l, r, a, n[10], 15, -1051523), a = u(a, f, l, r, n[1], 21, -2054922799), r = u(r, a, f, l, n[8], 6, 1873313359), l = u(l, r, a, f, n[15], 10, -30611744), f = u(f, l, r, a, n[6], 15, -1560198380), a = u(a, f, l, r, n[13], 21, 1309151649), r = u(r, a, f, l, n[4], 6, -145523070), l = u(l, r, a, f, n[11], 10, -1120210379), f = u(f, l, r, a, n[2], 15, 718787259), a = u(a, f, l, r, n[9], 21, -343485551), e[0] = t(r, e[0]), e[1] = t(a, e[1]), e[2] = t(f, e[2]), e[3] = t(l, e[3])
        }

        function f(e) {
            var t = [],
                n;
            for (n = 0; n < 64; n += 4) t[n >> 2] = e.charCodeAt(n) + (e.charCodeAt(n + 1) << 8) + (e.charCodeAt(n + 2) << 16) + (e.charCodeAt(n + 3) << 24);
            return t
        }

        function l(e) {
            var t = [],
                n;
            for (n = 0; n < 64; n += 4) t[n >> 2] = e[n] + (e[n + 1] << 8) + (e[n + 2] << 16) + (e[n + 3] << 24);
            return t
        }

        function c(e) {
            var t = e.length,
                n = [1732584193, -271733879, -1732584194, 271733878],
                r, i, s, o, u, l;
            for (r = 64; r <= t; r += 64) a(n, f(e.substring(r - 64, r)));
            e = e.substring(r - 64), i = e.length, s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (r = 0; r < i; r += 1) s[r >> 2] |= e.charCodeAt(r) << (r % 4 << 3);
            s[r >> 2] |= 128 << (r % 4 << 3);
            if (r > 55) {
                a(n, s);
                for (r = 0; r < 16; r += 1) s[r] = 0
            }
            return o = t * 8, o = o.toString(16).match(/(.*?)(.{0,8})$/), u = parseInt(o[2], 16), l = parseInt(o[1], 16) || 0, s[14] = u, s[15] = l, a(n, s), n
        }

        function h(e) {
            var t = e.length,
                n = [1732584193, -271733879, -1732584194, 271733878],
                r, i, s, o, u, f;
            for (r = 64; r <= t; r += 64) a(n, l(e.subarray(r - 64, r)));
            e = r - 64 < t ? e.subarray(r - 64) : new Uint8Array(0), i = e.length, s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (r = 0; r < i; r += 1) s[r >> 2] |= e[r] << (r % 4 << 3);
            s[r >> 2] |= 128 << (r % 4 << 3);
            if (r > 55) {
                a(n, s);
                for (r = 0; r < 16; r += 1) s[r] = 0
            }
            return o = t * 8, o = o.toString(16).match(/(.*?)(.{0,8})$/), u = parseInt(o[2], 16), f = parseInt(o[1], 16) || 0, s[14] = u, s[15] = f, a(n, s), n
        }

        function p(e) {
            var t = "",
                r;
            for (r = 0; r < 4; r += 1) t += n[e >> r * 8 + 4 & 15] + n[e >> r * 8 & 15];
            return t
        }

        function d(e) {
            var t;
            for (t = 0; t < e.length; t += 1) e[t] = p(e[t]);
            return e.join("")
        }

        function v(e) {
            return /[\u0080-\uFFFF]/.test(e) && (e = unescape(encodeURIComponent(e))), e
        }

        function m(e, t) {
            var n = e.length,
                r = new ArrayBuffer(n),
                i = new Uint8Array(r),
                s;
            for (s = 0; s < n; s += 1) i[s] = e.charCodeAt(s);
            return t ? i : r
        }

        function g(e) {
            return String.fromCharCode.apply(null, new Uint8Array(e))
        }

        function y(e, t, n) {
            var r = new Uint8Array(e.byteLength + t.byteLength);
            return r.set(new Uint8Array(e)), r.set(new Uint8Array(t), e.byteLength), n ? r : r.buffer
        }

        function b(e) {
            var t = [],
                n = e.length,
                r;
            for (r = 0; r < n - 1; r += 2) t.push(parseInt(e.substr(r, 2), 16));
            return String.fromCharCode.apply(String, t)
        }

        function w() {
            this.reset()
        }
        var t = function(e, t) {
                return e + t & 4294967295
            },
            n = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
        return d(c("hello")) !== "5d41402abc4b2a76b9719d911017c592" && (t = function(e, t) {
            var n = (e & 65535) + (t & 65535),
                r = (e >> 16) + (t >> 16) + (n >> 16);
            return r << 16 | n & 65535
        }), typeof ArrayBuffer != "undefined" && !ArrayBuffer.prototype.slice && function() {
            function t(e, t) {
                return e = e | 0 || 0, e < 0 ? Math.max(e + t, 0) : Math.min(e, t)
            }
            ArrayBuffer.prototype.slice = function(n, r) {
                var i = this.byteLength,
                    s = t(n, i),
                    o = i,
                    u, a, f, l;
                return r !== e && (o = t(r, i)), s > o ? new ArrayBuffer(0) : (u = o - s, a = new ArrayBuffer(u), f = new Uint8Array(a), l = new Uint8Array(this, s, u), f.set(l), a)
            }
        }(), w.prototype.append = function(e) {
            return this.appendBinary(v(e)), this
        }, w.prototype.appendBinary = function(e) {
            this._buff += e, this._length += e.length;
            var t = this._buff.length,
                n;
            for (n = 64; n <= t; n += 64) a(this._hash, f(this._buff.substring(n - 64, n)));
            return this._buff = this._buff.substring(n - 64), this
        }, w.prototype.end = function(e) {
            var t = this._buff,
                n = t.length,
                r, i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                s;
            for (r = 0; r < n; r += 1) i[r >> 2] |= t.charCodeAt(r) << (r % 4 << 3);
            return this._finish(i, n), s = d(this._hash), e && (s = b(s)), this.reset(), s
        }, w.prototype.reset = function() {
            return this._buff = "", this._length = 0, this._hash = [1732584193, -271733879, -1732584194, 271733878], this
        }, w.prototype.getState = function() {
            return {
                buff: this._buff,
                length: this._length,
                hash: this._hash
            }
        }, w.prototype.setState = function(e) {
            return this._buff = e.buff, this._length = e.length, this._hash = e.hash, this
        }, w.prototype.destroy = function() {
            delete this._hash, delete this._buff, delete this._length
        }, w.prototype._finish = function(e, t) {
            var n = t,
                r, i, s;
            e[n >> 2] |= 128 << (n % 4 << 3);
            if (n > 55) {
                a(this._hash, e);
                for (n = 0; n < 16; n += 1) e[n] = 0
            }
            r = this._length * 8, r = r.toString(16).match(/(.*?)(.{0,8})$/), i = parseInt(r[2], 16), s = parseInt(r[1], 16) || 0, e[14] = i, e[15] = s, a(this._hash, e)
        }, w.hash = function(e, t) {
            return w.hashBinary(v(e), t)
        }, w.hashBinary = function(e, t) {
            var n = c(e),
                r = d(n);
            return t ? b(r) : r
        }, w.ArrayBuffer = function() {
            this.reset()
        }, w.ArrayBuffer.prototype.append = function(e) {
            var t = y(this._buff.buffer, e, !0),
                n = t.length,
                r;
            this._length += e.byteLength;
            for (r = 64; r <= n; r += 64) a(this._hash, l(t.subarray(r - 64, r)));
            return this._buff = r - 64 < n ? new Uint8Array(t.buffer.slice(r - 64)) : new Uint8Array(0), this
        }, w.ArrayBuffer.prototype.end = function(e) {
            var t = this._buff,
                n = t.length,
                r = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                i, s;
            for (i = 0; i < n; i += 1) r[i >> 2] |= t[i] << (i % 4 << 3);
            return this._finish(r, n), s = d(this._hash), e && (s = b(s)), this.reset(), s
        }, w.ArrayBuffer.prototype.reset = function() {
            return this._buff = new Uint8Array(0), this._length = 0, this._hash = [1732584193, -271733879, -1732584194, 271733878], this
        }, w.ArrayBuffer.prototype.getState = function() {
            var e = w.prototype.getState.call(this);
            return e.buff = g(e.buff), e
        }, w.ArrayBuffer.prototype.setState = function(e) {
            return e.buff = m(e.buff, !0), w.prototype.setState.call(this, e)
        }, w.ArrayBuffer.prototype.destroy = w.prototype.destroy, w.ArrayBuffer.prototype._finish = w.prototype._finish, w.ArrayBuffer.hash = function(e, t) {
            var n = h(new Uint8Array(e)),
                r = d(n);
            return t ? b(r) : r
        }, w
    }), define("encryption", ["md5"], function(e) {
        function t(t) {
            var n = (new Date).getTime(),
                r = {
                    date: (new Date).getTime(),
                    str: "99dayin_api_secrete"
                },
                i = e.hash(r.date + r.str);
            return t + "?time=" + r.date + "&token=" + i
        }
        return {
            Encryption: function(n) {
                return t(n)
            }
        }
    }), ! function(e, t) {
        "use strict";

        function n(e, t) {
            for (var n, r = [], i = 0; i < e.length; ++i) {
                if (n = u[e[i]] || s(e[i]), !n) throw "module definition dependecy not found: " + e[i];
                r.push(n)
            }
            t.apply(null, r)
        }

        function r(e, r, i) {
            if ("string" != typeof e) throw "invalid module definition, module id must be defined and be a string";
            if (r === t) throw "invalid module definition, dependencies must be specified";
            if (i === t) throw "invalid module definition, definition function must be specified";
            n(r, function() {
                u[e] = i.apply(null, arguments)
            })
        }

        function i(e) {
            return !!u[e]
        }

        function s(t) {
            for (var n = e, r = t.split(/[.\/]/), i = 0; i < r.length; ++i) {
                if (!n[r[i]]) return;
                n = n[r[i]]
            }
            return n
        }

        function o(n) {
            for (var r = 0; r < n.length; r++) {
                for (var i = e, s = n[r], o = s.split(/[.\/]/), a = 0; a < o.length - 1; ++a) i[o[a]] === t && (i[o[a]] = {}), i = i[o[a]];
                i[o[o.length - 1]] = u[s]
            }
        }
        var u = {},
            a = "moxie/core/utils/Basic",
            f = "moxie/core/utils/Env",
            l = "moxie/core/I18n",
            c = "moxie/core/utils/Mime",
            h = "moxie/core/utils/Dom",
            p = "moxie/core/Exceptions",
            d = "moxie/core/EventTarget",
            v = "moxie/runtime/Runtime",
            m = "moxie/runtime/RuntimeClient",
            g = "moxie/file/FileInput",
            y = "moxie/core/utils/Encode",
            b = "moxie/file/Blob",
            w = "moxie/file/File",
            E = "moxie/file/FileDrop",
            S = "moxie/file/FileReader",
            x = "moxie/core/utils/Url",
            T = "moxie/runtime/RuntimeTarget",
            N = "moxie/file/FileReaderSync",
            C = "moxie/xhr/FormData",
            k = "moxie/xhr/XMLHttpRequest",
            L = "moxie/runtime/Transporter",
            A = "moxie/image/Image",
            O = "moxie/runtime/html5/Runtime",
            M = "moxie/core/utils/Events",
            _ = "moxie/runtime/html5/file/FileInput",
            D = "moxie/runtime/html5/file/Blob",
            P = "moxie/runtime/html5/file/FileDrop",
            H = "moxie/runtime/html5/file/FileReader",
            B = "moxie/runtime/html5/xhr/XMLHttpRequest",
            j = "moxie/runtime/html5/utils/BinaryReader",
            F = "moxie/runtime/html5/image/JPEGHeaders",
            I = "moxie/runtime/html5/image/ExifParser",
            q = "moxie/runtime/html5/image/JPEG",
            R = "moxie/runtime/html5/image/PNG",
            U = "moxie/runtime/html5/image/ImageInfo",
            z = "moxie/runtime/html5/image/MegaPixel",
            W = "moxie/runtime/html5/image/Image",
            X = "moxie/runtime/flash/Runtime",
            V = "moxie/runtime/flash/file/FileInput",
            $ = "moxie/runtime/flash/file/Blob",
            J = "moxie/runtime/flash/file/FileReader",
            K = "moxie/runtime/flash/file/FileReaderSync",
            Q = "moxie/runtime/flash/xhr/XMLHttpRequest",
            G = "moxie/runtime/flash/runtime/Transporter",
            Y = "moxie/runtime/flash/image/Image",
            Z = "moxie/runtime/silverlight/Runtime",
            et = "moxie/runtime/silverlight/file/FileInput",
            tt = "moxie/runtime/silverlight/file/Blob",
            nt = "moxie/runtime/silverlight/file/FileDrop",
            rt = "moxie/runtime/silverlight/file/FileReader",
            it = "moxie/runtime/silverlight/file/FileReaderSync",
            st = "moxie/runtime/silverlight/xhr/XMLHttpRequest",
            ot = "moxie/runtime/silverlight/runtime/Transporter",
            ut = "moxie/runtime/silverlight/image/Image",
            at = "moxie/runtime/html4/Runtime",
            ft = "moxie/runtime/html4/file/FileInput",
            lt = "moxie/runtime/html4/file/FileReader",
            ct = "moxie/runtime/html4/xhr/XMLHttpRequest",
            ht = "moxie/runtime/html4/image/Image";
        r(a, [], function() {
            var e = function(e) {
                    var t;
                    return e === t ? "undefined" : null === e ? "null" : e.nodeType ? "node" : {}.toString.call(e).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()
                },
                t = function(r) {
                    var i;
                    return n(arguments, function(s, u) {
                        u > 0 && n(s, function(n, s) {
                            n !== i && (e(r[s]) === e(n) && ~o(e(n), ["array", "object"]) ? t(r[s], n) : r[s] = n)
                        })
                    }), r
                },
                n = function(t, n) {
                    var r, i, s, o;
                    if (t)
                        if ("number" === e(t.length)) {
                            for (s = 0, r = t.length; r > s; s++)
                                if (n(t[s], s) === !1) return
                        } else if ("object" === e(t))
                        for (i in t)
                            if (t.hasOwnProperty(i) && n(t[i], i) === !1) return
                },
                r = function(t) {
                    var n;
                    if (!t || "object" !== e(t)) return !0;
                    for (n in t) return !1;
                    return !0
                },
                i = function(t, n) {
                    function r(i) {
                        "function" === e(t[i]) && t[i](function(e) {
                            ++i < s && !e ? r(i) : n(e)
                        })
                    }
                    var i = 0,
                        s = t.length;
                    "function" !== e(n) && (n = function() {}), t && t.length || n(), r(i)
                },
                s = function(e, t) {
                    var r = 0,
                        i = e.length,
                        s = new Array(i);
                    n(e, function(e, n) {
                        e(function(e) {
                            if (e) return t(e);
                            var o = [].slice.call(arguments);
                            o.shift(), s[n] = o, r++, r === i && (s.unshift(null), t.apply(this, s))
                        })
                    })
                },
                o = function(e, t) {
                    if (t) {
                        if (Array.prototype.indexOf) return Array.prototype.indexOf.call(t, e);
                        for (var n = 0, r = t.length; r > n; n++)
                            if (t[n] === e) return n
                    }
                    return -1
                },
                u = function(t, n) {
                    var r = [];
                    "array" !== e(t) && (t = [t]), "array" !== e(n) && (n = [n]);
                    for (var i in t) - 1 === o(t[i], n) && r.push(t[i]);
                    return r.length ? r : !1
                },
                a = function(e, t) {
                    var r = [];
                    return n(e, function(e) {
                        -1 !== o(e, t) && r.push(e)
                    }), r.length ? r : null
                },
                f = function(e) {
                    var t, n = [];
                    for (t = 0; t < e.length; t++) n[t] = e[t];
                    return n
                },
                l = function() {
                    var e = 0;
                    return function(t) {
                        var n = (new Date).getTime().toString(32),
                            r;
                        for (r = 0; 5 > r; r++) n += Math.floor(65535 * Math.random()).toString(32);
                        return (t || "o_") + n + (e++).toString(32)
                    }
                }(),
                c = function(e) {
                    return e ? String.prototype.trim ? String.prototype.trim.call(e) : e.toString().replace(/^\s*/, "").replace(/\s*$/, "") : e
                },
                h = function(e) {
                    if ("string" != typeof e) return e;
                    var t = {
                            t: 1099511627776,
                            g: 1073741824,
                            m: 1048576,
                            k: 1024
                        },
                        n;
                    return e = /^([0-9\.]+)([tmgk]?)$/.exec(e.toLowerCase().replace(/[^0-9\.tmkg]/g, "")), n = e[2], e = +e[1], t.hasOwnProperty(n) && (e *= t[n]), Math.floor(e)
                },
                p = function(t) {
                    var n = [].slice.call(arguments, 1);
                    return t.replace(/%[a-z]/g, function() {
                        var t = n.shift();
                        return "undefined" !== e(t) ? t : ""
                    })
                };
            return {
                guid: l,
                typeOf: e,
                extend: t,
                each: n,
                isEmptyObj: r,
                inSeries: i,
                inParallel: s,
                inArray: o,
                arrayDiff: u,
                arrayIntersect: a,
                toArray: f,
                trim: c,
                sprintf: p,
                parseSizeStr: h
            }
        }), r(f, [a], function(e) {
            function t(e, t, n) {
                var r = 0,
                    i = 0,
                    s = 0,
                    o = {
                        dev: -6,
                        alpha: -5,
                        a: -5,
                        beta: -4,
                        b: -4,
                        RC: -3,
                        rc: -3,
                        "#": -2,
                        p: 1,
                        pl: 1
                    },
                    u = function(e) {
                        return e = ("" + e).replace(/[_\-+]/g, "."), e = e.replace(/([^.\d]+)/g, ".$1.").replace(/\.{2,}/g, "."), e.length ? e.split(".") : [-8]
                    },
                    a = function(e) {
                        return e ? isNaN(e) ? o[e] || -7 : parseInt(e, 10) : 0
                    };
                for (e = u(e), t = u(t), i = Math.max(e.length, t.length), r = 0; i > r; r++)
                    if (e[r] != t[r]) {
                        if (e[r] = a(e[r]), t[r] = a(t[r]), e[r] < t[r]) {
                            s = -1;
                            break
                        }
                        if (e[r] > t[r]) {
                            s = 1;
                            break
                        }
                    }
                if (!n) return s;
                switch (n) {
                    case ">":
                    case "gt":
                        return s > 0;
                    case ">=":
                    case "ge":
                        return s >= 0;
                    case "<=":
                    case "le":
                        return 0 >= s;
                    case "==":
                    case "=":
                    case "eq":
                        return 0 === s;
                    case "<>":
                    case "!=":
                    case "ne":
                        return 0 !== s;
                    case "":
                    case "<":
                    case "lt":
                        return 0 > s;
                    default:
                        return null
                }
            }
            var n = function(e) {
                    var t = "",
                        n = "?",
                        r = "function",
                        i = "undefined",
                        s = "object",
                        o = "major",
                        u = "model",
                        a = "name",
                        f = "type",
                        l = "vendor",
                        c = "version",
                        h = "architecture",
                        p = "console",
                        d = "mobile",
                        v = "tablet",
                        m = {
                            has: function(e, t) {
                                return -1 !== t.toLowerCase().indexOf(e.toLowerCase())
                            },
                            lowerize: function(e) {
                                return e.toLowerCase()
                            }
                        },
                        g = {
                            rgx: function() {
                                for (var t, n = 0, o, u, a, f, l, c, h = arguments; n < h.length; n += 2) {
                                    var p = h[n],
                                        d = h[n + 1];
                                    if (typeof t === i) {
                                        t = {};
                                        for (a in d) f = d[a], typeof f === s ? t[f[0]] = e : t[f] = e
                                    }
                                    for (o = u = 0; o < p.length; o++)
                                        if (l = p[o].exec(this.getUA())) {
                                            for (a = 0; a < d.length; a++) c = l[++u], f = d[a], typeof f === s && f.length > 0 ? 2 == f.length ? typeof f[1] == r ? t[f[0]] = f[1].call(this, c) : t[f[0]] = f[1] : 3 == f.length ? typeof f[1] !== r || f[1].exec && f[1].test ? t[f[0]] = c ? c.replace(f[1], f[2]) : e : t[f[0]] = c ? f[1].call(this, c, f[2]) : e : 4 == f.length && (t[f[0]] = c ? f[3].call(this, c.replace(f[1], f[2])) : e) : t[f] = c ? c : e;
                                            break
                                        }
                                    if (l) break
                                }
                                return t
                            },
                            str: function(t, r) {
                                for (var i in r)
                                    if (typeof r[i] === s && r[i].length > 0) {
                                        for (var o = 0; o < r[i].length; o++)
                                            if (m.has(r[i][o], t)) return i === n ? e : i
                                    } else if (m.has(r[i], t)) return i === n ? e : i;
                                return t
                            }
                        },
                        y = {
                            browser: {
                                oldsafari: {
                                    major: {
                                        1: ["/8", "/1", "/3"],
                                        2: "/4",
                                        "?": "/"
                                    },
                                    version: {
                                        "1.0": "/8",
                                        1.2: "/1",
                                        1.3: "/3",
                                        "2.0": "/412",
                                        "2.0.2": "/416",
                                        "2.0.3": "/417",
                                        "2.0.4": "/419",
                                        "?": "/"
                                    }
                                }
                            },
                            device: {
                                sprint: {
                                    model: {
                                        "Evo Shift 4G": "7373KT"
                                    },
                                    vendor: {
                                        HTC: "APA",
                                        Sprint: "Sprint"
                                    }
                                }
                            },
                            os: {
                                windows: {
                                    version: {
                                        ME: "4.90",
                                        "NT 3.11": "NT3.51",
                                        "NT 4.0": "NT4.0",
                                        2e3: "NT 5.0",
                                        XP: ["NT 5.1", "NT 5.2"],
                                        Vista: "NT 6.0",
                                        7: "NT 6.1",
                                        8: "NT 6.2",
                                        8.1: "NT 6.3",
                                        RT: "ARM"
                                    }
                                }
                            }
                        },
                        b = {
                            browser: [
                                [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i],
                                [a, c],
                                [/\s(opr)\/([\w\.]+)/i],
                                [
                                    [a, "Opera"], c
                                ],
                                [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi)\/([\w\.-]+)/i],
                                [a, c],
                                [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
                                [
                                    [a, "IE"], c
                                ],
                                [/(edge)\/((\d+)?[\w\.]+)/i],
                                [a, c],
                                [/(yabrowser)\/([\w\.]+)/i],
                                [
                                    [a, "Yandex"], c
                                ],
                                [/(comodo_dragon)\/([\w\.]+)/i],
                                [
                                    [a, /_/g, " "], c
                                ],
                                [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i, /(uc\s?browser|qqbrowser)[\/\s]?([\w\.]+)/i],
                                [a, c],
                                [/(dolfin)\/([\w\.]+)/i],
                                [
                                    [a, "Dolphin"], c
                                ],
                                [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
                                [
                                    [a, "Chrome"], c
                                ],
                                [/XiaoMi\/MiuiBrowser\/([\w\.]+)/i],
                                [c, [a, "MIUI Browser"]],
                                [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i],
                                [c, [a, "Android Browser"]],
                                [/FBAV\/([\w\.]+);/i],
                                [c, [a, "Facebook"]],
                                [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
                                [c, [a, "Mobile Safari"]],
                                [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
                                [c, a],
                                [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                                [a, [c, g.str, y.browser.oldsafari.version]],
                                [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i],
                                [a, c],
                                [/(navigator|netscape)\/([\w\.-]+)/i],
                                [
                                    [a, "Netscape"], c
                                ],
                                [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]+)*/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i],
                                [a, c]
                            ],
                            engine: [
                                [/windows.+\sedge\/([\w\.]+)/i],
                                [c, [a, "EdgeHTML"]],
                                [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
                                [a, c],
                                [/rv\:([\w\.]+).*(gecko)/i],
                                [c, a]
                            ],
                            os: [
                                [/microsoft\s(windows)\s(vista|xp)/i],
                                [a, c],
                                [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
                                [a, [c, g.str, y.os.windows.version]],
                                [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                                [
                                    [a, "Windows"],
                                    [c, g.str, y.os.windows.version]
                                ],
                                [/\((bb)(10);/i],
                                [
                                    [a, "BlackBerry"], c
                                ],
                                [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\os|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i, /linux;.+(sailfish);/i],
                                [a, c],
                                [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],
                                [
                                    [a, "Symbian"], c
                                ],
                                [/\((series40);/i],
                                [a],
                                [/mozilla.+\(mobile;.+gecko.+firefox/i],
                                [
                                    [a, "Firefox OS"], c
                                ],
                                [/(nintendo|playstation)\s([wids3portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i],
                                [a, c],
                                [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                                [
                                    [a, "Chromium OS"], c
                                ],
                                [/(sunos)\s?([\w\.]+\d)*/i],
                                [
                                    [a, "Solaris"], c
                                ],
                                [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],
                                [a, c],
                                [/(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i],
                                [
                                    [a, "iOS"],
                                    [c, /_/g, "."]
                                ],
                                [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i],
                                [
                                    [a, "Mac OS"],
                                    [c, /_/g, "."]
                                ],
                                [/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(haiku)\s(\w+)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]+)*/i],
                                [a, c]
                            ]
                        },
                        w = function(e) {
                            var n = e || (window && window.navigator && window.navigator.userAgent ? window.navigator.userAgent : t);
                            this.getBrowser = function() {
                                return g.rgx.apply(this, b.browser)
                            }, this.getEngine = function() {
                                return g.rgx.apply(this, b.engine)
                            }, this.getOS = function() {
                                return g.rgx.apply(this, b.os)
                            }, this.getResult = function() {
                                return {
                                    ua: this.getUA(),
                                    browser: this.getBrowser(),
                                    engine: this.getEngine(),
                                    os: this.getOS()
                                }
                            }, this.getUA = function() {
                                return n
                            }, this.setUA = function(e) {
                                return n = e, this
                            }, this.setUA(n)
                        };
                    return w
                }(),
                r = function() {
                    var t = {
                        define_property: function() {
                            return !1
                        }(),
                        create_canvas: function() {
                            var e = document.createElement("canvas");
                            return !!e.getContext && !!e.getContext("2d")
                        }(),
                        return_response_type: function(t) {
                            try {
                                if (-1 !== e.inArray(t, ["", "text", "document"])) return !0;
                                if (window.XMLHttpRequest) {
                                    var n = new XMLHttpRequest;
                                    if (n.open("get", "/"), "responseType" in n) return n.responseType = t, n.responseType !== t ? !1 : !0
                                }
                            } catch (r) {}
                            return !1
                        },
                        use_data_uri: function() {
                            var e = new Image;
                            return e.onload = function() {
                                t.use_data_uri = 1 === e.width && 1 === e.height
                            }, setTimeout(function() {
                                e.src = "data:image/gif;base64,R0lGODlhAQABAIAAAP8AAAAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                            }, 1), !1
                        }(),
                        use_data_uri_over32kb: function() {
                            return t.use_data_uri && ("IE" !== s.browser || s.version >= 9)
                        },
                        use_data_uri_of: function(e) {
                            return t.use_data_uri && 33e3 > e || t.use_data_uri_over32kb()
                        },
                        use_fileinput: function() {
                            if (navigator.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/)) return !1;
                            var e = document.createElement("input");
                            return e.setAttribute("type", "file"), !e.disabled
                        }
                    };
                    return function(n) {
                        var r = [].slice.call(arguments);
                        return r.shift(), "function" === e.typeOf(t[n]) ? t[n].apply(this, r) : !!t[n]
                    }
                }(),
                i = (new n).getResult(),
                s = {
                    can: r,
                    uaParser: n,
                    browser: i.browser.name,
                    version: i.browser.version,
                    os: i.os.name,
                    osVersion: i.os.version,
                    verComp: t,
                    swf_url: "../flash/Moxie.swf",
                    xap_url: "../silverlight/Moxie.xap",
                    global_event_dispatcher: "moxie.core.EventTarget.instance.dispatchEvent"
                };
            return s.OS = s.os, s
        }), r(l, [a], function(e) {
            var t = {};
            return {
                addI18n: function(n) {
                    return e.extend(t, n)
                },
                translate: function(e) {
                    return t[e] || e
                },
                _: function(e) {
                    return this.translate(e)
                },
                sprintf: function(t) {
                    var n = [].slice.call(arguments, 1);
                    return t.replace(/%[a-z]/g, function() {
                        var t = n.shift();
                        return "undefined" !== e.typeOf(t) ? t : ""
                    })
                }
            }
        }), r(c, [a, l], function(e, t) {
            var n = "application/msword,doc dot,application/pdf,pdf,application/pgp-signature,pgp,application/postscript,ps ai eps,application/rtf,rtf,application/vnd.ms-excel,xls xlb,application/vnd.ms-powerpoint,ppt pps pot,application/zip,zip,application/x-shockwave-flash,swf swfl,application/vnd.openxmlformats-officedocument.wordprocessingml.document,docx,application/vnd.openxmlformats-officedocument.wordprocessingml.template,dotx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,xlsx,application/vnd.openxmlformats-officedocument.presentationml.presentation,pptx,application/vnd.openxmlformats-officedocument.presentationml.template,potx,application/vnd.openxmlformats-officedocument.presentationml.slideshow,ppsx,application/x-javascript,js,application/json,json,audio/mpeg,mp3 mpga mpega mp2,audio/x-wav,wav,audio/x-m4a,m4a,audio/ogg,oga ogg,audio/aiff,aiff aif,audio/flac,flac,audio/aac,aac,audio/ac3,ac3,audio/x-ms-wma,wma,image/bmp,bmp,image/gif,gif,image/jpeg,jpg jpeg jpe,image/photoshop,psd,image/png,png,image/svg+xml,svg svgz,image/tiff,tiff tif,text/plain,asc txt text diff log,text/html,htm html xhtml,text/css,css,text/csv,csv,text/rtf,rtf,video/mpeg,mpeg mpg mpe m2v,video/quicktime,qt mov,video/mp4,mp4,video/x-m4v,m4v,video/x-flv,flv,video/x-ms-wmv,wmv,video/avi,avi,video/webm,webm,video/3gpp,3gpp 3gp,video/3gpp2,3g2,video/vnd.rn-realvideo,rv,video/ogg,ogv,video/x-matroska,mkv,application/vnd.oasis.opendocument.formula-template,otf,application/octet-stream,exe",
                r = {
                    mimes: {},
                    extensions: {},
                    addMimeType: function(e) {
                        var t = e.split(/,/),
                            n, r, i;
                        for (n = 0; n < t.length; n += 2) {
                            for (i = t[n + 1].split(/ /), r = 0; r < i.length; r++) this.mimes[i[r]] = t[n];
                            this.extensions[t[n]] = i
                        }
                    },
                    extList2mimes: function(t, n) {
                        var r = this,
                            i, s, o, u, a = [];
                        for (s = 0; s < t.length; s++)
                            for (i = t[s].extensions.split(/\s*,\s*/), o = 0; o < i.length; o++) {
                                if ("*" === i[o]) return [];
                                if (u = r.mimes[i[o]], u && -1 === e.inArray(u, a) && a.push(u), n && /^\w+$/.test(i[o])) a.push("." + i[o]);
                                else if (!u) return []
                            }
                        return a
                    },
                    mimes2exts: function(t) {
                        var n = this,
                            r = [];
                        return e.each(t, function(t) {
                            if ("*" === t) return r = [], !1;
                            var i = t.match(/^(\w+)\/(\*|\w+)$/);
                            i && ("*" === i[2] ? e.each(n.extensions, function(e, t) {
                                (new RegExp("^" + i[1] + "/")).test(t) && [].push.apply(r, n.extensions[t])
                            }) : n.extensions[t] && [].push.apply(r, n.extensions[t]))
                        }), r
                    },
                    mimes2extList: function(n) {
                        var r = [],
                            i = [];
                        return "string" === e.typeOf(n) && (n = e.trim(n).split(/\s*,\s*/)), i = this.mimes2exts(n), r.push({
                            title: t.translate("Files"),
                            extensions: i.length ? i.join(",") : "*"
                        }), r.mimes = n, r
                    },
                    getFileExtension: function(e) {
                        var t = e && e.match(/\.([^.]+)$/);
                        return t ? t[1].toLowerCase() : ""
                    },
                    getFileMime: function(e) {
                        return this.mimes[this.getFileExtension(e)] || ""
                    }
                };
            return r.addMimeType(n), r
        }), r(h, [f], function(e) {
            var t = function(e) {
                    return "string" != typeof e ? e : document.getElementById(e)
                },
                n = function(e, t) {
                    if (!e.className) return !1;
                    var n = new RegExp("(^|\\s+)" + t + "(\\s+|$)");
                    return n.test(e.className)
                },
                r = function(e, t) {
                    n(e, t) || (e.className = e.className ? e.className.replace(/\s+$/, "") + " " + t : t)
                },
                i = function(e, t) {
                    if (e.className) {
                        var n = new RegExp("(^|\\s+)" + t + "(\\s+|$)");
                        e.className = e.className.replace(n, function(e, t, n) {
                            return " " === t && " " === n ? " " : ""
                        })
                    }
                },
                s = function(e, t) {
                    return e.currentStyle ? e.currentStyle[t] : window.getComputedStyle ? window.getComputedStyle(e, null)[t] : void 0
                },
                o = function(t, n) {
                    function r(e) {
                        var t, n, r = 0,
                            i = 0;
                        return e && (n = e.getBoundingClientRect(), t = "CSS1Compat" === u.compatMode ? u.documentElement : u.body, r = n.left + t.scrollLeft, i = n.top + t.scrollTop), {
                            x: r,
                            y: i
                        }
                    }
                    var i = 0,
                        s = 0,
                        o, u = document,
                        a, f;
                    if (t = t, n = n || u.body, t && t.getBoundingClientRect && "IE" === e.browser && (!u.documentMode || u.documentMode < 8)) return a = r(t), f = r(n), {
                        x: a.x - f.x,
                        y: a.y - f.y
                    };
                    for (o = t; o && o != n && o.nodeType;) i += o.offsetLeft || 0, s += o.offsetTop || 0, o = o.offsetParent;
                    for (o = t.parentNode; o && o != n && o.nodeType;) i -= o.scrollLeft || 0, s -= o.scrollTop || 0, o = o.parentNode;
                    return {
                        x: i,
                        y: s
                    }
                },
                u = function(e) {
                    return {
                        w: e.offsetWidth || e.clientWidth,
                        h: e.offsetHeight || e.clientHeight
                    }
                };
            return {
                get: t,
                hasClass: n,
                addClass: r,
                removeClass: i,
                getStyle: s,
                getPos: o,
                getSize: u
            }
        }), r(p, [a], function(e) {
            function t(e, t) {
                var n;
                for (n in e)
                    if (e[n] === t) return n;
                return null
            }
            return {
                RuntimeError: function() {
                    function n(e) {
                        this.code = e, this.name = t(r, e), this.message = this.name + ": RuntimeError " + this.code
                    }
                    var r = {
                        NOT_INIT_ERR: 1,
                        NOT_SUPPORTED_ERR: 9,
                        JS_ERR: 4
                    };
                    return e.extend(n, r), n.prototype = Error.prototype, n
                }(),
                OperationNotAllowedException: function() {
                    function t(e) {
                        this.code = e, this.name = "OperationNotAllowedException"
                    }
                    return e.extend(t, {
                        NOT_ALLOWED_ERR: 1
                    }), t.prototype = Error.prototype, t
                }(),
                ImageError: function() {
                    function n(e) {
                        this.code = e, this.name = t(r, e), this.message = this.name + ": ImageError " + this.code
                    }
                    var r = {
                        WRONG_FORMAT: 1,
                        MAX_RESOLUTION_ERR: 2,
                        INVALID_META_ERR: 3
                    };
                    return e.extend(n, r), n.prototype = Error.prototype, n
                }(),
                FileException: function() {
                    function n(e) {
                        this.code = e, this.name = t(r, e), this.message = this.name + ": FileException " + this.code
                    }
                    var r = {
                        NOT_FOUND_ERR: 1,
                        SECURITY_ERR: 2,
                        ABORT_ERR: 3,
                        NOT_READABLE_ERR: 4,
                        ENCODING_ERR: 5,
                        NO_MODIFICATION_ALLOWED_ERR: 6,
                        INVALID_STATE_ERR: 7,
                        SYNTAX_ERR: 8
                    };
                    return e.extend(n, r), n.prototype = Error.prototype, n
                }(),
                DOMException: function() {
                    function n(e) {
                        this.code = e, this.name = t(r, e), this.message = this.name + ": DOMException " + this.code
                    }
                    var r = {
                        INDEX_SIZE_ERR: 1,
                        DOMSTRING_SIZE_ERR: 2,
                        HIERARCHY_REQUEST_ERR: 3,
                        WRONG_DOCUMENT_ERR: 4,
                        INVALID_CHARACTER_ERR: 5,
                        NO_DATA_ALLOWED_ERR: 6,
                        NO_MODIFICATION_ALLOWED_ERR: 7,
                        NOT_FOUND_ERR: 8,
                        NOT_SUPPORTED_ERR: 9,
                        INUSE_ATTRIBUTE_ERR: 10,
                        INVALID_STATE_ERR: 11,
                        SYNTAX_ERR: 12,
                        INVALID_MODIFICATION_ERR: 13,
                        NAMESPACE_ERR: 14,
                        INVALID_ACCESS_ERR: 15,
                        VALIDATION_ERR: 16,
                        TYPE_MISMATCH_ERR: 17,
                        SECURITY_ERR: 18,
                        NETWORK_ERR: 19,
                        ABORT_ERR: 20,
                        URL_MISMATCH_ERR: 21,
                        QUOTA_EXCEEDED_ERR: 22,
                        TIMEOUT_ERR: 23,
                        INVALID_NODE_TYPE_ERR: 24,
                        DATA_CLONE_ERR: 25
                    };
                    return e.extend(n, r), n.prototype = Error.prototype, n
                }(),
                EventException: function() {
                    function t(e) {
                        this.code = e, this.name = "EventException"
                    }
                    return e.extend(t, {
                        UNSPECIFIED_EVENT_TYPE_ERR: 0
                    }), t.prototype = Error.prototype, t
                }()
            }
        }), r(d, [f, p, a], function(e, t, n) {
            function r() {
                var e = {};
                n.extend(this, {
                    uid: null,
                    init: function() {
                        this.uid || (this.uid = n.guid("uid_"))
                    },
                    addEventListener: function(t, r, i, s) {
                        var o = this,
                            u;
                        return this.hasOwnProperty("uid") || (this.uid = n.guid("uid_")), t = n.trim(t), /\s/.test(t) ? void n.each(t.split(/\s+/), function(e) {
                            o.addEventListener(e, r, i, s)
                        }) : (t = t.toLowerCase(), i = parseInt(i, 10) || 0, u = e[this.uid] && e[this.uid][t] || [], u.push({
                            fn: r,
                            priority: i,
                            scope: s || this
                        }), e[this.uid] || (e[this.uid] = {}), void(e[this.uid][t] = u))
                    },
                    hasEventListener: function(t) {
                        var n = t ? e[this.uid] && e[this.uid][t] : e[this.uid];
                        return n ? n : !1
                    },
                    removeEventListener: function(t, r) {
                        t = t.toLowerCase();
                        var i = e[this.uid] && e[this.uid][t],
                            s;
                        if (i) {
                            if (r) {
                                for (s = i.length - 1; s >= 0; s--)
                                    if (i[s].fn === r) {
                                        i.splice(s, 1);
                                        break
                                    }
                            } else i = [];
                            i.length || (delete e[this.uid][t], n.isEmptyObj(e[this.uid]) && delete e[this.uid])
                        }
                    },
                    removeAllEventListeners: function() {
                        e[this.uid] && delete e[this.uid]
                    },
                    dispatchEvent: function(r) {
                        var i, s, o, u, a = {},
                            f = !0,
                            l;
                        if ("string" !== n.typeOf(r)) {
                            if (u = r, "string" !== n.typeOf(u.type)) throw new t.EventException(t.EventException.UNSPECIFIED_EVENT_TYPE_ERR);
                            r = u.type, u.total !== l && u.loaded !== l && (a.total = u.total, a.loaded = u.loaded), a.async = u.async || !1
                        }
                        if (-1 !== r.indexOf("::") ? ! function(e) {
                                i = e[0], r = e[1]
                            }(r.split("::")) : i = this.uid, r = r.toLowerCase(), s = e[i] && e[i][r]) {
                            s.sort(function(e, t) {
                                return t.priority - e.priority
                            }), o = [].slice.call(arguments), o.shift(), a.type = r, o.unshift(a);
                            var c = [];
                            n.each(s, function(e) {
                                o[0].target = e.scope, c.push(a.async ? function(t) {
                                    setTimeout(function() {
                                        t(e.fn.apply(e.scope, o) === !1)
                                    }, 1)
                                } : function(t) {
                                    t(e.fn.apply(e.scope, o) === !1)
                                })
                            }), c.length && n.inSeries(c, function(e) {
                                f = !e
                            })
                        }
                        return f
                    },
                    bind: function() {
                        this.addEventListener.apply(this, arguments)
                    },
                    unbind: function() {
                        this.removeEventListener.apply(this, arguments)
                    },
                    unbindAll: function() {
                        this.removeAllEventListeners.apply(this, arguments)
                    },
                    trigger: function() {
                        return this.dispatchEvent.apply(this, arguments)
                    },
                    handleEventProps: function(e) {
                        var t = this;
                        this.bind(e.join(" "), function(e) {
                            var t = "on" + e.type.toLowerCase();
                            "function" === n.typeOf(this[t]) && this[t].apply(this, arguments)
                        }), n.each(e, function(e) {
                            e = "on" + e.toLowerCase(e), "undefined" === n.typeOf(t[e]) && (t[e] = null)
                        })
                    }
                })
            }
            return r.instance = new r, r
        }), r(v, [f, a, h, d], function(e, t, n, r) {
            function i(e, r, s, u, a) {
                var f = this,
                    l, c = t.guid(r + "_"),
                    h = a || "browser";
                e = e || {}, o[c] = this, s = t.extend({
                    access_binary: !1,
                    access_image_binary: !1,
                    display_media: !1,
                    do_cors: !1,
                    drag_and_drop: !1,
                    filter_by_extension: !0,
                    resize_image: !1,
                    report_upload_progress: !1,
                    return_response_headers: !1,
                    return_response_type: !1,
                    return_status_code: !0,
                    send_custom_headers: !1,
                    select_file: !1,
                    select_folder: !1,
                    select_multiple: !0,
                    send_binary_string: !1,
                    send_browser_cookies: !0,
                    send_multipart: !0,
                    slice_blob: !1,
                    stream_upload: !1,
                    summon_file_dialog: !1,
                    upload_filesize: !0,
                    use_http_method: !0
                }, s), e.preferred_caps && (h = i.getMode(u, e.preferred_caps, h)), l = function() {
                    var e = {};
                    return {
                        exec: function(t, n, r, i) {
                            return l[n] && (e[t] || (e[t] = {
                                context: this,
                                instance: new l[n]
                            }), e[t].instance[r]) ? e[t].instance[r].apply(this, i) : void 0
                        },
                        removeInstance: function(t) {
                            delete e[t]
                        },
                        removeAllInstances: function() {
                            var n = this;
                            t.each(e, function(e, r) {
                                "function" === t.typeOf(e.instance.destroy) && e.instance.destroy.call(e.context), n.removeInstance(r)
                            })
                        }
                    }
                }(), t.extend(this, {
                    initialized: !1,
                    uid: c,
                    type: r,
                    mode: i.getMode(u, e.required_caps, h),
                    shimid: c + "_container",
                    clients: 0,
                    options: e,
                    can: function(e, n) {
                        var r = arguments[2] || s;
                        if ("string" === t.typeOf(e) && "undefined" === t.typeOf(n) && (e = i.parseCaps(e)), "object" === t.typeOf(e)) {
                            for (var o in e)
                                if (!this.can(o, e[o], r)) return !1;
                            return !0
                        }
                        return "function" === t.typeOf(r[e]) ? r[e].call(this, n) : n === r[e]
                    },
                    getShimContainer: function() {
                        var e, r = n.get(this.shimid);
                        return r || (e = this.options.container ? n.get(this.options.container) : document.body, r = document.createElement("div"), r.id = this.shimid, r.className = "moxie-shim moxie-shim-" + this.type, t.extend(r.style, {
                            position: "absolute",
                            top: "0px",
                            left: "0px",
                            width: "1px",
                            height: "1px",
                            overflow: "hidden"
                        }), e.appendChild(r), e = null), r
                    },
                    getShim: function() {
                        return l
                    },
                    shimExec: function(e, t) {
                        var n = [].slice.call(arguments, 2);
                        return f.getShim().exec.call(this, this.uid, e, t, n)
                    },
                    exec: function(e, t) {
                        var n = [].slice.call(arguments, 2);
                        return f[e] && f[e][t] ? f[e][t].apply(this, n) : f.shimExec.apply(this, arguments)
                    },
                    destroy: function() {
                        if (f) {
                            var e = n.get(this.shimid);
                            e && e.parentNode.removeChild(e), l && l.removeAllInstances(), this.unbindAll(), delete o[this.uid], this.uid = null, c = f = l = e = null
                        }
                    }
                }), this.mode && e.required_caps && !this.can(e.required_caps) && (this.mode = !1)
            }
            var s = {},
                o = {};
            return i.order = "html5,flash,silverlight,html4", i.getRuntime = function(e) {
                return o[e] ? o[e] : !1
            }, i.addConstructor = function(e, t) {
                t.prototype = r.instance, s[e] = t
            }, i.getConstructor = function(e) {
                return s[e] || null
            }, i.getInfo = function(e) {
                var t = i.getRuntime(e);
                return t ? {
                    uid: t.uid,
                    type: t.type,
                    mode: t.mode,
                    can: function() {
                        return t.can.apply(t, arguments)
                    }
                } : null
            }, i.parseCaps = function(e) {
                var n = {};
                return "string" !== t.typeOf(e) ? e || {} : (t.each(e.split(","), function(e) {
                    n[e] = !0
                }), n)
            }, i.can = function(e, t) {
                var n, r = i.getConstructor(e),
                    s;
                return r ? (n = new r({
                    required_caps: t
                }), s = n.mode, n.destroy(), !!s) : !1
            }, i.thatCan = function(e, t) {
                var n = (t || i.order).split(/\s*,\s*/);
                for (var r in n)
                    if (i.can(n[r], e)) return n[r];
                return null
            }, i.getMode = function(e, n, r) {
                var i = null;
                if ("undefined" === t.typeOf(r) && (r = "browser"), n && !t.isEmptyObj(e)) {
                    if (t.each(n, function(n, r) {
                            if (e.hasOwnProperty(r)) {
                                var s = e[r](n);
                                if ("string" == typeof s && (s = [s]), i) {
                                    if (!(i = t.arrayIntersect(i, s))) return i = !1
                                } else i = s
                            }
                        }), i) return -1 !== t.inArray(r, i) ? r : i[0];
                    if (i === !1) return !1
                }
                return r
            }, i.capTrue = function() {
                return !0
            }, i.capFalse = function() {
                return !1
            }, i.capTest = function(e) {
                return function() {
                    return !!e
                }
            }, i
        }), r(m, [f, p, a, v], function(e, t, n, r) {
            return function() {
                var i;
                n.extend(this, {
                    connectRuntime: function(e) {
                        function s(n) {
                            var u, a;
                            return n.length ? (u = n.shift().toLowerCase(), (a = r.getConstructor(u)) ? (i = new a(e), i.bind("Init", function() {
                                i.initialized = !0, setTimeout(function() {
                                    i.clients++, o.trigger("RuntimeInit", i)
                                }, 1)
                            }), i.bind("Error", function() {
                                i.destroy(), s(n)
                            }), i.mode ? void i.init() : void i.trigger("Error")) : void s(n)) : (o.trigger("RuntimeError", new t.RuntimeError(t.RuntimeError.NOT_INIT_ERR)), void(i = null))
                        }
                        var o = this,
                            u;
                        if ("string" === n.typeOf(e) ? u = e : "string" === n.typeOf(e.ruid) && (u = e.ruid), u) {
                            if (i = r.getRuntime(u)) return i.clients++, i;
                            throw new t.RuntimeError(t.RuntimeError.NOT_INIT_ERR)
                        }
                        s((e.runtime_order || r.order).split(/\s*,\s*/))
                    },
                    disconnectRuntime: function() {
                        i && --i.clients <= 0 && i.destroy(), i = null
                    },
                    getRuntime: function() {
                        return i && i.uid ? i : i = null
                    },
                    exec: function() {
                        return i ? i.exec.apply(this, arguments) : null
                    }
                })
            }
        }), r(g, [a, f, c, h, p, d, l, v, m], function(e, t, n, r, i, s, o, u, a) {
            function f(t) {
                var s = this,
                    f, c, h;
                if (-1 !== e.inArray(e.typeOf(t), ["string", "node"]) && (t = {
                        browse_button: t
                    }), c = r.get(t.browse_button), !c) throw new i.DOMException(i.DOMException.NOT_FOUND_ERR);
                h = {
                    accept: [{
                        title: o.translate("All Files"),
                        extensions: "*"
                    }],
                    name: "file",
                    multiple: !1,
                    required_caps: !1,
                    container: c.parentNode || document.body
                }, t = e.extend({}, h, t), "string" == typeof t.required_caps && (t.required_caps = u.parseCaps(t.required_caps)), "string" == typeof t.accept && (t.accept = n.mimes2extList(t.accept)), f = r.get(t.container), f || (f = document.body), "static" === r.getStyle(f, "position") && (f.style.position = "relative"), f = c = null, a.call(s), e.extend(s, {
                    uid: e.guid("uid_"),
                    ruid: null,
                    shimid: null,
                    files: null,
                    init: function() {
                        s.bind("RuntimeInit", function(n, i) {
                            s.ruid = i.uid, s.shimid = i.shimid, s.bind("Ready", function() {
                                s.trigger("Refresh")
                            }, 999), s.bind("Refresh", function() {
                                var n, s, o, u;
                                o = r.get(t.browse_button), u = r.get(i.shimid), o && (n = r.getPos(o, r.get(t.container)), s = r.getSize(o), u && e.extend(u.style, {
                                    top: n.y + "px",
                                    left: n.x + "px",
                                    width: s.w + "px",
                                    height: s.h + "px"
                                })), u = o = null
                            }), i.exec.call(s, "FileInput", "init", t)
                        }), s.connectRuntime(e.extend({}, t, {
                            required_caps: {
                                select_file: !0
                            }
                        }))
                    },
                    disable: function(t) {
                        var n = this.getRuntime();
                        n && n.exec.call(this, "FileInput", "disable", "undefined" === e.typeOf(t) ? !0 : t)
                    },
                    refresh: function() {
                        s.trigger("Refresh")
                    },
                    destroy: function() {
                        var t = this.getRuntime();
                        t && (t.exec.call(this, "FileInput", "destroy"), this.disconnectRuntime()), "array" === e.typeOf(this.files) && e.each(this.files, function(e) {
                            e.destroy()
                        }), this.files = null, this.unbindAll()
                    }
                }), this.handleEventProps(l)
            }
            var l = ["ready", "change", "cancel", "mouseenter", "mouseleave", "mousedown", "mouseup"];
            return f.prototype = s.instance, f
        }), r(y, [], function() {
            var e = function(e) {
                    return unescape(encodeURIComponent(e))
                },
                t = function(e) {
                    return decodeURIComponent(escape(e))
                },
                n = function(e, n) {
                    if ("function" == typeof window.atob) return n ? t(window.atob(e)) : window.atob(e);
                    var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                        i, s, o, u, a, f, l, c, h = 0,
                        p = 0,
                        d = "",
                        v = [];
                    if (!e) return e;
                    e += "";
                    do u = r.indexOf(e.charAt(h++)), a = r.indexOf(e.charAt(h++)), f = r.indexOf(e.charAt(h++)), l = r.indexOf(e.charAt(h++)), c = u << 18 | a << 12 | f << 6 | l, i = c >> 16 & 255, s = c >> 8 & 255, o = 255 & c, 64 == f ? v[p++] = String.fromCharCode(i) : 64 == l ? v[p++] = String.fromCharCode(i, s) : v[p++] = String.fromCharCode(i, s, o); while (h < e.length);
                    return d = v.join(""), n ? t(d) : d
                },
                r = function(t, n) {
                    if (n && (t = e(t)), "function" == typeof window.btoa) return window.btoa(t);
                    var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                        i, s, o, u, a, f, l, c, h = 0,
                        p = 0,
                        d = "",
                        v = [];
                    if (!t) return t;
                    do i = t.charCodeAt(h++), s = t.charCodeAt(h++), o = t.charCodeAt(h++), c = i << 16 | s << 8 | o, u = c >> 18 & 63, a = c >> 12 & 63, f = c >> 6 & 63, l = 63 & c, v[p++] = r.charAt(u) + r.charAt(a) + r.charAt(f) + r.charAt(l); while (h < t.length);
                    d = v.join("");
                    var m = t.length % 3;
                    return (m ? d.slice(0, m - 3) : d) + "===".slice(m || 3)
                };
            return {
                utf8_encode: e,
                utf8_decode: t,
                atob: n,
                btoa: r
            }
        }), r(b, [a, y, m], function(e, t, n) {
            function r(s, o) {
                function u(t, n, s) {
                    var o, u = i[this.uid];
                    return "string" === e.typeOf(u) && u.length ? (o = new r(null, {
                        type: s,
                        size: n - t
                    }), o.detach(u.substr(t, o.size)), o) : null
                }
                n.call(this), s && this.connectRuntime(s), o ? "string" === e.typeOf(o) && (o = {
                    data: o
                }) : o = {}, e.extend(this, {
                    uid: o.uid || e.guid("uid_"),
                    ruid: s,
                    size: o.size || 0,
                    type: o.type || "",
                    slice: function(e, t, n) {
                        return this.isDetached() ? u.apply(this, arguments) : this.getRuntime().exec.call(this, "Blob", "slice", this.getSource(), e, t, n)
                    },
                    getSource: function() {
                        return i[this.uid] ? i[this.uid] : null
                    },
                    detach: function(e) {
                        if (this.ruid && (this.getRuntime().exec.call(this, "Blob", "destroy"), this.disconnectRuntime(), this.ruid = null), e = e || "", "data:" == e.substr(0, 5)) {
                            var n = e.indexOf(";base64,");
                            this.type = e.substring(5, n), e = t.atob(e.substring(n + 8))
                        }
                        this.size = e.length, i[this.uid] = e
                    },
                    isDetached: function() {
                        return !this.ruid && "string" === e.typeOf(i[this.uid])
                    },
                    destroy: function() {
                        this.detach(), delete i[this.uid]
                    }
                }), o.data ? this.detach(o.data) : i[this.uid] = o
            }
            var i = {};
            return r
        }), r(w, [a, c, b], function(e, t, n) {
            function r(r, i) {
                i || (i = {}), n.apply(this, arguments), this.type || (this.type = t.getFileMime(i.name));
                var s;
                if (i.name) s = i.name.replace(/\\/g, "/"), s = s.substr(s.lastIndexOf("/") + 1);
                else if (this.type) {
                    var o = this.type.split("/")[0];
                    s = e.guid(("" !== o ? o : "file") + "_"), t.extensions[this.type] && (s += "." + t.extensions[this.type][0])
                }
                e.extend(this, {
                    name: s || e.guid("file_"),
                    relativePath: "",
                    lastModifiedDate: i.lastModifiedDate || (new Date).toLocaleString()
                })
            }
            return r.prototype = n.prototype, r
        }), r(E, [l, h, p, a, f, w, m, d, c], function(e, t, n, r, i, s, o, u, a) {
            function f(n) {
                var i = this,
                    s;
                "string" == typeof n && (n = {
                    drop_zone: n
                }), s = {
                    accept: [{
                        title: e.translate("All Files"),
                        extensions: "*"
                    }],
                    required_caps: {
                        drag_and_drop: !0
                    }
                }, n = "object" == typeof n ? r.extend({}, s, n) : s, n.container = t.get(n.drop_zone) || document.body, "static" === t.getStyle(n.container, "position") && (n.container.style.position = "relative"), "string" == typeof n.accept && (n.accept = a.mimes2extList(n.accept)), o.call(i), r.extend(i, {
                    uid: r.guid("uid_"),
                    ruid: null,
                    files: null,
                    init: function() {
                        i.bind("RuntimeInit", function(e, t) {
                            i.ruid = t.uid, t.exec.call(i, "FileDrop", "init", n), i.dispatchEvent("ready")
                        }), i.connectRuntime(n)
                    },
                    destroy: function() {
                        var e = this.getRuntime();
                        e && (e.exec.call(this, "FileDrop", "destroy"), this.disconnectRuntime()), this.files = null, this.unbindAll()
                    }
                }), this.handleEventProps(l)
            }
            var l = ["ready", "dragenter", "dragleave", "drop", "error"];
            return f.prototype = u.instance, f
        }), r(S, [a, y, p, d, b, m], function(e, t, n, r, i, s) {
            function o() {
                function r(e, r) {
                    var s = this;
                    if (this.trigger("loadstart"), this.readyState === o.LOADING) return this.trigger("error", new n.DOMException(n.DOMException.INVALID_STATE_ERR)), void this.trigger("loadend");
                    if (!(r instanceof i)) return this.trigger("error", new n.DOMException(n.DOMException.NOT_FOUND_ERR)), void this.trigger("loadend");
                    if (this.result = null, this.readyState = o.LOADING, r.isDetached()) {
                        var u = r.getSource();
                        switch (e) {
                            case "readAsText":
                            case "readAsBinaryString":
                                this.result = u;
                                break;
                            case "readAsDataURL":
                                this.result = "data:" + r.type + ";base64," + t.btoa(u)
                        }
                        this.readyState = o.DONE, this.trigger("load"), this.trigger("loadend")
                    } else this.connectRuntime(r.ruid), this.exec("FileReader", "read", e, r)
                }
                s.call(this), e.extend(this, {
                    uid: e.guid("uid_"),
                    readyState: o.EMPTY,
                    result: null,
                    error: null,
                    readAsBinaryString: function(e) {
                        r.call(this, "readAsBinaryString", e)
                    },
                    readAsDataURL: function(e) {
                        r.call(this, "readAsDataURL", e)
                    },
                    readAsText: function(e) {
                        r.call(this, "readAsText", e)
                    },
                    abort: function() {
                        this.result = null, -1 === e.inArray(this.readyState, [o.EMPTY, o.DONE]) && (this.readyState === o.LOADING && (this.readyState = o.DONE), this.exec("FileReader", "abort"), this.trigger("abort"), this.trigger("loadend"))
                    },
                    destroy: function() {
                        this.abort(), this.exec("FileReader", "destroy"), this.disconnectRuntime(), this.unbindAll()
                    }
                }), this.handleEventProps(u), this.bind("Error", function(e, t) {
                    this.readyState = o.DONE, this.error = t
                }, 999), this.bind("Load", function(e) {
                    this.readyState = o.DONE
                }, 999)
            }
            var u = ["loadstart", "progress", "load", "abort", "error", "loadend"];
            return o.EMPTY = 0, o.LOADING = 1, o.DONE = 2, o.prototype = r.instance, o
        }), r(x, [], function() {
            var e = function(t, n) {
                    for (var r = ["source", "scheme", "authority", "userInfo", "user", "pass", "host", "port", "relative", "path", "directory", "file", "query", "fragment"], i = r.length, s = {
                            http: 80,
                            https: 443
                        }, o = {}, u = /^(?:([^:\/?#]+):)?(?:\/\/()(?:(?:()(?:([^:@\/]*):?([^:@\/]*))?@)?([^:\/?#]*)(?::(\d*))?))?()(?:(()(?:(?:[^?#\/]*\/)*)()(?:[^?#]*))(?:\\?([^#]*))?(?:#(.*))?)/, a = u.exec(t || ""); i--;) a[i] && (o[r[i]] = a[i]);
                    if (!o.scheme) {
                        n && "string" != typeof n || (n = e(n || document.location.href)), o.scheme = n.scheme, o.host = n.host, o.port = n.port;
                        var f = "";
                        /^[^\/]/.test(o.path) && (f = n.path, f = /\/[^\/]*\.[^\/]*$/.test(f) ? f.replace(/\/[^\/]+$/, "/") : f.replace(/\/?$/, "/")), o.path = f + (o.path || "")
                    }
                    return o.port || (o.port = s[o.scheme] || 80), o.port = parseInt(o.port, 10), o.path || (o.path = "/"), delete o.source, o
                },
                t = function(t) {
                    var n = {
                            http: 80,
                            https: 443
                        },
                        r = "object" == typeof t ? t : e(t);
                    return r.scheme + "://" + r.host + (r.port !== n[r.scheme] ? ":" + r.port : "") + r.path + (r.query ? r.query : "")
                },
                n = function(t) {
                    function n(e) {
                        return [e.scheme, e.host, e.port].join("/")
                    }
                    return "string" == typeof t && (t = e(t)), n(e()) === n(t)
                };
            return {
                parseUrl: e,
                resolveUrl: t,
                hasSameOrigin: n
            }
        }), r(T, [a, m, d], function(e, t, n) {
            function r() {
                this.uid = e.guid("uid_"), t.call(this), this.destroy = function() {
                    this.disconnectRuntime(), this.unbindAll()
                }
            }
            return r.prototype = n.instance, r
        }), r(N, [a, m, y], function(e, t, n) {
            return function() {
                function r(e, t) {
                    if (!t.isDetached()) {
                        var r = this.connectRuntime(t.ruid).exec.call(this, "FileReaderSync", "read", e, t);
                        return this.disconnectRuntime(), r
                    }
                    var i = t.getSource();
                    switch (e) {
                        case "readAsBinaryString":
                            return i;
                        case "readAsDataURL":
                            return "data:" + t.type + ";base64," + n.btoa(i);
                        case "readAsText":
                            for (var s = "", o = 0, u = i.length; u > o; o++) s += String.fromCharCode(i[o]);
                            return s
                    }
                }
                t.call(this), e.extend(this, {
                    uid: e.guid("uid_"),
                    readAsBinaryString: function(e) {
                        return r.call(this, "readAsBinaryString", e)
                    },
                    readAsDataURL: function(e) {
                        return r.call(this, "readAsDataURL", e)
                    },
                    readAsText: function(e) {
                        return r.call(this, "readAsText", e)
                    }
                })
            }
        }), r(C, [p, a, b], function(e, t, n) {
            function r() {
                var e, r = [];
                t.extend(this, {
                    append: function(i, s) {
                        var o = this,
                            u = t.typeOf(s);
                        s instanceof n ? e = {
                            name: i,
                            value: s
                        } : "array" === u ? (i += "[]", t.each(s, function(e) {
                            o.append(i, e)
                        })) : "object" === u ? t.each(s, function(e, t) {
                            o.append(i + "[" + t + "]", e)
                        }) : "null" === u || "undefined" === u || "number" === u && isNaN(s) ? o.append(i, "false") : r.push({
                            name: i,
                            value: s.toString()
                        })
                    },
                    hasBlob: function() {
                        return !!this.getBlob()
                    },
                    getBlob: function() {
                        return e && e.value || null
                    },
                    getBlobName: function() {
                        return e && e.name || null
                    },
                    each: function(n) {
                        t.each(r, function(e) {
                            n(e.value, e.name)
                        }), e && n(e.value, e.name)
                    },
                    destroy: function() {
                        e = null, r = []
                    }
                })
            }
            return r
        }), r(k, [a, p, d, y, x, v, T, b, N, C, f, c], function(e, t, n, r, i, s, o, u, a, f, l, c) {
            function h() {
                this.uid = e.guid("uid_")
            }

            function p() {
                function n(e, t) {
                    return y.hasOwnProperty(e) ? 1 === arguments.length ? l.can("define_property") ? y[e] : g[e] : void(l.can("define_property") ? y[e] = t : g[e] = t) : void 0
                }

                function a(t) {
                    function r() {
                        F && (F.destroy(), F = null), u.dispatchEvent("loadend"), u = null
                    }

                    function i(i) {
                        F.bind("LoadStart", function(e) {
                            n("readyState", p.LOADING), u.dispatchEvent("readystatechange"), u.dispatchEvent(e), A && u.upload.dispatchEvent(e)
                        }), F.bind("Progress", function(e) {
                            n("readyState") !== p.LOADING && (n("readyState", p.LOADING), u.dispatchEvent("readystatechange")), u.dispatchEvent(e)
                        }), F.bind("UploadProgress", function(e) {
                            A && u.upload.dispatchEvent({
                                type: "progress",
                                lengthComputable: !1,
                                total: e.total,
                                loaded: e.loaded
                            })
                        }), F.bind("Load", function(t) {
                            n("readyState", p.DONE), n("status", Number(i.exec.call(F, "XMLHttpRequest", "getStatus") || 0)), n("statusText", d[n("status")] || ""), n("response", i.exec.call(F, "XMLHttpRequest", "getResponse", n("responseType"))), ~e.inArray(n("responseType"), ["text", ""]) ? n("responseText", n("response")) : "document" === n("responseType") && n("responseXML", n("response")), I = i.exec.call(F, "XMLHttpRequest", "getAllResponseHeaders"), u.dispatchEvent("readystatechange"), n("status") > 0 ? (A && u.upload.dispatchEvent(t), u.dispatchEvent(t)) : (M = !0, u.dispatchEvent("error")), r()
                        }), F.bind("Abort", function(e) {
                            u.dispatchEvent(e), r()
                        }), F.bind("Error", function(e) {
                            M = !0, n("readyState", p.DONE), u.dispatchEvent("readystatechange"), O = !0, u.dispatchEvent(e), r()
                        }), i.exec.call(F, "XMLHttpRequest", "send", {
                            url: w,
                            method: E,
                            async: b,
                            user: x,
                            password: T,
                            headers: S,
                            mimeType: C,
                            encoding: N,
                            responseType: u.responseType,
                            withCredentials: u.withCredentials,
                            options: j
                        }, t)
                    }
                    var u = this;
                    D = (new Date).getTime(), F = new o, "string" == typeof j.required_caps && (j.required_caps = s.parseCaps(j.required_caps)), j.required_caps = e.extend({}, j.required_caps, {
                        return_response_type: u.responseType
                    }), t instanceof f && (j.required_caps.send_multipart = !0), e.isEmptyObj(S) || (j.required_caps.send_custom_headers = !0), _ || (j.required_caps.do_cors = !0), j.ruid ? i(F.connectRuntime(j)) : (F.bind("RuntimeInit", function(e, t) {
                        i(t)
                    }), F.bind("RuntimeError", function(e, t) {
                        u.dispatchEvent("RuntimeError", t)
                    }), F.connectRuntime(j))
                }

                function m() {
                    n("responseText", ""), n("responseXML", null), n("response", null), n("status", 0), n("statusText", ""), D = P = null
                }
                var g = this,
                    y = {
                        timeout: 0,
                        readyState: p.UNSENT,
                        withCredentials: !1,
                        status: 0,
                        statusText: "",
                        responseType: "",
                        responseXML: null,
                        responseText: null,
                        response: null
                    },
                    b = !0,
                    w, E, S = {},
                    x, T, N = null,
                    C = null,
                    k = !1,
                    L = !1,
                    A = !1,
                    O = !1,
                    M = !1,
                    _ = !1,
                    D, P, H = null,
                    B = null,
                    j = {},
                    F, I = "",
                    q;
                e.extend(this, y, {
                    uid: e.guid("uid_"),
                    upload: new h,
                    open: function(s, o, u, a, f) {
                        var l;
                        if (!s || !o) throw new t.DOMException(t.DOMException.SYNTAX_ERR);
                        if (/[\u0100-\uffff]/.test(s) || r.utf8_encode(s) !== s) throw new t.DOMException(t.DOMException.SYNTAX_ERR);
                        if (~e.inArray(s.toUpperCase(), ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT", "TRACE", "TRACK"]) && (E = s.toUpperCase()), ~e.inArray(E, ["CONNECT", "TRACE", "TRACK"])) throw new t.DOMException(t.DOMException.SECURITY_ERR);
                        if (o = r.utf8_encode(o), l = i.parseUrl(o), _ = i.hasSameOrigin(l), w = i.resolveUrl(o), (a || f) && !_) throw new t.DOMException(t.DOMException.INVALID_ACCESS_ERR);
                        if (x = a || l.user, T = f || l.pass, b = u || !0, b === !1 && (n("timeout") || n("withCredentials") || "" !== n("responseType"))) throw new t.DOMException(t.DOMException.INVALID_ACCESS_ERR);
                        k = !b, L = !1, S = {}, m.call(this), n("readyState", p.OPENED), this.dispatchEvent("readystatechange")
                    },
                    setRequestHeader: function(i, s) {
                        var o = ["accept-charset", "accept-encoding", "access-control-request-headers", "access-control-request-method", "connection", "content-length", "cookie", "cookie2", "content-transfer-encoding", "date", "expect", "host", "keep-alive", "origin", "referer", "te", "trailer", "transfer-encoding", "upgrade", "user-agent", "via"];
                        if (n("readyState") !== p.OPENED || L) throw new t.DOMException(t.DOMException.INVALID_STATE_ERR);
                        if (/[\u0100-\uffff]/.test(i) || r.utf8_encode(i) !== i) throw new t.DOMException(t.DOMException.SYNTAX_ERR);
                        return i = e.trim(i).toLowerCase(), ~e.inArray(i, o) || /^(proxy\-|sec\-)/.test(i) ? !1 : (S[i] ? S[i] += ", " + s : S[i] = s, !0)
                    },
                    getAllResponseHeaders: function() {
                        return I || ""
                    },
                    getResponseHeader: function(t) {
                        return t = t.toLowerCase(), M || ~e.inArray(t, ["set-cookie", "set-cookie2"]) ? null : I && "" !== I && (q || (q = {}, e.each(I.split(/\r\n/), function(t) {
                            var n = t.split(/:\s+/);
                            2 === n.length && (n[0] = e.trim(n[0]), q[n[0].toLowerCase()] = {
                                header: n[0],
                                value: e.trim(n[1])
                            })
                        })), q.hasOwnProperty(t)) ? q[t].header + ": " + q[t].value : null
                    },
                    overrideMimeType: function(r) {
                        var i, s;
                        if (~e.inArray(n("readyState"), [p.LOADING, p.DONE])) throw new t.DOMException(t.DOMException.INVALID_STATE_ERR);
                        if (r = e.trim(r.toLowerCase()), /;/.test(r) && (i = r.match(/^([^;]+)(?:;\scharset\=)?(.*)$/)) && (r = i[1], i[2] && (s = i[2])), !c.mimes[r]) throw new t.DOMException(t.DOMException.SYNTAX_ERR);
                        H = r, B = s
                    },
                    send: function(n, i) {
                        if (j = "string" === e.typeOf(i) ? {
                                ruid: i
                            } : i ? i : {}, this.readyState !== p.OPENED || L) throw new t.DOMException(t.DOMException.INVALID_STATE_ERR);
                        if (n instanceof u) j.ruid = n.ruid, C = n.type || "application/octet-stream";
                        else if (n instanceof f) {
                            if (n.hasBlob()) {
                                var s = n.getBlob();
                                j.ruid = s.ruid, C = s.type || "application/octet-stream"
                            }
                        } else "string" == typeof n && (N = "UTF-8", C = "text/plain;charset=UTF-8", n = r.utf8_encode(n));
                        this.withCredentials || (this.withCredentials = j.required_caps && j.required_caps.send_browser_cookies && !_), A = !k && this.upload.hasEventListener(), M = !1, O = !n, k || (L = !0), a.call(this, n)
                    },
                    abort: function() {
                        if (M = !0, k = !1, ~e.inArray(n("readyState"), [p.UNSENT, p.OPENED, p.DONE])) n("readyState", p.UNSENT);
                        else {
                            if (n("readyState", p.DONE), L = !1, !F) throw new t.DOMException(t.DOMException.INVALID_STATE_ERR);
                            F.getRuntime().exec.call(F, "XMLHttpRequest", "abort", O), O = !0
                        }
                    },
                    destroy: function() {
                        F && ("function" === e.typeOf(F.destroy) && F.destroy(), F = null), this.unbindAll(), this.upload && (this.upload.unbindAll(), this.upload = null)
                    }
                }), this.handleEventProps(v.concat(["readystatechange"])), this.upload.handleEventProps(v)
            }
            var d = {
                100: "Continue",
                101: "Switching Protocols",
                102: "Processing",
                200: "OK",
                201: "Created",
                202: "Accepted",
                203: "Non-Authoritative Information",
                204: "No Content",
                205: "Reset Content",
                206: "Partial Content",
                207: "Multi-Status",
                226: "IM Used",
                300: "Multiple Choices",
                301: "Moved Permanently",
                302: "Found",
                303: "See Other",
                304: "Not Modified",
                305: "Use Proxy",
                306: "Reserved",
                307: "Temporary Redirect",
                400: "Bad Request",
                401: "Unauthorized",
                402: "Payment Required",
                403: "Forbidden",
                404: "Not Found",
                405: "Method Not Allowed",
                406: "Not Acceptable",
                407: "Proxy Authentication Required",
                408: "Request Timeout",
                409: "Conflict",
                410: "Gone",
                411: "Length Required",
                412: "Precondition Failed",
                413: "Request Entity Too Large",
                414: "Request-URI Too Long",
                415: "Unsupported Media Type",
                416: "Requested Range Not Satisfiable",
                417: "Expectation Failed",
                422: "Unprocessable Entity",
                423: "Locked",
                424: "Failed Dependency",
                426: "Upgrade Required",
                500: "Internal Server Error",
                501: "Not Implemented",
                502: "Bad Gateway",
                503: "Service Unavailable",
                504: "Gateway Timeout",
                505: "HTTP Version Not Supported",
                506: "Variant Also Negotiates",
                507: "Insufficient Storage",
                510: "Not Extended"
            };
            h.prototype = n.instance;
            var v = ["loadstart", "progress", "abort", "error", "load", "timeout", "loadend"],
                m = 1,
                g = 2;
            return p.UNSENT = 0, p.OPENED = 1, p.HEADERS_RECEIVED = 2, p.LOADING = 3, p.DONE = 4, p.prototype = n.instance, p
        }), r(L, [a, y, m, d], function(e, t, n, r) {
            function i() {
                function r() {
                    l = c = 0, f = this.result = null
                }

                function s(t, n) {
                    var r = this;
                    a = n, r.bind("TransportingProgress", function(t) {
                        c = t.loaded, l > c && -1 === e.inArray(r.state, [i.IDLE, i.DONE]) && o.call(r)
                    }, 999), r.bind("TransportingComplete", function() {
                        c = l, r.state = i.DONE, f = null, r.result = a.exec.call(r, "Transporter", "getAsBlob", t || "")
                    }, 999), r.state = i.BUSY, r.trigger("TransportingStarted"), o.call(r)
                }

                function o() {
                    var e = this,
                        n, r = l - c;
                    h > r && (h = r), n = t.btoa(f.substr(c, h)), a.exec.call(e, "Transporter", "receive", n, l)
                }
                var u, a, f, l, c, h;
                n.call(this), e.extend(this, {
                    uid: e.guid("uid_"),
                    state: i.IDLE,
                    result: null,
                    transport: function(t, n, i) {
                        var o = this;
                        if (i = e.extend({
                                chunk_size: 204798
                            }, i), (u = i.chunk_size % 3) && (i.chunk_size += 3 - u), h = i.chunk_size, r.call(this), f = t, l = t.length, "string" === e.typeOf(i) || i.ruid) s.call(o, n, this.connectRuntime(i));
                        else {
                            var a = function(e, t) {
                                o.unbind("RuntimeInit", a), s.call(o, n, t)
                            };
                            this.bind("RuntimeInit", a), this.connectRuntime(i)
                        }
                    },
                    abort: function() {
                        var e = this;
                        e.state = i.IDLE, a && (a.exec.call(e, "Transporter", "clear"), e.trigger("TransportingAborted")), r.call(e)
                    },
                    destroy: function() {
                        this.unbindAll(), a = null, this.disconnectRuntime(), r.call(this)
                    }
                })
            }
            return i.IDLE = 0, i.BUSY = 1, i.DONE = 2, i.prototype = r.instance, i
        }), r(A, [a, h, p, N, k, v, m, L, f, d, b, w, y], function(e, t, n, r, i, s, o, u, a, f, l, c, h) {
            function p() {
                function r(e) {
                    e || (e = this.exec("Image", "getInfo")), this.size = e.size, this.width = e.width, this.height = e.height, this.type = e.type, this.meta = e.meta, "" === this.name && (this.name = e.name)
                }

                function f(t) {
                    var r = e.typeOf(t);
                    try {
                        if (t instanceof p) {
                            if (!t.size) throw new n.DOMException(n.DOMException.INVALID_STATE_ERR);
                            v.apply(this, arguments)
                        } else if (t instanceof l) {
                            if (!~e.inArray(t.type, ["image/jpeg", "image/png"])) throw new n.ImageError(n.ImageError.WRONG_FORMAT);
                            m.apply(this, arguments)
                        } else if (-1 !== e.inArray(r, ["blob", "file"])) f.call(this, new c(null, t), arguments[1]);
                        else if ("string" === r) "data:" === t.substr(0, 5) ? f.call(this, new l(null, {
                            data: t
                        }), arguments[1]) : g.apply(this, arguments);
                        else {
                            if ("node" !== r || "img" !== t.nodeName.toLowerCase()) throw new n.DOMException(n.DOMException.TYPE_MISMATCH_ERR);
                            f.call(this, t.src, arguments[1])
                        }
                    } catch (i) {
                        this.trigger("error", i.code)
                    }
                }

                function v(t, n) {
                    var r = this.connectRuntime(t.ruid);
                    this.ruid = r.uid, r.exec.call(this, "Image", "loadFromImage", t, "undefined" === e.typeOf(n) ? !0 : n)
                }

                function m(t, n) {
                    function r(e) {
                        i.ruid = e.uid, e.exec.call(i, "Image", "loadFromBlob", t)
                    }
                    var i = this;
                    i.name = t.name || "", t.isDetached() ? (this.bind("RuntimeInit", function(e, t) {
                        r(t)
                    }), n && "string" == typeof n.required_caps && (n.required_caps = s.parseCaps(n.required_caps)), this.connectRuntime(e.extend({
                        required_caps: {
                            access_image_binary: !0,
                            resize_image: !0
                        }
                    }, n))) : r(this.connectRuntime(t.ruid))
                }

                function g(e, t) {
                    var n = this,
                        r;
                    r = new i, r.open("get", e), r.responseType = "blob", r.onprogress = function(e) {
                        n.trigger(e)
                    }, r.onload = function() {
                        m.call(n, r.response, !0)
                    }, r.onerror = function(e) {
                        n.trigger(e)
                    }, r.onloadend = function() {
                        r.destroy()
                    }, r.bind("RuntimeError", function(e, t) {
                        n.trigger("RuntimeError", t)
                    }), r.send(null, t)
                }
                o.call(this), e.extend(this, {
                    uid: e.guid("uid_"),
                    ruid: null,
                    name: "",
                    size: 0,
                    width: 0,
                    height: 0,
                    type: "",
                    meta: {},
                    clone: function() {
                        this.load.apply(this, arguments)
                    },
                    load: function() {
                        f.apply(this, arguments)
                    },
                    downsize: function(t) {
                        var r = {
                            width: this.width,
                            height: this.height,
                            type: this.type || "image/jpeg",
                            quality: 90,
                            crop: !1,
                            preserveHeaders: !0,
                            resample: !1
                        };
                        t = "object" == typeof t ? e.extend(r, t) : e.extend(r, {
                            width: arguments[0],
                            height: arguments[1],
                            crop: arguments[2],
                            preserveHeaders: arguments[3]
                        });
                        try {
                            if (!this.size) throw new n.DOMException(n.DOMException.INVALID_STATE_ERR);
                            if (this.width > p.MAX_RESIZE_WIDTH || this.height > p.MAX_RESIZE_HEIGHT) throw new n.ImageError(n.ImageError.MAX_RESOLUTION_ERR);
                            this.exec("Image", "downsize", t.width, t.height, t.crop, t.preserveHeaders)
                        } catch (i) {
                            this.trigger("error", i.code)
                        }
                    },
                    crop: function(e, t, n) {
                        this.downsize(e, t, !0, n)
                    },
                    getAsCanvas: function() {
                        if (!a.can("create_canvas")) throw new n.RuntimeError(n.RuntimeError.NOT_SUPPORTED_ERR);
                        var e = this.connectRuntime(this.ruid);
                        return e.exec.call(this, "Image", "getAsCanvas")
                    },
                    getAsBlob: function(e, t) {
                        if (!this.size) throw new n.DOMException(n.DOMException.INVALID_STATE_ERR);
                        return this.exec("Image", "getAsBlob", e || "image/jpeg", t || 90)
                    },
                    getAsDataURL: function(e, t) {
                        if (!this.size) throw new n.DOMException(n.DOMException.INVALID_STATE_ERR);
                        return this.exec("Image", "getAsDataURL", e || "image/jpeg", t || 90)
                    },
                    getAsBinaryString: function(e, t) {
                        var n = this.getAsDataURL(e, t);
                        return h.atob(n.substring(n.indexOf("base64,") + 7))
                    },
                    embed: function(r, i) {
                        function s(t, i) {
                            var s = this;
                            if (a.can("create_canvas")) {
                                var l = s.getAsCanvas();
                                if (l) return r.appendChild(l), l = null, s.destroy(), void o.trigger("embedded")
                            }
                            var c = s.getAsDataURL(t, i);
                            if (!c) throw new n.ImageError(n.ImageError.WRONG_FORMAT);
                            if (a.can("use_data_uri_of", c.length)) r.innerHTML = '<img src="' + c + '" width="' + s.width + '" height="' + s.height + '" />', s.destroy(), o.trigger("embedded");
                            else {
                                var p = new u;
                                p.bind("TransportingComplete", function() {
                                    f = o.connectRuntime(this.result.ruid), o.bind("Embedded", function() {
                                        e.extend(f.getShimContainer().style, {
                                            top: "0px",
                                            left: "0px",
                                            width: s.width + "px",
                                            height: s.height + "px"
                                        }), f = null
                                    }, 999), f.exec.call(o, "ImageView", "display", this.result.uid, width, height), s.destroy()
                                }), p.transport(h.atob(c.substring(c.indexOf("base64,") + 7)), t, {
                                    required_caps: {
                                        display_media: !0
                                    },
                                    runtime_order: "flash,silverlight",
                                    container: r
                                })
                            }
                        }
                        var o = this,
                            f;
                        i = e.extend({
                            width: this.width,
                            height: this.height,
                            type: this.type || "image/jpeg",
                            quality: 90
                        }, i || {});
                        try {
                            if (!(r = t.get(r))) throw new n.DOMException(n.DOMException.INVALID_NODE_TYPE_ERR);
                            if (!this.size) throw new n.DOMException(n.DOMException.INVALID_STATE_ERR);
                            this.width > p.MAX_RESIZE_WIDTH || this.height > p.MAX_RESIZE_HEIGHT;
                            var l = new p;
                            return l.bind("Resize", function() {
                                s.call(this, i.type, i.quality)
                            }), l.bind("Load", function() {
                                l.downsize(i)
                            }), this.meta.thumb && this.meta.thumb.width >= i.width && this.meta.thumb.height >= i.height ? l.load(this.meta.thumb.data) : l.clone(this, !1), l
                        } catch (c) {
                            this.trigger("error", c.code)
                        }
                    },
                    destroy: function() {
                        this.ruid && (this.getRuntime().exec.call(this, "Image", "destroy"), this.disconnectRuntime()), this.unbindAll()
                    }
                }), this.handleEventProps(d), this.bind("Load Resize", function() {
                    r.call(this)
                }, 999)
            }
            var d = ["progress", "load", "error", "resize", "embedded"];
            return p.MAX_RESIZE_WIDTH = 8192, p.MAX_RESIZE_HEIGHT = 8192, p.prototype = f.instance, p
        }), r(O, [a, p, v, f], function(e, t, n, r) {
            function i(t) {
                var i = this,
                    u = n.capTest,
                    a = n.capTrue,
                    f = e.extend({
                        access_binary: u(window.FileReader || window.File && window.File.getAsDataURL),
                        access_image_binary: function() {
                            return i.can("access_binary") && !!o.Image
                        },
                        display_media: u(r.can("create_canvas") || r.can("use_data_uri_over32kb")),
                        do_cors: u(window.XMLHttpRequest && "withCredentials" in new XMLHttpRequest),
                        drag_and_drop: u(function() {
                            var e = document.createElement("div");
                            return ("draggable" in e || "ondragstart" in e && "ondrop" in e) && ("IE" !== r.browser || r.verComp(r.version, 9, ">"))
                        }()),
                        filter_by_extension: u(function() {
                            return "Chrome" === r.browser && r.verComp(r.version, 28, ">=") || "IE" === r.browser && r.verComp(r.version, 10, ">=") || "Safari" === r.browser && r.verComp(r.version, 7, ">=")
                        }()),
                        return_response_headers: a,
                        return_response_type: function(e) {
                            return "json" === e && window.JSON ? !0 : r.can("return_response_type", e)
                        },
                        return_status_code: a,
                        report_upload_progress: u(window.XMLHttpRequest && (new XMLHttpRequest).upload),
                        resize_image: function() {
                            return i.can("access_binary") && r.can("create_canvas")
                        },
                        select_file: function() {
                            return r.can("use_fileinput") && window.File
                        },
                        select_folder: function() {
                            return i.can("select_file") && "Chrome" === r.browser && r.verComp(r.version, 21, ">=")
                        },
                        select_multiple: function() {
                            return !(!i.can("select_file") || "Safari" === r.browser && "Windows" === r.os || "iOS" === r.os && r.verComp(r.osVersion, "7.0.0", ">") && r.verComp(r.osVersion, "8.0.0", "<"))
                        },
                        send_binary_string: u(window.XMLHttpRequest && ((new XMLHttpRequest).sendAsBinary || window.Uint8Array && window.ArrayBuffer)),
                        send_custom_headers: u(window.XMLHttpRequest),
                        send_multipart: function() {
                            return !!(window.XMLHttpRequest && (new XMLHttpRequest).upload && window.FormData) || i.can("send_binary_string")
                        },
                        slice_blob: u(window.File && (File.prototype.mozSlice || File.prototype.webkitSlice || File.prototype.slice)),
                        stream_upload: function() {
                            return i.can("slice_blob") && i.can("send_multipart")
                        },
                        summon_file_dialog: function() {
                            return i.can("select_file") && ("Firefox" === r.browser && r.verComp(r.version, 4, ">=") || "Opera" === r.browser && r.verComp(r.version, 12, ">=") || "IE" === r.browser && r.verComp(r.version, 10, ">=") || !!~e.inArray(r.browser, ["Chrome", "Safari"]))
                        },
                        upload_filesize: a
                    }, arguments[2]);
                n.call(this, t, arguments[1] || s, f), e.extend(this, {
                    init: function() {
                        this.trigger("Init")
                    },
                    destroy: function(e) {
                        return function() {
                            e.call(i), e = i = null
                        }
                    }(this.destroy)
                }), e.extend(this.getShim(), o)
            }
            var s = "html5",
                o = {};
            return n.addConstructor(s, i), o
        }), r(M, [a], function(e) {
            function t() {
                this.returnValue = !1
            }

            function n() {
                this.cancelBubble = !0
            }
            var r = {},
                i = "moxie_" + e.guid(),
                s = function(s, o, u, a) {
                    var f, l;
                    o = o.toLowerCase(), s.addEventListener ? (f = u, s.addEventListener(o, f, !1)) : s.attachEvent && (f = function() {
                        var e = window.event;
                        e.target || (e.target = e.srcElement), e.preventDefault = t, e.stopPropagation = n, u(e)
                    }, s.attachEvent("on" + o, f)), s[i] || (s[i] = e.guid()), r.hasOwnProperty(s[i]) || (r[s[i]] = {}), l = r[s[i]], l.hasOwnProperty(o) || (l[o] = []), l[o].push({
                        func: f,
                        orig: u,
                        key: a
                    })
                },
                o = function(t, n, s) {
                    var o, u;
                    if (n = n.toLowerCase(), t[i] && r[t[i]] && r[t[i]][n]) {
                        o = r[t[i]][n];
                        for (var a = o.length - 1; a >= 0 && (o[a].orig !== s && o[a].key !== s || (t.removeEventListener ? t.removeEventListener(n, o[a].func, !1) : t.detachEvent && t.detachEvent("on" + n, o[a].func), o[a].orig = null, o[a].func = null, o.splice(a, 1), s === u)); a--);
                        if (o.length || delete r[t[i]][n], e.isEmptyObj(r[t[i]])) {
                            delete r[t[i]];
                            try {
                                delete t[i]
                            } catch (f) {
                                t[i] = u
                            }
                        }
                    }
                },
                u = function(t, n) {
                    t && t[i] && e.each(r[t[i]], function(e, r) {
                        o(t, r, n)
                    })
                };
            return {
                addEvent: s,
                removeEvent: o,
                removeAllEvents: u
            }
        }), r(_, [O, w, a, h, M, c, f], function(e, t, n, r, i, s, o) {
            function u() {
                var e;
                n.extend(this, {
                    init: function(u) {
                        var a = this,
                            f = a.getRuntime(),
                            l, c, h, p, d, v;
                        e = u, h = e.accept.mimes || s.extList2mimes(e.accept, f.can("filter_by_extension")), c = f.getShimContainer(), c.innerHTML = '<input id="' + f.uid + '" type="file" style="font-size:999px;opacity:0;"' + (e.multiple && f.can("select_multiple") ? "multiple" : "") + (e.directory && f.can("select_folder") ? "webkitdirectory directory" : "") + (h ? ' accept="' + h.join(",") + '"' : "") + " />", l = r.get(f.uid), n.extend(l.style, {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%"
                        }), p = r.get(e.browse_button), f.can("summon_file_dialog") && ("static" === r.getStyle(p, "position") && (p.style.position = "relative"), d = parseInt(r.getStyle(p, "z-index"), 10) || 1, p.style.zIndex = d, c.style.zIndex = d - 1, i.addEvent(p, "click", function(e) {
                            var t = r.get(f.uid);
                            t && !t.disabled && t.click(), e.preventDefault()
                        }, a.uid)), v = f.can("summon_file_dialog") ? p : c, i.addEvent(v, "mouseover", function() {
                            a.trigger("mouseenter")
                        }, a.uid), i.addEvent(v, "mouseout", function() {
                            a.trigger("mouseleave")
                        }, a.uid), i.addEvent(v, "mousedown", function() {
                            a.trigger("mousedown")
                        }, a.uid), i.addEvent(r.get(e.container), "mouseup", function() {
                            a.trigger("mouseup")
                        }, a.uid), l.onchange = function m(r) {
                            if (a.files = [], n.each(this.files, function(n) {
                                    var r = "";
                                    return e.directory && "." == n.name ? !0 : (n.webkitRelativePath && (r = "/" + n.webkitRelativePath.replace(/^\//, "")), n = new t(f.uid, n), n.relativePath = r, void a.files.push(n))
                                }), "IE" !== o.browser && "IEMobile" !== o.browser) this.value = "";
                            else {
                                var i = this.cloneNode(!0);
                                this.parentNode.replaceChild(i, this), i.onchange = m
                            }
                            a.files.length && a.trigger("change")
                        }, a.trigger({
                            type: "ready",
                            async: !0
                        }), c = null
                    },
                    disable: function(e) {
                        var t = this.getRuntime(),
                            n;
                        (n = r.get(t.uid)) && (n.disabled = !!e)
                    },
                    destroy: function() {
                        var t = this.getRuntime(),
                            n = t.getShim(),
                            s = t.getShimContainer();
                        i.removeAllEvents(s, this.uid), i.removeAllEvents(e && r.get(e.container), this.uid), i.removeAllEvents(e && r.get(e.browse_button), this.uid), s && (s.innerHTML = ""), n.removeInstance(this.uid), e = s = n = null
                    }
                })
            }
            return e.FileInput = u
        }), r(D, [O, b], function(e, t) {
            function n() {
                function e(e, t, n) {
                    var r;
                    if (!window.File.prototype.slice) return (r = window.File.prototype.webkitSlice || window.File.prototype.mozSlice) ? r.call(e, t, n) : null;
                    try {
                        return e.slice(), e.slice(t, n)
                    } catch (i) {
                        return e.slice(t, n - t)
                    }
                }
                this.slice = function() {
                    return new t(this.getRuntime().uid, e.apply(this, arguments))
                }
            }
            return e.Blob = n
        }), r(P, [O, w, a, h, M, c], function(e, t, n, r, i, s) {
            function o() {
                function e(e) {
                    if (!e.dataTransfer || !e.dataTransfer.types) return !1;
                    var t = n.toArray(e.dataTransfer.types || []);
                    return -1 !== n.inArray("Files", t) || -1 !== n.inArray("public.file-url", t) || -1 !== n.inArray("application/x-moz-file", t)
                }

                function o(e, n) {
                    if (a(e)) {
                        var r = new t(m, e);
                        r.relativePath = n || "", p.push(r)
                    }
                }

                function u(e) {
                    for (var t = [], r = 0; r < e.length; r++)[].push.apply(t, e[r].extensions.split(/\s*,\s*/));
                    return -1 === n.inArray("*", t) ? t : []
                }

                function a(e) {
                    if (!d.length) return !0;
                    var t = s.getFileExtension(e.name);
                    return !t || -1 !== n.inArray(t, d)
                }

                function f(e, t) {
                    var r = [];
                    n.each(e, function(e) {
                        var t = e.webkitGetAsEntry();
                        t && (t.isFile ? o(e.getAsFile(), t.fullPath) : r.push(t))
                    }), r.length ? l(r, t) : t()
                }

                function l(e, t) {
                    var r = [];
                    n.each(e, function(e) {
                        r.push(function(t) {
                            c(e, t)
                        })
                    }), n.inSeries(r, function() {
                        t()
                    })
                }

                function c(e, t) {
                    e.isFile ? e.file(function(n) {
                        o(n, e.fullPath), t()
                    }, function() {
                        t()
                    }) : e.isDirectory ? h(e, t) : t()
                }

                function h(e, t) {
                    function n(e) {
                        i.readEntries(function(t) {
                            t.length ? ([].push.apply(r, t), n(e)) : e()
                        }, e)
                    }
                    var r = [],
                        i = e.createReader();
                    n(function() {
                        l(r, t)
                    })
                }
                var p = [],
                    d = [],
                    v, m;
                n.extend(this, {
                    init: function(t) {
                        var r = this,
                            s;
                        v = t, m = r.ruid, d = u(v.accept), s = v.container, i.addEvent(s, "dragover", function(t) {
                            e(t) && (t.preventDefault(), t.dataTransfer.dropEffect = "copy")
                        }, r.uid), i.addEvent(s, "drop", function(t) {
                            e(t) && (t.preventDefault(), p = [], t.dataTransfer.items && t.dataTransfer.items[0].webkitGetAsEntry ? f(t.dataTransfer.items, function() {
                                r.files = p, r.trigger("drop")
                            }) : (n.each(t.dataTransfer.files, function(e) {
                                o(e)
                            }), r.files = p, r.trigger("drop")))
                        }, r.uid), i.addEvent(s, "dragenter", function(e) {
                            r.trigger("dragenter")
                        }, r.uid), i.addEvent(s, "dragleave", function(e) {
                            r.trigger("dragleave")
                        }, r.uid)
                    },
                    destroy: function() {
                        i.removeAllEvents(v && r.get(v.container), this.uid), m = p = d = v = null
                    }
                })
            }
            return e.FileDrop = o
        }), r(H, [O, y, a], function(e, t, n) {
            function r() {
                function e(e) {
                    return t.atob(e.substring(e.indexOf("base64,") + 7))
                }
                var r, i = !1;
                n.extend(this, {
                    read: function(t, s) {
                        var o = this;
                        o.result = "", r = new window.FileReader, r.addEventListener("progress", function(e) {
                            o.trigger(e)
                        }), r.addEventListener("load", function(t) {
                            o.result = i ? e(r.result) : r.result, o.trigger(t)
                        }), r.addEventListener("error", function(e) {
                            o.trigger(e, r.error)
                        }), r.addEventListener("loadend", function(e) {
                            r = null, o.trigger(e)
                        }), "function" === n.typeOf(r[t]) ? (i = !1, r[t](s.getSource())) : "readAsBinaryString" === t && (i = !0, r.readAsDataURL(s.getSource()))
                    },
                    abort: function() {
                        r && r.abort()
                    },
                    destroy: function() {
                        r = null
                    }
                })
            }
            return e.FileReader = r
        }), r(B, [O, a, c, x, w, b, C, p, f], function(e, t, n, r, i, s, o, u, a) {
            function f() {
                function e(e, t) {
                    var n = this,
                        r, i;
                    r = t.getBlob().getSource(), i = new window.FileReader, i.onload = function() {
                        t.append(t.getBlobName(), new s(null, {
                            type: r.type,
                            data: i.result
                        })), h.send.call(n, e, t)
                    }, i.readAsBinaryString(r)
                }

                function f() {
                    return !window.XMLHttpRequest || "IE" === a.browser && a.verComp(a.version, 8, "<") ? function() {
                        for (var e = ["Msxml2.XMLHTTP.6.0", "Microsoft.XMLHTTP"], t = 0; t < e.length; t++) try {
                            return new ActiveXObject(e[t])
                        } catch (n) {}
                    }() : new window.XMLHttpRequest
                }

                function l(e) {
                    var t = e.responseXML,
                        n = e.responseText;
                    return "IE" === a.browser && n && t && !t.documentElement && /[^\/]+\/[^\+]+\+xml/.test(e.getResponseHeader("Content-Type")) && (t = new window.ActiveXObject("Microsoft.XMLDOM"), t.async = !1, t.validateOnParse = !1, t.loadXML(n)), t && ("IE" === a.browser && 0 !== t.parseError || !t.documentElement || "parsererror" === t.documentElement.tagName) ? null : t
                }

                function c(e) {
                    var t = "----moxieboundary" + (new Date).getTime(),
                        n = "--",
                        r = "\r\n",
                        i = "",
                        o = this.getRuntime();
                    if (!o.can("send_binary_string")) throw new u.RuntimeError(u.RuntimeError.NOT_SUPPORTED_ERR);
                    return p.setRequestHeader("Content-Type", "multipart/form-data; boundary=" + t), e.each(function(e, o) {
                        i += e instanceof s ? n + t + r + 'Content-Disposition: form-data; name="' + o + '"; filename="' + unescape(encodeURIComponent(e.name || "blob")) + '"' + r + "Content-Type: " + (e.type || "application/octet-stream") + r + r + e.getSource() + r : n + t + r + 'Content-Disposition: form-data; name="' + o + '"' + r + r + unescape(encodeURIComponent(e)) + r
                    }), i += n + t + n + r
                }
                var h = this,
                    p, d;
                t.extend(this, {
                    send: function(n, i) {
                        var u = this,
                            l = "Mozilla" === a.browser && a.verComp(a.version, 4, ">=") && a.verComp(a.version, 7, "<"),
                            h = "Android Browser" === a.browser,
                            v = !1;
                        if (d = n.url.replace(/^.+?\/([\w\-\.]+)$/, "$1").toLowerCase(), p = f(), p.open(n.method, n.url, n.async, n.user, n.password), i instanceof s) i.isDetached() && (v = !0), i = i.getSource();
                        else if (i instanceof o) {
                            if (i.hasBlob())
                                if (i.getBlob().isDetached()) i = c.call(u, i), v = !0;
                                else if ((l || h) && "blob" === t.typeOf(i.getBlob().getSource()) && window.FileReader) return void e.call(u, n, i);
                            if (i instanceof o) {
                                var m = new window.FormData;
                                i.each(function(e, t) {
                                    e instanceof s ? m.append(t, e.getSource()) : m.append(t, e)
                                }), i = m
                            }
                        }
                        p.upload ? (n.withCredentials && (p.withCredentials = !0), p.addEventListener("load", function(e) {
                            u.trigger(e)
                        }), p.addEventListener("error", function(e) {
                            u.trigger(e)
                        }), p.addEventListener("progress", function(e) {
                            u.trigger(e)
                        }), p.upload.addEventListener("progress", function(e) {
                            u.trigger({
                                type: "UploadProgress",
                                loaded: e.loaded,
                                total: e.total
                            })
                        })) : p.onreadystatechange = function() {
                            switch (p.readyState) {
                                case 1:
                                    break;
                                case 2:
                                    break;
                                case 3:
                                    var t, i;
                                    try {
                                        r.hasSameOrigin(n.url) && (t = p.getResponseHeader("Content-Length") || 0), p.responseText && (i = p.responseText.length)
                                    } catch (s) {
                                        t = i = 0
                                    }
                                    u.trigger({
                                        type: "progress",
                                        lengthComputable: !!t,
                                        total: parseInt(t, 10),
                                        loaded: i
                                    });
                                    break;
                                case 4:
                                    p.onreadystatechange = function() {}, u.trigger(0 === p.status ? "error" : "load")
                            }
                        }, t.isEmptyObj(n.headers) || t.each(n.headers, function(e, t) {
                            p.setRequestHeader(t, e)
                        }), "" !== n.responseType && "responseType" in p && ("json" !== n.responseType || a.can("return_response_type", "json") ? p.responseType = n.responseType : p.responseType = "text"), v ? p.sendAsBinary ? p.sendAsBinary(i) : ! function() {
                            for (var e = new Uint8Array(i.length), t = 0; t < i.length; t++) e[t] = 255 & i.charCodeAt(t);
                            p.send(e.buffer)
                        }() : p.send(i), u.trigger("loadstart")
                    },
                    getStatus: function() {
                        try {
                            if (p) return p.status
                        } catch (e) {}
                        return 0
                    },
                    getResponse: function(e) {
                        var t = this.getRuntime();
                        try {
                            switch (e) {
                                case "blob":
                                    var r = new i(t.uid, p.response),
                                        s = p.getResponseHeader("Content-Disposition");
                                    if (s) {
                                        var o = s.match(/filename=([\'\"'])([^\1]+)\1/);
                                        o && (d = o[2])
                                    }
                                    return r.name = d, r.type || (r.type = n.getFileMime(d)), r;
                                case "json":
                                    return a.can("return_response_type", "json") ? p.response : 200 === p.status && window.JSON ? JSON.parse(p.responseText) : null;
                                case "document":
                                    return l(p);
                                default:
                                    return "" !== p.responseText ? p.responseText : null
                            }
                        } catch (u) {
                            return null
                        }
                    },
                    getAllResponseHeaders: function() {
                        try {
                            return p.getAllResponseHeaders()
                        } catch (e) {}
                        return ""
                    },
                    abort: function() {
                        p && p.abort()
                    },
                    destroy: function() {
                        h = d = null
                    }
                })
            }
            return e.XMLHttpRequest = f
        }), r(j, [a], function(e) {
            function t(e) {
                e instanceof ArrayBuffer ? n.apply(this, arguments) : r.apply(this, arguments)
            }

            function n(t) {
                var n = new DataView(t);
                e.extend(this, {
                    readByteAt: function(e) {
                        return n.getUint8(e)
                    },
                    writeByteAt: function(e, t) {
                        n.setUint8(e, t)
                    },
                    SEGMENT: function(e, r, i) {
                        switch (arguments.length) {
                            case 2:
                                return t.slice(e, e + r);
                            case 1:
                                return t.slice(e);
                            case 3:
                                if (null === i && (i = new ArrayBuffer), i instanceof ArrayBuffer) {
                                    var s = new Uint8Array(this.length() - r + i.byteLength);
                                    e > 0 && s.set(new Uint8Array(t.slice(0, e)), 0), s.set(new Uint8Array(i), e), s.set(new Uint8Array(t.slice(e + r)), e + i.byteLength), this.clear(), t = s.buffer, n = new DataView(t);
                                    break
                                };
                            default:
                                return t
                        }
                    },
                    length: function() {
                        return t ? t.byteLength : 0
                    },
                    clear: function() {
                        n = t = null
                    }
                })
            }

            function r(t) {
                function n(e, n, r) {
                    r = 3 === arguments.length ? r : t.length - n - 1, t = t.substr(0, n) + e + t.substr(r + n)
                }
                e.extend(this, {
                    readByteAt: function(e) {
                        return t.charCodeAt(e)
                    },
                    writeByteAt: function(e, t) {
                        n(String.fromCharCode(t), e, 1)
                    },
                    SEGMENT: function(e, r, i) {
                        switch (arguments.length) {
                            case 1:
                                return t.substr(e);
                            case 2:
                                return t.substr(e, r);
                            case 3:
                                n(null !== i ? i : "", e, r);
                                break;
                            default:
                                return t
                        }
                    },
                    length: function() {
                        return t ? t.length : 0
                    },
                    clear: function() {
                        t = null
                    }
                })
            }
            return e.extend(t.prototype, {
                littleEndian: !1,
                read: function(e, t) {
                    var n, r, i;
                    if (e + t > this.length()) throw new Error("You are trying to read outside the source boundaries.");
                    for (r = this.littleEndian ? 0 : -8 * (t - 1), i = 0, n = 0; t > i; i++) n |= this.readByteAt(e + i) << Math.abs(r + 8 * i);
                    return n
                },
                write: function(e, t, n) {
                    var r, i, s = "";
                    if (e > this.length()) throw new Error("You are trying to write outside the source boundaries.");
                    for (r = this.littleEndian ? 0 : -8 * (n - 1), i = 0; n > i; i++) this.writeByteAt(e + i, t >> Math.abs(r + 8 * i) & 255)
                },
                BYTE: function(e) {
                    return this.read(e, 1)
                },
                SHORT: function(e) {
                    return this.read(e, 2)
                },
                LONG: function(e) {
                    return this.read(e, 4)
                },
                SLONG: function(e) {
                    var t = this.read(e, 4);
                    return t > 2147483647 ? t - 4294967296 : t
                },
                CHAR: function(e) {
                    return String.fromCharCode(this.read(e, 1))
                },
                STRING: function(e, t) {
                    return this.asArray("CHAR", e, t).join("")
                },
                asArray: function(e, t, n) {
                    for (var r = [], i = 0; n > i; i++) r[i] = this[e](t + i);
                    return r
                }
            }), t
        }), r(F, [j, p], function(e, t) {
            return function n(r) {
                var i = [],
                    s, o, u, a = 0;
                if (s = new e(r), 65496 !== s.SHORT(0)) throw s.clear(), new t.ImageError(t.ImageError.WRONG_FORMAT);
                for (o = 2; o <= s.length();)
                    if (u = s.SHORT(o), u >= 65488 && 65495 >= u) o += 2;
                    else {
                        if (65498 === u || 65497 === u) break;
                        a = s.SHORT(o + 2) + 2, u >= 65505 && 65519 >= u && i.push({
                            hex: u,
                            name: "APP" + (15 & u),
                            start: o,
                            length: a,
                            segment: s.SEGMENT(o, a)
                        }), o += a
                    }
                return s.clear(), {
                    headers: i,
                    restore: function(t) {
                        var n, r, s;
                        for (s = new e(t), o = 65504 == s.SHORT(2) ? 4 + s.SHORT(4) : 2, r = 0, n = i.length; n > r; r++) s.SEGMENT(o, 0, i[r].segment), o += i[r].length;
                        return t = s.SEGMENT(), s.clear(), t
                    },
                    strip: function(t) {
                        var r, i, s, o;
                        for (s = new n(t), i = s.headers, s.purge(), r = new e(t), o = i.length; o--;) r.SEGMENT(i[o].start, i[o].length, "");
                        return t = r.SEGMENT(), r.clear(), t
                    },
                    get: function(e) {
                        for (var t = [], n = 0, r = i.length; r > n; n++) i[n].name === e.toUpperCase() && t.push(i[n].segment);
                        return t
                    },
                    set: function(e, t) {
                        var n = [],
                            r, s, o;
                        for ("string" == typeof t ? n.push(t) : n = t, r = s = 0, o = i.length; o > r && (i[r].name === e.toUpperCase() && (i[r].segment = n[s], i[r].length = n[s].length, s++), !(s >= n.length)); r++);
                    },
                    purge: function() {
                        this.headers = i = []
                    }
                }
            }
        }), r(I, [a, j, p], function(e, n, r) {
            function i(s) {
                function o(n, i) {
                    var s = this,
                        o, u, a, f, h, p, d, v, m = [],
                        g = {},
                        y = {
                            1: "BYTE",
                            7: "UNDEFINED",
                            2: "ASCII",
                            3: "SHORT",
                            4: "LONG",
                            5: "RATIONAL",
                            9: "SLONG",
                            10: "SRATIONAL"
                        },
                        b = {
                            BYTE: 1,
                            UNDEFINED: 1,
                            ASCII: 1,
                            SHORT: 2,
                            LONG: 4,
                            RATIONAL: 8,
                            SLONG: 4,
                            SRATIONAL: 8
                        };
                    for (o = s.SHORT(n), u = 0; o > u; u++)
                        if (m = [], d = n + 2 + 12 * u, a = i[s.SHORT(d)], a !== t) {
                            if (f = y[s.SHORT(d += 2)], h = s.LONG(d += 2), p = b[f], !p) throw new r.ImageError(r.ImageError.INVALID_META_ERR);
                            if (d += 4, p * h > 4 && (d = s.LONG(d) + c.tiffHeader), d + p * h >= this.length()) throw new r.ImageError(r.ImageError.INVALID_META_ERR);
                            "ASCII" !== f ? (m = s.asArray(f, d, h), v = 1 == h ? m[0] : m, l.hasOwnProperty(a) && "object" != typeof v ? g[a] = l[a][v] : g[a] = v) : g[a] = e.trim(s.STRING(d, h).replace(/\0$/, ""))
                        }
                    return g
                }

                function u(e, t, n) {
                    var r, i, s, o = 0;
                    if ("string" == typeof t) {
                        var u = f[e.toLowerCase()];
                        for (var a in u)
                            if (u[a] === t) {
                                t = a;
                                break
                            }
                    }
                    r = c[e.toLowerCase() + "IFD"], i = this.SHORT(r);
                    for (var l = 0; i > l; l++)
                        if (s = r + 12 * l + 2, this.SHORT(s) == t) {
                            o = s + 8;
                            break
                        }
                    if (!o) return !1;
                    try {
                        this.write(o, n, 4)
                    } catch (h) {
                        return !1
                    }
                    return !0
                }
                var a, f, l, c, h, p;
                if (n.call(this, s), f = {
                        tiff: {
                            274: "Orientation",
                            270: "ImageDescription",
                            271: "Make",
                            272: "Model",
                            305: "Software",
                            34665: "ExifIFDPointer",
                            34853: "GPSInfoIFDPointer"
                        },
                        exif: {
                            36864: "ExifVersion",
                            40961: "ColorSpace",
                            40962: "PixelXDimension",
                            40963: "PixelYDimension",
                            36867: "DateTimeOriginal",
                            33434: "ExposureTime",
                            33437: "FNumber",
                            34855: "ISOSpeedRatings",
                            37377: "ShutterSpeedValue",
                            37378: "ApertureValue",
                            37383: "MeteringMode",
                            37384: "LightSource",
                            37385: "Flash",
                            37386: "FocalLength",
                            41986: "ExposureMode",
                            41987: "WhiteBalance",
                            41990: "SceneCaptureType",
                            41988: "DigitalZoomRatio",
                            41992: "Contrast",
                            41993: "Saturation",
                            41994: "Sharpness"
                        },
                        gps: {
                            0: "GPSVersionID",
                            1: "GPSLatitudeRef",
                            2: "GPSLatitude",
                            3: "GPSLongitudeRef",
                            4: "GPSLongitude"
                        },
                        thumb: {
                            513: "JPEGInterchangeFormat",
                            514: "JPEGInterchangeFormatLength"
                        }
                    }, l = {
                        ColorSpace: {
                            1: "sRGB",
                            0: "Uncalibrated"
                        },
                        MeteringMode: {
                            0: "Unknown",
                            1: "Average",
                            2: "CenterWeightedAverage",
                            3: "Spot",
                            4: "MultiSpot",
                            5: "Pattern",
                            6: "Partial",
                            255: "Other"
                        },
                        LightSource: {
                            1: "Daylight",
                            2: "Fliorescent",
                            3: "Tungsten",
                            4: "Flash",
                            9: "Fine weather",
                            10: "Cloudy weather",
                            11: "Shade",
                            12: "Daylight fluorescent (D 5700 - 7100K)",
                            13: "Day white fluorescent (N 4600 -5400K)",
                            14: "Cool white fluorescent (W 3900 - 4500K)",
                            15: "White fluorescent (WW 3200 - 3700K)",
                            17: "Standard light A",
                            18: "Standard light B",
                            19: "Standard light C",
                            20: "D55",
                            21: "D65",
                            22: "D75",
                            23: "D50",
                            24: "ISO studio tungsten",
                            255: "Other"
                        },
                        Flash: {
                            0: "Flash did not fire",
                            1: "Flash fired",
                            5: "Strobe return light not detected",
                            7: "Strobe return light detected",
                            9: "Flash fired, compulsory flash mode",
                            13: "Flash fired, compulsory flash mode, return light not detected",
                            15: "Flash fired, compulsory flash mode, return light detected",
                            16: "Flash did not fire, compulsory flash mode",
                            24: "Flash did not fire, auto mode",
                            25: "Flash fired, auto mode",
                            29: "Flash fired, auto mode, return light not detected",
                            31: "Flash fired, auto mode, return light detected",
                            32: "No flash function",
                            65: "Flash fired, red-eye reduction mode",
                            69: "Flash fired, red-eye reduction mode, return light not detected",
                            71: "Flash fired, red-eye reduction mode, return light detected",
                            73: "Flash fired, compulsory flash mode, red-eye reduction mode",
                            77: "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
                            79: "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
                            89: "Flash fired, auto mode, red-eye reduction mode",
                            93: "Flash fired, auto mode, return light not detected, red-eye reduction mode",
                            95: "Flash fired, auto mode, return light detected, red-eye reduction mode"
                        },
                        ExposureMode: {
                            0: "Auto exposure",
                            1: "Manual exposure",
                            2: "Auto bracket"
                        },
                        WhiteBalance: {
                            0: "Auto white balance",
                            1: "Manual white balance"
                        },
                        SceneCaptureType: {
                            0: "Standard",
                            1: "Landscape",
                            2: "Portrait",
                            3: "Night scene"
                        },
                        Contrast: {
                            0: "Normal",
                            1: "Soft",
                            2: "Hard"
                        },
                        Saturation: {
                            0: "Normal",
                            1: "Low saturation",
                            2: "High saturation"
                        },
                        Sharpness: {
                            0: "Normal",
                            1: "Soft",
                            2: "Hard"
                        },
                        GPSLatitudeRef: {
                            N: "North latitude",
                            S: "South latitude"
                        },
                        GPSLongitudeRef: {
                            E: "East longitude",
                            W: "West longitude"
                        }
                    }, c = {
                        tiffHeader: 10
                    }, h = c.tiffHeader, a = {
                        clear: this.clear
                    }, e.extend(this, {
                        read: function() {
                            try {
                                return i.prototype.read.apply(this, arguments)
                            } catch (e) {
                                throw new r.ImageError(r.ImageError.INVALID_META_ERR)
                            }
                        },
                        write: function() {
                            try {
                                return i.prototype.write.apply(this, arguments)
                            } catch (e) {
                                throw new r.ImageError(r.ImageError.INVALID_META_ERR)
                            }
                        },
                        UNDEFINED: function() {
                            return this.BYTE.apply(this, arguments)
                        },
                        RATIONAL: function(e) {
                            return this.LONG(e) / this.LONG(e + 4)
                        },
                        SRATIONAL: function(e) {
                            return this.SLONG(e) / this.SLONG(e + 4)
                        },
                        ASCII: function(e) {
                            return this.CHAR(e)
                        },
                        TIFF: function() {
                            return p || null
                        },
                        EXIF: function() {
                            var t = null;
                            if (c.exifIFD) {
                                try {
                                    t = o.call(this, c.exifIFD, f.exif)
                                } catch (n) {
                                    return null
                                }
                                if (t.ExifVersion && "array" === e.typeOf(t.ExifVersion)) {
                                    for (var r = 0, i = ""; r < t.ExifVersion.length; r++) i += String.fromCharCode(t.ExifVersion[r]);
                                    t.ExifVersion = i
                                }
                            }
                            return t
                        },
                        GPS: function() {
                            var t = null;
                            if (c.gpsIFD) {
                                try {
                                    t = o.call(this, c.gpsIFD, f.gps)
                                } catch (n) {
                                    return null
                                }
                                t.GPSVersionID && "array" === e.typeOf(t.GPSVersionID) && (t.GPSVersionID = t.GPSVersionID.join("."))
                            }
                            return t
                        },
                        thumb: function() {
                            if (c.IFD1) try {
                                var e = o.call(this, c.IFD1, f.thumb);
                                if ("JPEGInterchangeFormat" in e) return this.SEGMENT(c.tiffHeader + e.JPEGInterchangeFormat, e.JPEGInterchangeFormatLength)
                            } catch (t) {}
                            return null
                        },
                        setExif: function(e, t) {
                            return "PixelXDimension" !== e && "PixelYDimension" !== e ? !1 : u.call(this, "exif", e, t)
                        },
                        clear: function() {
                            a.clear(), s = f = l = p = c = a = null
                        }
                    }), 65505 !== this.SHORT(0) || "EXIF\0" !== this.STRING(4, 5).toUpperCase()) throw new r.ImageError(r.ImageError.INVALID_META_ERR);
                if (this.littleEndian = 18761 == this.SHORT(h), 42 !== this.SHORT(h += 2)) throw new r.ImageError(r.ImageError.INVALID_META_ERR);
                c.IFD0 = c.tiffHeader + this.LONG(h += 2), p = o.call(this, c.IFD0, f.tiff), "ExifIFDPointer" in p && (c.exifIFD = c.tiffHeader + p.ExifIFDPointer, delete p.ExifIFDPointer), "GPSInfoIFDPointer" in p && (c.gpsIFD = c.tiffHeader + p.GPSInfoIFDPointer, delete p.GPSInfoIFDPointer), e.isEmptyObj(p) && (p = null);
                var d = this.LONG(c.IFD0 + 12 * this.SHORT(c.IFD0) + 2);
                d && (c.IFD1 = c.tiffHeader + d)
            }
            return i.prototype = n.prototype, i
        }), r(q, [a, p, F, j, I], function(e, t, n, r, i) {
            function s(s) {
                function o(e) {
                    var t = 0,
                        n, r;
                    for (e || (e = f); t <= e.length();) {
                        if (n = e.SHORT(t += 2), n >= 65472 && 65475 >= n) return t += 5, {
                            height: e.SHORT(t),
                            width: e.SHORT(t += 2)
                        };
                        r = e.SHORT(t += 2), t += r - 2
                    }
                    return null
                }

                function u() {
                    var e = c.thumb(),
                        t, n;
                    return e && (t = new r(e), n = o(t), t.clear(), n) ? (n.data = e, n) : null
                }

                function a() {
                    c && l && f && (c.clear(), l.purge(), f.clear(), h = l = c = f = null)
                }
                var f, l, c, h;
                if (f = new r(s), 65496 !== f.SHORT(0)) throw new t.ImageError(t.ImageError.WRONG_FORMAT);
                l = new n(s);
                try {
                    c = new i(l.get("app1")[0])
                } catch (p) {}
                h = o.call(this), e.extend(this, {
                    type: "image/jpeg",
                    size: f.length(),
                    width: h && h.width || 0,
                    height: h && h.height || 0,
                    setExif: function(t, n) {
                        return c ? ("object" === e.typeOf(t) ? e.each(t, function(e, t) {
                            c.setExif(t, e)
                        }) : c.setExif(t, n), void l.set("app1", c.SEGMENT())) : !1
                    },
                    writeHeaders: function() {
                        return l.restore(arguments.length ? arguments[0] : s)
                    },
                    stripHeaders: function(e) {
                        return l.strip(e)
                    },
                    purge: function() {
                        a.call(this)
                    }
                }), c && (this.meta = {
                    tiff: c.TIFF(),
                    exif: c.EXIF(),
                    gps: c.GPS(),
                    thumb: u()
                })
            }
            return s
        }), r(R, [p, a, j], function(e, t, n) {
            function r(r) {
                function i() {
                    var e, t;
                    return e = o.call(this, 8), "IHDR" == e.type ? (t = e.start, {
                        width: u.LONG(t),
                        height: u.LONG(t += 4)
                    }) : null
                }

                function s() {
                    u && (u.clear(), r = l = a = f = u = null)
                }

                function o(e) {
                    var t, n, r, i;
                    return t = u.LONG(e), n = u.STRING(e += 4, 4), r = e += 4, i = u.LONG(e + t), {
                        length: t,
                        type: n,
                        start: r,
                        CRC: i
                    }
                }
                var u, a, f, l;
                u = new n(r),
                    function() {
                        var t = 0,
                            n = 0,
                            r = [35152, 20039, 3338, 6666];
                        for (n = 0; n < r.length; n++, t += 2)
                            if (r[n] != u.SHORT(t)) throw new e.ImageError(e.ImageError.WRONG_FORMAT)
                    }(), l = i.call(this), t.extend(this, {
                        type: "image/png",
                        size: u.length(),
                        width: l.width,
                        height: l.height,
                        purge: function() {
                            s.call(this)
                        }
                    }), s.call(this)
            }
            return r
        }), r(U, [a, p, q, R], function(e, t, n, r) {
            return function(i) {
                var s = [n, r],
                    o;
                o = function() {
                    for (var e = 0; e < s.length; e++) try {
                        return new s[e](i)
                    } catch (n) {}
                    throw new t.ImageError(t.ImageError.WRONG_FORMAT)
                }(), e.extend(this, {
                    type: "",
                    size: 0,
                    width: 0,
                    height: 0,
                    setExif: function() {},
                    writeHeaders: function(e) {
                        return e
                    },
                    stripHeaders: function(e) {
                        return e
                    },
                    purge: function() {
                        i = null
                    }
                }), e.extend(this, o), this.purge = function() {
                    o.purge(), o = null
                }
            }
        }), r(z, [], function() {
            function e(e, r, i) {
                var s = e.naturalWidth,
                    o = e.naturalHeight,
                    u = i.width,
                    a = i.height,
                    f = i.x || 0,
                    l = i.y || 0,
                    c = r.getContext("2d");
                t(e) && (s /= 2, o /= 2);
                var h = 1024,
                    p = document.createElement("canvas");
                p.width = p.height = h;
                for (var d = p.getContext("2d"), v = n(e, s, o), m = 0; o > m;) {
                    for (var g = m + h > o ? o - m : h, y = 0; s > y;) {
                        var b = y + h > s ? s - y : h;
                        d.clearRect(0, 0, h, h), d.drawImage(e, -y, -m);
                        var w = y * u / s + f << 0,
                            E = Math.ceil(b * u / s),
                            S = m * a / o / v + l << 0,
                            x = Math.ceil(g * a / o / v);
                        c.drawImage(p, 0, 0, b, g, w, S, E, x), y += h
                    }
                    m += h
                }
                p = d = null
            }

            function t(e) {
                var t = e.naturalWidth,
                    n = e.naturalHeight;
                if (t * n > 1048576) {
                    var r = document.createElement("canvas");
                    r.width = r.height = 1;
                    var i = r.getContext("2d");
                    return i.drawImage(e, -t + 1, 0), 0 === i.getImageData(0, 0, 1, 1).data[3]
                }
                return !1
            }

            function n(e, t, n) {
                var r = document.createElement("canvas");
                r.width = 1, r.height = n;
                var i = r.getContext("2d");
                i.drawImage(e, 0, 0);
                for (var s = i.getImageData(0, 0, 1, n).data, o = 0, u = n, a = n; a > o;) {
                    var f = s[4 * (a - 1) + 3];
                    0 === f ? u = a : o = a, a = u + o >> 1
                }
                r = null;
                var l = a / n;
                return 0 === l ? 1 : l
            }
            return {
                isSubsampled: t,
                renderTo: e
            }
        }), r(W, [O, a, p, y, b, w, U, z, c, f], function(e, t, n, r, i, s, o, u, a, f) {
            function l() {
                function e() {
                    if (!E && !b) throw new n.ImageError(n.DOMException.INVALID_STATE_ERR);
                    return E || b
                }

                function l(e) {
                    return r.atob(e.substring(e.indexOf("base64,") + 7))
                }

                function c(e, t) {
                    return "data:" + (t || "") + ";base64," + r.btoa(e)
                }

                function h(e) {
                    var t = this;
                    b = new Image, b.onerror = function() {
                        g.call(this), t.trigger("error", n.ImageError.WRONG_FORMAT)
                    }, b.onload = function() {
                        t.trigger("load")
                    }, b.src = "data:" == e.substr(0, 5) ? e : c(e, x.type)
                }

                function p(e, t) {
                    var r = this,
                        i;
                    return window.FileReader ? (i = new FileReader, i.onload = function() {
                        t(this.result)
                    }, i.onerror = function() {
                        r.trigger("error", n.ImageError.WRONG_FORMAT)
                    }, i.readAsDataURL(e), void 0) : t(e.getAsDataURL())
                }

                function d(n, r, i, s) {
                    var o = this,
                        u, a, f = 0,
                        l = 0,
                        c, h, p, d;
                    if (N = s, d = this.meta && this.meta.tiff && this.meta.tiff.Orientation || 1, -1 !== t.inArray(d, [5, 6, 7, 8])) {
                        var g = n;
                        n = r, r = g
                    }
                    return c = e(), i ? (n = Math.min(n, c.width), r = Math.min(r, c.height), u = Math.max(n / c.width, r / c.height)) : u = Math.min(n / c.width, r / c.height), u > 1 && !i && s ? void this.trigger("Resize") : (E || (E = document.createElement("canvas")), h = Math.round(c.width * u), p = Math.round(c.height * u), i ? (E.width = n, E.height = r, h > n && (f = Math.round((h - n) / 2)), p > r && (l = Math.round((p - r) / 2))) : (E.width = h, E.height = p), N || m(E.width, E.height, d), v.call(this, c, E, -f, -l, h, p), this.width = E.width, this.height = E.height, T = !0, void o.trigger("Resize"))
                }

                function v(e, t, n, r, i, s) {
                    if ("iOS" === f.OS) u.renderTo(e, t, {
                        width: i,
                        height: s,
                        x: n,
                        y: r
                    });
                    else {
                        var o = t.getContext("2d");
                        o.drawImage(e, n, r, i, s)
                    }
                }

                function m(e, t, n) {
                    switch (n) {
                        case 5:
                        case 6:
                        case 7:
                        case 8:
                            E.width = t, E.height = e;
                            break;
                        default:
                            E.width = e, E.height = t
                    }
                    var r = E.getContext("2d");
                    switch (n) {
                        case 2:
                            r.translate(e, 0), r.scale(-1, 1);
                            break;
                        case 3:
                            r.translate(e, t), r.rotate(Math.PI);
                            break;
                        case 4:
                            r.translate(0, t), r.scale(1, -1);
                            break;
                        case 5:
                            r.rotate(.5 * Math.PI), r.scale(1, -1);
                            break;
                        case 6:
                            r.rotate(.5 * Math.PI), r.translate(0, -t);
                            break;
                        case 7:
                            r.rotate(.5 * Math.PI), r.translate(e, -t), r.scale(-1, 1);
                            break;
                        case 8:
                            r.rotate(-0.5 * Math.PI), r.translate(-e, 0)
                    }
                }

                function g() {
                    w && (w.purge(), w = null), S = b = E = x = null, T = !1
                }
                var y = this,
                    b, w, E, S, x, T = !1,
                    N = !0;
                t.extend(this, {
                    loadFromBlob: function(e) {
                        var t = this,
                            r = t.getRuntime(),
                            i = arguments.length > 1 ? arguments[1] : !0;
                        if (!r.can("access_binary")) throw new n.RuntimeError(n.RuntimeError.NOT_SUPPORTED_ERR);
                        return x = e, e.isDetached() ? (S = e.getSource(), void h.call(this, S)) : void p.call(this, e.getSource(), function(e) {
                            i && (S = l(e)), h.call(t, e)
                        })
                    },
                    loadFromImage: function(e, t) {
                        this.meta = e.meta, x = new s(null, {
                            name: e.name,
                            size: e.size,
                            type: e.type
                        }), h.call(this, t ? S = e.getAsBinaryString() : e.getAsDataURL())
                    },
                    getInfo: function() {
                        var t = this.getRuntime(),
                            n;
                        return !w && S && t.can("access_image_binary") && (w = new o(S)), n = {
                            width: e().width || 0,
                            height: e().height || 0,
                            type: x.type || a.getFileMime(x.name),
                            size: S && S.length || x.size || 0,
                            name: x.name || "",
                            meta: w && w.meta || this.meta || {}
                        }, !n.meta || !n.meta.thumb || n.meta.thumb.data instanceof i || (n.meta.thumb.data = new i(null, {
                            type: "image/jpeg",
                            data: n.meta.thumb.data
                        })), n
                    },
                    downsize: function() {
                        d.apply(this, arguments)
                    },
                    getAsCanvas: function() {
                        return E && (E.id = this.uid + "_canvas"), E
                    },
                    getAsBlob: function(e, t) {
                        return e !== this.type && d.call(this, this.width, this.height, !1), new s(null, {
                            name: x.name || "",
                            type: e,
                            data: y.getAsBinaryString.call(this, e, t)
                        })
                    },
                    getAsDataURL: function(e) {
                        var t = arguments[1] || 90;
                        if (!T) return b.src;
                        if ("image/jpeg" !== e) return E.toDataURL("image/png");
                        try {
                            return E.toDataURL("image/jpeg", t / 100)
                        } catch (n) {
                            return E.toDataURL("image/jpeg")
                        }
                    },
                    getAsBinaryString: function(e, t) {
                        if (!T) return S || (S = l(y.getAsDataURL(e, t))), S;
                        if ("image/jpeg" !== e) S = l(y.getAsDataURL(e, t));
                        else {
                            var n;
                            t || (t = 90);
                            try {
                                n = E.toDataURL("image/jpeg", t / 100)
                            } catch (r) {
                                n = E.toDataURL("image/jpeg")
                            }
                            S = l(n), w && (S = w.stripHeaders(S), N && (w.meta && w.meta.exif && w.setExif({
                                PixelXDimension: this.width,
                                PixelYDimension: this.height
                            }), S = w.writeHeaders(S)), w.purge(), w = null)
                        }
                        return T = !1, S
                    },
                    destroy: function() {
                        y = null, g.call(this), this.getRuntime().getShim().removeInstance(this.uid)
                    }
                })
            }
            return e.Image = l
        }), r(X, [a, f, h, p, v], function(e, t, n, r, i) {
            function s() {
                var e;
                try {
                    e = navigator.plugins["Shockwave Flash"], e = e.description
                } catch (t) {
                    try {
                        e = (new ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version")
                    } catch (n) {
                        e = "0.0"
                    }
                }
                return e = e.match(/\d+/g), parseFloat(e[0] + "." + e[1])
            }

            function o(e) {
                var r = n.get(e);
                r && "OBJECT" == r.nodeName && ("IE" === t.browser ? (r.style.display = "none", function i() {
                    4 == r.readyState ? u(e) : setTimeout(i, 10)
                }()) : r.parentNode.removeChild(r))
            }

            function u(e) {
                var t = n.get(e);
                if (t) {
                    for (var r in t) "function" == typeof t[r] && (t[r] = null);
                    t.parentNode.removeChild(t)
                }
            }

            function a(u) {
                var a = this,
                    c;
                u = e.extend({
                    swf_url: t.swf_url
                }, u), i.call(this, u, f, {
                    access_binary: function(e) {
                        return e && "browser" === a.mode
                    },
                    access_image_binary: function(e) {
                        return e && "browser" === a.mode
                    },
                    display_media: i.capTrue,
                    do_cors: i.capTrue,
                    drag_and_drop: !1,
                    report_upload_progress: function() {
                        return "client" === a.mode
                    },
                    resize_image: i.capTrue,
                    return_response_headers: !1,
                    return_response_type: function(t) {
                        return "json" === t && window.JSON ? !0 : !e.arrayDiff(t, ["", "text", "document"]) || "browser" === a.mode
                    },
                    return_status_code: function(t) {
                        return "browser" === a.mode || !e.arrayDiff(t, [200, 404])
                    },
                    select_file: i.capTrue,
                    select_multiple: i.capTrue,
                    send_binary_string: function(e) {
                        return e && "browser" === a.mode
                    },
                    send_browser_cookies: function(e) {
                        return e && "browser" === a.mode
                    },
                    send_custom_headers: function(e) {
                        return e && "browser" === a.mode
                    },
                    send_multipart: i.capTrue,
                    slice_blob: function(e) {
                        return e && "browser" === a.mode
                    },
                    stream_upload: function(e) {
                        return e && "browser" === a.mode
                    },
                    summon_file_dialog: !1,
                    upload_filesize: function(t) {
                        return e.parseSizeStr(t) <= 2097152 || "client" === a.mode
                    },
                    use_http_method: function(t) {
                        return !e.arrayDiff(t, ["GET", "POST"])
                    }
                }, {
                    access_binary: function(e) {
                        return e ? "browser" : "client"
                    },
                    access_image_binary: function(e) {
                        return e ? "browser" : "client"
                    },
                    report_upload_progress: function(e) {
                        return e ? "browser" : "client"
                    },
                    return_response_type: function(t) {
                        return e.arrayDiff(t, ["", "text", "json", "document"]) ? "browser" : ["client", "browser"]
                    },
                    return_status_code: function(t) {
                        return e.arrayDiff(t, [200, 404]) ? "browser" : ["client", "browser"]
                    },
                    send_binary_string: function(e) {
                        return e ? "browser" : "client"
                    },
                    send_browser_cookies: function(e) {
                        return e ? "browser" : "client"
                    },
                    send_custom_headers: function(e) {
                        return e ? "browser" : "client"
                    },
                    stream_upload: function(e) {
                        return e ? "client" : "browser"
                    },
                    upload_filesize: function(t) {
                        return e.parseSizeStr(t) >= 2097152 ? "client" : "browser"
                    }
                }, "client"), s() < 10 && (this.mode = !1), e.extend(this, {
                    getShim: function() {
                        return n.get(this.uid)
                    },
                    shimExec: function(e, t) {
                        var n = [].slice.call(arguments, 2);
                        return a.getShim().exec(this.uid, e, t, n)
                    },
                    init: function() {
                        var n, i, s;
                        s = this.getShimContainer(), e.extend(s.style, {
                            position: "absolute",
                            top: "-8px",
                            left: "-8px",
                            width: "9px",
                            height: "9px",
                            overflow: "hidden"
                        }), n = '<object id="' + this.uid + '" type="application/x-shockwave-flash" data="' + u.swf_url + '" ', "IE" === t.browser && (n += 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" '), n += 'width="100%" height="100%" style="outline:0"><param name="movie" value="' + u.swf_url + '" /><param name="flashvars" value="uid=' + escape(this.uid) + "&target=" + t.global_event_dispatcher + '" /><param name="wmode" value="transparent" /><param name="allowscriptaccess" value="always" /></object>', "IE" === t.browser ? (i = document.createElement("div"), s.appendChild(i), i.outerHTML = n, i = s = null) : s.innerHTML = n, c = setTimeout(function() {
                            a && !a.initialized && a.trigger("Error", new r.RuntimeError(r.RuntimeError.NOT_INIT_ERR))
                        }, 5e3)
                    },
                    destroy: function(e) {
                        return function() {
                            o(a.uid), e.call(a), clearTimeout(c), u = c = e = a = null
                        }
                    }(this.destroy)
                }, l)
            }
            var f = "flash",
                l = {};
            return i.addConstructor(f, a), l
        }), r(V, [X, w, a], function(e, t, n) {
            var r = {
                init: function(e) {
                    var r = this,
                        i = this.getRuntime();
                    this.bind("Change", function() {
                        var e = i.shimExec.call(r, "FileInput", "getFiles");
                        r.files = [], n.each(e, function(e) {
                            r.files.push(new t(i.uid, e))
                        })
                    }, 999), this.getRuntime().shimExec.call(this, "FileInput", "init", {
                        name: e.name,
                        accept: e.accept,
                        multiple: e.multiple
                    }), this.trigger("ready")
                }
            };
            return e.FileInput = r
        }), r($, [X, b], function(e, t) {
            var n = {
                slice: function(e, n, r, i) {
                    var s = this.getRuntime();
                    return 0 > n ? n = Math.max(e.size + n, 0) : n > 0 && (n = Math.min(n, e.size)), 0 > r ? r = Math.max(e.size + r, 0) : r > 0 && (r = Math.min(r, e.size)), e = s.shimExec.call(this, "Blob", "slice", n, r, i || ""), e && (e = new t(s.uid, e)), e
                }
            };
            return e.Blob = n
        }), r(J, [X, y], function(e, t) {
            function n(e, n) {
                switch (n) {
                    case "readAsText":
                        return t.atob(e, "utf8");
                    case "readAsBinaryString":
                        return t.atob(e);
                    case "readAsDataURL":
                        return e
                }
                return null
            }
            var r = {
                read: function(e, t) {
                    var r = this;
                    return r.result = "", "readAsDataURL" === e && (r.result = "data:" + (t.type || "") + ";base64,"), r.bind("Progress", function(t, i) {
                        i && (r.result += n(i, e))
                    }, 999), r.getRuntime().shimExec.call(this, "FileReader", "readAsBase64", t.uid)
                }
            };
            return e.FileReader = r
        }), r(K, [X, y], function(e, t) {
            function n(e, n) {
                switch (n) {
                    case "readAsText":
                        return t.atob(e, "utf8");
                    case "readAsBinaryString":
                        return t.atob(e);
                    case "readAsDataURL":
                        return e
                }
                return null
            }
            var r = {
                read: function(e, t) {
                    var r, i = this.getRuntime();
                    return (r = i.shimExec.call(this, "FileReaderSync", "readAsBase64", t.uid)) ? ("readAsDataURL" === e && (r = "data:" + (t.type || "") + ";base64," + r), n(r, e, t.type)) : null
                }
            };
            return e.FileReaderSync = r
        }), r(Q, [X, a, b, w, N, C, L], function(e, t, n, r, i, s, o) {
            var u = {
                send: function(e, r) {
                    function i() {
                        e.transport = l.mode, l.shimExec.call(f, "XMLHttpRequest", "send", e, r)
                    }

                    function u(e, t) {
                        l.shimExec.call(f, "XMLHttpRequest", "appendBlob", e, t.uid), r = null, i()
                    }

                    function a(e, t) {
                        var n = new o;
                        n.bind("TransportingComplete", function() {
                            t(this.result)
                        }), n.transport(e.getSource(), e.type, {
                            ruid: l.uid
                        })
                    }
                    var f = this,
                        l = f.getRuntime();
                    if (t.isEmptyObj(e.headers) || t.each(e.headers, function(e, t) {
                            l.shimExec.call(f, "XMLHttpRequest", "setRequestHeader", t, e.toString())
                        }), r instanceof s) {
                        var c;
                        if (r.each(function(e, t) {
                                e instanceof n ? c = t : l.shimExec.call(f, "XMLHttpRequest", "append", t, e)
                            }), r.hasBlob()) {
                            var h = r.getBlob();
                            h.isDetached() ? a(h, function(e) {
                                h.destroy(), u(c, e)
                            }) : u(c, h)
                        } else r = null, i()
                    } else r instanceof n ? r.isDetached() ? a(r, function(e) {
                        r.destroy(), r = e.uid, i()
                    }) : (r = r.uid, i()) : i()
                },
                getResponse: function(e) {
                    var n, s, o = this.getRuntime();
                    if (s = o.shimExec.call(this, "XMLHttpRequest", "getResponseAsBlob")) {
                        if (s = new r(o.uid, s), "blob" === e) return s;
                        try {
                            if (n = new i, ~t.inArray(e, ["", "text"])) return n.readAsText(s);
                            if ("json" === e && window.JSON) return JSON.parse(n.readAsText(s))
                        } finally {
                            s.destroy()
                        }
                    }
                    return null
                },
                abort: function(e) {
                    var t = this.getRuntime();
                    t.shimExec.call(this, "XMLHttpRequest", "abort"), this.dispatchEvent("readystatechange"), this.dispatchEvent("abort")
                }
            };
            return e.XMLHttpRequest = u
        }), r(G, [X, b], function(e, t) {
            var n = {
                getAsBlob: function(e) {
                    var n = this.getRuntime(),
                        r = n.shimExec.call(this, "Transporter", "getAsBlob", e);
                    return r ? new t(n.uid, r) : null
                }
            };
            return e.Transporter = n
        }), r(Y, [X, a, L, b, N], function(e, t, n, r, i) {
            var s = {
                loadFromBlob: function(e) {
                    function t(e) {
                        i.shimExec.call(r, "Image", "loadFromBlob", e.uid), r = i = null
                    }
                    var r = this,
                        i = r.getRuntime();
                    if (e.isDetached()) {
                        var s = new n;
                        s.bind("TransportingComplete", function() {
                            t(s.result.getSource())
                        }), s.transport(e.getSource(), e.type, {
                            ruid: i.uid
                        })
                    } else t(e.getSource())
                },
                loadFromImage: function(e) {
                    var t = this.getRuntime();
                    return t.shimExec.call(this, "Image", "loadFromImage", e.uid)
                },
                getInfo: function() {
                    var e = this.getRuntime(),
                        t = e.shimExec.call(this, "Image", "getInfo");
                    return !t.meta || !t.meta.thumb || t.meta.thumb.data instanceof r || (t.meta.thumb.data = new r(e.uid, t.meta.thumb.data)), t
                },
                getAsBlob: function(e, t) {
                    var n = this.getRuntime(),
                        i = n.shimExec.call(this, "Image", "getAsBlob", e, t);
                    return i ? new r(n.uid, i) : null
                },
                getAsDataURL: function() {
                    var e = this.getRuntime(),
                        t = e.Image.getAsBlob.apply(this, arguments),
                        n;
                    return t ? (n = new i, n.readAsDataURL(t)) : null
                }
            };
            return e.Image = s
        }), r(Z, [a, f, h, p, v], function(e, t, n, r, i) {
            function s(e) {
                var t = !1,
                    n = null,
                    r, i, s, o, u, a = 0;
                try {
                    try {
                        n = new ActiveXObject("AgControl.AgControl"), n.IsVersionSupported(e) && (t = !0), n = null
                    } catch (f) {
                        var l = navigator.plugins["Silverlight Plug-In"];
                        if (l) {
                            for (r = l.description, "1.0.30226.2" === r && (r = "2.0.30226.2"), i = r.split("."); i.length > 3;) i.pop();
                            for (; i.length < 4;) i.push(0);
                            for (s = e.split("."); s.length > 4;) s.pop();
                            do o = parseInt(s[a], 10), u = parseInt(i[a], 10), a++; while (a < s.length && o === u);
                            u >= o && !isNaN(o) && (t = !0)
                        }
                    }
                } catch (c) {
                    t = !1
                }
                return t
            }

            function o(o) {
                var f = this,
                    l;
                o = e.extend({
                    xap_url: t.xap_url
                }, o), i.call(this, o, u, {
                    access_binary: i.capTrue,
                    access_image_binary: i.capTrue,
                    display_media: i.capTrue,
                    do_cors: i.capTrue,
                    drag_and_drop: !1,
                    report_upload_progress: i.capTrue,
                    resize_image: i.capTrue,
                    return_response_headers: function(e) {
                        return e && "client" === f.mode
                    },
                    return_response_type: function(e) {
                        return "json" !== e ? !0 : !!window.JSON
                    },
                    return_status_code: function(t) {
                        return "client" === f.mode || !e.arrayDiff(t, [200, 404])
                    },
                    select_file: i.capTrue,
                    select_multiple: i.capTrue,
                    send_binary_string: i.capTrue,
                    send_browser_cookies: function(e) {
                        return e && "browser" === f.mode
                    },
                    send_custom_headers: function(e) {
                        return e && "client" === f.mode
                    },
                    send_multipart: i.capTrue,
                    slice_blob: i.capTrue,
                    stream_upload: !0,
                    summon_file_dialog: !1,
                    upload_filesize: i.capTrue,
                    use_http_method: function(t) {
                        return "client" === f.mode || !e.arrayDiff(t, ["GET", "POST"])
                    }
                }, {
                    return_response_headers: function(e) {
                        return e ? "client" : "browser"
                    },
                    return_status_code: function(t) {
                        return e.arrayDiff(t, [200, 404]) ? "client" : ["client", "browser"]
                    },
                    send_browser_cookies: function(e) {
                        return e ? "browser" : "client"
                    },
                    send_custom_headers: function(e) {
                        return e ? "client" : "browser"
                    },
                    use_http_method: function(t) {
                        return e.arrayDiff(t, ["GET", "POST"]) ? "client" : ["client", "browser"]
                    }
                }), s("2.0.31005.0") && "Opera" !== t.browser || (this.mode = !1), e.extend(this, {
                    getShim: function() {
                        return n.get(this.uid).content.Moxie
                    },
                    shimExec: function(e, t) {
                        var n = [].slice.call(arguments, 2);
                        return f.getShim().exec(this.uid, e, t, n)
                    },
                    init: function() {
                        var e;
                        e = this.getShimContainer(), e.innerHTML = '<object id="' + this.uid + '" data="data:application/x-silverlight," type="application/x-silverlight-2" width="100%" height="100%" style="outline:none;"><param name="source" value="' + o.xap_url + '"/><param name="background" value="Transparent"/><param name="windowless" value="true"/><param name="enablehtmlaccess" value="true"/><param name="initParams" value="uid=' + this.uid + ",target=" + t.global_event_dispatcher + '"/></object>', l = setTimeout(function() {
                            f && !f.initialized && f.trigger("Error", new r.RuntimeError(r.RuntimeError.NOT_INIT_ERR))
                        }, "Windows" !== t.OS ? 1e4 : 5e3)
                    },
                    destroy: function(e) {
                        return function() {
                            e.call(f), clearTimeout(l), o = l = e = f = null
                        }
                    }(this.destroy)
                }, a)
            }
            var u = "silverlight",
                a = {};
            return i.addConstructor(u, o), a
        }), r(et, [Z, w, a], function(e, t, n) {
            var r = {
                init: function(e) {
                    function r(e) {
                        for (var t = "", n = 0; n < e.length; n++) t += ("" !== t ? "|" : "") + e[n].title + " | *." + e[n].extensions.replace(/,/g, ";*.");
                        return t
                    }
                    var i = this,
                        s = this.getRuntime();
                    this.bind("Change", function() {
                        var e = s.shimExec.call(i, "FileInput", "getFiles");
                        i.files = [], n.each(e, function(e) {
                            i.files.push(new t(s.uid, e))
                        })
                    }, 999), this.getRuntime().shimExec.call(this, "FileInput", "init", r(e.accept), e.name, e.multiple), this.trigger("ready")
                }
            };
            return e.FileInput = r
        }), r(tt, [Z, a, $], function(e, t, n) {
            return e.Blob = t.extend({}, n)
        }), r(nt, [Z, h, M], function(e, t, n) {
            var r = {
                init: function() {
                    var e = this,
                        r = e.getRuntime(),
                        i;
                    return i = r.getShimContainer(), n.addEvent(i, "dragover", function(e) {
                        e.preventDefault(), e.stopPropagation(), e.dataTransfer.dropEffect = "copy"
                    }, e.uid), n.addEvent(i, "dragenter", function(e) {
                        e.preventDefault();
                        var n = t.get(r.uid).dragEnter(e);
                        n && e.stopPropagation()
                    }, e.uid), n.addEvent(i, "drop", function(e) {
                        e.preventDefault();
                        var n = t.get(r.uid).dragDrop(e);
                        n && e.stopPropagation()
                    }, e.uid), r.shimExec.call(this, "FileDrop", "init")
                }
            };
            return e.FileDrop = r
        }), r(rt, [Z, a, J], function(e, t, n) {
            return e.FileReader = t.extend({}, n)
        }), r(it, [Z, a, K], function(e, t, n) {
            return e.FileReaderSync = t.extend({}, n)
        }), r(st, [Z, a, Q], function(e, t, n) {
            return e.XMLHttpRequest = t.extend({}, n)
        }), r(ot, [Z, a, G], function(e, t, n) {
            return e.Transporter = t.extend({}, n)
        }), r(ut, [Z, a, b, Y], function(e, t, n, r) {
            return e.Image = t.extend({}, r, {
                getInfo: function() {
                    var e = this.getRuntime(),
                        r = ["tiff", "exif", "gps", "thumb"],
                        i = {
                            meta: {}
                        },
                        s = e.shimExec.call(this, "Image", "getInfo");
                    return s.meta && (t.each(r, function(e) {
                        var t = s.meta[e],
                            n, r, o, u;
                        if (t && t.keys)
                            for (i.meta[e] = {}, r = 0, o = t.keys.length; o > r; r++) n = t.keys[r], u = t[n], u && (/^(\d|[1-9]\d+)$/.test(u) ? u = parseInt(u, 10) : /^\d*\.\d+$/.test(u) && (u = parseFloat(u)), i.meta[e][n] = u)
                    }), !i.meta || !i.meta.thumb || i.meta.thumb.data instanceof n || (i.meta.thumb.data = new n(e.uid, i.meta.thumb.data))), i.width = parseInt(s.width, 10), i.height = parseInt(s.height, 10), i.size = parseInt(s.size, 10), i.type = s.type, i.name = s.name, i
                }
            })
        }), r(at, [a, p, v, f], function(e, t, n, r) {
            function i(t) {
                var i = this,
                    u = n.capTest,
                    a = n.capTrue;
                n.call(this, t, s, {
                    access_binary: u(window.FileReader || window.File && File.getAsDataURL),
                    access_image_binary: !1,
                    display_media: u(o.Image && (r.can("create_canvas") || r.can("use_data_uri_over32kb"))),
                    do_cors: !1,
                    drag_and_drop: !1,
                    filter_by_extension: u(function() {
                        return "Chrome" === r.browser && r.verComp(r.version, 28, ">=") || "IE" === r.browser && r.verComp(r.version, 10, ">=") || "Safari" === r.browser && r.verComp(r.version, 7, ">=")
                    }()),
                    resize_image: function() {
                        return o.Image && i.can("access_binary") && r.can("create_canvas")
                    },
                    report_upload_progress: !1,
                    return_response_headers: !1,
                    return_response_type: function(t) {
                        return "json" === t && window.JSON ? !0 : !!~e.inArray(t, ["text", "document", ""])
                    },
                    return_status_code: function(t) {
                        return !e.arrayDiff(t, [200, 404])
                    },
                    select_file: function() {
                        return r.can("use_fileinput")
                    },
                    select_multiple: !1,
                    send_binary_string: !1,
                    send_custom_headers: !1,
                    send_multipart: !0,
                    slice_blob: !1,
                    stream_upload: function() {
                        return i.can("select_file")
                    },
                    summon_file_dialog: function() {
                        return i.can("select_file") && ("Firefox" === r.browser && r.verComp(r.version, 4, ">=") || "Opera" === r.browser && r.verComp(r.version, 12, ">=") || "IE" === r.browser && r.verComp(r.version, 10, ">=") || !!~e.inArray(r.browser, ["Chrome", "Safari"]))
                    },
                    upload_filesize: a,
                    use_http_method: function(t) {
                        return !e.arrayDiff(t, ["GET", "POST"])
                    }
                }), e.extend(this, {
                    init: function() {
                        this.trigger("Init")
                    },
                    destroy: function(e) {
                        return function() {
                            e.call(i), e = i = null
                        }
                    }(this.destroy)
                }), e.extend(this.getShim(), o)
            }
            var s = "html4",
                o = {};
            return n.addConstructor(s, i), o
        }), r(ft, [at, w, a, h, M, c, f], function(e, t, n, r, i, s, o) {
            function u() {
                function e() {
                    var s = this,
                        l = s.getRuntime(),
                        c, h, p, d, v, m;
                    m = n.guid("uid_"), c = l.getShimContainer(), u && (p = r.get(u + "_form"), p && n.extend(p.style, {
                        top: "100%"
                    })), d = document.createElement("form"), d.setAttribute("id", m + "_form"), d.setAttribute("method", "post"), d.setAttribute("enctype", "multipart/form-data"), d.setAttribute("encoding", "multipart/form-data"), n.extend(d.style, {
                        overflow: "hidden",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                    }), v = document.createElement("input"), v.setAttribute("id", m), v.setAttribute("type", "file"), v.setAttribute("name", f.name || "Filedata"), v.setAttribute("accept", a.join(",")), n.extend(v.style, {
                        fontSize: "999px",
                        opacity: 0
                    }), d.appendChild(v), c.appendChild(d), n.extend(v.style, {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                    }), "IE" === o.browser && o.verComp(o.version, 10, "<") && n.extend(v.style, {
                        filter: "progid:DXImageTransform.Microsoft.Alpha(opacity=0)"
                    }), v.onchange = function() {
                        var n;
                        if (this.value) {
                            if (this.files) {
                                if (n = this.files[0], 0 === n.size) return void d.parentNode.removeChild(d)
                            } else n = {
                                name: this.value
                            };
                            n = new t(l.uid, n), this.onchange = function() {}, e.call(s), s.files = [n], v.setAttribute("id", n.uid), d.setAttribute("id", n.uid + "_form"), s.trigger("change"), v = d = null
                        }
                    }, l.can("summon_file_dialog") && (h = r.get(f.browse_button), i.removeEvent(h, "click", s.uid), i.addEvent(h, "click", function(e) {
                        v && !v.disabled && v.click(), e.preventDefault()
                    }, s.uid)), u = m, c = p = h = null
                }
                var u, a = [],
                    f;
                n.extend(this, {
                    init: function(t) {
                        var n = this,
                            o = n.getRuntime(),
                            u;
                        f = t, a = t.accept.mimes || s.extList2mimes(t.accept, o.can("filter_by_extension")), u = o.getShimContainer(),
                            function() {
                                var e, s, a;
                                e = r.get(t.browse_button), o.can("summon_file_dialog") && ("static" === r.getStyle(e, "position") && (e.style.position = "relative"), s = parseInt(r.getStyle(e, "z-index"), 10) || 1, e.style.zIndex = s, u.style.zIndex = s - 1), a = o.can("summon_file_dialog") ? e : u, i.addEvent(a, "mouseover", function() {
                                    n.trigger("mouseenter")
                                }, n.uid), i.addEvent(a, "mouseout", function() {
                                    n.trigger("mouseleave")
                                }, n.uid), i.addEvent(a, "mousedown", function() {
                                    n.trigger("mousedown")
                                }, n.uid), i.addEvent(r.get(t.container), "mouseup", function() {
                                    n.trigger("mouseup")
                                }, n.uid), e = null
                            }(), e.call(this), u = null, n.trigger({
                                type: "ready",
                                async: !0
                            })
                    },
                    disable: function(e) {
                        var t;
                        (t = r.get(u)) && (t.disabled = !!e)
                    },
                    destroy: function() {
                        var e = this.getRuntime(),
                            t = e.getShim(),
                            n = e.getShimContainer();
                        i.removeAllEvents(n, this.uid), i.removeAllEvents(f && r.get(f.container), this.uid), i.removeAllEvents(f && r.get(f.browse_button), this.uid), n && (n.innerHTML = ""), t.removeInstance(this.uid), u = a = f = n = t = null
                    }
                })
            }
            return e.FileInput = u
        }), r(lt, [at, H], function(e, t) {
            return e.FileReader = t
        }), r(ct, [at, a, h, x, p, M, b, C], function(e, t, n, r, i, s, o, u) {
            function a() {
                function e(e) {
                    var t = this,
                        r, i, o, u, a = !1;
                    if (l) {
                        if (r = l.id.replace(/_iframe$/, ""), i = n.get(r + "_form")) {
                            for (o = i.getElementsByTagName("input"), u = o.length; u--;) switch (o[u].getAttribute("type")) {
                                case "hidden":
                                    o[u].parentNode.removeChild(o[u]);
                                    break;
                                case "file":
                                    a = !0
                            }
                            o = [], a || i.parentNode.removeChild(i), i = null
                        }
                        setTimeout(function() {
                            s.removeEvent(l, "load", t.uid), l.parentNode && l.parentNode.removeChild(l);
                            var n = t.getRuntime().getShimContainer();
                            n.children.length || n.parentNode.removeChild(n), n = l = null, e()
                        }, 1)
                    }
                }
                var a, f, l;
                t.extend(this, {
                    send: function(c, h) {
                        function p() {
                            var n = v.getShimContainer() || document.body,
                                i = document.createElement("div");
                            i.innerHTML = '<iframe id="' + m + '_iframe" name="' + m + '_iframe" src="javascript:&quot;&quot;" style="display:none"></iframe>', l = i.firstChild, n.appendChild(l), s.addEvent(l, "load", function() {
                                var n;
                                try {
                                    n = l.contentWindow.document || l.contentDocument || window.frames[l.id].document, /^4(0[0-9]|1[0-7]|2[2346])\s/.test(n.title) ? a = n.title.replace(/^(\d+).*$/, "$1") : (a = 200, f = t.trim(n.body.innerHTML), d.trigger({
                                        type: "progress",
                                        loaded: f.length,
                                        total: f.length
                                    }), b && d.trigger({
                                        type: "uploadprogress",
                                        loaded: b.size || 1025,
                                        total: b.size || 1025
                                    }))
                                } catch (i) {
                                    if (!r.hasSameOrigin(c.url)) return void e.call(d, function() {
                                        d.trigger("error")
                                    });
                                    a = 404
                                }
                                e.call(d, function() {
                                    d.trigger("load")
                                })
                            }, d.uid)
                        }
                        var d = this,
                            v = d.getRuntime(),
                            m, g, y, b;
                        if (a = f = null, h instanceof u && h.hasBlob()) {
                            if (b = h.getBlob(), m = b.uid, y = n.get(m), g = n.get(m + "_form"), !g) throw new i.DOMException(i.DOMException.NOT_FOUND_ERR)
                        } else m = t.guid("uid_"), g = document.createElement("form"), g.setAttribute("id", m + "_form"), g.setAttribute("method", c.method), g.setAttribute("enctype", "multipart/form-data"), g.setAttribute("encoding", "multipart/form-data"), v.getShimContainer().appendChild(g);
                        g.setAttribute("target", m + "_iframe"), h instanceof u && h.each(function(e, n) {
                            if (e instanceof o) y && y.setAttribute("name", n);
                            else {
                                var r = document.createElement("input");
                                t.extend(r, {
                                    type: "hidden",
                                    name: n,
                                    value: e
                                }), y ? g.insertBefore(r, y) : g.appendChild(r)
                            }
                        }), g.setAttribute("action", c.url), p(), g.submit(), d.trigger("loadstart")
                    },
                    getStatus: function() {
                        return a
                    },
                    getResponse: function(e) {
                        if ("json" === e && "string" === t.typeOf(f) && window.JSON) try {
                            return JSON.parse(f.replace(/^\s*<pre[^>]*>/, "").replace(/<\/pre>\s*$/, ""))
                        } catch (n) {
                            return null
                        }
                        return f
                    },
                    abort: function() {
                        var t = this;
                        l && l.contentWindow && (l.contentWindow.stop ? l.contentWindow.stop() : l.contentWindow.document.execCommand ? l.contentWindow.document.execCommand("Stop") : l.src = "about:blank"), e.call(this, function() {
                            t.dispatchEvent("abort")
                        })
                    }
                })
            }
            return e.XMLHttpRequest = a
        }), r(ht, [at, W], function(e, t) {
            return e.Image = t
        }), o([a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x, T, N, C, k, L, A, M])
    }(this),
    function(e) {
        "use strict";
        var t = {},
            n = e.moxie.core.utils.Basic.inArray;
        return function r(e) {
            var i, s;
            for (i in e) s = typeof e[i], s === "object" && !~n(i, ["Exceptions", "Env", "Mime"]) ? r(e[i]) : s === "function" && (t[i] = e[i])
        }(e.moxie), t.Env = e.moxie.core.utils.Env, t.Mime = e.moxie.core.utils.Mime, t.Exceptions = e.moxie.core.Exceptions, e.mOxie = t, e.o || (e.o = t), t
    }(this),
    function(e, t, n) {
        function r(e) {
            function t(e, t, n) {
                var i = {
                    chunks: "slice_blob",
                    jpgresize: "send_binary_string",
                    pngresize: "send_binary_string",
                    progress: "report_upload_progress",
                    multi_selection: "select_multiple",
                    dragdrop: "drag_and_drop",
                    drop_element: "drag_and_drop",
                    headers: "send_custom_headers",
                    urlstream_upload: "send_binary_string",
                    canSendBinary: "send_binary",
                    triggerDialog: "summon_file_dialog"
                };
                i[e] ? r[i[e]] = t : n || (r[e] = t)
            }
            var n = e.required_features,
                r = {};
            if (typeof n == "string") o.each(n.split(/\s*,\s*/), function(e) {
                t(e, !0)
            });
            else if (typeof n == "object") o.each(n, function(e, n) {
                t(n, e)
            });
            else if (n === !0) {
                e.chunk_size > 0 && (r.slice_blob = !0);
                if (e.resize.enabled || !e.multipart) r.send_binary_string = !0;
                o.each(e, function(e, n) {
                    t(n, !!e, !0)
                })
            }
            return r
        }
        var i = e.setTimeout,
            s = {},
            o = {
                VERSION: "2.1.8",
                STOPPED: 1,
                STARTED: 2,
                QUEUED: 1,
                UPLOADING: 2,
                FAILED: 4,
                DONE: 5,
                GENERIC_ERROR: -100,
                HTTP_ERROR: -200,
                IO_ERROR: -300,
                SECURITY_ERROR: -400,
                INIT_ERROR: -500,
                FILE_SIZE_ERROR: -600,
                FILE_EXTENSION_ERROR: -601,
                FILE_DUPLICATE_ERROR: -602,
                IMAGE_FORMAT_ERROR: -700,
                MEMORY_ERROR: -701,
                IMAGE_DIMENSIONS_ERROR: -702,
                mimeTypes: t.mimes,
                ua: t.ua,
                typeOf: t.typeOf,
                extend: t.extend,
                guid: t.guid,
                get: function(e) {
                    var n = [],
                        r;
                    t.typeOf(e) !== "array" && (e = [e]);
                    var i = e.length;
                    while (i--) r = t.get(e[i]), r && n.push(r);
                    return n.length ? n : null
                },
                each: t.each,
                getPos: t.getPos,
                getSize: t.getSize,
                xmlEncode: function(e) {
                    var t = {
                            "<": "lt",
                            ">": "gt",
                            "&": "amp",
                            '"': "quot",
                            "'": "#39"
                        },
                        n = /[<>&\"\']/g;
                    return e ? ("" + e).replace(n, function(e) {
                        return t[e] ? "&" + t[e] + ";" : e
                    }) : e
                },
                toArray: t.toArray,
                inArray: t.inArray,
                addI18n: t.addI18n,
                translate: t.translate,
                isEmptyObj: t.isEmptyObj,
                hasClass: t.hasClass,
                addClass: t.addClass,
                removeClass: t.removeClass,
                getStyle: t.getStyle,
                addEvent: t.addEvent,
                removeEvent: t.removeEvent,
                removeAllEvents: t.removeAllEvents,
                cleanName: function(e) {
                    var t, n;
                    n = [/[\300-\306]/g, "A", /[\340-\346]/g, "a", /\307/g, "C", /\347/g, "c", /[\310-\313]/g, "E", /[\350-\353]/g, "e", /[\314-\317]/g, "I", /[\354-\357]/g, "i", /\321/g, "N", /\361/g, "n", /[\322-\330]/g, "O", /[\362-\370]/g, "o", /[\331-\334]/g, "U", /[\371-\374]/g, "u"];
                    for (t = 0; t < n.length; t += 2) e = e.replace(n[t], n[t + 1]);
                    return e = e.replace(/\s+/g, "_"), e = e.replace(/[^a-z0-9_\-\.]+/gi, ""), e
                },
                buildUrl: function(e, t) {
                    var n = "";
                    return o.each(t, function(e, t) {
                        n += (n ? "&" : "") + encodeURIComponent(t) + "=" + encodeURIComponent(e)
                    }), n && (e += (e.indexOf("?") > 0 ? "&" : "?") + n), e
                },
                formatSize: function(e) {
                    function t(e, t) {
                        return Math.round(e * Math.pow(10, t)) / Math.pow(10, t)
                    }
                    if (e === n || /\D/.test(e)) return o.translate("N/A");
                    var r = Math.pow(1024, 4);
                    return e > r ? t(e / r, 1) + " " + o.translate("tb") : e > (r /= 1024) ? t(e / r, 1) + " " + o.translate("gb") : e > (r /= 1024) ? t(e / r, 1) + " " + o.translate("mb") : e > 1024 ? Math.round(e / 1024) + " " + o.translate("kb") : e + " " + o.translate("b")
                },
                parseSize: t.parseSizeStr,
                predictRuntime: function(e, n) {
                    var r, i;
                    return r = new o.Uploader(e), i = t.Runtime.thatCan(r.getOption().required_features, n || e.runtimes), r.destroy(), i
                },
                addFileFilter: function(e, t) {
                    s[e] = t
                }
            };
        o.addFileFilter("mime_types", function(e, t, n) {
            e.length && !e.regexp.test(t.name) ? (this.trigger("Error", {
                code: o.FILE_EXTENSION_ERROR,
                message: o.translate("File extension error."),
                file: t
            }), n(!1)) : n(!0)
        }), o.addFileFilter("max_file_size", function(e, t, n) {
            var r;
            e = o.parseSize(e), t.size !== r && e && t.size > e ? (this.trigger("Error", {
                code: o.FILE_SIZE_ERROR,
                message: o.translate("File size error."),
                file: t
            }), n(!1)) : n(!0)
        }), o.addFileFilter("prevent_duplicates", function(e, t, n) {
            if (e) {
                var r = this.files.length;
                while (r--)
                    if (t.name === this.files[r].name && t.size === this.files[r].size) {
                        this.trigger("Error", {
                            code: o.FILE_DUPLICATE_ERROR,
                            message: o.translate("Duplicate file error."),
                            file: t
                        }), n(!1);
                        return
                    }
            }
            n(!0)
        }), o.Uploader = function(e) {
            function u() {
                var e, t = 0,
                    n;
                if (this.state == o.STARTED) {
                    for (n = 0; n < C.length; n++) !e && C[n].status == o.QUEUED ? (e = C[n], this.trigger("BeforeUpload", e) && (e.status = o.UPLOADING, this.trigger("UploadFile", e))) : t++;
                    t == C.length && (this.state !== o.STOPPED && (this.state = o.STOPPED, this.trigger("StateChanged")), this.trigger("UploadComplete", C))
                }
            }

            function a(e) {
                e.percent = e.size > 0 ? Math.ceil(e.loaded / e.size * 100) : 100, f()
            }

            function f() {
                var e, t;
                M.reset();
                for (e = 0; e < C.length; e++) t = C[e], t.size !== n ? (M.size += t.origSize, M.loaded += t.loaded * t.origSize / t.size) : M.size = n, t.status == o.DONE ? M.uploaded++ : t.status == o.FAILED ? M.failed++ : M.queued++;
                M.size === n ? M.percent = C.length > 0 ? Math.ceil(M.uploaded / C.length * 100) : 0 : (M.bytesPerSec = Math.ceil(M.loaded / ((+(new Date) - O || 1) / 1e3)), M.percent = M.size > 0 ? Math.ceil(M.loaded / M.size * 100) : 0)
            }

            function l() {
                var e = L[0] || A[0];
                return e ? e.getRuntime().uid : !1
            }

            function c(e, n) {
                if (e.ruid) {
                    var r = t.Runtime.getInfo(e.ruid);
                    if (r) return r.can(n)
                }
                return !1
            }

            function h() {
                this.bind("FilesAdded FilesRemoved", function(e) {
                    e.trigger("QueueChanged"), e.refresh()
                }), this.bind("CancelUpload", w), this.bind("BeforeUpload", m), this.bind("UploadFile", g), this.bind("UploadProgress", y), this.bind("StateChanged", b), this.bind("QueueChanged", f), this.bind("Error", S), this.bind("FileUploaded", E), this.bind("Destroy", x)
            }

            function p(e, n) {
                var r = this,
                    i = 0,
                    s = [],
                    u = {
                        runtime_order: e.runtimes,
                        required_caps: e.required_features,
                        preferred_caps: k,
                        swf_url: e.flash_swf_url,
                        xap_url: e.silverlight_xap_url
                    };
                o.each(e.runtimes.split(/\s*,\s*/), function(t) {
                    e[t] && (u[t] = e[t])
                }), e.browse_button && o.each(e.browse_button, function(n) {
                    s.push(function(s) {
                        var a = new t.FileInput(o.extend({}, u, {
                            accept: e.filters.mime_types,
                            name: e.file_data_name,
                            multiple: e.multi_selection,
                            container: e.container,
                            browse_button: n
                        }));
                        a.onready = function() {
                            var e = t.Runtime.getInfo(this.ruid);
                            t.extend(r.features, {
                                chunks: e.can("slice_blob"),
                                multipart: e.can("send_multipart"),
                                multi_selection: e.can("select_multiple")
                            }), i++, L.push(this), s()
                        }, a.onchange = function() {
                            r.addFile(this.files)
                        }, a.bind("mouseenter mouseleave mousedown mouseup", function(r) {
                            _ || (e.browse_button_hover && ("mouseenter" === r.type ? t.addClass(n, e.browse_button_hover) : "mouseleave" === r.type && t.removeClass(n, e.browse_button_hover)), e.browse_button_active && ("mousedown" === r.type ? t.addClass(n, e.browse_button_active) : "mouseup" === r.type && t.removeClass(n, e.browse_button_active)))
                        }), a.bind("mousedown", function() {
                            r.trigger("Browse")
                        }), a.bind("error runtimeerror", function() {
                            a = null, s()
                        }), a.init()
                    })
                }), e.drop_element && o.each(e.drop_element, function(e) {
                    s.push(function(n) {
                        var s = new t.FileDrop(o.extend({}, u, {
                            drop_zone: e
                        }));
                        s.onready = function() {
                            var e = t.Runtime.getInfo(this.ruid);
                            r.features.dragdrop = e.can("drag_and_drop"), i++, A.push(this), n()
                        }, s.ondrop = function() {
                            r.addFile(this.files)
                        }, s.bind("error runtimeerror", function() {
                            s = null, n()
                        }), s.init()
                    })
                }), t.inSeries(s, function() {
                    typeof n == "function" && n(i)
                })
            }

            function d(e, r, i) {
                var s = new t.Image;
                try {
                    s.onload = function() {
                        if (r.width > this.width && r.height > this.height && r.quality === n && r.preserve_headers && !r.crop) return this.destroy(), i(e);
                        s.downsize(r.width, r.height, r.crop, r.preserve_headers)
                    }, s.onresize = function() {
                        i(this.getAsBlob(e.type, r.quality)), this.destroy()
                    }, s.onerror = function() {
                        i(e)
                    }, s.load(e)
                } catch (o) {
                    i(e)
                }
            }

            function v(e, n, i) {
                function s(e, t, n) {
                    var r = N[e];
                    switch (e) {
                        case "max_file_size":
                            e === "max_file_size" && (N.max_file_size = N.filters.max_file_size = t);
                            break;
                        case "chunk_size":
                            if (t = o.parseSize(t)) N[e] = t, N.send_file_name = !0;
                            break;
                        case "multipart":
                            N[e] = t, t || (N.send_file_name = !0);
                            break;
                        case "unique_names":
                            N[e] = t, t && (N.send_file_name = !0);
                            break;
                        case "filters":
                            o.typeOf(t) === "array" && (t = {
                                mime_types: t
                            }), n ? o.extend(N.filters, t) : N.filters = t, t.mime_types && (N.filters.mime_types.regexp = function(e) {
                                var t = [];
                                return o.each(e, function(e) {
                                    o.each(e.extensions.split(/,/), function(e) {
                                        /^\s*\*\s*$/.test(e) ? t.push("\\.*") : t.push("\\." + e.replace(new RegExp("[" + "/^$.*+?|()[]{}\\".replace(/./g, "\\$&") + "]", "g"), "\\$&"))
                                    })
                                }), new RegExp("(" + t.join("|") + ")$", "i")
                            }(N.filters.mime_types));
                            break;
                        case "resize":
                            n ? o.extend(N.resize, t, {
                                enabled: !0
                            }) : N.resize = t;
                            break;
                        case "prevent_duplicates":
                            N.prevent_duplicates = N.filters.prevent_duplicates = !!t;
                            break;
                        case "browse_button":
                        case "drop_element":
                            t = o.get(t);
                        case "container":
                        case "runtimes":
                        case "multi_selection":
                        case "flash_swf_url":
                        case "silverlight_xap_url":
                            N[e] = t, n || (a = !0);
                            break;
                        default:
                            N[e] = t
                    }
                    n || u.trigger("OptionChanged", e, t, r)
                }
                var u = this,
                    a = !1;
                typeof e == "object" ? o.each(e, function(e, t) {
                    s(t, e, i)
                }) : s(e, n, i), i ? (N.required_features = r(o.extend({}, N)), k = r(o.extend({}, N, {
                    required_features: !0
                }))) : a && (u.trigger("Destroy"), p.call(u, N, function(e) {
                    e ? (u.runtime = t.Runtime.getInfo(l()).type, u.trigger("Init", {
                        runtime: u.runtime
                    }), u.trigger("PostInit")) : u.trigger("Error", {
                        code: o.INIT_ERROR,
                        message: o.translate("Init error.")
                    })
                }))
            }

            function m(e, t) {
                if (e.settings.unique_names) {
                    var n = t.name.match(/\.([^.]+)$/),
                        r = "part";
                    n && (r = n[1]), t.target_name = t.id + "." + r
                }
            }

            function g(e, n) {
                function r() {
                    f-- > 0 ? i(s, 1e3) : (n.loaded = h, e.trigger("Error", {
                        code: o.HTTP_ERROR,
                        message: o.translate("HTTP Error."),
                        file: n,
                        response: D.responseText,
                        status: D.status,
                        responseHeaders: D.getAllResponseHeaders()
                    }))
                }

                function s() {
                    var c, d, v = {},
                        m;
                    if (n.status !== o.UPLOADING || e.state === o.STOPPED) return;
                    e.settings.send_file_name && (v.name = n.target_name || n.name), a && l.chunks && p.size > a ? (m = Math.min(a, p.size - h), c = p.slice(h, h + m)) : (m = p.size, c = p), a && l.chunks && (e.settings.send_chunk_number ? (v.chunk = Math.ceil(h / a), v.chunks = Math.ceil(p.size / a)) : (v.offset = h, v.total = p.size)), D = new t.XMLHttpRequest, D.upload && (D.upload.onprogress = function(t) {
                        n.loaded = Math.min(n.size, h + t.loaded), e.trigger("UploadProgress", n)
                    }), D.onload = function() {
                        if (D.status >= 400) {
                            r();
                            return
                        }
                        f = e.settings.max_retries, m < p.size ? (c.destroy(), h += m, n.loaded = Math.min(h, p.size), e.trigger("ChunkUploaded", n, {
                            offset: n.loaded,
                            total: p.size,
                            response: D.responseText,
                            status: D.status,
                            responseHeaders: D.getAllResponseHeaders()
                        }), t.Env.browser === "Android Browser" && e.trigger("UploadProgress", n)) : n.loaded = n.size, c = d = null, !h || h >= p.size ? (n.size != n.origSize && (p.destroy(), p = null), e.trigger("UploadProgress", n), n.status = o.DONE, e.trigger("FileUploaded", n, {
                            response: D.responseText,
                            status: D.status,
                            responseHeaders: D.getAllResponseHeaders()
                        })) : i(s, 1)
                    }, D.onerror = function() {
                        r()
                    }, D.onloadend = function() {
                        this.destroy(), D = null
                    }, e.settings.multipart && l.multipart ? (D.open("post", u, !0), o.each(e.settings.headers, function(e, t) {
                        D.setRequestHeader(t, e)
                    }), d = new t.FormData, o.each(o.extend(v, e.settings.multipart_params), function(e, t) {
                        d.append(t, e)
                    }), d.append(e.settings.file_data_name, c), D.send(d, {
                        runtime_order: e.settings.runtimes,
                        required_caps: e.settings.required_features,
                        preferred_caps: k,
                        swf_url: e.settings.flash_swf_url,
                        xap_url: e.settings.silverlight_xap_url
                    })) : (u = o.buildUrl(e.settings.url, o.extend(v, e.settings.multipart_params)), D.open("post", u, !0), D.setRequestHeader("Content-Type", "application/octet-stream"), o.each(e.settings.headers, function(e, t) {
                        D.setRequestHeader(t, e)
                    }), D.send(c, {
                        runtime_order: e.settings.runtimes,
                        required_caps: e.settings.required_features,
                        preferred_caps: k,
                        swf_url: e.settings.flash_swf_url,
                        xap_url: e.settings.silverlight_xap_url
                    }))
                }
                var u = e.settings.url,
                    a = e.settings.chunk_size,
                    f = e.settings.max_retries,
                    l = e.features,
                    h = 0,
                    p;
                n.loaded && (h = n.loaded = a ? a * Math.floor(n.loaded / a) : 0), p = n.getSource(), e.settings.resize.enabled && c(p, "send_binary_string") && !!~t.inArray(p.type, ["image/jpeg", "image/png"]) ? d.call(this, p, e.settings.resize, function(e) {
                    p = e, n.size = e.size, s()
                }) : s()
            }

            function y(e, t) {
                a(t)
            }

            function b(e) {
                if (e.state == o.STARTED) O = +(new Date);
                else if (e.state == o.STOPPED)
                    for (var t = e.files.length - 1; t >= 0; t--) e.files[t].status == o.UPLOADING && (e.files[t].status = o.QUEUED, f())
            }

            function w() {
                D && D.abort()
            }

            function E(e) {
                f(), i(function() {
                    u.call(e)
                }, 1)
            }

            function S(e, t) {
                t.code === o.INIT_ERROR ? e.destroy() : t.code === o.HTTP_ERROR && (t.file.status = o.FAILED, a(t.file), e.state == o.STARTED && (e.trigger("CancelUpload"), i(function() {
                    u.call(e)
                }, 1)))
            }

            function x(e) {
                e.stop(), o.each(C, function(e) {
                    e.destroy()
                }), C = [], L.length && (o.each(L, function(e) {
                    e.destroy()
                }), L = []), A.length && (o.each(A, function(e) {
                    e.destroy()
                }), A = []), k = {}, _ = !1, O = D = null, M.reset()
            }
            var T = o.guid(),
                N, C = [],
                k = {},
                L = [],
                A = [],
                O, M, _ = !1,
                D;
            N = {
                runtimes: t.Runtime.order,
                max_retries: 0,
                chunk_size: 0,
                multipart: !0,
                multi_selection: !0,
                file_data_name: "file",
                flash_swf_url: "js/Moxie.swf",
                silverlight_xap_url: "js/Moxie.xap",
                filters: {
                    mime_types: [],
                    prevent_duplicates: !1,
                    max_file_size: 0
                },
                resize: {
                    enabled: !1,
                    preserve_headers: !0,
                    crop: !1
                },
                send_file_name: !0,
                send_chunk_number: !0
            }, v.call(this, e, null, !0), M = new o.QueueProgress, o.extend(this, {
                id: T,
                uid: T,
                state: o.STOPPED,
                features: {},
                runtime: null,
                files: C,
                settings: N,
                total: M,
                init: function() {
                    var e = this;
                    typeof N.preinit == "function" ? N.preinit(e) : o.each(N.preinit, function(t, n) {
                        e.bind(n, t)
                    }), h.call(this);
                    if (!N.browse_button || !N.url) {
                        this.trigger("Error", {
                            code: o.INIT_ERROR,
                            message: o.translate("Init error.")
                        });
                        return
                    }
                    p.call(this, N, function(n) {
                        typeof N.init == "function" ? N.init(e) : o.each(N.init, function(t, n) {
                            e.bind(n, t)
                        }), n ? (e.runtime = t.Runtime.getInfo(l()).type, e.trigger("Init", {
                            runtime: e.runtime
                        }), e.trigger("PostInit")) : e.trigger("Error", {
                            code: o.INIT_ERROR,
                            message: o.translate("Init error.")
                        })
                    })
                },
                setOption: function(e, t) {
                    v.call(this, e, t, !this.runtime)
                },
                getOption: function(e) {
                    return e ? N[e] : N
                },
                refresh: function() {
                    L.length && o.each(L, function(e) {
                        e.trigger("Refresh")
                    }), this.trigger("Refresh")
                },
                start: function() {
                    this.state != o.STARTED && (this.state = o.STARTED, this.trigger("StateChanged"), u.call(this))
                },
                stop: function() {
                    this.state != o.STOPPED && (this.state = o.STOPPED, this.trigger("StateChanged"), this.trigger("CancelUpload"))
                },
                disableBrowse: function() {
                    _ = arguments[0] !== n ? arguments[0] : !0, L.length && o.each(L, function(e) {
                        e.disable(_)
                    }), this.trigger("DisableBrowse", _)
                },
                getFile: function(e) {
                    var t;
                    for (t = C.length - 1; t >= 0; t--)
                        if (C[t].id === e) return C[t]
                },
                addFile: function(e, n) {
                    function r(e, n) {
                        var r = [];
                        t.each(a.settings.filters, function(t, n) {
                            s[n] && r.push(function(r) {
                                s[n].call(a, t, e, function(e) {
                                    r(!e)
                                })
                            })
                        }), t.inSeries(r, n)
                    }

                    function u(e) {
                        var s = t.typeOf(e);
                        if (e instanceof t.File) {
                            if (!e.ruid && !e.isDetached()) {
                                if (!h) return !1;
                                e.ruid = h, e.connectRuntime(h)
                            }
                            u(new o.File(e))
                        } else e instanceof t.Blob ? (u(e.getSource()), e.destroy()) : e instanceof o.File ? (n && (e.name = n), f.push(function(t) {
                            r(e, function(n) {
                                n || (C.push(e), c.push(e), a.trigger("FileFiltered", e)), i(t, 1)
                            })
                        })) : t.inArray(s, ["file", "blob"]) !== -1 ? u(new t.File(null, e)) : s === "node" && t.typeOf(e.files) === "filelist" ? t.each(e.files, u) : s === "array" && (n = null, t.each(e, u))
                    }
                    var a = this,
                        f = [],
                        c = [],
                        h;
                    h = l(), u(e), f.length && t.inSeries(f, function() {
                        c.length && a.trigger("FilesAdded", c)
                    })
                },
                removeFile: function(e) {
                    var t = typeof e == "string" ? e : e.id;
                    for (var n = C.length - 1; n >= 0; n--)
                        if (C[n].id === t) return this.splice(n, 1)[0]
                },
                splice: function(e, t) {
                    var r = C.splice(e === n ? 0 : e, t === n ? C.length : t),
                        i = !1;
                    return this.state == o.STARTED && (o.each(r, function(e) {
                        if (e.status === o.UPLOADING) return i = !0, !1
                    }), i && this.stop()), this.trigger("FilesRemoved", r), o.each(r, function(e) {
                        e.destroy()
                    }), i && this.start(), r
                },
                dispatchEvent: function(e) {
                    var t, n, r;
                    e = e.toLowerCase(), t = this.hasEventListener(e);
                    if (t) {
                        t.sort(function(e, t) {
                            return t.priority - e.priority
                        }), n = [].slice.call(arguments), n.shift(), n.unshift(this);
                        for (var i = 0; i < t.length; i++)
                            if (t[i].fn.apply(t[i].scope, n) === !1) return !1
                    }
                    return !0
                },
                bind: function(e, t, n, r) {
                    o.Uploader.prototype.bind.call(this, e, t, r, n)
                },
                destroy: function() {
                    this.trigger("Destroy"), N = M = null, this.unbindAll()
                }
            })
        }, o.Uploader.prototype = t.EventTarget.instance, o.File = function() {
            function e(e) {
                o.extend(this, {
                    id: o.guid(),
                    name: e.name || e.fileName,
                    type: e.type || "",
                    size: e.size || e.fileSize,
                    origSize: e.size || e.fileSize,
                    loaded: 0,
                    percent: 0,
                    status: o.QUEUED,
                    lastModifiedDate: e.lastModifiedDate || (new Date).toLocaleString(),
                    getNative: function() {
                        var e = this.getSource().getSource();
                        return t.inArray(t.typeOf(e), ["blob", "file"]) !== -1 ? e : null
                    },
                    getSource: function() {
                        return n[this.id] ? n[this.id] : null
                    },
                    destroy: function() {
                        var e = this.getSource();
                        e && (e.destroy(), delete n[this.id])
                    }
                }), n[this.id] = e
            }
            var n = {};
            return e
        }(), o.QueueProgress = function() {
            var e = this;
            e.size = 0, e.loaded = 0, e.uploaded = 0, e.failed = 0, e.queued = 0, e.percent = 0, e.bytesPerSec = 0, e.reset = function() {
                e.size = e.loaded = e.uploaded = e.failed = e.queued = e.percent = e.bytesPerSec = 0
            }
        }, e.plupload = o
    }(window, mOxie), define("fileupload", function() {}), sendAjax.DEFAULT = {
        type: "post",
        complete: function() {},
        beforeSend: function() {},
        data: {}
    }, define("utility", function() {}), define("header", ["jquery", "encryption"], function(e, t) {
        var n = {
                login: t.Encryption("/99dayin/index.php/api/login"),
                sigin: t.Encryption("/99dayin/index.php/api/signup"),
                Linklogin: "",
                username: t.Encryption("/99dayin/index.php/api/verifySmsCode"),
                CF_url: t.Encryption("/99dayin/index.php/api/sendSmsCode"),
                upload: "",
                logout: t.Encryption("/99dayin/index.php/api/logout")
            },
            r = {
                $username: e(".login-account"),
                $ps: e(".login-ps"),
                $iden: e(".login-choice>div.active"),
                title: e(".title-btn"),
                detail: e(".detail-btn"),
                print_btn: e(".print-btn"),
                getText: function(t) {
                    return t.val()
                },
                getIden: function() {
                    var t = this.$iden;
                    return t.hasClass("user-login") ? 0 : 1
                },
                linkSuccess: function(t) {
                    t.success
                },
                afterLogin: function(t) {
                    this.print_btn.attr("href", n.upload), this.title.html('<a class="name">' + t + "/a>")
                },
                beforeLogin: function() {
                    this.print_btn.attr("href", "javascript:void(0)"), this.title.html('<span class="login" id="login" data-content="登录">登录</span><span>|</span><span class="signin" id="signin" data-content="注册">注册</span>')
                },
                init: function() {
                    var r = this;
                    e(".login-btn").on("click", function() {
                        var e = r.getText(r.$username),
                            t = r.getText(r.$ps),
                            i = r.getIden();
                        sendAjax({
                            url: n.login,
                            dataType: "json",
                            data: {
                                username: e,
                                ps: t,
                                iden: i
                            },
                            success: function(t) {
                                t.success ? window.location.href = "./" : prompt.changeInfo(t.msg)
                            }
                        })
                    }), e(".QQ-login").on("click", function() {
                        sendAjax({
                            url: n.Linklogin,
                            data: {
                                login_method: "QQ"
                            },
                            success: r.linkSuccess
                        })
                    }), this.title.on("click", function(t) {
                        var n = e(t.target);
                        n.hasClass("name") ? toggleShow(r.detail) : n.hasClass("login") ? detectShow(login_frame, !0) : n.hasClass("signin") && detectShow(signin_frame, !1)
                    }), this.detail.on("click", function(t) {
                        var r = e(t.target);
                        r.hasClass("logout") && sendAjax({
                            url: n.logout,
                            success: function(t) {
                                t.success && (window.location.href = "/")
                            }
                        })
                    }), this.print_btn.on("click", function() {
                        e(this).attr("data-log") == 0 && detectShow(login_frame, !0)
                    })
                }
            };
        r.init()
    });
var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
    }
}();
require.config({
    baseUrl: "./js",
    paths: {
        jquery: "lib/jQuery",
        iscroll: "lib/iscroll",
        modal: "lib/jquery.simplemodal",
        prompt: "entry/function/prompt",
        utility: "entry/utility/utility",
        header: "entry/header",
        fileupload: "lib/plupload.full.min",
        md5: "lib/spark-md5.min",
        encryption: "entry/function/encryption"
    }
}), require(["jquery", "iscroll", "prompt", "encryption", "md5", "fileupload", "utility", "header"], function(e, t, n, r, i) {
    function s(e, t) {
        e.css("transform", "translateX(" + t + "px)")
    }

    function o(e, t) {
        e.addClass(t).siblings().removeClass(t)
    }

    function u(e, t) {
        e.show(), t.hide()
    }

    function l(e) {
        var t = e.url,
            n = e.message,
            r = n === undefined ? function() {} : n,
            i = e.open,
            s = i === undefined ? function() {} : i,
            o = e.error,
            u = o === undefined ? function() {} : o,
            a = undefined;
        return !window.EventSource || (a = new EventSource(t)), console.log(123), a.addEventListener("open", s, !1), a.addEventListener("message", function(e) {
            console.log("e is " + e + " and data is " + e.data), r(e)
        }, !1), a.addEventListener("error", u, !1), a
    }

    function h() {
        v.forEach(function(e) {
            setTimeout(function() {
                e.refresh()
            }, 100)
        })
    }

    function d(t) {
        var n = new Array;
        return t.each(function() {
            var t = new IScroll("#" + e(this).attr("id"), {
                scrollbars: !0,
                mouseWheel: !0,
                interactiveScrollbars: !0,
                shrinkScrollbars: "scale",
                useTransition: !0
            });
            n.push(t)
        }), n
    }
    n = new n.Prompt({
        prompt: e(".prompt")
    });
    var a = function() {
            function e() {
                _classCallCheck(this, e)
            }
            return _createClass(e, [{
                key: "getClass",
                value: function(t) {
                    var n = undefined;
                    switch (t) {
                        case "doc":
                            n = "logo-word";
                            break;
                        case "docx":
                            n = "logo-word";
                            break;
                        case "ppt":
                            n = "logo-ppt";
                            break;
                        case "pdf":
                            n = "logo-pdf";
                            break;
                        case "xls":
                            n = "logo-excel";
                            break;
                        default:
                            n = "logo-ppt"
                    }
                    return n
                }
            }]), e
        }(),
        f = new a,
        c = {
            flag: 0,
            source: undefined,
            message: function(t) {
                console.log("event is " + t + " and data is " + t.data), c.flag = t.data
            },
            init: function() {
                this.source = l({
                    url: p.SSEurl,
                    message: c.message
                })
            },
            show: function() {
                n.goPay(this.flag)
            },
            close: function() {
                this.source.close()
            }
        };
    e.ajaxSetup({
        dataType: "json"
    });
    var p = {
        getToken: r.Encryption("../index.php/api/getUploadToken"),
        getOfficial: "",
        pay: "",
        search: "",
        confirm: r.Encryption("../index.php/api/uploadACK"),
        remove: r.Encryption("../index.php/api/deleteCartItem"),
        confirmHash: r.Encryption("../index.php/api/confirmMD5"),
        SSEurl: r.Encryption("../index.php/api/getProgress")
    };
    e(".fn-choice").on("click", function(t) {
        var n = e(t.target),
            r = n.attr("id"),
            i = e(".color-block"),
            a = e("#choose-base"),
            f = e("#file-content");
        r === "upolad-files" ? (o(n, "active"), s(i, 0), u(f, a)) : r === "base-choose" && (o(n, "active"), s(i, 169), u(a, f))
    }), e(".shopping-btn").on("click", function(t) {
        var n = e(t.target),
            r = n.attr("id"),
            i = e(".scroll-frame");
        i.show(), r === "show-shopping" ? s(i, 0) : r === "show-store" && s(i, -141)
    });
    var v = d(e(".container")),
        m = new plupload.Uploader({
            runtimes: "html5,flash,silverlight,html4",
            browse_button: "container-upload",
            success_action_status: "200",
            container: document.getElementById("file-content"),
            url: "http://99dayin.oss-cn-hangzhou.aliyuncs.com",
            filters: {
                mime_types: [{
                    title: "document",
                    extensions: "txt,doc,ppt,docx,wps,rtf,pdf,xls"
                }],
                max_file_size: "100mb",
                prevent_duplicates: !0
            },
            init: {
                FileFiltered: function(t, n) {
                    g.fileCheck(t, {
                        file: n,
                        "native": n.getNative()
                    })
                },
                UploadProgress: function(t, r) {
                    console.log(r.percent), n.loading(r.percent), r.percent === 100 && g.flag++, g.flag === 2 && (n.changeInfo("上传成功~"), g.flag = 0)
                },
                FileUploaded: function(t, r, i) {
                    i.status == 200 ? (g.addFileToken(r), c.init()) : n.changeInfo("上传失败!")
                }
            }
        });
    m.init();
    var g = {
        shopping: e(".files-content"),
        addBtn: e(".article-content"),
        delete_btn: e("#scroller"),
        content_a: e("#container-upload"),
        flag: 0,
        init: function() {
            var n = this;
            this.addBtn.on("click", function(t) {
                var r = e(t.target);
                if (r.hasClass("add-btn")) {
                    var i = r.attr("data-area"),
                        s = r.attr("data-mark"),
                        o = r.parents(".article-item"),
                        u = document.createElement("li");
                    w.alreadyAdd(r), u.innerHTML = o.html().replace("already-add", "logo-error"), n.shopping.append(u), n.changeInputText(1), h()
                }
            }), this.delete_btn.on("click", function(t) {
                var r = e(t.target);
                r.hasClass("logo-error") && n.deleteItem(r)
            })
        },
        fillUpload: function(t, n) {
            var r = n.dir,
                i = n.signature,
                s = n.accessid,
                o = n.policy,
                u = n.host,
                a = {
                    key: r + "${filename}",
                    policy: o,
                    OSSAccessKeyId: s,
                    success_action_status: "200",
                    signature: i
                };
            t.setOption({
                url: u,
                multipart_params: a
            }), t.start()
        },
        getAjax: function(r) {
            n.changeInfo("文件上传中~");
            var i = this;
            e.ajax({
                url: p.getToken,
                type: "POST",
                contentType: "application/json",
                dataType: "json"
            }).done(function(e) {
                i.fillUpload(r, e)
            })
        },
        changeInputText: function(t) {
            var n = Number(this.content_a.attr("data-num"));
            console.log(Number(n + t) < 0), Number(n + t) < 0 || this.content_a.attr("data-num", n + t)
        },
        addFiles: function(n) {
            console.log(n.hash);
            var r = new Date,
                i = r.getFullYear() + "/" + (r.getMonth() + 1) + "/" + r.getDate(),
                s = plupload.formatSize(n.size),
                o = n.name,
                u = n.hash,
                a = o.lastIndexOf("."),
                l = document.createElement("li"),
                c = f.getClass(o.substring(a + 1));
            l.innerHTML = '<i class="file-logo ' + c + '"></i>' + '<p class="file-header">' + o.substring(0, a) + "</p>" + '<p>上传时间:<span class="upload-time">' + i + "</span>" + "大小:<span>" + String(s).toUpperCase() + "</span></p>" + '<i class="logo-error" data-mark=' + u + " data-area=self></i>", e(l).attr("data-type", c), this.shopping.append(l), v.forEach(function(e) {
                setTimeout(function() {
                    e.refresh()
                }, 100)
            }), this.changeInputText(1)
        },
        addFileToken: function(r) {
            e.ajax({
                url: p.confirm,
                type: "POST",
                dataType: "JSON",
                contentType: "application/json",
                data: JSON.stringify({
                    filename: r.name,
                    fileMD5: r.hash
                })
            }).then(function(e) {
                e.success ? g.addFiles(r) : n.changeInfo("对不起您的浏览器抽风了")
            })
        },
        deleteItem: function(r) {
            var i = r.parents("li"),
                s = r.attr("data-mark"),
                o = this;
            e.ajax({
                url: p.remove,
                type: "POST",
                dataType: "json",
                data: {
                    fileMD5: s
                }
            }).then(function(e) {
                e.success ? (n.changeInfo("删除成功!"), y.removeLi(i), o.changeInputText(-1)) : n.changeInfo("删除失败!")
            })
        },
        fileCheck: function(t, r) {
            var s = r.file,
                o = r.native,
                u = new FileReader,
                a = File.prototype.mozSlice || File.prototype.webkitSlice || File.prototype.slice,
                f = 2097152,
                l = Math.ceil(o.size / f),
                c = 0,
                h = new i,
                p, d;
            console.log("native is " + o + " and percent is " + Math.ceil(100 * c / l) + "\n                and chunks is " + l + "\n                and currentChunk is " + c + "\n                "), u.onload = function(e) {
                h.appendBinary(e.target.result), c++, n.detactInfo(Math.ceil(100 * c / l)), c < l ? (p = c * f, d = p + f >= o.size ? o.size : p + f, u.readAsBinaryString(a.call(o, p, d))) : g.confirm(t, h.end(), s)
            }, p = c * f, d = p + f >= o.size ? o.size : p + f, u.readAsBinaryString(a.call(o, p, d))
        },
        confirm: function(n, r, i) {
            i.hash = r, e.ajax({
                url: p.confirmHash,
                type: "POST",
                dataType: "json",
                contentType: "application/json",
                data: JSON.stringify({
                    fileMD5: r
                })
            }).then(function(e) {
                e.success ? (n.removeFile(i), g.addFileToken(i)) : g.getAjax(n)
            })
        }
    };
    g.init();
    var y = {
        showError: function(t) {
            t.find(".logo-error").show()
        },
        hideError: function(t) {
            t.find(".logo-error").hide()
        },
        removeLi: function(t) {
            t.detach(), h()
        }
    };
    e(".files-content").on({
        mouseover: function(n) {
            var r = n.target.tagName === "LI" ? e(n.target) : e(n.target).parents("li");
            y.showError(r)
        },
        mouseout: function(n) {
            var r = n.target.tagName === "LI" ? e(n.target) : e(n.target).parents("li");
            y.hideError(r)
        }
    });
    var b = {
        arrow: "",
        store: e("#store"),
        downArrow: function() {
            this.arrow.removeClass("shopping-uparrow").addClass("shopping-downarrow"), this.moveUpStore()
        },
        upArrow: function() {
            this.arrow.removeClass("shopping-downarrow").addClass("shopping-uparrow"), this.moveDownStore()
        },
        moveUpStore: function() {
            this.store.css("transform", "translateY(-347px)")
        },
        moveDownStore: function() {
            this.store.css("transform", "translateY(0px)")
        },
        judgeDir: function(t) {
            this.arrow = t;
            var n = t;
            n.hasClass("shopping-uparrow") ? this.downArrow() : n.hasClass("shopping-downarrow") && this.upArrow()
        }
    };
    e("#shopping-arrow").on("click", function() {
        b.judgeDir(e(this))
    });
    var w = {
        content: e("#article-content"),
        changeGroup: e("#another-group"),
        articles: e(".articles"),
        alreadyAdd: function(t) {
            t.removeClass("add-btn").addClass("already-add")
        },
        addBtn: function(t) {
            t.removeClass("add-btn").addClass("already-add")
        },
        changeContent: function(t) {
            var n = 0;
            switch (t) {
                case 1:
                    n = 0;
                    break;
                case 2:
                    n = -821.84;
                    break;
                case 3:
                    n = -1643.968
            }
            s(this.content, n)
        },
        toggleActive: function(n) {
            var r = e(n.target),
                i;
            r[0].tagName === "I" && (i = Number(r.attr("data-order")), this.changeContent(i), o(r, "active"))
        },
        addItem: function(n, r) {
            console.log(n), console.log(r);
            var i = document.createElement("div"),
                s = r.name,
                o = r.date,
                u = r.size,
                a = r.area,
                l = r.mark,
                c = r.type,
                h = f.getClass(c);
            html = '<i class="file-logo ' + h + '"></i>' + '<p class="file-header">' + s + "</p>" + '<p>上传时间:<span class="upload-time">' + o + "</span>" + "大小:<span>" + u + "</span></p>" + '<i class="add-btn" data-mark=' + l + '" data-area="' + a + '"></i>', i.innerHTML = html, e(i).addClass("article-item"), n.append(i)
        },
        repeatAdd: function(t, n) {
            var r = 0;
            for (var i = 0; i < 3; i++) {
                this.articles.eq(i)[0].innerHTML = "";
                for (var s = r; s < r + n; s++) this.addItem(this.articles.eq(i), t[s]);
                r += n
            }
        },
        init: function() {
            var t = this;
            this.changeGroup.on("click", function() {
                sendAjax({
                    url: p.getOfficial,
                    success: function(n) {
                        if (n.success) {
                            var r = n.files,
                                i = r.length,
                                s = Math.floor(i / 3);
                            t.repeatAdd(r, s)
                        }
                    }
                })
            })
        }
    };
    w.init(), e("#base-header").on("click", function(t) {
        var n = e(t.target);
        n[0].tagName === "BUTTON" && o(n, "active")
    }), e("#pagination").on({
        mouseover: function(t) {
            w.toggleActive(t)
        },
        mouseout: function(t) {
            w.toggleActive(t)
        }
    });
    var E = {
        pay_btn: e("#show-shopping"),
        init: function() {
            this.pay_btn.on("click", function() {
                var t = [],
                    r = e("#scroller").find(".logo-error");
                r.each(function(e) {
                    t.push(e.attr("data-mark"))
                });
                var i = t.length;
                i === 0 ? n.changeInfo("购物车为0,不能结算!") : i > 0 && (c.flag === 0 ? window.location.href = "./confirm" : c.show())
            })
        }
    };
    E.init()
}), define("entry/upload", function() {});
