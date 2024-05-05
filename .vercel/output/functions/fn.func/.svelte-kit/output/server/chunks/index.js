const noop = () => {};
function subscribe_to_store(store, run, invalidate) {
  if (store == null) {
    run(void 0);
    return noop;
  }
  const unsub = store.subscribe(
    run,
    // @ts-expect-error
    invalidate
  );
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
const HYDRATION_START = '[';
const HYDRATION_END = ']';
const UNINITIALIZED = Symbol();
const PassiveDelegatedEvents = ['touchstart', 'touchmove', 'touchend'];
function lifecycle_outside_component(name) {
  {
    throw new Error('lifecycle_outside_component');
  }
}
const ATTR_REGEX = /[&"<]/g;
const CONTENT_REGEX = /[&<]/g;
function escape_html(value, is_attr) {
  const str = String(value ?? '');
  const pattern = is_attr ? ATTR_REGEX : CONTENT_REGEX;
  pattern.lastIndex = 0;
  let escaped = '';
  let last = 0;
  while (pattern.test(str)) {
    const i = pattern.lastIndex - 1;
    const ch = str[i];
    escaped +=
      str.substring(last, i) +
      (ch === '&' ? '&amp;' : ch === '"' ? '&quot;' : '&lt;');
    last = i + 1;
  }
  return escaped + str.substring(last);
}
var current_component = null;
function getContext(key) {
  const context_map = get_or_init_context_map();
  const result =
    /** @type {T} */
    context_map.get(key);
  return result;
}
function setContext(key, context) {
  get_or_init_context_map().set(key, context);
  return context;
}
function get_or_init_context_map(name) {
  if (current_component === null) {
    lifecycle_outside_component();
  }
  return (current_component.c ??= new Map(
    get_parent_context(current_component) || void 0
  ));
}
function push() {
  current_component = { p: current_component, c: null, d: null };
}
function pop() {
  var component =
    /** @type {import('#server').Component} */
    current_component;
  var ondestroy = component.d;
  if (ondestroy) {
    on_destroy.push(...ondestroy);
  }
  current_component = component.p;
}
function get_parent_context(component_context) {
  let parent = component_context.p;
  while (parent !== null) {
    const context_map = parent.c;
    if (context_map !== null) {
      return context_map;
    }
    parent = parent.p;
  }
  return null;
}
const BLOCK_OPEN = `<!--${HYDRATION_START}-->`;
const BLOCK_CLOSE = `<!--${HYDRATION_END}-->`;
function create_payload() {
  return { out: '', head: { title: '', out: '', anchor: 0 }, anchor: 0 };
}
function copy_payload(to_copy) {
  return {
    ...to_copy,
    head: { ...to_copy.head }
  };
}
function assign_payload(p1, p2) {
  p1.out = p2.out;
  p1.head = p2.head;
  p1.anchor = p2.anchor;
}
let on_destroy = [];
function render(component, options) {
  const payload = create_payload();
  const prev_on_destroy = on_destroy;
  on_destroy = [];
  payload.out += BLOCK_OPEN;
  if (options.context) {
    push();
    current_component.c = options.context;
  }
  component(payload, options.props, {}, {});
  if (options.context) {
    pop();
  }
  payload.out += BLOCK_CLOSE;
  for (const cleanup of on_destroy) cleanup();
  on_destroy = prev_on_destroy;
  return {
    head:
      payload.head.out || payload.head.title
        ? payload.head.out + payload.head.title
        : '',
    html: payload.out
  };
}
function head(payload, fn) {
  const head_payload = payload.head;
  payload.head.out += BLOCK_OPEN;
  fn(head_payload);
  payload.head.out += BLOCK_CLOSE;
}
function attr(name, value, boolean) {
  if (
    value == null ||
    (!value && boolean) ||
    (value === '' && name === 'class')
  )
    return '';
  const assignment = `="${escape_html(value, true)}"`;
  return ` ${name}${assignment}`;
}
function store_get(store_values, store_name, store) {
  if (store_name in store_values && store_values[store_name][0] === store) {
    return store_values[store_name][2];
  }
  store_values[store_name]?.[1]();
  store_values[store_name] = [store, null, void 0];
  const unsub = subscribe_to_store(
    store,
    /** @param {any} v */
    (v) => (store_values[store_name][2] = v)
  );
  store_values[store_name][1] = unsub;
  return store_values[store_name][2];
}
function unsubscribe_stores(store_values) {
  for (const store_name in store_values) {
    store_values[store_name][1]();
  }
}
function slot(payload, slot_fn, slot_props, fallback_fn) {
  if (slot_fn === void 0);
  else {
    slot_fn(payload, slot_props);
  }
}
function bind_props(props_parent, props_now) {
  for (const key in props_now) {
    const initial_value = props_parent[key];
    const value = props_now[key];
    if (
      initial_value === void 0 &&
      value !== void 0 &&
      Object.getOwnPropertyDescriptor(props_parent, key)?.set
    ) {
      props_parent[key] = value;
    }
  }
}
function ensure_array_like(array_like_or_iterator) {
  return array_like_or_iterator?.length !== void 0
    ? array_like_or_iterator
    : Array.from(array_like_or_iterator);
}
export {
  HYDRATION_START as H,
  PassiveDelegatedEvents as P,
  UNINITIALIZED as U,
  HYDRATION_END as a,
  pop as b,
  slot as c,
  store_get as d,
  escape_html as e,
  copy_payload as f,
  getContext as g,
  assign_payload as h,
  bind_props as i,
  attr as j,
  head as k,
  ensure_array_like as l,
  noop as n,
  push as p,
  render as r,
  setContext as s,
  unsubscribe_stores as u
};
