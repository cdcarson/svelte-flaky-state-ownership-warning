import * as server from '../entries/pages/ok/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () =>
  (component_cache ??= (await import('../entries/pages/ok/_page.svelte.js'))
    .default);
export { server };
export const server_id = 'src/routes/ok/+page.server.ts';
export const imports = [
  '_app/immutable/nodes/5.DuHDo1df.js',
  '_app/immutable/chunks/disclose-version.IlqvmEry.js',
  '_app/immutable/chunks/runtime.B7m_t_lM.js',
  '_app/immutable/chunks/proxy.DEg3Cb1w.js',
  '_app/immutable/chunks/github-dark.l6Xbbc9Y.js',
  '_app/immutable/chunks/LuckyNumbersControl.5ySZt5TO.js'
];
export const stylesheets = [];
export const fonts = [];
