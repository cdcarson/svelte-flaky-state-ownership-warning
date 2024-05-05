export const manifest = (() => {
  function __memo(fn) {
    let value;
    return () => (value ??= value = fn());
  }

  return {
    appDir: '_app',
    appPath: '_app',
    assets: new Set(['favicon.png']),
    mimeTypes: { '.png': 'image/png' },
    _: {
      client: {
        start: '_app/immutable/entry/start.DAhMgGx3.js',
        app: '_app/immutable/entry/app.BUah8-KR.js',
        imports: [
          '_app/immutable/entry/start.DAhMgGx3.js',
          '_app/immutable/chunks/entry.e3IAyjah.js',
          '_app/immutable/chunks/runtime.B7m_t_lM.js',
          '_app/immutable/entry/app.BUah8-KR.js',
          '_app/immutable/chunks/proxy.DEg3Cb1w.js',
          '_app/immutable/chunks/runtime.B7m_t_lM.js',
          '_app/immutable/chunks/disclose-version.IlqvmEry.js',
          '_app/immutable/chunks/if.pXEilETi.js'
        ],
        stylesheets: [],
        fonts: [],
        uses_env_dynamic_public: false
      },
      nodes: [
        __memo(() => import('../output/server/nodes/0.js')),
        __memo(() => import('../output/server/nodes/1.js')),
        __memo(() => import('../output/server/nodes/2.js')),
        __memo(() => import('../output/server/nodes/3.js')),
        __memo(() => import('../output/server/nodes/4.js')),
        __memo(() => import('../output/server/nodes/5.js'))
      ],
      routes: [
        {
          id: '/',
          pattern: /^\/$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 2 },
          endpoint: null
        },
        {
          id: '/erroneous-warnings',
          pattern: /^\/erroneous-warnings\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 3 },
          endpoint: null
        },
        {
          id: '/modify-unbound-state',
          pattern: /^\/modify-unbound-state\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 4 },
          endpoint: null
        },
        {
          id: '/ok',
          pattern: /^\/ok\/?$/,
          params: [],
          page: { layouts: [0], errors: [1], leaf: 5 },
          endpoint: null
        }
      ],
      matchers: async () => {
        return {};
      },
      server_assets: {}
    }
  };
})();
