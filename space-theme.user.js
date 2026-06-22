// ==UserScript==
// @name         Space Theme - Dark Teal (Pluralspace)
// @namespace    github.com/openstyles/stylus
// @version      1.0.1
// @description  Converts the Space Theme UserStyle into a functioning UserScript for mobile Safari.
// @match        https://pluralspace.app/*
// @run-at       document-end
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle(`
/* colour theme, Credits to GoreVu777 and the ConstellationCollective*/
html[data-theme=dark], html:not(.light) {
    background-image: linear-gradient(to bottom, #041b1a, #0d392d) !important;
    --color-ps-950: linear-gradient (to bottom, #041b1a, #0d392d) !important;
    --color-ps-900: #0d392d;
    --color-ps-800: #1a4948;
    --color-ps-700: #1f5342;
    --color-ps-600: #276253;
    --color-ps-500: #a0cea1;
    --color-ps-400: #a0cea1;
    --color-ps-300: #c9fffe;
    --color-ps-text: #ffffff;
    --color-ps-text-secondary: #c9fffe;
    --color-ps-text-muted: #ffffff;
    --color-ps-text-faint: #828d82;
    --color-ps-text-heading: #ffffff;
    --color-violet-50: #164b36;
    --color-violet-100: #27624a;
    --color-violet-200: #a0cea1;
    --color-violet-300: #edf8fe;
    --color-violet-400: #a0cea1;
    --color-violet-500: #14573d;
    --color-violet-700: #1f6f5b;
    --color-violet-800: #1f6f5b;
    --color-violet-900: #04081b;
    --color-violet-950: #04081b;
    --color-amber-50: #a0cea1;
    --color-amber-100: #164b36;
    --color-amber-600: #a0cea1;
    --color-amber-800: #a0cea1;
    --color-amber-900: #edf8fe;
    --color-amber-700: #edf8fe;
    --color-danger: #4267b8;
    --color-amber-400: #42acb8;
    --color-violet-600: #1f6337fa;     
    --color-zinc-700: #0e2a26;
    --color-zinc-200: #edf8fe;
    --color-ps-border: #0e3934;
    --color-accent: #27624a;
    --color-accent-foreground: #ffffff;
    --color-accent-content: #c8cea0;
}

@layer utilities {
    .text-violet-400 { color: #fff; }
    .text-violet-500 { color: #a0cea1 !important; }
    .dark\\:text-zinc-400:where(.dark, .dark *) { color: #a0cea1 !important; }
    .pixel-bg {
        --bg-mix: color-mix(in oklab, #1ff27f 15%, transparent);
        background-image: linear-gradient(var(--bg-mix) 1px, #0000 1px), linear-gradient(90deg, var(--bg-mix) 1px, #0000 1px);
    }
}

h1, h2, h3, h4, h5, h6, .card-title, .navbar-brand {
    color: #86cfa8;
    font-weight: lighter;
}

/* moving stars background */
.dark .pixel-bg {
    background-color: #308d6c;
    background-image: url(https://i.postimg.cc/mrzhkDgT/Four-Souls-Background-Star-Layer05.png),
    url(https://i.postimg.cc/6QrJMJjt/Four-Souls-Background-Star-Layer04.png),
    url(https://i.postimg.cc/mrzhkDgT/Four-Souls-Background-Star-Layer03.png),
    url(https://i.postimg.cc/fRd6bQh0/Four-Souls-Background-Star-Layer02.png),
    url(https://i.postimg.cc/mkq5b8Xh/Four-Souls-Background-Star-Layer01.png),
    url(https://i.postimg.cc/43ZFNK5q/Four-Souls-Background.png);
    animation: planetariumBackground 180s linear infinite;
    background-size: 600px 400px, 600px 400px, 600px 400px, 600px 400px, 600px 400px, 1200px 800px;
    background-blend-mode: screen, screen, screen, screen, screen, overlay;
}

@keyframes planetariumBackground {
    from { background-position: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%; }
    to { background-position: -7200px 4800px, -6000px 4000px, -4800px 3200px, -3600px 2400px, -2400px 1600px, -1200px 800px; }
}

/* Profile pictures spinning stars */
a.block > div.justify-center.flex > div.relative > div.flex.items-center.justify-center,
a.relative > div.relative > div.flex.items-center.justify-center,
article.relative.flex:has(a.flex) > div.relative > div.flex.items-center.justify-center,
div > div.justify-between > div.relative > div.flex,
div > div.flex.items-center,
div.overflow-hidden > header.flex ~ div > ul > li > a.flex.items-center,
section.flex > div.overflow-y-auto > div.flex > div.shrink-0,
div.grid.grid-cols-2 > div.group.flex > span.outline-none > button[type="button"].relative > div.flex.items-center.justify-center,
section.border.border-border > header ~ div.grid > div.group.flex > div.relative > a > div.flex {
    border-radius: 0px;
    background-color: transparent !important;
}

a.block > div.justify-center.flex > div.relative > div.flex.items-center.justify-center img,
a.relative > div.relative > div.flex.items-center.justify-center img,
article.relative.flex:has(a.flex) > div.relative > div.flex.items-center.justify-center img,
div > div.justify-between > div.relative > div.flex img,
div > div.flex.items-center img,
div.overflow-hidden > header.flex ~ div > ul > li > a.flex.items-center img,
section.flex > div.overflow-y-auto > div.flex > div.shrink-0 img,
div.grid.grid-cols-2 > div.group.flex > span.outline-none > button[type="button"].relative > div.flex.items-center.justify-center img,
section.border.border-border > header ~ div.grid > div.group.flex > div.relative > a > div.flex img {
    -webkit-mask-size: 100%;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-position: center;
    border-radius: 0px;
    box-shadow: none;
    background-color: transparent !important;
    -webkit-mask-image: var(--url);
    --url: url(https://i.postimg.cc/dttXGTPW/giphy-ezgif-com-crop.gif);
}

/* Front borders configuration */
a.block > div.justify-center.flex > div.relative > div.flex.items-center.justify-center,
a.relative > div.relative > div.flex.items-center.justify-center,
article.relative.flex:has(a.flex) > div.relative > div.flex.items-center.justify-center,
div > div.justify-between > div.relative > div.flex,
section.flex > div.overflow-y-auto > div.flex > div.shrink-0,
div.grid.grid-cols-2 > div.group.flex > span.outline-none > button[type="button"].relative > div.flex.items-center.justify-center,
section.border.border-border > header ~ div.grid > div.group.flex > div.relative > a > div.flex {
    filter: drop-shadow(2px 2px 2px var(--tw-ring-color)) drop-shadow(2px -2px 2px var(--tw-ring-color)) drop-shadow(-2px 2px 2px var(--tw-ring-color)) drop-shadow(-2px -1px 2px var(--tw-ring-color));
    --tw-ring-shadow: 0px;
}
a.block > div.justify-center.flex > div.relative > div.flex.items-center.justify-center:not([style*="--tw-ring-color"]) {
    --tw-ring-color: #1b514b;
}

/* Transparent side-/top-bar and dashboard brackets */
aside.fixed, .bg-bg-2 {
    background-color: rgba(113, 246, 255, .05);
    backdrop-filter: var(--tw-backdrop-blur);
    --tw-backdrop-blur: blur(15px);
}
header.sticky.top-0.flex:has(div.flex.items-center), .bg-surface {
    background-color: rgba(5, 29, 17, .39);
    backdrop-filter: var(--tw-backdrop-blur);
    --tw-backdrop-blur: blur(3px);          
}

.h-24 {
    height: 140px;
    display: inline-block;
    z-index: 0;
    mask-image: linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 75%);
    -webkit-mask-image: linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 70%);
}
.h-48 {
    height: 100px;
    z-index: 0;
    mask-image: linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 15%);
    -webkit-mask-image: linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 11%);
}

/* Custom member card view rules */
.bg-surface > div.h-24 {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 185px; z-index: 1;
}
.bg-surface > a {
    position: relative; padding-top: 6rem; z-index: 1;
}
a.block > div:first-child { margin-top: -3.5rem; }
a.block > div:first-child > div.relative > div {
    transform: scale(1.5) translateZ(0); transform-origin: center bottom; bottom: auto; top: auto; overflow: visible; z-index: 2;
}
a.block > div:first-child > div.relative > span {
    z-index: -2; transform: scale(1.4); transform-origin: center top; left: 90px; bottom: 40px; padding-left: 2rem;
}

button.relative > div.size-16 {          
    transform: scale(1.3) translateZ(0); overflow: visible !important;
}

/* Fronting indicator icon */
div.grid > div.group.items-center.flex > span.inline-flex > button.relative > div.justify-center.items-center.flex ~ span.ring-2 {
    --size: 4vh; height: var(--size); width: var(--size); bottom: -2vh; right: -1.6vh; visibility: hidden; transform: rotate(-1deg);
}
div.grid > div.group.items-center.flex > span.inline-flex > button.relative > div.justify-center.items-center.flex ~ span.ring-2:before {
    content: "🚀"; visibility: visible; font-size: 2.1vh; color: rgba(0, 0, 0, 0); background-color: inherit; background-clip: text; 
    filter: drop-shadow(1px 1px 1px var(--color-surface)) drop-shadow(1px -1px 1px var(--color-surface)) drop-shadow(-1px 1px 1px var(--color-surface)) drop-shadow(-1px -1px 1px var(--color-surface));
}

/* Dashboard Welcomes */
div.flex.flex-col > div:has(h1.font-display) > p {
    visibility: hidden;
}
div.flex.flex-col > div:has(h1.font-display) > p:before {
    content: "welcome to the"; visibility: visible; position: absolute; font-family: monospace; font-weight: bold; font-size: 2.5vh;
}
h1.font-display {
    visibility: hidden;
}
h1.font-display:before {
    content: "COMMANDO ROOM"; visibility: visible; position: absolute; font-weight: lighter; font-style: normal;
}
h1.font-display span { display: none; }

/* Thought of the day custom blocks */
aside.space-y-4 > div.sticky-note-wrap > div.sticky-note {
    background-color: transparent; background-image: linear-gradient(to bottom, #0d5a5a, #205c4d73); background-repeat: no-repeat; background-size: cover; border: 8px solid transparent; border-radius: 50px; box-shadow: unset; --note-ink: teal;
}
aside.space-y-4 > div.sticky-note-wrap > div.sticky-note > div.flex.justify-between { align-items: center; }
aside.space-y-4 > div.sticky-note-wrap > div.sticky-note > div.flex.justify-between > p.tracking-wide {
    visibility: hidden; overflow-wrap: break-word; position: relative; width: 100%; text-align: center;
}
aside.space-y-4 > div.sticky-note-wrap > div.sticky-note > div.flex.justify-between > p.tracking-wide:before {
    position: sticky; text-align: left; visibility: visible; content: '『 communication console 』'; color: #a0cea1; font-family: unset; font-size: 120%; text-transform: uppercase; font-weight: normal; font-style: normal;
}
aside.space-y-4 > div.sticky-note-wrap > div.sticky-note > div.flex.justify-between > div.flex > a { --note-ink: #71a68f; }
aside.space-y-4 > div.sticky-note-wrap > div.sticky-note > div.flex.justify-between > div.flex > a:hover { --note-ink: cyan; }
aside.space-y-4 > div.sticky-note-wrap > div.sticky-note > div.flex.justify-between > div.flex > button { --note-ink: #71a68f; }
aside.space-y-4 > div.sticky-note-wrap > div.sticky-note > div.flex.justify-between > div.flex > button:hover { --note-ink: cyan; }
aside.space-y-4 > div.sticky-note-wrap > div.sticky-note > div.flex.items-start:not(.justify-between) > p.leading-snug { --note-ink: #6eb9b2; font-family: monospace; font-style: normal; text-align: center; }
aside.space-y-4 > div.sticky-note-wrap > div.sticky-note > div.flex.items-end { align-items: center; }
aside.space-y-4 > div.sticky-note-wrap > div.sticky-note > div.flex.items-end > div.flex.flex-col > div.text-left > span { --note-ink: #71a68f; font-family: monospace; font-style: normal; }
aside.space-y-4 > div.sticky-note-wrap > div.sticky-note > div.flex.items-end > div.flex.flex-col > div.text-left ~ span { --note-ink: #71a68f; font-family: monospace; font-style: normal; }
aside.space-y-4 > div.sticky-note-wrap > div.sticky-note > div.flex.items-end > span.inline-flex { --note-ink: #71a68f; font-family: monospace; font-style: normal; }

/* Custom Navigation Icons replacing SVGs */
div.mb-6.flex.gap-2.items-center > a > div > img, div.mb-6.flex.items-center.justify-between > a > div > img { content: url('https://i.ibb.co/kC5ttPw/giphy.gif'); width: 100%; height: auto; }
nav > a:nth-child(1) > svg, nav > a:nth-child(2) > svg, nav > a:nth-child(3) > svg, nav > a:nth-child(4) > svg, nav > a:nth-child(5) > svg, nav > a:nth-child(6) > svg, nav > a:nth-child(7) > svg, nav > a:nth-child(8) > svg, nav > a:nth-child(9) > svg, nav > a:nth-child(10) > svg, nav > a:nth-child(11) > svg { display: inline-block; visibility: visible; background-size: contain; background-repeat: no-repeat; background-position: center; width: 20px; height: 20px; }
nav > a:nth-child(1) > svg * , nav > a:nth-child(2) > svg * , nav > a:nth-child(3) > svg * , nav > a:nth-child(4) > svg * , nav > a:nth-child(5) > svg * , nav > a:nth-child(6) > svg * , nav > a:nth-child(7) > svg * , nav > a:nth-child(8) > svg * , nav > a:nth-child(9) > svg * , nav > a:nth-child(10) > svg * , nav > a:nth-child(11) > svg * { display: none; }

nav > a:nth-child(1) > svg { background-image: url('https://i.ibb.co/vC82FRbJ/icons8-raumf-hre-64.png'); }
nav > a:nth-child(2) > svg { background-image: url('https://i.ibb.co/SX0R0FfX/icons8-astronaut-64.png'); }
nav > a:nth-child(3) > svg { background-image: url('https://i.ibb.co/VpNMgWpY/icons8-satellit-64.png'); }
nav > a:nth-child(4) > svg { background-image: url('https://i.ibb.co/CXw8wfZ/icons8-sonnensystem-64.png'); }
nav > a:nth-child(5) > svg { background-image: url('https://i.ibb.co/xq0s0VzV/icons8-saturn-64.png'); }
nav > a:nth-child(6) > svg { background-image: url('https://i.ibb.co/W476qbGK/icons8-jupiter-64.png'); }
nav > a:nth-child(7) > svg { background-image: url('https://i.ibb.co/S7PcqtNm/icons8-sonne-64.png'); }
nav > a:nth-child(8) > svg { background-image: url('https://i.ibb.co/21TFW4Fb/icons8-asteroid-64.png'); }
nav > a:nth-child(9) > svg { background-image: url('https://i.ibb.co/twW3Yymw/icons8-planeten-64.png'); }
nav > a:nth-child(10) > svg { background-image: url('https://i.ibb.co/1f1HPKDR/icons8-fernrohr-64.png'); }
nav > a:nth-child(11) > svg { background-image: url('https://i.ibb.co/1t7kQqzz/icons8-roboter-64.png'); }

/* Sidebar layout hooks for tablet viewports */
[class*="lg:flex.w-20.px-3"] > nav > span > a { display: inline-block; visibility: visible; width: 20px; height: 20px; margin-top: 12px; background-color: transparent; background-position: center; background-size: contain; background-repeat: no-repeat; }
[class*="lg:flex.w-20.px-3"] > nav > span > a * { display: none; }
[class*="lg:flex.w-20.px-3"] > nav > span:nth-child(1) > a { background-image: url('https://i.ibb.co/vC82FRbJ/icons8-raumf-hre-64.png'); margin-top: 0px; }
[class*="lg:flex.w-20.px-3"] > nav > span:nth-child(2) > a { background-image: url('https://i.ibb.co/SX0R0FfX/icons8-astronaut-64.png'); }
[class*="lg:flex.w-20.px-3"] > nav > span:nth-child(3) > a { background-image: url('https://i.ibb.co/VpNMgWpY/icons8-satellit-64.png'); }
[class*="lg:flex.w-20.px-3"] > nav > span:nth-child(4) > a { background-image: url('https://i.ibb.co/CXw8wfZ/icons8-sonnensystem-64.png'); }
[class*="lg:flex.w-20.px-3"] > nav > span:nth-child(5) > a { background-image: url('https://i.ibb.co/xq0s0VzV/icons8-saturn-64.png'); }
[class*="lg:flex.w-20.px-3"] > nav > span:nth-child(6) > a { background-image: url('https://i.ibb.co/W476qbGK/icons8-jupiter-64.png'); }
[class*="lg:flex.w-20.px-3"] > nav > span:nth-child(7) > a { background-image: url('https://i.ibb.co/S7PcqtNm/icons8-sonne-64.png'); }
[class*="lg:flex.w-20.px-3"] > nav > span:nth-child(8) > a { background-image: url('https://i.ibb.co/21TFW4Fb/icons8-asteroid-64.png'); }
[class*="lg:flex.w-20.px-3"] > nav > span:nth-child(9) > a { background-image: url('https://i.ibb.co/twW3Yymw/icons8-planeten-64.png'); }
[class*="lg:flex.w-20.px-3"] > nav > span:nth-child(10) > a { background-image: url('https://i.ibb.co/1f1HPKDR/icons8-fernrohr-64.png'); }
[class*="lg:flex.w-20.px-3"] > nav > span:nth-child(11) > a { background-image: url('https://i.ibb.co/1t7kQqzz/icons8-roboter-64.png'); }

div.mt-auto.space-y-3 > nav > button > svg { display: inline-block; visibility: visible; background-image: url('https://i.ibb.co/99bmqZL2/icons8-radar-64.png'); background-size: contain; background-repeat: no-repeat; background-position: center; width: 20px; height: 20px; }
div.mt-auto.space-y-3 > nav > button > svg * { display: none; }
div.mt-auto.space-y-3 > nav > form > button > svg { display: inline-block; visibility: visible; background-image: url('https://i.ibb.co/DPw8gzgX/icons8-finsternis-64.png'); background-size: contain; background-repeat: no-repeat; background-position: center; width: 20px; height: 20px; }
div.mt-auto.space-y-3 > nav > form > button > svg * { display: none; }
`);
