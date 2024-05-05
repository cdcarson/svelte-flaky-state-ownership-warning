var In = Array.isArray,
  Qn = Array.from,
  Wn = Object.isFrozen,
  Xn = Object.defineProperty,
  Jn = Object.getOwnPropertyDescriptor,
  On = Object.getOwnPropertyDescriptors,
  nt = Object.prototype,
  tt = Array.prototype,
  Rn = Object.getPrototypeOf;
const q = 2,
  M = 4,
  O = 8,
  sn = 16,
  m = 32,
  G = 64,
  R = 128,
  T = 256,
  E = 512,
  x = 1024,
  g = 2048,
  P = 4096,
  Dn = 8192,
  on = 16384,
  nn = Symbol('$state');
function un(n) {
  return n === this.v;
}
function Cn(n, t) {
  return n != n
    ? t == t
    : n !== t || (n !== null && typeof n == 'object') || typeof n == 'function';
}
function Nn(n) {
  return !Cn(n, this.v);
}
const et = 1,
  rt = 2,
  st = 4,
  ot = 8,
  ut = 16,
  lt = 64,
  it = 1,
  ft = 2,
  at = 4,
  ct = 8,
  _t = 1,
  pt = 2,
  vt = '[',
  xn = ']',
  dt = `${xn}!`,
  gn = Symbol(),
  ht = ['touchstart', 'touchmove', 'touchend'];
function Pn(n) {
  throw new Error('effect_in_teardown');
}
function qn(n) {
  throw new Error('effect_orphan');
}
function Fn() {
  throw new Error('effect_update_depth_exceeded');
}
function Et() {
  throw new Error('hydration_missing_marker_close');
}
function yt() {
  throw new Error('hydration_missing_marker_open');
}
function mt(n) {
  throw new Error('props_invalid_value');
}
function bn() {
  throw new Error('state_unsafe_mutation');
}
function ln(n) {
  return { f: 0, reactions: null, equals: un, v: n, version: 0 };
}
function Tt(n) {
  var e;
  const t = ln(n);
  return (
    (t.equals = Nn),
    v !== null && v.l !== null && ((e = v.l).s ?? (e.s = [])).push(t),
    t
  );
}
function At(n, t) {
  var e = n.v !== gn;
  return (
    !S && e && d !== null && Z() && d.f & q && bn(),
    n.equals(t) ||
      ((n.v = t),
      n.version++,
      Z() &&
        e &&
        i !== null &&
        i.f & T &&
        !(i.f & m) &&
        (p !== null && p.includes(n)
          ? (y(i, E), B(i))
          : w === null
            ? zn([n])
            : w.push(n)),
      J(n, E, !0)),
    t
  );
}
function wt(n) {
  var t = document.createElement('template');
  return (t.innerHTML = n), t.content;
}
function Ln(n) {
  if (In(n))
    for (var t = 0; t < n.length; t++) {
      var e = n[t];
      e.isConnected && e.remove();
    }
  else n.isConnected && n.remove();
}
function fn(n, t) {
  n === null && qn(), W && Pn();
}
function Mn(n, t) {
  var e = t.last;
  e === null
    ? (t.last = t.first = n)
    : ((e.next = n), (n.prev = e), (t.last = n));
}
function F(n, t, e) {
  var r = (n & G) !== 0,
    s = {
      ctx: v,
      deps: null,
      dom: null,
      f: n | E,
      first: null,
      fn: t,
      last: null,
      next: null,
      parent: r ? null : i,
      prev: null,
      teardown: null,
      transitions: null
    };
  if ((d !== null && !r && Mn(s, d), e)) {
    var o = N;
    try {
      tn(!0), U(s), (s.f |= Dn);
    } finally {
      tn(o);
    }
  } else B(s);
  return s;
}
function St(n) {
  if ((fn(i), i.f & O && v !== null && !v.m)) {
    const e = v;
    (e.e ?? (e.e = [])).push(n);
  } else an(n);
}
function kt(n) {
  return fn(i), jn(n);
}
function It(n) {
  const t = F(G, n, !0);
  return () => {
    Q(t);
  };
}
function an(n) {
  return F(M, n, !1);
}
function jn(n) {
  return F(O, n, !0);
}
function Ot(n, t = 0) {
  return F(O | sn | t, n, !0);
}
function Rt(n) {
  return F(O | m, n, !0);
}
function cn(n) {
  var t = n.teardown;
  if (t !== null) {
    const e = W;
    en(!0);
    try {
      t.call(null);
    } finally {
      en(e);
    }
  }
}
function Q(n) {
  var t = n.dom;
  if ((t !== null && Ln(t), X(n), Y(n, 0), y(n, P), n.transitions))
    for (const o of n.transitions) o.stop();
  cn(n);
  var e = n.parent;
  if (e !== null && n.f & m && e.first !== null) {
    var r = n.prev,
      s = n.next;
    r !== null
      ? s !== null
        ? ((r.next = s), (s.prev = r))
        : ((r.next = null), (e.last = r))
      : s !== null
        ? ((s.prev = null), (e.first = s))
        : ((e.first = null), (e.last = null));
  }
  n.next =
    n.prev =
    n.teardown =
    n.ctx =
    n.dom =
    n.deps =
    n.parent =
    n.fn =
      null;
}
function Dt(n, t) {
  var e = [];
  _n(n, e, !0),
    Hn(e, () => {
      Q(n), t && t();
    });
}
function Hn(n, t) {
  var e = n.length;
  if (e > 0) {
    var r = () => --e || t();
    for (var s of n) s.out(r);
  } else t();
}
function _n(n, t, e) {
  if (!(n.f & g)) {
    if (((n.f ^= g), n.transitions !== null))
      for (const f of n.transitions) (f.is_global || e) && t.push(f);
    for (var r = n.first; r !== null; ) {
      var s = r.next,
        o = (r.f & on) !== 0 || (r.f & m) !== 0;
      _n(r, t, o ? e : !1), (r = s);
    }
  }
}
function Ct(n) {
  pn(n, !0);
}
function pn(n, t) {
  if (n.f & g) {
    (n.f ^= g), b(n) && U(n);
    for (var e = n.first; e !== null; ) {
      var r = e.next,
        s = (e.f & on) !== 0 || (e.f & m) !== 0;
      pn(e, s ? t : !1), (e = r);
    }
    if (n.transitions !== null)
      for (const o of n.transitions) (o.is_global || t) && o.in();
  }
}
const Nt = () => {};
function xt(n) {
  return n();
}
function Yn(n) {
  for (var t = 0; t < n.length; t++) n[t]();
}
let j = !1,
  z = [];
function vn() {
  j = !1;
  const n = z.slice();
  (z = []), Yn(n);
}
function gt(n) {
  j || ((j = !0), queueMicrotask(vn)), z.push(n);
}
function Un() {
  j && vn();
}
function Pt(n) {
  let t = q | E;
  i === null && (t |= R);
  const e = {
    deps: null,
    deriveds: null,
    equals: un,
    f: t,
    first: null,
    fn: n,
    last: null,
    reactions: null,
    v: null,
    version: 0
  };
  if (d !== null && d.f & q) {
    var r = d;
    r.deriveds === null ? (r.deriveds = [e]) : r.deriveds.push(e);
  }
  return e;
}
function dn(n) {
  X(n);
  var t = n.deriveds;
  if (t !== null) {
    n.deriveds = null;
    for (var e = 0; e < t.length; e += 1) Bn(t[e]);
  }
}
function hn(n, t) {
  dn(n);
  var e = yn(n),
    r = (C || n.f & R) && n.deps !== null ? x : T;
  y(n, r), n.equals(e) || ((n.v = e), J(n, E, t));
}
function Bn(n) {
  dn(n),
    Y(n, 0),
    y(n, P),
    (n.first = n.last = n.deps = n.reactions = n.fn = null);
}
const En = 0,
  Kn = 1;
let L = En,
  H = !1,
  N = !1,
  W = !1;
function tn(n) {
  N = n;
}
function en(n) {
  W = n;
}
let k = [],
  I = 0,
  d = null,
  i = null,
  p = null,
  _ = 0,
  w = null;
function zn(n) {
  w = n;
}
let S = !1,
  C = !1,
  v = null;
function V(n) {
  v = n;
}
function Z() {
  return v !== null && v.l === null;
}
function b(n) {
  var c;
  var t = n.f,
    e = (t & E) !== 0,
    r = (t & R) !== 0;
  if (e && !r) return !0;
  if (t & x || (e && r)) {
    var s = n.deps;
    if (s !== null)
      for (var o = s.length, f = 0; f < o; f++) {
        var a = s[f];
        if (!e && b(a) && (hn(a, !0), n.f & E)) return !0;
        if (r) {
          var u = a.version;
          if (u > n.version) return (n.version = u), !0;
          if (
            !C &&
            !((c = a == null ? void 0 : a.reactions) != null && c.includes(n))
          ) {
            var l = a.reactions;
            l === null ? (a.reactions = [n]) : l.push(n);
          }
        }
      }
    r || y(n, T);
  }
  return e;
}
function yn(n) {
  const t = p,
    e = _,
    r = w,
    s = d,
    o = C,
    f = S;
  (p = null),
    (_ = 0),
    (w = null),
    (d = n),
    (C = !N && (n.f & R) !== 0),
    (S = !1);
  try {
    let a = n.fn(),
      u = n.deps;
    if (p !== null) {
      let l;
      if (u !== null) {
        const c = u.length,
          h = _ === 0 ? p : u.slice(0, _).concat(p),
          D = h.length > 16 && c - _ > 1 ? new Set(h) : null;
        for (l = _; l < c; l++) {
          const A = u[l];
          (D !== null ? !D.has(A) : !h.includes(A)) && mn(n, A);
        }
      }
      if (u !== null && _ > 0)
        for (u.length = _ + p.length, l = 0; l < p.length; l++) u[_ + l] = p[l];
      else n.deps = u = p;
      if (!C)
        for (l = _; l < u.length; l++) {
          const c = u[l],
            h = c.reactions;
          h === null ? (c.reactions = [n]) : h[h.length - 1] !== n && h.push(n);
        }
    } else u !== null && _ < u.length && (Y(n, _), (u.length = _));
    return a;
  } finally {
    (p = t), (_ = e), (w = r), (d = s), (C = o), (S = f);
  }
}
function mn(n, t) {
  const e = t.reactions;
  let r = 0;
  if (e !== null) {
    r = e.length - 1;
    const s = e.indexOf(n);
    s !== -1 && (r === 0 ? (t.reactions = null) : ((e[s] = e[r]), e.pop()));
  }
  r === 0 && t.f & R && (y(t, E), Y(t, 0));
}
function Y(n, t) {
  const e = n.deps;
  if (e !== null) {
    const r = t === 0 ? null : e.slice(0, t);
    let s;
    for (s = t; s < e.length; s++) {
      const o = e[s];
      (r === null || !r.includes(o)) && mn(n, o);
    }
  }
}
function X(n) {
  let t = n.first;
  (n.first = null), (n.last = null);
  for (var e; t !== null; ) (e = t.next), Q(t), (t = e);
}
function U(n) {
  var t = n.f;
  if (!(t & P)) {
    y(n, T);
    var e = n.ctx,
      r = i,
      s = v;
    (i = n), V(e);
    try {
      t & sn || X(n), cn(n);
      var o = yn(n);
      n.teardown = typeof o == 'function' ? o : null;
    } finally {
      (i = r), V(s);
    }
  }
}
function Tn() {
  I > 1e3 && ((I = 0), Fn()), I++;
}
function An(n) {
  for (var t = 0; t < n.length; t++) {
    var e = n[t];
    Sn(e, O | M);
  }
}
function rn(n) {
  var t = n.length;
  if (t !== 0) {
    Tn();
    for (var e = 0; e < t; e++) {
      var r = n[e];
      !(r.f & (P | g)) && b(r) && U(r);
    }
  }
}
function Vn() {
  if (((H = !1), I > 101)) return;
  const n = k;
  (k = []), An(n), H || (I = 0);
}
function B(n) {
  L === En && (H || ((H = !0), queueMicrotask(Vn)));
  for (var t = n; t.parent !== null; ) {
    t = t.parent;
    var e = t.f;
    if (e & m) {
      if (!(e & T)) return;
      y(t, x);
    }
  }
  k.push(t);
}
function wn(n, t, e, r) {
  var s = n.first,
    o = [];
  n: for (; s !== null; ) {
    var f = s.f,
      a = (f & (P | g)) === 0,
      u = f & m,
      l = (f & T) !== 0,
      c = s.first;
    if (a && (!u || !l)) {
      if ((u && y(s, T), f & O)) {
        if (u) {
          if (!e && c !== null) {
            s = c;
            continue;
          }
        } else if ((b(s) && (U(s), (c = s.first)), !e && c !== null)) {
          s = c;
          continue;
        }
      } else if (f & M)
        if (u || l) {
          if (!e && c !== null) {
            s = c;
            continue;
          }
        } else o.push(s);
    }
    var h = s.next;
    if (h === null) {
      let A = s.parent;
      for (; A !== null; ) {
        if (n === A) break n;
        var K = A.next;
        if (K !== null) {
          s = K;
          continue n;
        }
        A = A.parent;
      }
    }
    s = h;
  }
  if (o.length > 0 && (t & M && r.push(...o), !e))
    for (var D = 0; D < o.length; D++) wn(o[D], t, !1, r);
}
function Sn(n, t, e = !1) {
  var r = [],
    s = N;
  N = !0;
  try {
    n.first === null && !(n.f & m) ? rn([n]) : (wn(n, t, e, r), rn(r));
  } finally {
    N = s;
  }
}
function qt(n) {
  (I = 0), Sn(n, O, !0);
}
function kn(n, t = !0) {
  var e = L,
    r = k;
  try {
    Tn();
    const o = [];
    (L = Kn), (k = o), t && An(r);
    var s = n == null ? void 0 : n();
    return Un(), (k.length > 0 || o.length > 0) && kn(), (I = 0), s;
  } finally {
    (L = e), (k = r);
  }
}
async function Ft() {
  await Promise.resolve(), kn();
}
function Zn(n) {
  const t = n.f;
  if (t & P) return n.v;
  if (d !== null && !(d.f & (m | G)) && !S) {
    const e = (d.f & R) !== 0,
      r = d.deps;
    p === null && r !== null && r[_] === n && !(e && i !== null)
      ? _++
      : (r === null || _ === 0 || r[_ - 1] !== n) &&
        (p === null ? (p = [n]) : p.push(n)),
      w !== null &&
        i !== null &&
        i.f & T &&
        !(i.f & m) &&
        w.includes(n) &&
        (y(i, E), B(i));
  }
  return t & q && b(n) && hn(n, !1), n.v;
}
function J(n, t, e) {
  var r = n.reactions;
  if (r !== null)
    for (var s = Z(), o = r.length, f = 0; f < o; f++) {
      var a = r[f],
        u = a.f;
      if (!(u & E || ((!e || !s) && a === i))) {
        y(a, t);
        var l = (u & x) !== 0,
          c = (u & R) !== 0;
        (u & T || (l && c)) && (a.f & q ? J(a, x, e) : B(a));
      }
    }
}
function bt(n) {
  const t = S;
  try {
    return (S = !0), n();
  } finally {
    S = t;
  }
}
const $n = ~(E | x | T);
function y(n, t) {
  n.f = (n.f & $n) | t;
}
function Gn(n) {
  return typeof n == 'object' && n !== null && typeof n.f == 'number';
}
function Lt(n, t = !1, e) {
  (v = { p: v, c: null, e: null, m: !1, s: n, x: null, l: null }),
    t || (v.l = { s: null, u: null, r1: [], r2: ln(!1) });
}
function Mt(n) {
  const t = v;
  if (t !== null) {
    const e = t.e;
    if (e !== null) {
      t.e = null;
      for (let r = 0; r < e.length; r++) an(e[r]);
    }
    V(t.p), (t.m = !0);
  }
  return {};
}
function jt(n) {
  if (!(typeof n != 'object' || !n || n instanceof EventTarget)) {
    if (nn in n) $(n);
    else if (!Array.isArray(n))
      for (let t in n) {
        const e = n[t];
        typeof e == 'object' && e && nn in e && $(e);
      }
  }
}
function $(n, t = new Set()) {
  if (
    typeof n == 'object' &&
    n !== null &&
    !(n instanceof EventTarget) &&
    !t.has(n)
  ) {
    t.add(n);
    for (let r in n)
      try {
        $(n[r], t);
      } catch {}
    const e = Rn(n);
    if (
      e !== Object.prototype &&
      e !== Array.prototype &&
      e !== Map.prototype &&
      e !== Set.prototype &&
      e !== Date.prototype
    ) {
      const r = On(e);
      for (let s in r) {
        const o = r[s].get;
        if (o)
          try {
            o.call(n);
          } catch {}
      }
    }
  }
}
function Ht(n) {
  return Gn(n) ? Zn(n) : n;
}
export {
  Qn as $,
  xt as A,
  Yn as B,
  jt as C,
  T as D,
  on as E,
  qt as F,
  Nt as G,
  dt as H,
  an as I,
  Q as J,
  vt as K,
  g as L,
  et as M,
  rt as N,
  lt as O,
  _n as P,
  Hn as Q,
  ut as R,
  nn as S,
  st as T,
  gn as U,
  ot as V,
  Ht as W,
  xn as X,
  Et as Y,
  kn as Z,
  yt as _,
  Ct as a,
  It as a0,
  ht as a1,
  _t as a2,
  pt as a3,
  gt as a4,
  mt as a5,
  at as a6,
  Nn as a7,
  it as a8,
  ft as a9,
  ct as aa,
  Ft as ab,
  Ot as b,
  Rt as c,
  tt as d,
  Xn as e,
  In as f,
  At as g,
  Jn as h,
  Wn as i,
  Zn as j,
  i as k,
  Rn as l,
  Tt as m,
  Lt as n,
  nt as o,
  Dt as p,
  Mt as q,
  Ln as r,
  ln as s,
  jn as t,
  bt as u,
  wt as v,
  Pt as w,
  kt as x,
  St as y,
  v as z
};
