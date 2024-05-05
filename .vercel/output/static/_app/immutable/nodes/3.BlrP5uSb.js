import {
  d as x,
  b as p,
  t as f,
  c as e,
  e as u,
  f as S,
  g as w
} from '../chunks/disclose-version.IlqvmEry.js';
import {
  n as D,
  s as h,
  j as r,
  g as c,
  q as E,
  t as F
} from '../chunks/runtime.B7m_t_lM.js';
import { p as d } from '../chunks/proxy.DEg3Cb1w.js';
import { L, b as O, r as j } from '../chunks/LuckyNumbersControl.5ySZt5TO.js';
const q = (s, t, a) => {
  console.log('saving'),
    (t.data.luckyNumbers = [...r(a).luckyNumbers]),
    (t.data.name = r(a).name);
};
var B =
  f(`<fieldset><legend>EditForm.svelte</legend> <label>Name: <input type="text"></label> <hr> <!> <hr> <ul><li>Note that updating the form does not update the page's data, proving that
      its "interior" state is independent of the state it is bound to.</li> <li>Only after you hit save, when the form updates the bound prop, does the
      warning appear.</li></ul> <hr> <strong>Hit save to see the warning in the dev console:</strong> <button>Save</button></fieldset>`);
function C(s, t) {
  D(t, !0);
  let a = h(d({ name: t.data.name, luckyNumbers: [...t.data.luckyNumbers] }));
  var n = B(),
    m = u(n),
    o = e(e(m, !0)),
    l = e(u(o));
  j(l);
  var v = e(e(o, !0)),
    i = e(e(v, !0));
  L(i, {
    get formData() {
      return r(a);
    },
    set formData(g) {
      c(a, d(g));
    }
  });
  var b = e(e(i, !0)),
    _ = e(e(b, !0)),
    y = e(e(_, !0)),
    k = e(e(y, !0)),
    N = e(e(k, !0));
  (N.__click = [q, t, a]),
    O(
      l,
      () => r(a).name,
      (g) => (r(a).name = g)
    ),
    p(s, n),
    E();
}
x(['click']);
var H = f(
  '<fieldset><legend>State in the page</legend> <pre> </pre></fieldset> <!>',
  1
);
function I(s) {
  let t = h(d({ name: 'Bill Shakespeare', luckyNumbers: [7] }));
  var a = H(),
    n = w(a),
    m = u(n),
    o = e(e(m, !0)),
    l = u(o);
  F(() => S(l, JSON.stringify(r(t), null, 2)));
  var v = e(e(n, !0));
  C(v, {
    get data() {
      return r(t);
    },
    set data(i) {
      c(t, d(i));
    }
  }),
    p(s, a);
}
export { I as component };
