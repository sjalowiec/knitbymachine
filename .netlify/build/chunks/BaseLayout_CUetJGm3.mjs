import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as createAstro, f as addAttribute, l as renderHead, i as renderComponent, j as renderSlot } from './astro/server_BOl9DzBm.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", `<section class="kbm-header-wrap"> <header class="kbm-header"> <div class="kbm-container kbm-topbar"> <a href="/" class="kbm-logo"> <div class="kbm-logo-text">KNIT<span class="by">by</span>MACHINE</div> <div class="tagline">Tools and inspiration for confident machine knitters</div> </a> <!-- Hamburger button for mobile --> <button class="kbm-hamburger" aria-label="Toggle menu" aria-expanded="false"> <span></span> <span></span> <span></span> </button> <nav class="kbm-nav" aria-label="Primary"> <ul class="kbm-menu"> <li class="dd"> <a href="#">Patterns <span class="caret">\u25BE</span></a> <ul class="dd-panel"> <li><a href="/patterns">Patterns</a></li> <li><a href="/tools">Tools</a></li> <li><a href="/practice">Practice</a></li> </ul> </li> <li class="dd"> <a href="/workshops">Workshops <span class="caret">\u25BE</span></a> <ul class="dd-panel"> <li><a href="/workshops">Upcoming Events</a></li> <li><a href="/workshops">On-Demand</a></li> </ul> </li> <li class="dd"> <a href="#">Help Hub <span class="caret">\u25BE</span></a> <ul class="dd-panel help-menu"> <li><a href="/ask-n-answer">Ask \u2019n Answer (Tips)</a></li> <li><a href="/sizing-chart">Sizing Charts/References</a></li> <li><a href="/glossary">Glossary</a></li> <li><a href="/machine-history">Machine History</a></li> </ul> </li> <li class="login-li"><a class="kbm-login" href="#">Log In</a></li> </ul> </nav> </div> <div class="kbm-searchbar"> <div class="kbm-container kbm-search-wrap"> <input class="kbm-search-input" type="search" placeholder="Search\u2026" aria-label="Search"> <button class="kbm-search-btn" aria-label="Submit search"><i class="fa fa-search"></i></button> </div> </div> </header> </section> <script>
  (() => {
    const dds = document.querySelectorAll('.kbm-menu .dd');
    const isTouchLike =
      matchMedia('(hover: none), (pointer: coarse)').matches || window.innerWidth <= 1024;

    function closeAll(except) {
      dds.forEach(li => {
        if (li !== except) li.classList.remove('open');
      });
    }

    dds.forEach(li => {
      li.addEventListener('mouseenter', () => {
        clearTimeout(li._closeTimeout);
        li.classList.add('open');
      });
      li.addEventListener('mouseleave', () => {
        li._closeTimeout = setTimeout(() => li.classList.remove('open'), 250);
      });
    });

    if (isTouchLike) {
      dds.forEach(li => {
        const trigger = li.querySelector(':scope > a');
        trigger.addEventListener('click', e => {
          e.preventDefault();
          const nowOpen = li.classList.toggle('open');
          if (nowOpen) closeAll(li);
        });
      });
      document.addEventListener('click', e => {
        if (!e.target.closest('.kbm-nav')) closeAll();
      });
    }

    // Hamburger menu toggle
    const hamburger = document.querySelector('.kbm-hamburger');
    const nav = document.querySelector('.kbm-nav');
    
    if (hamburger && nav) {
      hamburger.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('mobile-open');
        hamburger.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', isOpen);
        
        // Prevent body scroll when menu is open on mobile
        if (isOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = '';
        }
      });

      // Close menu when clicking outside on mobile
      document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && 
            !nav.contains(e.target) && 
            !hamburger.contains(e.target) && 
            nav.classList.contains('mobile-open')) {
          nav.classList.remove('mobile-open');
          hamburger.classList.remove('active');
          hamburger.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
        }
      });
    }
  })();
<\/script>`])), maybeRenderHead());
}, "/home/runner/workspace/src/components/header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer aria-label="Site footer"> <div class="container"> <div class="footer-column"> <h4>Knit by Machine</h4> <p>Machine knitting made easier with tools, patterns, and instruction.</p> </div> <div class="footer-column"> <h4>What's Inside</h4> <a href="/patterns-draft">Patterns</a> <a href="/workshops">Workshops</a> <a href="/help-hub">Help Hub</a> </div> <div class="footer-column"> <h4>Resources</h4> <a href="/sizing-charts">Sizing Charts</a> <a href="/machine-history">Machine History</a> <a href="/calculators">Calculators</a> </div> <div class="footer-column"> <h4>Connect</h4> <a href="/contact-us">Contact Us</a> <a href="/about-us">About</a> <a href="/membership">Membership</a> <a href="/testimonials">Testimonials</a> <a href="/share-feedback">Share Feedback</a> </div> </div> <div class="footer-bottom"> <div>© <span id="year">${(/* @__PURE__ */ new Date()).getFullYear()}</span> Knit by Machine</div> <div class="legal-links"> <a href="/privacy-policy">Privacy Policy</a> <span>|</span> <a href="/terms-of-use">Terms of Use</a> <span>|</span> <a href="/refund-policy">Refund Policy</a> </div> </div> </footer>`;
}, "/home/runner/workspace/src/components/footer.astro", void 0);

const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title = "Knit by Machine", description = "Machine knitting tools and patterns" } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><meta name="description"${addAttribute(description, "content")}><!-- Fonts & icons --><link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Shadows+Into+Light+Two&display=swap" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main> ${renderSlot($$result, $$slots["default"])} <!-- Page content goes here --> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/home/runner/workspace/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, $$Header as a, $$Footer as b };
