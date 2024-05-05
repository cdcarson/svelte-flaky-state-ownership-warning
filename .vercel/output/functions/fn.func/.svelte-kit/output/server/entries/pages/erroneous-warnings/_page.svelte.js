import {
  f as copy_payload,
  h as assign_payload,
  i as bind_props,
  b as pop,
  p as push,
  j as attr,
  e as escape_html
} from '../../../chunks/index.js';
import { L as LuckyNumbersControl } from '../../../chunks/LuckyNumbersControl.js';
function EditForm($$payload, $$props) {
  push();
  let { data = void 0 } = $$props;
  let formData = {
    name: data.name,
    luckyNumbers: [...data.luckyNumbers]
  };
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<fieldset><legend>EditForm.svelte</legend> <label>Name: <input type="text"${attr('value', formData.name, false)}></label> <hr> <!--[-->`;
    LuckyNumbersControl($$payload2, {
      get formData() {
        return formData;
      },
      set formData($$value) {
        formData = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!--]--> <hr> <ul><li>Note that updating the form does not update the page's data, proving that
      its "interior" state is independent of the state it is bound to.</li> <li>Only after you hit save, when the form updates the bound prop, does the
      warning appear.</li></ul> <hr> <strong>Hit save to see the warning in the dev console:</strong> <button>Save</button></fieldset>`;
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
  let data = {
    name: 'Bill Shakespeare',
    luckyNumbers: [7]
  };
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<fieldset><legend>State in the page</legend> <pre>${escape_html(JSON.stringify(data, null, 2))}</pre></fieldset> <!--[-->`;
    EditForm($$payload2, {
      get data() {
        return data;
      },
      set data($$value) {
        data = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!--]-->`;
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
