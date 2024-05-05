const __vite__fileDeps = [
    '../nodes/0.DU6U4ZIH.js',
    '../chunks/disclose-version.IlqvmEry.js',
    '../chunks/runtime.B7m_t_lM.js',
    '../assets/0.VRAwjDSD.css',
    '../nodes/1.B6jdR0r1.js',
    '../chunks/entry.e3IAyjah.js',
    '../nodes/2.jVkCe4-p.js',
    '../chunks/if.pXEilETi.js',
    '../chunks/proxy.DEg3Cb1w.js',
    '../nodes/3.BlrP5uSb.js',
    '../chunks/LuckyNumbersControl.5ySZt5TO.js',
    '../nodes/4.DyBcuwUm.js',
    '../chunks/github-dark.l6Xbbc9Y.js',
    '../nodes/5.DuHDo1df.js'
  ],
  __vite__mapDeps = (i) => i.map((i) => __vite__fileDeps[i]);
var U = (e, t, r) => {
  if (!t.has(e)) throw TypeError('Cannot ' + r);
};
var _ = (e, t, r) => (
    U(e, t, 'read from private field'), r ? r.call(e) : t.get(e)
  ),
  L = (e, t, r) => {
    if (t.has(e))
      throw TypeError('Cannot add the same private member more than once');
    t instanceof WeakSet ? t.add(e) : t.set(e, r);
  },
  O = (e, t, r, n) => (
    U(e, t, 'write to private field'), n ? n.call(e, r) : t.set(e, r), r
  );
import { p as M } from '../chunks/proxy.DEg3Cb1w.js';
import {
  b as G,
  c as H,
  p as J,
  I as K,
  t as N,
  u as B,
  a4 as Q,
  S as X,
  h as $,
  a5 as tt,
  a6 as et,
  a7 as rt,
  j as y,
  g as I,
  a8 as nt,
  a9 as at,
  m as st,
  w as ot,
  aa as it,
  e as ut,
  z as x,
  y as W,
  n as ct,
  x as lt,
  q as ft,
  ab as dt,
  s as A
} from '../chunks/runtime.B7m_t_lM.js';
import {
  o as _t,
  q as mt,
  u as vt,
  j as T,
  b as P,
  t as Z,
  g as w,
  c as j,
  f as ht,
  e as gt,
  r as pt
} from '../chunks/disclose-version.IlqvmEry.js';
import { i as q } from '../chunks/if.pXEilETi.js';
function bt(e) {
  throw new Error('lifecycle_outside_component');
}
function D(e, t, r) {
  let n, a;
  G(() => {
    n !== (n = t()) && (a && (J(a), (a = null)), n && (a = H(() => r(n))));
  });
}
function z(e, t) {
  var n;
  var r = e && ((n = e[X]) == null ? void 0 : n.t);
  return e === t || r === t;
}
function C(e, t, r, n) {
  K(() => {
    var a, o;
    return (
      N(() => {
        (a = o),
          (o = []),
          B(() => {
            e !== r(...o) && (t(e, ...o), a && z(r(...a), e) && t(null, ...a));
          });
      }),
      () => {
        Q(() => {
          o && z(r(...o), e) && t(null, ...o);
        });
      }
    );
  });
}
function V(e, t, r, n) {
  var k;
  var a = (r & nt) !== 0,
    o = (r & at) !== 0,
    f = (r & it) !== 0,
    g = e[t],
    u = (k = $(e, t)) == null ? void 0 : k.set,
    m = n,
    b = !0,
    h = () => (f && b && ((b = !1), (m = B(n))), m);
  g === void 0 && n !== void 0 && (u && o && tt(), (g = h()), u && u(g));
  var s = o
    ? () => {
        var c = e[t];
        return c === void 0 ? h() : ((b = !0), c);
      }
    : () => {
        var c = e[t];
        return c !== void 0 && (m = void 0), c === void 0 ? m : c;
      };
  if (!(r & et)) return s;
  if (u)
    return function (c) {
      return arguments.length === 1 ? (u(c), c) : s();
    };
  var l = !1,
    d = st(g),
    i = ot(() => {
      var c = s(),
        E = y(d);
      return l ? ((l = !1), E) : (d.v = c);
    });
  return (
    a || (i.equals = rt),
    function (c) {
      var E = y(i);
      return arguments.length > 0
        ? (i.equals(c) || ((l = !0), I(d, c), y(i)), c)
        : E;
    }
  );
}
function yt(e) {
  return class extends Et {
    constructor(t) {
      super({ component: e, ...t });
    }
  };
}
var p, v;
class Et {
  constructor(t) {
    L(this, p, void 0);
    L(this, v, void 0);
    const r = M({ ...(t.props || {}), $$events: {} }, !1);
    O(
      this,
      v,
      (t.hydrate ? _t : mt)(t.component, {
        target: t.target,
        props: r,
        context: t.context,
        intro: t.intro,
        recover: t.recover
      })
    ),
      O(this, p, r.$$events);
    for (const n of Object.keys(_(this, v)))
      n === '$set' ||
        n === '$destroy' ||
        n === '$on' ||
        ut(this, n, {
          get() {
            return _(this, v)[n];
          },
          set(a) {
            _(this, v)[n] = a;
          },
          enumerable: !0
        });
    (_(this, v).$set = (n) => {
      Object.assign(r, n);
    }),
      (_(this, v).$destroy = () => {
        vt(_(this, v));
      });
  }
  $set(t) {
    _(this, v).$set(t);
  }
  $on(t, r) {
    _(this, p)[t] = _(this, p)[t] || [];
    const n = (...a) => r.call(this, ...a);
    return (
      _(this, p)[t].push(n),
      () => {
        _(this, p)[t] = _(this, p)[t].filter((a) => a !== n);
      }
    );
  }
  $destroy() {
    _(this, v).$destroy();
  }
}
(p = new WeakMap()), (v = new WeakMap());
function Pt(e) {
  x === null && bt(),
    x.l !== null
      ? St(x).m.push(e)
      : W(() => {
          const t = B(e);
          if (typeof t == 'function') return t;
        });
}
function St(e) {
  var t = e.l;
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
const Rt = 'modulepreload',
  wt = function (e, t) {
    return new URL(e, t).href;
  },
  Y = {},
  S = function (t, r, n) {
    let a = Promise.resolve();
    if (r && r.length > 0) {
      const o = document.getElementsByTagName('link'),
        f = document.querySelector('meta[property=csp-nonce]'),
        g =
          (f == null ? void 0 : f.nonce) ||
          (f == null ? void 0 : f.getAttribute('nonce'));
      a = Promise.all(
        r.map((u) => {
          if (((u = wt(u, n)), u in Y)) return;
          Y[u] = !0;
          const m = u.endsWith('.css'),
            b = m ? '[rel="stylesheet"]' : '';
          if (!!n)
            for (let l = o.length - 1; l >= 0; l--) {
              const d = o[l];
              if (d.href === u && (!m || d.rel === 'stylesheet')) return;
            }
          else if (document.querySelector(`link[href="${u}"]${b}`)) return;
          const s = document.createElement('link');
          if (
            ((s.rel = m ? 'stylesheet' : Rt),
            m || ((s.as = 'script'), (s.crossOrigin = '')),
            (s.href = u),
            g && s.setAttribute('nonce', g),
            document.head.appendChild(s),
            m)
          )
            return new Promise((l, d) => {
              s.addEventListener('load', l),
                s.addEventListener('error', () =>
                  d(new Error(`Unable to preload CSS for ${u}`))
                );
            });
        })
      );
    }
    return a
      .then(() => t())
      .catch((o) => {
        const f = new Event('vite:preloadError', { cancelable: !0 });
        if (((f.payload = o), window.dispatchEvent(f), !f.defaultPrevented))
          throw o;
      });
  },
  Dt = {};
var It = Z(
    '<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'
  ),
  kt = Z('<!> <!>', 1);
function Lt(e, t) {
  ct(t, !0);
  let r = V(t, 'components', 11, () => []),
    n = V(t, 'data_0', 3, null),
    a = V(t, 'data_1', 3, null);
  lt(() => t.stores.page.set(t.page)),
    W(() => {
      t.stores,
        t.page,
        t.constructors,
        r(),
        t.form,
        n(),
        a(),
        t.stores.page.notify();
    });
  let o = A(!1),
    f = A(!1),
    g = A(null);
  Pt(() => {
    const h = t.stores.page.subscribe(() => {
      y(o) &&
        (I(f, !0),
        dt().then(() => {
          I(g, M(document.title || 'untitled page'));
        }));
    });
    return I(o, !0), h;
  });
  var u = kt(),
    m = w(u);
  q(
    m,
    () => t.constructors[1],
    (h) => {
      var s = T(),
        l = w(s);
      D(
        l,
        () => t.constructors[0],
        (d) => {
          C(
            d(l, {
              get data() {
                return n();
              },
              children: (i, k) => {
                var c = T(),
                  E = w(c);
                D(
                  E,
                  () => t.constructors[1],
                  (F) => {
                    C(
                      F(E, {
                        get data() {
                          return a();
                        },
                        get form() {
                          return t.form;
                        }
                      }),
                      (R) => (r()[1] = R),
                      () => {
                        var R;
                        return (R = r()) == null ? void 0 : R[1];
                      }
                    );
                  }
                ),
                  P(i, c);
              }
            }),
            (i) => (r()[0] = i),
            () => {
              var i;
              return (i = r()) == null ? void 0 : i[0];
            }
          );
        }
      ),
        P(h, s);
    },
    (h) => {
      var s = T(),
        l = w(s);
      D(
        l,
        () => t.constructors[0],
        (d) => {
          C(
            d(l, {
              get data() {
                return n();
              },
              get form() {
                return t.form;
              }
            }),
            (i) => (r()[0] = i),
            () => {
              var i;
              return (i = r()) == null ? void 0 : i[0];
            }
          );
        }
      ),
        P(h, s);
    }
  );
  var b = j(j(m, !0));
  q(
    b,
    () => y(o),
    (h) => {
      var s = It(),
        l = gt(s);
      q(
        l,
        () => y(f),
        (d) => {
          var i = pt(d);
          N(() => ht(i, y(g))), P(d, i);
        }
      ),
        P(h, s);
    }
  ),
    P(e, u),
    ft();
}
const Ct = yt(Lt),
  Vt = [
    () =>
      S(
        () => import('../nodes/0.DU6U4ZIH.js'),
        __vite__mapDeps([0, 1, 2, 3]),
        import.meta.url
      ),
    () =>
      S(
        () => import('../nodes/1.B6jdR0r1.js'),
        __vite__mapDeps([4, 1, 2, 5]),
        import.meta.url
      ),
    () =>
      S(
        () => import('../nodes/2.jVkCe4-p.js'),
        __vite__mapDeps([6, 1, 2, 7, 8]),
        import.meta.url
      ),
    () =>
      S(
        () => import('../nodes/3.BlrP5uSb.js'),
        __vite__mapDeps([9, 1, 2, 8, 10]),
        import.meta.url
      ),
    () =>
      S(
        () => import('../nodes/4.DyBcuwUm.js'),
        __vite__mapDeps([11, 1, 2, 8, 12, 10]),
        import.meta.url
      ),
    () =>
      S(
        () => import('../nodes/5.DuHDo1df.js'),
        __vite__mapDeps([13, 1, 2, 8, 12, 10]),
        import.meta.url
      )
  ],
  Bt = [],
  Ut = {
    '/': [-3],
    '/erroneous-warnings': [3],
    '/modify-unbound-state': [-5],
    '/ok': [-6]
  },
  jt = {
    handleError: ({ error: e }) => {
      console.error(e);
    },
    reroute: () => {}
  };
export {
  Ut as dictionary,
  jt as hooks,
  Dt as matchers,
  Vt as nodes,
  Ct as root,
  Bt as server_loads
};
