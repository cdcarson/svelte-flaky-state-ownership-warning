import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () =>
  (component_cache ??= (await import('../entries/pages/_page.svelte.js'))
    .default);
export { server };
export const server_id = 'src/routes/+page.server.ts';
export const imports = [
  '_app/immutable/nodes/2.jVkCe4-p.js',
  '_app/immutable/chunks/disclose-version.IlqvmEry.js',
  '_app/immutable/chunks/runtime.B7m_t_lM.js',
  '_app/immutable/chunks/if.pXEilETi.js',
  '_app/immutable/chunks/proxy.DEg3Cb1w.js'
];
export const stylesheets = [];
export const fonts = [];
