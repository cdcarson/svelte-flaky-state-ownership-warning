import {
  l as ee,
  h as S,
  m as z,
  s as H,
  a as B,
  p as ue,
  n as le,
  d as ie,
  b as J,
  t as re,
  c as C,
  e as w,
  f as ve
} from './disclose-version.IlqvmEry.js';
import {
  b as oe,
  f as _e,
  H as de,
  r as ce,
  K as pe,
  a as ae,
  c as te,
  p as ge,
  L as me,
  I as be,
  u as Ee,
  M as N,
  g as U,
  N as Y,
  O,
  m as xe,
  s as W,
  P as ye,
  Q as Ae,
  J as Te,
  R as ke,
  i as Se,
  S as he,
  T as Ce,
  V as Ne,
  t as ne,
  n as Ie,
  q as Le,
  W as X
} from './runtime.B7m_t_lM.js';
let M = null;
function we(e, r) {
  return r;
}
function De(e, r, a) {
  for (var t = [], f = e.length, v = 0; v < f; v++) ye(e[v].e, t, !0);
  if (f > 0 && t.length === 0 && r !== null) {
    var i = r.parentNode;
    (i.textContent = ''), i.append(r);
  }
  Ae(t, () => {
    for (var _ = 0; _ < f; _++) Te(e[_].e);
    a !== void 0 && a();
  });
}
function Re(e, r, a, t, f, v = null) {
  var i = { flags: r, items: new Map(), next: null };
  {
    var _ = e;
    e = S ? z(_.firstChild) : _.appendChild(ee());
  }
  var c = null;
  oe(() => {
    var p = a(),
      m = _e(p) ? p : p == null ? [] : Array.from(p),
      n = m.length,
      d = i.flags;
    d & O && !Se(m) && !(he in m) && ((d ^= O), d & Ce && !(d & N) && (d ^= N));
    let o = !1;
    if (S) {
      var b = e.data === de;
      b !== (n === 0) && (ce(B), H(!1), (o = !0));
    }
    if (S) {
      for (var l = B[0], E = i, x, g = 0; g < n; g++) {
        if (l.nodeType !== 8 || l.data !== pe) {
          (o = !0), H(!1);
          break;
        }
        var s = l;
        l = z(l);
        var u = m[g],
          h = t(u, g);
        (x = se(s, l, E, null, u, h, g, f, d)),
          i.items.set(h, x),
          (l = l.nextSibling),
          (E = x);
      }
      if (n > 0)
        for (; l !== e; ) {
          var I = l.nextSibling;
          l.remove(), (l = I);
        }
    }
    S || He(m, i, e, f, d, t),
      v !== null &&
        (n === 0
          ? c
            ? ae(c)
            : (c = te(() => v(e)))
          : c !== null &&
            ge(c, () => {
              c = null;
            })),
      o && H(!0);
  });
}
function He(e, r, a, t, f, v) {
  var V, K, Q, q;
  var i = (f & ke) !== 0,
    _ = (f & (N | Y)) !== 0,
    c = e.length,
    p = r.items,
    m = r.next,
    n = m,
    d = new Set(),
    o = r,
    b = new Set(),
    l = [],
    E = [],
    x,
    g,
    s,
    u;
  if (i)
    for (u = 0; u < c; u += 1)
      (x = e[u]),
        (g = v(x, u)),
        (s = p.get(g)),
        s !== void 0 && ((V = s.a) == null || V.measure(), b.add(s));
  for (u = 0; u < c; u += 1) {
    if (((x = e[u]), (g = v(x, u)), (s = p.get(g)), s === void 0)) {
      var h = ue(ee()),
        I = n ? n.o : a;
      I.before(h),
        (o = se(h, I, o, o.next, x, g, u, t, f)),
        p.set(g, o),
        (l = []),
        (E = []),
        (n = o.next);
      continue;
    }
    if (
      (_ && Me(s, x, u, f),
      s.e.f & me &&
        (ae(s.e), i && ((K = s.a) == null || K.unfix(), b.delete(s))),
      s !== n)
    ) {
      if (d.has(s)) {
        if (l.length < E.length) {
          var L = E[0],
            y;
          o = L.prev;
          var P = l[0],
            D = l[l.length - 1];
          for (y = 0; y < l.length; y += 1) F(l[y], L, a);
          for (y = 0; y < E.length; y += 1) d.delete(E[y]);
          T(P.prev, D.next),
            T(o, P),
            T(D, L),
            (n = L),
            (o = D),
            (u -= 1),
            (l = []),
            (E = []);
        } else
          d.delete(s),
            F(s, n, a),
            T(s.prev, s.next),
            T(s, o.next),
            T(o, s),
            (o = s);
        continue;
      }
      for (l = [], E = []; n !== null && n.k !== g; )
        d.add(n), E.push(n), (n = n.next);
      if (n === null) continue;
      s = n;
    }
    l.push(s), (o = s), (n = s.next);
  }
  const A = Array.from(d);
  for (; n; ) A.push(n), (n = n.next);
  var fe = f & Ne && c === 0 ? a : null;
  if (i) {
    for (u = 0; u < A.length; u += 1) (Q = A[u].a) == null || Q.measure();
    for (u = 0; u < A.length; u += 1) (q = A[u].a) == null || q.fix();
  }
  De(A, fe, () => {
    for (var k = 0; k < A.length; k += 1) {
      var R = A[k];
      p.delete(R.k), T(R.prev, R.next);
    }
  }),
    i &&
      be(() => {
        Ee(() => {
          var k;
          for (s of b) (k = s.a) == null || k.apply();
        });
      });
}
function Me(e, r, a, t) {
  t & N && U(e.v, r), t & Y ? U(e.i, a) : (e.i = a);
}
function se(e, r, a, t, f, v, i, _, c) {
  var p = M;
  try {
    var m = (c & N) !== 0,
      n = (c & O) === 0,
      d = m ? (n ? xe(f) : W(f)) : f,
      o = c & Y ? W(i) : i,
      b = { i: o, v: d, k: v, a: null, e: null, o: e, prev: a, next: t };
    return (
      (a.next = b),
      t !== null && (t.prev = b),
      (M = b),
      (b.e = te(() => _(r, d, o))),
      b
    );
  } finally {
    M = p;
  }
}
function F(e, r, a) {
  for (var t = e.next ? e.next.o : a, f = r ? r.o : a, v = e.o; v !== t; ) {
    var i = v.nextSibling;
    f.before(v), (v = i);
  }
}
function T(e, r) {
  (e.next = r), r !== null && (r.prev = e);
}
function qe(e) {
  S && (G(e, 'value', null), G(e, 'checked', null));
}
function G(e, r, a) {
  a = a == null ? null : a + '';
  var t = e.__attributes ?? (e.__attributes = {});
  (S &&
    ((t[r] = e.getAttribute(r)),
    r === 'src' || r === 'href' || r === 'srcset')) ||
    (t[r] !== (t[r] = a) &&
      (a === null ? e.removeAttribute(r) : e.setAttribute(r, a)));
}
let Z = !1;
function Oe(e, r, a, t = a) {
  e.addEventListener(r, a);
  const f = e.__on_r;
  f
    ? (e.__on_r = () => {
        f(), t();
      })
    : (e.__on_r = t),
    Z ||
      ((Z = !0),
      document.addEventListener(
        'reset',
        (v) => {
          Promise.resolve().then(() => {
            var i;
            if (!v.defaultPrevented)
              for (const _ of v.target.elements)
                (i = _.__on_r) == null || i.call(_);
          });
        },
        { capture: !0 }
      ));
}
function ze(e, r, a) {
  Oe(e, 'input', () => {
    a(j(e) ? $(e.value) : e.value);
  }),
    ne(() => {
      var t = r();
      (e.__value = t),
        !(j(e) && t === $(e.value)) &&
          ((e.type === 'date' && !t && !e.value) || (e.value = le(t)));
    });
}
function j(e) {
  var r = e.type;
  return r === 'number' || r === 'range';
}
function $(e) {
  return e === '' ? null : +e;
}
const Ye = (e, r) => {
  r.formData.luckyNumbers.push(Math.ceil(Math.random() * 1e4));
};
var Pe = re(
    '<li class="flex items-center justify-between gap-2 p-2 even:bg-gray-100"><div class="text-2xl"> </div> <button>Remove</button></li>'
  ),
  Ve = re(
    '<div class="grid gap-4"><div class="flex justify-between gap-2">Lucky Numbers <button>Add</button></div> <ul></ul></div>'
  );
function Be(e, r) {
  Ie(r, !0);
  const a = (_) => {
    r.formData.luckyNumbers.splice(_, 1);
  };
  var t = Ve(),
    f = w(t),
    v = C(w(f));
  v.__click = [Ye, r];
  var i = C(C(f, !0));
  Re(
    i,
    73,
    () => r.formData.luckyNumbers,
    we,
    (_, c, p) => {
      var m = Pe(),
        n = w(m),
        d = w(n),
        o = C(C(n, !0));
      (o.__click = () => a(X(p))), ne(() => ve(d, X(c))), J(_, m);
    }
  ),
    J(e, t),
    Le();
}
ie(['click']);
export { Be as L, ze as b, qe as r };
