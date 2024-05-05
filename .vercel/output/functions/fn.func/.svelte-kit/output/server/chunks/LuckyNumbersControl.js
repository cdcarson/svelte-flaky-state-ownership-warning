import {
  l as ensure_array_like,
  e as escape_html,
  i as bind_props,
  b as pop,
  p as push
} from './index.js';
function LuckyNumbersControl($$payload, $$props) {
  push();
  let { formData = void 0 } = $$props;
  const each_array = ensure_array_like(formData.luckyNumbers);
  $$payload.out += `<div class="grid gap-4"><div class="flex justify-between gap-2">Lucky Numbers <button>Add</button></div> <ul><!--[-->`;
  for (let i = 0; i < each_array.length; i++) {
    const num = each_array[i];
    $$payload.out += '<!--[-->';
    $$payload.out += `<li class="flex items-center justify-between gap-2 p-2 even:bg-gray-100"><div class="text-2xl">${escape_html(num)}</div> <button>Remove</button></li>`;
    $$payload.out += '<!--]-->';
  }
  $$payload.out += '<!--]-->';
  $$payload.out += `</ul></div>`;
  bind_props($$props, { formData });
  pop();
}
export { LuckyNumbersControl as L };
