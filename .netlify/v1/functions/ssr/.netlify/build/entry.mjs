import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_C7zLbp0D.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/ask-n-answer.astro.mjs');
const _page2 = () => import('./pages/ease-comparison.astro.mjs');
const _page3 = () => import('./pages/glossary/_slug_.astro.mjs');
const _page4 = () => import('./pages/glossary.astro.mjs');
const _page5 = () => import('./pages/machine-history.astro.mjs');
const _page6 = () => import('./pages/magic-formula-measurement.astro.mjs');
const _page7 = () => import('./pages/patterns.astro.mjs');
const _page8 = () => import('./pages/practice.astro.mjs');
const _page9 = () => import('./pages/sizing-chart.astro.mjs');
const _page10 = () => import('./pages/tools.astro.mjs');
const _page11 = () => import('./pages/wizards/boat-neck-sweater.astro.mjs');
const _page12 = () => import('./pages/wizards/diy-blanket.astro.mjs');
const _page13 = () => import('./pages/wizards/gauge-calculator.astro.mjs');
const _page14 = () => import('./pages/wizards/gauge-conversion-calculator.astro.mjs');
const _page15 = () => import('./pages/wizards/gauge-difference.astro.mjs');
const _page16 = () => import('./pages/wizards/magic-formula-measurement.astro.mjs');
const _page17 = () => import('./pages/wizards/neckline-and-shoulder-shaping.astro.mjs');
const _page18 = () => import('./pages/wizards/neckline-shaping-practice-2.astro.mjs');
const _page19 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/ask-n-answer.astro", _page1],
    ["src/pages/ease-comparison.astro", _page2],
    ["src/pages/glossary/[slug].astro", _page3],
    ["src/pages/glossary/index.astro", _page4],
    ["src/pages/machine-history.astro", _page5],
    ["src/pages/magic-formula-measurement.astro", _page6],
    ["src/pages/patterns.astro", _page7],
    ["src/pages/practice.astro", _page8],
    ["src/pages/sizing-chart.astro", _page9],
    ["src/pages/tools.astro", _page10],
    ["src/pages/wizards/boat-neck-sweater.astro", _page11],
    ["src/pages/wizards/diy-blanket.astro", _page12],
    ["src/pages/wizards/gauge-calculator.astro", _page13],
    ["src/pages/wizards/gauge-conversion-calculator.astro", _page14],
    ["src/pages/wizards/gauge-difference.astro", _page15],
    ["src/pages/wizards/magic-formula-measurement.astro", _page16],
    ["src/pages/wizards/neckline-and-shoulder-shaping.astro", _page17],
    ["src/pages/wizards/neckline-shaping-practice-2.astro", _page18],
    ["src/pages/index.astro", _page19]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "2af86291-c471-47c5-a8a5-b9405004fbef"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
