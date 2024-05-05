import {
  b as d,
  H as p,
  r as v,
  a as t,
  c as r,
  p as n,
  E as b
} from './runtime.B7m_t_lM.js';
import { h, s as u, a as N } from './disclose-version.IlqvmEry.js';
function y(f, o, c, l = null, _ = !1) {
  var e = null,
    s = null,
    a = null,
    m = _ ? b : 0;
  d(() => {
    if (a === (a = !!o())) return;
    let i = !1;
    if (h) {
      const E = f.data === p;
      a === E && (v(N), u(!1), (i = !0));
    }
    a
      ? (e ? t(e) : (e = r(() => c(f))),
        s &&
          n(s, () => {
            s = null;
          }))
      : (s ? t(s) : l && (s = r(() => l(f))),
        e &&
          n(e, () => {
            e = null;
          })),
      i && u(!0);
  }, m);
}
export { y as i };
