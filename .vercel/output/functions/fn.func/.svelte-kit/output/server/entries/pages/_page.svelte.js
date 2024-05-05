import { e as escape_html, b as pop, p as push } from '../../chunks/index.js';
function _page($$payload, $$props) {
  push();
  let { data, form } = $$props;
  let plan = data.plan;
  $$payload.out += `<h1>Issues with Ownership</h1> <p>In dev mode, svelte issues erroneous warnings:</p> <blockquote><code>[svelte] ownership_invalid_binding TotallyIrrelevantUi.svelte passed a value
    to WidgetTagControls.svelte with \`bind:\`, but the value is owned by
    WidgetEditForm.svelte. Consider creating a binding between
    WidgetEditForm.svelte and TotallyIrrelevantUi.svelte</code></blockquote> <a href="/erroneous-warnings">erroneous-warnings</a> <a href="/modify-unbound-state">modify-unbound-state</a> <pre>${escape_html(JSON.stringify(plan, null, 1))}</pre> <button>Toggle Form</button> <!--[-->`;
  {
    $$payload.out += '<!--]!-->';
  }
  pop();
}
export { _page as default };
