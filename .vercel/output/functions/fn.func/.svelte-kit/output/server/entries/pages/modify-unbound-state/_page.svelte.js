import {
  f as copy_payload,
  h as assign_payload,
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
  let { fromOutside } = $$props;
  let formData = {
    name: fromOutside.name,
    luckyNumbers: fromOutside.luckyNumbers
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
    $$payload2.out += `<!--]--></fieldset>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  pop();
}
function _page($$payload, $$props) {
  push();
  let { data: codes } = $$props;
  let data = {
    name: {
      first: 'Buffy',
      last: 'Arbuthnot-Pennywhistle'
    },
    luckyNumbers: [13]
  };
  head($$payload, ($$payload2) => {
    $$payload2.out += `<!--[-->${githubDark}<!--]-->`;
  });
  $$payload.out += `<main class="prose mx-auto my-16 max-w-none px-4 lg:container"><h1 class="border-b pb-4">Modify Unbound State Example</h1> <div class="grid gap-y-4 md:grid-cols-2 md:gap-x-8"><div class="col-span-2"><p class="mt-0">Note that updating the form updates the page state, <strong>even though the data is not bound</strong>.
        There is no warning.</p></div> <div><h2 class="my-0 mb-2">Edit Form</h2> <!--[-->`;
  EditForm($$payload, { fromOutside: data });
  $$payload.out += `<!--]--></div> <div><h2 class="my-0 mb-2">Page State</h2> <pre>${escape_html(JSON.stringify(data, null, 2))}</pre></div> <div><h2 class="my-0 mb-2">+page.svelte</h2> <div class="not-prose overflow-x-scroll"><pre class="language-html"><code><!--[-->${codes.page}<!--]--></code></pre></div></div> <div><h2 class="my-0 mb-2">EditForm.svelte</h2> <div class="not-prose overflow-x-scroll"><pre class="language-html"><code><!--[-->${codes.editForm}<!--]--></code></pre></div></div></div></main>`;
  pop();
}
export { _page as default };
