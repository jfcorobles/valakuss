
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/valakuss/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 713, hash: '57b335ad3c3b2da2b38e9f5946129918a8d37f18cb75654dab06914a1967d3cc', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1014, hash: '82f63bc7ca1b91ef13c892be255c7c649a1aab002e09f1eeccfe6da3cdc8afe3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-OC55LUCV.css': {size: 87, hash: 'jdyWIUKGln8', text: () => import('./assets-chunks/styles-OC55LUCV_css.mjs').then(m => m.default)}
  },
};
