if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const c=e=>n(e,t),d={module:{uri:t},exports:o,require:c};i[t]=Promise.all(r.map((e=>d[e]||c(e)))).then((e=>(s(...e),o)))}}define(["./workbox-42674def"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"index.html",revision:"c30987b6f9e117a9c7df9b79396f7670"},{url:"install.bundle.js",revision:"2eece81ec2ac7c7822a27acf13f4c914"},{url:"main.bundle.js",revision:"7536e95d4bc8b53154dfd7a189dafb49"},{url:"src-sw.js",revision:"8a03a29a7ebd1b15e6835f642d8b0c21"}],{})}));
