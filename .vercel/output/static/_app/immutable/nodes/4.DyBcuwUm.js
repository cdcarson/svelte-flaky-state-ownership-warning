import {
  b as c,
  t as _,
  c as e,
  e as a,
  i as T,
  j as U,
  g as z,
  f as G
} from '../chunks/disclose-version.IlqvmEry.js';
import {
  n as y,
  s as H,
  j as f,
  g as b,
  q as x,
  t as I
} from '../chunks/runtime.B7m_t_lM.js';
import { p as n } from '../chunks/proxy.DEg3Cb1w.js';
import { N as K, h as u, g as Q } from '../chunks/github-dark.l6Xbbc9Y.js';
import { L as R } from '../chunks/LuckyNumbersControl.5ySZt5TO.js';
var V = _(
  '<fieldset class="not-prose relative grid gap-4 rounded border p-4"><legend class="absolute right-0 top-0 rounded-b rounded-e-none bg-gray-100 p-1 text-xs leading-none">EditForm.svelte</legend> <!> <hr> <!></fieldset>'
);
function W(v, r) {
  y(r, !0);
  let t = H(
    n({ name: r.fromOutside.name, luckyNumbers: r.fromOutside.luckyNumbers })
  );
  var s = V(),
    l = a(s),
    d = e(e(l, !0));
  K(d, {
    get formData() {
      return f(t);
    },
    set formData(o) {
      b(t, n(o));
    }
  });
  var m = e(e(d, !0)),
    i = e(e(m, !0));
  R(i, {
    get formData() {
      return f(t);
    },
    set formData(o) {
      b(t, n(o));
    }
  }),
    c(v, s),
    x();
}
var X =
  _(`<main class="prose mx-auto my-16 max-w-none px-4 lg:container"><h1 class="border-b pb-4">Modify Unbound State Example</h1> <div class="grid gap-y-4 md:grid-cols-2 md:gap-x-8"><div class="col-span-2"><p class="mt-0">Note that updating the form updates the page state, <strong>even though the data is not bound</strong>.
        There is no warning.</p></div> <div><h2 class="my-0 mb-2">Edit Form</h2> <!></div> <div><h2 class="my-0 mb-2">Page State</h2> <pre> </pre></div> <div><h2 class="my-0 mb-2">+page.svelte</h2> <div class="not-prose overflow-x-scroll"><pre class="language-html"><code><!></code></pre></div></div> <div><h2 class="my-0 mb-2">EditForm.svelte</h2> <div class="not-prose overflow-x-scroll"><pre class="language-html"><code><!></code></pre></div></div></div></main>`);
function re(v, r) {
  y(r, !0);
  let t = n({
    name: { first: 'Buffy', last: 'Arbuthnot-Pennywhistle' },
    luckyNumbers: [13]
  });
  var s = X();
  T((J) => {
    var h = U(),
      M = z(h);
    u(M, () => Q, !1, !1), c(J, h);
  });
  var l = a(s),
    d = e(e(l, !0)),
    m = a(d),
    i = e(e(m, !0)),
    o = a(i),
    N = e(e(o, !0));
  W(N, {
    get fromOutside() {
      return t;
    }
  });
  var g = e(e(i, !0)),
    D = a(g),
    k = e(e(D, !0)),
    w = a(k);
  I(() => G(w, JSON.stringify(t, null, 2)));
  var p = e(e(g, !0)),
    E = a(p),
    F = e(e(E, !0)),
    O = a(F),
    S = a(O),
    j = a(S);
  u(j, () => r.data.page);
  var C = e(e(p, !0)),
    L = a(C),
    P = e(e(L, !0)),
    q = a(P),
    A = a(q),
    B = a(A);
  u(B, () => r.data.editForm), c(v, s), x();
}
export { re as component };
