export const index = 0;
let component_cache;
export const component = async () =>
  (component_cache ??= (await import('../entries/pages/_layout.svelte.js'))
    .default);
export const imports = [
  '_app/immutable/nodes/0.DU6U4ZIH.js',
  '_app/immutable/chunks/disclose-version.IlqvmEry.js',
  '_app/immutable/chunks/runtime.B7m_t_lM.js'
];
export const stylesheets = ['_app/immutable/assets/0.VRAwjDSD.css'];
export const fonts = [];
