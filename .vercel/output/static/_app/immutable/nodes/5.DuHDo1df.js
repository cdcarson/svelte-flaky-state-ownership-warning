import {
  d as K,
  b as f,
  t as x,
  c as e,
  e as a,
  i as M,
  j as P,
  g as R,
  f as A
} from '../chunks/disclose-version.IlqvmEry.js';
import {
  n as k,
  s as N,
  j as o,
  g as b,
  q as w,
  t as G
} from '../chunks/runtime.B7m_t_lM.js';
import { p as n } from '../chunks/proxy.DEg3Cb1w.js';
import { N as Q, h as g, g as U } from '../chunks/github-dark.l6Xbbc9Y.js';
import { L as V } from '../chunks/LuckyNumbersControl.5ySZt5TO.js';
const W = (l, r, t) => {
  (r.data.luckyNumbers = [...o(t).luckyNumbers]),
    (r.data.name = { ...o(t).name });
};
var X = x(
  '<fieldset class="not-prose relative grid gap-4 rounded border p-4"><legend class="absolute right-0 top-0 rounded-b rounded-e-none bg-gray-100 p-1 text-xs leading-none">EditForm.svelte</legend> <!> <hr> <!> <hr> <button>Save (update bound state)</button></fieldset>'
);
function Y(l, r) {
  k(r, !0);
  let t = N(
    n({ name: { ...r.data.name }, luckyNumbers: [...r.data.luckyNumbers] })
  );
  var i = X(),
    m = a(i),
    v = e(e(m, !0));
  Q(v, {
    get formData() {
      return o(t);
    },
    set formData(s) {
      b(t, n(s));
    }
  });
  var u = e(e(v, !0)),
    d = e(e(u, !0));
  V(d, {
    get formData() {
      return o(t);
    },
    set formData(s) {
      b(t, n(s));
    }
  });
  var h = e(e(d, !0)),
    c = e(e(h, !0));
  (c.__click = [W, r, t]), f(l, i), w();
}
K(['click']);
var Z =
  x(`<main class="prose mx-auto my-16 max-w-none px-4 lg:container"><h1 class="border-b pb-4">OK Example</h1> <div class="grid gap-y-4 md:grid-cols-2 md:gap-x-8"><div class="md:col-span-2 max-w-prose"><p class="mt-0">This example works as I'd expect, with the form's "interior" state
        entirely independent of the page state to which it is bound. To prove
        this...</p> <ul><li>Make changes in the form. Note that the page state does not change.</li> <li>Hit save. This assigns the form's state to the page.</li> <li>Repeat (i.e. proving that form's state isn't messing with the page
          state after the above assignment.)</li></ul> <p><strong>But the problem</strong> is that the initialization of
        the form's state and the subsequent assignment back to the bound state have
        to be fully destructured. This is a pain in the neck and error-prone.</p></div> <div><h2 class="my-0 mb-2">Edit Form</h2> <!></div> <div><h2 class="my-0 mb-2">Page State</h2> <pre> </pre></div> <div><h2 class="my-0 mb-2">+page.svelte</h2> <div class="not-prose overflow-x-scroll"><pre class="language-html"><code><!></code></pre></div></div> <div><h2 class="my-0 mb-2">EditForm.svelte</h2> <div class="not-prose overflow-x-scroll"><pre class="language-html"><code><!></code></pre></div></div></div></main>`);
function se(l, r) {
  k(r, !0);
  let t = N(
    n({ name: { first: 'Bill', last: 'Shakespeare' }, luckyNumbers: [7] })
  );
  var i = Z();
  M((p) => {
    var y = P(),
      J = R(y);
    g(J, () => U, !1, !1), f(p, y);
  });
  var m = a(i),
    v = e(e(m, !0)),
    u = a(v),
    d = e(e(u, !0)),
    h = a(d),
    c = e(e(h, !0));
  Y(c, {
    get data() {
      return o(t);
    },
    set data(p) {
      b(t, n(p));
    }
  });
  var s = e(e(d, !0)),
    D = a(s),
    E = e(e(D, !0)),
    F = a(E);
  G(() => A(F, JSON.stringify(o(t), null, 2)));
  var _ = e(e(s, !0)),
    S = a(_),
    T = e(e(S, !0)),
    j = a(T),
    q = a(j),
    B = a(q);
  g(B, () => r.data.page);
  var C = e(e(_, !0)),
    L = a(C),
    O = e(e(L, !0)),
    z = a(O),
    H = a(z),
    I = a(H);
  g(I, () => r.data.editForm), f(l, i), w();
}
export { se as component };
