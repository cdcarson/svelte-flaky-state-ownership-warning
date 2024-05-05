import {
  b as x,
  t as y,
  f as c,
  e as i,
  g as I,
  c as f
} from '../chunks/disclose-version.IlqvmEry.js';
import {
  x as k,
  y as l,
  z as A,
  u as d,
  A as E,
  B as b,
  j as m,
  C as N,
  k as C,
  D,
  F as L,
  G as u,
  I as U,
  U as p,
  g as _,
  m as j,
  n as q,
  t as w,
  q as z
} from '../chunks/runtime.B7m_t_lM.js';
import { s as B } from '../chunks/entry.e3IAyjah.js';
function F() {
  const e = A,
    s = e.l.u;
  s &&
    (s.b.length &&
      k(() => {
        var n;
        g(e), b(s.b);
        const t = (n = C) == null ? void 0 : n.parent;
        t != null && !(t.f & D) && L(t);
      }),
    l(() => {
      const t = d(() => s.m.map(E));
      return () => {
        for (const n of t) typeof n == 'function' && n();
      };
    }),
    s.a.length &&
      l(() => {
        g(e), b(s.a);
      }));
}
function g(e) {
  if (e.l.s) for (const s of e.l.s) m(s);
  N(e.s);
}
function G(e, s, t) {
  if (e == null) return s(void 0), u;
  const n = e.subscribe(s, t);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function S(e, s, t) {
  let n = t[s];
  const r = n === void 0;
  r &&
    ((n = { store: null, last_value: null, value: j(p), unsubscribe: u }),
    (t[s] = n)),
    (r || n.store !== e) &&
      (n.unsubscribe(), (n.store = e ?? null), (n.unsubscribe = T(e, n.value)));
  const a = m(n.value);
  return a === p ? n.last_value : a;
}
function T(e, s) {
  return e == null ? (_(s, void 0), u) : G(e, (t) => _(s, t));
}
function Z(e) {
  H(() => {
    let s;
    for (s in e) e[s].unsubscribe();
  });
}
function H(e) {
  U(() => () => d(e));
}
const J = () => {
    const e = B;
    return {
      page: { subscribe: e.page.subscribe },
      navigating: { subscribe: e.navigating.subscribe },
      updated: e.updated
    };
  },
  K = {
    subscribe(e) {
      return J().page.subscribe(e);
    }
  };
var M = y('<h1> </h1> <p> </p>', 1);
function R(e, s) {
  q(s, !1);
  const t = {};
  Z(t);
  const n = () => S(K, '$page', t);
  F();
  var r = M(),
    a = I(r),
    v = i(a),
    h = f(f(a, !0)),
    $ = i(h);
  w(() => {
    var o;
    c(v, n().status), c($, (o = n().error) == null ? void 0 : o.message);
  }),
    x(e, r),
    z();
}
export { R as component };
