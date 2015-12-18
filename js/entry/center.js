!function (a, b) {
    'object' == typeof module && 'object' == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
        if (!a.document)
            throw new Error('jQuery requires a window with a document');
        return b(a);
    } : b(a);
}('undefined' != typeof window ? window : this, function (a, b) {
    var c = [], d = c.slice, e = c.concat, f = c.push, g = c.indexOf, h = {}, i = h.toString, j = h.hasOwnProperty, k = {}, l = a.document, m = '2.1.4', n = function (a, b) {
            return new n.fn.init(a, b);
        }, o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, p = /^-ms-/, q = /-([\da-z])/gi, r = function (a, b) {
            return b.toUpperCase();
        };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: '',
        length: 0,
        toArray: function () {
            return d.call(this);
        },
        get: function (a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this);
        },
        pushStack: function (a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b;
        },
        each: function (a, b) {
            return n.each(this, a, b);
        },
        map: function (a) {
            return this.pushStack(n.map(this, function (b, c) {
                return a.call(b, c, b);
            }));
        },
        slice: function () {
            return this.pushStack(d.apply(this, arguments));
        },
        first: function () {
            return this.eq(0);
        },
        last: function () {
            return this.eq(-1);
        },
        eq: function (a) {
            var b = this.length, c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
        },
        end: function () {
            return this.prevObject || this.constructor(null);
        },
        push: f,
        sort: c.sort,
        splice: c.splice
    }, n.extend = n.fn.extend = function () {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ('boolean' == typeof g && (j = g, g = arguments[h] || {}, h++), 'object' == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (a = arguments[h]))
                for (b in a)
                    c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g;
    }, n.extend({
        expando: 'jQuery' + (m + Math.random()).replace(/\D/g, ''),
        isReady: !0,
        error: function (a) {
            throw new Error(a);
        },
        noop: function () {
        },
        isFunction: function (a) {
            return 'function' === n.type(a);
        },
        isArray: Array.isArray,
        isWindow: function (a) {
            return null != a && a === a.window;
        },
        isNumeric: function (a) {
            return !n.isArray(a) && a - parseFloat(a) + 1 >= 0;
        },
        isPlainObject: function (a) {
            return 'object' !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, 'isPrototypeOf') ? !1 : !0;
        },
        isEmptyObject: function (a) {
            var b;
            for (b in a)
                return !1;
            return !0;
        },
        type: function (a) {
            return null == a ? a + '' : 'object' == typeof a || 'function' == typeof a ? h[i.call(a)] || 'object' : typeof a;
        },
        globalEval: function (a) {
            var b, c = eval;
            a = n.trim(a), a && (1 === a.indexOf('use strict') ? (b = l.createElement('script'), b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a));
        },
        camelCase: function (a) {
            return a.replace(p, 'ms-').replace(q, r);
        },
        nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
        },
        each: function (a, b, c) {
            var d, e = 0, f = a.length, g = s(a);
            if (c) {
                if (g) {
                    for (; f > e; e++)
                        if (d = b.apply(a[e], c), d === !1)
                            break;
                } else
                    for (e in a)
                        if (d = b.apply(a[e], c), d === !1)
                            break;
            } else if (g) {
                for (; f > e; e++)
                    if (d = b.call(a[e], e, a[e]), d === !1)
                        break;
            } else
                for (e in a)
                    if (d = b.call(a[e], e, a[e]), d === !1)
                        break;
            return a;
        },
        trim: function (a) {
            return null == a ? '' : (a + '').replace(o, '');
        },
        makeArray: function (a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, 'string' == typeof a ? [a] : a) : f.call(c, a)), c;
        },
        inArray: function (a, b, c) {
            return null == b ? -1 : g.call(b, a, c);
        },
        merge: function (a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++)
                a[e++] = b[d];
            return a.length = e, a;
        },
        grep: function (a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
                d = !b(a[f], f), d !== h && e.push(a[f]);
            return e;
        },
        map: function (a, b, c) {
            var d, f = 0, g = a.length, h = s(a), i = [];
            if (h)
                for (; g > f; f++)
                    d = b(a[f], f, c), null != d && i.push(d);
            else
                for (f in a)
                    d = b(a[f], f, c), null != d && i.push(d);
            return e.apply([], i);
        },
        guid: 1,
        proxy: function (a, b) {
            var c, e, f;
            return 'string' == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), f = function () {
                return a.apply(b || this, e.concat(d.call(arguments)));
            }, f.guid = a.guid = a.guid || n.guid++, f) : void 0;
        },
        now: Date.now,
        support: k
    }), n.each('Boolean Number String Function Array Date RegExp Object Error'.split(' '), function (a, b) {
        h['[object ' + b + ']'] = b.toLowerCase();
    });
    function s(a) {
        var b = 'length' in a && a.length, c = n.type(a);
        return 'function' === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : 'array' === c || 0 === b || 'number' == typeof b && b > 0 && b - 1 in a;
    }
    var t = function (a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = 'sizzle' + 1 * new Date(), v = a.document, w = 0, x = 0, y = ha(), z = ha(), A = ha(), B = function (a, b) {
                return a === b && (l = !0), 0;
            }, C = 1 << 31, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice, J = function (a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b)
                        return c;
                return -1;
            }, K = 'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped', L = '[\\x20\\t\\r\\n\\f]', M = '(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+', N = M.replace('w', 'w#'), O = '\\[' + L + '*(' + M + ')(?:' + L + '*([*^$|!~]?=)' + L + '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' + N + '))|)' + L + '*\\]', P = ':(' + M + ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' + O + ')*)|.*)\\)|)', Q = new RegExp(L + '+', 'g'), R = new RegExp('^' + L + '+|((?:^|[^\\\\])(?:\\\\.)*)' + L + '+$', 'g'), S = new RegExp('^' + L + '*,' + L + '*'), T = new RegExp('^' + L + '*([>+~]|' + L + ')' + L + '*'), U = new RegExp('=' + L + '*([^\\]\'"]*?)' + L + '*\\]', 'g'), V = new RegExp(P), W = new RegExp('^' + N + '$'), X = {
                ID: new RegExp('^#(' + M + ')'),
                CLASS: new RegExp('^\\.(' + M + ')'),
                TAG: new RegExp('^(' + M.replace('w', 'w*') + ')'),
                ATTR: new RegExp('^' + O),
                PSEUDO: new RegExp('^' + P),
                CHILD: new RegExp('^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' + L + '*(even|odd|(([+-]|)(\\d*)n|)' + L + '*(?:([+-]|)' + L + '*(\\d+)|))' + L + '*\\)|)', 'i'),
                bool: new RegExp('^(?:' + K + ')$', 'i'),
                needsContext: new RegExp('^' + L + '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' + L + '*((?:-\\d)?\\d*)' + L + '*\\)|)(?=[^-]|$)', 'i')
            }, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, aa = /[+~]/, ba = /'|\\/g, ca = new RegExp('\\\\([\\da-f]{1,6}' + L + '?|(' + L + ')|.)', 'ig'), da = function (a, b, c) {
                var d = '0x' + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
            }, ea = function () {
                m();
            };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType;
        } catch (fa) {
            H = {
                apply: E.length ? function (a, b) {
                    G.apply(a, I.call(b));
                } : function (a, b) {
                    var c = a.length, d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1;
                }
            };
        }
        function ga(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, 'string' != typeof a || !a || 1 !== k && 9 !== k && 11 !== k)
                return d;
            if (!e && p) {
                if (11 !== k && (f = _.exec(a)))
                    if (j = f[1]) {
                        if (9 === k) {
                            if (h = b.getElementById(j), !h || !h.parentNode)
                                return d;
                            if (h.id === j)
                                return d.push(h), d;
                        } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j)
                            return d.push(h), d;
                    } else {
                        if (f[2])
                            return H.apply(d, b.getElementsByTagName(a)), d;
                        if ((j = f[3]) && c.getElementsByClassName)
                            return H.apply(d, b.getElementsByClassName(j)), d;
                    }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u, w = b, x = 1 !== k && a, 1 === k && 'object' !== b.nodeName.toLowerCase()) {
                        o = g(a), (r = b.getAttribute('id')) ? s = r.replace(ba, '\\$&') : b.setAttribute('id', s), s = '[id=\'' + s + '\'] ', l = o.length;
                        while (l--)
                            o[l] = s + ra(o[l]);
                        w = aa.test(a) && pa(b.parentNode) || b, x = o.join(',');
                    }
                    if (x)
                        try {
                            return H.apply(d, w.querySelectorAll(x)), d;
                        } catch (y) {
                        } finally {
                            r || b.removeAttribute('id');
                        }
                }
            }
            return i(a.replace(R, '$1'), b, d, e);
        }
        function ha() {
            var a = [];
            function b(c, e) {
                return a.push(c + ' ') > d.cacheLength && delete b[a.shift()], b[c + ' '] = e;
            }
            return b;
        }
        function ia(a) {
            return a[u] = !0, a;
        }
        function ja(a) {
            var b = n.createElement('div');
            try {
                return !!a(b);
            } catch (c) {
                return !1;
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null;
            }
        }
        function ka(a, b) {
            var c = a.split('|'), e = a.length;
            while (e--)
                d.attrHandle[c[e]] = b;
        }
        function la(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d)
                return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b)
                        return -1;
            return a ? 1 : -1;
        }
        function ma(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return 'input' === c && b.type === a;
            };
        }
        function na(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ('input' === c || 'button' === c) && b.type === a;
            };
        }
        function oa(a) {
            return ia(function (b) {
                return b = +b, ia(function (c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--)
                        c[e = f[g]] && (c[e] = !(d[e] = c[e]));
                });
            });
        }
        function pa(a) {
            return a && 'undefined' != typeof a.getElementsByTagName && a;
        }
        c = ga.support = {}, f = ga.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? 'HTML' !== b.nodeName : !1;
        }, m = ga.setDocument = function (a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener('unload', ea, !1) : e.attachEvent && e.attachEvent('onunload', ea)), p = !f(g), c.attributes = ja(function (a) {
                return a.className = 'i', !a.getAttribute('className');
            }), c.getElementsByTagName = ja(function (a) {
                return a.appendChild(g.createComment('')), !a.getElementsByTagName('*').length;
            }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = ja(function (a) {
                return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length;
            }), c.getById ? (d.find.ID = function (a, b) {
                if ('undefined' != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : [];
                }
            }, d.filter.ID = function (a) {
                var b = a.replace(ca, da);
                return function (a) {
                    return a.getAttribute('id') === b;
                };
            }) : (delete d.find.ID, d.filter.ID = function (a) {
                var b = a.replace(ca, da);
                return function (a) {
                    var c = 'undefined' != typeof a.getAttributeNode && a.getAttributeNode('id');
                    return c && c.value === b;
                };
            }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
                return 'undefined' != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
            } : function (a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ('*' === a) {
                    while (c = f[e++])
                        1 === c.nodeType && d.push(c);
                    return d;
                }
                return f;
            }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
                return p ? b.getElementsByClassName(a) : void 0;
            }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (ja(function (a) {
                o.appendChild(a).innerHTML = '<a id=\'' + u + '\'></a><select id=\'' + u + '-\f]\' msallowcapture=\'\'><option selected=\'\'></option></select>', a.querySelectorAll('[msallowcapture^=\'\']').length && q.push('[*^$]=' + L + '*(?:\'\'|"")'), a.querySelectorAll('[selected]').length || q.push('\\[' + L + '*(?:value|' + K + ')'), a.querySelectorAll('[id~=' + u + '-]').length || q.push('~='), a.querySelectorAll(':checked').length || q.push(':checked'), a.querySelectorAll('a#' + u + '+*').length || q.push('.#.+[+~]');
            }), ja(function (a) {
                var b = g.createElement('input');
                b.setAttribute('type', 'hidden'), a.appendChild(b).setAttribute('name', 'D'), a.querySelectorAll('[name=d]').length && q.push('name' + L + '*[*^$|!~]?='), a.querySelectorAll(':enabled').length || q.push(':enabled', ':disabled'), a.querySelectorAll('*,:x'), q.push(',.*:');
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
                c.disconnectedMatch = s.call(a, 'div'), s.call(a, '[s!=\'\']:x'), r.push('!=', P);
            }), q = q.length && new RegExp(q.join('|')), r = r.length && new RegExp(r.join('|')), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
            } : function (a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a)
                            return !0;
                return !1;
            }, B = b ? function (a, b) {
                if (a === b)
                    return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1);
            } : function (a, b) {
                if (a === b)
                    return l = !0, 0;
                var c, d = 0, e = a.parentNode, f = b.parentNode, h = [a], i = [b];
                if (!e || !f)
                    return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f)
                    return la(a, b);
                c = a;
                while (c = c.parentNode)
                    h.unshift(c);
                c = b;
                while (c = c.parentNode)
                    i.unshift(c);
                while (h[d] === i[d])
                    d++;
                return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0;
            }, g) : n;
        }, ga.matches = function (a, b) {
            return ga(a, null, null, b);
        }, ga.matchesSelector = function (a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, '=\'$1\']'), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b)))
                try {
                    var d = s.call(a, b);
                    if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)
                        return d;
                } catch (e) {
                }
            return ga(b, n, null, [a]).length > 0;
        }, ga.contains = function (a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b);
        }, ga.attr = function (a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()], f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
        }, ga.error = function (a) {
            throw new Error('Syntax error, unrecognized expression: ' + a);
        }, ga.uniqueSort = function (a) {
            var b, d = [], e = 0, f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++])
                    b === a[f] && (e = d.push(f));
                while (e--)
                    a.splice(d[e], 1);
            }
            return k = null, a;
        }, e = ga.getText = function (a) {
            var b, c = '', d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ('string' == typeof a.textContent)
                        return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)
                        c += e(a);
                } else if (3 === f || 4 === f)
                    return a.nodeValue;
            } else
                while (b = a[d++])
                    c += e(b);
            return c;
        }, d = ga.selectors = {
            cacheLength: 50,
            createPseudo: ia,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                '>': {
                    dir: 'parentNode',
                    first: !0
                },
                ' ': { dir: 'parentNode' },
                '+': {
                    dir: 'previousSibling',
                    first: !0
                },
                '~': { dir: 'previousSibling' }
            },
            preFilter: {
                ATTR: function (a) {
                    return a[1] = a[1].replace(ca, da), a[3] = (a[3] || a[4] || a[5] || '').replace(ca, da), '~=' === a[2] && (a[3] = ' ' + a[3] + ' '), a.slice(0, 4);
                },
                CHILD: function (a) {
                    return a[1] = a[1].toLowerCase(), 'nth' === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ('even' === a[3] || 'odd' === a[3])), a[5] = +(a[7] + a[8] || 'odd' === a[3])) : a[3] && ga.error(a[0]), a;
                },
                PSEUDO: function (a) {
                    var b, c = !a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || '' : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(')', c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
                }
            },
            filter: {
                TAG: function (a) {
                    var b = a.replace(ca, da).toLowerCase();
                    return '*' === a ? function () {
                        return !0;
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b;
                    };
                },
                CLASS: function (a) {
                    var b = y[a + ' '];
                    return b || (b = new RegExp('(^|' + L + ')' + a + '(' + L + '|$)')) && y(a, function (a) {
                        return b.test('string' == typeof a.className && a.className || 'undefined' != typeof a.getAttribute && a.getAttribute('class') || '');
                    });
                },
                ATTR: function (a, b, c) {
                    return function (d) {
                        var e = ga.attr(d, a);
                        return null == e ? '!=' === b : b ? (e += '', '=' === b ? e === c : '!=' === b ? e !== c : '^=' === b ? c && 0 === e.indexOf(c) : '*=' === b ? c && e.indexOf(c) > -1 : '$=' === b ? c && e.slice(-c.length) === c : '~=' === b ? (' ' + e.replace(Q, ' ') + ' ').indexOf(c) > -1 : '|=' === b ? e === c || e.slice(0, c.length + 1) === c + '-' : !1) : !0;
                    };
                },
                CHILD: function (a, b, c, d, e) {
                    var f = 'nth' !== a.slice(0, 3), g = 'last' !== a.slice(-4), h = 'of-type' === b;
                    return 1 === d && 0 === e ? function (a) {
                        return !!a.parentNode;
                    } : function (b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? 'nextSibling' : 'previousSibling', q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p])
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)
                                            return !1;
                                    o = p = 'only' === a && !o && 'nextSibling';
                                }
                                return !0;
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [
                                            w,
                                            n,
                                            m
                                        ];
                                        break;
                                    }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w)
                                m = j[1];
                            else
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [
                                            w,
                                            m
                                        ]), l === b))
                                        break;
                            return m -= e, m === d || m % d === 0 && m / d >= 0;
                        }
                    };
                },
                PSEUDO: function (a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error('unsupported pseudo: ' + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [
                        a,
                        a,
                        '',
                        b
                    ], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
                        var d, f = e(a, b), g = f.length;
                        while (g--)
                            d = J(a, f[g]), a[d] = !(c[d] = f[g]);
                    }) : function (a) {
                        return e(a, 0, c);
                    }) : e;
                }
            },
            pseudos: {
                not: ia(function (a) {
                    var b = [], c = [], d = h(a.replace(R, '$1'));
                    return d[u] ? ia(function (a, b, c, e) {
                        var f, g = d(a, null, e, []), h = a.length;
                        while (h--)
                            (f = g[h]) && (a[h] = !(b[h] = f));
                    }) : function (a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
                    };
                }),
                has: ia(function (a) {
                    return function (b) {
                        return ga(a, b).length > 0;
                    };
                }),
                contains: ia(function (a) {
                    return a = a.replace(ca, da), function (b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
                    };
                }),
                lang: ia(function (a) {
                    return W.test(a || '') || ga.error('unsupported lang: ' + a), a = a.replace(ca, da).toLowerCase(), function (b) {
                        var c;
                        do
                            if (c = p ? b.lang : b.getAttribute('xml:lang') || b.getAttribute('lang'))
                                return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + '-');
                        while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1;
                    };
                }),
                target: function (b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id;
                },
                root: function (a) {
                    return a === o;
                },
                focus: function (a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
                },
                enabled: function (a) {
                    return a.disabled === !1;
                },
                disabled: function (a) {
                    return a.disabled === !0;
                },
                checked: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return 'input' === b && !!a.checked || 'option' === b && !!a.selected;
                },
                selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
                },
                empty: function (a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6)
                            return !1;
                    return !0;
                },
                parent: function (a) {
                    return !d.pseudos.empty(a);
                },
                header: function (a) {
                    return Z.test(a.nodeName);
                },
                input: function (a) {
                    return Y.test(a.nodeName);
                },
                button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return 'input' === b && 'button' === a.type || 'button' === b;
                },
                text: function (a) {
                    var b;
                    return 'input' === a.nodeName.toLowerCase() && 'text' === a.type && (null == (b = a.getAttribute('type')) || 'text' === b.toLowerCase());
                },
                first: oa(function () {
                    return [0];
                }),
                last: oa(function (a, b) {
                    return [b - 1];
                }),
                eq: oa(function (a, b, c) {
                    return [0 > c ? c + b : c];
                }),
                even: oa(function (a, b) {
                    for (var c = 0; b > c; c += 2)
                        a.push(c);
                    return a;
                }),
                odd: oa(function (a, b) {
                    for (var c = 1; b > c; c += 2)
                        a.push(c);
                    return a;
                }),
                lt: oa(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;)
                        a.push(d);
                    return a;
                }),
                gt: oa(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;)
                        a.push(d);
                    return a;
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            })
            d.pseudos[b] = ma(b);
        for (b in {
                submit: !0,
                reset: !0
            })
            d.pseudos[b] = na(b);
        function qa() {
        }
        qa.prototype = d.filters = d.pseudos, d.setFilters = new qa(), g = ga.tokenize = function (a, b) {
            var c, e, f, g, h, i, j, k = z[a + ' '];
            if (k)
                return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(R, ' ')
                }), h = h.slice(c.length));
                for (g in d.filter)
                    !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                        value: c,
                        type: g,
                        matches: e
                    }), h = h.slice(c.length));
                if (!c)
                    break;
            }
            return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
        };
        function ra(a) {
            for (var b = 0, c = a.length, d = ''; c > b; b++)
                d += a[b].value;
            return d;
        }
        function sa(a, b, c) {
            var d = b.dir, e = c && 'parentNode' === d, f = x++;
            return b.first ? function (b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e)
                        return a(b, c, f);
            } : function (b, c, g) {
                var h, i, j = [
                        w,
                        f
                    ];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g))
                            return !0;
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f)
                                return j[2] = h[2];
                            if (i[d] = j, j[2] = a(b, c, g))
                                return !0;
                        }
            };
        }
        function ta(a) {
            return a.length > 1 ? function (b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d))
                        return !1;
                return !0;
            } : a[0];
        }
        function ua(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++)
                ga(a, b[d], c);
            return c;
        }
        function va(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
                (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g;
        }
        function wa(a, b, c, d, e, f) {
            return d && !d[u] && (d = wa(d)), e && !e[u] && (e = wa(e, f)), ia(function (f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || ua(b || '*', h.nodeType ? [h] : h, []), q = !a || !f && b ? p : va(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = va(r, n), d(j, [], h, i), k = j.length;
                    while (k--)
                        (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)
                                (l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i);
                        }
                        k = r.length;
                        while (k--)
                            (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
                    }
                } else
                    r = va(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r);
            });
        }
        function xa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[' '], i = g ? 1 : 0, k = sa(function (a) {
                        return a === b;
                    }, h, !0), l = sa(function (a) {
                        return J(b, a) > -1;
                    }, h, !0), m = [function (a, c, d) {
                            var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                            return b = null, e;
                        }]; f > i; i++)
                if (c = d.relative[a[i].type])
                    m = [sa(ta(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type])
                                break;
                        return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({ value: ' ' === a[i - 2].type ? '*' : '' })).replace(R, '$1'), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a));
                    }
                    m.push(c);
                }
            return ta(m);
        }
        function ya(a, b) {
            var c = b.length > 0, e = a.length > 0, f = function (f, g, h, i, k) {
                    var l, m, o, p = 0, q = '0', r = f && [], s = [], t = j, u = f || e && d.find.TAG('*', k), v = w += null == t ? 1 : Math.random() || 0.1, x = u.length;
                    for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                        if (e && l) {
                            m = 0;
                            while (o = a[m++])
                                if (o(l, g, h)) {
                                    i.push(l);
                                    break;
                                }
                            k && (w = v);
                        }
                        c && ((l = !o && l) && p--, f && r.push(l));
                    }
                    if (p += q, c && q !== p) {
                        m = 0;
                        while (o = b[m++])
                            o(r, s, g, h);
                        if (f) {
                            if (p > 0)
                                while (q--)
                                    r[q] || s[q] || (s[q] = F.call(i));
                            s = va(s);
                        }
                        H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i);
                    }
                    return k && (w = v, j = t), r;
                };
            return c ? ia(f) : f;
        }
        return h = ga.compile = function (a, b) {
            var c, d = [], e = [], f = A[a + ' '];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--)
                    f = xa(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, ya(e, d)), f.selector = a;
            }
            return f;
        }, i = ga.select = function (a, b, e, f) {
            var i, j, k, l, m, n = 'function' == typeof a && a, o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && 'ID' === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0], !b)
                        return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length);
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type])
                        break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && ra(j), !a)
                            return H.apply(e, f), e;
                        break;
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b), e;
        }, c.sortStable = u.split('').sort(B).join('') === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
            return 1 & a.compareDocumentPosition(n.createElement('div'));
        }), ja(function (a) {
            return a.innerHTML = '<a href=\'#\'></a>', '#' === a.firstChild.getAttribute('href');
        }) || ka('type|href|height|width', function (a, b, c) {
            return c ? void 0 : a.getAttribute(b, 'type' === b.toLowerCase() ? 1 : 2);
        }), c.attributes && ja(function (a) {
            return a.innerHTML = '<input/>', a.firstChild.setAttribute('value', ''), '' === a.firstChild.getAttribute('value');
        }) || ka('value', function (a, b, c) {
            return c || 'input' !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
        }), ja(function (a) {
            return null == a.getAttribute('disabled');
        }) || ka(K, function (a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
        }), ga;
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[':'] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = n.expr.match.needsContext, v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, w = /^.[^:#\[\.,]*$/;
    function x(a, b, c) {
        if (n.isFunction(b))
            return n.grep(a, function (a, d) {
                return !!b.call(a, d, a) !== c;
            });
        if (b.nodeType)
            return n.grep(a, function (a) {
                return a === b !== c;
            });
        if ('string' == typeof b) {
            if (w.test(b))
                return n.filter(b, a, c);
            b = n.filter(b, a);
        }
        return n.grep(a, function (a) {
            return g.call(b, a) >= 0 !== c;
        });
    }
    n.filter = function (a, b, c) {
        var d = b[0];
        return c && (a = ':not(' + a + ')'), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
            return 1 === a.nodeType;
        }));
    }, n.fn.extend({
        find: function (a) {
            var b, c = this.length, d = [], e = this;
            if ('string' != typeof a)
                return this.pushStack(n(a).filter(function () {
                    for (b = 0; c > b; b++)
                        if (n.contains(e[b], this))
                            return !0;
                }));
            for (b = 0; c > b; b++)
                n.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + ' ' + a : a, d;
        },
        filter: function (a) {
            return this.pushStack(x(this, a || [], !1));
        },
        not: function (a) {
            return this.pushStack(x(this, a || [], !0));
        },
        is: function (a) {
            return !!x(this, 'string' == typeof a && u.test(a) ? n(a) : a || [], !1).length;
        }
    });
    var y, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = n.fn.init = function (a, b) {
            var c, d;
            if (!a)
                return this;
            if ('string' == typeof a) {
                if (c = '<' === a[0] && '>' === a[a.length - 1] && a.length >= 3 ? [
                        null,
                        a,
                        null
                    ] : z.exec(a), !c || !c[1] && b)
                    return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
                if (c[1]) {
                    if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), v.test(c[1]) && n.isPlainObject(b))
                        for (c in b)
                            n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                    return this;
                }
                return d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = l, this.selector = a, this;
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? 'undefined' != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this));
        };
    A.prototype = n.fn, y = n(l);
    var B = /^(?:parents|prev(?:Until|All))/, C = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    n.extend({
        dir: function (a, b, c) {
            var d = [], e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType)
                if (1 === a.nodeType) {
                    if (e && n(a).is(c))
                        break;
                    d.push(a);
                }
            return d;
        },
        sibling: function (a, b) {
            for (var c = []; a; a = a.nextSibling)
                1 === a.nodeType && a !== b && c.push(a);
            return c;
        }
    }), n.fn.extend({
        has: function (a) {
            var b = n(a, this), c = b.length;
            return this.filter(function () {
                for (var a = 0; c > a; a++)
                    if (n.contains(this, b[a]))
                        return !0;
            });
        },
        closest: function (a, b) {
            for (var c, d = 0, e = this.length, f = [], g = u.test(a) || 'string' != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break;
                    }
            return this.pushStack(f.length > 1 ? n.unique(f) : f);
        },
        index: function (a) {
            return a ? 'string' == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function (a, b) {
            return this.pushStack(n.unique(n.merge(this.get(), n(a, b))));
        },
        addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
        }
    });
    function D(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType);
        return a;
    }
    n.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null;
        },
        parents: function (a) {
            return n.dir(a, 'parentNode');
        },
        parentsUntil: function (a, b, c) {
            return n.dir(a, 'parentNode', c);
        },
        next: function (a) {
            return D(a, 'nextSibling');
        },
        prev: function (a) {
            return D(a, 'previousSibling');
        },
        nextAll: function (a) {
            return n.dir(a, 'nextSibling');
        },
        prevAll: function (a) {
            return n.dir(a, 'previousSibling');
        },
        nextUntil: function (a, b, c) {
            return n.dir(a, 'nextSibling', c);
        },
        prevUntil: function (a, b, c) {
            return n.dir(a, 'previousSibling', c);
        },
        siblings: function (a) {
            return n.sibling((a.parentNode || {}).firstChild, a);
        },
        children: function (a) {
            return n.sibling(a.firstChild);
        },
        contents: function (a) {
            return a.contentDocument || n.merge([], a.childNodes);
        }
    }, function (a, b) {
        n.fn[a] = function (c, d) {
            var e = n.map(this, b, c);
            return 'Until' !== a.slice(-5) && (d = c), d && 'string' == typeof d && (e = n.filter(d, e)), this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e);
        };
    });
    var E = /\S+/g, F = {};
    function G(a) {
        var b = F[a] = {};
        return n.each(a.match(E) || [], function (a, c) {
            b[c] = !0;
        }), b;
    }
    n.Callbacks = function (a) {
        a = 'string' == typeof a ? F[a] || G(a) : n.extend({}, a);
        var b, c, d, e, f, g, h = [], i = !a.once && [], j = function (l) {
                for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++)
                    if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                        b = !1;
                        break;
                    }
                d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable());
            }, k = {
                add: function () {
                    if (h) {
                        var c = h.length;
                        !function g(b) {
                            n.each(b, function (b, c) {
                                var d = n.type(c);
                                'function' === d ? a.unique && k.has(c) || h.push(c) : c && c.length && 'string' !== d && g(c);
                            });
                        }(arguments), d ? f = h.length : b && (e = c, j(b));
                    }
                    return this;
                },
                remove: function () {
                    return h && n.each(arguments, function (a, b) {
                        var c;
                        while ((c = n.inArray(b, h, c)) > -1)
                            h.splice(c, 1), d && (f >= c && f--, g >= c && g--);
                    }), this;
                },
                has: function (a) {
                    return a ? n.inArray(a, h) > -1 : !(!h || !h.length);
                },
                empty: function () {
                    return h = [], f = 0, this;
                },
                disable: function () {
                    return h = i = b = void 0, this;
                },
                disabled: function () {
                    return !h;
                },
                lock: function () {
                    return i = void 0, b || k.disable(), this;
                },
                locked: function () {
                    return !i;
                },
                fireWith: function (a, b) {
                    return !h || c && !i || (b = b || [], b = [
                        a,
                        b.slice ? b.slice() : b
                    ], d ? i.push(b) : j(b)), this;
                },
                fire: function () {
                    return k.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!c;
                }
            };
        return k;
    }, n.extend({
        Deferred: function (a) {
            var b = [
                    [
                        'resolve',
                        'done',
                        n.Callbacks('once memory'),
                        'resolved'
                    ],
                    [
                        'reject',
                        'fail',
                        n.Callbacks('once memory'),
                        'rejected'
                    ],
                    [
                        'notify',
                        'progress',
                        n.Callbacks('memory')
                    ]
                ], c = 'pending', d = {
                    state: function () {
                        return c;
                    },
                    always: function () {
                        return e.done(arguments).fail(arguments), this;
                    },
                    then: function () {
                        var a = arguments;
                        return n.Deferred(function (c) {
                            n.each(b, function (b, f) {
                                var g = n.isFunction(a[b]) && a[b];
                                e[f[1]](function () {
                                    var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + 'With'](this === d ? c.promise() : this, g ? [a] : arguments);
                                });
                            }), a = null;
                        }).promise();
                    },
                    promise: function (a) {
                        return null != a ? n.extend(a, d) : d;
                    }
                }, e = {};
            return d.pipe = d.then, n.each(b, function (a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function () {
                    c = h;
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
                    return e[f[0] + 'With'](this === e ? d : this, arguments), this;
                }, e[f[0] + 'With'] = g.fireWith;
            }), d.promise(e), a && a.call(e, e), e;
        },
        when: function (a) {
            var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && n.isFunction(a.promise) ? e : 0, g = 1 === f ? a : n.Deferred(), h = function (a, b, c) {
                    return function (e) {
                        b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
                    };
                }, i, j, k;
            if (e > 1)
                for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++)
                    c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise();
        }
    });
    var H;
    n.fn.ready = function (a) {
        return n.ready.promise().done(a), this;
    }, n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (a) {
            a ? n.readyWait++ : n.ready(!0);
        },
        ready: function (a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler('ready'), n(l).off('ready'))));
        }
    });
    function I() {
        l.removeEventListener('DOMContentLoaded', I, !1), a.removeEventListener('load', I, !1), n.ready();
    }
    n.ready.promise = function (b) {
        return H || (H = n.Deferred(), 'complete' === l.readyState ? setTimeout(n.ready) : (l.addEventListener('DOMContentLoaded', I, !1), a.addEventListener('load', I, !1))), H.promise(b);
    }, n.ready.promise();
    var J = n.access = function (a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ('object' === n.type(c)) {
            e = !0;
            for (h in c)
                n.access(a, b, h, c[h], !0, f, g);
        } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
                return j.call(n(a), c);
            })), b))
            for (; i > h; h++)
                b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    };
    n.acceptData = function (a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
    };
    function K() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function () {
                return {};
            }
        }), this.expando = n.expando + K.uid++;
    }
    K.uid = 1, K.accepts = n.acceptData, K.prototype = {
        key: function (a) {
            if (!K.accepts(a))
                return 0;
            var b = {}, c = a[this.expando];
            if (!c) {
                c = K.uid++;
                try {
                    b[this.expando] = { value: c }, Object.defineProperties(a, b);
                } catch (d) {
                    b[this.expando] = c, n.extend(a, b);
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c;
        },
        set: function (a, b, c) {
            var d, e = this.key(a), f = this.cache[e];
            if ('string' == typeof b)
                f[b] = c;
            else if (n.isEmptyObject(f))
                n.extend(this.cache[e], b);
            else
                for (d in b)
                    f[d] = b[d];
            return f;
        },
        get: function (a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b];
        },
        access: function (a, b, c) {
            var d;
            return void 0 === b || b && 'string' == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b);
        },
        remove: function (a, b) {
            var c, d, e, f = this.key(a), g = this.cache[f];
            if (void 0 === b)
                this.cache[f] = {};
            else {
                n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [
                    b,
                    e
                ] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length;
                while (c--)
                    delete g[d[c]];
            }
        },
        hasData: function (a) {
            return !n.isEmptyObject(this.cache[a[this.expando]] || {});
        },
        discard: function (a) {
            a[this.expando] && delete this.cache[a[this.expando]];
        }
    };
    var L = new K(), M = new K(), N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, O = /([A-Z])/g;
    function P(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = 'data-' + b.replace(O, '-$1').toLowerCase(), c = a.getAttribute(d), 'string' == typeof c) {
                try {
                    c = 'true' === c ? !0 : 'false' === c ? !1 : 'null' === c ? null : +c + '' === c ? +c : N.test(c) ? n.parseJSON(c) : c;
                } catch (e) {
                }
                M.set(a, b, c);
            } else
                c = void 0;
        return c;
    }
    n.extend({
        hasData: function (a) {
            return M.hasData(a) || L.hasData(a);
        },
        data: function (a, b, c) {
            return M.access(a, b, c);
        },
        removeData: function (a, b) {
            M.remove(a, b);
        },
        _data: function (a, b, c) {
            return L.access(a, b, c);
        },
        _removeData: function (a, b) {
            L.remove(a, b);
        }
    }), n.fn.extend({
        data: function (a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, 'hasDataAttrs'))) {
                    c = g.length;
                    while (c--)
                        g[c] && (d = g[c].name, 0 === d.indexOf('data-') && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
                    L.set(f, 'hasDataAttrs', !0);
                }
                return e;
            }
            return 'object' == typeof a ? this.each(function () {
                M.set(this, a);
            }) : J(this, function (b) {
                var c, d = n.camelCase(a);
                if (f && void 0 === b) {
                    if (c = M.get(f, a), void 0 !== c)
                        return c;
                    if (c = M.get(f, d), void 0 !== c)
                        return c;
                    if (c = P(f, d, void 0), void 0 !== c)
                        return c;
                } else
                    this.each(function () {
                        var c = M.get(this, d);
                        M.set(this, d, b), -1 !== a.indexOf('-') && void 0 !== c && M.set(this, a, b);
                    });
            }, null, b, arguments.length > 1, null, !0);
        },
        removeData: function (a) {
            return this.each(function () {
                M.remove(this, a);
            });
        }
    }), n.extend({
        queue: function (a, b, c) {
            var d;
            return a ? (b = (b || 'fx') + 'queue', d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0;
        },
        dequeue: function (a, b) {
            b = b || 'fx';
            var c = n.queue(a, b), d = c.length, e = c.shift(), f = n._queueHooks(a, b), g = function () {
                    n.dequeue(a, b);
                };
            'inprogress' === e && (e = c.shift(), d--), e && ('fx' === b && c.unshift('inprogress'), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
        },
        _queueHooks: function (a, b) {
            var c = b + 'queueHooks';
            return L.get(a, c) || L.access(a, c, {
                empty: n.Callbacks('once memory').add(function () {
                    L.remove(a, [
                        b + 'queue',
                        c
                    ]);
                })
            });
        }
    }), n.fn.extend({
        queue: function (a, b) {
            var c = 2;
            return 'string' != typeof a && (b = a, a = 'fx', c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a), 'fx' === a && 'inprogress' !== c[0] && n.dequeue(this, a);
            });
        },
        dequeue: function (a) {
            return this.each(function () {
                n.dequeue(this, a);
            });
        },
        clearQueue: function (a) {
            return this.queue(a || 'fx', []);
        },
        promise: function (a, b) {
            var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function () {
                    --d || e.resolveWith(f, [f]);
                };
            'string' != typeof a && (b = a, a = void 0), a = a || 'fx';
            while (g--)
                c = L.get(f[g], a + 'queueHooks'), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b);
        }
    });
    var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, R = [
            'Top',
            'Right',
            'Bottom',
            'Left'
        ], S = function (a, b) {
            return a = b || a, 'none' === n.css(a, 'display') || !n.contains(a.ownerDocument, a);
        }, T = /^(?:checkbox|radio)$/i;
    !function () {
        var a = l.createDocumentFragment(), b = a.appendChild(l.createElement('div')), c = l.createElement('input');
        c.setAttribute('type', 'radio'), c.setAttribute('checked', 'checked'), c.setAttribute('name', 't'), b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = '<textarea>x</textarea>', k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
    }();
    var U = 'undefined';
    k.focusinBubbles = 'onfocusin' in a;
    var V = /^key/, W = /^(?:mouse|pointer|contextmenu)|click/, X = /^(?:focusinfocus|focusoutblur)$/, Y = /^([^.]*)(?:\.(.+)|)$/;
    function Z() {
        return !0;
    }
    function $() {
        return !1;
    }
    function _() {
        try {
            return l.activeElement;
        } catch (a) {
        }
    }
    n.event = {
        global: {},
        add: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.get(a);
            if (r) {
                c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) {
                    return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0;
                }), b = (b || '').match(E) || [''], j = b.length;
                while (j--)
                    h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || '').split('.').sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
                        type: o,
                        origType: q,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && n.expr.match.needsContext.test(e),
                        namespace: p.join('.')
                    }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0);
            }
        },
        remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.hasData(a) && L.get(a);
            if (r && (i = r.events)) {
                b = (b || '').match(E) || [''], j = b.length;
                while (j--)
                    if (h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || '').split('.').sort(), o) {
                        l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp('(^|\\.)' + p.join('\\.(?:.*\\.|)') + '(\\.|$)'), g = f = m.length;
                        while (f--)
                            k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ('**' !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o]);
                    } else
                        for (o in i)
                            n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(i) && (delete r.handle, L.remove(a, 'events'));
            }
        },
        trigger: function (b, c, d, e) {
            var f, g, h, i, k, m, o, p = [d || l], q = j.call(b, 'type') ? b.type : b, r = j.call(b, 'namespace') ? b.namespace.split('.') : [];
            if (g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf('.') >= 0 && (r = q.split('.'), q = r.shift(), r.sort()), k = q.indexOf(':') < 0 && 'on' + q, b = b[n.expando] ? b : new n.Event(q, 'object' == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join('.'), b.namespace_re = b.namespace ? new RegExp('(^|\\.)' + r.join('\\.(?:.*\\.|)') + '(\\.|$)') : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, e || !o.trigger || o.trigger.apply(d, c) !== !1)) {
                if (!e && !o.noBubble && !n.isWindow(d)) {
                    for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode)
                        p.push(g), h = g;
                    h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a);
                }
                f = 0;
                while ((g = p[f++]) && !b.isPropagationStopped())
                    b.type = f > 1 ? i : o.bindType || q, m = (L.get(g, 'events') || {})[b.type] && L.get(g, 'handle'), m && m.apply(g, c), m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result === !1 && b.preventDefault());
                return b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), b.result;
            }
        },
        dispatch: function (a) {
            a = n.event.fix(a);
            var b, c, e, f, g, h = [], i = d.call(arguments), j = (L.get(this, 'events') || {})[a.type] || [], k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())
                        (!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()));
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result;
            }
        },
        handlers: function (a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || 'click' !== a.type))
                for (; i !== this; i = i.parentNode || this)
                    if (i.disabled !== !0 || 'click' !== a.type) {
                        for (d = [], c = 0; h > c; c++)
                            f = b[c], e = f.selector + ' ', void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        });
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g;
        },
        props: 'altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(' '),
        fixHooks: {},
        keyHooks: {
            props: 'char charCode key keyCode'.split(' '),
            filter: function (a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
            }
        },
        mouseHooks: {
            props: 'button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement'.split(' '),
            filter: function (a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a;
            }
        },
        fix: function (a) {
            if (a[n.expando])
                return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;
            while (b--)
                c = d[b], a[c] = f[c];
            return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a;
        },
        special: {
            load: { noBubble: !0 },
            focus: {
                trigger: function () {
                    return this !== _() && this.focus ? (this.focus(), !1) : void 0;
                },
                delegateType: 'focusin'
            },
            blur: {
                trigger: function () {
                    return this === _() && this.blur ? (this.blur(), !1) : void 0;
                },
                delegateType: 'focusout'
            },
            click: {
                trigger: function () {
                    return 'checkbox' === this.type && this.click && n.nodeName(this, 'input') ? (this.click(), !1) : void 0;
                },
                _default: function (a) {
                    return n.nodeName(a.target, 'a');
                }
            },
            beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
                }
            }
        },
        simulate: function (a, b, c, d) {
            var e = n.extend(new n.Event(), c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
        }
    }, n.removeEvent = function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1);
    }, n.Event = function (a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void (this[n.expando] = !0)) : new n.Event(a, b);
    }, n.Event.prototype = {
        isDefaultPrevented: $,
        isPropagationStopped: $,
        isImmediatePropagationStopped: $,
        preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault();
        },
        stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation();
        },
        stopImmediatePropagation: function () {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation();
        }
    }, n.each({
        mouseenter: 'mouseover',
        mouseleave: 'mouseout',
        pointerenter: 'pointerover',
        pointerleave: 'pointerout'
    }, function (a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function (a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
            }
        };
    }), k.focusinBubbles || n.each({
        focus: 'focusin',
        blur: 'focusout'
    }, function (a, b) {
        var c = function (a) {
            n.event.simulate(b, a.target, n.event.fix(a), !0);
        };
        n.event.special[b] = {
            setup: function () {
                var d = this.ownerDocument || this, e = L.access(d, b);
                e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1);
            },
            teardown: function () {
                var d = this.ownerDocument || this, e = L.access(d, b) - 1;
                e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b));
            }
        };
    }), n.fn.extend({
        on: function (a, b, c, d, e) {
            var f, g;
            if ('object' == typeof a) {
                'string' != typeof b && (c = c || b, b = void 0);
                for (g in a)
                    this.on(g, b, c, a[g], e);
                return this;
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ('string' == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1)
                d = $;
            else if (!d)
                return this;
            return 1 === e && (f = d, d = function (a) {
                return n().off(a), f.apply(this, arguments);
            }, d.guid = f.guid || (f.guid = n.guid++)), this.each(function () {
                n.event.add(this, a, d, c, b);
            });
        },
        one: function (a, b, c, d) {
            return this.on(a, b, c, d, 1);
        },
        off: function (a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj)
                return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + '.' + d.namespace : d.origType, d.selector, d.handler), this;
            if ('object' == typeof a) {
                for (e in a)
                    this.off(e, b, a[e]);
                return this;
            }
            return (b === !1 || 'function' == typeof b) && (c = b, b = void 0), c === !1 && (c = $), this.each(function () {
                n.event.remove(this, a, c, b);
            });
        },
        trigger: function (a, b) {
            return this.each(function () {
                n.event.trigger(a, b, this);
            });
        },
        triggerHandler: function (a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0;
        }
    });
    var aa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, ba = /<([\w:]+)/, ca = /<|&#?\w+;/, da = /<(?:script|style|link)/i, ea = /checked\s*(?:[^=]|=\s*.checked.)/i, fa = /^$|\/(?:java|ecma)script/i, ga = /^true\/(.*)/, ha = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ia = {
            option: [
                1,
                '<select multiple=\'multiple\'>',
                '</select>'
            ],
            thead: [
                1,
                '<table>',
                '</table>'
            ],
            col: [
                2,
                '<table><colgroup>',
                '</colgroup></table>'
            ],
            tr: [
                2,
                '<table><tbody>',
                '</tbody></table>'
            ],
            td: [
                3,
                '<table><tbody><tr>',
                '</tr></tbody></table>'
            ],
            _default: [
                0,
                '',
                ''
            ]
        };
    ia.optgroup = ia.option, ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead, ia.th = ia.td;
    function ja(a, b) {
        return n.nodeName(a, 'table') && n.nodeName(11 !== b.nodeType ? b : b.firstChild, 'tr') ? a.getElementsByTagName('tbody')[0] || a.appendChild(a.ownerDocument.createElement('tbody')) : a;
    }
    function ka(a) {
        return a.type = (null !== a.getAttribute('type')) + '/' + a.type, a;
    }
    function la(a) {
        var b = ga.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute('type'), a;
    }
    function ma(a, b) {
        for (var c = 0, d = a.length; d > c; c++)
            L.set(a[c], 'globalEval', !b || L.get(b[c], 'globalEval'));
    }
    function na(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; d > c; c++)
                        n.event.add(b, e, j[e][c]);
            }
            M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i));
        }
    }
    function oa(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || '*') : a.querySelectorAll ? a.querySelectorAll(b || '*') : [];
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c;
    }
    function pa(a, b) {
        var c = b.nodeName.toLowerCase();
        'input' === c && T.test(a.type) ? b.checked = a.checked : ('input' === c || 'textarea' === c) && (b.defaultValue = a.defaultValue);
    }
    n.extend({
        clone: function (a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = n.contains(a.ownerDocument, a);
            if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (g = oa(h), f = oa(a), d = 0, e = f.length; e > d; d++)
                    pa(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || oa(a), g = g || oa(h), d = 0, e = f.length; e > d; d++)
                        na(f[d], g[d]);
                else
                    na(a, h);
            return g = oa(h, 'script'), g.length > 0 && ma(g, !i && oa(a, 'script')), h;
        },
        buildFragment: function (a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++)
                if (e = a[m], e || 0 === e)
                    if ('object' === n.type(e))
                        n.merge(l, e.nodeType ? [e] : e);
                    else if (ca.test(e)) {
                        f = f || k.appendChild(b.createElement('div')), g = (ba.exec(e) || [
                            '',
                            ''
                        ])[1].toLowerCase(), h = ia[g] || ia._default, f.innerHTML = h[1] + e.replace(aa, '<$1></$2>') + h[2], j = h[0];
                        while (j--)
                            f = f.lastChild;
                        n.merge(l, f.childNodes), f = k.firstChild, f.textContent = '';
                    } else
                        l.push(b.createTextNode(e));
            k.textContent = '', m = 0;
            while (e = l[m++])
                if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), f = oa(k.appendChild(e), 'script'), i && ma(f), c)) {
                    j = 0;
                    while (e = f[j++])
                        fa.test(e.type || '') && c.push(e);
                }
            return k;
        },
        cleanData: function (a) {
            for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                if (n.acceptData(c) && (e = c[L.expando], e && (b = L.cache[e]))) {
                    if (b.events)
                        for (d in b.events)
                            f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                    L.cache[e] && delete L.cache[e];
                }
                delete M.cache[c[M.expando]];
            }
        }
    }), n.fn.extend({
        text: function (a) {
            return J(this, function (a) {
                return void 0 === a ? n.text(this) : this.empty().each(function () {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a);
                });
            }, null, a, arguments.length);
        },
        append: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = ja(this, a);
                    b.appendChild(a);
                }
            });
        },
        prepend: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = ja(this, a);
                    b.insertBefore(a, b.firstChild);
                }
            });
        },
        before: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this);
            });
        },
        after: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
            });
        },
        remove: function (a, b) {
            for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++)
                b || 1 !== c.nodeType || n.cleanData(oa(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && ma(oa(c, 'script')), c.parentNode.removeChild(c));
            return this;
        },
        empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++)
                1 === a.nodeType && (n.cleanData(oa(a, !1)), a.textContent = '');
            return this;
        },
        clone: function (a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                return n.clone(this, a, b);
            });
        },
        html: function (a) {
            return J(this, function (a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a && 1 === b.nodeType)
                    return b.innerHTML;
                if ('string' == typeof a && !da.test(a) && !ia[(ba.exec(a) || [
                        '',
                        ''
                    ])[1].toLowerCase()]) {
                    a = a.replace(aa, '<$1></$2>');
                    try {
                        for (; d > c; c++)
                            b = this[c] || {}, 1 === b.nodeType && (n.cleanData(oa(b, !1)), b.innerHTML = a);
                        b = 0;
                    } catch (e) {
                    }
                }
                b && this.empty().append(a);
            }, null, a, arguments.length);
        },
        replaceWith: function () {
            var a = arguments[0];
            return this.domManip(arguments, function (b) {
                a = this.parentNode, n.cleanData(oa(this)), a && a.replaceChild(b, this);
            }), a && (a.length || a.nodeType) ? this : this.remove();
        },
        detach: function (a) {
            return this.remove(a, !0);
        },
        domManip: function (a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0, l = this.length, m = this, o = l - 1, p = a[0], q = n.isFunction(p);
            if (q || l > 1 && 'string' == typeof p && !k.checkClone && ea.test(p))
                return this.each(function (c) {
                    var d = m.eq(c);
                    q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b);
                });
            if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
                for (f = n.map(oa(c, 'script'), ka), g = f.length; l > j; j++)
                    h = c, j !== o && (h = n.clone(h, !0, !0), g && n.merge(f, oa(h, 'script'))), b.call(this[j], h, j);
                if (g)
                    for (i = f[f.length - 1].ownerDocument, n.map(f, la), j = 0; g > j; j++)
                        h = f[j], fa.test(h.type || '') && !L.access(h, 'globalEval') && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(ha, '')));
            }
            return this;
        }
    }), n.each({
        appendTo: 'append',
        prependTo: 'prepend',
        insertBefore: 'before',
        insertAfter: 'after',
        replaceAll: 'replaceWith'
    }, function (a, b) {
        n.fn[a] = function (a) {
            for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++)
                c = h === g ? this : this.clone(!0), n(e[h])[b](c), f.apply(d, c.get());
            return this.pushStack(d);
        };
    });
    var qa, ra = {};
    function sa(b, c) {
        var d, e = n(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], 'display');
        return e.detach(), f;
    }
    function ta(a) {
        var b = l, c = ra[a];
        return c || (c = sa(a, b), 'none' !== c && c || (qa = (qa || n('<iframe frameborder=\'0\' width=\'0\' height=\'0\'/>')).appendTo(b.documentElement), b = qa[0].contentDocument, b.write(), b.close(), c = sa(a, b), qa.detach()), ra[a] = c), c;
    }
    var ua = /^margin/, va = new RegExp('^(' + Q + ')(?!px)[a-z%]+$', 'i'), wa = function (b) {
            return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null);
        };
    function xa(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || wa(a), c && (g = c.getPropertyValue(b) || c[b]), c && ('' !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), va.test(g) && ua.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + '' : g;
    }
    function ya(a, b) {
        return {
            get: function () {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments);
            }
        };
    }
    !function () {
        var b, c, d = l.documentElement, e = l.createElement('div'), f = l.createElement('div');
        if (f.style) {
            f.style.backgroundClip = 'content-box', f.cloneNode(!0).style.backgroundClip = '', k.clearCloneStyle = 'content-box' === f.style.backgroundClip, e.style.cssText = 'border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute', e.appendChild(f);
            function g() {
                f.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute', f.innerHTML = '', d.appendChild(e);
                var g = a.getComputedStyle(f, null);
                b = '1%' !== g.top, c = '4px' === g.width, d.removeChild(e);
            }
            a.getComputedStyle && n.extend(k, {
                pixelPosition: function () {
                    return g(), b;
                },
                boxSizingReliable: function () {
                    return null == c && g(), c;
                },
                reliableMarginRight: function () {
                    var b, c = f.appendChild(l.createElement('div'));
                    return c.style.cssText = f.style.cssText = '-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0', c.style.marginRight = c.style.width = '0', f.style.width = '1px', d.appendChild(e), b = !parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), f.removeChild(c), b;
                }
            });
        }
    }(), n.swap = function (a, b, c, d) {
        var e, f, g = {};
        for (f in b)
            g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b)
            a.style[f] = g[f];
        return e;
    };
    var za = /^(none|table(?!-c[ea]).+)/, Aa = new RegExp('^(' + Q + ')(.*)$', 'i'), Ba = new RegExp('^([+-])=(' + Q + ')', 'i'), Ca = {
            position: 'absolute',
            visibility: 'hidden',
            display: 'block'
        }, Da = {
            letterSpacing: '0',
            fontWeight: '400'
        }, Ea = [
            'Webkit',
            'O',
            'Moz',
            'ms'
        ];
    function Fa(a, b) {
        if (b in a)
            return b;
        var c = b[0].toUpperCase() + b.slice(1), d = b, e = Ea.length;
        while (e--)
            if (b = Ea[e] + c, b in a)
                return b;
        return d;
    }
    function Ga(a, b, c) {
        var d = Aa.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || 'px') : b;
    }
    function Ha(a, b, c, d, e) {
        for (var f = c === (d ? 'border' : 'content') ? 4 : 'width' === b ? 1 : 0, g = 0; 4 > f; f += 2)
            'margin' === c && (g += n.css(a, c + R[f], !0, e)), d ? ('content' === c && (g -= n.css(a, 'padding' + R[f], !0, e)), 'margin' !== c && (g -= n.css(a, 'border' + R[f] + 'Width', !0, e))) : (g += n.css(a, 'padding' + R[f], !0, e), 'padding' !== c && (g += n.css(a, 'border' + R[f] + 'Width', !0, e)));
        return g;
    }
    function Ia(a, b, c) {
        var d = !0, e = 'width' === b ? a.offsetWidth : a.offsetHeight, f = wa(a), g = 'border-box' === n.css(a, 'boxSizing', !1, f);
        if (0 >= e || null == e) {
            if (e = xa(a, b, f), (0 > e || null == e) && (e = a.style[b]), va.test(e))
                return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
        }
        return e + Ha(a, b, c || (g ? 'border' : 'content'), d, f) + 'px';
    }
    function Ja(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
            d = a[g], d.style && (f[g] = L.get(d, 'olddisplay'), c = d.style.display, b ? (f[g] || 'none' !== c || (d.style.display = ''), '' === d.style.display && S(d) && (f[g] = L.access(d, 'olddisplay', ta(d.nodeName)))) : (e = S(d), 'none' === c && e || L.set(d, 'olddisplay', e ? c : n.css(d, 'display'))));
        for (g = 0; h > g; g++)
            d = a[g], d.style && (b && 'none' !== d.style.display && '' !== d.style.display || (d.style.display = b ? f[g] || '' : 'none'));
        return a;
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = xa(a, 'opacity');
                        return '' === c ? '1' : c;
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
        cssProps: { 'float': 'cssFloat' },
        style: function (a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b), i = a.style;
                return b = n.cssProps[h] || (n.cssProps[h] = Fa(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && 'get' in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, 'string' === f && (e = Ba.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = 'number'), null != c && c === c && ('number' !== f || n.cssNumber[h] || (c += 'px'), k.clearCloneStyle || '' !== c || 0 !== b.indexOf('background') || (i[b] = 'inherit'), g && 'set' in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0);
            }
        },
        css: function (a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Fa(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && 'get' in g && (e = g.get(a, !0, c)), void 0 === e && (e = xa(a, b, d)), 'normal' === e && b in Da && (e = Da[b]), '' === c || c ? (f = parseFloat(e), c === !0 || n.isNumeric(f) ? f || 0 : e) : e;
        }
    }), n.each([
        'height',
        'width'
    ], function (a, b) {
        n.cssHooks[b] = {
            get: function (a, c, d) {
                return c ? za.test(n.css(a, 'display')) && 0 === a.offsetWidth ? n.swap(a, Ca, function () {
                    return Ia(a, b, d);
                }) : Ia(a, b, d) : void 0;
            },
            set: function (a, c, d) {
                var e = d && wa(a);
                return Ga(a, c, d ? Ha(a, b, d, 'border-box' === n.css(a, 'boxSizing', !1, e), e) : 0);
            }
        };
    }), n.cssHooks.marginRight = ya(k.reliableMarginRight, function (a, b) {
        return b ? n.swap(a, { display: 'inline-block' }, xa, [
            a,
            'marginRight'
        ]) : void 0;
    }), n.each({
        margin: '',
        padding: '',
        border: 'Width'
    }, function (a, b) {
        n.cssHooks[a + b] = {
            expand: function (c) {
                for (var d = 0, e = {}, f = 'string' == typeof c ? c.split(' ') : [c]; 4 > d; d++)
                    e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
                return e;
            }
        }, ua.test(a) || (n.cssHooks[a + b].set = Ga);
    }), n.fn.extend({
        css: function (a, b) {
            return J(this, function (a, b, c) {
                var d, e, f = {}, g = 0;
                if (n.isArray(b)) {
                    for (d = wa(a), e = b.length; e > g; g++)
                        f[b[g]] = n.css(a, b[g], !1, d);
                    return f;
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
            }, a, b, arguments.length > 1);
        },
        show: function () {
            return Ja(this, !0);
        },
        hide: function () {
            return Ja(this);
        },
        toggle: function (a) {
            return 'boolean' == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                S(this) ? n(this).show() : n(this).hide();
            });
        }
    });
    function Ka(a, b, c, d, e) {
        return new Ka.prototype.init(a, b, c, d, e);
    }
    n.Tween = Ka, Ka.prototype = {
        constructor: Ka,
        init: function (a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || 'swing', this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? '' : 'px');
        },
        cur: function () {
            var a = Ka.propHooks[this.prop];
            return a && a.get ? a.get(this) : Ka.propHooks._default.get(this);
        },
        run: function (a) {
            var b, c = Ka.propHooks[this.prop];
            return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ka.propHooks._default.set(this), this;
        }
    }, Ka.prototype.init.prototype = Ka.prototype, Ka.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ''), b && 'auto' !== b ? b : 0) : a.elem[a.prop];
            },
            set: function (a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now;
            }
        }
    }, Ka.propHooks.scrollTop = Ka.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        }
    }, n.easing = {
        linear: function (a) {
            return a;
        },
        swing: function (a) {
            return 0.5 - Math.cos(a * Math.PI) / 2;
        }
    }, n.fx = Ka.prototype.init, n.fx.step = {};
    var La, Ma, Na = /^(?:toggle|show|hide)$/, Oa = new RegExp('^(?:([+-])=|)(' + Q + ')([a-z%]*)$', 'i'), Pa = /queueHooks$/, Qa = [Va], Ra = {
            '*': [function (a, b) {
                    var c = this.createTween(a, b), d = c.cur(), e = Oa.exec(b), f = e && e[3] || (n.cssNumber[a] ? '' : 'px'), g = (n.cssNumber[a] || 'px' !== f && +d) && Oa.exec(n.css(c.elem, a)), h = 1, i = 20;
                    if (g && g[3] !== f) {
                        f = f || g[3], e = e || [], g = +d || 1;
                        do
                            h = h || '.5', g /= h, n.style(c.elem, a, g + f);
                        while (h !== (h = c.cur() / d) && 1 !== h && --i);
                    }
                    return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c;
                }]
        };
    function Sa() {
        return setTimeout(function () {
            La = void 0;
        }), La = n.now();
    }
    function Ta(a, b) {
        var c, d = 0, e = { height: a };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b)
            c = R[d], e['margin' + c] = e['padding' + c] = a;
        return b && (e.opacity = e.width = a), e;
    }
    function Ua(a, b, c) {
        for (var d, e = (Ra[b] || []).concat(Ra['*']), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a))
                return d;
    }
    function Va(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this, m = {}, o = a.style, p = a.nodeType && S(a), q = L.get(a, 'fxshow');
        c.queue || (h = n._queueHooks(a, 'fx'), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
            h.unqueued || i();
        }), h.unqueued++, l.always(function () {
            l.always(function () {
                h.unqueued--, n.queue(a, 'fx').length || h.empty.fire();
            });
        })), 1 === a.nodeType && ('height' in b || 'width' in b) && (c.overflow = [
            o.overflow,
            o.overflowX,
            o.overflowY
        ], j = n.css(a, 'display'), k = 'none' === j ? L.get(a, 'olddisplay') || ta(a.nodeName) : j, 'inline' === k && 'none' === n.css(a, 'float') && (o.display = 'inline-block')), c.overflow && (o.overflow = 'hidden', l.always(function () {
            o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
        }));
        for (d in b)
            if (e = b[d], Na.exec(e)) {
                if (delete b[d], f = f || 'toggle' === e, e === (p ? 'hide' : 'show')) {
                    if ('show' !== e || !q || void 0 === q[d])
                        continue;
                    p = !0;
                }
                m[d] = q && q[d] || n.style(a, d);
            } else
                j = void 0;
        if (n.isEmptyObject(m))
            'inline' === ('none' === j ? ta(a.nodeName) : j) && (o.display = j);
        else {
            q ? 'hidden' in q && (p = q.hidden) : q = L.access(a, 'fxshow', {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function () {
                n(a).hide();
            }), l.done(function () {
                var b;
                L.remove(a, 'fxshow');
                for (b in m)
                    n.style(a, b, m[b]);
            });
            for (d in m)
                g = Ua(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = 'width' === d || 'height' === d ? 1 : 0));
        }
    }
    function Wa(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && 'expand' in g) {
                f = g.expand(f), delete a[d];
                for (c in f)
                    c in a || (a[c] = f[c], b[c] = e);
            } else
                b[d] = e;
    }
    function Xa(a, b, c) {
        var d, e, f = 0, g = Qa.length, h = n.Deferred().always(function () {
                delete i.elem;
            }), i = function () {
                if (e)
                    return !1;
                for (var b = La || Sa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)
                    j.tweens[g].run(f);
                return h.notifyWith(a, [
                    j,
                    f,
                    c
                ]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
            }, j = h.promise({
                elem: a,
                props: n.extend({}, b),
                opts: n.extend(!0, { specialEasing: {} }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: La || Sa(),
                duration: c.duration,
                tweens: [],
                createTween: function (b, c) {
                    var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d;
                },
                stop: function (b) {
                    var c = 0, d = b ? j.tweens.length : 0;
                    if (e)
                        return this;
                    for (e = !0; d > c; c++)
                        j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [
                        j,
                        b
                    ]) : h.rejectWith(a, [
                        j,
                        b
                    ]), this;
                }
            }), k = j.props;
        for (Wa(k, j.opts.specialEasing); g > f; f++)
            if (d = Qa[f].call(j, a, k, j.opts))
                return d;
        return n.map(k, Ua, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
    }
    n.Animation = n.extend(Xa, {
        tweener: function (a, b) {
            n.isFunction(a) ? (b = a, a = ['*']) : a = a.split(' ');
            for (var c, d = 0, e = a.length; e > d; d++)
                c = a[d], Ra[c] = Ra[c] || [], Ra[c].unshift(b);
        },
        prefilter: function (a, b) {
            b ? Qa.unshift(a) : Qa.push(a);
        }
    }), n.speed = function (a, b, c) {
        var d = a && 'object' == typeof a ? n.extend({}, a) : {
            complete: c || !c && b || n.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !n.isFunction(b) && b
        };
        return d.duration = n.fx.off ? 0 : 'number' == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = 'fx'), d.old = d.complete, d.complete = function () {
            n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue);
        }, d;
    }, n.fn.extend({
        fadeTo: function (a, b, c, d) {
            return this.filter(S).css('opacity', 0).show().end().animate({ opacity: b }, a, c, d);
        },
        animate: function (a, b, c, d) {
            var e = n.isEmptyObject(a), f = n.speed(b, c, d), g = function () {
                    var b = Xa(this, n.extend({}, a), f);
                    (e || L.get(this, 'finish')) && b.stop(!0);
                };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
        },
        stop: function (a, b, c) {
            var d = function (a) {
                var b = a.stop;
                delete a.stop, b(c);
            };
            return 'string' != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || 'fx', []), this.each(function () {
                var b = !0, e = null != a && a + 'queueHooks', f = n.timers, g = L.get(this);
                if (e)
                    g[e] && g[e].stop && d(g[e]);
                else
                    for (e in g)
                        g[e] && g[e].stop && Pa.test(e) && d(g[e]);
                for (e = f.length; e--;)
                    f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                (b || !c) && n.dequeue(this, a);
            });
        },
        finish: function (a) {
            return a !== !1 && (a = a || 'fx'), this.each(function () {
                var b, c = L.get(this), d = c[a + 'queue'], e = c[a + 'queueHooks'], f = n.timers, g = d ? d.length : 0;
                for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;)
                    f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++)
                    d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish;
            });
        }
    }), n.each([
        'toggle',
        'show',
        'hide'
    ], function (a, b) {
        var c = n.fn[b];
        n.fn[b] = function (a, d, e) {
            return null == a || 'boolean' == typeof a ? c.apply(this, arguments) : this.animate(Ta(b, !0), a, d, e);
        };
    }), n.each({
        slideDown: Ta('show'),
        slideUp: Ta('hide'),
        slideToggle: Ta('toggle'),
        fadeIn: { opacity: 'show' },
        fadeOut: { opacity: 'hide' },
        fadeToggle: { opacity: 'toggle' }
    }, function (a, b) {
        n.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d);
        };
    }), n.timers = [], n.fx.tick = function () {
        var a, b = 0, c = n.timers;
        for (La = n.now(); b < c.length; b++)
            a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || n.fx.stop(), La = void 0;
    }, n.fx.timer = function (a) {
        n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
    }, n.fx.interval = 13, n.fx.start = function () {
        Ma || (Ma = setInterval(n.fx.tick, n.fx.interval));
    }, n.fx.stop = function () {
        clearInterval(Ma), Ma = null;
    }, n.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, n.fn.delay = function (a, b) {
        return a = n.fx ? n.fx.speeds[a] || a : a, b = b || 'fx', this.queue(b, function (b, c) {
            var d = setTimeout(b, a);
            c.stop = function () {
                clearTimeout(d);
            };
        });
    }, function () {
        var a = l.createElement('input'), b = l.createElement('select'), c = b.appendChild(l.createElement('option'));
        a.type = 'checkbox', k.checkOn = '' !== a.value, k.optSelected = c.selected, b.disabled = !0, k.optDisabled = !c.disabled, a = l.createElement('input'), a.value = 't', a.type = 'radio', k.radioValue = 't' === a.value;
    }();
    var Ya, Za, $a = n.expr.attrHandle;
    n.fn.extend({
        attr: function (a, b) {
            return J(this, n.attr, a, b, arguments.length > 1);
        },
        removeAttr: function (a) {
            return this.each(function () {
                n.removeAttr(this, a);
            });
        }
    }), n.extend({
        attr: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f)
                return typeof a.getAttribute === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Za : Ya)), void 0 === c ? d && 'get' in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && 'set' in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ''), c) : void n.removeAttr(a, b));
        },
        removeAttr: function (a, b) {
            var c, d, e = 0, f = b && b.match(E);
            if (f && 1 === a.nodeType)
                while (c = f[e++])
                    d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c);
        },
        attrHooks: {
            type: {
                set: function (a, b) {
                    if (!k.radioValue && 'radio' === b && n.nodeName(a, 'input')) {
                        var c = a.value;
                        return a.setAttribute('type', b), c && (a.value = c), b;
                    }
                }
            }
        }
    }), Za = {
        set: function (a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c;
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = $a[b] || n.find.attr;
        $a[b] = function (a, b, d) {
            var e, f;
            return d || (f = $a[b], $a[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $a[b] = f), e;
        };
    });
    var _a = /^(?:input|select|textarea|button)$/i;
    n.fn.extend({
        prop: function (a, b) {
            return J(this, n.prop, a, b, arguments.length > 1);
        },
        removeProp: function (a) {
            return this.each(function () {
                delete this[n.propFix[a] || a];
            });
        }
    }), n.extend({
        propFix: {
            'for': 'htmlFor',
            'class': 'className'
        },
        prop: function (a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g)
                return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && 'set' in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && 'get' in e && null !== (d = e.get(a, b)) ? d : a[b];
        },
        propHooks: {
            tabIndex: {
                get: function (a) {
                    return a.hasAttribute('tabindex') || _a.test(a.nodeName) || a.href ? a.tabIndex : -1;
                }
            }
        }
    }), k.optSelected || (n.propHooks.selected = {
        get: function (a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null;
        }
    }), n.each([
        'tabIndex',
        'readOnly',
        'maxLength',
        'cellSpacing',
        'cellPadding',
        'rowSpan',
        'colSpan',
        'useMap',
        'frameBorder',
        'contentEditable'
    ], function () {
        n.propFix[this.toLowerCase()] = this;
    });
    var ab = /[\t\r\n\f]/g;
    n.fn.extend({
        addClass: function (a) {
            var b, c, d, e, f, g, h = 'string' == typeof a && a, i = 0, j = this.length;
            if (n.isFunction(a))
                return this.each(function (b) {
                    n(this).addClass(a.call(this, b, this.className));
                });
            if (h)
                for (b = (a || '').match(E) || []; j > i; i++)
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (' ' + c.className + ' ').replace(ab, ' ') : ' ')) {
                        f = 0;
                        while (e = b[f++])
                            d.indexOf(' ' + e + ' ') < 0 && (d += e + ' ');
                        g = n.trim(d), c.className !== g && (c.className = g);
                    }
            return this;
        },
        removeClass: function (a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || 'string' == typeof a && a, i = 0, j = this.length;
            if (n.isFunction(a))
                return this.each(function (b) {
                    n(this).removeClass(a.call(this, b, this.className));
                });
            if (h)
                for (b = (a || '').match(E) || []; j > i; i++)
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (' ' + c.className + ' ').replace(ab, ' ') : '')) {
                        f = 0;
                        while (e = b[f++])
                            while (d.indexOf(' ' + e + ' ') >= 0)
                                d = d.replace(' ' + e + ' ', ' ');
                        g = a ? n.trim(d) : '', c.className !== g && (c.className = g);
                    }
            return this;
        },
        toggleClass: function (a, b) {
            var c = typeof a;
            return 'boolean' == typeof b && 'string' === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function (c) {
                n(this).toggleClass(a.call(this, c, this.className, b), b);
            } : function () {
                if ('string' === c) {
                    var b, d = 0, e = n(this), f = a.match(E) || [];
                    while (b = f[d++])
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                } else
                    (c === U || 'boolean' === c) && (this.className && L.set(this, '__className__', this.className), this.className = this.className || a === !1 ? '' : L.get(this, '__className__') || '');
            });
        },
        hasClass: function (a) {
            for (var b = ' ' + a + ' ', c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (' ' + this[c].className + ' ').replace(ab, ' ').indexOf(b) >= 0)
                    return !0;
            return !1;
        }
    });
    var bb = /\r/g;
    n.fn.extend({
        val: function (a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length)
                    return d = n.isFunction(a), this.each(function (c) {
                        var e;
                        1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = '' : 'number' == typeof e ? e += '' : n.isArray(e) && (e = n.map(e, function (a) {
                            return null == a ? '' : a + '';
                        })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && 'set' in b && void 0 !== b.set(this, e, 'value') || (this.value = e));
                    });
                if (e)
                    return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && 'get' in b && void 0 !== (c = b.get(e, 'value')) ? c : (c = e.value, 'string' == typeof c ? c.replace(bb, '') : null == c ? '' : c);
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = n.find.attr(a, 'value');
                    return null != b ? b : n.trim(n.text(a));
                }
            },
            select: {
                get: function (a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = 'select-one' === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute('disabled')) || c.parentNode.disabled && n.nodeName(c.parentNode, 'optgroup'))) {
                            if (b = n(c).val(), f)
                                return b;
                            g.push(b);
                        }
                    return g;
                },
                set: function (a, b) {
                    var c, d, e = a.options, f = n.makeArray(b), g = e.length;
                    while (g--)
                        d = e[g], (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f;
                }
            }
        }
    }), n.each([
        'radio',
        'checkbox'
    ], function () {
        n.valHooks[this] = {
            set: function (a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0;
            }
        }, k.checkOn || (n.valHooks[this].get = function (a) {
            return null === a.getAttribute('value') ? 'on' : a.value;
        });
    }), n.each('blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(' '), function (a, b) {
        n.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
        };
    }), n.fn.extend({
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a);
        },
        bind: function (a, b, c) {
            return this.on(a, null, b, c);
        },
        unbind: function (a, b) {
            return this.off(a, null, b);
        },
        delegate: function (a, b, c, d) {
            return this.on(b, a, c, d);
        },
        undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, '**') : this.off(b, a || '**', c);
        }
    });
    var cb = n.now(), db = /\?/;
    n.parseJSON = function (a) {
        return JSON.parse(a + '');
    }, n.parseXML = function (a) {
        var b, c;
        if (!a || 'string' != typeof a)
            return null;
        try {
            c = new DOMParser(), b = c.parseFromString(a, 'text/xml');
        } catch (d) {
            b = void 0;
        }
        return (!b || b.getElementsByTagName('parsererror').length) && n.error('Invalid XML: ' + a), b;
    };
    var eb = /#.*$/, fb = /([?&])_=[^&]*/, gb = /^(.*?):[ \t]*([^\r\n]*)$/gm, hb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, ib = /^(?:GET|HEAD)$/, jb = /^\/\//, kb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, lb = {}, mb = {}, nb = '*/'.concat('*'), ob = a.location.href, pb = kb.exec(ob.toLowerCase()) || [];
    function qb(a) {
        return function (b, c) {
            'string' != typeof b && (c = b, b = '*');
            var d, e = 0, f = b.toLowerCase().match(E) || [];
            if (n.isFunction(c))
                while (d = f[e++])
                    '+' === d[0] ? (d = d.slice(1) || '*', (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
        };
    }
    function rb(a, b, c, d) {
        var e = {}, f = a === mb;
        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);
                return 'string' != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
            }), i;
        }
        return g(b.dataTypes[0]) || !e['*'] && g('*');
    }
    function sb(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (c in b)
            void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && n.extend(!0, a, d), a;
    }
    function tb(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while ('*' === i[0])
            i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader('Content-Type'));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break;
                }
        if (i[0] in c)
            f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + ' ' + i[0]]) {
                    f = e;
                    break;
                }
                g || (g = e);
            }
            f = f || g;
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
    }
    function ub(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters)
                j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ('*' === f)
                    f = i;
                else if ('*' !== i && i !== f) {
                    if (g = j[i + ' ' + f] || j['* ' + f], !g)
                        for (e in j)
                            if (h = e.split(' '), h[1] === f && (g = j[i + ' ' + h[0]] || j['* ' + h[0]])) {
                                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                                break;
                            }
                    if (g !== !0)
                        if (g && a['throws'])
                            b = g(b);
                        else
                            try {
                                b = g(b);
                            } catch (l) {
                                return {
                                    state: 'parsererror',
                                    error: g ? l : 'No conversion from ' + i + ' to ' + f
                                };
                            }
                }
        return {
            state: 'success',
            data: b
        };
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ob,
            type: 'GET',
            isLocal: hb.test(pb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            accepts: {
                '*': nb,
                text: 'text/plain',
                html: 'text/html',
                xml: 'application/xml, text/xml',
                json: 'application/json, text/javascript'
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: 'responseXML',
                text: 'responseText',
                json: 'responseJSON'
            },
            converters: {
                '* text': String,
                'text html': !0,
                'text json': n.parseJSON,
                'text xml': n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (a, b) {
            return b ? sb(sb(a, n.ajaxSettings), b) : sb(n.ajaxSettings, a);
        },
        ajaxPrefilter: qb(lb),
        ajaxTransport: qb(mb),
        ajax: function (a, b) {
            'object' == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b), l = k.context || k, m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event, o = n.Deferred(), p = n.Callbacks('once memory'), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = 'canceled', v = {
                    readyState: 0,
                    getResponseHeader: function (a) {
                        var b;
                        if (2 === t) {
                            if (!f) {
                                f = {};
                                while (b = gb.exec(e))
                                    f[b[1].toLowerCase()] = b[2];
                            }
                            b = f[a.toLowerCase()];
                        }
                        return null == b ? null : b;
                    },
                    getAllResponseHeaders: function () {
                        return 2 === t ? e : null;
                    },
                    setRequestHeader: function (a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this;
                    },
                    overrideMimeType: function (a) {
                        return t || (k.mimeType = a), this;
                    },
                    statusCode: function (a) {
                        var b;
                        if (a)
                            if (2 > t)
                                for (b in a)
                                    q[b] = [
                                        q[b],
                                        a[b]
                                    ];
                            else
                                v.always(a[v.status]);
                        return this;
                    },
                    abort: function (a) {
                        var b = a || u;
                        return c && c.abort(b), x(0, b), this;
                    }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || ob) + '').replace(eb, '').replace(jb, pb[1] + '//'), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || '*').toLowerCase().match(E) || [''], null == k.crossDomain && (h = kb.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === pb[1] && h[2] === pb[2] && (h[3] || ('http:' === h[1] ? '80' : '443')) === (pb[3] || ('http:' === pb[1] ? '80' : '443')))), k.data && k.processData && 'string' != typeof k.data && (k.data = n.param(k.data, k.traditional)), rb(lb, k, b, v), 2 === t)
                return v;
            i = n.event && k.global, i && 0 === n.active++ && n.event.trigger('ajaxStart'), k.type = k.type.toUpperCase(), k.hasContent = !ib.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (db.test(d) ? '&' : '?') + k.data, delete k.data), k.cache === !1 && (k.url = fb.test(d) ? d.replace(fb, '$1_=' + cb++) : d + (db.test(d) ? '&' : '?') + '_=' + cb++)), k.ifModified && (n.lastModified[d] && v.setRequestHeader('If-Modified-Since', n.lastModified[d]), n.etag[d] && v.setRequestHeader('If-None-Match', n.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader('Content-Type', k.contentType), v.setRequestHeader('Accept', k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ('*' !== k.dataTypes[0] ? ', ' + nb + '; q=0.01' : '') : k.accepts['*']);
            for (j in k.headers)
                v.setRequestHeader(j, k.headers[j]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t))
                return v.abort();
            u = 'abort';
            for (j in {
                    success: 1,
                    error: 1,
                    complete: 1
                })
                v[j](k[j]);
            if (c = rb(mb, k, b, v)) {
                v.readyState = 1, i && m.trigger('ajaxSend', [
                    v,
                    k
                ]), k.async && k.timeout > 0 && (g = setTimeout(function () {
                    v.abort('timeout');
                }, k.timeout));
                try {
                    t = 1, c.send(r, x);
                } catch (w) {
                    if (!(2 > t))
                        throw w;
                    x(-1, w);
                }
            } else
                x(-1, 'No Transport');
            function x(a, b, f, h) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || '', v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = tb(k, v, f)), u = ub(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader('Last-Modified'), w && (n.lastModified[d] = w), w = v.getResponseHeader('etag'), w && (n.etag[d] = w)), 204 === a || 'HEAD' === k.type ? x = 'nocontent' : 304 === a ? x = 'notmodified' : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = 'error', 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + '', j ? o.resolveWith(l, [
                    r,
                    x,
                    v
                ]) : o.rejectWith(l, [
                    v,
                    x,
                    s
                ]), v.statusCode(q), q = void 0, i && m.trigger(j ? 'ajaxSuccess' : 'ajaxError', [
                    v,
                    k,
                    j ? r : s
                ]), p.fireWith(l, [
                    v,
                    x
                ]), i && (m.trigger('ajaxComplete', [
                    v,
                    k
                ]), --n.active || n.event.trigger('ajaxStop')));
            }
            return v;
        },
        getJSON: function (a, b, c) {
            return n.get(a, b, c, 'json');
        },
        getScript: function (a, b) {
            return n.get(a, void 0, b, 'script');
        }
    }), n.each([
        'get',
        'post'
    ], function (a, b) {
        n[b] = function (a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            });
        };
    }), n._evalUrl = function (a) {
        return n.ajax({
            url: a,
            type: 'GET',
            dataType: 'script',
            async: !1,
            global: !1,
            'throws': !0
        });
    }, n.fn.extend({
        wrapAll: function (a) {
            var b;
            return n.isFunction(a) ? this.each(function (b) {
                n(this).wrapAll(a.call(this, b));
            }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                var a = this;
                while (a.firstElementChild)
                    a = a.firstElementChild;
                return a;
            }).append(this)), this);
        },
        wrapInner: function (a) {
            return this.each(n.isFunction(a) ? function (b) {
                n(this).wrapInner(a.call(this, b));
            } : function () {
                var b = n(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a);
            });
        },
        wrap: function (a) {
            var b = n.isFunction(a);
            return this.each(function (c) {
                n(this).wrapAll(b ? a.call(this, c) : a);
            });
        },
        unwrap: function () {
            return this.parent().each(function () {
                n.nodeName(this, 'body') || n(this).replaceWith(this.childNodes);
            }).end();
        }
    }), n.expr.filters.hidden = function (a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0;
    }, n.expr.filters.visible = function (a) {
        return !n.expr.filters.hidden(a);
    };
    var vb = /%20/g, wb = /\[\]$/, xb = /\r?\n/g, yb = /^(?:submit|button|image|reset|file)$/i, zb = /^(?:input|select|textarea|keygen)/i;
    function Ab(a, b, c, d) {
        var e;
        if (n.isArray(b))
            n.each(b, function (b, e) {
                c || wb.test(a) ? d(a, e) : Ab(a + '[' + ('object' == typeof e ? b : '') + ']', e, c, d);
            });
        else if (c || 'object' !== n.type(b))
            d(a, b);
        else
            for (e in b)
                Ab(a + '[' + e + ']', b[e], c, d);
    }
    n.param = function (a, b) {
        var c, d = [], e = function (a, b) {
                b = n.isFunction(b) ? b() : null == b ? '' : b, d[d.length] = encodeURIComponent(a) + '=' + encodeURIComponent(b);
            };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a))
            n.each(a, function () {
                e(this.name, this.value);
            });
        else
            for (c in a)
                Ab(c, a[c], b, e);
        return d.join('&').replace(vb, '+');
    }, n.fn.extend({
        serialize: function () {
            return n.param(this.serializeArray());
        },
        serializeArray: function () {
            return this.map(function () {
                var a = n.prop(this, 'elements');
                return a ? n.makeArray(a) : this;
            }).filter(function () {
                var a = this.type;
                return this.name && !n(this).is(':disabled') && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !T.test(a));
            }).map(function (a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
                    return {
                        name: b.name,
                        value: a.replace(xb, '\r\n')
                    };
                }) : {
                    name: b.name,
                    value: c.replace(xb, '\r\n')
                };
            }).get();
        }
    }), n.ajaxSettings.xhr = function () {
        try {
            return new XMLHttpRequest();
        } catch (a) {
        }
    };
    var Bb = 0, Cb = {}, Db = {
            0: 200,
            1223: 204
        }, Eb = n.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent('onunload', function () {
        for (var a in Cb)
            Cb[a]();
    }), k.cors = !!Eb && 'withCredentials' in Eb, k.ajax = Eb = !!Eb, n.ajaxTransport(function (a) {
        var b;
        return k.cors || Eb && !a.crossDomain ? {
            send: function (c, d) {
                var e, f = a.xhr(), g = ++Bb;
                if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                    for (e in a.xhrFields)
                        f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c['X-Requested-With'] || (c['X-Requested-With'] = 'XMLHttpRequest');
                for (e in c)
                    f.setRequestHeader(e, c[e]);
                b = function (a) {
                    return function () {
                        b && (delete Cb[g], b = f.onload = f.onerror = null, 'abort' === a ? f.abort() : 'error' === a ? d(f.status, f.statusText) : d(Db[f.status] || f.status, f.statusText, 'string' == typeof f.responseText ? { text: f.responseText } : void 0, f.getAllResponseHeaders()));
                    };
                }, f.onload = b(), f.onerror = b('error'), b = Cb[g] = b('abort');
                try {
                    f.send(a.hasContent && a.data || null);
                } catch (h) {
                    if (b)
                        throw h;
                }
            },
            abort: function () {
                b && b();
            }
        } : void 0;
    }), n.ajaxSetup({
        accepts: { script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript' },
        contents: { script: /(?:java|ecma)script/ },
        converters: {
            'text script': function (a) {
                return n.globalEval(a), a;
            }
        }
    }), n.ajaxPrefilter('script', function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = 'GET');
    }), n.ajaxTransport('script', function (a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function (d, e) {
                    b = n('<script>').prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on('load error', c = function (a) {
                        b.remove(), c = null, a && e('error' === a.type ? 404 : 200, a.type);
                    }), l.head.appendChild(b[0]);
                },
                abort: function () {
                    c && c();
                }
            };
        }
    });
    var Fb = [], Gb = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: 'callback',
        jsonpCallback: function () {
            var a = Fb.pop() || n.expando + '_' + cb++;
            return this[a] = !0, a;
        }
    }), n.ajaxPrefilter('json jsonp', function (b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Gb.test(b.url) ? 'url' : 'string' == typeof b.data && !(b.contentType || '').indexOf('application/x-www-form-urlencoded') && Gb.test(b.data) && 'data');
        return h || 'jsonp' === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Gb, '$1' + e) : b.jsonp !== !1 && (b.url += (db.test(b.url) ? '&' : '?') + b.jsonp + '=' + e), b.converters['script json'] = function () {
            return g || n.error(e + ' was not called'), g[0];
        }, b.dataTypes[0] = 'json', f = a[e], a[e] = function () {
            g = arguments;
        }, d.always(function () {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Fb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0;
        }), 'script') : void 0;
    }), n.parseHTML = function (a, b, c) {
        if (!a || 'string' != typeof a)
            return null;
        'boolean' == typeof b && (c = b, b = !1), b = b || l;
        var d = v.exec(a), e = !c && [];
        return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes));
    };
    var Hb = n.fn.load;
    n.fn.load = function (a, b, c) {
        if ('string' != typeof a && Hb)
            return Hb.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(' ');
        return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && 'object' == typeof b && (e = 'POST'), g.length > 0 && n.ajax({
            url: a,
            type: e,
            dataType: 'html',
            data: b
        }).done(function (a) {
            f = arguments, g.html(d ? n('<div>').append(n.parseHTML(a)).find(d) : a);
        }).complete(c && function (a, b) {
            g.each(c, f || [
                a.responseText,
                b,
                a
            ]);
        }), this;
    }, n.each([
        'ajaxStart',
        'ajaxStop',
        'ajaxComplete',
        'ajaxError',
        'ajaxSuccess',
        'ajaxSend'
    ], function (a, b) {
        n.fn[b] = function (a) {
            return this.on(b, a);
        };
    }), n.expr.filters.animated = function (a) {
        return n.grep(n.timers, function (b) {
            return a === b.elem;
        }).length;
    };
    var Ib = a.document.documentElement;
    function Jb(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
    }
    n.offset = {
        setOffset: function (a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, 'position'), l = n(a), m = {};
            'static' === k && (a.style.position = 'relative'), h = l.offset(), f = n.css(a, 'top'), i = n.css(a, 'left'), j = ('absolute' === k || 'fixed' === k) && (f + i).indexOf('auto') > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), 'using' in b ? b.using.call(a, m) : l.css(m);
        }
    }, n.fn.extend({
        offset: function (a) {
            if (arguments.length)
                return void 0 === a ? this : this.each(function (b) {
                    n.offset.setOffset(this, a, b);
                });
            var b, c, d = this[0], e = {
                    top: 0,
                    left: 0
                }, f = d && d.ownerDocument;
            if (f)
                return b = f.documentElement, n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()), c = Jb(f), {
                    top: e.top + c.pageYOffset - b.clientTop,
                    left: e.left + c.pageXOffset - b.clientLeft
                }) : e;
        },
        position: function () {
            if (this[0]) {
                var a, b, c = this[0], d = {
                        top: 0,
                        left: 0
                    };
                return 'fixed' === n.css(c, 'position') ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], 'html') || (d = a.offset()), d.top += n.css(a[0], 'borderTopWidth', !0), d.left += n.css(a[0], 'borderLeftWidth', !0)), {
                    top: b.top - d.top - n.css(c, 'marginTop', !0),
                    left: b.left - d.left - n.css(c, 'marginLeft', !0)
                };
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent || Ib;
                while (a && !n.nodeName(a, 'html') && 'static' === n.css(a, 'position'))
                    a = a.offsetParent;
                return a || Ib;
            });
        }
    }), n.each({
        scrollLeft: 'pageXOffset',
        scrollTop: 'pageYOffset'
    }, function (b, c) {
        var d = 'pageYOffset' === c;
        n.fn[b] = function (e) {
            return J(this, function (b, e, f) {
                var g = Jb(b);
                return void 0 === f ? g ? g[c] : b[e] : void (g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f);
            }, b, e, arguments.length, null);
        };
    }), n.each([
        'top',
        'left'
    ], function (a, b) {
        n.cssHooks[b] = ya(k.pixelPosition, function (a, c) {
            return c ? (c = xa(a, b), va.test(c) ? n(a).position()[b] + 'px' : c) : void 0;
        });
    }), n.each({
        Height: 'height',
        Width: 'width'
    }, function (a, b) {
        n.each({
            padding: 'inner' + a,
            content: b,
            '': 'outer' + a
        }, function (c, d) {
            n.fn[d] = function (d, e) {
                var f = arguments.length && (c || 'boolean' != typeof d), g = c || (d === !0 || e === !0 ? 'margin' : 'border');
                return J(this, function (b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement['client' + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body['scroll' + a], e['scroll' + a], b.body['offset' + a], e['offset' + a], e['client' + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g);
                }, b, f ? d : void 0, f, null);
            };
        });
    }), n.fn.size = function () {
        return this.length;
    }, n.fn.andSelf = n.fn.addBack, 'function' == typeof define && define.amd && define('jquery', [], function () {
        return n;
    });
    var Kb = a.jQuery, Lb = a.$;
    return n.noConflict = function (b) {
        return a.$ === n && (a.$ = Lb), b && a.jQuery === n && (a.jQuery = Kb), n;
    }, typeof b === U && (a.jQuery = a.$ = n), n;
});
(function (window, document, Math) {
    var rAF = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
        window.setTimeout(callback, 1000 / 60);
    };
    var utils = function () {
        var me = {};
        var _elementStyle = document.createElement('div').style;
        var _vendor = function () {
            var vendors = [
                    't',
                    'webkitT',
                    'MozT',
                    'msT',
                    'OT'
                ], transform, i = 0, l = vendors.length;
            for (; i < l; i++) {
                transform = vendors[i] + 'ransform';
                if (transform in _elementStyle)
                    return vendors[i].substr(0, vendors[i].length - 1);
            }
            return false;
        }();
        function _prefixStyle(style) {
            if (_vendor === false)
                return false;
            if (_vendor === '')
                return style;
            return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
        }
        me.getTime = Date.now || function getTime() {
            return new Date().getTime();
        };
        me.extend = function (target, obj) {
            for (var i in obj) {
                target[i] = obj[i];
            }
        };
        me.addEvent = function (el, type, fn, capture) {
            el.addEventListener(type, fn, !!capture);
        };
        me.removeEvent = function (el, type, fn, capture) {
            el.removeEventListener(type, fn, !!capture);
        };
        me.prefixPointerEvent = function (pointerEvent) {
            return window.MSPointerEvent ? 'MSPointer' + pointerEvent.charAt(9).toUpperCase() + pointerEvent.substr(10) : pointerEvent;
        };
        me.momentum = function (current, start, time, lowerMargin, wrapperSize, deceleration) {
            var distance = current - start, speed = Math.abs(distance) / time, destination, duration;
            deceleration = deceleration === undefined ? 0.0006 : deceleration;
            destination = current + speed * speed / (2 * deceleration) * (distance < 0 ? -1 : 1);
            duration = speed / deceleration;
            if (destination < lowerMargin) {
                destination = wrapperSize ? lowerMargin - wrapperSize / 2.5 * (speed / 8) : lowerMargin;
                distance = Math.abs(destination - current);
                duration = distance / speed;
            } else if (destination > 0) {
                destination = wrapperSize ? wrapperSize / 2.5 * (speed / 8) : 0;
                distance = Math.abs(current) + destination;
                duration = distance / speed;
            }
            return {
                destination: Math.round(destination),
                duration: duration
            };
        };
        var _transform = _prefixStyle('transform');
        me.extend(me, {
            hasTransform: _transform !== false,
            hasPerspective: _prefixStyle('perspective') in _elementStyle,
            hasTouch: 'ontouchstart' in window,
            hasPointer: window.PointerEvent || window.MSPointerEvent,
            hasTransition: _prefixStyle('transition') in _elementStyle
        });
        me.isBadAndroid = /Android /.test(window.navigator.appVersion) && !/Chrome\/\d/.test(window.navigator.appVersion);
        me.extend(me.style = {}, {
            transform: _transform,
            transitionTimingFunction: _prefixStyle('transitionTimingFunction'),
            transitionDuration: _prefixStyle('transitionDuration'),
            transitionDelay: _prefixStyle('transitionDelay'),
            transformOrigin: _prefixStyle('transformOrigin')
        });
        me.hasClass = function (e, c) {
            var re = new RegExp('(^|\\s)' + c + '(\\s|$)');
            return re.test(e.className);
        };
        me.addClass = function (e, c) {
            if (me.hasClass(e, c)) {
                return;
            }
            var newclass = e.className.split(' ');
            newclass.push(c);
            e.className = newclass.join(' ');
        };
        me.removeClass = function (e, c) {
            if (!me.hasClass(e, c)) {
                return;
            }
            var re = new RegExp('(^|\\s)' + c + '(\\s|$)', 'g');
            e.className = e.className.replace(re, ' ');
        };
        me.offset = function (el) {
            var left = -el.offsetLeft, top = -el.offsetTop;
            while (el = el.offsetParent) {
                left -= el.offsetLeft;
                top -= el.offsetTop;
            }
            return {
                left: left,
                top: top
            };
        };
        me.preventDefaultException = function (el, exceptions) {
            for (var i in exceptions) {
                if (exceptions[i].test(el[i])) {
                    return true;
                }
            }
            return false;
        };
        me.extend(me.eventType = {}, {
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
        });
        me.extend(me.ease = {}, {
            quadratic: {
                style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                fn: function (k) {
                    return k * (2 - k);
                }
            },
            circular: {
                style: 'cubic-bezier(0.1, 0.57, 0.1, 1)',
                fn: function (k) {
                    return Math.sqrt(1 - --k * k);
                }
            },
            back: {
                style: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                fn: function (k) {
                    var b = 4;
                    return (k = k - 1) * k * ((b + 1) * k + b) + 1;
                }
            },
            bounce: {
                style: '',
                fn: function (k) {
                    if ((k /= 1) < 1 / 2.75) {
                        return 7.5625 * k * k;
                    } else if (k < 2 / 2.75) {
                        return 7.5625 * (k -= 1.5 / 2.75) * k + 0.75;
                    } else if (k < 2.5 / 2.75) {
                        return 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375;
                    } else {
                        return 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375;
                    }
                }
            },
            elastic: {
                style: '',
                fn: function (k) {
                    var f = 0.22, e = 0.4;
                    if (k === 0) {
                        return 0;
                    }
                    if (k == 1) {
                        return 1;
                    }
                    return e * Math.pow(2, -10 * k) * Math.sin((k - f / 4) * (2 * Math.PI) / f) + 1;
                }
            }
        });
        me.tap = function (e, eventName) {
            var ev = document.createEvent('Event');
            ev.initEvent(eventName, true, true);
            ev.pageX = e.pageX;
            ev.pageY = e.pageY;
            e.target.dispatchEvent(ev);
        };
        me.click = function (e) {
            var target = e.target, ev;
            if (!/(SELECT|INPUT|TEXTAREA)/i.test(target.tagName)) {
                ev = document.createEvent('MouseEvents');
                ev.initMouseEvent('click', true, true, e.view, 1, target.screenX, target.screenY, target.clientX, target.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null);
                ev._constructed = true;
                target.dispatchEvent(ev);
            }
        };
        return me;
    }();
    function IScroll(el, options) {
        this.wrapper = typeof el == 'string' ? document.querySelector(el) : el;
        this.scroller = this.wrapper.children[0];
        this.scrollerStyle = this.scroller.style;
        this.options = {
            resizeScrollbars: true,
            mouseWheelSpeed: 20,
            snapThreshold: 0.334,
            startX: 0,
            startY: 0,
            scrollY: true,
            directionLockThreshold: 5,
            momentum: true,
            bounce: true,
            bounceTime: 600,
            bounceEasing: '',
            preventDefault: true,
            preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ },
            HWCompositing: true,
            useTransition: true,
            useTransform: true
        };
        for (var i in options) {
            this.options[i] = options[i];
        }
        this.translateZ = this.options.HWCompositing && utils.hasPerspective ? ' translateZ(0)' : '';
        this.options.useTransition = utils.hasTransition && this.options.useTransition;
        this.options.useTransform = utils.hasTransform && this.options.useTransform;
        this.options.eventPassthrough = this.options.eventPassthrough === true ? 'vertical' : this.options.eventPassthrough;
        this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;
        this.options.scrollY = this.options.eventPassthrough == 'vertical' ? false : this.options.scrollY;
        this.options.scrollX = this.options.eventPassthrough == 'horizontal' ? false : this.options.scrollX;
        this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
        this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;
        this.options.bounceEasing = typeof this.options.bounceEasing == 'string' ? utils.ease[this.options.bounceEasing] || utils.ease.circular : this.options.bounceEasing;
        this.options.resizePolling = this.options.resizePolling === undefined ? 60 : this.options.resizePolling;
        if (this.options.tap === true) {
            this.options.tap = 'tap';
        }
        if (this.options.shrinkScrollbars == 'scale') {
            this.options.useTransition = false;
        }
        this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1;
        this.x = 0;
        this.y = 0;
        this.directionX = 0;
        this.directionY = 0;
        this._events = {};
        this._init();
        this.refresh();
        this.scrollTo(this.options.startX, this.options.startY);
        this.enable();
    }
    IScroll.prototype = {
        version: '5.1.3',
        _init: function () {
            this._initEvents();
            if (this.options.scrollbars || this.options.indicators) {
                this._initIndicators();
            }
            if (this.options.mouseWheel) {
                this._initWheel();
            }
            if (this.options.snap) {
                this._initSnap();
            }
            if (this.options.keyBindings) {
                this._initKeys();
            }
        },
        destroy: function () {
            this._initEvents(true);
            this._execEvent('destroy');
        },
        _transitionEnd: function (e) {
            if (e.target != this.scroller || !this.isInTransition) {
                return;
            }
            this._transitionTime();
            if (!this.resetPosition(this.options.bounceTime)) {
                this.isInTransition = false;
                this._execEvent('scrollEnd');
            }
        },
        _start: function (e) {
            if (utils.eventType[e.type] != 1) {
                if (e.button !== 0) {
                    return;
                }
            }
            if (!this.enabled || this.initiated && utils.eventType[e.type] !== this.initiated) {
                return;
            }
            if (this.options.preventDefault && !utils.isBadAndroid && !utils.preventDefaultException(e.target, this.options.preventDefaultException)) {
                e.preventDefault();
            }
            var point = e.touches ? e.touches[0] : e, pos;
            this.initiated = utils.eventType[e.type];
            this.moved = false;
            this.distX = 0;
            this.distY = 0;
            this.directionX = 0;
            this.directionY = 0;
            this.directionLocked = 0;
            this._transitionTime();
            this.startTime = utils.getTime();
            if (this.options.useTransition && this.isInTransition) {
                this.isInTransition = false;
                pos = this.getComputedPosition();
                this._translate(Math.round(pos.x), Math.round(pos.y));
                this._execEvent('scrollEnd');
            } else if (!this.options.useTransition && this.isAnimating) {
                this.isAnimating = false;
                this._execEvent('scrollEnd');
            }
            this.startX = this.x;
            this.startY = this.y;
            this.absStartX = this.x;
            this.absStartY = this.y;
            this.pointX = point.pageX;
            this.pointY = point.pageY;
            this._execEvent('beforeScrollStart');
        },
        _move: function (e) {
            if (!this.enabled || utils.eventType[e.type] !== this.initiated) {
                return;
            }
            if (this.options.preventDefault) {
                e.preventDefault();
            }
            var point = e.touches ? e.touches[0] : e, deltaX = point.pageX - this.pointX, deltaY = point.pageY - this.pointY, timestamp = utils.getTime(), newX, newY, absDistX, absDistY;
            this.pointX = point.pageX;
            this.pointY = point.pageY;
            this.distX += deltaX;
            this.distY += deltaY;
            absDistX = Math.abs(this.distX);
            absDistY = Math.abs(this.distY);
            if (timestamp - this.endTime > 300 && (absDistX < 10 && absDistY < 10)) {
                return;
            }
            if (!this.directionLocked && !this.options.freeScroll) {
                if (absDistX > absDistY + this.options.directionLockThreshold) {
                    this.directionLocked = 'h';
                } else if (absDistY >= absDistX + this.options.directionLockThreshold) {
                    this.directionLocked = 'v';
                } else {
                    this.directionLocked = 'n';
                }
            }
            if (this.directionLocked == 'h') {
                if (this.options.eventPassthrough == 'vertical') {
                    e.preventDefault();
                } else if (this.options.eventPassthrough == 'horizontal') {
                    this.initiated = false;
                    return;
                }
                deltaY = 0;
            } else if (this.directionLocked == 'v') {
                if (this.options.eventPassthrough == 'horizontal') {
                    e.preventDefault();
                } else if (this.options.eventPassthrough == 'vertical') {
                    this.initiated = false;
                    return;
                }
                deltaX = 0;
            }
            deltaX = this.hasHorizontalScroll ? deltaX : 0;
            deltaY = this.hasVerticalScroll ? deltaY : 0;
            newX = this.x + deltaX;
            newY = this.y + deltaY;
            if (newX > 0 || newX < this.maxScrollX) {
                newX = this.options.bounce ? this.x + deltaX / 3 : newX > 0 ? 0 : this.maxScrollX;
            }
            if (newY > 0 || newY < this.maxScrollY) {
                newY = this.options.bounce ? this.y + deltaY / 3 : newY > 0 ? 0 : this.maxScrollY;
            }
            this.directionX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
            this.directionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;
            if (!this.moved) {
                this._execEvent('scrollStart');
            }
            this.moved = true;
            this._translate(newX, newY);
            if (timestamp - this.startTime > 300) {
                this.startTime = timestamp;
                this.startX = this.x;
                this.startY = this.y;
            }
        },
        _end: function (e) {
            if (!this.enabled || utils.eventType[e.type] !== this.initiated) {
                return;
            }
            if (this.options.preventDefault && !utils.preventDefaultException(e.target, this.options.preventDefaultException)) {
                e.preventDefault();
            }
            var point = e.changedTouches ? e.changedTouches[0] : e, momentumX, momentumY, duration = utils.getTime() - this.startTime, newX = Math.round(this.x), newY = Math.round(this.y), distanceX = Math.abs(newX - this.startX), distanceY = Math.abs(newY - this.startY), time = 0, easing = '';
            this.isInTransition = 0;
            this.initiated = 0;
            this.endTime = utils.getTime();
            if (this.resetPosition(this.options.bounceTime)) {
                return;
            }
            this.scrollTo(newX, newY);
            if (!this.moved) {
                if (this.options.tap) {
                    utils.tap(e, this.options.tap);
                }
                if (this.options.click) {
                    utils.click(e);
                }
                this._execEvent('scrollCancel');
                return;
            }
            if (this._events.flick && duration < 200 && distanceX < 100 && distanceY < 100) {
                this._execEvent('flick');
                return;
            }
            if (this.options.momentum && duration < 300) {
                momentumX = this.hasHorizontalScroll ? utils.momentum(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
                    destination: newX,
                    duration: 0
                };
                momentumY = this.hasVerticalScroll ? utils.momentum(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
                    destination: newY,
                    duration: 0
                };
                newX = momentumX.destination;
                newY = momentumY.destination;
                time = Math.max(momentumX.duration, momentumY.duration);
                this.isInTransition = 1;
            }
            if (this.options.snap) {
                var snap = this._nearestSnap(newX, newY);
                this.currentPage = snap;
                time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(newX - snap.x), 1000), Math.min(Math.abs(newY - snap.y), 1000)), 300);
                newX = snap.x;
                newY = snap.y;
                this.directionX = 0;
                this.directionY = 0;
                easing = this.options.bounceEasing;
            }
            if (newX != this.x || newY != this.y) {
                if (newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY) {
                    easing = utils.ease.quadratic;
                }
                this.scrollTo(newX, newY, time, easing);
                return;
            }
            this._execEvent('scrollEnd');
        },
        _resize: function () {
            var that = this;
            clearTimeout(this.resizeTimeout);
            this.resizeTimeout = setTimeout(function () {
                that.refresh();
            }, this.options.resizePolling);
        },
        resetPosition: function (time) {
            var x = this.x, y = this.y;
            time = time || 0;
            if (!this.hasHorizontalScroll || this.x > 0) {
                x = 0;
            } else if (this.x < this.maxScrollX) {
                x = this.maxScrollX;
            }
            if (!this.hasVerticalScroll || this.y > 0) {
                y = 0;
            } else if (this.y < this.maxScrollY) {
                y = this.maxScrollY;
            }
            if (x == this.x && y == this.y) {
                return false;
            }
            this.scrollTo(x, y, time, this.options.bounceEasing);
            return true;
        },
        disable: function () {
            this.enabled = false;
        },
        enable: function () {
            this.enabled = true;
        },
        refresh: function () {
            var rf = this.wrapper.offsetHeight;
            this.wrapperWidth = this.wrapper.clientWidth;
            this.wrapperHeight = this.wrapper.clientHeight;
            this.scrollerWidth = this.scroller.offsetWidth;
            this.scrollerHeight = this.scroller.offsetHeight;
            this.maxScrollX = this.wrapperWidth - this.scrollerWidth;
            this.maxScrollY = this.wrapperHeight - this.scrollerHeight;
            this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0;
            this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0;
            if (!this.hasHorizontalScroll) {
                this.maxScrollX = 0;
                this.scrollerWidth = this.wrapperWidth;
            }
            if (!this.hasVerticalScroll) {
                this.maxScrollY = 0;
                this.scrollerHeight = this.wrapperHeight;
            }
            this.endTime = 0;
            this.directionX = 0;
            this.directionY = 0;
            this.wrapperOffset = utils.offset(this.wrapper);
            this._execEvent('refresh');
            this.resetPosition();
        },
        on: function (type, fn) {
            if (!this._events[type]) {
                this._events[type] = [];
            }
            this._events[type].push(fn);
        },
        off: function (type, fn) {
            if (!this._events[type]) {
                return;
            }
            var index = this._events[type].indexOf(fn);
            if (index > -1) {
                this._events[type].splice(index, 1);
            }
        },
        _execEvent: function (type) {
            if (!this._events[type]) {
                return;
            }
            var i = 0, l = this._events[type].length;
            if (!l) {
                return;
            }
            for (; i < l; i++) {
                this._events[type][i].apply(this, [].slice.call(arguments, 1));
            }
        },
        scrollBy: function (x, y, time, easing) {
            x = this.x + x;
            y = this.y + y;
            time = time || 0;
            this.scrollTo(x, y, time, easing);
        },
        scrollTo: function (x, y, time, easing) {
            easing = easing || utils.ease.circular;
            this.isInTransition = this.options.useTransition && time > 0;
            if (!time || this.options.useTransition && easing.style) {
                this._transitionTimingFunction(easing.style);
                this._transitionTime(time);
                this._translate(x, y);
            } else {
                this._animate(x, y, time, easing.fn);
            }
        },
        scrollToElement: function (el, time, offsetX, offsetY, easing) {
            el = el.nodeType ? el : this.scroller.querySelector(el);
            if (!el) {
                return;
            }
            var pos = utils.offset(el);
            pos.left -= this.wrapperOffset.left;
            pos.top -= this.wrapperOffset.top;
            if (offsetX === true) {
                offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2);
            }
            if (offsetY === true) {
                offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2);
            }
            pos.left -= offsetX || 0;
            pos.top -= offsetY || 0;
            pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
            pos.top = pos.top > 0 ? 0 : pos.top < this.maxScrollY ? this.maxScrollY : pos.top;
            time = time === undefined || time === null || time === 'auto' ? Math.max(Math.abs(this.x - pos.left), Math.abs(this.y - pos.top)) : time;
            this.scrollTo(pos.left, pos.top, time, easing);
        },
        _transitionTime: function (time) {
            time = time || 0;
            this.scrollerStyle[utils.style.transitionDuration] = time + 'ms';
            if (!time && utils.isBadAndroid) {
                this.scrollerStyle[utils.style.transitionDuration] = '0.001s';
            }
            if (this.indicators) {
                for (var i = this.indicators.length; i--;) {
                    this.indicators[i].transitionTime(time);
                }
            }
        },
        _transitionTimingFunction: function (easing) {
            this.scrollerStyle[utils.style.transitionTimingFunction] = easing;
            if (this.indicators) {
                for (var i = this.indicators.length; i--;) {
                    this.indicators[i].transitionTimingFunction(easing);
                }
            }
        },
        _translate: function (x, y) {
            if (this.options.useTransform) {
                this.scrollerStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.translateZ;
            } else {
                x = Math.round(x);
                y = Math.round(y);
                this.scrollerStyle.left = x + 'px';
                this.scrollerStyle.top = y + 'px';
            }
            this.x = x;
            this.y = y;
            if (this.indicators) {
                for (var i = this.indicators.length; i--;) {
                    this.indicators[i].updatePosition();
                }
            }
        },
        _initEvents: function (remove) {
            var eventType = remove ? utils.removeEvent : utils.addEvent, target = this.options.bindToWrapper ? this.wrapper : window;
            eventType(window, 'orientationchange', this);
            eventType(window, 'resize', this);
            if (this.options.click) {
                eventType(this.wrapper, 'click', this, true);
            }
            if (!this.options.disableMouse) {
                eventType(this.wrapper, 'mousedown', this);
                eventType(target, 'mousemove', this);
                eventType(target, 'mousecancel', this);
                eventType(target, 'mouseup', this);
            }
            if (utils.hasPointer && !this.options.disablePointer) {
                eventType(this.wrapper, utils.prefixPointerEvent('pointerdown'), this);
                eventType(target, utils.prefixPointerEvent('pointermove'), this);
                eventType(target, utils.prefixPointerEvent('pointercancel'), this);
                eventType(target, utils.prefixPointerEvent('pointerup'), this);
            }
            if (utils.hasTouch && !this.options.disableTouch) {
                eventType(this.wrapper, 'touchstart', this);
                eventType(target, 'touchmove', this);
                eventType(target, 'touchcancel', this);
                eventType(target, 'touchend', this);
            }
            eventType(this.scroller, 'transitionend', this);
            eventType(this.scroller, 'webkitTransitionEnd', this);
            eventType(this.scroller, 'oTransitionEnd', this);
            eventType(this.scroller, 'MSTransitionEnd', this);
        },
        getComputedPosition: function () {
            var matrix = window.getComputedStyle(this.scroller, null), x, y;
            if (this.options.useTransform) {
                matrix = matrix[utils.style.transform].split(')')[0].split(', ');
                x = +(matrix[12] || matrix[4]);
                y = +(matrix[13] || matrix[5]);
            } else {
                x = +matrix.left.replace(/[^-\d.]/g, '');
                y = +matrix.top.replace(/[^-\d.]/g, '');
            }
            return {
                x: x,
                y: y
            };
        },
        _initIndicators: function () {
            var interactive = this.options.interactiveScrollbars, customStyle = typeof this.options.scrollbars != 'string', indicators = [], indicator;
            var that = this;
            this.indicators = [];
            if (this.options.scrollbars) {
                if (this.options.scrollY) {
                    indicator = {
                        el: createDefaultScrollbar('v', interactive, this.options.scrollbars),
                        interactive: interactive,
                        defaultScrollbars: true,
                        customStyle: customStyle,
                        resize: this.options.resizeScrollbars,
                        shrink: this.options.shrinkScrollbars,
                        fade: this.options.fadeScrollbars,
                        listenX: false
                    };
                    this.wrapper.appendChild(indicator.el);
                    indicators.push(indicator);
                }
                if (this.options.scrollX) {
                    indicator = {
                        el: createDefaultScrollbar('h', interactive, this.options.scrollbars),
                        interactive: interactive,
                        defaultScrollbars: true,
                        customStyle: customStyle,
                        resize: this.options.resizeScrollbars,
                        shrink: this.options.shrinkScrollbars,
                        fade: this.options.fadeScrollbars,
                        listenY: false
                    };
                    this.wrapper.appendChild(indicator.el);
                    indicators.push(indicator);
                }
            }
            if (this.options.indicators) {
                indicators = indicators.concat(this.options.indicators);
            }
            for (var i = indicators.length; i--;) {
                this.indicators.push(new Indicator(this, indicators[i]));
            }
            function _indicatorsMap(fn) {
                for (var i = that.indicators.length; i--;) {
                    fn.call(that.indicators[i]);
                }
            }
            if (this.options.fadeScrollbars) {
                this.on('scrollEnd', function () {
                    _indicatorsMap(function () {
                        this.fade();
                    });
                });
                this.on('scrollCancel', function () {
                    _indicatorsMap(function () {
                        this.fade();
                    });
                });
                this.on('scrollStart', function () {
                    _indicatorsMap(function () {
                        this.fade(1);
                    });
                });
                this.on('beforeScrollStart', function () {
                    _indicatorsMap(function () {
                        this.fade(1, true);
                    });
                });
            }
            this.on('refresh', function () {
                _indicatorsMap(function () {
                    this.refresh();
                });
            });
            this.on('destroy', function () {
                _indicatorsMap(function () {
                    this.destroy();
                });
                delete this.indicators;
            });
        },
        _initWheel: function () {
            utils.addEvent(this.wrapper, 'wheel', this);
            utils.addEvent(this.wrapper, 'mousewheel', this);
            utils.addEvent(this.wrapper, 'DOMMouseScroll', this);
            this.on('destroy', function () {
                utils.removeEvent(this.wrapper, 'wheel', this);
                utils.removeEvent(this.wrapper, 'mousewheel', this);
                utils.removeEvent(this.wrapper, 'DOMMouseScroll', this);
            });
        },
        _wheel: function (e) {
            if (!this.enabled) {
                return;
            }
            e.preventDefault();
            e.stopPropagation();
            var wheelDeltaX, wheelDeltaY, newX, newY, that = this;
            if (this.wheelTimeout === undefined) {
                that._execEvent('scrollStart');
            }
            clearTimeout(this.wheelTimeout);
            this.wheelTimeout = setTimeout(function () {
                that._execEvent('scrollEnd');
                that.wheelTimeout = undefined;
            }, 400);
            if ('deltaX' in e) {
                if (e.deltaMode === 1) {
                    wheelDeltaX = -e.deltaX * this.options.mouseWheelSpeed;
                    wheelDeltaY = -e.deltaY * this.options.mouseWheelSpeed;
                } else {
                    wheelDeltaX = -e.deltaX;
                    wheelDeltaY = -e.deltaY;
                }
            } else if ('wheelDeltaX' in e) {
                wheelDeltaX = e.wheelDeltaX / 120 * this.options.mouseWheelSpeed;
                wheelDeltaY = e.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
            } else if ('wheelDelta' in e) {
                wheelDeltaX = wheelDeltaY = e.wheelDelta / 120 * this.options.mouseWheelSpeed;
            } else if ('detail' in e) {
                wheelDeltaX = wheelDeltaY = -e.detail / 3 * this.options.mouseWheelSpeed;
            } else {
                return;
            }
            wheelDeltaX *= this.options.invertWheelDirection;
            wheelDeltaY *= this.options.invertWheelDirection;
            if (!this.hasVerticalScroll) {
                wheelDeltaX = wheelDeltaY;
                wheelDeltaY = 0;
            }
            if (this.options.snap) {
                newX = this.currentPage.pageX;
                newY = this.currentPage.pageY;
                if (wheelDeltaX > 0) {
                    newX--;
                } else if (wheelDeltaX < 0) {
                    newX++;
                }
                if (wheelDeltaY > 0) {
                    newY--;
                } else if (wheelDeltaY < 0) {
                    newY++;
                }
                this.goToPage(newX, newY);
                return;
            }
            newX = this.x + Math.round(this.hasHorizontalScroll ? wheelDeltaX : 0);
            newY = this.y + Math.round(this.hasVerticalScroll ? wheelDeltaY : 0);
            if (newX > 0) {
                newX = 0;
            } else if (newX < this.maxScrollX) {
                newX = this.maxScrollX;
            }
            if (newY > 0) {
                newY = 0;
            } else if (newY < this.maxScrollY) {
                newY = this.maxScrollY;
            }
            this.scrollTo(newX, newY, 0);
        },
        _initSnap: function () {
            this.currentPage = {};
            if (typeof this.options.snap == 'string') {
                this.options.snap = this.scroller.querySelectorAll(this.options.snap);
            }
            this.on('refresh', function () {
                var i = 0, l, m = 0, n, cx, cy, x = 0, y, stepX = this.options.snapStepX || this.wrapperWidth, stepY = this.options.snapStepY || this.wrapperHeight, el;
                this.pages = [];
                if (!this.wrapperWidth || !this.wrapperHeight || !this.scrollerWidth || !this.scrollerHeight) {
                    return;
                }
                if (this.options.snap === true) {
                    cx = Math.round(stepX / 2);
                    cy = Math.round(stepY / 2);
                    while (x > -this.scrollerWidth) {
                        this.pages[i] = [];
                        l = 0;
                        y = 0;
                        while (y > -this.scrollerHeight) {
                            this.pages[i][l] = {
                                x: Math.max(x, this.maxScrollX),
                                y: Math.max(y, this.maxScrollY),
                                width: stepX,
                                height: stepY,
                                cx: x - cx,
                                cy: y - cy
                            };
                            y -= stepY;
                            l++;
                        }
                        x -= stepX;
                        i++;
                    }
                } else {
                    el = this.options.snap;
                    l = el.length;
                    n = -1;
                    for (; i < l; i++) {
                        if (i === 0 || el[i].offsetLeft <= el[i - 1].offsetLeft) {
                            m = 0;
                            n++;
                        }
                        if (!this.pages[m]) {
                            this.pages[m] = [];
                        }
                        x = Math.max(-el[i].offsetLeft, this.maxScrollX);
                        y = Math.max(-el[i].offsetTop, this.maxScrollY);
                        cx = x - Math.round(el[i].offsetWidth / 2);
                        cy = y - Math.round(el[i].offsetHeight / 2);
                        this.pages[m][n] = {
                            x: x,
                            y: y,
                            width: el[i].offsetWidth,
                            height: el[i].offsetHeight,
                            cx: cx,
                            cy: cy
                        };
                        if (x > this.maxScrollX) {
                            m++;
                        }
                    }
                }
                this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0);
                if (this.options.snapThreshold % 1 === 0) {
                    this.snapThresholdX = this.options.snapThreshold;
                    this.snapThresholdY = this.options.snapThreshold;
                } else {
                    this.snapThresholdX = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold);
                    this.snapThresholdY = Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold);
                }
            });
            this.on('flick', function () {
                var time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(this.x - this.startX), 1000), Math.min(Math.abs(this.y - this.startY), 1000)), 300);
                this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, time);
            });
        },
        _nearestSnap: function (x, y) {
            if (!this.pages.length) {
                return {
                    x: 0,
                    y: 0,
                    pageX: 0,
                    pageY: 0
                };
            }
            var i = 0, l = this.pages.length, m = 0;
            if (Math.abs(x - this.absStartX) < this.snapThresholdX && Math.abs(y - this.absStartY) < this.snapThresholdY) {
                return this.currentPage;
            }
            if (x > 0) {
                x = 0;
            } else if (x < this.maxScrollX) {
                x = this.maxScrollX;
            }
            if (y > 0) {
                y = 0;
            } else if (y < this.maxScrollY) {
                y = this.maxScrollY;
            }
            for (; i < l; i++) {
                if (x >= this.pages[i][0].cx) {
                    x = this.pages[i][0].x;
                    break;
                }
            }
            l = this.pages[i].length;
            for (; m < l; m++) {
                if (y >= this.pages[0][m].cy) {
                    y = this.pages[0][m].y;
                    break;
                }
            }
            if (i == this.currentPage.pageX) {
                i += this.directionX;
                if (i < 0) {
                    i = 0;
                } else if (i >= this.pages.length) {
                    i = this.pages.length - 1;
                }
                x = this.pages[i][0].x;
            }
            if (m == this.currentPage.pageY) {
                m += this.directionY;
                if (m < 0) {
                    m = 0;
                } else if (m >= this.pages[0].length) {
                    m = this.pages[0].length - 1;
                }
                y = this.pages[0][m].y;
            }
            return {
                x: x,
                y: y,
                pageX: i,
                pageY: m
            };
        },
        goToPage: function (x, y, time, easing) {
            easing = easing || this.options.bounceEasing;
            if (x >= this.pages.length) {
                x = this.pages.length - 1;
            } else if (x < 0) {
                x = 0;
            }
            if (y >= this.pages[x].length) {
                y = this.pages[x].length - 1;
            } else if (y < 0) {
                y = 0;
            }
            var posX = this.pages[x][y].x, posY = this.pages[x][y].y;
            time = time === undefined ? this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(posX - this.x), 1000), Math.min(Math.abs(posY - this.y), 1000)), 300) : time;
            this.currentPage = {
                x: posX,
                y: posY,
                pageX: x,
                pageY: y
            };
            this.scrollTo(posX, posY, time, easing);
        },
        next: function (time, easing) {
            var x = this.currentPage.pageX, y = this.currentPage.pageY;
            x++;
            if (x >= this.pages.length && this.hasVerticalScroll) {
                x = 0;
                y++;
            }
            this.goToPage(x, y, time, easing);
        },
        prev: function (time, easing) {
            var x = this.currentPage.pageX, y = this.currentPage.pageY;
            x--;
            if (x < 0 && this.hasVerticalScroll) {
                x = 0;
                y--;
            }
            this.goToPage(x, y, time, easing);
        },
        _initKeys: function (e) {
            var keys = {
                pageUp: 33,
                pageDown: 34,
                end: 35,
                home: 36,
                left: 37,
                up: 38,
                right: 39,
                down: 40
            };
            var i;
            if (typeof this.options.keyBindings == 'object') {
                for (i in this.options.keyBindings) {
                    if (typeof this.options.keyBindings[i] == 'string') {
                        this.options.keyBindings[i] = this.options.keyBindings[i].toUpperCase().charCodeAt(0);
                    }
                }
            } else {
                this.options.keyBindings = {};
            }
            for (i in keys) {
                this.options.keyBindings[i] = this.options.keyBindings[i] || keys[i];
            }
            utils.addEvent(window, 'keydown', this);
            this.on('destroy', function () {
                utils.removeEvent(window, 'keydown', this);
            });
        },
        _key: function (e) {
            if (!this.enabled) {
                return;
            }
            var snap = this.options.snap, newX = snap ? this.currentPage.pageX : this.x, newY = snap ? this.currentPage.pageY : this.y, now = utils.getTime(), prevTime = this.keyTime || 0, acceleration = 0.25, pos;
            if (this.options.useTransition && this.isInTransition) {
                pos = this.getComputedPosition();
                this._translate(Math.round(pos.x), Math.round(pos.y));
                this.isInTransition = false;
            }
            this.keyAcceleration = now - prevTime < 200 ? Math.min(this.keyAcceleration + acceleration, 50) : 0;
            switch (e.keyCode) {
            case this.options.keyBindings.pageUp:
                if (this.hasHorizontalScroll && !this.hasVerticalScroll) {
                    newX += snap ? 1 : this.wrapperWidth;
                } else {
                    newY += snap ? 1 : this.wrapperHeight;
                }
                break;
            case this.options.keyBindings.pageDown:
                if (this.hasHorizontalScroll && !this.hasVerticalScroll) {
                    newX -= snap ? 1 : this.wrapperWidth;
                } else {
                    newY -= snap ? 1 : this.wrapperHeight;
                }
                break;
            case this.options.keyBindings.end:
                newX = snap ? this.pages.length - 1 : this.maxScrollX;
                newY = snap ? this.pages[0].length - 1 : this.maxScrollY;
                break;
            case this.options.keyBindings.home:
                newX = 0;
                newY = 0;
                break;
            case this.options.keyBindings.left:
                newX += snap ? -1 : 5 + this.keyAcceleration >> 0;
                break;
            case this.options.keyBindings.up:
                newY += snap ? 1 : 5 + this.keyAcceleration >> 0;
                break;
            case this.options.keyBindings.right:
                newX -= snap ? -1 : 5 + this.keyAcceleration >> 0;
                break;
            case this.options.keyBindings.down:
                newY -= snap ? 1 : 5 + this.keyAcceleration >> 0;
                break;
            default:
                return;
            }
            if (snap) {
                this.goToPage(newX, newY);
                return;
            }
            if (newX > 0) {
                newX = 0;
                this.keyAcceleration = 0;
            } else if (newX < this.maxScrollX) {
                newX = this.maxScrollX;
                this.keyAcceleration = 0;
            }
            if (newY > 0) {
                newY = 0;
                this.keyAcceleration = 0;
            } else if (newY < this.maxScrollY) {
                newY = this.maxScrollY;
                this.keyAcceleration = 0;
            }
            this.scrollTo(newX, newY, 0);
            this.keyTime = now;
        },
        _animate: function (destX, destY, duration, easingFn) {
            var that = this, startX = this.x, startY = this.y, startTime = utils.getTime(), destTime = startTime + duration;
            function step() {
                var now = utils.getTime(), newX, newY, easing;
                if (now >= destTime) {
                    that.isAnimating = false;
                    that._translate(destX, destY);
                    if (!that.resetPosition(that.options.bounceTime)) {
                        that._execEvent('scrollEnd');
                    }
                    return;
                }
                now = (now - startTime) / duration;
                easing = easingFn(now);
                newX = (destX - startX) * easing + startX;
                newY = (destY - startY) * easing + startY;
                that._translate(newX, newY);
                if (that.isAnimating) {
                    rAF(step);
                }
            }
            this.isAnimating = true;
            step();
        },
        handleEvent: function (e) {
            switch (e.type) {
            case 'touchstart':
            case 'pointerdown':
            case 'MSPointerDown':
            case 'mousedown':
                this._start(e);
                break;
            case 'touchmove':
            case 'pointermove':
            case 'MSPointerMove':
            case 'mousemove':
                this._move(e);
                break;
            case 'touchend':
            case 'pointerup':
            case 'MSPointerUp':
            case 'mouseup':
            case 'touchcancel':
            case 'pointercancel':
            case 'MSPointerCancel':
            case 'mousecancel':
                this._end(e);
                break;
            case 'orientationchange':
            case 'resize':
                this._resize();
                break;
            case 'transitionend':
            case 'webkitTransitionEnd':
            case 'oTransitionEnd':
            case 'MSTransitionEnd':
                this._transitionEnd(e);
                break;
            case 'wheel':
            case 'DOMMouseScroll':
            case 'mousewheel':
                this._wheel(e);
                break;
            case 'keydown':
                this._key(e);
                break;
            case 'click':
                if (!e._constructed) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                break;
            }
        }
    };
    function createDefaultScrollbar(direction, interactive, type) {
        var scrollbar = document.createElement('div'), indicator = document.createElement('div');
        if (type === true) {
            scrollbar.style.cssText = 'position:absolute;z-index:9999';
            indicator.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px';
        }
        indicator.className = 'iScrollIndicator';
        if (direction == 'h') {
            if (type === true) {
                scrollbar.style.cssText += ';height:7px;left:2px;right:2px;bottom:0';
                indicator.style.height = '100%';
            }
            scrollbar.className = 'iScrollHorizontalScrollbar';
        } else {
            if (type === true) {
                scrollbar.style.cssText += ';width:7px;bottom:2px;top:2px;right:1px';
                indicator.style.width = '100%';
            }
            scrollbar.className = 'iScrollVerticalScrollbar';
        }
        scrollbar.style.cssText += ';overflow:hidden';
        if (!interactive) {
            scrollbar.style.pointerEvents = 'none';
        }
        scrollbar.appendChild(indicator);
        return scrollbar;
    }
    function Indicator(scroller, options) {
        this.wrapper = typeof options.el == 'string' ? document.querySelector(options.el) : options.el;
        this.wrapperStyle = this.wrapper.style;
        this.indicator = this.wrapper.children[0];
        this.indicatorStyle = this.indicator.style;
        this.scroller = scroller;
        this.options = {
            listenX: true,
            listenY: true,
            interactive: false,
            resize: true,
            defaultScrollbars: false,
            shrink: false,
            fade: false,
            speedRatioX: 0,
            speedRatioY: 0
        };
        for (var i in options) {
            this.options[i] = options[i];
        }
        this.sizeRatioX = 1;
        this.sizeRatioY = 1;
        this.maxPosX = 0;
        this.maxPosY = 0;
        if (this.options.interactive) {
            if (!this.options.disableTouch) {
                utils.addEvent(this.indicator, 'touchstart', this);
                utils.addEvent(window, 'touchend', this);
            }
            if (!this.options.disablePointer) {
                utils.addEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
                utils.addEvent(window, utils.prefixPointerEvent('pointerup'), this);
            }
            if (!this.options.disableMouse) {
                utils.addEvent(this.indicator, 'mousedown', this);
                utils.addEvent(window, 'mouseup', this);
            }
        }
        if (this.options.fade) {
            this.wrapperStyle[utils.style.transform] = this.scroller.translateZ;
            this.wrapperStyle[utils.style.transitionDuration] = utils.isBadAndroid ? '0.001s' : '0ms';
            this.wrapperStyle.opacity = '0';
        }
    }
    Indicator.prototype = {
        handleEvent: function (e) {
            switch (e.type) {
            case 'touchstart':
            case 'pointerdown':
            case 'MSPointerDown':
            case 'mousedown':
                this._start(e);
                break;
            case 'touchmove':
            case 'pointermove':
            case 'MSPointerMove':
            case 'mousemove':
                this._move(e);
                break;
            case 'touchend':
            case 'pointerup':
            case 'MSPointerUp':
            case 'mouseup':
            case 'touchcancel':
            case 'pointercancel':
            case 'MSPointerCancel':
            case 'mousecancel':
                this._end(e);
                break;
            }
        },
        destroy: function () {
            if (this.options.interactive) {
                utils.removeEvent(this.indicator, 'touchstart', this);
                utils.removeEvent(this.indicator, utils.prefixPointerEvent('pointerdown'), this);
                utils.removeEvent(this.indicator, 'mousedown', this);
                utils.removeEvent(window, 'touchmove', this);
                utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
                utils.removeEvent(window, 'mousemove', this);
                utils.removeEvent(window, 'touchend', this);
                utils.removeEvent(window, utils.prefixPointerEvent('pointerup'), this);
                utils.removeEvent(window, 'mouseup', this);
            }
            if (this.options.defaultScrollbars) {
                this.wrapper.parentNode.removeChild(this.wrapper);
            }
        },
        _start: function (e) {
            var point = e.touches ? e.touches[0] : e;
            e.preventDefault();
            e.stopPropagation();
            this.transitionTime();
            this.initiated = true;
            this.moved = false;
            this.lastPointX = point.pageX;
            this.lastPointY = point.pageY;
            this.startTime = utils.getTime();
            if (!this.options.disableTouch) {
                utils.addEvent(window, 'touchmove', this);
            }
            if (!this.options.disablePointer) {
                utils.addEvent(window, utils.prefixPointerEvent('pointermove'), this);
            }
            if (!this.options.disableMouse) {
                utils.addEvent(window, 'mousemove', this);
            }
            this.scroller._execEvent('beforeScrollStart');
        },
        _move: function (e) {
            var point = e.touches ? e.touches[0] : e, deltaX, deltaY, newX, newY, timestamp = utils.getTime();
            if (!this.moved) {
                this.scroller._execEvent('scrollStart');
            }
            this.moved = true;
            deltaX = point.pageX - this.lastPointX;
            this.lastPointX = point.pageX;
            deltaY = point.pageY - this.lastPointY;
            this.lastPointY = point.pageY;
            newX = this.x + deltaX;
            newY = this.y + deltaY;
            this._pos(newX, newY);
            e.preventDefault();
            e.stopPropagation();
        },
        _end: function (e) {
            if (!this.initiated) {
                return;
            }
            this.initiated = false;
            e.preventDefault();
            e.stopPropagation();
            utils.removeEvent(window, 'touchmove', this);
            utils.removeEvent(window, utils.prefixPointerEvent('pointermove'), this);
            utils.removeEvent(window, 'mousemove', this);
            if (this.scroller.options.snap) {
                var snap = this.scroller._nearestSnap(this.scroller.x, this.scroller.y);
                var time = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(this.scroller.x - snap.x), 1000), Math.min(Math.abs(this.scroller.y - snap.y), 1000)), 300);
                if (this.scroller.x != snap.x || this.scroller.y != snap.y) {
                    this.scroller.directionX = 0;
                    this.scroller.directionY = 0;
                    this.scroller.currentPage = snap;
                    this.scroller.scrollTo(snap.x, snap.y, time, this.scroller.options.bounceEasing);
                }
            }
            if (this.moved) {
                this.scroller._execEvent('scrollEnd');
            }
        },
        transitionTime: function (time) {
            time = time || 0;
            this.indicatorStyle[utils.style.transitionDuration] = time + 'ms';
            if (!time && utils.isBadAndroid) {
                this.indicatorStyle[utils.style.transitionDuration] = '0.001s';
            }
        },
        transitionTimingFunction: function (easing) {
            this.indicatorStyle[utils.style.transitionTimingFunction] = easing;
        },
        refresh: function () {
            this.transitionTime();
            if (this.options.listenX && !this.options.listenY) {
                this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? 'block' : 'none';
            } else if (this.options.listenY && !this.options.listenX) {
                this.indicatorStyle.display = this.scroller.hasVerticalScroll ? 'block' : 'none';
            } else {
                this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? 'block' : 'none';
            }
            if (this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll) {
                utils.addClass(this.wrapper, 'iScrollBothScrollbars');
                utils.removeClass(this.wrapper, 'iScrollLoneScrollbar');
                if (this.options.defaultScrollbars && this.options.customStyle) {
                    if (this.options.listenX) {
                        this.wrapper.style.right = '8px';
                    } else {
                        this.wrapper.style.bottom = '8px';
                    }
                }
            } else {
                utils.removeClass(this.wrapper, 'iScrollBothScrollbars');
                utils.addClass(this.wrapper, 'iScrollLoneScrollbar');
                if (this.options.defaultScrollbars && this.options.customStyle) {
                    if (this.options.listenX) {
                        this.wrapper.style.right = '2px';
                    } else {
                        this.wrapper.style.bottom = '2px';
                    }
                }
            }
            var r = this.wrapper.offsetHeight;
            if (this.options.listenX) {
                this.wrapperWidth = this.wrapper.clientWidth;
                if (this.options.resize) {
                    this.indicatorWidth = Math.max(Math.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8);
                    this.indicatorStyle.width = this.indicatorWidth + 'px';
                } else {
                    this.indicatorWidth = this.indicator.clientWidth;
                }
                this.maxPosX = this.wrapperWidth - this.indicatorWidth;
                if (this.options.shrink == 'clip') {
                    this.minBoundaryX = -this.indicatorWidth + 8;
                    this.maxBoundaryX = this.wrapperWidth - 8;
                } else {
                    this.minBoundaryX = 0;
                    this.maxBoundaryX = this.maxPosX;
                }
                this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX;
            }
            if (this.options.listenY) {
                this.wrapperHeight = this.wrapper.clientHeight;
                if (this.options.resize) {
                    this.indicatorHeight = Math.max(Math.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8);
                    this.indicatorStyle.height = this.indicatorHeight + 'px';
                } else {
                    this.indicatorHeight = this.indicator.clientHeight;
                }
                this.maxPosY = this.wrapperHeight - this.indicatorHeight;
                if (this.options.shrink == 'clip') {
                    this.minBoundaryY = -this.indicatorHeight + 8;
                    this.maxBoundaryY = this.wrapperHeight - 8;
                } else {
                    this.minBoundaryY = 0;
                    this.maxBoundaryY = this.maxPosY;
                }
                this.maxPosY = this.wrapperHeight - this.indicatorHeight;
                this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY;
            }
            this.updatePosition();
        },
        updatePosition: function () {
            var x = this.options.listenX && Math.round(this.sizeRatioX * this.scroller.x) || 0, y = this.options.listenY && Math.round(this.sizeRatioY * this.scroller.y) || 0;
            if (!this.options.ignoreBoundaries) {
                if (x < this.minBoundaryX) {
                    if (this.options.shrink == 'scale') {
                        this.width = Math.max(this.indicatorWidth + x, 8);
                        this.indicatorStyle.width = this.width + 'px';
                    }
                    x = this.minBoundaryX;
                } else if (x > this.maxBoundaryX) {
                    if (this.options.shrink == 'scale') {
                        this.width = Math.max(this.indicatorWidth - (x - this.maxPosX), 8);
                        this.indicatorStyle.width = this.width + 'px';
                        x = this.maxPosX + this.indicatorWidth - this.width;
                    } else {
                        x = this.maxBoundaryX;
                    }
                } else if (this.options.shrink == 'scale' && this.width != this.indicatorWidth) {
                    this.width = this.indicatorWidth;
                    this.indicatorStyle.width = this.width + 'px';
                }
                if (y < this.minBoundaryY) {
                    if (this.options.shrink == 'scale') {
                        this.height = Math.max(this.indicatorHeight + y * 3, 8);
                        this.indicatorStyle.height = this.height + 'px';
                    }
                    y = this.minBoundaryY;
                } else if (y > this.maxBoundaryY) {
                    if (this.options.shrink == 'scale') {
                        this.height = Math.max(this.indicatorHeight - (y - this.maxPosY) * 3, 8);
                        this.indicatorStyle.height = this.height + 'px';
                        y = this.maxPosY + this.indicatorHeight - this.height;
                    } else {
                        y = this.maxBoundaryY;
                    }
                } else if (this.options.shrink == 'scale' && this.height != this.indicatorHeight) {
                    this.height = this.indicatorHeight;
                    this.indicatorStyle.height = this.height + 'px';
                }
            }
            this.x = x;
            this.y = y;
            if (this.scroller.options.useTransform) {
                this.indicatorStyle[utils.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.scroller.translateZ;
            } else {
                this.indicatorStyle.left = x + 'px';
                this.indicatorStyle.top = y + 'px';
            }
        },
        _pos: function (x, y) {
            if (x < 0) {
                x = 0;
            } else if (x > this.maxPosX) {
                x = this.maxPosX;
            }
            if (y < 0) {
                y = 0;
            } else if (y > this.maxPosY) {
                y = this.maxPosY;
            }
            x = this.options.listenX ? Math.round(x / this.sizeRatioX) : this.scroller.x;
            y = this.options.listenY ? Math.round(y / this.sizeRatioY) : this.scroller.y;
            this.scroller.scrollTo(x, y);
        },
        fade: function (val, hold) {
            if (hold && !this.visible) {
                return;
            }
            clearTimeout(this.fadeTimeout);
            this.fadeTimeout = null;
            var time = val ? 250 : 500, delay = val ? 0 : 300;
            val = val ? '1' : '0';
            this.wrapperStyle[utils.style.transitionDuration] = time + 'ms';
            this.fadeTimeout = setTimeout(function (val) {
                this.wrapperStyle.opacity = val;
                this.visible = +val;
            }.bind(this, val), delay);
        }
    };
    IScroll.utils = utils;
    if (typeof module != 'undefined' && module.exports) {
        module.exports = IScroll;
    } else {
        window.IScroll = IScroll;
    }
}(window, document, Math));
define('scroll', [], function () {
    return;
});
'use strict';
function toggleShow($target) {
    if ($target.css('display') === 'none') {
        $target.show();
    } else {
        $target.hide();
    }
}
function changeClass($target, classname) {
    $target.addClass(classname).siblings().removeClass(classname);
}
function bindScroll($target) {
    var arr = new Array();
    $target.each(function () {
        var iscroll = new IScroll('#' + $(this).attr('id'), {
            scrollbars: true,
            mouseWheel: true,
            interactiveScrollbars: true,
            shrinkScrollbars: 'scale',
            useTransition: true
        });
        arr.push(iscroll);
    });
    return arr;
}
function refreshScroll(arr) {
    arr.forEach(function (val) {
        val.refresh();
    });
}
sendAjax.DEFAULT = {
    type: 'post',
    complete: function complete() {
    },
    beforeSend: function beforeSend() {
    },
    data: {}
};
function sendAjax(opts) {
    var opts = $.extend({}, sendAjax.DEFAULT, opts);
    $.ajax({
        url: opts.url,
        type: opts.type,
        data: opts.data,
        success: function success(data) {
            opts.success(data);
        },
        complete: function complete() {
            opts.complete();
        },
        beforeSend: function beforeSend() {
            opts.beforeSend();
        }
    });
}
function openModal(target, close) {
    $.modal.close();
    console.log(close);
    target.modal({
        overlayClose: close,
        onOpen: function onOpen(dialog) {
            dialog.overlay.fadeIn('fast', function () {
                dialog.data.hide();
                dialog.container.fadeIn('fast', function () {
                    dialog.data.fadeIn('normal');
                });
            });
        },
        overlayCss: { backgroundColor: '#000' },
        opacity: 85
    });
}
function moveBlock($target, location) {
    $target.css('transform', 'translateX(' + location + 'px)');
}
function changeShow(first, second) {
    first.show();
    second.hide();
}
define('utility', [], function () {
    return;
});
'use strict';
define('prompt', ['jquery'], function ($) {
    Prompt.DEFAULT = { prompt: $('.prompt-frame') };
    function Prompt(opts) {
        this.opts = $.extend({}, Prompt.DEFAULT, opts);
        this.prompt_ele = this.opts.prompt;
        this.dist = this.prompt_ele.height();
    }
    Prompt.prototype.showPrompt = function () {
        this.prompt_ele.css('transform', 'translateY(' + this.dist + 'px)');
    };
    Prompt.prototype.hidePrompt = function () {
        this.prompt_ele.css('transform', 'translateY(' + 0 + 'px)');
    };
    Prompt.prototype.changeInfo = function ($info) {
        this.prompt_ele.text($info);
        this.showPrompt();
        var _this = this;
        setTimeout(function () {
            _this.hidePrompt();
        }, 1500);
    };
    Prompt.prototype.loading = function (percent) {
        this.showPrompt();
        if (typeof percent === 'number') {
            percent = String(percent) + '%';
        } else {
            percent = String(percent);
        }
        this.prompt_ele.text(percent);
    };
    Prompt.prototype.detactInfo = function (percent) {
        this.showPrompt();
        this.prompt_ele.text('检验文件中:' + percent + '%');
        var _this = this;
        if (percent === 100) {
            this.prompt_ele.text('检测成功~开始上传');
            setTimeout(function () {
                _this.hidePrompt();
            }, 800);
        }
    };
    Prompt.prototype.goPay = function (num) {
        this.showPrompt();
        this.prompt_ele.text('您的未解析文件数目:' + num);
        if (num === 0) {
            this.prompt_ele.text('文件解析完成');
        }
    };
    return { Prompt: Prompt };
});
'use strict';
define('enroll', [
    'jquery',
    'prompt',
    'utility'
], function ($, prompt) {
    Enroll.DEFAULT = {
        reg: [],
        msg: [],
        override: false,
        url: ''
    };
    prompt = new prompt.Prompt({ prompt: $('.prompt') });
    function Enroll($ele, opts) {
        this.opts = $.extend({}, Enroll.DEFAULT, opts);
        this.len = this.opts.reg.length;
        var _this = this, reg = this.opts.reg, msg = this.opts.msg;
        $ele.on('focus', function () {
            $(this).removeClass('error');
            $(this).attr('data-iden', '1');
        });
        $ele.on('blur', function () {
            var content = $(this).val();
            if (content == null || content == '') {
                prompt.changeInfo('输入不能为空');
                $ele.addClass('error');
                $(this).attr('data-iden', '0');
                return false;
            }
            for (var i = 0; i < _this.len; i++) {
                if (!reg[i].test(content)) {
                    prompt.changeInfo(msg[0]);
                    $ele.addClass('error');
                    $(this).attr('data-iden', '0');
                    return false;
                }
            }
            if (_this.override) {
                sendAjax({
                    url: _this.opts.url,
                    success: function success(data) {
                        if (!data.success) {
                            prompt.changeInfo('用户名已存在');
                            $ele.addClass('error');
                            $(this).attr('data-iden', '0');
                        } else {
                            $(this).removeClass('error');
                            $(this).attr('data-iden', '1');
                        }
                    }
                });
            }
        });
    }
    function InputFocus($ele) {
        $ele.on('focus', function () {
            $(this).removeClass('error');
            $(this).attr('data-iden', '1');
        });
    }
    $.fn.extend({
        enroll: function enroll(opts) {
            return this.each(function () {
                new Enroll($(this), opts);
            });
        },
        inputFocus: function inputFocus() {
            return this.each(function () {
                new InputFocus($(this));
            });
        }
    });
});
(function () {
    var version = '2.0.7', hasOwn = {}.hasOwnProperty, PingppSDK = function () {
        }, cfg = {
            PINGPP_NOTIFY_URL: 'https://api.pingxx.com/notify/charges/',
            PINGPP_MOCK_URL: 'http://sissi.pingxx.com/mock.php',
            ALIPAY_PC_DIRECT_URL: 'https://mapi.alipay.com/gateway.do',
            UPACP_PC_URL: 'https://gateway.95516.com/gateway/api/frontTransReq.do'
        }, channels = {
            alipay_pc_direct: 'alipay_pc_direct',
            upacp_pc: 'upacp_pc'
        };
    PingppSDK.prototype = {
        version: version,
        _resultCallback: undefined,
        _debug: false,
        createPayment: function (charge_json, callback, debug) {
            if (typeof callback == 'function') {
                this._resultCallback = callback;
            }
            if (typeof debug == 'boolean') {
                this._debug = debug;
            }
            var charge;
            if (typeof charge_json == 'string') {
                try {
                    charge = JSON.parse(charge_json);
                } catch (err) {
                    this._innerCallback('fail', this._error('json_decode_fail'));
                    return;
                }
            } else {
                charge = charge_json;
            }
            if (typeof charge == 'undefined') {
                this._innerCallback('fail', this._error('json_decode_fail'));
                return;
            }
            if (!hasOwn.call(charge, 'id')) {
                this._innerCallback('fail', this._error('invalid_charge', 'no_charge_id'));
                return;
            }
            if (!hasOwn.call(charge, 'channel')) {
                this._innerCallback('fail', this._error('invalid_charge', 'no_channel'));
                return;
            }
            var channel = charge['channel'];
            if (!hasOwn.call(charge, 'credential')) {
                this._innerCallback('fail', this._error('invalid_charge', 'no_credential'));
                return;
            }
            if (!charge['credential']) {
                this._innerCallback('fail', this._error('invalid_credential', 'credential_is_undefined'));
                return;
            }
            if (!hasOwn.call(channels, channel)) {
                this._innerCallback('fail', this._error('invalid_charge', 'no_such_channel:' + channel));
                return;
            }
            if (!hasOwn.call(charge['credential'], channel)) {
                this._innerCallback('fail', this._error('invalid_credential', 'no_valid_channel_credential'));
                return;
            }
            if (!hasOwn.call(charge, 'livemode')) {
                this._innerCallback('fail', this._error('invalid_charge', 'no_livemode'));
                return;
            }
            if (charge['livemode'] == false) {
                this._testModeNotify(charge);
                return;
            }
            var credential = charge['credential'][channel];
            if (channel == channels.upacp_pc) {
                form_submit(cfg.UPACP_PC_URL, 'post', credential);
            } else if (channel == channels.alipay_pc_direct) {
                if (!hasOwn.call(credential, '_input_charset')) {
                    credential['_input_charset'] = 'utf-8';
                }
                var query = stringify_data(credential, channel, true);
                window.location.href = cfg.ALIPAY_PC_DIRECT_URL + '?' + query;
            }
        },
        _error: function (msg, extra) {
            msg = typeof msg == 'undefined' ? '' : msg;
            extra = typeof extra == 'undefined' ? '' : extra;
            return {
                msg: msg,
                extra: extra
            };
        },
        _innerCallback: function (result, err) {
            if (typeof this._resultCallback == 'function') {
                if (typeof err == 'undefined') {
                    err = this._error();
                }
                this._resultCallback(result, err);
            }
        },
        _testModeNotify: function (charge) {
            var params = {
                'ch_id': charge['id'],
                'scheme': 'http',
                'channel': charge['channel']
            };
            if (hasOwn.call(charge, 'order_no')) {
                params['order_no'] = charge['order_no'];
            } else if (hasOwn.call(charge, 'orderNo')) {
                params['order_no'] = charge['orderNo'];
            }
            if (hasOwn.call(charge, 'time_expire')) {
                params['time_expire'] = charge['time_expire'];
            } else if (hasOwn.call(charge, 'timeExpire')) {
                params['time_expire'] = charge['timeExpire'];
            }
            if (hasOwn.call(charge, 'extra')) {
                params['extra'] = encodeURIComponent(JSON.stringify(charge['extra']));
            }
            location.href = cfg.PINGPP_MOCK_URL + '?' + stringify_data(params);
        }
    };
    function form_submit(url, method, params) {
        var form = document.createElement('form');
        form.setAttribute('method', method);
        form.setAttribute('action', url);
        for (var key in params) {
            if (hasOwn.call(params, key)) {
                var hiddenField = document.createElement('input');
                hiddenField.setAttribute('type', 'hidden');
                hiddenField.setAttribute('name', key);
                hiddenField.setAttribute('value', params[key]);
                form.appendChild(hiddenField);
            }
        }
        document.body.appendChild(form);
        form.submit();
    }
    function stringify_data(data, channel, urlencode) {
        if (typeof urlencode == 'undefined') {
            urlencode = false;
        }
        var output = [];
        for (var i in data) {
            if (channel == 'bfb_wap' && i == 'url') {
                continue;
            }
            if (channel == 'yeepay_wap' && i == 'mode') {
                continue;
            }
            output.push(i + '=' + (urlencode ? encodeURIComponent(data[i]) : data[i]));
        }
        return output.join('&');
    }
    PingppSDK.prototype.payment = PingppSDK.prototype.createPayment;
    window.pingppPc = new PingppSDK();
}());
define('ping++', [], function () {
    return;
});
;
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define('modal', ['jquery'], factory);
    } else {
        factory(jQuery);
    }
}(function ($) {
    var d = [], doc = $(document), ua = navigator.userAgent.toLowerCase(), wndw = $(window), w = [];
    var browser = {
        ieQuirks: null,
        msie: /msie/.test(ua) && !/opera/.test(ua),
        opera: /opera/.test(ua)
    };
    browser.ie6 = browser.msie && /msie 6./.test(ua) && typeof window['XMLHttpRequest'] !== 'object';
    browser.ie7 = browser.msie && /msie 7.0/.test(ua);
    $.modal = function (data, options) {
        return $.modal.impl.init(data, options);
    };
    $.modal.close = function () {
        $.modal.impl.close();
    };
    $.modal.focus = function (pos) {
        $.modal.impl.focus(pos);
    };
    $.modal.setContainerDimensions = function () {
        $.modal.impl.setContainerDimensions();
    };
    $.modal.setPosition = function () {
        $.modal.impl.setPosition();
    };
    $.modal.update = function (height, width) {
        $.modal.impl.update(height, width);
    };
    $.fn.modal = function (options) {
        return $.modal.impl.init(this, options);
    };
    $.modal.defaults = {
        appendTo: 'body',
        focus: true,
        opacity: 50,
        overlayId: 'simplemodal-overlay',
        overlayCss: {},
        containerId: 'simplemodal-container',
        containerCss: {},
        dataId: 'simplemodal-data',
        dataCss: {},
        minHeight: null,
        minWidth: null,
        maxHeight: null,
        maxWidth: null,
        autoResize: false,
        autoPosition: true,
        zIndex: 1000,
        close: true,
        closeHTML: '<a class="modalCloseImg" title="Close"></a>',
        closeClass: 'simplemodal-close',
        escClose: true,
        overlayClose: false,
        fixed: true,
        position: null,
        persist: false,
        modal: true,
        onOpen: null,
        onShow: null,
        onClose: null
    };
    $.modal.impl = {
        d: {},
        init: function (data, options) {
            var s = this;
            if (s.d.data) {
                return false;
            }
            browser.ieQuirks = browser.msie && !$.support.boxModel;
            s.o = $.extend({}, $.modal.defaults, options);
            s.zIndex = s.o.zIndex;
            s.occb = false;
            if (typeof data === 'object') {
                data = data instanceof $ ? data : $(data);
                s.d.placeholder = false;
                if (data.parent().parent().size() > 0) {
                    data.before($('<span></span>').attr('id', 'simplemodal-placeholder').css({ display: 'none' }));
                    s.d.placeholder = true;
                    s.display = data.css('display');
                    if (!s.o.persist) {
                        s.d.orig = data.clone(true);
                    }
                }
            } else if (typeof data === 'string' || typeof data === 'number') {
                data = $('<div></div>').html(data);
            } else {
                alert('SimpleModal Error: Unsupported data type: ' + typeof data);
                return s;
            }
            s.create(data);
            data = null;
            s.open();
            if ($.isFunction(s.o.onShow)) {
                s.o.onShow.apply(s, [s.d]);
            }
            return s;
        },
        create: function (data) {
            var s = this;
            s.getDimensions();
            if (s.o.modal && browser.ie6) {
                s.d.iframe = $('<iframe src="javascript:false;"></iframe>').css($.extend(s.o.iframeCss, {
                    display: 'none',
                    opacity: 0,
                    position: 'fixed',
                    height: w[0],
                    width: w[1],
                    zIndex: s.o.zIndex,
                    top: 0,
                    left: 0
                })).appendTo(s.o.appendTo);
            }
            s.d.overlay = $('<div></div>').attr('id', s.o.overlayId).addClass('simplemodal-overlay').css($.extend(s.o.overlayCss, {
                display: 'none',
                opacity: s.o.opacity / 100,
                height: s.o.modal ? d[0] : 0,
                width: s.o.modal ? d[1] : 0,
                position: 'fixed',
                left: 0,
                top: 0,
                zIndex: s.o.zIndex + 1
            })).appendTo(s.o.appendTo);
            s.d.container = $('<div></div>').attr('id', s.o.containerId).addClass('simplemodal-container').css($.extend({ position: s.o.fixed ? 'fixed' : 'absolute' }, s.o.containerCss, {
                display: 'none',
                zIndex: s.o.zIndex + 2
            })).append(s.o.close && s.o.closeHTML ? $(s.o.closeHTML).addClass(s.o.closeClass) : '').appendTo(s.o.appendTo);
            s.d.wrap = $('<div></div>').attr('tabIndex', -1).addClass('simplemodal-wrap').css({
                height: '100%',
                outline: 0,
                width: '100%'
            }).appendTo(s.d.container);
            s.d.data = data.attr('id', data.attr('id') || s.o.dataId).addClass('simplemodal-data').css($.extend(s.o.dataCss, { display: 'none' })).appendTo('body');
            data = null;
            s.setContainerDimensions();
            s.d.data.appendTo(s.d.wrap);
            if (browser.ie6 || browser.ieQuirks) {
                s.fixIE();
            }
        },
        bindEvents: function () {
            var s = this;
            $('.' + s.o.closeClass).bind('click.simplemodal', function (e) {
                e.preventDefault();
                s.close();
            });
            if (s.o.modal && s.o.close && s.o.overlayClose) {
                s.d.overlay.bind('click.simplemodal', function (e) {
                    e.preventDefault();
                    s.close();
                });
            }
            doc.bind('keydown.simplemodal', function (e) {
                if (s.o.modal && e.keyCode === 9) {
                    s.watchTab(e);
                } else if (s.o.close && s.o.escClose && e.keyCode === 27) {
                    e.preventDefault();
                    s.close();
                }
            });
            wndw.bind('resize.simplemodal orientationchange.simplemodal', function () {
                s.getDimensions();
                s.o.autoResize ? s.setContainerDimensions() : s.o.autoPosition && s.setPosition();
                if (browser.ie6 || browser.ieQuirks) {
                    s.fixIE();
                } else if (s.o.modal) {
                    s.d.iframe && s.d.iframe.css({
                        height: w[0],
                        width: w[1]
                    });
                    s.d.overlay.css({
                        height: d[0],
                        width: d[1]
                    });
                }
            });
        },
        unbindEvents: function () {
            $('.' + this.o.closeClass).unbind('click.simplemodal');
            doc.unbind('keydown.simplemodal');
            wndw.unbind('.simplemodal');
            this.d.overlay.unbind('click.simplemodal');
        },
        fixIE: function () {
            var s = this, p = s.o.position;
            $.each([
                s.d.iframe || null,
                !s.o.modal ? null : s.d.overlay,
                s.d.container.css('position') === 'fixed' ? s.d.container : null
            ], function (i, el) {
                if (el) {
                    var bch = 'document.body.clientHeight', bcw = 'document.body.clientWidth', bsh = 'document.body.scrollHeight', bsl = 'document.body.scrollLeft', bst = 'document.body.scrollTop', bsw = 'document.body.scrollWidth', ch = 'document.documentElement.clientHeight', cw = 'document.documentElement.clientWidth', sl = 'document.documentElement.scrollLeft', st = 'document.documentElement.scrollTop', s = el[0].style;
                    s.position = 'absolute';
                    if (i < 2) {
                        s.removeExpression('height');
                        s.removeExpression('width');
                        s.setExpression('height', '' + bsh + ' > ' + bch + ' ? ' + bsh + ' : ' + bch + ' + "px"');
                        s.setExpression('width', '' + bsw + ' > ' + bcw + ' ? ' + bsw + ' : ' + bcw + ' + "px"');
                    } else {
                        var te, le;
                        if (p && p.constructor === Array) {
                            var top = p[0] ? typeof p[0] === 'number' ? p[0].toString() : p[0].replace(/px/, '') : el.css('top').replace(/px/, '');
                            te = top.indexOf('%') === -1 ? top + ' + (t = ' + st + ' ? ' + st + ' : ' + bst + ') + "px"' : parseInt(top.replace(/%/, '')) + ' * ((' + ch + ' || ' + bch + ') / 100) + (t = ' + st + ' ? ' + st + ' : ' + bst + ') + "px"';
                            if (p[1]) {
                                var left = typeof p[1] === 'number' ? p[1].toString() : p[1].replace(/px/, '');
                                le = left.indexOf('%') === -1 ? left + ' + (t = ' + sl + ' ? ' + sl + ' : ' + bsl + ') + "px"' : parseInt(left.replace(/%/, '')) + ' * ((' + cw + ' || ' + bcw + ') / 100) + (t = ' + sl + ' ? ' + sl + ' : ' + bsl + ') + "px"';
                            }
                        } else {
                            te = '(' + ch + ' || ' + bch + ') / 2 - (this.offsetHeight / 2) + (t = ' + st + ' ? ' + st + ' : ' + bst + ') + "px"';
                            le = '(' + cw + ' || ' + bcw + ') / 2 - (this.offsetWidth / 2) + (t = ' + sl + ' ? ' + sl + ' : ' + bsl + ') + "px"';
                        }
                        s.removeExpression('top');
                        s.removeExpression('left');
                        s.setExpression('top', te);
                        s.setExpression('left', le);
                    }
                }
            });
        },
        focus: function (pos) {
            var s = this, p = pos && $.inArray(pos, [
                    'first',
                    'last'
                ]) !== -1 ? pos : 'first';
            var input = $(':input:enabled:visible:' + p, s.d.wrap);
            setTimeout(function () {
                input.length > 0 ? input.focus() : s.d.wrap.focus();
            }, 10);
        },
        getDimensions: function () {
            var s = this, h = typeof window.innerHeight === 'undefined' ? wndw.height() : window.innerHeight;
            d = [
                doc.height(),
                doc.width()
            ];
            w = [
                h,
                wndw.width()
            ];
        },
        getVal: function (v, d) {
            return v ? typeof v === 'number' ? v : v === 'auto' ? 0 : v.indexOf('%') > 0 ? parseInt(v.replace(/%/, '')) / 100 * (d === 'h' ? w[0] : w[1]) : parseInt(v.replace(/px/, '')) : null;
        },
        update: function (height, width) {
            var s = this;
            if (!s.d.data) {
                return false;
            }
            s.d.origHeight = s.getVal(height, 'h');
            s.d.origWidth = s.getVal(width, 'w');
            s.d.data.hide();
            height && s.d.container.css('height', height);
            width && s.d.container.css('width', width);
            s.setContainerDimensions();
            s.d.data.show();
            s.o.focus && s.focus();
            s.unbindEvents();
            s.bindEvents();
        },
        setContainerDimensions: function () {
            var s = this, badIE = browser.ie6 || browser.ie7;
            var ch = s.d.origHeight ? s.d.origHeight : browser.opera ? s.d.container.height() : s.getVal(badIE ? s.d.container[0].currentStyle['height'] : s.d.container.css('height'), 'h'), cw = s.d.origWidth ? s.d.origWidth : browser.opera ? s.d.container.width() : s.getVal(badIE ? s.d.container[0].currentStyle['width'] : s.d.container.css('width'), 'w'), dh = s.d.data.outerHeight(true), dw = s.d.data.outerWidth(true);
            s.d.origHeight = s.d.origHeight || ch;
            s.d.origWidth = s.d.origWidth || cw;
            var mxoh = s.o.maxHeight ? s.getVal(s.o.maxHeight, 'h') : null, mxow = s.o.maxWidth ? s.getVal(s.o.maxWidth, 'w') : null, mh = mxoh && mxoh < w[0] ? mxoh : w[0], mw = mxow && mxow < w[1] ? mxow : w[1];
            var moh = s.o.minHeight ? s.getVal(s.o.minHeight, 'h') : 'auto';
            if (!ch) {
                if (!dh) {
                    ch = moh;
                } else {
                    if (dh > mh) {
                        ch = mh;
                    } else if (s.o.minHeight && moh !== 'auto' && dh < moh) {
                        ch = moh;
                    } else {
                        ch = dh;
                    }
                }
            } else {
                ch = s.o.autoResize && ch > mh ? mh : ch < moh ? moh : ch;
            }
            var mow = s.o.minWidth ? s.getVal(s.o.minWidth, 'w') : 'auto';
            if (!cw) {
                if (!dw) {
                    cw = mow;
                } else {
                    if (dw > mw) {
                        cw = mw;
                    } else if (s.o.minWidth && mow !== 'auto' && dw < mow) {
                        cw = mow;
                    } else {
                        cw = dw;
                    }
                }
            } else {
                cw = s.o.autoResize && cw > mw ? mw : cw < mow ? mow : cw;
            }
            s.d.container.css({
                height: ch,
                width: cw
            });
            s.d.wrap.css({ overflow: dh > ch || dw > cw ? 'auto' : 'visible' });
            s.o.autoPosition && s.setPosition();
        },
        setPosition: function () {
            var s = this, top, left, hc = w[0] / 2 - s.d.container.outerHeight(true) / 2, vc = w[1] / 2 - s.d.container.outerWidth(true) / 2, st = s.d.container.css('position') !== 'fixed' ? wndw.scrollTop() : 0;
            if (s.o.position && Object.prototype.toString.call(s.o.position) === '[object Array]') {
                top = st + (s.o.position[0] || hc);
                left = s.o.position[1] || vc;
            } else {
                top = st + hc;
                left = vc;
            }
            s.d.container.css({
                left: left,
                top: top
            });
        },
        watchTab: function (e) {
            var s = this;
            if ($(e.target).parents('.simplemodal-container').length > 0) {
                s.inputs = $(':input:enabled:visible:first, :input:enabled:visible:last', s.d.data[0]);
                if (!e.shiftKey && e.target === s.inputs[s.inputs.length - 1] || e.shiftKey && e.target === s.inputs[0] || s.inputs.length === 0) {
                    e.preventDefault();
                    var pos = e.shiftKey ? 'last' : 'first';
                    s.focus(pos);
                }
            } else {
                e.preventDefault();
                s.focus();
            }
        },
        open: function () {
            var s = this;
            s.d.iframe && s.d.iframe.show();
            if ($.isFunction(s.o.onOpen)) {
                s.o.onOpen.apply(s, [s.d]);
            } else {
                s.d.overlay.show();
                s.d.container.show();
                s.d.data.show();
            }
            s.o.focus && s.focus();
            s.bindEvents();
        },
        close: function () {
            var s = this;
            if (!s.d.data) {
                return false;
            }
            s.unbindEvents();
            if ($.isFunction(s.o.onClose) && !s.occb) {
                s.occb = true;
                s.o.onClose.apply(s, [s.d]);
            } else {
                if (s.d.placeholder) {
                    var ph = $('#simplemodal-placeholder');
                    if (s.o.persist) {
                        ph.replaceWith(s.d.data.removeClass('simplemodal-data').css('display', s.display));
                    } else {
                        s.d.data.hide().remove();
                        ph.replaceWith(s.d.orig);
                    }
                } else {
                    s.d.data.hide().remove();
                }
                s.d.container.hide().remove();
                s.d.overlay.hide();
                s.d.iframe && s.d.iframe.hide().remove();
                s.d.overlay.remove();
                s.d = {};
            }
        }
    };
}));
(function (factory) {
    if (typeof exports === 'object') {
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        define('md5', [], factory);
    } else {
        var glob;
        try {
            glob = window;
        } catch (e) {
            glob = self;
        }
        glob.SparkMD5 = factory();
    }
}(function (undefined) {
    'use strict';
    var add32 = function (a, b) {
            return a + b & 4294967295;
        }, hex_chr = [
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            'a',
            'b',
            'c',
            'd',
            'e',
            'f'
        ];
    function cmn(q, a, b, x, s, t) {
        a = add32(add32(a, q), add32(x, t));
        return add32(a << s | a >>> 32 - s, b);
    }
    function ff(a, b, c, d, x, s, t) {
        return cmn(b & c | ~b & d, a, b, x, s, t);
    }
    function gg(a, b, c, d, x, s, t) {
        return cmn(b & d | c & ~d, a, b, x, s, t);
    }
    function hh(a, b, c, d, x, s, t) {
        return cmn(b ^ c ^ d, a, b, x, s, t);
    }
    function ii(a, b, c, d, x, s, t) {
        return cmn(c ^ (b | ~d), a, b, x, s, t);
    }
    function md5cycle(x, k) {
        var a = x[0], b = x[1], c = x[2], d = x[3];
        a = ff(a, b, c, d, k[0], 7, -680876936);
        d = ff(d, a, b, c, k[1], 12, -389564586);
        c = ff(c, d, a, b, k[2], 17, 606105819);
        b = ff(b, c, d, a, k[3], 22, -1044525330);
        a = ff(a, b, c, d, k[4], 7, -176418897);
        d = ff(d, a, b, c, k[5], 12, 1200080426);
        c = ff(c, d, a, b, k[6], 17, -1473231341);
        b = ff(b, c, d, a, k[7], 22, -45705983);
        a = ff(a, b, c, d, k[8], 7, 1770035416);
        d = ff(d, a, b, c, k[9], 12, -1958414417);
        c = ff(c, d, a, b, k[10], 17, -42063);
        b = ff(b, c, d, a, k[11], 22, -1990404162);
        a = ff(a, b, c, d, k[12], 7, 1804603682);
        d = ff(d, a, b, c, k[13], 12, -40341101);
        c = ff(c, d, a, b, k[14], 17, -1502002290);
        b = ff(b, c, d, a, k[15], 22, 1236535329);
        a = gg(a, b, c, d, k[1], 5, -165796510);
        d = gg(d, a, b, c, k[6], 9, -1069501632);
        c = gg(c, d, a, b, k[11], 14, 643717713);
        b = gg(b, c, d, a, k[0], 20, -373897302);
        a = gg(a, b, c, d, k[5], 5, -701558691);
        d = gg(d, a, b, c, k[10], 9, 38016083);
        c = gg(c, d, a, b, k[15], 14, -660478335);
        b = gg(b, c, d, a, k[4], 20, -405537848);
        a = gg(a, b, c, d, k[9], 5, 568446438);
        d = gg(d, a, b, c, k[14], 9, -1019803690);
        c = gg(c, d, a, b, k[3], 14, -187363961);
        b = gg(b, c, d, a, k[8], 20, 1163531501);
        a = gg(a, b, c, d, k[13], 5, -1444681467);
        d = gg(d, a, b, c, k[2], 9, -51403784);
        c = gg(c, d, a, b, k[7], 14, 1735328473);
        b = gg(b, c, d, a, k[12], 20, -1926607734);
        a = hh(a, b, c, d, k[5], 4, -378558);
        d = hh(d, a, b, c, k[8], 11, -2022574463);
        c = hh(c, d, a, b, k[11], 16, 1839030562);
        b = hh(b, c, d, a, k[14], 23, -35309556);
        a = hh(a, b, c, d, k[1], 4, -1530992060);
        d = hh(d, a, b, c, k[4], 11, 1272893353);
        c = hh(c, d, a, b, k[7], 16, -155497632);
        b = hh(b, c, d, a, k[10], 23, -1094730640);
        a = hh(a, b, c, d, k[13], 4, 681279174);
        d = hh(d, a, b, c, k[0], 11, -358537222);
        c = hh(c, d, a, b, k[3], 16, -722521979);
        b = hh(b, c, d, a, k[6], 23, 76029189);
        a = hh(a, b, c, d, k[9], 4, -640364487);
        d = hh(d, a, b, c, k[12], 11, -421815835);
        c = hh(c, d, a, b, k[15], 16, 530742520);
        b = hh(b, c, d, a, k[2], 23, -995338651);
        a = ii(a, b, c, d, k[0], 6, -198630844);
        d = ii(d, a, b, c, k[7], 10, 1126891415);
        c = ii(c, d, a, b, k[14], 15, -1416354905);
        b = ii(b, c, d, a, k[5], 21, -57434055);
        a = ii(a, b, c, d, k[12], 6, 1700485571);
        d = ii(d, a, b, c, k[3], 10, -1894986606);
        c = ii(c, d, a, b, k[10], 15, -1051523);
        b = ii(b, c, d, a, k[1], 21, -2054922799);
        a = ii(a, b, c, d, k[8], 6, 1873313359);
        d = ii(d, a, b, c, k[15], 10, -30611744);
        c = ii(c, d, a, b, k[6], 15, -1560198380);
        b = ii(b, c, d, a, k[13], 21, 1309151649);
        a = ii(a, b, c, d, k[4], 6, -145523070);
        d = ii(d, a, b, c, k[11], 10, -1120210379);
        c = ii(c, d, a, b, k[2], 15, 718787259);
        b = ii(b, c, d, a, k[9], 21, -343485551);
        x[0] = add32(a, x[0]);
        x[1] = add32(b, x[1]);
        x[2] = add32(c, x[2]);
        x[3] = add32(d, x[3]);
    }
    function md5blk(s) {
        var md5blks = [], i;
        for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
        }
        return md5blks;
    }
    function md5blk_array(a) {
        var md5blks = [], i;
        for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
        }
        return md5blks;
    }
    function md51(s) {
        var n = s.length, state = [
                1732584193,
                -271733879,
                -1732584194,
                271733878
            ], i, length, tail, tmp, lo, hi;
        for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk(s.substring(i - 64, i)));
        }
        s = s.substring(i - 64);
        length = s.length;
        tail = [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ];
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
        }
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0;
            }
        }
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
    }
    function md51_array(a) {
        var n = a.length, state = [
                1732584193,
                -271733879,
                -1732584194,
                271733878
            ], i, length, tail, tmp, lo, hi;
        for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
        }
        a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
        length = a.length;
        tail = [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ];
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= a[i] << (i % 4 << 3);
        }
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0;
            }
        }
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
    }
    function rhex(n) {
        var s = '', j;
        for (j = 0; j < 4; j += 1) {
            s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15];
        }
        return s;
    }
    function hex(x) {
        var i;
        for (i = 0; i < x.length; i += 1) {
            x[i] = rhex(x[i]);
        }
        return x.join('');
    }
    if (hex(md51('hello')) !== '5d41402abc4b2a76b9719d911017c592') {
        add32 = function (x, y) {
            var lsw = (x & 65535) + (y & 65535), msw = (x >> 16) + (y >> 16) + (lsw >> 16);
            return msw << 16 | lsw & 65535;
        };
    }
    if (typeof ArrayBuffer !== 'undefined' && !ArrayBuffer.prototype.slice) {
        (function () {
            function clamp(val, length) {
                val = val | 0 || 0;
                if (val < 0) {
                    return Math.max(val + length, 0);
                }
                return Math.min(val, length);
            }
            ArrayBuffer.prototype.slice = function (from, to) {
                var length = this.byteLength, begin = clamp(from, length), end = length, num, target, targetArray, sourceArray;
                if (to !== undefined) {
                    end = clamp(to, length);
                }
                if (begin > end) {
                    return new ArrayBuffer(0);
                }
                num = end - begin;
                target = new ArrayBuffer(num);
                targetArray = new Uint8Array(target);
                sourceArray = new Uint8Array(this, begin, num);
                targetArray.set(sourceArray);
                return target;
            };
        }());
    }
    function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) {
            str = unescape(encodeURIComponent(str));
        }
        return str;
    }
    function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length, buff = new ArrayBuffer(length), arr = new Uint8Array(buff), i;
        for (i = 0; i < length; i += 1) {
            arr[i] = str.charCodeAt(i);
        }
        return returnUInt8Array ? arr : buff;
    }
    function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff));
    }
    function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);
        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);
        return returnUInt8Array ? result : result.buffer;
    }
    function hexToBinaryString(hex) {
        var bytes = [], length = hex.length, x;
        for (x = 0; x < length - 1; x += 2) {
            bytes.push(parseInt(hex.substr(x, 2), 16));
        }
        return String.fromCharCode.apply(String, bytes);
    }
    function SparkMD5() {
        this.reset();
    }
    SparkMD5.prototype.append = function (str) {
        this.appendBinary(toUtf8(str));
        return this;
    };
    SparkMD5.prototype.appendBinary = function (contents) {
        this._buff += contents;
        this._length += contents.length;
        var length = this._buff.length, i;
        for (i = 64; i <= length; i += 64) {
            md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
        }
        this._buff = this._buff.substring(i - 64);
        return this;
    };
    SparkMD5.prototype.end = function (raw) {
        var buff = this._buff, length = buff.length, i, tail = [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ], ret;
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3);
        }
        this._finish(tail, length);
        ret = hex(this._hash);
        if (raw) {
            ret = hexToBinaryString(ret);
        }
        this.reset();
        return ret;
    };
    SparkMD5.prototype.reset = function () {
        this._buff = '';
        this._length = 0;
        this._hash = [
            1732584193,
            -271733879,
            -1732584194,
            271733878
        ];
        return this;
    };
    SparkMD5.prototype.getState = function () {
        return {
            buff: this._buff,
            length: this._length,
            hash: this._hash
        };
    };
    SparkMD5.prototype.setState = function (state) {
        this._buff = state.buff;
        this._length = state.length;
        this._hash = state.hash;
        return this;
    };
    SparkMD5.prototype.destroy = function () {
        delete this._hash;
        delete this._buff;
        delete this._length;
    };
    SparkMD5.prototype._finish = function (tail, length) {
        var i = length, tmp, lo, hi;
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(this._hash, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0;
            }
        }
        tmp = this._length * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this._hash, tail);
    };
    SparkMD5.hash = function (str, raw) {
        return SparkMD5.hashBinary(toUtf8(str), raw);
    };
    SparkMD5.hashBinary = function (content, raw) {
        var hash = md51(content), ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
    };
    SparkMD5.ArrayBuffer = function () {
        this.reset();
    };
    SparkMD5.ArrayBuffer.prototype.append = function (arr) {
        var buff = concatenateArrayBuffers(this._buff.buffer, arr, true), length = buff.length, i;
        this._length += arr.byteLength;
        for (i = 64; i <= length; i += 64) {
            md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
        }
        this._buff = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
        return this;
    };
    SparkMD5.ArrayBuffer.prototype.end = function (raw) {
        var buff = this._buff, length = buff.length, tail = [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ], i, ret;
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff[i] << (i % 4 << 3);
        }
        this._finish(tail, length);
        ret = hex(this._hash);
        if (raw) {
            ret = hexToBinaryString(ret);
        }
        this.reset();
        return ret;
    };
    SparkMD5.ArrayBuffer.prototype.reset = function () {
        this._buff = new Uint8Array(0);
        this._length = 0;
        this._hash = [
            1732584193,
            -271733879,
            -1732584194,
            271733878
        ];
        return this;
    };
    SparkMD5.ArrayBuffer.prototype.getState = function () {
        var state = SparkMD5.prototype.getState.call(this);
        state.buff = arrayBuffer2Utf8Str(state.buff);
        return state;
    };
    SparkMD5.ArrayBuffer.prototype.setState = function (state) {
        state.buff = utf8Str2ArrayBuffer(state.buff, true);
        return SparkMD5.prototype.setState.call(this, state);
    };
    SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
    SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;
    SparkMD5.ArrayBuffer.hash = function (arr, raw) {
        var hash = md51_array(new Uint8Array(arr)), ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
    };
    return SparkMD5;
}));
'use strict';
define('encryption', ['md5'], function (md5) {
    function _Encryption(url) {
        var date = new Date().getTime(), obj = {
                date: new Date().getTime(),
                str: '99dayin_api_secrete'
            }, str = md5.hash(obj.date + obj.str);
        return url + '?time=' + obj.date + '&token=' + str;
    }
    return {
        Encryption: function Encryption(url) {
            return _Encryption(url);
        }
    };
});
'use strict';
define('header', [
    'jquery',
    'encryption'
], function ($, Encryption) {
    var Pathurl = {
        login: Encryption.Encryption('/99dayin/index.php/api/login'),
        sigin: Encryption.Encryption('/99dayin/index.php/api/signup'),
        Linklogin: '',
        username: Encryption.Encryption('/99dayin/index.php/api/verifySmsCode'),
        CF_url: Encryption.Encryption('/99dayin/index.php/api/sendSmsCode'),
        upload: '',
        logout: Encryption.Encryption('/99dayin/index.php/api/logout')
    };
    var login = {
        $username: $('.login-account'),
        $ps: $('.login-ps'),
        $iden: $('.login-choice>div.active'),
        title: $('.title-btn'),
        detail: $('.detail-btn'),
        print_btn: $('.print-btn'),
        getText: function getText($target) {
            return $target.val();
        },
        getIden: function getIden() {
            var active = this.$iden;
            if (active.hasClass('user-login')) {
                return 0;
            } else {
                return 1;
            }
        },
        linkSuccess: function linkSuccess(data) {
            if (data.success) {
            } else {
            }
        },
        afterLogin: function afterLogin(name) {
            this.print_btn.attr('href', Pathurl.upload);
            this.title.html('<a class="name">' + name + '/a>');
        },
        beforeLogin: function beforeLogin() {
            this.print_btn.attr('href', 'javascript:void(0)');
            this.title.html('<span class="login" id="login" data-content="登录">登录</span><span>|</span><span class="signin" id="signin" data-content="注册">注册</span>');
        },
        init: function init() {
            var _this = this;
            $('.login-btn').on('click', function () {
                var username = _this.getText(_this.$username), ps = _this.getText(_this.$ps), iden = _this.getIden();
                sendAjax({
                    url: Pathurl.login,
                    dataType: 'json',
                    data: {
                        'username': username,
                        'ps': ps,
                        'iden': iden
                    },
                    success: function success(data) {
                        if (data.success) {
                            window.location.href = './';
                        } else {
                            prompt.changeInfo(data.msg);
                        }
                    }
                });
            });
            $('.QQ-login').on('click', function () {
                sendAjax({
                    url: Pathurl.Linklogin,
                    data: { 'login_method': 'QQ' },
                    success: _this.linkSuccess
                });
            });
            this.title.on('click', function (e) {
                var $target = $(e.target);
                if ($target.hasClass('name')) {
                    toggleShow(_this.detail);
                } else if ($target.hasClass('login')) {
                    detectShow(login_frame, true);
                } else if ($target.hasClass('signin')) {
                    detectShow(signin_frame, false);
                }
            });
            this.detail.on('click', function (e) {
                var $target = $(e.target);
                if ($target.hasClass('logout')) {
                    sendAjax({
                        url: Pathurl.logout,
                        success: function success(data) {
                            if (data.success)
                                window.location.href = '/';
                        }
                    });
                }
            });
            this.print_btn.on('click', function () {
                if ($(this).attr('data-log') == 0) {
                    detectShow(login_frame, true);
                }
            });
        }
    };
    login.init();
});
'use strict';
require.config({
    baseUrl: './js',
    paths: {
        'jquery': 'lib/jQuery',
        'scroll': 'lib/iscroll',
        'header': 'entry/header',
        'utility': 'entry/utility/utility',
        'prompt': 'entry/function/prompt',
        'enroll': 'entry/function/enroll',
        'ping++': 'lib/pingpp-pc',
        'modal': 'lib/jquery.simplemodal',
        'md5': 'lib/spark-md5.min',
        'encryption': 'entry/function/encryption'
    }
});
'use strict';
require([
    'jquery',
    'scroll',
    'utility',
    'prompt',
    'enroll',
    'ping++',
    'modal',
    'encryption',
    'header'
], function ($, scroll, util, prompt, enroll, ping, modal, Encryption) {
    var Iscroll = bindScroll($('.container'));
    prompt = new prompt.Prompt({ prompt: $('.prompt') });
    function detectShow($target, close) {
        if ($target.css('display') !== 'block') {
            $.modal.close();
            openModal($target, close);
        }
    }
    function toggleShow($target) {
        if ($target.css('display') === 'none') {
            $target.show();
        } else {
            $target.hide();
        }
    }
    function InputFocus($ele) {
        $ele.on('focus', function () {
            $(this).removeClass('error');
            $(this).attr('data-iden', '1');
        });
    }
    var Pathurl = {
        delteOrd: Encryption.Encryption('../index.php/api/cancelOrder'),
        addPrint: Encryption.Encryption(''),
        getToken: Encryption.Encryption('../index.php/api/sendSmsCode'),
        changeInfo: Encryption.Encryption(''),
        sendImg: Encryption.Encryption(''),
        promptPs: Encryption.Encryption(''),
        username: Encryption.Encryption(''),
        sendOrder: Encryption.Encryption('../index.php/api/getOrderInfo'),
        sendConfirm: Encryption.Encryption('../index.php/api/verifySmsCode')
    };
    var Order = {
        pre: $('.order-content'),
        history: $('.his-content'),
        order_btn: $('.orders-choice'),
        checkout_modal: $('.paying'),
        orderPage: $('.file-info'),
        wrapContent: $('#warpper2 #scroller'),
        deleteOrder: function deleteOrder($target) {
            var parent_li = $target.parents('li'), orderId = $target.attr('data-order');
            $.ajax({
                url: Pathurl.delteOrd,
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({ orderId: orderId })
            }).then(function (data) {
                if (data.success) {
                    parent_li.detach();
                    Iscroll.forEach(function (val) {
                        val.refresh();
                    });
                } else {
                    prompt.changeInfo('您的网络又问题\uFF0C请重新删除~');
                }
            });
        },
        checkout: function checkout($target) {
            var seq = $target.attr('data-seq');
        },
        dealInfo: function dealInfo(data) {
            var info = undefined;
            switch (data) {
            case 'single':
                info = '单';
                break;
            case 'double':
                info = '双';
                break;
            case 'vertical':
                info = '竖';
                break;
            case 'horizontal':
                info = '横';
                break;
            default:
                info = '未知';
            }
            return info;
        },
        fillInfo: function fillInfo(data) {
            var flag = 1;
            this.wrapContent.html(null);
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;
            try {
                for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var item = _step.value;
                    var fileName = item.fileName;
                    var twoSide = item.twoSide;
                    var direction = item.direction;
                    var pptPerPage = item.pptPerPage;
                    var paperSize = item.paperSize;
                    var amount = item.amount;
                    console.log(item.fileName);
                    twoSide = this.dealInfo(twoSide), direction = this.dealInfo(direction);
                    newDiv = $('<div></div>');
                    newDiv.html('<span>' + flag + '</span>\n                                        <span><i class="logo-minword"></i>' + fileName + '</span>\n                                        <span>' + twoSide + '</span>\n                                        <span>' + direction + '</span>\n                                        <span>' + pptPerPage + '</span>\n                                        <span>' + paperSize + '</span>\n                                        <span>' + amount + '</span>\n                                        ');
                    newDiv.attr({
                        class: 'row',
                        'data-num': flag
                    });
                    this.wrapContent.append(newDiv);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        },
        init: function init() {
            var _this = this;
            this.pre.on('click', function (e) {
                var $target = $(e.target);
                if ($target.hasClass('cancel')) {
                    var decision = confirm('确认取消订单吗?');
                    if (decision) {
                        _this.deleteOrder($target);
                    }
                } else if ($target.hasClass('go-pay')) {
                    var li = $target.parents('li'), num = li.find('.order-num').text(), money = li.find('.money').text();
                    openModal(_this.checkout_modal, false);
                    $.ajax({
                        url: Pathurl.go_pay,
                        data: {
                            num: num,
                            money: money
                        },
                        success: function success(data) {
                            if (data.success) {
                                openModal(_this.checkout_modal, false);
                                _this.checkout_modal.attr('data-num', num);
                            } else {
                                prompt.changeInfo('支付出错\uFF0C请重新支付!');
                            }
                        }
                    });
                } else if ($target.hasClass('showFiles')) {
                    var data = $target.data('order');
                    $.ajax({
                        url: Pathurl.sendOrder,
                        type: 'POST',
                        dataType: 'json',
                        contentType: 'application/json',
                        data: JSON.stringify({ orderId: data })
                    }).then(function (data) {
                        Order.fillInfo(data);
                        openModal(_this.orderPage, true);
                    }).fail(function () {
                        prompt.changeInfo('请求失败,请重试~');
                    });
                }
            });
            this.order_btn.on('click', function (e) {
                var $target = $(e.target), pre = $('.pre-order'), history = $('.his-order');
                if ($target.hasClass('pre-order-btn')) {
                    changeShow(pre, history);
                    $target.addClass('active').siblings().removeClass('active');
                    Iscroll.forEach(function (val) {
                        val.refresh();
                    });
                } else if ($target.hasClass('historic-order-btn')) {
                    changeShow(history, pre);
                    $target.addClass('active').siblings().removeClass('active');
                    Iscroll.forEach(function (val) {
                        val.refresh();
                    });
                }
            });
            this.history.on('click', function (e) {
                var $target = $(e.target);
                if ($target.hasClass('add-print')) {
                    var index = Number($target.attr('data-seq'));
                    sendAjax({
                        url: Pathurl.addPrint,
                        data: { history: HisOrder[index] },
                        success: function success(data) {
                            if (data.success) {
                                window.location.href = data.url;
                            } else {
                                prompt.changeInfo('对不起你的订单信息已经失效~~');
                            }
                        }
                    });
                } else if ($target.hasClass('showFiles')) {
                    var data = $target.data('order');
                    $.ajax({
                        url: Pathurl.sendOrder,
                        type: 'POST',
                        dataType: 'json',
                        data: { orderId: data }
                    }).then(function (data) {
                        Order.fillInfo(data);
                        openModal(_this.checkout_modal, true);
                    }).fail(function () {
                        prompt.changeInfo('请求失败,请重试~');
                    });
                }
            });
        }
    };
    Order.init();
    var username_reg = [
            /^[\u4e00-\u9fa5A-Za-z0-9-_]*$/,
            /^[\u4e00-\u9fa5A-Za-z0-9-_]{4,12}$/
        ], username_msg = [
            '姓名只能输入中英文\uFF0C数字\uFF0C下划线和减号!',
            '用户名输入长度只能在4~12位!'
        ], pwd_reg = [
            /^[a-zA-Z]\w*$/,
            /^[a-zA-Z]\w{5,15}$/
        ], pwd_msg = [
            '密码以字母开头\uFF0C只能包含字母,数字,下划线!',
            '密码输入长度只能在6~16位!'
        ], phone_reg = [/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/], phone_msg = ['请输入正确手机号!'], college_reg = [/^[\u4e00-\u9fa5]{0,}$/], college_msg = ['输入不能包含非法字符!'], email_reg = [/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/], email_msg = [' 邮箱格式不正确!'];
    var Left = {
        content: $('.content'),
        authentic: $('.authentic-page'),
        changePs: $('.change-ps'),
        upload: $('.upload'),
        confir: $('.confirm-btn'),
        promptPs: $('.prompt-ps'),
        oldPs: $('.old-ps'),
        newPs: $('.new-ps'),
        confir_ps: $('.confir-ps'),
        edit_btn: $('.edit-info'),
        changeInfo: $('.change-info'),
        change_btn: $('.change-btn'),
        confirm_code: $('.confir-code'),
        obtain_code: $('.get-code'),
        email: $('.email'),
        name: $('.name'),
        phone: $('.phone'),
        CF_code: $('.confir-code'),
        address: $('.address'),
        file: new Array(),
        security: '',
        showImg: function showImg(file, img) {
            var reader = new FileReader();
            if (!/image\/\w+/.test(file.type)) {
                prompt.changeInfo('上传的不是图片类型!');
                return false;
            }
            reader.onload = function (e) {
                img.attr('src', e.target.result);
            };
            reader.readAsDataURL(file);
        },
        countDown: function countDown($ele) {
            var i = 60;
            var time = setInterval(function () {
                i--;
                $ele.text(i);
                if (i === 0) {
                    $ele.removeClass('sending').prop('disabled', false).text('获取验证码');
                    clearInterval(time);
                }
            }, 1000);
        },
        init: function init() {
            var _this = this;
            this.content.on('click', function (e) {
                var $target = $(e.target);
                if ($target.hasClass('authentic-btn')) {
                    prompt.changeInfo('服务器正忙~');
                } else if ($target.hasClass('change-ps-btn')) {
                    toggleShow(_this.changePs);
                } else if ($target.hasClass('back')) {
                    console.log($target.parents('left-part'));
                    $target.parents('.left-part').hide();
                }
            });
            this.upload.on('change', function () {
                if (!this.files.length) {
                    return false;
                }
                var file = this.files[0], img = $(this).parent().next();
                _this.showImg(file, img);
            });
            this.confir.on('click', function () {
                var $imgs = $('.IDcard img,.studentCard img'), mark = false;
                $imgs.each(function () {
                    mark = true;
                    var src = $(this).attr('src'), type = $(this).attr('data-type');
                    if ($(this).attr('src') == '' || $(this).attr('src') == null) {
                        console.log(1);
                        mark = false;
                    }
                });
                if (!mark) {
                    prompt.changeInfo('请先上传图片!');
                    return false;
                }
                var files = [
                    $('#idCard-file').val(),
                    $('#stu-card-file').val()
                ];
                console.log(files);
                $.ajax({
                    url: Pathurl.sendImg,
                    data: { file: file },
                    success: function success(data) {
                        if (data.success) {
                            changeShow($('.authenticating'), $('.authentic-btn'));
                            prompt.changeInfo('上传成功\uFF0C请耐心等待!');
                            _this.authentic.hide();
                        } else {
                            prompt.changeInfo('上传失败\uFF0C请注意网络情况!');
                        }
                    }
                });
            });
            this.promptPs.on('click', function () {
                var oldPs = _this.oldPs.val(), newPs = _this.newPs.val(), confirm = _this.confir.val(), reg = /^[a-zA-Z]\w*$/;
                if (oldPs == '' || oldPs == null || newPs == '' || newPs == null || confirm == null || confirm == '') {
                    prompt.changeInfo('输入不能为空,请先输入!');
                } else if (reg.test(newPs)) {
                    prompt.changeInfo('密码以字母开头\uFF0C只能包含字母,数字,下划线!');
                } else if (oldPs === confirm) {
                    prompt.changeInfo('两次密码输入不一致!');
                } else {
                    $.ajax({
                        url: Pathurl.promptPs,
                        type: 'POST',
                        contentType: 'application/json',
                        data: {
                            oldPs: oldPs,
                            newPs: newPs
                        },
                        success: function success(data) {
                            if (data.success) {
                                _this.promptPs.parents('.change-ps').hide();
                                prompt.changeInfo('密码修改成功!');
                            }
                        }
                    });
                }
            });
            this.edit_btn.on('click', function () {
                toggleShow(_this.changeInfo);
            });
            this.obtain_code.on('click', function () {
                var _this2 = this;
                $(this).addClass('sending').prop('disabled', true);
                var phone = _this.phone.val(), iden = _this.phone.attr('data-iden') === '1' ? true : false;
                if (!iden) {
                    prompt.changeInfo('请输入正确手机号!');
                    $(this).removeClass('sending').prop('disabled', false);
                    return false;
                }
                $.ajax({
                    url: Pathurl.getToken,
                    type: 'POST',
                    dataType: 'JSON',
                    data: { phone: phone }
                }).then(function (data) {
                    console.log(data);
                    if (data.success) {
                        console.log(213);
                        Left.security = data.msg;
                        Left.countDown(Left.obtain_code);
                    } else {
                        $(_this2).removeClass('sending').prop('disabled', false);
                    }
                });
            });
            this.confirm_code.on('blur', function () {
                var content = $(this).val();
                if (content == '' || content == null) {
                    prompt.changeInfo('验证码不能为空');
                    _this.confirm_code.addClass('error');
                } else {
                    _this.confirm_code.attr('data-iden', '1');
                    _this.confirm_code.removeClass('error');
                }
            });
            InputFocus(_this.confirm_code);
            this.name.enroll({
                reg: username_reg,
                msg: username_msg,
                override: true,
                url: Pathurl.username
            });
            this.phone.enroll({
                reg: phone_reg,
                msg: phone_msg
            });
            this.email.enroll({
                reg: email_reg,
                msg: email_msg
            });
            this.address.enroll({});
            this.change_btn.on('click', function () {
                var name = _this.name.val(), phone = _this.phone.val(), email = _this.email.val(), confirm = _this.confirm_code.val(), flag = 0, ele = $('.change-info .name,.change-info .phone,.change-info .confir-code,.change-info .email');
                for (var i = 0; i < ele.length; i++) {
                    if (ele.eq(i).attr('data-iden') == 1) {
                    } else {
                        flag++;
                    }
                }
                if (flag === 0) {
                    $.ajax({
                        url: Pathurl.sendConfirm,
                        type: 'POST',
                        dataType: 'JSON',
                        data: {
                            phone: phone,
                            smsCode: confirm
                        }
                    }).then(function (data) {
                        if (!data.success) {
                            prompt.changeInfo('验证码输入错误~');
                            return false;
                        }
                        _this.change_btn.addClass('sending');
                        $.ajax({
                            url: Pathurl.changeInfo,
                            type: 'POST',
                            contentType: 'JSON',
                            data: JOSN.stringify({
                                name: name,
                                phone: phone,
                                email: email
                            }),
                            beforeSend: function beforeSend() {
                                _this.change_btn.addClass('sending');
                            },
                            success: function success(data) {
                                if (data.success) {
                                    prompt.changeInfo('信息修改成功,请重新登录!');
                                    _this.change_btn.parents('.left-part').hide();
                                } else {
                                    prompt.changeInfo('信息修改失败\uFF0C请再次尝试');
                                    _this.change_btn.removeClass('sending');
                                }
                            }
                        });
                    });
                } else {
                    prompt.changeInfo('您的部分信息录入不正确!');
                }
            });
        }
    };
    Left.init();
    var Modal = {
        pay: $('.paying'),
        close: $('.close'),
        paying_btn: $('.paying-btn button'),
        all_num: $('.order-num'),
        deleteOrder: function deleteOrder($target) {
            var parent_li = $target.parents('li'), orderId = $target.attr('data-order'), signal = false;
            $.ajax({
                url: Pathurl.delteOrd,
                type: 'POST',
                contentType: 'application/json',
                data: { orderId: orderId }
            }).then(function (data) {
                if (data.success) {
                    parent_li.detach();
                    Iscroll.forEach(function (val) {
                        val.refresh();
                    });
                } else {
                    prompt.changeInfo('您的网络又问题\uFF0C请重新删除~');
                }
            });
        },
        checkOrder: function checkOrder() {
            var num = this.pay.attr('data-num'), order = '';
            $.ajax({
                url: Pathurl,
                data: { num: num },
                success: function success(data) {
                    if (data.success) {
                        prompt.changeInfo('您的支付成功\uFF0C请稍等订单消息~~');
                        setTimeout(function () {
                            window.location.href = './';
                        }, 1000);
                    } else {
                        prompt.changeInfo('sorry~~您的订单支付不成功\uFF0C请重新支付');
                    }
                }
            });
        },
        init: function init() {
            var _this = this;
            this.close.on('click', this.checkOrder);
        }
    };
    Modal.init();
});
define('../js/entry/center', [
    'jquery',
    'scroll',
    'utility',
    'prompt',
    'enroll',
    'ping++',
    'modal',
    'encryption',
    'header'
], function () {
    return;
});