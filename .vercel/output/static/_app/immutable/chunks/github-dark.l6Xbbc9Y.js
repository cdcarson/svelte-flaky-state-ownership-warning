import {
  k as f,
  t as g,
  j as _,
  r as y,
  v as k,
  f as v,
  w as x,
  n as D,
  q as N
} from './runtime.B7m_t_lM.js';
import {
  h as w,
  a as C,
  p as u,
  b as H,
  t as q,
  c as o,
  e as d
} from './disclose-version.IlqvmEry.js';
import { b as j, r as b } from './LuckyNumbersControl.5ySZt5TO.js';
function G(a, l) {
  const e = a.dom;
  if (v(e)) {
    for (let s = e.length - 1; s >= 0; s--)
      if (l.includes(e[s])) {
        e.splice(s, 1);
        break;
      }
  } else e !== null && l.includes(e) && (a.dom = null);
}
function O(a, l, e, s) {
  var r;
  const i = a.parentNode !== ((r = f) == null ? void 0 : r.dom) ? f : null;
  let n = x(l);
  g(() => {
    var t = S(a, i, _(n));
    if (t)
      return () => {
        i !== null && G(i, v(t) ? t : [t]), y(t);
      };
  });
}
function S(a, l, e, s, i) {
  if (w) return C;
  var n = e + '',
    r = k(n);
  if (r.childNodes.length === 1) {
    var t = r.firstChild;
    return a.before(t), l !== null && u(t, l), t;
  }
  var h = [...r.childNodes];
  return a.before(r), l !== null && u(h, l), h;
}
var A = q(
  '<div class="grid gap-4 lg:grid-cols-2"><div><label>First Name <br> <input type="text"></label></div> <div><label>Last Name <br> <input type="text"></label></div></div>'
);
function T(a, l) {
  D(l, !0);
  var e = A(),
    s = d(e),
    i = d(s),
    n = o(d(i)),
    r = o(o(n, !0));
  b(r);
  var t = o(o(s, !0)),
    h = d(t),
    p = o(d(h)),
    m = o(o(p, !0));
  b(m),
    j(
      r,
      () => l.formData.name.first,
      (c) => (l.formData.name.first = c)
    ),
    j(
      m,
      () => l.formData.name.last,
      (c) => (l.formData.name.last = c)
    ),
    H(a, e),
    N();
}
const U = `<style>pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}
/*!
  Theme: GitHub Dark
  Description: Dark theme as seen on github.com
  Author: github.com
  Maintainer: @Hirse
  Updated: 2021-05-15

  Outdated base version: https://github.com/primer/github-syntax-dark
  Current colors taken from GitHub's CSS
*/.hljs{color:#c9d1d9;background:#0d1117}.hljs-doctag,
.hljs-keyword,
.hljs-meta .hljs-keyword,
.hljs-template-tag,
.hljs-template-variable,
.hljs-type,
.hljs-variable.language_{color:#ff7b72}.hljs-title,
.hljs-title.class_,
.hljs-title.class_.inherited__,
.hljs-title.function_{color:#d2a8ff}.hljs-attr,
.hljs-attribute,
.hljs-literal,
.hljs-meta,
.hljs-number,
.hljs-operator,
.hljs-variable,
.hljs-selector-attr,
.hljs-selector-class,
.hljs-selector-id{color:#79c0ff}.hljs-regexp,
.hljs-string,
.hljs-meta .hljs-string{color:#a5d6ff}.hljs-built_in,
.hljs-symbol{color:#ffa657}.hljs-comment,
.hljs-code,
.hljs-formula{color:#8b949e}.hljs-name,
.hljs-quote,
.hljs-selector-tag,
.hljs-selector-pseudo{color:#7ee787}.hljs-subst{color:#c9d1d9}.hljs-section{color:#1f6feb;font-weight:bold}.hljs-bullet{color:#f2cc60}.hljs-emphasis{color:#c9d1d9;font-style:italic}.hljs-strong{color:#c9d1d9;font-weight:bold}.hljs-addition{color:#aff5b4;background-color:#033a16}.hljs-deletion{color:#ffdcd7;background-color:#67060c}</style>`;
export { T as N, U as g, O as h };
