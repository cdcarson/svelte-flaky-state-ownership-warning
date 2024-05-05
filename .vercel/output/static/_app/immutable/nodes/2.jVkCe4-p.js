import {
  b as o,
  t as d,
  c as t,
  e as m,
  j as E,
  g as v,
  d as q,
  f as I
} from '../chunks/disclose-version.IlqvmEry.js';
import {
  b as N,
  E as J,
  c as M,
  J as O,
  n as p,
  q as b,
  s as g,
  t as S,
  g as W,
  j as l,
  w
} from '../chunks/runtime.B7m_t_lM.js';
import { i as j } from '../chunks/if.pXEilETi.js';
import { p as P } from '../chunks/proxy.DEg3Cb1w.js';
function A(i, e, ...a) {
  var r, n;
  N(() => {
    r !== (r = i()) &&
      (n && (O(n), (n = null)), r && (n = M(() => r(e, ...a))));
  }, J);
}
var R = d('<fieldset><legend>Pretend Modal</legend> <!></fieldset>');
function U(i, e) {
  p(e, !0);
  var a = R(),
    r = m(a),
    n = t(t(r, !0));
  A(() => e.children, n), o(i, a), b();
}
var z = d(
  '<fieldset style="border:1px solid blue; padding:1rem"><legend>PricingControls Component</legend></fieldset>'
);
function B(i, e) {
  var a = z();
  o(i, a);
}
var G = d(
  '<fieldset style="border:1px solid seagreen; padding:1rem"><legend>EditPlanForm Component</legend> <!></fieldset>'
);
function H(i, e) {
  p(e, !0),
    g(
      P(
        e.actionData
          ? e.actionData.formData
          : {
              name: e.plan.name,
              serializedPricing: JSON.stringify(e.plan.pricing)
            }
      )
    ),
    g(P(e.actionData ? e.actionData.formErrors : {}));
  var a = E(),
    r = v(a);
  U(r, {
    children: (n, f) => {
      var s = G(),
        u = m(s),
        c = t(t(u, !0));
      B(c), o(n, s);
    }
  }),
    o(i, a),
    b();
}
var K = (i, e) => W(e, !l(e)),
  L = d(
    `<h1>Issues with Ownership</h1> <p>In dev mode, svelte issues erroneous warnings:</p> <blockquote><code>[svelte] ownership_invalid_binding TotallyIrrelevantUi.svelte passed a value
    to WidgetTagControls.svelte with \`bind:\`, but the value is owned by
    WidgetEditForm.svelte. Consider creating a binding between
    WidgetEditForm.svelte and TotallyIrrelevantUi.svelte</code></blockquote> <a href="/erroneous-warnings">erroneous-warnings</a> <a href="/modify-unbound-state">modify-unbound-state</a> <pre> </pre> <button>Toggle Form</button> <!>`,
    1
  );
function Z(i, e) {
  p(e, !0);
  let a = w(() => e.form),
    r = w(() => e.data.plan),
    n = g(!1);
  var f = L(),
    s = v(f),
    u = t(t(s, !0)),
    c = t(t(u, !0)),
    k = t(t(c, !0)),
    C = t(t(k, !0)),
    _ = t(t(C, !0)),
    D = m(_);
  S(() => I(D, JSON.stringify(l(r), null, 1)));
  var h = t(t(_, !0));
  h.__click = [K, n];
  var F = t(t(h, !0));
  j(
    F,
    () => l(n),
    (T) => {
      var y = E(),
        x = v(y);
      H(x, {
        get plan() {
          return l(r);
        },
        get actionData() {
          return l(a);
        }
      }),
        o(T, y);
    }
  ),
    o(i, f),
    b();
}
q(['click']);
export { Z as component };
