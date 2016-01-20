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
define('iscroll', [], function () {
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
    Prompt.prototype.showInfo = function (info) {
        this.prompt_ele.text(info);
        this.showPrompt();
    };
    Prompt.prototype.hideInfo = function (info) {
        this.prompt_ele.text('');
        this.hidePrompt();
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
define('tpl', [], function () {
    var tpl = {
        article: function article(type, md5, name, uploadTime, times, size) {
            return '<div class="article-item" data-id="' + md5 + '">\n\t\t\t\t\t\t\t<i class="file-logo ' + type + '"></i>\n\t\t\t\t\t\t\t<p class="file-header">' + name + '</p>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t<span class="upload-time">' + uploadTime + '</span>打印次数:<span\n\t\t\t\t\t\t\t\t\tid="print-num">' + times + '</span>大小:<span id="size">' + size + '</span>kb\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<i class="add-btn" data-mark="official-1" data-id="' + md5 + '"></i>\n\t\t\t\t\t\t</div>';
        }
    };
    return { tpl: tpl };
});
'use strict';
define('validate', [], function () {
    var validator = {
        types: {
            isEmail: {
                validate: function validate(value) {
                    var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
                    return reg.test(value);
                },
                instructions: '邮箱格式错误'
            },
            isNonEmpty: {
                validate: function validate(value) {
                    return !(value == '' || value === undefined);
                },
                instructions: '日期不能为空'
            },
            isPassword: {
                validate: function validate(value) {
                    if (value.length < 6 || value.length > 21) {
                        return false;
                    }
                    var reg = /^(([a-z]+[\w]*[0-9]+)|([0-9]+[\w]*[a-z]+))[a-z0-9]*$/i;
                    return reg.test(value);
                },
                instructions: '密码长度在6-20位,且必须包含数字和字母'
            },
            isNickname: {
                validate: function validate(value) {
                    if (value.length > 8 || value == '') {
                        return false;
                    }
                    return true;
                },
                instructions: '昵称字符长度要在8个以内'
            },
            isPhone: {
                validate: function validate(value) {
                    var reg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
                    if (value == '' || value === undefined) {
                        return false;
                    } else {
                        return reg.test(value);
                    }
                },
                instructions: '手机号格式不正确'
            },
            isCode: {
                validate: function validate(value) {
                    var reg = /\d+/;
                    return reg.test(value);
                },
                instructions: '编码必须为数字'
            },
            isEmpty: {
                validate: function validate(value) {
                    if (value == '' || value === undefined) {
                        return false;
                    } else {
                        return true;
                    }
                },
                instructions: '输入不能为空~'
            }
        },
        val: function val(data) {
            var rule = data.rule, value = data.value, type = this.types[rule];
            if (type.validate(value)) {
                return { flag: true };
            } else {
                return {
                    flag: false,
                    instructions: type.instructions
                };
            }
        }
    };
    return validator;
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
!function (e, t) {
    'use strict';
    function n(e, t) {
        for (var n, i = [], r = 0; r < e.length; ++r) {
            if (n = s[e[r]] || o(e[r]), !n)
                throw 'module definition dependecy not found: ' + e[r];
            i.push(n);
        }
        t.apply(null, i);
    }
    function i(e, i, r) {
        if ('string' != typeof e)
            throw 'invalid module definition, module id must be defined and be a string';
        if (i === t)
            throw 'invalid module definition, dependencies must be specified';
        if (r === t)
            throw 'invalid module definition, definition function must be specified';
        n(i, function () {
            s[e] = r.apply(null, arguments);
        });
    }
    function r(e) {
        return !!s[e];
    }
    function o(t) {
        for (var n = e, i = t.split(/[.\/]/), r = 0; r < i.length; ++r) {
            if (!n[i[r]])
                return;
            n = n[i[r]];
        }
        return n;
    }
    function a(n) {
        for (var i = 0; i < n.length; i++) {
            for (var r = e, o = n[i], a = o.split(/[.\/]/), u = 0; u < a.length - 1; ++u)
                r[a[u]] === t && (r[a[u]] = {}), r = r[a[u]];
            r[a[a.length - 1]] = s[o];
        }
    }
    var s = {}, u = 'moxie/core/utils/Basic', c = 'moxie/core/utils/Env', l = 'moxie/core/I18n', d = 'moxie/core/utils/Mime', h = 'moxie/core/utils/Dom', f = 'moxie/core/Exceptions', p = 'moxie/core/EventTarget', m = 'moxie/runtime/Runtime', g = 'moxie/runtime/RuntimeClient', v = 'moxie/file/FileInput', w = 'moxie/core/utils/Encode', y = 'moxie/file/Blob', E = 'moxie/file/File', _ = 'moxie/file/FileDrop', b = 'moxie/file/FileReader', x = 'moxie/core/utils/Url', R = 'moxie/runtime/RuntimeTarget', A = 'moxie/file/FileReaderSync', I = 'moxie/xhr/FormData', T = 'moxie/xhr/XMLHttpRequest', S = 'moxie/runtime/Transporter', O = 'moxie/image/Image', D = 'moxie/runtime/html5/Runtime', N = 'moxie/core/utils/Events', L = 'moxie/runtime/html5/file/FileInput', C = 'moxie/runtime/html5/file/Blob', M = 'moxie/runtime/html5/file/FileDrop', F = 'moxie/runtime/html5/file/FileReader', P = 'moxie/runtime/html5/xhr/XMLHttpRequest', H = 'moxie/runtime/html5/utils/BinaryReader', B = 'moxie/runtime/html5/image/JPEGHeaders', k = 'moxie/runtime/html5/image/ExifParser', U = 'moxie/runtime/html5/image/JPEG', G = 'moxie/runtime/html5/image/PNG', z = 'moxie/runtime/html5/image/ImageInfo', q = 'moxie/runtime/html5/image/MegaPixel', j = 'moxie/runtime/html5/image/Image', X = 'moxie/runtime/flash/Runtime', V = 'moxie/runtime/flash/file/FileInput', W = 'moxie/runtime/flash/file/Blob', Y = 'moxie/runtime/flash/file/FileReader', $ = 'moxie/runtime/flash/file/FileReaderSync', J = 'moxie/runtime/flash/xhr/XMLHttpRequest', Z = 'moxie/runtime/flash/runtime/Transporter', K = 'moxie/runtime/flash/image/Image', Q = 'moxie/runtime/silverlight/Runtime', ee = 'moxie/runtime/silverlight/file/FileInput', te = 'moxie/runtime/silverlight/file/Blob', ne = 'moxie/runtime/silverlight/file/FileDrop', ie = 'moxie/runtime/silverlight/file/FileReader', re = 'moxie/runtime/silverlight/file/FileReaderSync', oe = 'moxie/runtime/silverlight/xhr/XMLHttpRequest', ae = 'moxie/runtime/silverlight/runtime/Transporter', se = 'moxie/runtime/silverlight/image/Image', ue = 'moxie/runtime/html4/Runtime', ce = 'moxie/runtime/html4/file/FileInput', le = 'moxie/runtime/html4/file/FileReader', de = 'moxie/runtime/html4/xhr/XMLHttpRequest', he = 'moxie/runtime/html4/image/Image';
    i(u, [], function () {
        var e = function (e) {
                var t;
                return e === t ? 'undefined' : null === e ? 'null' : e.nodeType ? 'node' : {}.toString.call(e).match(/\s([a-z|A-Z]+)/)[1].toLowerCase();
            }, t = function (i) {
                var r;
                return n(arguments, function (o, s) {
                    s > 0 && n(o, function (n, o) {
                        n !== r && (e(i[o]) === e(n) && ~a(e(n), [
                            'array',
                            'object'
                        ]) ? t(i[o], n) : i[o] = n);
                    });
                }), i;
            }, n = function (t, n) {
                var i, r, o, a;
                if (t)
                    if ('number' === e(t.length)) {
                        for (o = 0, i = t.length; i > o; o++)
                            if (n(t[o], o) === !1)
                                return;
                    } else if ('object' === e(t))
                        for (r in t)
                            if (t.hasOwnProperty(r) && n(t[r], r) === !1)
                                return;
            }, i = function (t) {
                var n;
                if (!t || 'object' !== e(t))
                    return !0;
                for (n in t)
                    return !1;
                return !0;
            }, r = function (t, n) {
                function i(r) {
                    'function' === e(t[r]) && t[r](function (e) {
                        ++r < o && !e ? i(r) : n(e);
                    });
                }
                var r = 0, o = t.length;
                'function' !== e(n) && (n = function () {
                }), t && t.length || n(), i(r);
            }, o = function (e, t) {
                var i = 0, r = e.length, o = new Array(r);
                n(e, function (e, n) {
                    e(function (e) {
                        if (e)
                            return t(e);
                        var a = [].slice.call(arguments);
                        a.shift(), o[n] = a, i++, i === r && (o.unshift(null), t.apply(this, o));
                    });
                });
            }, a = function (e, t) {
                if (t) {
                    if (Array.prototype.indexOf)
                        return Array.prototype.indexOf.call(t, e);
                    for (var n = 0, i = t.length; i > n; n++)
                        if (t[n] === e)
                            return n;
                }
                return -1;
            }, s = function (t, n) {
                var i = [];
                'array' !== e(t) && (t = [t]), 'array' !== e(n) && (n = [n]);
                for (var r in t)
                    -1 === a(t[r], n) && i.push(t[r]);
                return i.length ? i : !1;
            }, u = function (e, t) {
                var i = [];
                return n(e, function (e) {
                    -1 !== a(e, t) && i.push(e);
                }), i.length ? i : null;
            }, c = function (e) {
                var t, n = [];
                for (t = 0; t < e.length; t++)
                    n[t] = e[t];
                return n;
            }, l = function () {
                var e = 0;
                return function (t) {
                    var n = new Date().getTime().toString(32), i;
                    for (i = 0; 5 > i; i++)
                        n += Math.floor(65535 * Math.random()).toString(32);
                    return (t || 'o_') + n + (e++).toString(32);
                };
            }(), d = function (e) {
                return e ? String.prototype.trim ? String.prototype.trim.call(e) : e.toString().replace(/^\s*/, '').replace(/\s*$/, '') : e;
            }, h = function (e) {
                if ('string' != typeof e)
                    return e;
                var t = {
                        t: 1099511627776,
                        g: 1073741824,
                        m: 1048576,
                        k: 1024
                    }, n;
                return e = /^([0-9\.]+)([tmgk]?)$/.exec(e.toLowerCase().replace(/[^0-9\.tmkg]/g, '')), n = e[2], e = +e[1], t.hasOwnProperty(n) && (e *= t[n]), Math.floor(e);
            }, f = function (t) {
                var n = [].slice.call(arguments, 1);
                return t.replace(/%[a-z]/g, function () {
                    var t = n.shift();
                    return 'undefined' !== e(t) ? t : '';
                });
            };
        return {
            guid: l,
            typeOf: e,
            extend: t,
            each: n,
            isEmptyObj: i,
            inSeries: r,
            inParallel: o,
            inArray: a,
            arrayDiff: s,
            arrayIntersect: u,
            toArray: c,
            trim: d,
            sprintf: f,
            parseSizeStr: h
        };
    }), i(c, [u], function (e) {
        function t(e, t, n) {
            var i = 0, r = 0, o = 0, a = {
                    dev: -6,
                    alpha: -5,
                    a: -5,
                    beta: -4,
                    b: -4,
                    RC: -3,
                    rc: -3,
                    '#': -2,
                    p: 1,
                    pl: 1
                }, s = function (e) {
                    return e = ('' + e).replace(/[_\-+]/g, '.'), e = e.replace(/([^.\d]+)/g, '.$1.').replace(/\.{2,}/g, '.'), e.length ? e.split('.') : [-8];
                }, u = function (e) {
                    return e ? isNaN(e) ? a[e] || -7 : parseInt(e, 10) : 0;
                };
            for (e = s(e), t = s(t), r = Math.max(e.length, t.length), i = 0; r > i; i++)
                if (e[i] != t[i]) {
                    if (e[i] = u(e[i]), t[i] = u(t[i]), e[i] < t[i]) {
                        o = -1;
                        break;
                    }
                    if (e[i] > t[i]) {
                        o = 1;
                        break;
                    }
                }
            if (!n)
                return o;
            switch (n) {
            case '>':
            case 'gt':
                return o > 0;
            case '>=':
            case 'ge':
                return o >= 0;
            case '<=':
            case 'le':
                return 0 >= o;
            case '==':
            case '=':
            case 'eq':
                return 0 === o;
            case '<>':
            case '!=':
            case 'ne':
                return 0 !== o;
            case '':
            case '<':
            case 'lt':
                return 0 > o;
            default:
                return null;
            }
        }
        var n = function (e) {
                var t = '', n = '?', i = 'function', r = 'undefined', o = 'object', a = 'major', s = 'model', u = 'name', c = 'type', l = 'vendor', d = 'version', h = 'architecture', f = 'console', p = 'mobile', m = 'tablet', g = {
                        has: function (e, t) {
                            return -1 !== t.toLowerCase().indexOf(e.toLowerCase());
                        },
                        lowerize: function (e) {
                            return e.toLowerCase();
                        }
                    }, v = {
                        rgx: function () {
                            for (var t, n = 0, a, s, u, c, l, d, h = arguments; n < h.length; n += 2) {
                                var f = h[n], p = h[n + 1];
                                if (typeof t === r) {
                                    t = {};
                                    for (u in p)
                                        c = p[u], typeof c === o ? t[c[0]] = e : t[c] = e;
                                }
                                for (a = s = 0; a < f.length; a++)
                                    if (l = f[a].exec(this.getUA())) {
                                        for (u = 0; u < p.length; u++)
                                            d = l[++s], c = p[u], typeof c === o && c.length > 0 ? 2 == c.length ? typeof c[1] == i ? t[c[0]] = c[1].call(this, d) : t[c[0]] = c[1] : 3 == c.length ? typeof c[1] !== i || c[1].exec && c[1].test ? t[c[0]] = d ? d.replace(c[1], c[2]) : e : t[c[0]] = d ? c[1].call(this, d, c[2]) : e : 4 == c.length && (t[c[0]] = d ? c[3].call(this, d.replace(c[1], c[2])) : e) : t[c] = d ? d : e;
                                        break;
                                    }
                                if (l)
                                    break;
                            }
                            return t;
                        },
                        str: function (t, i) {
                            for (var r in i)
                                if (typeof i[r] === o && i[r].length > 0) {
                                    for (var a = 0; a < i[r].length; a++)
                                        if (g.has(i[r][a], t))
                                            return r === n ? e : r;
                                } else if (g.has(i[r], t))
                                    return r === n ? e : r;
                            return t;
                        }
                    }, w = {
                        browser: {
                            oldsafari: {
                                major: {
                                    1: [
                                        '/8',
                                        '/1',
                                        '/3'
                                    ],
                                    2: '/4',
                                    '?': '/'
                                },
                                version: {
                                    '1.0': '/8',
                                    1.2: '/1',
                                    1.3: '/3',
                                    '2.0': '/412',
                                    '2.0.2': '/416',
                                    '2.0.3': '/417',
                                    '2.0.4': '/419',
                                    '?': '/'
                                }
                            }
                        },
                        device: {
                            sprint: {
                                model: { 'Evo Shift 4G': '7373KT' },
                                vendor: {
                                    HTC: 'APA',
                                    Sprint: 'Sprint'
                                }
                            }
                        },
                        os: {
                            windows: {
                                version: {
                                    ME: '4.90',
                                    'NT 3.11': 'NT3.51',
                                    'NT 4.0': 'NT4.0',
                                    2000: 'NT 5.0',
                                    XP: [
                                        'NT 5.1',
                                        'NT 5.2'
                                    ],
                                    Vista: 'NT 6.0',
                                    7: 'NT 6.1',
                                    8: 'NT 6.2',
                                    8.1: 'NT 6.3',
                                    RT: 'ARM'
                                }
                            }
                        }
                    }, y = {
                        browser: [
                            [
                                /(opera\smini)\/([\w\.-]+)/i,
                                /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,
                                /(opera).+version\/([\w\.]+)/i,
                                /(opera)[\/\s]+([\w\.]+)/i
                            ],
                            [
                                u,
                                d
                            ],
                            [/\s(opr)\/([\w\.]+)/i],
                            [
                                [
                                    u,
                                    'Opera'
                                ],
                                d
                            ],
                            [
                                /(kindle)\/([\w\.]+)/i,
                                /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,
                                /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,
                                /(?:ms|\()(ie)\s([\w\.]+)/i,
                                /(rekonq)\/([\w\.]+)*/i,
                                /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi)\/([\w\.-]+)/i
                            ],
                            [
                                u,
                                d
                            ],
                            [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
                            [
                                [
                                    u,
                                    'IE'
                                ],
                                d
                            ],
                            [/(edge)\/((\d+)?[\w\.]+)/i],
                            [
                                u,
                                d
                            ],
                            [/(yabrowser)\/([\w\.]+)/i],
                            [
                                [
                                    u,
                                    'Yandex'
                                ],
                                d
                            ],
                            [/(comodo_dragon)\/([\w\.]+)/i],
                            [
                                [
                                    u,
                                    /_/g,
                                    ' '
                                ],
                                d
                            ],
                            [
                                /(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i,
                                /(uc\s?browser|qqbrowser)[\/\s]?([\w\.]+)/i
                            ],
                            [
                                u,
                                d
                            ],
                            [/(dolfin)\/([\w\.]+)/i],
                            [
                                [
                                    u,
                                    'Dolphin'
                                ],
                                d
                            ],
                            [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
                            [
                                [
                                    u,
                                    'Chrome'
                                ],
                                d
                            ],
                            [/XiaoMi\/MiuiBrowser\/([\w\.]+)/i],
                            [
                                d,
                                [
                                    u,
                                    'MIUI Browser'
                                ]
                            ],
                            [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i],
                            [
                                d,
                                [
                                    u,
                                    'Android Browser'
                                ]
                            ],
                            [/FBAV\/([\w\.]+);/i],
                            [
                                d,
                                [
                                    u,
                                    'Facebook'
                                ]
                            ],
                            [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
                            [
                                d,
                                [
                                    u,
                                    'Mobile Safari'
                                ]
                            ],
                            [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
                            [
                                d,
                                u
                            ],
                            [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                            [
                                u,
                                [
                                    d,
                                    v.str,
                                    w.browser.oldsafari.version
                                ]
                            ],
                            [
                                /(konqueror)\/([\w\.]+)/i,
                                /(webkit|khtml)\/([\w\.]+)/i
                            ],
                            [
                                u,
                                d
                            ],
                            [/(navigator|netscape)\/([\w\.-]+)/i],
                            [
                                [
                                    u,
                                    'Netscape'
                                ],
                                d
                            ],
                            [
                                /(swiftfox)/i,
                                /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
                                /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,
                                /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,
                                /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf)[\/\s]?([\w\.]+)/i,
                                /(links)\s\(([\w\.]+)/i,
                                /(gobrowser)\/?([\w\.]+)*/i,
                                /(ice\s?browser)\/v?([\w\._]+)/i,
                                /(mosaic)[\/\s]([\w\.]+)/i
                            ],
                            [
                                u,
                                d
                            ]
                        ],
                        engine: [
                            [/windows.+\sedge\/([\w\.]+)/i],
                            [
                                d,
                                [
                                    u,
                                    'EdgeHTML'
                                ]
                            ],
                            [
                                /(presto)\/([\w\.]+)/i,
                                /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,
                                /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,
                                /(icab)[\/\s]([23]\.[\d\.]+)/i
                            ],
                            [
                                u,
                                d
                            ],
                            [/rv\:([\w\.]+).*(gecko)/i],
                            [
                                d,
                                u
                            ]
                        ],
                        os: [
                            [/microsoft\s(windows)\s(vista|xp)/i],
                            [
                                u,
                                d
                            ],
                            [
                                /(windows)\snt\s6\.2;\s(arm)/i,
                                /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i
                            ],
                            [
                                u,
                                [
                                    d,
                                    v.str,
                                    w.os.windows.version
                                ]
                            ],
                            [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                            [
                                [
                                    u,
                                    'Windows'
                                ],
                                [
                                    d,
                                    v.str,
                                    w.os.windows.version
                                ]
                            ],
                            [/\((bb)(10);/i],
                            [
                                [
                                    u,
                                    'BlackBerry'
                                ],
                                d
                            ],
                            [
                                /(blackberry)\w*\/?([\w\.]+)*/i,
                                /(tizen)[\/\s]([\w\.]+)/i,
                                /(android|webos|palm\os|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,
                                /linux;.+(sailfish);/i
                            ],
                            [
                                u,
                                d
                            ],
                            [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],
                            [
                                [
                                    u,
                                    'Symbian'
                                ],
                                d
                            ],
                            [/\((series40);/i],
                            [u],
                            [/mozilla.+\(mobile;.+gecko.+firefox/i],
                            [
                                [
                                    u,
                                    'Firefox OS'
                                ],
                                d
                            ],
                            [
                                /(nintendo|playstation)\s([wids3portablevu]+)/i,
                                /(mint)[\/\s\(]?(\w+)*/i,
                                /(mageia|vectorlinux)[;\s]/i,
                                /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i,
                                /(hurd|linux)\s?([\w\.]+)*/i,
                                /(gnu)\s?([\w\.]+)*/i
                            ],
                            [
                                u,
                                d
                            ],
                            [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                            [
                                [
                                    u,
                                    'Chromium OS'
                                ],
                                d
                            ],
                            [/(sunos)\s?([\w\.]+\d)*/i],
                            [
                                [
                                    u,
                                    'Solaris'
                                ],
                                d
                            ],
                            [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],
                            [
                                u,
                                d
                            ],
                            [/(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i],
                            [
                                [
                                    u,
                                    'iOS'
                                ],
                                [
                                    d,
                                    /_/g,
                                    '.'
                                ]
                            ],
                            [
                                /(mac\sos\sx)\s?([\w\s\.]+\w)*/i,
                                /(macintosh|mac(?=_powerpc)\s)/i
                            ],
                            [
                                [
                                    u,
                                    'Mac OS'
                                ],
                                [
                                    d,
                                    /_/g,
                                    '.'
                                ]
                            ],
                            [
                                /((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,
                                /(haiku)\s(\w+)/i,
                                /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,
                                /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,
                                /(unix)\s?([\w\.]+)*/i
                            ],
                            [
                                u,
                                d
                            ]
                        ]
                    }, E = function (e) {
                        var n = e || (window && window.navigator && window.navigator.userAgent ? window.navigator.userAgent : t);
                        this.getBrowser = function () {
                            return v.rgx.apply(this, y.browser);
                        }, this.getEngine = function () {
                            return v.rgx.apply(this, y.engine);
                        }, this.getOS = function () {
                            return v.rgx.apply(this, y.os);
                        }, this.getResult = function () {
                            return {
                                ua: this.getUA(),
                                browser: this.getBrowser(),
                                engine: this.getEngine(),
                                os: this.getOS()
                            };
                        }, this.getUA = function () {
                            return n;
                        }, this.setUA = function (e) {
                            return n = e, this;
                        }, this.setUA(n);
                    };
                return E;
            }(), i = function () {
                var t = {
                    define_property: function () {
                        return !1;
                    }(),
                    create_canvas: function () {
                        var e = document.createElement('canvas');
                        return !(!e.getContext || !e.getContext('2d'));
                    }(),
                    return_response_type: function (t) {
                        try {
                            if (-1 !== e.inArray(t, [
                                    '',
                                    'text',
                                    'document'
                                ]))
                                return !0;
                            if (window.XMLHttpRequest) {
                                var n = new XMLHttpRequest();
                                if (n.open('get', '/'), 'responseType' in n)
                                    return n.responseType = t, n.responseType !== t ? !1 : !0;
                            }
                        } catch (i) {
                        }
                        return !1;
                    },
                    use_data_uri: function () {
                        var e = new Image();
                        return e.onload = function () {
                            t.use_data_uri = 1 === e.width && 1 === e.height;
                        }, setTimeout(function () {
                            e.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAP8AAAAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==';
                        }, 1), !1;
                    }(),
                    use_data_uri_over32kb: function () {
                        return t.use_data_uri && ('IE' !== o.browser || o.version >= 9);
                    },
                    use_data_uri_of: function (e) {
                        return t.use_data_uri && 33000 > e || t.use_data_uri_over32kb();
                    },
                    use_fileinput: function () {
                        if (navigator.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/))
                            return !1;
                        var e = document.createElement('input');
                        return e.setAttribute('type', 'file'), !e.disabled;
                    }
                };
                return function (n) {
                    var i = [].slice.call(arguments);
                    return i.shift(), 'function' === e.typeOf(t[n]) ? t[n].apply(this, i) : !!t[n];
                };
            }(), r = new n().getResult(), o = {
                can: i,
                uaParser: n,
                browser: r.browser.name,
                version: r.browser.version,
                os: r.os.name,
                osVersion: r.os.version,
                verComp: t,
                swf_url: '../flash/Moxie.swf',
                xap_url: '../silverlight/Moxie.xap',
                global_event_dispatcher: 'moxie.core.EventTarget.instance.dispatchEvent'
            };
        return o.OS = o.os, o;
    }), i(l, [u], function (e) {
        var t = {};
        return {
            addI18n: function (n) {
                return e.extend(t, n);
            },
            translate: function (e) {
                return t[e] || e;
            },
            _: function (e) {
                return this.translate(e);
            },
            sprintf: function (t) {
                var n = [].slice.call(arguments, 1);
                return t.replace(/%[a-z]/g, function () {
                    var t = n.shift();
                    return 'undefined' !== e.typeOf(t) ? t : '';
                });
            }
        };
    }), i(d, [
        u,
        l
    ], function (e, t) {
        var n = 'application/msword,doc dot,application/pdf,pdf,application/pgp-signature,pgp,application/postscript,ps ai eps,application/rtf,rtf,application/vnd.ms-excel,xls xlb,application/vnd.ms-powerpoint,ppt pps pot,application/zip,zip,application/x-shockwave-flash,swf swfl,application/vnd.openxmlformats-officedocument.wordprocessingml.document,docx,application/vnd.openxmlformats-officedocument.wordprocessingml.template,dotx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,xlsx,application/vnd.openxmlformats-officedocument.presentationml.presentation,pptx,application/vnd.openxmlformats-officedocument.presentationml.template,potx,application/vnd.openxmlformats-officedocument.presentationml.slideshow,ppsx,application/x-javascript,js,application/json,json,audio/mpeg,mp3 mpga mpega mp2,audio/x-wav,wav,audio/x-m4a,m4a,audio/ogg,oga ogg,audio/aiff,aiff aif,audio/flac,flac,audio/aac,aac,audio/ac3,ac3,audio/x-ms-wma,wma,image/bmp,bmp,image/gif,gif,image/jpeg,jpg jpeg jpe,image/photoshop,psd,image/png,png,image/svg+xml,svg svgz,image/tiff,tiff tif,text/plain,asc txt text diff log,text/html,htm html xhtml,text/css,css,text/csv,csv,text/rtf,rtf,video/mpeg,mpeg mpg mpe m2v,video/quicktime,qt mov,video/mp4,mp4,video/x-m4v,m4v,video/x-flv,flv,video/x-ms-wmv,wmv,video/avi,avi,video/webm,webm,video/3gpp,3gpp 3gp,video/3gpp2,3g2,video/vnd.rn-realvideo,rv,video/ogg,ogv,video/x-matroska,mkv,application/vnd.oasis.opendocument.formula-template,otf,application/octet-stream,exe', i = {
                mimes: {},
                extensions: {},
                addMimeType: function (e) {
                    var t = e.split(/,/), n, i, r;
                    for (n = 0; n < t.length; n += 2) {
                        for (r = t[n + 1].split(/ /), i = 0; i < r.length; i++)
                            this.mimes[r[i]] = t[n];
                        this.extensions[t[n]] = r;
                    }
                },
                extList2mimes: function (t, n) {
                    var i = this, r, o, a, s, u = [];
                    for (o = 0; o < t.length; o++)
                        for (r = t[o].extensions.split(/\s*,\s*/), a = 0; a < r.length; a++) {
                            if ('*' === r[a])
                                return [];
                            if (s = i.mimes[r[a]], s && -1 === e.inArray(s, u) && u.push(s), n && /^\w+$/.test(r[a]))
                                u.push('.' + r[a]);
                            else if (!s)
                                return [];
                        }
                    return u;
                },
                mimes2exts: function (t) {
                    var n = this, i = [];
                    return e.each(t, function (t) {
                        if ('*' === t)
                            return i = [], !1;
                        var r = t.match(/^(\w+)\/(\*|\w+)$/);
                        r && ('*' === r[2] ? e.each(n.extensions, function (e, t) {
                            new RegExp('^' + r[1] + '/').test(t) && [].push.apply(i, n.extensions[t]);
                        }) : n.extensions[t] && [].push.apply(i, n.extensions[t]));
                    }), i;
                },
                mimes2extList: function (n) {
                    var i = [], r = [];
                    return 'string' === e.typeOf(n) && (n = e.trim(n).split(/\s*,\s*/)), r = this.mimes2exts(n), i.push({
                        title: t.translate('Files'),
                        extensions: r.length ? r.join(',') : '*'
                    }), i.mimes = n, i;
                },
                getFileExtension: function (e) {
                    var t = e && e.match(/\.([^.]+)$/);
                    return t ? t[1].toLowerCase() : '';
                },
                getFileMime: function (e) {
                    return this.mimes[this.getFileExtension(e)] || '';
                }
            };
        return i.addMimeType(n), i;
    }), i(h, [c], function (e) {
        var t = function (e) {
                return 'string' != typeof e ? e : document.getElementById(e);
            }, n = function (e, t) {
                if (!e.className)
                    return !1;
                var n = new RegExp('(^|\\s+)' + t + '(\\s+|$)');
                return n.test(e.className);
            }, i = function (e, t) {
                n(e, t) || (e.className = e.className ? e.className.replace(/\s+$/, '') + ' ' + t : t);
            }, r = function (e, t) {
                if (e.className) {
                    var n = new RegExp('(^|\\s+)' + t + '(\\s+|$)');
                    e.className = e.className.replace(n, function (e, t, n) {
                        return ' ' === t && ' ' === n ? ' ' : '';
                    });
                }
            }, o = function (e, t) {
                return e.currentStyle ? e.currentStyle[t] : window.getComputedStyle ? window.getComputedStyle(e, null)[t] : void 0;
            }, a = function (t, n) {
                function i(e) {
                    var t, n, i = 0, r = 0;
                    return e && (n = e.getBoundingClientRect(), t = 'CSS1Compat' === s.compatMode ? s.documentElement : s.body, i = n.left + t.scrollLeft, r = n.top + t.scrollTop), {
                        x: i,
                        y: r
                    };
                }
                var r = 0, o = 0, a, s = document, u, c;
                if (t = t, n = n || s.body, t && t.getBoundingClientRect && 'IE' === e.browser && (!s.documentMode || s.documentMode < 8))
                    return u = i(t), c = i(n), {
                        x: u.x - c.x,
                        y: u.y - c.y
                    };
                for (a = t; a && a != n && a.nodeType;)
                    r += a.offsetLeft || 0, o += a.offsetTop || 0, a = a.offsetParent;
                for (a = t.parentNode; a && a != n && a.nodeType;)
                    r -= a.scrollLeft || 0, o -= a.scrollTop || 0, a = a.parentNode;
                return {
                    x: r,
                    y: o
                };
            }, s = function (e) {
                return {
                    w: e.offsetWidth || e.clientWidth,
                    h: e.offsetHeight || e.clientHeight
                };
            };
        return {
            get: t,
            hasClass: n,
            addClass: i,
            removeClass: r,
            getStyle: o,
            getPos: a,
            getSize: s
        };
    }), i(f, [u], function (e) {
        function t(e, t) {
            var n;
            for (n in e)
                if (e[n] === t)
                    return n;
            return null;
        }
        return {
            RuntimeError: function () {
                function n(e) {
                    this.code = e, this.name = t(i, e), this.message = this.name + ': RuntimeError ' + this.code;
                }
                var i = {
                    NOT_INIT_ERR: 1,
                    NOT_SUPPORTED_ERR: 9,
                    JS_ERR: 4
                };
                return e.extend(n, i), n.prototype = Error.prototype, n;
            }(),
            OperationNotAllowedException: function () {
                function t(e) {
                    this.code = e, this.name = 'OperationNotAllowedException';
                }
                return e.extend(t, { NOT_ALLOWED_ERR: 1 }), t.prototype = Error.prototype, t;
            }(),
            ImageError: function () {
                function n(e) {
                    this.code = e, this.name = t(i, e), this.message = this.name + ': ImageError ' + this.code;
                }
                var i = {
                    WRONG_FORMAT: 1,
                    MAX_RESOLUTION_ERR: 2,
                    INVALID_META_ERR: 3
                };
                return e.extend(n, i), n.prototype = Error.prototype, n;
            }(),
            FileException: function () {
                function n(e) {
                    this.code = e, this.name = t(i, e), this.message = this.name + ': FileException ' + this.code;
                }
                var i = {
                    NOT_FOUND_ERR: 1,
                    SECURITY_ERR: 2,
                    ABORT_ERR: 3,
                    NOT_READABLE_ERR: 4,
                    ENCODING_ERR: 5,
                    NO_MODIFICATION_ALLOWED_ERR: 6,
                    INVALID_STATE_ERR: 7,
                    SYNTAX_ERR: 8
                };
                return e.extend(n, i), n.prototype = Error.prototype, n;
            }(),
            DOMException: function () {
                function n(e) {
                    this.code = e, this.name = t(i, e), this.message = this.name + ': DOMException ' + this.code;
                }
                var i = {
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
                return e.extend(n, i), n.prototype = Error.prototype, n;
            }(),
            EventException: function () {
                function t(e) {
                    this.code = e, this.name = 'EventException';
                }
                return e.extend(t, { UNSPECIFIED_EVENT_TYPE_ERR: 0 }), t.prototype = Error.prototype, t;
            }()
        };
    }), i(p, [
        c,
        f,
        u
    ], function (e, t, n) {
        function i() {
            var e = {};
            n.extend(this, {
                uid: null,
                init: function () {
                    this.uid || (this.uid = n.guid('uid_'));
                },
                addEventListener: function (t, i, r, o) {
                    var a = this, s;
                    return this.hasOwnProperty('uid') || (this.uid = n.guid('uid_')), t = n.trim(t), /\s/.test(t) ? void n.each(t.split(/\s+/), function (e) {
                        a.addEventListener(e, i, r, o);
                    }) : (t = t.toLowerCase(), r = parseInt(r, 10) || 0, s = e[this.uid] && e[this.uid][t] || [], s.push({
                        fn: i,
                        priority: r,
                        scope: o || this
                    }), e[this.uid] || (e[this.uid] = {}), void (e[this.uid][t] = s));
                },
                hasEventListener: function (t) {
                    var n = t ? e[this.uid] && e[this.uid][t] : e[this.uid];
                    return n ? n : !1;
                },
                removeEventListener: function (t, i) {
                    t = t.toLowerCase();
                    var r = e[this.uid] && e[this.uid][t], o;
                    if (r) {
                        if (i) {
                            for (o = r.length - 1; o >= 0; o--)
                                if (r[o].fn === i) {
                                    r.splice(o, 1);
                                    break;
                                }
                        } else
                            r = [];
                        r.length || (delete e[this.uid][t], n.isEmptyObj(e[this.uid]) && delete e[this.uid]);
                    }
                },
                removeAllEventListeners: function () {
                    e[this.uid] && delete e[this.uid];
                },
                dispatchEvent: function (i) {
                    var r, o, a, s, u = {}, c = !0, l;
                    if ('string' !== n.typeOf(i)) {
                        if (s = i, 'string' !== n.typeOf(s.type))
                            throw new t.EventException(t.EventException.UNSPECIFIED_EVENT_TYPE_ERR);
                        i = s.type, s.total !== l && s.loaded !== l && (u.total = s.total, u.loaded = s.loaded), u.async = s.async || !1;
                    }
                    if (-1 !== i.indexOf('::') ? !function (e) {
                            r = e[0], i = e[1];
                        }(i.split('::')) : r = this.uid, i = i.toLowerCase(), o = e[r] && e[r][i]) {
                        o.sort(function (e, t) {
                            return t.priority - e.priority;
                        }), a = [].slice.call(arguments), a.shift(), u.type = i, a.unshift(u);
                        var d = [];
                        n.each(o, function (e) {
                            a[0].target = e.scope, d.push(u.async ? function (t) {
                                setTimeout(function () {
                                    t(e.fn.apply(e.scope, a) === !1);
                                }, 1);
                            } : function (t) {
                                t(e.fn.apply(e.scope, a) === !1);
                            });
                        }), d.length && n.inSeries(d, function (e) {
                            c = !e;
                        });
                    }
                    return c;
                },
                bind: function () {
                    this.addEventListener.apply(this, arguments);
                },
                unbind: function () {
                    this.removeEventListener.apply(this, arguments);
                },
                unbindAll: function () {
                    this.removeAllEventListeners.apply(this, arguments);
                },
                trigger: function () {
                    return this.dispatchEvent.apply(this, arguments);
                },
                handleEventProps: function (e) {
                    var t = this;
                    this.bind(e.join(' '), function (e) {
                        var t = 'on' + e.type.toLowerCase();
                        'function' === n.typeOf(this[t]) && this[t].apply(this, arguments);
                    }), n.each(e, function (e) {
                        e = 'on' + e.toLowerCase(e), 'undefined' === n.typeOf(t[e]) && (t[e] = null);
                    });
                }
            });
        }
        return i.instance = new i(), i;
    }), i(m, [
        c,
        u,
        h,
        p
    ], function (e, t, n, i) {
        function r(e, i, o, s, u) {
            var c = this, l, d = t.guid(i + '_'), h = u || 'browser';
            e = e || {}, a[d] = this, o = t.extend({
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
            }, o), e.preferred_caps && (h = r.getMode(s, e.preferred_caps, h)), l = function () {
                var e = {};
                return {
                    exec: function (t, n, i, r) {
                        return l[n] && (e[t] || (e[t] = {
                            context: this,
                            instance: new l[n]()
                        }), e[t].instance[i]) ? e[t].instance[i].apply(this, r) : void 0;
                    },
                    removeInstance: function (t) {
                        delete e[t];
                    },
                    removeAllInstances: function () {
                        var n = this;
                        t.each(e, function (e, i) {
                            'function' === t.typeOf(e.instance.destroy) && e.instance.destroy.call(e.context), n.removeInstance(i);
                        });
                    }
                };
            }(), t.extend(this, {
                initialized: !1,
                uid: d,
                type: i,
                mode: r.getMode(s, e.required_caps, h),
                shimid: d + '_container',
                clients: 0,
                options: e,
                can: function (e, n) {
                    var i = arguments[2] || o;
                    if ('string' === t.typeOf(e) && 'undefined' === t.typeOf(n) && (e = r.parseCaps(e)), 'object' === t.typeOf(e)) {
                        for (var a in e)
                            if (!this.can(a, e[a], i))
                                return !1;
                        return !0;
                    }
                    return 'function' === t.typeOf(i[e]) ? i[e].call(this, n) : n === i[e];
                },
                getShimContainer: function () {
                    var e, i = n.get(this.shimid);
                    return i || (e = this.options.container ? n.get(this.options.container) : document.body, i = document.createElement('div'), i.id = this.shimid, i.className = 'moxie-shim moxie-shim-' + this.type, t.extend(i.style, {
                        position: 'absolute',
                        top: '0px',
                        left: '0px',
                        width: '1px',
                        height: '1px',
                        overflow: 'hidden'
                    }), e.appendChild(i), e = null), i;
                },
                getShim: function () {
                    return l;
                },
                shimExec: function (e, t) {
                    var n = [].slice.call(arguments, 2);
                    return c.getShim().exec.call(this, this.uid, e, t, n);
                },
                exec: function (e, t) {
                    var n = [].slice.call(arguments, 2);
                    return c[e] && c[e][t] ? c[e][t].apply(this, n) : c.shimExec.apply(this, arguments);
                },
                destroy: function () {
                    if (c) {
                        var e = n.get(this.shimid);
                        e && e.parentNode.removeChild(e), l && l.removeAllInstances(), this.unbindAll(), delete a[this.uid], this.uid = null, d = c = l = e = null;
                    }
                }
            }), this.mode && e.required_caps && !this.can(e.required_caps) && (this.mode = !1);
        }
        var o = {}, a = {};
        return r.order = 'html5,flash,silverlight,html4', r.getRuntime = function (e) {
            return a[e] ? a[e] : !1;
        }, r.addConstructor = function (e, t) {
            t.prototype = i.instance, o[e] = t;
        }, r.getConstructor = function (e) {
            return o[e] || null;
        }, r.getInfo = function (e) {
            var t = r.getRuntime(e);
            return t ? {
                uid: t.uid,
                type: t.type,
                mode: t.mode,
                can: function () {
                    return t.can.apply(t, arguments);
                }
            } : null;
        }, r.parseCaps = function (e) {
            var n = {};
            return 'string' !== t.typeOf(e) ? e || {} : (t.each(e.split(','), function (e) {
                n[e] = !0;
            }), n);
        }, r.can = function (e, t) {
            var n, i = r.getConstructor(e), o;
            return i ? (n = new i({ required_caps: t }), o = n.mode, n.destroy(), !!o) : !1;
        }, r.thatCan = function (e, t) {
            var n = (t || r.order).split(/\s*,\s*/);
            for (var i in n)
                if (r.can(n[i], e))
                    return n[i];
            return null;
        }, r.getMode = function (e, n, i) {
            var r = null;
            if ('undefined' === t.typeOf(i) && (i = 'browser'), n && !t.isEmptyObj(e)) {
                if (t.each(n, function (n, i) {
                        if (e.hasOwnProperty(i)) {
                            var o = e[i](n);
                            if ('string' == typeof o && (o = [o]), r) {
                                if (!(r = t.arrayIntersect(r, o)))
                                    return r = !1;
                            } else
                                r = o;
                        }
                    }), r)
                    return -1 !== t.inArray(i, r) ? i : r[0];
                if (r === !1)
                    return !1;
            }
            return i;
        }, r.capTrue = function () {
            return !0;
        }, r.capFalse = function () {
            return !1;
        }, r.capTest = function (e) {
            return function () {
                return !!e;
            };
        }, r;
    }), i(g, [
        c,
        f,
        u,
        m
    ], function (e, t, n, i) {
        return function r() {
            var e;
            n.extend(this, {
                connectRuntime: function (r) {
                    function o(n) {
                        var s, u;
                        return n.length ? (s = n.shift().toLowerCase(), (u = i.getConstructor(s)) ? (e = new u(r), e.bind('Init', function () {
                            e.initialized = !0, setTimeout(function () {
                                e.clients++, a.trigger('RuntimeInit', e);
                            }, 1);
                        }), e.bind('Error', function () {
                            e.destroy(), o(n);
                        }), e.mode ? void e.init() : void e.trigger('Error')) : void o(n)) : (a.trigger('RuntimeError', new t.RuntimeError(t.RuntimeError.NOT_INIT_ERR)), void (e = null));
                    }
                    var a = this, s;
                    if ('string' === n.typeOf(r) ? s = r : 'string' === n.typeOf(r.ruid) && (s = r.ruid), s) {
                        if (e = i.getRuntime(s))
                            return e.clients++, e;
                        throw new t.RuntimeError(t.RuntimeError.NOT_INIT_ERR);
                    }
                    o((r.runtime_order || i.order).split(/\s*,\s*/));
                },
                disconnectRuntime: function () {
                    e && --e.clients <= 0 && e.destroy(), e = null;
                },
                getRuntime: function () {
                    return e && e.uid ? e : e = null;
                },
                exec: function () {
                    return e ? e.exec.apply(this, arguments) : null;
                }
            });
        };
    }), i(v, [
        u,
        c,
        d,
        h,
        f,
        p,
        l,
        m,
        g
    ], function (e, t, n, i, r, o, a, s, u) {
        function c(t) {
            var o = this, c, d, h;
            if (-1 !== e.inArray(e.typeOf(t), [
                    'string',
                    'node'
                ]) && (t = { browse_button: t }), d = i.get(t.browse_button), !d)
                throw new r.DOMException(r.DOMException.NOT_FOUND_ERR);
            h = {
                accept: [{
                        title: a.translate('All Files'),
                        extensions: '*'
                    }],
                name: 'file',
                multiple: !1,
                required_caps: !1,
                container: d.parentNode || document.body
            }, t = e.extend({}, h, t), 'string' == typeof t.required_caps && (t.required_caps = s.parseCaps(t.required_caps)), 'string' == typeof t.accept && (t.accept = n.mimes2extList(t.accept)), c = i.get(t.container), c || (c = document.body), 'static' === i.getStyle(c, 'position') && (c.style.position = 'relative'), c = d = null, u.call(o), e.extend(o, {
                uid: e.guid('uid_'),
                ruid: null,
                shimid: null,
                files: null,
                init: function () {
                    o.bind('RuntimeInit', function (n, r) {
                        o.ruid = r.uid, o.shimid = r.shimid, o.bind('Ready', function () {
                            o.trigger('Refresh');
                        }, 999), o.bind('Refresh', function () {
                            var n, o, a, s;
                            a = i.get(t.browse_button), s = i.get(r.shimid), a && (n = i.getPos(a, i.get(t.container)), o = i.getSize(a), s && e.extend(s.style, {
                                top: n.y + 'px',
                                left: n.x + 'px',
                                width: o.w + 'px',
                                height: o.h + 'px'
                            })), s = a = null;
                        }), r.exec.call(o, 'FileInput', 'init', t);
                    }), o.connectRuntime(e.extend({}, t, { required_caps: { select_file: !0 } }));
                },
                disable: function (t) {
                    var n = this.getRuntime();
                    n && n.exec.call(this, 'FileInput', 'disable', 'undefined' === e.typeOf(t) ? !0 : t);
                },
                refresh: function () {
                    o.trigger('Refresh');
                },
                destroy: function () {
                    var t = this.getRuntime();
                    t && (t.exec.call(this, 'FileInput', 'destroy'), this.disconnectRuntime()), 'array' === e.typeOf(this.files) && e.each(this.files, function (e) {
                        e.destroy();
                    }), this.files = null, this.unbindAll();
                }
            }), this.handleEventProps(l);
        }
        var l = [
            'ready',
            'change',
            'cancel',
            'mouseenter',
            'mouseleave',
            'mousedown',
            'mouseup'
        ];
        return c.prototype = o.instance, c;
    }), i(w, [], function () {
        var e = function (e) {
                return unescape(encodeURIComponent(e));
            }, t = function (e) {
                return decodeURIComponent(escape(e));
            }, n = function (e, n) {
                if ('function' == typeof window.atob)
                    return n ? t(window.atob(e)) : window.atob(e);
                var i = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=', r, o, a, s, u, c, l, d, h = 0, f = 0, p = '', m = [];
                if (!e)
                    return e;
                e += '';
                do
                    s = i.indexOf(e.charAt(h++)), u = i.indexOf(e.charAt(h++)), c = i.indexOf(e.charAt(h++)), l = i.indexOf(e.charAt(h++)), d = s << 18 | u << 12 | c << 6 | l, r = d >> 16 & 255, o = d >> 8 & 255, a = 255 & d, 64 == c ? m[f++] = String.fromCharCode(r) : 64 == l ? m[f++] = String.fromCharCode(r, o) : m[f++] = String.fromCharCode(r, o, a);
                while (h < e.length);
                return p = m.join(''), n ? t(p) : p;
            }, i = function (t, n) {
                if (n && (t = e(t)), 'function' == typeof window.btoa)
                    return window.btoa(t);
                var i = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=', r, o, a, s, u, c, l, d, h = 0, f = 0, p = '', m = [];
                if (!t)
                    return t;
                do
                    r = t.charCodeAt(h++), o = t.charCodeAt(h++), a = t.charCodeAt(h++), d = r << 16 | o << 8 | a, s = d >> 18 & 63, u = d >> 12 & 63, c = d >> 6 & 63, l = 63 & d, m[f++] = i.charAt(s) + i.charAt(u) + i.charAt(c) + i.charAt(l);
                while (h < t.length);
                p = m.join('');
                var g = t.length % 3;
                return (g ? p.slice(0, g - 3) : p) + '==='.slice(g || 3);
            };
        return {
            utf8_encode: e,
            utf8_decode: t,
            atob: n,
            btoa: i
        };
    }), i(y, [
        u,
        w,
        g
    ], function (e, t, n) {
        function i(o, a) {
            function s(t, n, o) {
                var a, s = r[this.uid];
                return 'string' === e.typeOf(s) && s.length ? (a = new i(null, {
                    type: o,
                    size: n - t
                }), a.detach(s.substr(t, a.size)), a) : null;
            }
            n.call(this), o && this.connectRuntime(o), a ? 'string' === e.typeOf(a) && (a = { data: a }) : a = {}, e.extend(this, {
                uid: a.uid || e.guid('uid_'),
                ruid: o,
                size: a.size || 0,
                type: a.type || '',
                slice: function (e, t, n) {
                    return this.isDetached() ? s.apply(this, arguments) : this.getRuntime().exec.call(this, 'Blob', 'slice', this.getSource(), e, t, n);
                },
                getSource: function () {
                    return r[this.uid] ? r[this.uid] : null;
                },
                detach: function (e) {
                    if (this.ruid && (this.getRuntime().exec.call(this, 'Blob', 'destroy'), this.disconnectRuntime(), this.ruid = null), e = e || '', 'data:' == e.substr(0, 5)) {
                        var n = e.indexOf(';base64,');
                        this.type = e.substring(5, n), e = t.atob(e.substring(n + 8));
                    }
                    this.size = e.length, r[this.uid] = e;
                },
                isDetached: function () {
                    return !this.ruid && 'string' === e.typeOf(r[this.uid]);
                },
                destroy: function () {
                    this.detach(), delete r[this.uid];
                }
            }), a.data ? this.detach(a.data) : r[this.uid] = a;
        }
        var r = {};
        return i;
    }), i(E, [
        u,
        d,
        y
    ], function (e, t, n) {
        function i(i, r) {
            r || (r = {}), n.apply(this, arguments), this.type || (this.type = t.getFileMime(r.name));
            var o;
            if (r.name)
                o = r.name.replace(/\\/g, '/'), o = o.substr(o.lastIndexOf('/') + 1);
            else if (this.type) {
                var a = this.type.split('/')[0];
                o = e.guid(('' !== a ? a : 'file') + '_'), t.extensions[this.type] && (o += '.' + t.extensions[this.type][0]);
            }
            e.extend(this, {
                name: o || e.guid('file_'),
                relativePath: '',
                lastModifiedDate: r.lastModifiedDate || new Date().toLocaleString()
            });
        }
        return i.prototype = n.prototype, i;
    }), i(_, [
        l,
        h,
        f,
        u,
        c,
        E,
        g,
        p,
        d
    ], function (e, t, n, i, r, o, a, s, u) {
        function c(n) {
            var r = this, o;
            'string' == typeof n && (n = { drop_zone: n }), o = {
                accept: [{
                        title: e.translate('All Files'),
                        extensions: '*'
                    }],
                required_caps: { drag_and_drop: !0 }
            }, n = 'object' == typeof n ? i.extend({}, o, n) : o, n.container = t.get(n.drop_zone) || document.body, 'static' === t.getStyle(n.container, 'position') && (n.container.style.position = 'relative'), 'string' == typeof n.accept && (n.accept = u.mimes2extList(n.accept)), a.call(r), i.extend(r, {
                uid: i.guid('uid_'),
                ruid: null,
                files: null,
                init: function () {
                    r.bind('RuntimeInit', function (e, t) {
                        r.ruid = t.uid, t.exec.call(r, 'FileDrop', 'init', n), r.dispatchEvent('ready');
                    }), r.connectRuntime(n);
                },
                destroy: function () {
                    var e = this.getRuntime();
                    e && (e.exec.call(this, 'FileDrop', 'destroy'), this.disconnectRuntime()), this.files = null, this.unbindAll();
                }
            }), this.handleEventProps(l);
        }
        var l = [
            'ready',
            'dragenter',
            'dragleave',
            'drop',
            'error'
        ];
        return c.prototype = s.instance, c;
    }), i(b, [
        u,
        w,
        f,
        p,
        y,
        g
    ], function (e, t, n, i, r, o) {
        function a() {
            function i(e, i) {
                var o = this;
                if (this.trigger('loadstart'), this.readyState === a.LOADING)
                    return this.trigger('error', new n.DOMException(n.DOMException.INVALID_STATE_ERR)), void this.trigger('loadend');
                if (!(i instanceof r))
                    return this.trigger('error', new n.DOMException(n.DOMException.NOT_FOUND_ERR)), void this.trigger('loadend');
                if (this.result = null, this.readyState = a.LOADING, i.isDetached()) {
                    var s = i.getSource();
                    switch (e) {
                    case 'readAsText':
                    case 'readAsBinaryString':
                        this.result = s;
                        break;
                    case 'readAsDataURL':
                        this.result = 'data:' + i.type + ';base64,' + t.btoa(s);
                    }
                    this.readyState = a.DONE, this.trigger('load'), this.trigger('loadend');
                } else
                    this.connectRuntime(i.ruid), this.exec('FileReader', 'read', e, i);
            }
            o.call(this), e.extend(this, {
                uid: e.guid('uid_'),
                readyState: a.EMPTY,
                result: null,
                error: null,
                readAsBinaryString: function (e) {
                    i.call(this, 'readAsBinaryString', e);
                },
                readAsDataURL: function (e) {
                    i.call(this, 'readAsDataURL', e);
                },
                readAsText: function (e) {
                    i.call(this, 'readAsText', e);
                },
                abort: function () {
                    this.result = null, -1 === e.inArray(this.readyState, [
                        a.EMPTY,
                        a.DONE
                    ]) && (this.readyState === a.LOADING && (this.readyState = a.DONE), this.exec('FileReader', 'abort'), this.trigger('abort'), this.trigger('loadend'));
                },
                destroy: function () {
                    this.abort(), this.exec('FileReader', 'destroy'), this.disconnectRuntime(), this.unbindAll();
                }
            }), this.handleEventProps(s), this.bind('Error', function (e, t) {
                this.readyState = a.DONE, this.error = t;
            }, 999), this.bind('Load', function (e) {
                this.readyState = a.DONE;
            }, 999);
        }
        var s = [
            'loadstart',
            'progress',
            'load',
            'abort',
            'error',
            'loadend'
        ];
        return a.EMPTY = 0, a.LOADING = 1, a.DONE = 2, a.prototype = i.instance, a;
    }), i(x, [], function () {
        var e = function (t, n) {
                for (var i = [
                            'source',
                            'scheme',
                            'authority',
                            'userInfo',
                            'user',
                            'pass',
                            'host',
                            'port',
                            'relative',
                            'path',
                            'directory',
                            'file',
                            'query',
                            'fragment'
                        ], r = i.length, o = {
                            http: 80,
                            https: 443
                        }, a = {}, s = /^(?:([^:\/?#]+):)?(?:\/\/()(?:(?:()(?:([^:@\/]*):?([^:@\/]*))?@)?([^:\/?#]*)(?::(\d*))?))?()(?:(()(?:(?:[^?#\/]*\/)*)()(?:[^?#]*))(?:\\?([^#]*))?(?:#(.*))?)/, u = s.exec(t || ''); r--;)
                    u[r] && (a[i[r]] = u[r]);
                if (!a.scheme) {
                    n && 'string' != typeof n || (n = e(n || document.location.href)), a.scheme = n.scheme, a.host = n.host, a.port = n.port;
                    var c = '';
                    /^[^\/]/.test(a.path) && (c = n.path, c = /\/[^\/]*\.[^\/]*$/.test(c) ? c.replace(/\/[^\/]+$/, '/') : c.replace(/\/?$/, '/')), a.path = c + (a.path || '');
                }
                return a.port || (a.port = o[a.scheme] || 80), a.port = parseInt(a.port, 10), a.path || (a.path = '/'), delete a.source, a;
            }, t = function (t) {
                var n = {
                        http: 80,
                        https: 443
                    }, i = 'object' == typeof t ? t : e(t);
                return i.scheme + '://' + i.host + (i.port !== n[i.scheme] ? ':' + i.port : '') + i.path + (i.query ? i.query : '');
            }, n = function (t) {
                function n(e) {
                    return [
                        e.scheme,
                        e.host,
                        e.port
                    ].join('/');
                }
                return 'string' == typeof t && (t = e(t)), n(e()) === n(t);
            };
        return {
            parseUrl: e,
            resolveUrl: t,
            hasSameOrigin: n
        };
    }), i(R, [
        u,
        g,
        p
    ], function (e, t, n) {
        function i() {
            this.uid = e.guid('uid_'), t.call(this), this.destroy = function () {
                this.disconnectRuntime(), this.unbindAll();
            };
        }
        return i.prototype = n.instance, i;
    }), i(A, [
        u,
        g,
        w
    ], function (e, t, n) {
        return function () {
            function i(e, t) {
                if (!t.isDetached()) {
                    var i = this.connectRuntime(t.ruid).exec.call(this, 'FileReaderSync', 'read', e, t);
                    return this.disconnectRuntime(), i;
                }
                var r = t.getSource();
                switch (e) {
                case 'readAsBinaryString':
                    return r;
                case 'readAsDataURL':
                    return 'data:' + t.type + ';base64,' + n.btoa(r);
                case 'readAsText':
                    for (var o = '', a = 0, s = r.length; s > a; a++)
                        o += String.fromCharCode(r[a]);
                    return o;
                }
            }
            t.call(this), e.extend(this, {
                uid: e.guid('uid_'),
                readAsBinaryString: function (e) {
                    return i.call(this, 'readAsBinaryString', e);
                },
                readAsDataURL: function (e) {
                    return i.call(this, 'readAsDataURL', e);
                },
                readAsText: function (e) {
                    return i.call(this, 'readAsText', e);
                }
            });
        };
    }), i(I, [
        f,
        u,
        y
    ], function (e, t, n) {
        function i() {
            var e, i = [];
            t.extend(this, {
                append: function (r, o) {
                    var a = this, s = t.typeOf(o);
                    o instanceof n ? e = {
                        name: r,
                        value: o
                    } : 'array' === s ? (r += '[]', t.each(o, function (e) {
                        a.append(r, e);
                    })) : 'object' === s ? t.each(o, function (e, t) {
                        a.append(r + '[' + t + ']', e);
                    }) : 'null' === s || 'undefined' === s || 'number' === s && isNaN(o) ? a.append(r, 'false') : i.push({
                        name: r,
                        value: o.toString()
                    });
                },
                hasBlob: function () {
                    return !!this.getBlob();
                },
                getBlob: function () {
                    return e && e.value || null;
                },
                getBlobName: function () {
                    return e && e.name || null;
                },
                each: function (n) {
                    t.each(i, function (e) {
                        n(e.value, e.name);
                    }), e && n(e.value, e.name);
                },
                destroy: function () {
                    e = null, i = [];
                }
            });
        }
        return i;
    }), i(T, [
        u,
        f,
        p,
        w,
        x,
        m,
        R,
        y,
        A,
        I,
        c,
        d
    ], function (e, t, n, i, r, o, a, s, u, c, l, d) {
        function h() {
            this.uid = e.guid('uid_');
        }
        function f() {
            function n(e, t) {
                return w.hasOwnProperty(e) ? 1 === arguments.length ? l.can('define_property') ? w[e] : v[e] : void (l.can('define_property') ? w[e] = t : v[e] = t) : void 0;
            }
            function u(t) {
                function i() {
                    B && (B.destroy(), B = null), s.dispatchEvent('loadend'), s = null;
                }
                function r(r) {
                    B.bind('LoadStart', function (e) {
                        n('readyState', f.LOADING), s.dispatchEvent('readystatechange'), s.dispatchEvent(e), O && s.upload.dispatchEvent(e);
                    }), B.bind('Progress', function (e) {
                        n('readyState') !== f.LOADING && (n('readyState', f.LOADING), s.dispatchEvent('readystatechange')), s.dispatchEvent(e);
                    }), B.bind('UploadProgress', function (e) {
                        O && s.upload.dispatchEvent({
                            type: 'progress',
                            lengthComputable: !1,
                            total: e.total,
                            loaded: e.loaded
                        });
                    }), B.bind('Load', function (t) {
                        n('readyState', f.DONE), n('status', Number(r.exec.call(B, 'XMLHttpRequest', 'getStatus') || 0)), n('statusText', p[n('status')] || ''), n('response', r.exec.call(B, 'XMLHttpRequest', 'getResponse', n('responseType'))), ~e.inArray(n('responseType'), [
                            'text',
                            ''
                        ]) ? n('responseText', n('response')) : 'document' === n('responseType') && n('responseXML', n('response')), k = r.exec.call(B, 'XMLHttpRequest', 'getAllResponseHeaders'), s.dispatchEvent('readystatechange'), n('status') > 0 ? (O && s.upload.dispatchEvent(t), s.dispatchEvent(t)) : (N = !0, s.dispatchEvent('error')), i();
                    }), B.bind('Abort', function (e) {
                        s.dispatchEvent(e), i();
                    }), B.bind('Error', function (e) {
                        N = !0, n('readyState', f.DONE), s.dispatchEvent('readystatechange'), D = !0, s.dispatchEvent(e), i();
                    }), r.exec.call(B, 'XMLHttpRequest', 'send', {
                        url: E,
                        method: _,
                        async: y,
                        user: x,
                        password: R,
                        headers: b,
                        mimeType: I,
                        encoding: A,
                        responseType: s.responseType,
                        withCredentials: s.withCredentials,
                        options: H
                    }, t);
                }
                var s = this;
                C = new Date().getTime(), B = new a(), 'string' == typeof H.required_caps && (H.required_caps = o.parseCaps(H.required_caps)), H.required_caps = e.extend({}, H.required_caps, { return_response_type: s.responseType }), t instanceof c && (H.required_caps.send_multipart = !0), e.isEmptyObj(b) || (H.required_caps.send_custom_headers = !0), L || (H.required_caps.do_cors = !0), H.ruid ? r(B.connectRuntime(H)) : (B.bind('RuntimeInit', function (e, t) {
                    r(t);
                }), B.bind('RuntimeError', function (e, t) {
                    s.dispatchEvent('RuntimeError', t);
                }), B.connectRuntime(H));
            }
            function g() {
                n('responseText', ''), n('responseXML', null), n('response', null), n('status', 0), n('statusText', ''), C = M = null;
            }
            var v = this, w = {
                    timeout: 0,
                    readyState: f.UNSENT,
                    withCredentials: !1,
                    status: 0,
                    statusText: '',
                    responseType: '',
                    responseXML: null,
                    responseText: null,
                    response: null
                }, y = !0, E, _, b = {}, x, R, A = null, I = null, T = !1, S = !1, O = !1, D = !1, N = !1, L = !1, C, M, F = null, P = null, H = {}, B, k = '', U;
            e.extend(this, w, {
                uid: e.guid('uid_'),
                upload: new h(),
                open: function (o, a, s, u, c) {
                    var l;
                    if (!o || !a)
                        throw new t.DOMException(t.DOMException.SYNTAX_ERR);
                    if (/[\u0100-\uffff]/.test(o) || i.utf8_encode(o) !== o)
                        throw new t.DOMException(t.DOMException.SYNTAX_ERR);
                    if (~e.inArray(o.toUpperCase(), [
                            'CONNECT',
                            'DELETE',
                            'GET',
                            'HEAD',
                            'OPTIONS',
                            'POST',
                            'PUT',
                            'TRACE',
                            'TRACK'
                        ]) && (_ = o.toUpperCase()), ~e.inArray(_, [
                            'CONNECT',
                            'TRACE',
                            'TRACK'
                        ]))
                        throw new t.DOMException(t.DOMException.SECURITY_ERR);
                    if (a = i.utf8_encode(a), l = r.parseUrl(a), L = r.hasSameOrigin(l), E = r.resolveUrl(a), (u || c) && !L)
                        throw new t.DOMException(t.DOMException.INVALID_ACCESS_ERR);
                    if (x = u || l.user, R = c || l.pass, y = s || !0, y === !1 && (n('timeout') || n('withCredentials') || '' !== n('responseType')))
                        throw new t.DOMException(t.DOMException.INVALID_ACCESS_ERR);
                    T = !y, S = !1, b = {}, g.call(this), n('readyState', f.OPENED), this.dispatchEvent('readystatechange');
                },
                setRequestHeader: function (r, o) {
                    var a = [
                        'accept-charset',
                        'accept-encoding',
                        'access-control-request-headers',
                        'access-control-request-method',
                        'connection',
                        'content-length',
                        'cookie',
                        'cookie2',
                        'content-transfer-encoding',
                        'date',
                        'expect',
                        'host',
                        'keep-alive',
                        'origin',
                        'referer',
                        'te',
                        'trailer',
                        'transfer-encoding',
                        'upgrade',
                        'user-agent',
                        'via'
                    ];
                    if (n('readyState') !== f.OPENED || S)
                        throw new t.DOMException(t.DOMException.INVALID_STATE_ERR);
                    if (/[\u0100-\uffff]/.test(r) || i.utf8_encode(r) !== r)
                        throw new t.DOMException(t.DOMException.SYNTAX_ERR);
                    return r = e.trim(r).toLowerCase(), ~e.inArray(r, a) || /^(proxy\-|sec\-)/.test(r) ? !1 : (b[r] ? b[r] += ', ' + o : b[r] = o, !0);
                },
                getAllResponseHeaders: function () {
                    return k || '';
                },
                getResponseHeader: function (t) {
                    return t = t.toLowerCase(), N || ~e.inArray(t, [
                        'set-cookie',
                        'set-cookie2'
                    ]) ? null : k && '' !== k && (U || (U = {}, e.each(k.split(/\r\n/), function (t) {
                        var n = t.split(/:\s+/);
                        2 === n.length && (n[0] = e.trim(n[0]), U[n[0].toLowerCase()] = {
                            header: n[0],
                            value: e.trim(n[1])
                        });
                    })), U.hasOwnProperty(t)) ? U[t].header + ': ' + U[t].value : null;
                },
                overrideMimeType: function (i) {
                    var r, o;
                    if (~e.inArray(n('readyState'), [
                            f.LOADING,
                            f.DONE
                        ]))
                        throw new t.DOMException(t.DOMException.INVALID_STATE_ERR);
                    if (i = e.trim(i.toLowerCase()), /;/.test(i) && (r = i.match(/^([^;]+)(?:;\scharset\=)?(.*)$/)) && (i = r[1], r[2] && (o = r[2])), !d.mimes[i])
                        throw new t.DOMException(t.DOMException.SYNTAX_ERR);
                    F = i, P = o;
                },
                send: function (n, r) {
                    if (H = 'string' === e.typeOf(r) ? { ruid: r } : r ? r : {}, this.readyState !== f.OPENED || S)
                        throw new t.DOMException(t.DOMException.INVALID_STATE_ERR);
                    if (n instanceof s)
                        H.ruid = n.ruid, I = n.type || 'application/octet-stream';
                    else if (n instanceof c) {
                        if (n.hasBlob()) {
                            var o = n.getBlob();
                            H.ruid = o.ruid, I = o.type || 'application/octet-stream';
                        }
                    } else
                        'string' == typeof n && (A = 'UTF-8', I = 'text/plain;charset=UTF-8', n = i.utf8_encode(n));
                    this.withCredentials || (this.withCredentials = H.required_caps && H.required_caps.send_browser_cookies && !L), O = !T && this.upload.hasEventListener(), N = !1, D = !n, T || (S = !0), u.call(this, n);
                },
                abort: function () {
                    if (N = !0, T = !1, ~e.inArray(n('readyState'), [
                            f.UNSENT,
                            f.OPENED,
                            f.DONE
                        ]))
                        n('readyState', f.UNSENT);
                    else {
                        if (n('readyState', f.DONE), S = !1, !B)
                            throw new t.DOMException(t.DOMException.INVALID_STATE_ERR);
                        B.getRuntime().exec.call(B, 'XMLHttpRequest', 'abort', D), D = !0;
                    }
                },
                destroy: function () {
                    B && ('function' === e.typeOf(B.destroy) && B.destroy(), B = null), this.unbindAll(), this.upload && (this.upload.unbindAll(), this.upload = null);
                }
            }), this.handleEventProps(m.concat(['readystatechange'])), this.upload.handleEventProps(m);
        }
        var p = {
            100: 'Continue',
            101: 'Switching Protocols',
            102: 'Processing',
            200: 'OK',
            201: 'Created',
            202: 'Accepted',
            203: 'Non-Authoritative Information',
            204: 'No Content',
            205: 'Reset Content',
            206: 'Partial Content',
            207: 'Multi-Status',
            226: 'IM Used',
            300: 'Multiple Choices',
            301: 'Moved Permanently',
            302: 'Found',
            303: 'See Other',
            304: 'Not Modified',
            305: 'Use Proxy',
            306: 'Reserved',
            307: 'Temporary Redirect',
            400: 'Bad Request',
            401: 'Unauthorized',
            402: 'Payment Required',
            403: 'Forbidden',
            404: 'Not Found',
            405: 'Method Not Allowed',
            406: 'Not Acceptable',
            407: 'Proxy Authentication Required',
            408: 'Request Timeout',
            409: 'Conflict',
            410: 'Gone',
            411: 'Length Required',
            412: 'Precondition Failed',
            413: 'Request Entity Too Large',
            414: 'Request-URI Too Long',
            415: 'Unsupported Media Type',
            416: 'Requested Range Not Satisfiable',
            417: 'Expectation Failed',
            422: 'Unprocessable Entity',
            423: 'Locked',
            424: 'Failed Dependency',
            426: 'Upgrade Required',
            500: 'Internal Server Error',
            501: 'Not Implemented',
            502: 'Bad Gateway',
            503: 'Service Unavailable',
            504: 'Gateway Timeout',
            505: 'HTTP Version Not Supported',
            506: 'Variant Also Negotiates',
            507: 'Insufficient Storage',
            510: 'Not Extended'
        };
        h.prototype = n.instance;
        var m = [
                'loadstart',
                'progress',
                'abort',
                'error',
                'load',
                'timeout',
                'loadend'
            ], g = 1, v = 2;
        return f.UNSENT = 0, f.OPENED = 1, f.HEADERS_RECEIVED = 2, f.LOADING = 3, f.DONE = 4, f.prototype = n.instance, f;
    }), i(S, [
        u,
        w,
        g,
        p
    ], function (e, t, n, i) {
        function r() {
            function i() {
                l = d = 0, c = this.result = null;
            }
            function o(t, n) {
                var i = this;
                u = n, i.bind('TransportingProgress', function (t) {
                    d = t.loaded, l > d && -1 === e.inArray(i.state, [
                        r.IDLE,
                        r.DONE
                    ]) && a.call(i);
                }, 999), i.bind('TransportingComplete', function () {
                    d = l, i.state = r.DONE, c = null, i.result = u.exec.call(i, 'Transporter', 'getAsBlob', t || '');
                }, 999), i.state = r.BUSY, i.trigger('TransportingStarted'), a.call(i);
            }
            function a() {
                var e = this, n, i = l - d;
                h > i && (h = i), n = t.btoa(c.substr(d, h)), u.exec.call(e, 'Transporter', 'receive', n, l);
            }
            var s, u, c, l, d, h;
            n.call(this), e.extend(this, {
                uid: e.guid('uid_'),
                state: r.IDLE,
                result: null,
                transport: function (t, n, r) {
                    var a = this;
                    if (r = e.extend({ chunk_size: 204798 }, r), (s = r.chunk_size % 3) && (r.chunk_size += 3 - s), h = r.chunk_size, i.call(this), c = t, l = t.length, 'string' === e.typeOf(r) || r.ruid)
                        o.call(a, n, this.connectRuntime(r));
                    else {
                        var u = function (e, t) {
                            a.unbind('RuntimeInit', u), o.call(a, n, t);
                        };
                        this.bind('RuntimeInit', u), this.connectRuntime(r);
                    }
                },
                abort: function () {
                    var e = this;
                    e.state = r.IDLE, u && (u.exec.call(e, 'Transporter', 'clear'), e.trigger('TransportingAborted')), i.call(e);
                },
                destroy: function () {
                    this.unbindAll(), u = null, this.disconnectRuntime(), i.call(this);
                }
            });
        }
        return r.IDLE = 0, r.BUSY = 1, r.DONE = 2, r.prototype = i.instance, r;
    }), i(O, [
        u,
        h,
        f,
        A,
        T,
        m,
        g,
        S,
        c,
        p,
        y,
        E,
        w
    ], function (e, t, n, i, r, o, a, s, u, c, l, d, h) {
        function f() {
            function i(e) {
                e || (e = this.exec('Image', 'getInfo')), this.size = e.size, this.width = e.width, this.height = e.height, this.type = e.type, this.meta = e.meta, '' === this.name && (this.name = e.name);
            }
            function c(t) {
                var i = e.typeOf(t);
                try {
                    if (t instanceof f) {
                        if (!t.size)
                            throw new n.DOMException(n.DOMException.INVALID_STATE_ERR);
                        m.apply(this, arguments);
                    } else if (t instanceof l) {
                        if (!~e.inArray(t.type, [
                                'image/jpeg',
                                'image/png'
                            ]))
                            throw new n.ImageError(n.ImageError.WRONG_FORMAT);
                        g.apply(this, arguments);
                    } else if (-1 !== e.inArray(i, [
                            'blob',
                            'file'
                        ]))
                        c.call(this, new d(null, t), arguments[1]);
                    else if ('string' === i)
                        'data:' === t.substr(0, 5) ? c.call(this, new l(null, { data: t }), arguments[1]) : v.apply(this, arguments);
                    else {
                        if ('node' !== i || 'img' !== t.nodeName.toLowerCase())
                            throw new n.DOMException(n.DOMException.TYPE_MISMATCH_ERR);
                        c.call(this, t.src, arguments[1]);
                    }
                } catch (r) {
                    this.trigger('error', r.code);
                }
            }
            function m(t, n) {
                var i = this.connectRuntime(t.ruid);
                this.ruid = i.uid, i.exec.call(this, 'Image', 'loadFromImage', t, 'undefined' === e.typeOf(n) ? !0 : n);
            }
            function g(t, n) {
                function i(e) {
                    r.ruid = e.uid, e.exec.call(r, 'Image', 'loadFromBlob', t);
                }
                var r = this;
                r.name = t.name || '', t.isDetached() ? (this.bind('RuntimeInit', function (e, t) {
                    i(t);
                }), n && 'string' == typeof n.required_caps && (n.required_caps = o.parseCaps(n.required_caps)), this.connectRuntime(e.extend({
                    required_caps: {
                        access_image_binary: !0,
                        resize_image: !0
                    }
                }, n))) : i(this.connectRuntime(t.ruid));
            }
            function v(e, t) {
                var n = this, i;
                i = new r(), i.open('get', e), i.responseType = 'blob', i.onprogress = function (e) {
                    n.trigger(e);
                }, i.onload = function () {
                    g.call(n, i.response, !0);
                }, i.onerror = function (e) {
                    n.trigger(e);
                }, i.onloadend = function () {
                    i.destroy();
                }, i.bind('RuntimeError', function (e, t) {
                    n.trigger('RuntimeError', t);
                }), i.send(null, t);
            }
            a.call(this), e.extend(this, {
                uid: e.guid('uid_'),
                ruid: null,
                name: '',
                size: 0,
                width: 0,
                height: 0,
                type: '',
                meta: {},
                clone: function () {
                    this.load.apply(this, arguments);
                },
                load: function () {
                    c.apply(this, arguments);
                },
                downsize: function (t) {
                    var i = {
                        width: this.width,
                        height: this.height,
                        type: this.type || 'image/jpeg',
                        quality: 90,
                        crop: !1,
                        preserveHeaders: !0,
                        resample: !1
                    };
                    t = 'object' == typeof t ? e.extend(i, t) : e.extend(i, {
                        width: arguments[0],
                        height: arguments[1],
                        crop: arguments[2],
                        preserveHeaders: arguments[3]
                    });
                    try {
                        if (!this.size)
                            throw new n.DOMException(n.DOMException.INVALID_STATE_ERR);
                        if (this.width > f.MAX_RESIZE_WIDTH || this.height > f.MAX_RESIZE_HEIGHT)
                            throw new n.ImageError(n.ImageError.MAX_RESOLUTION_ERR);
                        this.exec('Image', 'downsize', t.width, t.height, t.crop, t.preserveHeaders);
                    } catch (r) {
                        this.trigger('error', r.code);
                    }
                },
                crop: function (e, t, n) {
                    this.downsize(e, t, !0, n);
                },
                getAsCanvas: function () {
                    if (!u.can('create_canvas'))
                        throw new n.RuntimeError(n.RuntimeError.NOT_SUPPORTED_ERR);
                    var e = this.connectRuntime(this.ruid);
                    return e.exec.call(this, 'Image', 'getAsCanvas');
                },
                getAsBlob: function (e, t) {
                    if (!this.size)
                        throw new n.DOMException(n.DOMException.INVALID_STATE_ERR);
                    return this.exec('Image', 'getAsBlob', e || 'image/jpeg', t || 90);
                },
                getAsDataURL: function (e, t) {
                    if (!this.size)
                        throw new n.DOMException(n.DOMException.INVALID_STATE_ERR);
                    return this.exec('Image', 'getAsDataURL', e || 'image/jpeg', t || 90);
                },
                getAsBinaryString: function (e, t) {
                    var n = this.getAsDataURL(e, t);
                    return h.atob(n.substring(n.indexOf('base64,') + 7));
                },
                embed: function (i, r) {
                    function o(t, r) {
                        var o = this;
                        if (u.can('create_canvas')) {
                            var l = o.getAsCanvas();
                            if (l)
                                return i.appendChild(l), l = null, o.destroy(), void a.trigger('embedded');
                        }
                        var d = o.getAsDataURL(t, r);
                        if (!d)
                            throw new n.ImageError(n.ImageError.WRONG_FORMAT);
                        if (u.can('use_data_uri_of', d.length))
                            i.innerHTML = '<img src="' + d + '" width="' + o.width + '" height="' + o.height + '" />', o.destroy(), a.trigger('embedded');
                        else {
                            var f = new s();
                            f.bind('TransportingComplete', function () {
                                c = a.connectRuntime(this.result.ruid), a.bind('Embedded', function () {
                                    e.extend(c.getShimContainer().style, {
                                        top: '0px',
                                        left: '0px',
                                        width: o.width + 'px',
                                        height: o.height + 'px'
                                    }), c = null;
                                }, 999), c.exec.call(a, 'ImageView', 'display', this.result.uid, width, height), o.destroy();
                            }), f.transport(h.atob(d.substring(d.indexOf('base64,') + 7)), t, {
                                required_caps: { display_media: !0 },
                                runtime_order: 'flash,silverlight',
                                container: i
                            });
                        }
                    }
                    var a = this, c;
                    r = e.extend({
                        width: this.width,
                        height: this.height,
                        type: this.type || 'image/jpeg',
                        quality: 90
                    }, r || {});
                    try {
                        if (!(i = t.get(i)))
                            throw new n.DOMException(n.DOMException.INVALID_NODE_TYPE_ERR);
                        if (!this.size)
                            throw new n.DOMException(n.DOMException.INVALID_STATE_ERR);
                        this.width > f.MAX_RESIZE_WIDTH || this.height > f.MAX_RESIZE_HEIGHT;
                        var l = new f();
                        return l.bind('Resize', function () {
                            o.call(this, r.type, r.quality);
                        }), l.bind('Load', function () {
                            l.downsize(r);
                        }), this.meta.thumb && this.meta.thumb.width >= r.width && this.meta.thumb.height >= r.height ? l.load(this.meta.thumb.data) : l.clone(this, !1), l;
                    } catch (d) {
                        this.trigger('error', d.code);
                    }
                },
                destroy: function () {
                    this.ruid && (this.getRuntime().exec.call(this, 'Image', 'destroy'), this.disconnectRuntime()), this.unbindAll();
                }
            }), this.handleEventProps(p), this.bind('Load Resize', function () {
                i.call(this);
            }, 999);
        }
        var p = [
            'progress',
            'load',
            'error',
            'resize',
            'embedded'
        ];
        return f.MAX_RESIZE_WIDTH = 8192, f.MAX_RESIZE_HEIGHT = 8192, f.prototype = c.instance, f;
    }), i(D, [
        u,
        f,
        m,
        c
    ], function (e, t, n, i) {
        function r(t) {
            var r = this, s = n.capTest, u = n.capTrue, c = e.extend({
                    access_binary: s(window.FileReader || window.File && window.File.getAsDataURL),
                    access_image_binary: function () {
                        return r.can('access_binary') && !!a.Image;
                    },
                    display_media: s(i.can('create_canvas') || i.can('use_data_uri_over32kb')),
                    do_cors: s(window.XMLHttpRequest && 'withCredentials' in new XMLHttpRequest()),
                    drag_and_drop: s(function () {
                        var e = document.createElement('div');
                        return ('draggable' in e || 'ondragstart' in e && 'ondrop' in e) && ('IE' !== i.browser || i.verComp(i.version, 9, '>'));
                    }()),
                    filter_by_extension: s(function () {
                        return 'Chrome' === i.browser && i.verComp(i.version, 28, '>=') || 'IE' === i.browser && i.verComp(i.version, 10, '>=') || 'Safari' === i.browser && i.verComp(i.version, 7, '>=');
                    }()),
                    return_response_headers: u,
                    return_response_type: function (e) {
                        return 'json' === e && window.JSON ? !0 : i.can('return_response_type', e);
                    },
                    return_status_code: u,
                    report_upload_progress: s(window.XMLHttpRequest && new XMLHttpRequest().upload),
                    resize_image: function () {
                        return r.can('access_binary') && i.can('create_canvas');
                    },
                    select_file: function () {
                        return i.can('use_fileinput') && window.File;
                    },
                    select_folder: function () {
                        return r.can('select_file') && 'Chrome' === i.browser && i.verComp(i.version, 21, '>=');
                    },
                    select_multiple: function () {
                        return !(!r.can('select_file') || 'Safari' === i.browser && 'Windows' === i.os || 'iOS' === i.os && i.verComp(i.osVersion, '7.0.0', '>') && i.verComp(i.osVersion, '8.0.0', '<'));
                    },
                    send_binary_string: s(window.XMLHttpRequest && (new XMLHttpRequest().sendAsBinary || window.Uint8Array && window.ArrayBuffer)),
                    send_custom_headers: s(window.XMLHttpRequest),
                    send_multipart: function () {
                        return !!(window.XMLHttpRequest && new XMLHttpRequest().upload && window.FormData) || r.can('send_binary_string');
                    },
                    slice_blob: s(window.File && (File.prototype.mozSlice || File.prototype.webkitSlice || File.prototype.slice)),
                    stream_upload: function () {
                        return r.can('slice_blob') && r.can('send_multipart');
                    },
                    summon_file_dialog: function () {
                        return r.can('select_file') && ('Firefox' === i.browser && i.verComp(i.version, 4, '>=') || 'Opera' === i.browser && i.verComp(i.version, 12, '>=') || 'IE' === i.browser && i.verComp(i.version, 10, '>=') || !!~e.inArray(i.browser, [
                            'Chrome',
                            'Safari'
                        ]));
                    },
                    upload_filesize: u
                }, arguments[2]);
            n.call(this, t, arguments[1] || o, c), e.extend(this, {
                init: function () {
                    this.trigger('Init');
                },
                destroy: function (e) {
                    return function () {
                        e.call(r), e = r = null;
                    };
                }(this.destroy)
            }), e.extend(this.getShim(), a);
        }
        var o = 'html5', a = {};
        return n.addConstructor(o, r), a;
    }), i(N, [u], function (e) {
        function t() {
            this.returnValue = !1;
        }
        function n() {
            this.cancelBubble = !0;
        }
        var i = {}, r = 'moxie_' + e.guid(), o = function (o, a, s, u) {
                var c, l;
                a = a.toLowerCase(), o.addEventListener ? (c = s, o.addEventListener(a, c, !1)) : o.attachEvent && (c = function () {
                    var e = window.event;
                    e.target || (e.target = e.srcElement), e.preventDefault = t, e.stopPropagation = n, s(e);
                }, o.attachEvent('on' + a, c)), o[r] || (o[r] = e.guid()), i.hasOwnProperty(o[r]) || (i[o[r]] = {}), l = i[o[r]], l.hasOwnProperty(a) || (l[a] = []), l[a].push({
                    func: c,
                    orig: s,
                    key: u
                });
            }, a = function (t, n, o) {
                var a, s;
                if (n = n.toLowerCase(), t[r] && i[t[r]] && i[t[r]][n]) {
                    a = i[t[r]][n];
                    for (var u = a.length - 1; u >= 0 && (a[u].orig !== o && a[u].key !== o || (t.removeEventListener ? t.removeEventListener(n, a[u].func, !1) : t.detachEvent && t.detachEvent('on' + n, a[u].func), a[u].orig = null, a[u].func = null, a.splice(u, 1), o === s)); u--);
                    if (a.length || delete i[t[r]][n], e.isEmptyObj(i[t[r]])) {
                        delete i[t[r]];
                        try {
                            delete t[r];
                        } catch (c) {
                            t[r] = s;
                        }
                    }
                }
            }, s = function (t, n) {
                t && t[r] && e.each(i[t[r]], function (e, i) {
                    a(t, i, n);
                });
            };
        return {
            addEvent: o,
            removeEvent: a,
            removeAllEvents: s
        };
    }), i(L, [
        D,
        E,
        u,
        h,
        N,
        d,
        c
    ], function (e, t, n, i, r, o, a) {
        function s() {
            var e;
            n.extend(this, {
                init: function (s) {
                    var u = this, c = u.getRuntime(), l, d, h, f, p, m;
                    e = s, h = e.accept.mimes || o.extList2mimes(e.accept, c.can('filter_by_extension')), d = c.getShimContainer(), d.innerHTML = '<input id="' + c.uid + '" type="file" style="font-size:999px;opacity:0;"' + (e.multiple && c.can('select_multiple') ? 'multiple' : '') + (e.directory && c.can('select_folder') ? 'webkitdirectory directory' : '') + (h ? ' accept="' + h.join(',') + '"' : '') + ' />', l = i.get(c.uid), n.extend(l.style, {
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%'
                    }), f = i.get(e.browse_button), c.can('summon_file_dialog') && ('static' === i.getStyle(f, 'position') && (f.style.position = 'relative'), p = parseInt(i.getStyle(f, 'z-index'), 10) || 1, f.style.zIndex = p, d.style.zIndex = p - 1, r.addEvent(f, 'click', function (e) {
                        var t = i.get(c.uid);
                        t && !t.disabled && t.click(), e.preventDefault();
                    }, u.uid)), m = c.can('summon_file_dialog') ? f : d, r.addEvent(m, 'mouseover', function () {
                        u.trigger('mouseenter');
                    }, u.uid), r.addEvent(m, 'mouseout', function () {
                        u.trigger('mouseleave');
                    }, u.uid), r.addEvent(m, 'mousedown', function () {
                        u.trigger('mousedown');
                    }, u.uid), r.addEvent(i.get(e.container), 'mouseup', function () {
                        u.trigger('mouseup');
                    }, u.uid), l.onchange = function g(i) {
                        if (u.files = [], n.each(this.files, function (n) {
                                var i = '';
                                return e.directory && '.' == n.name ? !0 : (n.webkitRelativePath && (i = '/' + n.webkitRelativePath.replace(/^\//, '')), n = new t(c.uid, n), n.relativePath = i, void u.files.push(n));
                            }), 'IE' !== a.browser && 'IEMobile' !== a.browser)
                            this.value = '';
                        else {
                            var r = this.cloneNode(!0);
                            this.parentNode.replaceChild(r, this), r.onchange = g;
                        }
                        u.files.length && u.trigger('change');
                    }, u.trigger({
                        type: 'ready',
                        async: !0
                    }), d = null;
                },
                disable: function (e) {
                    var t = this.getRuntime(), n;
                    (n = i.get(t.uid)) && (n.disabled = !!e);
                },
                destroy: function () {
                    var t = this.getRuntime(), n = t.getShim(), o = t.getShimContainer();
                    r.removeAllEvents(o, this.uid), r.removeAllEvents(e && i.get(e.container), this.uid), r.removeAllEvents(e && i.get(e.browse_button), this.uid), o && (o.innerHTML = ''), n.removeInstance(this.uid), e = o = n = null;
                }
            });
        }
        return e.FileInput = s;
    }), i(C, [
        D,
        y
    ], function (e, t) {
        function n() {
            function e(e, t, n) {
                var i;
                if (!window.File.prototype.slice)
                    return (i = window.File.prototype.webkitSlice || window.File.prototype.mozSlice) ? i.call(e, t, n) : null;
                try {
                    return e.slice(), e.slice(t, n);
                } catch (r) {
                    return e.slice(t, n - t);
                }
            }
            this.slice = function () {
                return new t(this.getRuntime().uid, e.apply(this, arguments));
            };
        }
        return e.Blob = n;
    }), i(M, [
        D,
        E,
        u,
        h,
        N,
        d
    ], function (e, t, n, i, r, o) {
        function a() {
            function e(e) {
                if (!e.dataTransfer || !e.dataTransfer.types)
                    return !1;
                var t = n.toArray(e.dataTransfer.types || []);
                return -1 !== n.inArray('Files', t) || -1 !== n.inArray('public.file-url', t) || -1 !== n.inArray('application/x-moz-file', t);
            }
            function a(e, n) {
                if (u(e)) {
                    var i = new t(g, e);
                    i.relativePath = n || '', f.push(i);
                }
            }
            function s(e) {
                for (var t = [], i = 0; i < e.length; i++)
                    [].push.apply(t, e[i].extensions.split(/\s*,\s*/));
                return -1 === n.inArray('*', t) ? t : [];
            }
            function u(e) {
                if (!p.length)
                    return !0;
                var t = o.getFileExtension(e.name);
                return !t || -1 !== n.inArray(t, p);
            }
            function c(e, t) {
                var i = [];
                n.each(e, function (e) {
                    var t = e.webkitGetAsEntry();
                    t && (t.isFile ? a(e.getAsFile(), t.fullPath) : i.push(t));
                }), i.length ? l(i, t) : t();
            }
            function l(e, t) {
                var i = [];
                n.each(e, function (e) {
                    i.push(function (t) {
                        d(e, t);
                    });
                }), n.inSeries(i, function () {
                    t();
                });
            }
            function d(e, t) {
                e.isFile ? e.file(function (n) {
                    a(n, e.fullPath), t();
                }, function () {
                    t();
                }) : e.isDirectory ? h(e, t) : t();
            }
            function h(e, t) {
                function n(e) {
                    r.readEntries(function (t) {
                        t.length ? ([].push.apply(i, t), n(e)) : e();
                    }, e);
                }
                var i = [], r = e.createReader();
                n(function () {
                    l(i, t);
                });
            }
            var f = [], p = [], m, g;
            n.extend(this, {
                init: function (t) {
                    var i = this, o;
                    m = t, g = i.ruid, p = s(m.accept), o = m.container, r.addEvent(o, 'dragover', function (t) {
                        e(t) && (t.preventDefault(), t.dataTransfer.dropEffect = 'copy');
                    }, i.uid), r.addEvent(o, 'drop', function (t) {
                        e(t) && (t.preventDefault(), f = [], t.dataTransfer.items && t.dataTransfer.items[0].webkitGetAsEntry ? c(t.dataTransfer.items, function () {
                            i.files = f, i.trigger('drop');
                        }) : (n.each(t.dataTransfer.files, function (e) {
                            a(e);
                        }), i.files = f, i.trigger('drop')));
                    }, i.uid), r.addEvent(o, 'dragenter', function (e) {
                        i.trigger('dragenter');
                    }, i.uid), r.addEvent(o, 'dragleave', function (e) {
                        i.trigger('dragleave');
                    }, i.uid);
                },
                destroy: function () {
                    r.removeAllEvents(m && i.get(m.container), this.uid), g = f = p = m = null;
                }
            });
        }
        return e.FileDrop = a;
    }), i(F, [
        D,
        w,
        u
    ], function (e, t, n) {
        function i() {
            function e(e) {
                return t.atob(e.substring(e.indexOf('base64,') + 7));
            }
            var i, r = !1;
            n.extend(this, {
                read: function (t, o) {
                    var a = this;
                    a.result = '', i = new window.FileReader(), i.addEventListener('progress', function (e) {
                        a.trigger(e);
                    }), i.addEventListener('load', function (t) {
                        a.result = r ? e(i.result) : i.result, a.trigger(t);
                    }), i.addEventListener('error', function (e) {
                        a.trigger(e, i.error);
                    }), i.addEventListener('loadend', function (e) {
                        i = null, a.trigger(e);
                    }), 'function' === n.typeOf(i[t]) ? (r = !1, i[t](o.getSource())) : 'readAsBinaryString' === t && (r = !0, i.readAsDataURL(o.getSource()));
                },
                abort: function () {
                    i && i.abort();
                },
                destroy: function () {
                    i = null;
                }
            });
        }
        return e.FileReader = i;
    }), i(P, [
        D,
        u,
        d,
        x,
        E,
        y,
        I,
        f,
        c
    ], function (e, t, n, i, r, o, a, s, u) {
        function c() {
            function e(e, t) {
                var n = this, i, r;
                i = t.getBlob().getSource(), r = new window.FileReader(), r.onload = function () {
                    t.append(t.getBlobName(), new o(null, {
                        type: i.type,
                        data: r.result
                    })), h.send.call(n, e, t);
                }, r.readAsBinaryString(i);
            }
            function c() {
                return !window.XMLHttpRequest || 'IE' === u.browser && u.verComp(u.version, 8, '<') ? function () {
                    for (var e = [
                                'Msxml2.XMLHTTP.6.0',
                                'Microsoft.XMLHTTP'
                            ], t = 0; t < e.length; t++)
                        try {
                            return new ActiveXObject(e[t]);
                        } catch (n) {
                        }
                }() : new window.XMLHttpRequest();
            }
            function l(e) {
                var t = e.responseXML, n = e.responseText;
                return 'IE' === u.browser && n && t && !t.documentElement && /[^\/]+\/[^\+]+\+xml/.test(e.getResponseHeader('Content-Type')) && (t = new window.ActiveXObject('Microsoft.XMLDOM'), t.async = !1, t.validateOnParse = !1, t.loadXML(n)), t && ('IE' === u.browser && 0 !== t.parseError || !t.documentElement || 'parsererror' === t.documentElement.tagName) ? null : t;
            }
            function d(e) {
                var t = '----moxieboundary' + new Date().getTime(), n = '--', i = '\r\n', r = '', a = this.getRuntime();
                if (!a.can('send_binary_string'))
                    throw new s.RuntimeError(s.RuntimeError.NOT_SUPPORTED_ERR);
                return f.setRequestHeader('Content-Type', 'multipart/form-data; boundary=' + t), e.each(function (e, a) {
                    r += e instanceof o ? n + t + i + 'Content-Disposition: form-data; name="' + a + '"; filename="' + unescape(encodeURIComponent(e.name || 'blob')) + '"' + i + 'Content-Type: ' + (e.type || 'application/octet-stream') + i + i + e.getSource() + i : n + t + i + 'Content-Disposition: form-data; name="' + a + '"' + i + i + unescape(encodeURIComponent(e)) + i;
                }), r += n + t + n + i;
            }
            var h = this, f, p;
            t.extend(this, {
                send: function (n, r) {
                    var s = this, l = 'Mozilla' === u.browser && u.verComp(u.version, 4, '>=') && u.verComp(u.version, 7, '<'), h = 'Android Browser' === u.browser, m = !1;
                    if (p = n.url.replace(/^.+?\/([\w\-\.]+)$/, '$1').toLowerCase(), f = c(), f.open(n.method, n.url, n.async, n.user, n.password), r instanceof o)
                        r.isDetached() && (m = !0), r = r.getSource();
                    else if (r instanceof a) {
                        if (r.hasBlob())
                            if (r.getBlob().isDetached())
                                r = d.call(s, r), m = !0;
                            else if ((l || h) && 'blob' === t.typeOf(r.getBlob().getSource()) && window.FileReader)
                                return void e.call(s, n, r);
                        if (r instanceof a) {
                            var g = new window.FormData();
                            r.each(function (e, t) {
                                e instanceof o ? g.append(t, e.getSource()) : g.append(t, e);
                            }), r = g;
                        }
                    }
                    f.upload ? (n.withCredentials && (f.withCredentials = !0), f.addEventListener('load', function (e) {
                        s.trigger(e);
                    }), f.addEventListener('error', function (e) {
                        s.trigger(e);
                    }), f.addEventListener('progress', function (e) {
                        s.trigger(e);
                    }), f.upload.addEventListener('progress', function (e) {
                        s.trigger({
                            type: 'UploadProgress',
                            loaded: e.loaded,
                            total: e.total
                        });
                    })) : f.onreadystatechange = function v() {
                        switch (f.readyState) {
                        case 1:
                            break;
                        case 2:
                            break;
                        case 3:
                            var e, t;
                            try {
                                i.hasSameOrigin(n.url) && (e = f.getResponseHeader('Content-Length') || 0), f.responseText && (t = f.responseText.length);
                            } catch (r) {
                                e = t = 0;
                            }
                            s.trigger({
                                type: 'progress',
                                lengthComputable: !!e,
                                total: parseInt(e, 10),
                                loaded: t
                            });
                            break;
                        case 4:
                            f.onreadystatechange = function () {
                            }, s.trigger(0 === f.status ? 'error' : 'load');
                        }
                    }, t.isEmptyObj(n.headers) || t.each(n.headers, function (e, t) {
                        f.setRequestHeader(t, e);
                    }), '' !== n.responseType && 'responseType' in f && ('json' !== n.responseType || u.can('return_response_type', 'json') ? f.responseType = n.responseType : f.responseType = 'text'), m ? f.sendAsBinary ? f.sendAsBinary(r) : !function () {
                        for (var e = new Uint8Array(r.length), t = 0; t < r.length; t++)
                            e[t] = 255 & r.charCodeAt(t);
                        f.send(e.buffer);
                    }() : f.send(r), s.trigger('loadstart');
                },
                getStatus: function () {
                    try {
                        if (f)
                            return f.status;
                    } catch (e) {
                    }
                    return 0;
                },
                getResponse: function (e) {
                    var t = this.getRuntime();
                    try {
                        switch (e) {
                        case 'blob':
                            var i = new r(t.uid, f.response), o = f.getResponseHeader('Content-Disposition');
                            if (o) {
                                var a = o.match(/filename=([\'\"'])([^\1]+)\1/);
                                a && (p = a[2]);
                            }
                            return i.name = p, i.type || (i.type = n.getFileMime(p)), i;
                        case 'json':
                            return u.can('return_response_type', 'json') ? f.response : 200 === f.status && window.JSON ? JSON.parse(f.responseText) : null;
                        case 'document':
                            return l(f);
                        default:
                            return '' !== f.responseText ? f.responseText : null;
                        }
                    } catch (s) {
                        return null;
                    }
                },
                getAllResponseHeaders: function () {
                    try {
                        return f.getAllResponseHeaders();
                    } catch (e) {
                    }
                    return '';
                },
                abort: function () {
                    f && f.abort();
                },
                destroy: function () {
                    h = p = null;
                }
            });
        }
        return e.XMLHttpRequest = c;
    }), i(H, [u], function (e) {
        function t(e) {
            e instanceof ArrayBuffer ? n.apply(this, arguments) : i.apply(this, arguments);
        }
        function n(t) {
            var n = new DataView(t);
            e.extend(this, {
                readByteAt: function (e) {
                    return n.getUint8(e);
                },
                writeByteAt: function (e, t) {
                    n.setUint8(e, t);
                },
                SEGMENT: function (e, i, r) {
                    switch (arguments.length) {
                    case 2:
                        return t.slice(e, e + i);
                    case 1:
                        return t.slice(e);
                    case 3:
                        if (null === r && (r = new ArrayBuffer()), r instanceof ArrayBuffer) {
                            var o = new Uint8Array(this.length() - i + r.byteLength);
                            e > 0 && o.set(new Uint8Array(t.slice(0, e)), 0), o.set(new Uint8Array(r), e), o.set(new Uint8Array(t.slice(e + i)), e + r.byteLength), this.clear(), t = o.buffer, n = new DataView(t);
                            break;
                        }
                    default:
                        return t;
                    }
                },
                length: function () {
                    return t ? t.byteLength : 0;
                },
                clear: function () {
                    n = t = null;
                }
            });
        }
        function i(t) {
            function n(e, n, i) {
                i = 3 === arguments.length ? i : t.length - n - 1, t = t.substr(0, n) + e + t.substr(i + n);
            }
            e.extend(this, {
                readByteAt: function (e) {
                    return t.charCodeAt(e);
                },
                writeByteAt: function (e, t) {
                    n(String.fromCharCode(t), e, 1);
                },
                SEGMENT: function (e, i, r) {
                    switch (arguments.length) {
                    case 1:
                        return t.substr(e);
                    case 2:
                        return t.substr(e, i);
                    case 3:
                        n(null !== r ? r : '', e, i);
                        break;
                    default:
                        return t;
                    }
                },
                length: function () {
                    return t ? t.length : 0;
                },
                clear: function () {
                    t = null;
                }
            });
        }
        return e.extend(t.prototype, {
            littleEndian: !1,
            read: function (e, t) {
                var n, i, r;
                if (e + t > this.length())
                    throw new Error('You are trying to read outside the source boundaries.');
                for (i = this.littleEndian ? 0 : -8 * (t - 1), r = 0, n = 0; t > r; r++)
                    n |= this.readByteAt(e + r) << Math.abs(i + 8 * r);
                return n;
            },
            write: function (e, t, n) {
                var i, r, o = '';
                if (e > this.length())
                    throw new Error('You are trying to write outside the source boundaries.');
                for (i = this.littleEndian ? 0 : -8 * (n - 1), r = 0; n > r; r++)
                    this.writeByteAt(e + r, t >> Math.abs(i + 8 * r) & 255);
            },
            BYTE: function (e) {
                return this.read(e, 1);
            },
            SHORT: function (e) {
                return this.read(e, 2);
            },
            LONG: function (e) {
                return this.read(e, 4);
            },
            SLONG: function (e) {
                var t = this.read(e, 4);
                return t > 2147483647 ? t - 4294967296 : t;
            },
            CHAR: function (e) {
                return String.fromCharCode(this.read(e, 1));
            },
            STRING: function (e, t) {
                return this.asArray('CHAR', e, t).join('');
            },
            asArray: function (e, t, n) {
                for (var i = [], r = 0; n > r; r++)
                    i[r] = this[e](t + r);
                return i;
            }
        }), t;
    }), i(B, [
        H,
        f
    ], function (e, t) {
        return function n(i) {
            var r = [], o, a, s, u = 0;
            if (o = new e(i), 65496 !== o.SHORT(0))
                throw o.clear(), new t.ImageError(t.ImageError.WRONG_FORMAT);
            for (a = 2; a <= o.length();)
                if (s = o.SHORT(a), s >= 65488 && 65495 >= s)
                    a += 2;
                else {
                    if (65498 === s || 65497 === s)
                        break;
                    u = o.SHORT(a + 2) + 2, s >= 65505 && 65519 >= s && r.push({
                        hex: s,
                        name: 'APP' + (15 & s),
                        start: a,
                        length: u,
                        segment: o.SEGMENT(a, u)
                    }), a += u;
                }
            return o.clear(), {
                headers: r,
                restore: function (t) {
                    var n, i, o;
                    for (o = new e(t), a = 65504 == o.SHORT(2) ? 4 + o.SHORT(4) : 2, i = 0, n = r.length; n > i; i++)
                        o.SEGMENT(a, 0, r[i].segment), a += r[i].length;
                    return t = o.SEGMENT(), o.clear(), t;
                },
                strip: function (t) {
                    var i, r, o, a;
                    for (o = new n(t), r = o.headers, o.purge(), i = new e(t), a = r.length; a--;)
                        i.SEGMENT(r[a].start, r[a].length, '');
                    return t = i.SEGMENT(), i.clear(), t;
                },
                get: function (e) {
                    for (var t = [], n = 0, i = r.length; i > n; n++)
                        r[n].name === e.toUpperCase() && t.push(r[n].segment);
                    return t;
                },
                set: function (e, t) {
                    var n = [], i, o, a;
                    for ('string' == typeof t ? n.push(t) : n = t, i = o = 0, a = r.length; a > i && (r[i].name === e.toUpperCase() && (r[i].segment = n[o], r[i].length = n[o].length, o++), !(o >= n.length)); i++);
                },
                purge: function () {
                    this.headers = r = [];
                }
            };
        };
    }), i(k, [
        u,
        H,
        f
    ], function (e, n, i) {
        function r(o) {
            function a(n, r) {
                var o = this, a, s, u, c, h, f, p, m, g = [], v = {}, w = {
                        1: 'BYTE',
                        7: 'UNDEFINED',
                        2: 'ASCII',
                        3: 'SHORT',
                        4: 'LONG',
                        5: 'RATIONAL',
                        9: 'SLONG',
                        10: 'SRATIONAL'
                    }, y = {
                        BYTE: 1,
                        UNDEFINED: 1,
                        ASCII: 1,
                        SHORT: 2,
                        LONG: 4,
                        RATIONAL: 8,
                        SLONG: 4,
                        SRATIONAL: 8
                    };
                for (a = o.SHORT(n), s = 0; a > s; s++)
                    if (g = [], p = n + 2 + 12 * s, u = r[o.SHORT(p)], u !== t) {
                        if (c = w[o.SHORT(p += 2)], h = o.LONG(p += 2), f = y[c], !f)
                            throw new i.ImageError(i.ImageError.INVALID_META_ERR);
                        if (p += 4, f * h > 4 && (p = o.LONG(p) + d.tiffHeader), p + f * h >= this.length())
                            throw new i.ImageError(i.ImageError.INVALID_META_ERR);
                        'ASCII' !== c ? (g = o.asArray(c, p, h), m = 1 == h ? g[0] : g, l.hasOwnProperty(u) && 'object' != typeof m ? v[u] = l[u][m] : v[u] = m) : v[u] = e.trim(o.STRING(p, h).replace(/\0$/, ''));
                    }
                return v;
            }
            function s(e, t, n) {
                var i, r, o, a = 0;
                if ('string' == typeof t) {
                    var s = c[e.toLowerCase()];
                    for (var u in s)
                        if (s[u] === t) {
                            t = u;
                            break;
                        }
                }
                i = d[e.toLowerCase() + 'IFD'], r = this.SHORT(i);
                for (var l = 0; r > l; l++)
                    if (o = i + 12 * l + 2, this.SHORT(o) == t) {
                        a = o + 8;
                        break;
                    }
                if (!a)
                    return !1;
                try {
                    this.write(a, n, 4);
                } catch (h) {
                    return !1;
                }
                return !0;
            }
            var u, c, l, d, h, f;
            if (n.call(this, o), c = {
                    tiff: {
                        274: 'Orientation',
                        270: 'ImageDescription',
                        271: 'Make',
                        272: 'Model',
                        305: 'Software',
                        34665: 'ExifIFDPointer',
                        34853: 'GPSInfoIFDPointer'
                    },
                    exif: {
                        36864: 'ExifVersion',
                        40961: 'ColorSpace',
                        40962: 'PixelXDimension',
                        40963: 'PixelYDimension',
                        36867: 'DateTimeOriginal',
                        33434: 'ExposureTime',
                        33437: 'FNumber',
                        34855: 'ISOSpeedRatings',
                        37377: 'ShutterSpeedValue',
                        37378: 'ApertureValue',
                        37383: 'MeteringMode',
                        37384: 'LightSource',
                        37385: 'Flash',
                        37386: 'FocalLength',
                        41986: 'ExposureMode',
                        41987: 'WhiteBalance',
                        41990: 'SceneCaptureType',
                        41988: 'DigitalZoomRatio',
                        41992: 'Contrast',
                        41993: 'Saturation',
                        41994: 'Sharpness'
                    },
                    gps: {
                        0: 'GPSVersionID',
                        1: 'GPSLatitudeRef',
                        2: 'GPSLatitude',
                        3: 'GPSLongitudeRef',
                        4: 'GPSLongitude'
                    },
                    thumb: {
                        513: 'JPEGInterchangeFormat',
                        514: 'JPEGInterchangeFormatLength'
                    }
                }, l = {
                    ColorSpace: {
                        1: 'sRGB',
                        0: 'Uncalibrated'
                    },
                    MeteringMode: {
                        0: 'Unknown',
                        1: 'Average',
                        2: 'CenterWeightedAverage',
                        3: 'Spot',
                        4: 'MultiSpot',
                        5: 'Pattern',
                        6: 'Partial',
                        255: 'Other'
                    },
                    LightSource: {
                        1: 'Daylight',
                        2: 'Fliorescent',
                        3: 'Tungsten',
                        4: 'Flash',
                        9: 'Fine weather',
                        10: 'Cloudy weather',
                        11: 'Shade',
                        12: 'Daylight fluorescent (D 5700 - 7100K)',
                        13: 'Day white fluorescent (N 4600 -5400K)',
                        14: 'Cool white fluorescent (W 3900 - 4500K)',
                        15: 'White fluorescent (WW 3200 - 3700K)',
                        17: 'Standard light A',
                        18: 'Standard light B',
                        19: 'Standard light C',
                        20: 'D55',
                        21: 'D65',
                        22: 'D75',
                        23: 'D50',
                        24: 'ISO studio tungsten',
                        255: 'Other'
                    },
                    Flash: {
                        0: 'Flash did not fire',
                        1: 'Flash fired',
                        5: 'Strobe return light not detected',
                        7: 'Strobe return light detected',
                        9: 'Flash fired, compulsory flash mode',
                        13: 'Flash fired, compulsory flash mode, return light not detected',
                        15: 'Flash fired, compulsory flash mode, return light detected',
                        16: 'Flash did not fire, compulsory flash mode',
                        24: 'Flash did not fire, auto mode',
                        25: 'Flash fired, auto mode',
                        29: 'Flash fired, auto mode, return light not detected',
                        31: 'Flash fired, auto mode, return light detected',
                        32: 'No flash function',
                        65: 'Flash fired, red-eye reduction mode',
                        69: 'Flash fired, red-eye reduction mode, return light not detected',
                        71: 'Flash fired, red-eye reduction mode, return light detected',
                        73: 'Flash fired, compulsory flash mode, red-eye reduction mode',
                        77: 'Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected',
                        79: 'Flash fired, compulsory flash mode, red-eye reduction mode, return light detected',
                        89: 'Flash fired, auto mode, red-eye reduction mode',
                        93: 'Flash fired, auto mode, return light not detected, red-eye reduction mode',
                        95: 'Flash fired, auto mode, return light detected, red-eye reduction mode'
                    },
                    ExposureMode: {
                        0: 'Auto exposure',
                        1: 'Manual exposure',
                        2: 'Auto bracket'
                    },
                    WhiteBalance: {
                        0: 'Auto white balance',
                        1: 'Manual white balance'
                    },
                    SceneCaptureType: {
                        0: 'Standard',
                        1: 'Landscape',
                        2: 'Portrait',
                        3: 'Night scene'
                    },
                    Contrast: {
                        0: 'Normal',
                        1: 'Soft',
                        2: 'Hard'
                    },
                    Saturation: {
                        0: 'Normal',
                        1: 'Low saturation',
                        2: 'High saturation'
                    },
                    Sharpness: {
                        0: 'Normal',
                        1: 'Soft',
                        2: 'Hard'
                    },
                    GPSLatitudeRef: {
                        N: 'North latitude',
                        S: 'South latitude'
                    },
                    GPSLongitudeRef: {
                        E: 'East longitude',
                        W: 'West longitude'
                    }
                }, d = { tiffHeader: 10 }, h = d.tiffHeader, u = { clear: this.clear }, e.extend(this, {
                    read: function () {
                        try {
                            return r.prototype.read.apply(this, arguments);
                        } catch (e) {
                            throw new i.ImageError(i.ImageError.INVALID_META_ERR);
                        }
                    },
                    write: function () {
                        try {
                            return r.prototype.write.apply(this, arguments);
                        } catch (e) {
                            throw new i.ImageError(i.ImageError.INVALID_META_ERR);
                        }
                    },
                    UNDEFINED: function () {
                        return this.BYTE.apply(this, arguments);
                    },
                    RATIONAL: function (e) {
                        return this.LONG(e) / this.LONG(e + 4);
                    },
                    SRATIONAL: function (e) {
                        return this.SLONG(e) / this.SLONG(e + 4);
                    },
                    ASCII: function (e) {
                        return this.CHAR(e);
                    },
                    TIFF: function () {
                        return f || null;
                    },
                    EXIF: function () {
                        var t = null;
                        if (d.exifIFD) {
                            try {
                                t = a.call(this, d.exifIFD, c.exif);
                            } catch (n) {
                                return null;
                            }
                            if (t.ExifVersion && 'array' === e.typeOf(t.ExifVersion)) {
                                for (var i = 0, r = ''; i < t.ExifVersion.length; i++)
                                    r += String.fromCharCode(t.ExifVersion[i]);
                                t.ExifVersion = r;
                            }
                        }
                        return t;
                    },
                    GPS: function () {
                        var t = null;
                        if (d.gpsIFD) {
                            try {
                                t = a.call(this, d.gpsIFD, c.gps);
                            } catch (n) {
                                return null;
                            }
                            t.GPSVersionID && 'array' === e.typeOf(t.GPSVersionID) && (t.GPSVersionID = t.GPSVersionID.join('.'));
                        }
                        return t;
                    },
                    thumb: function () {
                        if (d.IFD1)
                            try {
                                var e = a.call(this, d.IFD1, c.thumb);
                                if ('JPEGInterchangeFormat' in e)
                                    return this.SEGMENT(d.tiffHeader + e.JPEGInterchangeFormat, e.JPEGInterchangeFormatLength);
                            } catch (t) {
                            }
                        return null;
                    },
                    setExif: function (e, t) {
                        return 'PixelXDimension' !== e && 'PixelYDimension' !== e ? !1 : s.call(this, 'exif', e, t);
                    },
                    clear: function () {
                        u.clear(), o = c = l = f = d = u = null;
                    }
                }), 65505 !== this.SHORT(0) || 'EXIF\0' !== this.STRING(4, 5).toUpperCase())
                throw new i.ImageError(i.ImageError.INVALID_META_ERR);
            if (this.littleEndian = 18761 == this.SHORT(h), 42 !== this.SHORT(h += 2))
                throw new i.ImageError(i.ImageError.INVALID_META_ERR);
            d.IFD0 = d.tiffHeader + this.LONG(h += 2), f = a.call(this, d.IFD0, c.tiff), 'ExifIFDPointer' in f && (d.exifIFD = d.tiffHeader + f.ExifIFDPointer, delete f.ExifIFDPointer), 'GPSInfoIFDPointer' in f && (d.gpsIFD = d.tiffHeader + f.GPSInfoIFDPointer, delete f.GPSInfoIFDPointer), e.isEmptyObj(f) && (f = null);
            var p = this.LONG(d.IFD0 + 12 * this.SHORT(d.IFD0) + 2);
            p && (d.IFD1 = d.tiffHeader + p);
        }
        return r.prototype = n.prototype, r;
    }), i(U, [
        u,
        f,
        B,
        H,
        k
    ], function (e, t, n, i, r) {
        function o(o) {
            function a(e) {
                var t = 0, n, i;
                for (e || (e = c); t <= e.length();) {
                    if (n = e.SHORT(t += 2), n >= 65472 && 65475 >= n)
                        return t += 5, {
                            height: e.SHORT(t),
                            width: e.SHORT(t += 2)
                        };
                    i = e.SHORT(t += 2), t += i - 2;
                }
                return null;
            }
            function s() {
                var e = d.thumb(), t, n;
                return e && (t = new i(e), n = a(t), t.clear(), n) ? (n.data = e, n) : null;
            }
            function u() {
                d && l && c && (d.clear(), l.purge(), c.clear(), h = l = d = c = null);
            }
            var c, l, d, h;
            if (c = new i(o), 65496 !== c.SHORT(0))
                throw new t.ImageError(t.ImageError.WRONG_FORMAT);
            l = new n(o);
            try {
                d = new r(l.get('app1')[0]);
            } catch (f) {
            }
            h = a.call(this), e.extend(this, {
                type: 'image/jpeg',
                size: c.length(),
                width: h && h.width || 0,
                height: h && h.height || 0,
                setExif: function (t, n) {
                    return d ? ('object' === e.typeOf(t) ? e.each(t, function (e, t) {
                        d.setExif(t, e);
                    }) : d.setExif(t, n), void l.set('app1', d.SEGMENT())) : !1;
                },
                writeHeaders: function () {
                    return l.restore(arguments.length ? arguments[0] : o);
                },
                stripHeaders: function (e) {
                    return l.strip(e);
                },
                purge: function () {
                    u.call(this);
                }
            }), d && (this.meta = {
                tiff: d.TIFF(),
                exif: d.EXIF(),
                gps: d.GPS(),
                thumb: s()
            });
        }
        return o;
    }), i(G, [
        f,
        u,
        H
    ], function (e, t, n) {
        function i(i) {
            function r() {
                var e, t;
                return e = a.call(this, 8), 'IHDR' == e.type ? (t = e.start, {
                    width: s.LONG(t),
                    height: s.LONG(t += 4)
                }) : null;
            }
            function o() {
                s && (s.clear(), i = l = u = c = s = null);
            }
            function a(e) {
                var t, n, i, r;
                return t = s.LONG(e), n = s.STRING(e += 4, 4), i = e += 4, r = s.LONG(e + t), {
                    length: t,
                    type: n,
                    start: i,
                    CRC: r
                };
            }
            var s, u, c, l;
            s = new n(i), function () {
                var t = 0, n = 0, i = [
                        35152,
                        20039,
                        3338,
                        6666
                    ];
                for (n = 0; n < i.length; n++, t += 2)
                    if (i[n] != s.SHORT(t))
                        throw new e.ImageError(e.ImageError.WRONG_FORMAT);
            }(), l = r.call(this), t.extend(this, {
                type: 'image/png',
                size: s.length(),
                width: l.width,
                height: l.height,
                purge: function () {
                    o.call(this);
                }
            }), o.call(this);
        }
        return i;
    }), i(z, [
        u,
        f,
        U,
        G
    ], function (e, t, n, i) {
        return function (r) {
            var o = [
                    n,
                    i
                ], a;
            a = function () {
                for (var e = 0; e < o.length; e++)
                    try {
                        return new o[e](r);
                    } catch (n) {
                    }
                throw new t.ImageError(t.ImageError.WRONG_FORMAT);
            }(), e.extend(this, {
                type: '',
                size: 0,
                width: 0,
                height: 0,
                setExif: function () {
                },
                writeHeaders: function (e) {
                    return e;
                },
                stripHeaders: function (e) {
                    return e;
                },
                purge: function () {
                    r = null;
                }
            }), e.extend(this, a), this.purge = function () {
                a.purge(), a = null;
            };
        };
    }), i(q, [], function () {
        function e(e, i, r) {
            var o = e.naturalWidth, a = e.naturalHeight, s = r.width, u = r.height, c = r.x || 0, l = r.y || 0, d = i.getContext('2d');
            t(e) && (o /= 2, a /= 2);
            var h = 1024, f = document.createElement('canvas');
            f.width = f.height = h;
            for (var p = f.getContext('2d'), m = n(e, o, a), g = 0; a > g;) {
                for (var v = g + h > a ? a - g : h, w = 0; o > w;) {
                    var y = w + h > o ? o - w : h;
                    p.clearRect(0, 0, h, h), p.drawImage(e, -w, -g);
                    var E = w * s / o + c << 0, _ = Math.ceil(y * s / o), b = g * u / a / m + l << 0, x = Math.ceil(v * u / a / m);
                    d.drawImage(f, 0, 0, y, v, E, b, _, x), w += h;
                }
                g += h;
            }
            f = p = null;
        }
        function t(e) {
            var t = e.naturalWidth, n = e.naturalHeight;
            if (t * n > 1048576) {
                var i = document.createElement('canvas');
                i.width = i.height = 1;
                var r = i.getContext('2d');
                return r.drawImage(e, -t + 1, 0), 0 === r.getImageData(0, 0, 1, 1).data[3];
            }
            return !1;
        }
        function n(e, t, n) {
            var i = document.createElement('canvas');
            i.width = 1, i.height = n;
            var r = i.getContext('2d');
            r.drawImage(e, 0, 0);
            for (var o = r.getImageData(0, 0, 1, n).data, a = 0, s = n, u = n; u > a;) {
                var c = o[4 * (u - 1) + 3];
                0 === c ? s = u : a = u, u = s + a >> 1;
            }
            i = null;
            var l = u / n;
            return 0 === l ? 1 : l;
        }
        return {
            isSubsampled: t,
            renderTo: e
        };
    }), i(j, [
        D,
        u,
        f,
        w,
        y,
        E,
        z,
        q,
        d,
        c
    ], function (e, t, n, i, r, o, a, s, u, c) {
        function l() {
            function e() {
                if (!_ && !y)
                    throw new n.ImageError(n.DOMException.INVALID_STATE_ERR);
                return _ || y;
            }
            function l(e) {
                return i.atob(e.substring(e.indexOf('base64,') + 7));
            }
            function d(e, t) {
                return 'data:' + (t || '') + ';base64,' + i.btoa(e);
            }
            function h(e) {
                var t = this;
                y = new Image(), y.onerror = function () {
                    v.call(this), t.trigger('error', n.ImageError.WRONG_FORMAT);
                }, y.onload = function () {
                    t.trigger('load');
                }, y.src = 'data:' == e.substr(0, 5) ? e : d(e, x.type);
            }
            function f(e, t) {
                var i = this, r;
                return window.FileReader ? (r = new FileReader(), r.onload = function () {
                    t(this.result);
                }, r.onerror = function () {
                    i.trigger('error', n.ImageError.WRONG_FORMAT);
                }, r.readAsDataURL(e), void 0) : t(e.getAsDataURL());
            }
            function p(n, i, r, o) {
                var a = this, s, u, c = 0, l = 0, d, h, f, p;
                if (A = o, p = this.meta && this.meta.tiff && this.meta.tiff.Orientation || 1, -1 !== t.inArray(p, [
                        5,
                        6,
                        7,
                        8
                    ])) {
                    var v = n;
                    n = i, i = v;
                }
                return d = e(), r ? (n = Math.min(n, d.width), i = Math.min(i, d.height), s = Math.max(n / d.width, i / d.height)) : s = Math.min(n / d.width, i / d.height), s > 1 && !r && o ? void this.trigger('Resize') : (_ || (_ = document.createElement('canvas')), h = Math.round(d.width * s), f = Math.round(d.height * s), r ? (_.width = n, _.height = i, h > n && (c = Math.round((h - n) / 2)), f > i && (l = Math.round((f - i) / 2))) : (_.width = h, _.height = f), A || g(_.width, _.height, p), m.call(this, d, _, -c, -l, h, f), this.width = _.width, this.height = _.height, R = !0, void a.trigger('Resize'));
            }
            function m(e, t, n, i, r, o) {
                if ('iOS' === c.OS)
                    s.renderTo(e, t, {
                        width: r,
                        height: o,
                        x: n,
                        y: i
                    });
                else {
                    var a = t.getContext('2d');
                    a.drawImage(e, n, i, r, o);
                }
            }
            function g(e, t, n) {
                switch (n) {
                case 5:
                case 6:
                case 7:
                case 8:
                    _.width = t, _.height = e;
                    break;
                default:
                    _.width = e, _.height = t;
                }
                var i = _.getContext('2d');
                switch (n) {
                case 2:
                    i.translate(e, 0), i.scale(-1, 1);
                    break;
                case 3:
                    i.translate(e, t), i.rotate(Math.PI);
                    break;
                case 4:
                    i.translate(0, t), i.scale(1, -1);
                    break;
                case 5:
                    i.rotate(0.5 * Math.PI), i.scale(1, -1);
                    break;
                case 6:
                    i.rotate(0.5 * Math.PI), i.translate(0, -t);
                    break;
                case 7:
                    i.rotate(0.5 * Math.PI), i.translate(e, -t), i.scale(-1, 1);
                    break;
                case 8:
                    i.rotate(-0.5 * Math.PI), i.translate(-e, 0);
                }
            }
            function v() {
                E && (E.purge(), E = null), b = y = _ = x = null, R = !1;
            }
            var w = this, y, E, _, b, x, R = !1, A = !0;
            t.extend(this, {
                loadFromBlob: function (e) {
                    var t = this, i = t.getRuntime(), r = arguments.length > 1 ? arguments[1] : !0;
                    if (!i.can('access_binary'))
                        throw new n.RuntimeError(n.RuntimeError.NOT_SUPPORTED_ERR);
                    return x = e, e.isDetached() ? (b = e.getSource(), void h.call(this, b)) : void f.call(this, e.getSource(), function (e) {
                        r && (b = l(e)), h.call(t, e);
                    });
                },
                loadFromImage: function (e, t) {
                    this.meta = e.meta, x = new o(null, {
                        name: e.name,
                        size: e.size,
                        type: e.type
                    }), h.call(this, t ? b = e.getAsBinaryString() : e.getAsDataURL());
                },
                getInfo: function () {
                    var t = this.getRuntime(), n;
                    return !E && b && t.can('access_image_binary') && (E = new a(b)), n = {
                        width: e().width || 0,
                        height: e().height || 0,
                        type: x.type || u.getFileMime(x.name),
                        size: b && b.length || x.size || 0,
                        name: x.name || '',
                        meta: E && E.meta || this.meta || {}
                    }, !n.meta || !n.meta.thumb || n.meta.thumb.data instanceof r || (n.meta.thumb.data = new r(null, {
                        type: 'image/jpeg',
                        data: n.meta.thumb.data
                    })), n;
                },
                downsize: function () {
                    p.apply(this, arguments);
                },
                getAsCanvas: function () {
                    return _ && (_.id = this.uid + '_canvas'), _;
                },
                getAsBlob: function (e, t) {
                    return e !== this.type && p.call(this, this.width, this.height, !1), new o(null, {
                        name: x.name || '',
                        type: e,
                        data: w.getAsBinaryString.call(this, e, t)
                    });
                },
                getAsDataURL: function (e) {
                    var t = arguments[1] || 90;
                    if (!R)
                        return y.src;
                    if ('image/jpeg' !== e)
                        return _.toDataURL('image/png');
                    try {
                        return _.toDataURL('image/jpeg', t / 100);
                    } catch (n) {
                        return _.toDataURL('image/jpeg');
                    }
                },
                getAsBinaryString: function (e, t) {
                    if (!R)
                        return b || (b = l(w.getAsDataURL(e, t))), b;
                    if ('image/jpeg' !== e)
                        b = l(w.getAsDataURL(e, t));
                    else {
                        var n;
                        t || (t = 90);
                        try {
                            n = _.toDataURL('image/jpeg', t / 100);
                        } catch (i) {
                            n = _.toDataURL('image/jpeg');
                        }
                        b = l(n), E && (b = E.stripHeaders(b), A && (E.meta && E.meta.exif && E.setExif({
                            PixelXDimension: this.width,
                            PixelYDimension: this.height
                        }), b = E.writeHeaders(b)), E.purge(), E = null);
                    }
                    return R = !1, b;
                },
                destroy: function () {
                    w = null, v.call(this), this.getRuntime().getShim().removeInstance(this.uid);
                }
            });
        }
        return e.Image = l;
    }), i(X, [
        u,
        c,
        h,
        f,
        m
    ], function (e, t, n, i, r) {
        function o() {
            var e;
            try {
                e = navigator.plugins['Shockwave Flash'], e = e.description;
            } catch (t) {
                try {
                    e = new ActiveXObject('ShockwaveFlash.ShockwaveFlash').GetVariable('$version');
                } catch (n) {
                    e = '0.0';
                }
            }
            return e = e.match(/\d+/g), parseFloat(e[0] + '.' + e[1]);
        }
        function a(e) {
            var i = n.get(e);
            i && 'OBJECT' == i.nodeName && ('IE' === t.browser ? (i.style.display = 'none', function r() {
                4 == i.readyState ? s(e) : setTimeout(r, 10);
            }()) : i.parentNode.removeChild(i));
        }
        function s(e) {
            var t = n.get(e);
            if (t) {
                for (var i in t)
                    'function' == typeof t[i] && (t[i] = null);
                t.parentNode.removeChild(t);
            }
        }
        function u(s) {
            var u = this, d;
            s = e.extend({ swf_url: t.swf_url }, s), r.call(this, s, c, {
                access_binary: function (e) {
                    return e && 'browser' === u.mode;
                },
                access_image_binary: function (e) {
                    return e && 'browser' === u.mode;
                },
                display_media: r.capTrue,
                do_cors: r.capTrue,
                drag_and_drop: !1,
                report_upload_progress: function () {
                    return 'client' === u.mode;
                },
                resize_image: r.capTrue,
                return_response_headers: !1,
                return_response_type: function (t) {
                    return 'json' === t && window.JSON ? !0 : !e.arrayDiff(t, [
                        '',
                        'text',
                        'document'
                    ]) || 'browser' === u.mode;
                },
                return_status_code: function (t) {
                    return 'browser' === u.mode || !e.arrayDiff(t, [
                        200,
                        404
                    ]);
                },
                select_file: r.capTrue,
                select_multiple: r.capTrue,
                send_binary_string: function (e) {
                    return e && 'browser' === u.mode;
                },
                send_browser_cookies: function (e) {
                    return e && 'browser' === u.mode;
                },
                send_custom_headers: function (e) {
                    return e && 'browser' === u.mode;
                },
                send_multipart: r.capTrue,
                slice_blob: function (e) {
                    return e && 'browser' === u.mode;
                },
                stream_upload: function (e) {
                    return e && 'browser' === u.mode;
                },
                summon_file_dialog: !1,
                upload_filesize: function (t) {
                    return e.parseSizeStr(t) <= 2097152 || 'client' === u.mode;
                },
                use_http_method: function (t) {
                    return !e.arrayDiff(t, [
                        'GET',
                        'POST'
                    ]);
                }
            }, {
                access_binary: function (e) {
                    return e ? 'browser' : 'client';
                },
                access_image_binary: function (e) {
                    return e ? 'browser' : 'client';
                },
                report_upload_progress: function (e) {
                    return e ? 'browser' : 'client';
                },
                return_response_type: function (t) {
                    return e.arrayDiff(t, [
                        '',
                        'text',
                        'json',
                        'document'
                    ]) ? 'browser' : [
                        'client',
                        'browser'
                    ];
                },
                return_status_code: function (t) {
                    return e.arrayDiff(t, [
                        200,
                        404
                    ]) ? 'browser' : [
                        'client',
                        'browser'
                    ];
                },
                send_binary_string: function (e) {
                    return e ? 'browser' : 'client';
                },
                send_browser_cookies: function (e) {
                    return e ? 'browser' : 'client';
                },
                send_custom_headers: function (e) {
                    return e ? 'browser' : 'client';
                },
                stream_upload: function (e) {
                    return e ? 'client' : 'browser';
                },
                upload_filesize: function (t) {
                    return e.parseSizeStr(t) >= 2097152 ? 'client' : 'browser';
                }
            }, 'client'), o() < 10 && (this.mode = !1), e.extend(this, {
                getShim: function () {
                    return n.get(this.uid);
                },
                shimExec: function (e, t) {
                    var n = [].slice.call(arguments, 2);
                    return u.getShim().exec(this.uid, e, t, n);
                },
                init: function () {
                    var n, r, o;
                    o = this.getShimContainer(), e.extend(o.style, {
                        position: 'absolute',
                        top: '-8px',
                        left: '-8px',
                        width: '9px',
                        height: '9px',
                        overflow: 'hidden'
                    }), n = '<object id="' + this.uid + '" type="application/x-shockwave-flash" data="' + s.swf_url + '" ', 'IE' === t.browser && (n += 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" '), n += 'width="100%" height="100%" style="outline:0"><param name="movie" value="' + s.swf_url + '" /><param name="flashvars" value="uid=' + escape(this.uid) + '&target=' + t.global_event_dispatcher + '" /><param name="wmode" value="transparent" /><param name="allowscriptaccess" value="always" /></object>', 'IE' === t.browser ? (r = document.createElement('div'), o.appendChild(r), r.outerHTML = n, r = o = null) : o.innerHTML = n, d = setTimeout(function () {
                        u && !u.initialized && u.trigger('Error', new i.RuntimeError(i.RuntimeError.NOT_INIT_ERR));
                    }, 5000);
                },
                destroy: function (e) {
                    return function () {
                        a(u.uid), e.call(u), clearTimeout(d), s = d = e = u = null;
                    };
                }(this.destroy)
            }, l);
        }
        var c = 'flash', l = {};
        return r.addConstructor(c, u), l;
    }), i(V, [
        X,
        E,
        u
    ], function (e, t, n) {
        var i = {
            init: function (e) {
                var i = this, r = this.getRuntime();
                this.bind('Change', function () {
                    var e = r.shimExec.call(i, 'FileInput', 'getFiles');
                    i.files = [], n.each(e, function (e) {
                        i.files.push(new t(r.uid, e));
                    });
                }, 999), this.getRuntime().shimExec.call(this, 'FileInput', 'init', {
                    name: e.name,
                    accept: e.accept,
                    multiple: e.multiple
                }), this.trigger('ready');
            }
        };
        return e.FileInput = i;
    }), i(W, [
        X,
        y
    ], function (e, t) {
        var n = {
            slice: function (e, n, i, r) {
                var o = this.getRuntime();
                return 0 > n ? n = Math.max(e.size + n, 0) : n > 0 && (n = Math.min(n, e.size)), 0 > i ? i = Math.max(e.size + i, 0) : i > 0 && (i = Math.min(i, e.size)), e = o.shimExec.call(this, 'Blob', 'slice', n, i, r || ''), e && (e = new t(o.uid, e)), e;
            }
        };
        return e.Blob = n;
    }), i(Y, [
        X,
        w
    ], function (e, t) {
        function n(e, n) {
            switch (n) {
            case 'readAsText':
                return t.atob(e, 'utf8');
            case 'readAsBinaryString':
                return t.atob(e);
            case 'readAsDataURL':
                return e;
            }
            return null;
        }
        var i = {
            read: function (e, t) {
                var i = this;
                return i.result = '', 'readAsDataURL' === e && (i.result = 'data:' + (t.type || '') + ';base64,'), i.bind('Progress', function (t, r) {
                    r && (i.result += n(r, e));
                }, 999), i.getRuntime().shimExec.call(this, 'FileReader', 'readAsBase64', t.uid);
            }
        };
        return e.FileReader = i;
    }), i($, [
        X,
        w
    ], function (e, t) {
        function n(e, n) {
            switch (n) {
            case 'readAsText':
                return t.atob(e, 'utf8');
            case 'readAsBinaryString':
                return t.atob(e);
            case 'readAsDataURL':
                return e;
            }
            return null;
        }
        var i = {
            read: function (e, t) {
                var i, r = this.getRuntime();
                return (i = r.shimExec.call(this, 'FileReaderSync', 'readAsBase64', t.uid)) ? ('readAsDataURL' === e && (i = 'data:' + (t.type || '') + ';base64,' + i), n(i, e, t.type)) : null;
            }
        };
        return e.FileReaderSync = i;
    }), i(J, [
        X,
        u,
        y,
        E,
        A,
        I,
        S
    ], function (e, t, n, i, r, o, a) {
        var s = {
            send: function (e, i) {
                function r() {
                    e.transport = l.mode, l.shimExec.call(c, 'XMLHttpRequest', 'send', e, i);
                }
                function s(e, t) {
                    l.shimExec.call(c, 'XMLHttpRequest', 'appendBlob', e, t.uid), i = null, r();
                }
                function u(e, t) {
                    var n = new a();
                    n.bind('TransportingComplete', function () {
                        t(this.result);
                    }), n.transport(e.getSource(), e.type, { ruid: l.uid });
                }
                var c = this, l = c.getRuntime();
                if (t.isEmptyObj(e.headers) || t.each(e.headers, function (e, t) {
                        l.shimExec.call(c, 'XMLHttpRequest', 'setRequestHeader', t, e.toString());
                    }), i instanceof o) {
                    var d;
                    if (i.each(function (e, t) {
                            e instanceof n ? d = t : l.shimExec.call(c, 'XMLHttpRequest', 'append', t, e);
                        }), i.hasBlob()) {
                        var h = i.getBlob();
                        h.isDetached() ? u(h, function (e) {
                            h.destroy(), s(d, e);
                        }) : s(d, h);
                    } else
                        i = null, r();
                } else
                    i instanceof n ? i.isDetached() ? u(i, function (e) {
                        i.destroy(), i = e.uid, r();
                    }) : (i = i.uid, r()) : r();
            },
            getResponse: function (e) {
                var n, o, a = this.getRuntime();
                if (o = a.shimExec.call(this, 'XMLHttpRequest', 'getResponseAsBlob')) {
                    if (o = new i(a.uid, o), 'blob' === e)
                        return o;
                    try {
                        if (n = new r(), ~t.inArray(e, [
                                '',
                                'text'
                            ]))
                            return n.readAsText(o);
                        if ('json' === e && window.JSON)
                            return JSON.parse(n.readAsText(o));
                    } finally {
                        o.destroy();
                    }
                }
                return null;
            },
            abort: function (e) {
                var t = this.getRuntime();
                t.shimExec.call(this, 'XMLHttpRequest', 'abort'), this.dispatchEvent('readystatechange'), this.dispatchEvent('abort');
            }
        };
        return e.XMLHttpRequest = s;
    }), i(Z, [
        X,
        y
    ], function (e, t) {
        var n = {
            getAsBlob: function (e) {
                var n = this.getRuntime(), i = n.shimExec.call(this, 'Transporter', 'getAsBlob', e);
                return i ? new t(n.uid, i) : null;
            }
        };
        return e.Transporter = n;
    }), i(K, [
        X,
        u,
        S,
        y,
        A
    ], function (e, t, n, i, r) {
        var o = {
            loadFromBlob: function (e) {
                function t(e) {
                    r.shimExec.call(i, 'Image', 'loadFromBlob', e.uid), i = r = null;
                }
                var i = this, r = i.getRuntime();
                if (e.isDetached()) {
                    var o = new n();
                    o.bind('TransportingComplete', function () {
                        t(o.result.getSource());
                    }), o.transport(e.getSource(), e.type, { ruid: r.uid });
                } else
                    t(e.getSource());
            },
            loadFromImage: function (e) {
                var t = this.getRuntime();
                return t.shimExec.call(this, 'Image', 'loadFromImage', e.uid);
            },
            getInfo: function () {
                var e = this.getRuntime(), t = e.shimExec.call(this, 'Image', 'getInfo');
                return !t.meta || !t.meta.thumb || t.meta.thumb.data instanceof i || (t.meta.thumb.data = new i(e.uid, t.meta.thumb.data)), t;
            },
            getAsBlob: function (e, t) {
                var n = this.getRuntime(), r = n.shimExec.call(this, 'Image', 'getAsBlob', e, t);
                return r ? new i(n.uid, r) : null;
            },
            getAsDataURL: function () {
                var e = this.getRuntime(), t = e.Image.getAsBlob.apply(this, arguments), n;
                return t ? (n = new r(), n.readAsDataURL(t)) : null;
            }
        };
        return e.Image = o;
    }), i(Q, [
        u,
        c,
        h,
        f,
        m
    ], function (e, t, n, i, r) {
        function o(e) {
            var t = !1, n = null, i, r, o, a, s, u = 0;
            try {
                try {
                    n = new ActiveXObject('AgControl.AgControl'), n.IsVersionSupported(e) && (t = !0), n = null;
                } catch (c) {
                    var l = navigator.plugins['Silverlight Plug-In'];
                    if (l) {
                        for (i = l.description, '1.0.30226.2' === i && (i = '2.0.30226.2'), r = i.split('.'); r.length > 3;)
                            r.pop();
                        for (; r.length < 4;)
                            r.push(0);
                        for (o = e.split('.'); o.length > 4;)
                            o.pop();
                        do
                            a = parseInt(o[u], 10), s = parseInt(r[u], 10), u++;
                        while (u < o.length && a === s);
                        s >= a && !isNaN(a) && (t = !0);
                    }
                }
            } catch (d) {
                t = !1;
            }
            return t;
        }
        function a(a) {
            var c = this, l;
            a = e.extend({ xap_url: t.xap_url }, a), r.call(this, a, s, {
                access_binary: r.capTrue,
                access_image_binary: r.capTrue,
                display_media: r.capTrue,
                do_cors: r.capTrue,
                drag_and_drop: !1,
                report_upload_progress: r.capTrue,
                resize_image: r.capTrue,
                return_response_headers: function (e) {
                    return e && 'client' === c.mode;
                },
                return_response_type: function (e) {
                    return 'json' !== e ? !0 : !!window.JSON;
                },
                return_status_code: function (t) {
                    return 'client' === c.mode || !e.arrayDiff(t, [
                        200,
                        404
                    ]);
                },
                select_file: r.capTrue,
                select_multiple: r.capTrue,
                send_binary_string: r.capTrue,
                send_browser_cookies: function (e) {
                    return e && 'browser' === c.mode;
                },
                send_custom_headers: function (e) {
                    return e && 'client' === c.mode;
                },
                send_multipart: r.capTrue,
                slice_blob: r.capTrue,
                stream_upload: !0,
                summon_file_dialog: !1,
                upload_filesize: r.capTrue,
                use_http_method: function (t) {
                    return 'client' === c.mode || !e.arrayDiff(t, [
                        'GET',
                        'POST'
                    ]);
                }
            }, {
                return_response_headers: function (e) {
                    return e ? 'client' : 'browser';
                },
                return_status_code: function (t) {
                    return e.arrayDiff(t, [
                        200,
                        404
                    ]) ? 'client' : [
                        'client',
                        'browser'
                    ];
                },
                send_browser_cookies: function (e) {
                    return e ? 'browser' : 'client';
                },
                send_custom_headers: function (e) {
                    return e ? 'client' : 'browser';
                },
                use_http_method: function (t) {
                    return e.arrayDiff(t, [
                        'GET',
                        'POST'
                    ]) ? 'client' : [
                        'client',
                        'browser'
                    ];
                }
            }), o('2.0.31005.0') && 'Opera' !== t.browser || (this.mode = !1), e.extend(this, {
                getShim: function () {
                    return n.get(this.uid).content.Moxie;
                },
                shimExec: function (e, t) {
                    var n = [].slice.call(arguments, 2);
                    return c.getShim().exec(this.uid, e, t, n);
                },
                init: function () {
                    var e;
                    e = this.getShimContainer(), e.innerHTML = '<object id="' + this.uid + '" data="data:application/x-silverlight," type="application/x-silverlight-2" width="100%" height="100%" style="outline:none;"><param name="source" value="' + a.xap_url + '"/><param name="background" value="Transparent"/><param name="windowless" value="true"/><param name="enablehtmlaccess" value="true"/><param name="initParams" value="uid=' + this.uid + ',target=' + t.global_event_dispatcher + '"/></object>', l = setTimeout(function () {
                        c && !c.initialized && c.trigger('Error', new i.RuntimeError(i.RuntimeError.NOT_INIT_ERR));
                    }, 'Windows' !== t.OS ? 10000 : 5000);
                },
                destroy: function (e) {
                    return function () {
                        e.call(c), clearTimeout(l), a = l = e = c = null;
                    };
                }(this.destroy)
            }, u);
        }
        var s = 'silverlight', u = {};
        return r.addConstructor(s, a), u;
    }), i(ee, [
        Q,
        E,
        u
    ], function (e, t, n) {
        var i = {
            init: function (e) {
                function i(e) {
                    for (var t = '', n = 0; n < e.length; n++)
                        t += ('' !== t ? '|' : '') + e[n].title + ' | *.' + e[n].extensions.replace(/,/g, ';*.');
                    return t;
                }
                var r = this, o = this.getRuntime();
                this.bind('Change', function () {
                    var e = o.shimExec.call(r, 'FileInput', 'getFiles');
                    r.files = [], n.each(e, function (e) {
                        r.files.push(new t(o.uid, e));
                    });
                }, 999), this.getRuntime().shimExec.call(this, 'FileInput', 'init', i(e.accept), e.name, e.multiple), this.trigger('ready');
            }
        };
        return e.FileInput = i;
    }), i(te, [
        Q,
        u,
        W
    ], function (e, t, n) {
        return e.Blob = t.extend({}, n);
    }), i(ne, [
        Q,
        h,
        N
    ], function (e, t, n) {
        var i = {
            init: function () {
                var e = this, i = e.getRuntime(), r;
                return r = i.getShimContainer(), n.addEvent(r, 'dragover', function (e) {
                    e.preventDefault(), e.stopPropagation(), e.dataTransfer.dropEffect = 'copy';
                }, e.uid), n.addEvent(r, 'dragenter', function (e) {
                    e.preventDefault();
                    var n = t.get(i.uid).dragEnter(e);
                    n && e.stopPropagation();
                }, e.uid), n.addEvent(r, 'drop', function (e) {
                    e.preventDefault();
                    var n = t.get(i.uid).dragDrop(e);
                    n && e.stopPropagation();
                }, e.uid), i.shimExec.call(this, 'FileDrop', 'init');
            }
        };
        return e.FileDrop = i;
    }), i(ie, [
        Q,
        u,
        Y
    ], function (e, t, n) {
        return e.FileReader = t.extend({}, n);
    }), i(re, [
        Q,
        u,
        $
    ], function (e, t, n) {
        return e.FileReaderSync = t.extend({}, n);
    }), i(oe, [
        Q,
        u,
        J
    ], function (e, t, n) {
        return e.XMLHttpRequest = t.extend({}, n);
    }), i(ae, [
        Q,
        u,
        Z
    ], function (e, t, n) {
        return e.Transporter = t.extend({}, n);
    }), i(se, [
        Q,
        u,
        y,
        K
    ], function (e, t, n, i) {
        return e.Image = t.extend({}, i, {
            getInfo: function () {
                var e = this.getRuntime(), i = [
                        'tiff',
                        'exif',
                        'gps',
                        'thumb'
                    ], r = { meta: {} }, o = e.shimExec.call(this, 'Image', 'getInfo');
                return o.meta && (t.each(i, function (e) {
                    var t = o.meta[e], n, i, a, s;
                    if (t && t.keys)
                        for (r.meta[e] = {}, i = 0, a = t.keys.length; a > i; i++)
                            n = t.keys[i], s = t[n], s && (/^(\d|[1-9]\d+)$/.test(s) ? s = parseInt(s, 10) : /^\d*\.\d+$/.test(s) && (s = parseFloat(s)), r.meta[e][n] = s);
                }), !r.meta || !r.meta.thumb || r.meta.thumb.data instanceof n || (r.meta.thumb.data = new n(e.uid, r.meta.thumb.data))), r.width = parseInt(o.width, 10), r.height = parseInt(o.height, 10), r.size = parseInt(o.size, 10), r.type = o.type, r.name = o.name, r;
            }
        });
    }), i(ue, [
        u,
        f,
        m,
        c
    ], function (e, t, n, i) {
        function r(t) {
            var r = this, s = n.capTest, u = n.capTrue;
            n.call(this, t, o, {
                access_binary: s(window.FileReader || window.File && File.getAsDataURL),
                access_image_binary: !1,
                display_media: s(a.Image && (i.can('create_canvas') || i.can('use_data_uri_over32kb'))),
                do_cors: !1,
                drag_and_drop: !1,
                filter_by_extension: s(function () {
                    return 'Chrome' === i.browser && i.verComp(i.version, 28, '>=') || 'IE' === i.browser && i.verComp(i.version, 10, '>=') || 'Safari' === i.browser && i.verComp(i.version, 7, '>=');
                }()),
                resize_image: function () {
                    return a.Image && r.can('access_binary') && i.can('create_canvas');
                },
                report_upload_progress: !1,
                return_response_headers: !1,
                return_response_type: function (t) {
                    return 'json' === t && window.JSON ? !0 : !!~e.inArray(t, [
                        'text',
                        'document',
                        ''
                    ]);
                },
                return_status_code: function (t) {
                    return !e.arrayDiff(t, [
                        200,
                        404
                    ]);
                },
                select_file: function () {
                    return i.can('use_fileinput');
                },
                select_multiple: !1,
                send_binary_string: !1,
                send_custom_headers: !1,
                send_multipart: !0,
                slice_blob: !1,
                stream_upload: function () {
                    return r.can('select_file');
                },
                summon_file_dialog: function () {
                    return r.can('select_file') && ('Firefox' === i.browser && i.verComp(i.version, 4, '>=') || 'Opera' === i.browser && i.verComp(i.version, 12, '>=') || 'IE' === i.browser && i.verComp(i.version, 10, '>=') || !!~e.inArray(i.browser, [
                        'Chrome',
                        'Safari'
                    ]));
                },
                upload_filesize: u,
                use_http_method: function (t) {
                    return !e.arrayDiff(t, [
                        'GET',
                        'POST'
                    ]);
                }
            }), e.extend(this, {
                init: function () {
                    this.trigger('Init');
                },
                destroy: function (e) {
                    return function () {
                        e.call(r), e = r = null;
                    };
                }(this.destroy)
            }), e.extend(this.getShim(), a);
        }
        var o = 'html4', a = {};
        return n.addConstructor(o, r), a;
    }), i(ce, [
        ue,
        E,
        u,
        h,
        N,
        d,
        c
    ], function (e, t, n, i, r, o, a) {
        function s() {
            function e() {
                var o = this, l = o.getRuntime(), d, h, f, p, m, g;
                g = n.guid('uid_'), d = l.getShimContainer(), s && (f = i.get(s + '_form'), f && n.extend(f.style, { top: '100%' })), p = document.createElement('form'), p.setAttribute('id', g + '_form'), p.setAttribute('method', 'post'), p.setAttribute('enctype', 'multipart/form-data'), p.setAttribute('encoding', 'multipart/form-data'), n.extend(p.style, {
                    overflow: 'hidden',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%'
                }), m = document.createElement('input'), m.setAttribute('id', g), m.setAttribute('type', 'file'), m.setAttribute('name', c.name || 'Filedata'), m.setAttribute('accept', u.join(',')), n.extend(m.style, {
                    fontSize: '999px',
                    opacity: 0
                }), p.appendChild(m), d.appendChild(p), n.extend(m.style, {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%'
                }), 'IE' === a.browser && a.verComp(a.version, 10, '<') && n.extend(m.style, { filter: 'progid:DXImageTransform.Microsoft.Alpha(opacity=0)' }), m.onchange = function () {
                    var n;
                    if (this.value) {
                        if (this.files) {
                            if (n = this.files[0], 0 === n.size)
                                return void p.parentNode.removeChild(p);
                        } else
                            n = { name: this.value };
                        n = new t(l.uid, n), this.onchange = function () {
                        }, e.call(o), o.files = [n], m.setAttribute('id', n.uid), p.setAttribute('id', n.uid + '_form'), o.trigger('change'), m = p = null;
                    }
                }, l.can('summon_file_dialog') && (h = i.get(c.browse_button), r.removeEvent(h, 'click', o.uid), r.addEvent(h, 'click', function (e) {
                    m && !m.disabled && m.click(), e.preventDefault();
                }, o.uid)), s = g, d = f = h = null;
            }
            var s, u = [], c;
            n.extend(this, {
                init: function (t) {
                    var n = this, a = n.getRuntime(), s;
                    c = t, u = t.accept.mimes || o.extList2mimes(t.accept, a.can('filter_by_extension')), s = a.getShimContainer(), function () {
                        var e, o, u;
                        e = i.get(t.browse_button), a.can('summon_file_dialog') && ('static' === i.getStyle(e, 'position') && (e.style.position = 'relative'), o = parseInt(i.getStyle(e, 'z-index'), 10) || 1, e.style.zIndex = o, s.style.zIndex = o - 1), u = a.can('summon_file_dialog') ? e : s, r.addEvent(u, 'mouseover', function () {
                            n.trigger('mouseenter');
                        }, n.uid), r.addEvent(u, 'mouseout', function () {
                            n.trigger('mouseleave');
                        }, n.uid), r.addEvent(u, 'mousedown', function () {
                            n.trigger('mousedown');
                        }, n.uid), r.addEvent(i.get(t.container), 'mouseup', function () {
                            n.trigger('mouseup');
                        }, n.uid), e = null;
                    }(), e.call(this), s = null, n.trigger({
                        type: 'ready',
                        async: !0
                    });
                },
                disable: function (e) {
                    var t;
                    (t = i.get(s)) && (t.disabled = !!e);
                },
                destroy: function () {
                    var e = this.getRuntime(), t = e.getShim(), n = e.getShimContainer();
                    r.removeAllEvents(n, this.uid), r.removeAllEvents(c && i.get(c.container), this.uid), r.removeAllEvents(c && i.get(c.browse_button), this.uid), n && (n.innerHTML = ''), t.removeInstance(this.uid), s = u = c = n = t = null;
                }
            });
        }
        return e.FileInput = s;
    }), i(le, [
        ue,
        F
    ], function (e, t) {
        return e.FileReader = t;
    }), i(de, [
        ue,
        u,
        h,
        x,
        f,
        N,
        y,
        I
    ], function (e, t, n, i, r, o, a, s) {
        function u() {
            function e(e) {
                var t = this, i, r, a, s, u = !1;
                if (l) {
                    if (i = l.id.replace(/_iframe$/, ''), r = n.get(i + '_form')) {
                        for (a = r.getElementsByTagName('input'), s = a.length; s--;)
                            switch (a[s].getAttribute('type')) {
                            case 'hidden':
                                a[s].parentNode.removeChild(a[s]);
                                break;
                            case 'file':
                                u = !0;
                            }
                        a = [], u || r.parentNode.removeChild(r), r = null;
                    }
                    setTimeout(function () {
                        o.removeEvent(l, 'load', t.uid), l.parentNode && l.parentNode.removeChild(l);
                        var n = t.getRuntime().getShimContainer();
                        n.children.length || n.parentNode.removeChild(n), n = l = null, e();
                    }, 1);
                }
            }
            var u, c, l;
            t.extend(this, {
                send: function (d, h) {
                    function f() {
                        var n = m.getShimContainer() || document.body, r = document.createElement('div');
                        r.innerHTML = '<iframe id="' + g + '_iframe" name="' + g + '_iframe" src="javascript:&quot;&quot;" style="display:none"></iframe>', l = r.firstChild, n.appendChild(l), o.addEvent(l, 'load', function () {
                            var n;
                            try {
                                n = l.contentWindow.document || l.contentDocument || window.frames[l.id].document, /^4(0[0-9]|1[0-7]|2[2346])\s/.test(n.title) ? u = n.title.replace(/^(\d+).*$/, '$1') : (u = 200, c = t.trim(n.body.innerHTML), p.trigger({
                                    type: 'progress',
                                    loaded: c.length,
                                    total: c.length
                                }), y && p.trigger({
                                    type: 'uploadprogress',
                                    loaded: y.size || 1025,
                                    total: y.size || 1025
                                }));
                            } catch (r) {
                                if (!i.hasSameOrigin(d.url))
                                    return void e.call(p, function () {
                                        p.trigger('error');
                                    });
                                u = 404;
                            }
                            e.call(p, function () {
                                p.trigger('load');
                            });
                        }, p.uid);
                    }
                    var p = this, m = p.getRuntime(), g, v, w, y;
                    if (u = c = null, h instanceof s && h.hasBlob()) {
                        if (y = h.getBlob(), g = y.uid, w = n.get(g), v = n.get(g + '_form'), !v)
                            throw new r.DOMException(r.DOMException.NOT_FOUND_ERR);
                    } else
                        g = t.guid('uid_'), v = document.createElement('form'), v.setAttribute('id', g + '_form'), v.setAttribute('method', d.method), v.setAttribute('enctype', 'multipart/form-data'), v.setAttribute('encoding', 'multipart/form-data'), m.getShimContainer().appendChild(v);
                    v.setAttribute('target', g + '_iframe'), h instanceof s && h.each(function (e, n) {
                        if (e instanceof a)
                            w && w.setAttribute('name', n);
                        else {
                            var i = document.createElement('input');
                            t.extend(i, {
                                type: 'hidden',
                                name: n,
                                value: e
                            }), w ? v.insertBefore(i, w) : v.appendChild(i);
                        }
                    }), v.setAttribute('action', d.url), f(), v.submit(), p.trigger('loadstart');
                },
                getStatus: function () {
                    return u;
                },
                getResponse: function (e) {
                    if ('json' === e && 'string' === t.typeOf(c) && window.JSON)
                        try {
                            return JSON.parse(c.replace(/^\s*<pre[^>]*>/, '').replace(/<\/pre>\s*$/, ''));
                        } catch (n) {
                            return null;
                        }
                    return c;
                },
                abort: function () {
                    var t = this;
                    l && l.contentWindow && (l.contentWindow.stop ? l.contentWindow.stop() : l.contentWindow.document.execCommand ? l.contentWindow.document.execCommand('Stop') : l.src = 'about:blank'), e.call(this, function () {
                        t.dispatchEvent('abort');
                    });
                }
            });
        }
        return e.XMLHttpRequest = u;
    }), i(he, [
        ue,
        j
    ], function (e, t) {
        return e.Image = t;
    }), a([
        u,
        c,
        l,
        d,
        h,
        f,
        p,
        m,
        g,
        v,
        w,
        y,
        E,
        _,
        b,
        x,
        R,
        A,
        I,
        T,
        S,
        O,
        N
    ]);
}(this);
;
(function (e) {
    'use strict';
    var t = {}, n = e.moxie.core.utils.Basic.inArray;
    return function r(e) {
        var i, s;
        for (i in e)
            s = typeof e[i], s === 'object' && !~n(i, [
                'Exceptions',
                'Env',
                'Mime'
            ]) ? r(e[i]) : s === 'function' && (t[i] = e[i]);
    }(e.moxie), t.Env = e.moxie.core.utils.Env, t.Mime = e.moxie.core.utils.Mime, t.Exceptions = e.moxie.core.Exceptions, e.mOxie = t, e.o || (e.o = t), t;
}(this));
;
(function (e, t, n) {
    function s(e) {
        function r(e, t, r) {
            var i = {
                chunks: 'slice_blob',
                jpgresize: 'send_binary_string',
                pngresize: 'send_binary_string',
                progress: 'report_upload_progress',
                multi_selection: 'select_multiple',
                dragdrop: 'drag_and_drop',
                drop_element: 'drag_and_drop',
                headers: 'send_custom_headers',
                urlstream_upload: 'send_binary_string',
                canSendBinary: 'send_binary',
                triggerDialog: 'summon_file_dialog'
            };
            i[e] ? n[i[e]] = t : r || (n[e] = t);
        }
        var t = e.required_features, n = {};
        if (typeof t == 'string')
            o.each(t.split(/\s*,\s*/), function (e) {
                r(e, !0);
            });
        else if (typeof t == 'object')
            o.each(t, function (e, t) {
                r(t, e);
            });
        else if (t === !0) {
            e.chunk_size > 0 && (n.slice_blob = !0);
            if (e.resize.enabled || !e.multipart)
                n.send_binary_string = !0;
            o.each(e, function (e, t) {
                r(t, !!e, !0);
            });
        }
        return n;
    }
    var r = e.setTimeout, i = {}, o = {
            VERSION: '2.1.8',
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
            get: function (n) {
                var r = [], i;
                t.typeOf(n) !== 'array' && (n = [n]);
                var s = n.length;
                while (s--)
                    i = t.get(n[s]), i && r.push(i);
                return r.length ? r : null;
            },
            each: t.each,
            getPos: t.getPos,
            getSize: t.getSize,
            xmlEncode: function (e) {
                var t = {
                        '<': 'lt',
                        '>': 'gt',
                        '&': 'amp',
                        '"': 'quot',
                        '\'': '#39'
                    }, n = /[<>&\"\']/g;
                return e ? ('' + e).replace(n, function (e) {
                    return t[e] ? '&' + t[e] + ';' : e;
                }) : e;
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
            cleanName: function (e) {
                var t, n;
                n = [
                    /[\300-\306]/g,
                    'A',
                    /[\340-\346]/g,
                    'a',
                    /\307/g,
                    'C',
                    /\347/g,
                    'c',
                    /[\310-\313]/g,
                    'E',
                    /[\350-\353]/g,
                    'e',
                    /[\314-\317]/g,
                    'I',
                    /[\354-\357]/g,
                    'i',
                    /\321/g,
                    'N',
                    /\361/g,
                    'n',
                    /[\322-\330]/g,
                    'O',
                    /[\362-\370]/g,
                    'o',
                    /[\331-\334]/g,
                    'U',
                    /[\371-\374]/g,
                    'u'
                ];
                for (t = 0; t < n.length; t += 2)
                    e = e.replace(n[t], n[t + 1]);
                return e = e.replace(/\s+/g, '_'), e = e.replace(/[^a-z0-9_\-\.]+/gi, ''), e;
            },
            buildUrl: function (e, t) {
                var n = '';
                return o.each(t, function (e, t) {
                    n += (n ? '&' : '') + encodeURIComponent(t) + '=' + encodeURIComponent(e);
                }), n && (e += (e.indexOf('?') > 0 ? '&' : '?') + n), e;
            },
            formatSize: function (e) {
                function t(e, t) {
                    return Math.round(e * Math.pow(10, t)) / Math.pow(10, t);
                }
                if (e === n || /\D/.test(e))
                    return o.translate('N/A');
                var r = Math.pow(1024, 4);
                return e > r ? t(e / r, 1) + ' ' + o.translate('tb') : e > (r /= 1024) ? t(e / r, 1) + ' ' + o.translate('gb') : e > (r /= 1024) ? t(e / r, 1) + ' ' + o.translate('mb') : e > 1024 ? Math.round(e / 1024) + ' ' + o.translate('kb') : e + ' ' + o.translate('b');
            },
            parseSize: t.parseSizeStr,
            predictRuntime: function (e, n) {
                var r, i;
                return r = new o.Uploader(e), i = t.Runtime.thatCan(r.getOption().required_features, n || e.runtimes), r.destroy(), i;
            },
            addFileFilter: function (e, t) {
                i[e] = t;
            }
        };
    o.addFileFilter('mime_types', function (e, t, n) {
        e.length && !e.regexp.test(t.name) ? (this.trigger('Error', {
            code: o.FILE_EXTENSION_ERROR,
            message: o.translate('File extension error.'),
            file: t
        }), n(!1)) : n(!0);
    }), o.addFileFilter('max_file_size', function (e, t, n) {
        var r;
        e = o.parseSize(e), t.size !== r && e && t.size > e ? (this.trigger('Error', {
            code: o.FILE_SIZE_ERROR,
            message: o.translate('File size error.'),
            file: t
        }), n(!1)) : n(!0);
    }), o.addFileFilter('prevent_duplicates', function (e, t, n) {
        if (e) {
            var r = this.files.length;
            while (r--)
                if (t.name === this.files[r].name && t.size === this.files[r].size) {
                    this.trigger('Error', {
                        code: o.FILE_DUPLICATE_ERROR,
                        message: o.translate('Duplicate file error.'),
                        file: t
                    }), n(!1);
                    return;
                }
        }
        n(!0);
    }), o.Uploader = function (e) {
        function g() {
            var e, t = 0, n;
            if (this.state == o.STARTED) {
                for (n = 0; n < f.length; n++)
                    !e && f[n].status == o.QUEUED ? (e = f[n], this.trigger('BeforeUpload', e) && (e.status = o.UPLOADING, this.trigger('UploadFile', e))) : t++;
                t == f.length && (this.state !== o.STOPPED && (this.state = o.STOPPED, this.trigger('StateChanged')), this.trigger('UploadComplete', f));
            }
        }
        function y(e) {
            e.percent = e.size > 0 ? Math.ceil(e.loaded / e.size * 100) : 100, b();
        }
        function b() {
            var e, t;
            d.reset();
            for (e = 0; e < f.length; e++)
                t = f[e], t.size !== n ? (d.size += t.origSize, d.loaded += t.loaded * t.origSize / t.size) : d.size = n, t.status == o.DONE ? d.uploaded++ : t.status == o.FAILED ? d.failed++ : d.queued++;
            d.size === n ? d.percent = f.length > 0 ? Math.ceil(d.uploaded / f.length * 100) : 0 : (d.bytesPerSec = Math.ceil(d.loaded / ((+new Date() - p || 1) / 1000)), d.percent = d.size > 0 ? Math.ceil(d.loaded / d.size * 100) : 0);
        }
        function w() {
            var e = c[0] || h[0];
            return e ? e.getRuntime().uid : !1;
        }
        function E(e, n) {
            if (e.ruid) {
                var r = t.Runtime.getInfo(e.ruid);
                if (r)
                    return r.can(n);
            }
            return !1;
        }
        function S() {
            this.bind('FilesAdded FilesRemoved', function (e) {
                e.trigger('QueueChanged'), e.refresh();
            }), this.bind('CancelUpload', O), this.bind('BeforeUpload', C), this.bind('UploadFile', k), this.bind('UploadProgress', L), this.bind('StateChanged', A), this.bind('QueueChanged', b), this.bind('Error', _), this.bind('FileUploaded', M), this.bind('Destroy', D);
        }
        function x(e, n) {
            var r = this, i = 0, s = [], u = {
                    runtime_order: e.runtimes,
                    required_caps: e.required_features,
                    preferred_caps: l,
                    swf_url: e.flash_swf_url,
                    xap_url: e.silverlight_xap_url
                };
            o.each(e.runtimes.split(/\s*,\s*/), function (t) {
                e[t] && (u[t] = e[t]);
            }), e.browse_button && o.each(e.browse_button, function (n) {
                s.push(function (s) {
                    var a = new t.FileInput(o.extend({}, u, {
                        accept: e.filters.mime_types,
                        name: e.file_data_name,
                        multiple: e.multi_selection,
                        container: e.container,
                        browse_button: n
                    }));
                    a.onready = function () {
                        var e = t.Runtime.getInfo(this.ruid);
                        t.extend(r.features, {
                            chunks: e.can('slice_blob'),
                            multipart: e.can('send_multipart'),
                            multi_selection: e.can('select_multiple')
                        }), i++, c.push(this), s();
                    }, a.onchange = function () {
                        r.addFile(this.files);
                    }, a.bind('mouseenter mouseleave mousedown mouseup', function (r) {
                        v || (e.browse_button_hover && ('mouseenter' === r.type ? t.addClass(n, e.browse_button_hover) : 'mouseleave' === r.type && t.removeClass(n, e.browse_button_hover)), e.browse_button_active && ('mousedown' === r.type ? t.addClass(n, e.browse_button_active) : 'mouseup' === r.type && t.removeClass(n, e.browse_button_active)));
                    }), a.bind('mousedown', function () {
                        r.trigger('Browse');
                    }), a.bind('error runtimeerror', function () {
                        a = null, s();
                    }), a.init();
                });
            }), e.drop_element && o.each(e.drop_element, function (e) {
                s.push(function (n) {
                    var s = new t.FileDrop(o.extend({}, u, { drop_zone: e }));
                    s.onready = function () {
                        var e = t.Runtime.getInfo(this.ruid);
                        r.features.dragdrop = e.can('drag_and_drop'), i++, h.push(this), n();
                    }, s.ondrop = function () {
                        r.addFile(this.files);
                    }, s.bind('error runtimeerror', function () {
                        s = null, n();
                    }), s.init();
                });
            }), t.inSeries(s, function () {
                typeof n == 'function' && n(i);
            });
        }
        function T(e, r, i) {
            var s = new t.Image();
            try {
                s.onload = function () {
                    if (r.width > this.width && r.height > this.height && r.quality === n && r.preserve_headers && !r.crop)
                        return this.destroy(), i(e);
                    s.downsize(r.width, r.height, r.crop, r.preserve_headers);
                }, s.onresize = function () {
                    i(this.getAsBlob(e.type, r.quality)), this.destroy();
                }, s.onerror = function () {
                    i(e);
                }, s.load(e);
            } catch (o) {
                i(e);
            }
        }
        function N(e, n, r) {
            function f(e, t, n) {
                var r = a[e];
                switch (e) {
                case 'max_file_size':
                    e === 'max_file_size' && (a.max_file_size = a.filters.max_file_size = t);
                    break;
                case 'chunk_size':
                    if (t = o.parseSize(t))
                        a[e] = t, a.send_file_name = !0;
                    break;
                case 'multipart':
                    a[e] = t, t || (a.send_file_name = !0);
                    break;
                case 'unique_names':
                    a[e] = t, t && (a.send_file_name = !0);
                    break;
                case 'filters':
                    o.typeOf(t) === 'array' && (t = { mime_types: t }), n ? o.extend(a.filters, t) : a.filters = t, t.mime_types && (a.filters.mime_types.regexp = function (e) {
                        var t = [];
                        return o.each(e, function (e) {
                            o.each(e.extensions.split(/,/), function (e) {
                                /^\s*\*\s*$/.test(e) ? t.push('\\.*') : t.push('\\.' + e.replace(new RegExp('[' + '/^$.*+?|()[]{}\\'.replace(/./g, '\\$&') + ']', 'g'), '\\$&'));
                            });
                        }), new RegExp('(' + t.join('|') + ')$', 'i');
                    }(a.filters.mime_types));
                    break;
                case 'resize':
                    n ? o.extend(a.resize, t, { enabled: !0 }) : a.resize = t;
                    break;
                case 'prevent_duplicates':
                    a.prevent_duplicates = a.filters.prevent_duplicates = !!t;
                    break;
                case 'browse_button':
                case 'drop_element':
                    t = o.get(t);
                case 'container':
                case 'runtimes':
                case 'multi_selection':
                case 'flash_swf_url':
                case 'silverlight_xap_url':
                    a[e] = t, n || (u = !0);
                    break;
                default:
                    a[e] = t;
                }
                n || i.trigger('OptionChanged', e, t, r);
            }
            var i = this, u = !1;
            typeof e == 'object' ? o.each(e, function (e, t) {
                f(t, e, r);
            }) : f(e, n, r), r ? (a.required_features = s(o.extend({}, a)), l = s(o.extend({}, a, { required_features: !0 }))) : u && (i.trigger('Destroy'), x.call(i, a, function (e) {
                e ? (i.runtime = t.Runtime.getInfo(w()).type, i.trigger('Init', { runtime: i.runtime }), i.trigger('PostInit')) : i.trigger('Error', {
                    code: o.INIT_ERROR,
                    message: o.translate('Init error.')
                });
            }));
        }
        function C(e, t) {
            if (e.settings.unique_names) {
                var n = t.name.match(/\.([^.]+)$/), r = 'part';
                n && (r = n[1]), t.target_name = t.id + '.' + r;
            }
        }
        function k(e, n) {
            function h() {
                u-- > 0 ? r(p, 1000) : (n.loaded = f, e.trigger('Error', {
                    code: o.HTTP_ERROR,
                    message: o.translate('HTTP Error.'),
                    file: n,
                    response: m.responseText,
                    status: m.status,
                    responseHeaders: m.getAllResponseHeaders()
                }));
            }
            function p() {
                var d, v, g = {}, y;
                if (n.status !== o.UPLOADING || e.state === o.STOPPED)
                    return;
                e.settings.send_file_name && (g.name = n.target_name || n.name), s && a.chunks && c.size > s ? (y = Math.min(s, c.size - f), d = c.slice(f, f + y)) : (y = c.size, d = c), s && a.chunks && (e.settings.send_chunk_number ? (g.chunk = Math.ceil(f / s), g.chunks = Math.ceil(c.size / s)) : (g.offset = f, g.total = c.size)), m = new t.XMLHttpRequest(), m.upload && (m.upload.onprogress = function (t) {
                    n.loaded = Math.min(n.size, f + t.loaded), e.trigger('UploadProgress', n);
                }), m.onload = function () {
                    if (m.status >= 400) {
                        h();
                        return;
                    }
                    u = e.settings.max_retries, y < c.size ? (d.destroy(), f += y, n.loaded = Math.min(f, c.size), e.trigger('ChunkUploaded', n, {
                        offset: n.loaded,
                        total: c.size,
                        response: m.responseText,
                        status: m.status,
                        responseHeaders: m.getAllResponseHeaders()
                    }), t.Env.browser === 'Android Browser' && e.trigger('UploadProgress', n)) : n.loaded = n.size, d = v = null, !f || f >= c.size ? (n.size != n.origSize && (c.destroy(), c = null), e.trigger('UploadProgress', n), n.status = o.DONE, e.trigger('FileUploaded', n, {
                        response: m.responseText,
                        status: m.status,
                        responseHeaders: m.getAllResponseHeaders()
                    })) : r(p, 1);
                }, m.onerror = function () {
                    h();
                }, m.onloadend = function () {
                    this.destroy(), m = null;
                }, e.settings.multipart && a.multipart ? (m.open('post', i, !0), o.each(e.settings.headers, function (e, t) {
                    m.setRequestHeader(t, e);
                }), v = new t.FormData(), o.each(o.extend(g, e.settings.multipart_params), function (e, t) {
                    v.append(t, e);
                }), v.append(e.settings.file_data_name, d), m.send(v, {
                    runtime_order: e.settings.runtimes,
                    required_caps: e.settings.required_features,
                    preferred_caps: l,
                    swf_url: e.settings.flash_swf_url,
                    xap_url: e.settings.silverlight_xap_url
                })) : (i = o.buildUrl(e.settings.url, o.extend(g, e.settings.multipart_params)), m.open('post', i, !0), m.setRequestHeader('Content-Type', 'application/octet-stream'), o.each(e.settings.headers, function (e, t) {
                    m.setRequestHeader(t, e);
                }), m.send(d, {
                    runtime_order: e.settings.runtimes,
                    required_caps: e.settings.required_features,
                    preferred_caps: l,
                    swf_url: e.settings.flash_swf_url,
                    xap_url: e.settings.silverlight_xap_url
                }));
            }
            var i = e.settings.url, s = e.settings.chunk_size, u = e.settings.max_retries, a = e.features, f = 0, c;
            n.loaded && (f = n.loaded = s ? s * Math.floor(n.loaded / s) : 0), c = n.getSource(), e.settings.resize.enabled && E(c, 'send_binary_string') && !!~t.inArray(c.type, [
                'image/jpeg',
                'image/png'
            ]) ? T.call(this, c, e.settings.resize, function (e) {
                c = e, n.size = e.size, p();
            }) : p();
        }
        function L(e, t) {
            y(t);
        }
        function A(e) {
            if (e.state == o.STARTED)
                p = +new Date();
            else if (e.state == o.STOPPED)
                for (var t = e.files.length - 1; t >= 0; t--)
                    e.files[t].status == o.UPLOADING && (e.files[t].status = o.QUEUED, b());
        }
        function O() {
            m && m.abort();
        }
        function M(e) {
            b(), r(function () {
                g.call(e);
            }, 1);
        }
        function _(e, t) {
            t.code === o.INIT_ERROR ? e.destroy() : t.code === o.HTTP_ERROR && (t.file.status = o.FAILED, y(t.file), e.state == o.STARTED && (e.trigger('CancelUpload'), r(function () {
                g.call(e);
            }, 1)));
        }
        function D(e) {
            e.stop(), o.each(f, function (e) {
                e.destroy();
            }), f = [], c.length && (o.each(c, function (e) {
                e.destroy();
            }), c = []), h.length && (o.each(h, function (e) {
                e.destroy();
            }), h = []), l = {}, v = !1, p = m = null, d.reset();
        }
        var u = o.guid(), a, f = [], l = {}, c = [], h = [], p, d, v = !1, m;
        a = {
            runtimes: t.Runtime.order,
            max_retries: 0,
            chunk_size: 0,
            multipart: !0,
            multi_selection: !0,
            file_data_name: 'file',
            flash_swf_url: 'js/Moxie.swf',
            silverlight_xap_url: 'js/Moxie.xap',
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
        }, N.call(this, e, null, !0), d = new o.QueueProgress(), o.extend(this, {
            id: u,
            uid: u,
            state: o.STOPPED,
            features: {},
            runtime: null,
            files: f,
            settings: a,
            total: d,
            init: function () {
                var e = this;
                typeof a.preinit == 'function' ? a.preinit(e) : o.each(a.preinit, function (t, n) {
                    e.bind(n, t);
                }), S.call(this);
                if (!a.browse_button || !a.url) {
                    this.trigger('Error', {
                        code: o.INIT_ERROR,
                        message: o.translate('Init error.')
                    });
                    return;
                }
                x.call(this, a, function (n) {
                    typeof a.init == 'function' ? a.init(e) : o.each(a.init, function (t, n) {
                        e.bind(n, t);
                    }), n ? (e.runtime = t.Runtime.getInfo(w()).type, e.trigger('Init', { runtime: e.runtime }), e.trigger('PostInit')) : e.trigger('Error', {
                        code: o.INIT_ERROR,
                        message: o.translate('Init error.')
                    });
                });
            },
            setOption: function (e, t) {
                N.call(this, e, t, !this.runtime);
            },
            getOption: function (e) {
                return e ? a[e] : a;
            },
            refresh: function () {
                c.length && o.each(c, function (e) {
                    e.trigger('Refresh');
                }), this.trigger('Refresh');
            },
            start: function () {
                this.state != o.STARTED && (this.state = o.STARTED, this.trigger('StateChanged'), g.call(this));
            },
            stop: function () {
                this.state != o.STOPPED && (this.state = o.STOPPED, this.trigger('StateChanged'), this.trigger('CancelUpload'));
            },
            disableBrowse: function () {
                v = arguments[0] !== n ? arguments[0] : !0, c.length && o.each(c, function (e) {
                    e.disable(v);
                }), this.trigger('DisableBrowse', v);
            },
            getFile: function (e) {
                var t;
                for (t = f.length - 1; t >= 0; t--)
                    if (f[t].id === e)
                        return f[t];
            },
            addFile: function (e, n) {
                function c(e, n) {
                    var r = [];
                    t.each(s.settings.filters, function (t, n) {
                        i[n] && r.push(function (r) {
                            i[n].call(s, t, e, function (e) {
                                r(!e);
                            });
                        });
                    }), t.inSeries(r, n);
                }
                function h(e) {
                    var i = t.typeOf(e);
                    if (e instanceof t.File) {
                        if (!e.ruid && !e.isDetached()) {
                            if (!l)
                                return !1;
                            e.ruid = l, e.connectRuntime(l);
                        }
                        h(new o.File(e));
                    } else
                        e instanceof t.Blob ? (h(e.getSource()), e.destroy()) : e instanceof o.File ? (n && (e.name = n), u.push(function (t) {
                            c(e, function (n) {
                                n || (f.push(e), a.push(e), s.trigger('FileFiltered', e)), r(t, 1);
                            });
                        })) : t.inArray(i, [
                            'file',
                            'blob'
                        ]) !== -1 ? h(new t.File(null, e)) : i === 'node' && t.typeOf(e.files) === 'filelist' ? t.each(e.files, h) : i === 'array' && (n = null, t.each(e, h));
                }
                var s = this, u = [], a = [], l;
                l = w(), h(e), u.length && t.inSeries(u, function () {
                    a.length && s.trigger('FilesAdded', a);
                });
            },
            removeFile: function (e) {
                var t = typeof e == 'string' ? e : e.id;
                for (var n = f.length - 1; n >= 0; n--)
                    if (f[n].id === t)
                        return this.splice(n, 1)[0];
            },
            splice: function (e, t) {
                var r = f.splice(e === n ? 0 : e, t === n ? f.length : t), i = !1;
                return this.state == o.STARTED && (o.each(r, function (e) {
                    if (e.status === o.UPLOADING)
                        return i = !0, !1;
                }), i && this.stop()), this.trigger('FilesRemoved', r), o.each(r, function (e) {
                    e.destroy();
                }), i && this.start(), r;
            },
            dispatchEvent: function (e) {
                var t, n, r;
                e = e.toLowerCase(), t = this.hasEventListener(e);
                if (t) {
                    t.sort(function (e, t) {
                        return t.priority - e.priority;
                    }), n = [].slice.call(arguments), n.shift(), n.unshift(this);
                    for (var i = 0; i < t.length; i++)
                        if (t[i].fn.apply(t[i].scope, n) === !1)
                            return !1;
                }
                return !0;
            },
            bind: function (e, t, n, r) {
                o.Uploader.prototype.bind.call(this, e, t, r, n);
            },
            destroy: function () {
                this.trigger('Destroy'), a = d = null, this.unbindAll();
            }
        });
    }, o.Uploader.prototype = t.EventTarget.instance, o.File = function () {
        function n(n) {
            o.extend(this, {
                id: o.guid(),
                name: n.name || n.fileName,
                type: n.type || '',
                size: n.size || n.fileSize,
                origSize: n.size || n.fileSize,
                loaded: 0,
                percent: 0,
                status: o.QUEUED,
                lastModifiedDate: n.lastModifiedDate || new Date().toLocaleString(),
                getNative: function () {
                    var e = this.getSource().getSource();
                    return t.inArray(t.typeOf(e), [
                        'blob',
                        'file'
                    ]) !== -1 ? e : null;
                },
                getSource: function () {
                    return e[this.id] ? e[this.id] : null;
                },
                destroy: function () {
                    var t = this.getSource();
                    t && (t.destroy(), delete e[this.id]);
                }
            }), e[this.id] = n;
        }
        var e = {};
        return n;
    }(), o.QueueProgress = function () {
        var e = this;
        e.size = 0, e.loaded = 0, e.uploaded = 0, e.failed = 0, e.queued = 0, e.percent = 0, e.bytesPerSec = 0, e.reset = function () {
            e.size = e.loaded = e.uploaded = e.failed = e.queued = e.percent = e.bytesPerSec = 0;
        };
    }, e.plupload = o;
}(window, mOxie));
define('fileupload', [], function () {
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
define('header', [
    'jquery',
    'encryption'
], function ($, Encryption) {
    var Pathurl = {
        login: Encryption.Encryption('../index.php/api/login'),
        sigin: Encryption.Encryption('../index.php/api/signup'),
        Linklogin: '',
        username: Encryption.Encryption('../index.php/api/verifySmsCode'),
        CF_url: Encryption.Encryption('../index.php/api/sendSmsCode'),
        upload: '',
        logout: Encryption.Encryption('../index.php/api/logout')
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
                            console.log(data.success);
                            window.location.href = '/';
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
                    console.log('ok');
                    $.ajax({
                        url: Pathurl.logout,
                        type: 'GET',
                        dataType: 'JSON',
                        contentType: 'text/html',
                        success: function success(data) {
                            if (data.success)
                                window.location.href = 'http://www.99dayin.com';
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
var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor)
                descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function (Constructor, protoProps, staticProps) {
        if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
            defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
    }
}
require.config({
    baseUrl: './js',
    paths: {
        'jquery': 'lib/jQuery',
        'iscroll': 'lib/iscroll',
        'modal': 'lib/jquery.simplemodal',
        'prompt': 'entry/function/prompt',
        'utility': 'entry/utility/utility',
        'header': 'entry/header',
        'fileupload': 'lib/plupload.full.min',
        'md5': 'lib/spark-md5.min',
        'encryption': 'entry/function/encryption',
        'validate': 'entry/function/validate',
        'tpl': 'entry/function/template'
    }
});
'use strict';
require([
    'jquery',
    'iscroll',
    'prompt',
    'encryption',
    'md5',
    'tpl',
    'validate',
    'modal',
    'fileupload',
    'utility',
    'header'
], function ($, iscroll, prompt, Encryption, md5, tpl, validate, modal) {
    tpl = tpl.tpl;
    var validate = validate.val;
    function moveBlock($target, location) {
        $target.css('transform', 'translateX(' + location + 'px)');
    }
    function detectShow($target, close) {
        if ($target.css('display') !== 'block') {
            $.modal.close();
            openModal($target, close);
        }
    }
    function changeClass($target, classname) {
        $target.addClass(classname).siblings().removeClass(classname);
    }
    function toggleContent($first, $second) {
        $first.show();
        $second.hide();
    }
    prompt = new prompt.Prompt({ prompt: $('.prompt') });
    var parseClass = function () {
        function parseClass() {
            _classCallCheck(this, parseClass);
        }
        _createClass(parseClass, [{
                key: 'getClass',
                value: function getClass(name) {
                    var className = undefined;
                    switch (name) {
                    case 'doc':
                        className = 'logo-word';
                        break;
                    case 'docx':
                        className = 'logo-word';
                        break;
                    case 'ppt':
                        className = 'logo-ppt';
                        break;
                    case 'pdf':
                        className = 'logo-pdf';
                        break;
                    case 'xls':
                        className = 'logo-excel';
                        break;
                    default:
                        className = 'logo-ppt';
                    }
                    return className;
                }
            }]);
        return parseClass;
    }();
    var getClass = new parseClass();
    function parseSuffix(file) {
        var reg = arguments.length <= 1 || arguments[1] === undefined ? /[.](doc|docx|ppt|pdf|pptx|word)$/ : arguments[1];
        if (reg.test(file.name)) {
            return true;
        } else {
            return false;
        }
    }
    function sendSSE(_ref) {
        var url = _ref.url;
        var _ref$message = _ref.message;
        var message = _ref$message === undefined ? function () {
        } : _ref$message;
        var _ref$open = _ref.open;
        var open = _ref$open === undefined ? function () {
        } : _ref$open;
        var _ref$error = _ref.error;
        var error = _ref$error === undefined ? function () {
        } : _ref$error;
        var source = undefined;
        if (!!window.EventSource) {
            source = new EventSource(url);
        } else {
        }
        source.addEventListener('open', open, false);
        source.addEventListener('message', function (e) {
            message(e);
        }, false);
        source.addEventListener('error', error, false);
        return source;
    }
    var SSE = {
        flag: undefined,
        source: undefined,
        message: function message(event) {
            SSE.flag = event.data;
            if (SSE.flag == 0) {
                SSE.close();
            }
        },
        init: function init() {
            this.source = sendSSE({
                url: Pathurl.SSEurl,
                message: SSE.message
            });
        },
        close: function close() {
            this.source.close();
        }
    };
    function refresh() {
        Iscroll.forEach(function (val) {
            setTimeout(function () {
                val.refresh();
            }, 100);
        });
    }
    $.ajaxSetup({ dataType: 'json' });
    var Pathurl = {
        getToken: Encryption.Encryption('../index.php/api/getUploadToken'),
        getOfficial: '',
        pay: '',
        search: '',
        confirm: Encryption.Encryption('../index.php/api/uploadACK'),
        remove: Encryption.Encryption('../index.php/api/deleteCartItem'),
        confirmHash: Encryption.Encryption('../index.php/api/confirmMD5'),
        SSEurl: Encryption.Encryption('../index.php/api/getProgress')
    };
    $('.fn-choice').on('click', function (e) {
        var $target = $(e.target), _id = $target.attr('id'), $block = $('.color-block'), $base = $('#choose-base'), $file = $('#file-content');
        if (_id === 'upolad-files') {
            changeClass($target, 'active');
            moveBlock($block, 0);
            toggleContent($file, $base);
        } else if (_id === 'base-choose') {
            changeClass($target, 'active');
            moveBlock($block, 169);
            toggleContent($base, $file);
        }
    });
    $('.shopping-btn').on('click', function (event) {
        var $target = $(event.target), _id = $target.attr('id'), $scroll = $('.scroll-frame');
        $scroll.show();
        if (_id === 'show-shopping') {
            prompt.showInfo('正在跳转~');
            moveBlock($scroll, 0);
        } else if (_id === 'show-store') {
            moveBlock($scroll, -141);
        }
    });
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
    var Iscroll = bindScroll($('.container'));
    var uploader = new plupload.Uploader({
        runtimes: 'html5,flash,silverlight,html4',
        browse_button: 'container-upload',
        'success_action_status': '200',
        container: document.getElementById('file-content'),
        url: 'http://99dayin.oss-cn-hangzhou.aliyuncs.com',
        filters: {
            mime_types: [{
                    title: 'document',
                    extensions: 'doc,ppt,pptx,docx,pdf'
                }],
            max_file_size: '100mb',
            prevent_duplicates: true
        },
        init: {
            FileFiltered: function FileFiltered(up, file) {
                upload.fileCheck(up, {
                    file: file,
                    native: file.getNative()
                });
            },
            UploadProgress: function UploadProgress(up, file) {
                prompt.showInfo(file.percent + '%');
            },
            FileUploaded: function FileUploaded(up, file, info) {
                if (info.status == 200) {
                    upload.addFileToken(file);
                    prompt.changeInfo('文件上传成功~');
                } else {
                    prompt.changeInfo('上传失败!');
                }
            }
        }
    });
    uploader.init();
    var upload = {
        shopping: $('.files-content'),
        addBtn: $('.article-content'),
        delete_btn: $('#scroller'),
        content_a: $('#container-upload'),
        flag: 0,
        init: function init() {
            var _this = this;
            this.addBtn.on('click', function (e) {
                var $target = $(e.target);
                if ($target.hasClass('add-btn')) {
                    var data_area = $target.attr('data-area'), data_mark = $target.attr('data-mark'), $parent = $target.parents('.article-item'), li = document.createElement('li');
                    $.ajax({
                        url: Pathurl,
                        type: 'POST',
                        dataType: 'JSON',
                        contentType: 'application/json',
                        data: JSON.stringify({ fileMD5: data_mark })
                    }).then(function (data) {
                        if (data.success) {
                            Base.alreadyAdd($target);
                            li.innerHTML = $parent.html().replace('already-add', 'logo-error');
                            _this.shopping.append(li);
                            _this.changeInputText(1);
                            $parent.detach();
                            refresh();
                        } else {
                            prompt.changeInfo(data.msg);
                        }
                    });
                }
            });
            this.delete_btn.on('click', function (e) {
                var $target = $(e.target);
                if ($target.hasClass('logo-error')) {
                    _this.deleteItem($target);
                }
            });
            this.content_a.on('click', function (e) {
                try {
                    SSE.close();
                } catch (err) {
                }
            });
        },
        fillUpload: function fillUpload(up, data) {
            var dir = data.dir;
            var signature = data.signature;
            var accessid = data.accessid;
            var policy = data.policy;
            var host = data.host;
            var callback = data.callback;
            var new_multipart_params = {
                'key': dir + '${filename}',
                'policy': policy,
                'OSSAccessKeyId': accessid,
                'success_action_status': '200',
                'callback': callback,
                'signature': signature
            };
            up.setOption({
                'url': host,
                'multipart_params': new_multipart_params
            });
            up.start();
        },
        getAjax: function getAjax(up) {
            prompt.showInfo('文件上传中~');
            var _this = this;
            $.ajax({
                url: Pathurl.getToken,
                type: 'POST',
                contentType: 'application/json',
                dataType: 'json'
            }).done(function (data) {
                _this.fillUpload(up, data);
            });
        },
        changeInputText: function changeInputText(amount) {
            var num = Number(this.content_a.attr('data-num'));
            console.log(Number(num + amount) < 0);
            if (Number(num + amount) < 0);
            else
                this.content_a.attr('data-num', num + amount);
        },
        addFiles: function addFiles(file) {
            var file_date = new Date(), date = file_date.getFullYear() + '/' + (file_date.getMonth() + 1) + '/' + file_date.getDate(), size = plupload.formatSize(file.size), name = file.name, mark = file.hash, index = name.lastIndexOf('.'), li = document.createElement('li'), className = getClass.getClass(name.substring(index + 1));
            li.innerHTML = '<i class="file-logo ' + className + '"></i>' + '<p class="file-header">' + name.substring(0, index) + '</p>' + '<p>上传时间:<span class="upload-time">' + date + '</span>' + '大小:<span>' + String(size).toUpperCase() + '</span></p>' + '<i class="logo-error" data-mark=' + mark + ' data-area=self></i>';
            $(li).attr('data-type', className);
            this.shopping.append(li);
            Iscroll.forEach(function (val) {
                setTimeout(function () {
                    val.refresh();
                }, 100);
            });
            this.changeInputText(1);
            prompt.changeInfo('文件上传成功~');
        },
        addFileToken: function addFileToken(file) {
            $.ajax({
                url: Pathurl.confirm,
                type: 'POST',
                dataType: 'JSON',
                contentType: 'application/json',
                data: JSON.stringify({
                    filename: encodeURI(file.name),
                    fileMD5: file.hash
                })
            }).then(function (data) {
                if (data.success)
                    upload.addFiles(file);
                else
                    prompt.changeInfo('对不起您的浏览器抽风了');
            });
        },
        deleteItem: function deleteItem($target) {
            var li = $target.parents('li'), mark = $target.attr('data-mark'), _this = this;
            $.ajax({
                url: Pathurl.remove,
                type: 'POST',
                dataType: 'json',
                contentType: 'application/json',
                data: JSON.stringify({ fileMD5: mark })
            }).then(function (data) {
                if (data.success) {
                    prompt.changeInfo('删除成功!');
                    error.removeLi(li);
                    _this.changeInputText(-1);
                } else {
                    prompt.changeInfo('删除失败!');
                }
            });
        },
        fileCheck: function fileCheck(up, _ref2) {
            var file = _ref2.file;
            var native = _ref2.native;
            var reader = new FileReader(), blobSlice = File.prototype.mozSlice || File.prototype.webkitSlice || File.prototype.slice, chunkSize = 2097152, chunks = Math.ceil(native.size / chunkSize), currentChunk = 0, spark = new md5(), start, end;
            reader.onload = function (e) {
                spark.appendBinary(e.target.result);
                currentChunk++;
                prompt.detactInfo(Math.ceil(100 * currentChunk / chunks));
                if (currentChunk < chunks) {
                    start = currentChunk * chunkSize, end = start + chunkSize >= native.size ? native.size : start + chunkSize;
                    reader.readAsBinaryString(blobSlice.call(native, start, end));
                } else {
                    upload.confirm(up, spark.end(), file);
                }
            };
            start = currentChunk * chunkSize, end = start + chunkSize >= native.size ? native.size : start + chunkSize;
            reader.readAsBinaryString(blobSlice.call(native, start, end));
        },
        confirm: function confirm(up, hash, file) {
            file.hash = hash;
            if (this.repeatFile(hash)) {
                prompt.changeInfo('文件已存在!');
            } else {
                console.log('good');
                var sign = parseSuffix(file.getNative());
                if (sign) {
                    $.ajax({
                        url: Pathurl.confirmHash,
                        type: 'POST',
                        dataType: 'json',
                        contentType: 'application/json',
                        data: JSON.stringify({ fileMD5: hash })
                    }).then(function (data) {
                        if (data.success) {
                            up.removeFile(file);
                            prompt.changeInfo('上传成功~');
                            upload.addFileToken(file);
                        } else {
                            upload.getAjax(up);
                        }
                    });
                } else {
                    up.removeFile(file);
                }
            }
        },
        repeatFile: function repeatFile(hash) {
            var i = $('#scroller .logo-error');
            console.dir(i);
            for (var j = 0; j < i.length; j++) {
                if (i[j].dataset.mark == hash) {
                    return true;
                }
            }
            return false;
        }
    };
    upload.init();
    var error = {
        showError: function showError($target) {
            $target.find('.logo-error').show();
        },
        hideError: function hideError($target) {
            $target.find('.logo-error').hide();
        },
        removeLi: function removeLi($target) {
            $target.detach();
            refresh();
        }
    };
    $('.files-content').on({
        mouseover: function mouseover(e) {
            var $target = e.target.tagName === 'LI' ? $(e.target) : $(e.target).parents('li');
            error.showError($target);
        },
        mouseout: function mouseout(e) {
            var $target = e.target.tagName === 'LI' ? $(e.target) : $(e.target).parents('li');
            error.hideError($target);
        }
    });
    var shopping = {
        arrow: '',
        store: $('#store'),
        downArrow: function downArrow() {
            this.arrow.removeClass('shopping-uparrow').addClass('shopping-downarrow');
            this.moveUpStore();
        },
        upArrow: function upArrow() {
            this.arrow.removeClass('shopping-downarrow').addClass('shopping-uparrow');
            this.moveDownStore();
        },
        moveUpStore: function moveUpStore() {
            this.store.css('transform', 'translateY(' + -347 + 'px)');
        },
        moveDownStore: function moveDownStore() {
            this.store.css('transform', 'translateY(' + 0 + 'px)');
        },
        judgeDir: function judgeDir($arrow) {
            this.arrow = $arrow;
            var _arrow = $arrow;
            if (_arrow.hasClass('shopping-uparrow')) {
                this.downArrow();
            } else if (_arrow.hasClass('shopping-downarrow')) {
                this.upArrow();
            }
        }
    };
    $('#shopping-arrow').on('click', function () {
        shopping.judgeDir($(this));
    });
    var Base = {
        content: $('#article-content'),
        changeGroup: $('#another-group'),
        articles: $('.articles'),
        alreadyAdd: function alreadyAdd($target) {
            $target.removeClass('add-btn').addClass('already-add');
        },
        addBtn: function addBtn($target) {
            $target.removeClass('add-btn').addClass('already-add');
        },
        changeContent: function changeContent(order) {
            var translateX = 0;
            switch (order) {
            case 1:
                translateX = 0;
                break;
            case 2:
                translateX = -821.84;
                break;
            case 3:
                translateX = -1643.968;
                break;
            }
            moveBlock(this.content, translateX);
        },
        toggleActive: function toggleActive(e) {
            var $target = $(e.target), _order;
            if ($target[0].tagName === 'I') {
                _order = Number($target.attr('data-order'));
                this.changeContent(_order);
                changeClass($target, 'active');
            }
        },
        addItem: function addItem(article, file) {
            console.log(article);
            console.log(file);
            var item = document.createElement('div');
            var name = file.name;
            var date = file.date;
            var size = file.size;
            var area = file.area;
            var mark = file.mark;
            var type = file.type;
            var className = getClass.getClass(type);
            html = '<i class="file-logo ' + className + '"></i>' + '<p class="file-header">' + name + '</p>' + '<p>上传时间:<span class="upload-time">' + date + '</span>' + '大小:<span>' + size + '</span></p>' + '<i class="add-btn" data-mark=' + mark + '" data-area="' + area + '"></i>';
            item.innerHTML = html;
            $(item).addClass('article-item');
            article.append(item);
        },
        repeatAdd: function repeatAdd(files, unit) {
            var start = 0;
            for (var count = 0; count < 3; count++) {
                this.articles.eq(count)[0].innerHTML = '';
                for (var i = start; i < start + unit; i++) {
                    this.addItem(this.articles.eq(count), files[i]);
                }
                start += unit;
            }
        },
        getData: function getData() {
            $.ajax({
                url: Pathurl.getOfficial,
                type: 'POST',
                dataType: 'JSON'
            }).then(function (data) {
                if (data.success) {
                    var files = data.files, len = files.length, unit = Math.floor(len / 3);
                    _this.repeatAdd(files, unit);
                }
            });
        },
        init: function init() {
            this.getData();
            var _this = this;
            this.changeGroup.on('click', function () {
                _this.getData();
            });
        }
    };
    Base.init();
    $('#base-header').on('click', function (e) {
        var $target = $(e.target);
        if ($target[0].tagName === 'BUTTON') {
            changeClass($target, 'active');
        }
    });
    $('#pagination').on({
        mouseover: function mouseover(e) {
            Base.toggleActive(e);
        },
        mouseout: function mouseout(e) {
            Base.toggleActive(e);
        }
    });
    var Pay = {
        pay_btn: $('#show-shopping'),
        flag: 0,
        init: function init() {
            this.pay_btn.on('click', function () {
                var mark = [], goods = $('#scroller').find('.logo-error'), time1 = undefined, time2 = undefined;
                goods.each(function (index, val) {
                    mark.push($(val).attr('data-mark'));
                });
                var len = mark.length;
                if (len === 0) {
                    prompt.changeInfo('购物车为0,不能结算!');
                } else if (len > 0) {
                    new Promise(function (res, rej) {
                        SSE.init();
                        res();
                    }).then(function () {
                        if (Pay.flag > 0)
                            SSE.close();
                        Pay.flag++;
                        return undefined;
                    }).then(function () {
                        if (SSE.flag == 0) {
                            window.location.href = '../user/confirm';
                        } else if (SSE.flag === undefined) {
                            clearInterval(time1);
                            time1 = setInterval(function () {
                                if (SSE.flag == 0) {
                                    clearInterval(time1);
                                    window.location.href = '../user/confirm';
                                }
                            }, 100);
                        } else if (SSE.flag != 0) {
                            clearInterval(time2);
                            prompt.goPay(SSE.flag);
                        }
                    });
                }
            });
        }
    };
    Pay.init();
    var myBase = {
        leftBar: $('.leftBar'),
        rightFile: $('.rightFile'),
        apply: $('.apply'),
        code: $('.code'),
        init: function init() {
            var _this2 = this;
            var leftScroll, rightScroll;
            setTimeout(function () {
                leftScroll = bindScroll(_this2.leftBar);
                rightScroll = bindScroll(_this2.rightFile);
            }, 3000);
            this.apply.on('click', function () {
                var _code = _this2.code.val().trim(), isEmpty = validate({
                        value: _code,
                        type: 'isEmpty'
                    }), isCode = validate({
                        value: _code,
                        type: 'isCode'
                    });
                if (!isEmpty.flag) {
                    prompt.changeInfo(isEmpty.instructions);
                    return;
                }
                if (!isCode.flag) {
                    prompt.changeInfo(isCode.instructions);
                    return;
                }
                $.ajax({
                    url: Pathurl.code,
                    type: 'POST',
                    dataType: 'JSON',
                    contentType: 'application/json',
                    data: { code: _code }
                }).then(function (data) {
                });
            });
        }
    };
    myBase.init();
});
define('../js/entry/upload', [
    'jquery',
    'iscroll',
    'prompt',
    'encryption',
    'md5',
    'tpl',
    'validate',
    'modal',
    'fileupload',
    'utility',
    'header'
], function () {
    return;
});