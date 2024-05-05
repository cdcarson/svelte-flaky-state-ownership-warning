import {
  K as x,
  X as j,
  Y as z,
  h as E,
  e as A,
  f as C,
  b as F,
  Z as R,
  _ as G,
  $ as K,
  a0 as W,
  a1 as D,
  c as X,
  n as Z,
  q as J,
  z as Q,
  v as ee,
  k as ne,
  a2 as I,
  a3 as te
} from './runtime.B7m_t_lM.js';
function re() {
  console.warn('hydration_mismatch');
}
let d = !1;
function N(n) {
  d = n;
}
let f = null;
function M(n) {
  f = n;
}
function w(n) {
  if (n.nodeType !== 8) return n;
  var e = n;
  if ((e == null ? void 0 : e.data) !== x) return n;
  for (var t = [], r = 0; (e = e.nextSibling) !== null; ) {
    if (e.nodeType === 8) {
      var o = e.data;
      if (o === x) r += 1;
      else if (o[0] === j) {
        if (r === 0) return (f = t), e;
        r -= 1;
      }
    }
    t.push(e);
  }
  z();
}
var h, b, L, Y, V, $, q;
function ae() {
  h === void 0 &&
    ((h = Node.prototype),
    (b = Element.prototype),
    (L = Text.prototype),
    h.appendChild,
    (Y = h.cloneNode),
    (b.__click = void 0),
    (L.__nodeValue = ' '),
    (b.__className = ''),
    (b.__attributes = null),
    (V = E(h, 'firstChild').get),
    ($ = E(h, 'nextSibling').get),
    (q = E(h, 'textContent').set),
    E(b, 'className').set);
}
function oe(n, e) {
  return Y.call(n, e);
}
function m() {
  return document.createTextNode('');
}
function _e(n) {
  const e = V.call(n);
  return d ? (e === null ? n.appendChild(m()) : w(e)) : e;
}
function pe(n, e) {
  if (!d) return V.call(n);
  const t = n[0];
  return w(t);
}
function he(n, e = !1) {
  const t = $.call(n);
  if (!d) return t;
  if (e && (t == null ? void 0 : t.nodeType) !== 3) {
    const r = m();
    if (t) {
      const o = f.indexOf(t);
      f.splice(o, 0, r), t.before(r);
    } else f.push(r);
    return r;
  }
  return w(t);
}
function ie(n) {
  q.call(n, '');
}
function ye(n) {
  for (var e = 0; e < n.length; e++) B.add(n[e]);
  for (var t of k) t(n);
}
function P(n, e) {
  var p;
  var t = n.ownerDocument,
    r = e.type,
    o = ((p = e.composedPath) == null ? void 0 : p.call(e)) || [],
    a = o[0] || e.target;
  e.target !== a && A(e, 'target', { configurable: !0, value: a });
  var g = 0,
    c = e.__root;
  if (c) {
    var y = o.indexOf(c);
    if (y !== -1 && (n === document || n === window)) {
      e.__root = n;
      return;
    }
    var T = o.indexOf(n);
    if (T === -1) return;
    y <= T && (g = y + 1);
  }
  (a = o[g] || e.target),
    A(e, 'currentTarget', {
      configurable: !0,
      get() {
        return a || t;
      }
    });
  function v(s) {
    a = s;
    var u = s.parentNode || s.host || null;
    try {
      var l = s['__' + r];
      if (l !== void 0 && !s.disabled)
        if (C(l)) {
          var [_, ...U] = l;
          _.apply(s, [e, ...U]);
        } else l.call(s, e);
    } finally {
      !e.cancelBubble && u !== n && u !== null && s !== n && v(u);
    }
  }
  try {
    v(a);
  } finally {
    (e.__root = n), (a = n);
  }
}
let i;
function se() {
  i = void 0;
}
function ve(n) {
  let e = null,
    t = d;
  var r;
  if (d) {
    for (
      e = f, i === void 0 && (i = document.head.firstChild);
      i.nodeType !== 8 || i.data !== x;

    )
      i = i.nextSibling;
    (i = w(i)), (i = i.nextSibling);
  } else r = document.head.appendChild(m());
  try {
    F(() => n(r));
  } finally {
    t && M(e);
  }
}
const B = new Set(),
  k = new Set();
function me(n, e) {
  const t = n.__nodeValue,
    r = ue(e);
  d && n.nodeValue === r
    ? (n.__nodeValue = r)
    : t !== r && ((n.nodeValue = r), (n.__nodeValue = r));
}
function ge(n, e, t, r) {
  e === void 0 || e(n, t);
}
function ue(n) {
  return typeof n == 'string' ? n : n == null ? '' : n + '';
}
function fe(n, e) {
  const t = e.anchor ?? e.target.appendChild(m());
  return R(() => H(n, { ...e, anchor: t }), !1);
}
function be(n, e) {
  const t = e.target,
    r = f;
  let o = !1;
  try {
    return R(() => {
      N(!0);
      for (var a = t.firstChild; a && (a.nodeType !== 8 || a.data !== x); )
        a = a.nextSibling;
      a || G();
      const g = w(a),
        c = H(n, { ...e, anchor: g });
      return N(!1), (o = !0), c;
    }, !1);
  } catch (a) {
    if (!o && e.recover !== !1) return re(), ie(t), N(!1), fe(n, e);
    throw a;
  } finally {
    N(!!r), M(r), se();
  }
}
function H(
  n,
  { target: e, anchor: t, props: r = {}, events: o, context: a, intro: g = !1 }
) {
  ae();
  const c = new Set(),
    y = P.bind(null, e),
    T = P.bind(null, document),
    v = (u) => {
      for (let l = 0; l < u.length; l++) {
        const _ = u[l];
        c.has(_) ||
          (c.add(_),
          e.addEventListener(_, y, D.includes(_) ? { passive: !0 } : void 0),
          document.addEventListener(
            _,
            T,
            D.includes(_) ? { passive: !0 } : void 0
          ));
      }
    };
  v(K(B)), k.add(v);
  let p;
  const s = W(
    () => (
      X(() => {
        if (a) {
          Z({});
          var u = Q;
          u.c = a;
        }
        o && (r.$$events = o), (p = n(t, r) || {}), a && J();
      }),
      () => {
        for (const u of c) e.removeEventListener(u, y);
        k.delete(v), O.delete(p);
      }
    )
  );
  return O.set(p, s), p;
}
let O = new WeakMap();
function we(n) {
  const e = O.get(n);
  e == null || e();
}
function S(n, e = ne) {
  var t = e.dom;
  return (
    t === null
      ? (e.dom = n)
      : (C(t) || (t = e.dom = [t]), C(n) ? t.push(...n) : t.push(n)),
    n
  );
}
function de(n, e) {
  var t = (e & I) !== 0,
    r = (e & te) !== 0,
    o;
  return () => {
    if (d) return S(t ? f : f[0]);
    o || ((o = ee(n)), t || (o = o.firstChild));
    var a = r ? document.importNode(o, !0) : oe(o, !0);
    return S(t ? [...a.childNodes] : a), a;
  };
}
function Te(n) {
  if (!d) return S(m());
  var e = f[0];
  return e || n.before((e = m())), S(e);
}
const Ee = de('<!>', I);
function Ne(n, e) {
  d || n.before(e);
}
const ce = '5';
typeof window < 'u' &&
  (window.__svelte || (window.__svelte = { v: new Set() })).v.add(ce);
export {
  f as a,
  Ne as b,
  he as c,
  ye as d,
  _e as e,
  me as f,
  pe as g,
  d as h,
  ve as i,
  Ee as j,
  ge as k,
  m as l,
  w as m,
  ue as n,
  be as o,
  S as p,
  fe as q,
  Te as r,
  N as s,
  de as t,
  we as u
};
