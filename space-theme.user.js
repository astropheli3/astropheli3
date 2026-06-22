// ==UserScript==
// @name         Space Theme - Dark Teal (Pluralspace)
// @namespace    github.com/openstyles/stylus
// @version      1.0.2
// @description  Makes UserStyle compatible with mobile Safari.
// @match        https://pluralspace.app/*
// @run-at       document-end
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle(`
/* Global Variables & Colors */
html {
    background-image: linear-gradient(to bottom, #041b1a, #0d392d) !important;
    --color-ps-950: linear-gradient(to bottom, #041b1a, #0d392d) !important;
    --color-ps-900: #0d392d !important;
    --color-ps-800: #1a4948 !important;
    --color-ps-700: #1f5342 !important;
    --color-ps-600: #276253 !important;
    --color-ps-500: #a0cea1 !important;
    --color-ps-400: #a0cea1 !important;
    --color-ps-300: #c9fffe !important;
    --color-ps-text: #ffffff !important;
    --color-ps-text-secondary: #c9fffe !important;
    --color-ps-text-muted: #ffffff !important;
    --color-ps-text-faint: #828d82 !important;
    --color-ps-text-heading: #ffffff !important;
    --color-violet-50: #164b36 !important;
    --color-violet-100: #27624a !important;
    --color-violet-200: #a0cea1 !important;
    --color-violet-300: #edf8fe !important;
    --color-violet-400: #a0cea1 !important;
    --color-violet-500: #14573d !important;
    --color-violet-700: #1f6f5b !important;
    --color-violet-800: #1f6f5b !important;
    --color-violet-900: #04081b !important;
    --color-violet-950: #04081b !important;
    --color-amber-50: #a0cea1 !important;
    --color-amber-100: #164b36 !important;
    --color-amber-600: #a0cea1 !important;
    --color-amber-800: #a0cea1 !important;
    --color-amber-900: #edf8fe !important;
    --color-amber-700: #edf8fe !important;
    --color-danger: #4267b8 !important;
    --color-amber-400: #42acb8 !important;
    --color-violet-600: #1f6337fa !important;     
    --color-zinc-700: #0e2a26 !important;
    --color-zinc-200: #edf8fe !important;
    --color-ps-border: #0e3934 !important;
    --color-accent: #27624a !important;
    --color-accent-foreground: #ffffff !important;
    --color-accent-content: #c8cea0 !important;
}

/* Utilities Override */
.text-violet-400 { color: #fff !important; }
.text-violet-500 { color: #a0cea1 !important; }
.dark\\:text-zinc-400:where(.dark, .dark *) { color: #a0cea1 !important; }
.pixel-bg {
    --bg-mix: color-mix(in oklab, #1ff27f 15%, transparent) !important;
    background-image: linear-gradient(var(--bg-mix) 1px, #0000 1px), linear-gradient(90deg, var(--bg-mix) 1px, #0000 1px) !important;
}

h1, h2, h3, h4, h5, h6, .card-title, .navbar-brand {
    color: #86cfa8 !important;
    font-weight: lighter !important;
}

/* Moving Stars Background */
.dark .pixel-bg {
    background-color: #308d6c !important;
    background-image: url(https://i.postimg.cc/mrzhkDgT/Four-Souls-Background-Star-Layer05.png),
    url(https://i.postimg.cc/6QrJMJjt/Four-Souls-Background-Star-Layer04.png),
    url(https://i.postimg.cc/mrzhkDgT/Four-Souls-Background-Star-Layer03.png),
    url(https://i.postimg.cc/fRd6bQh0/Four-Souls-Background-Star-Layer02.png),
    url(https://i.postimg.cc/mkq5b8Xh/Four-Souls-Background-Star-Layer01.png),
    url(https://i.postimg.cc/43ZFNK5q/Four-Souls-Background.png) !important;
    animation: planetariumBackground 180s linear infinite !important;
    background-size: 600px 400px, 600px 400px, 600px 400px, 600px 400px, 600px 400px, 1200px 800px !important;
    background-blend-mode: screen, screen, screen, screen, screen, overlay !important;
}

@keyframes planetariumBackground {
    from { background-position: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%; }
    to { background-position: -7200px 4800px, -6000px 4000px, -4800px 3200px, -3600px 2400px, -2400px 1600px, -1200px 800px; }
}

/* Profile Pictures Masks */
a.block > div.justify-center.flex > div.relative > div.flex.items-center.justify-center img,
a.relative > div.relative > div.flex.items-center.justify-center img,
article.relative.flex:has(a.flex) > div.relative > div.flex.items-center.justify-center img,
div > div.justify-between > div.relative > div.flex img,
div > div.flex.items-center img,
div.overflow-hidden > header.flex ~ div > ul > li > a.flex.items-center img,
section.flex > div.overflow-y-auto > div.flex > div.shrink-0 img,
div.grid.grid-cols-2 > div.group.flex > span.outline-none > button[type="button"].relative > div.flex.items-center.justify-center img,
section.border.border-border > header ~ div.grid > div.group.flex > div.relative > a > div.flex img {
    -webkit-mask-size: 100% !important;
    -webkit-mask-repeat: no-repeat !important;
    -webkit-mask-position: center !important;
    border-radius: 0px !important;
    box-shadow: none !important;
    background-color: transparent !important;
    -webkit-mask-image: var(--url) !important;
    --url: url(https://i.postimg.cc/dttXGTPW/giphy-ezgif-com-crop.gif) !important;
}

/* Layout and Transparencies */
aside.fixed, .bg-bg-2 {
    background-color: rgba(113, 246, 255, .05) !important;
    backdrop-filter: blur(15px) !important;
}
header.sticky.top-0.flex:has(div.flex.items-center), .bg-surface {
    background-color: rgba(5, 29, 17, .39) !important;
    backdrop-filter: blur(3px) !important;
}

.h-24 { height: 140px !important; display: inline-block !important; z-index: 0 !important; mask-image: linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 75%) !important; -webkit-mask-image: linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 70%) !important; }
.h-48 { height: 100px !important; z-index: 0 !important; mask-image: linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 15%) !important; -webkit-mask-image: linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 11%) !important; }

/* Dashboard Headers */
div.flex.flex-col > div:has(h1.font-display) > p { visibility: hidden !important; }
div.flex.flex-col > div:has(h1.font-display) > p:before { content: "welcome to the" !important; visibility: visible !important; position: absolute !important; font-family: monospace !important; font-weight: bold !important; font-size: 2.5vh !important; }
h1.font-display { visibility: hidden !important; }
h1.font-display:before { content: "COMMANDO ROOM" !important; visibility: visible !important; position: absolute !important; font-weight: lighter !important; font-style: normal !important; }
h1.font-display span { display: none !important; }

/* Custom Icons */
div.mb-6.flex.gap-2.items-center > a > div > img, div.mb-6.flex.items-center.justify-between > a > div > img { content: url('https://i.ibb.co/kC5ttPw/giphy.gif') !important; width: 100% !important; height: auto !important; }
nav > a:nth-child(1) > svg { background-image: url('https://i.ibb.co/vC82FRbJ/icons8-raumf-hre-64.png') !important; }
nav > a:nth-child(2) > svg { background-image: url('https://i.ibb.co/SX0R0FfX/icons8-astronaut-64.png') !important; }
nav > a:nth-child(3) > svg { background-image: url('https://i.ibb.co/VpNMgWpY/icons8-satellit-64.png') !important; }
`);
