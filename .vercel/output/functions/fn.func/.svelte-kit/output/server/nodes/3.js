export const index = 3;
let component_cache;
export const component = async () =>
  (component_cache ??= (
    await import('../entries/pages/erroneous-warnings/_page.svelte.js')
  ).default);
export const imports = [
  '_app/immutable/nodes/3.BlrP5uSb.js',
  '_app/immutable/chunks/disclose-version.IlqvmEry.js',
  '_app/immutable/chunks/runtime.B7m_t_lM.js',
  '_app/immutable/chunks/proxy.DEg3Cb1w.js',
  '_app/immutable/chunks/LuckyNumbersControl.5ySZt5TO.js'
];
export const stylesheets = [];
export const fonts = [];
