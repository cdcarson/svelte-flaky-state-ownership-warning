import {
  f as copy_payload,
  h as assign_payload,
  i as bind_props,
  b as pop,
  p as push,
  k as head,
  e as escape_html
} from '../../../chunks/index.js';
import { L as LuckyNumbersControl } from '../../../chunks/LuckyNumbersControl.js';
import {
  N as NameControl,
  g as githubDark
} from '../../../chunks/github-dark.js';
function EditForm($$payload, $$props) {
  push();
  let { data = void 0 } = $$props;
  let formData = {
    name: { ...data.name },
    luckyNumbers: [...data.luckyNumbers]
  };
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<fieldset class="not-prose relative grid gap-4 rounded border p-4"><legend class="absolute right-0 top-0 rounded-b rounded-e-none bg-gray-100 p-1 text-xs leading-none">EditForm.svelte</legend> <!--[-->`;
    NameControl($$payload2, {
      get formData() {
        return formData;
      },
      set formData($$value) {
        formData = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!--]--> <hr> <!--[-->`;
    LuckyNumbersControl($$payload2, {
      get formData() {
        return formData;
      },
      set formData($$value) {
        formData = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!--]--> <hr> <button>Save (update bound state)</button></fieldset>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { data });
  pop();
}
function _page($$payload, $$props) {
  push();
  let { data: codes } = $$props;
  let data = {
    name: { first: 'Bill', last: 'Shakespeare' },
    luckyNumbers: [7]
  };
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    head($$payload2, ($$payload3) => {
      $$payload3.out += `<!--[-->${githubDark}<!--]-->`;
    });
    $$payload2.out += `<main class="prose mx-auto my-16 max-w-none px-4 lg:container"><h1 class="border-b pb-4">OK Example</h1> <div class="grid gap-y-4 md:grid-cols-2 md:gap-x-8"><div class="md:col-span-2 max-w-prose"><p class="mt-0">This example works as I'd expect, with the form's "interior" state
        entirely independent of the page state to which it is bound. To prove
        this...</p> <ul><li>Make changes in the form. Note that the page state does not change.</li> <li>Hit save. This assigns the form's state to the page.</li> <li>Repeat (i.e. proving that form's state isn't messing with the page
          state after the above assignment.)</li></ul> <p><strong>But the problem</strong> is that the initialization of
        the form's state and the subsequent assignment back to the bound state have
        to be fully destructured. This is a pain in the neck and error-prone.</p></div> <div><h2 class="my-0 mb-2">Edit Form</h2> <!--[-->`;
    EditForm($$payload2, {
      get data() {
        return data;
      },
      set data($$value) {
        data = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!--]--></div> <div><h2 class="my-0 mb-2">Page State</h2> <pre>${escape_html(JSON.stringify(data, null, 2))}</pre></div> <div><h2 class="my-0 mb-2">+page.svelte</h2> <div class="not-prose overflow-x-scroll"><pre class="language-html"><code><!--[-->${codes.page}<!--]--></code></pre></div></div> <div><h2 class="my-0 mb-2">EditForm.svelte</h2> <div class="not-prose overflow-x-scroll"><pre class="language-html"><code><!--[-->${codes.editForm}<!--]--></code></pre></div></div></div></main>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  pop();
}
export { _page as default };
