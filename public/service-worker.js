if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let r={};const t=e=>a(e,n),d={module:{uri:n},exports:r,require:t};s[n]=Promise.all(c.map((e=>d[e]||t(e)))).then((e=>(i(...e),r)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"97d9970a7901002ca7b04087409fcf0e"},{url:"/_next/static/chunks/12038df7-51b17cad9f1a7942.js",revision:"cx3ArNqXK2h0Z4rMyux6E"},{url:"/_next/static/chunks/222-23a40447c46280ae.js",revision:"cx3ArNqXK2h0Z4rMyux6E"},{url:"/_next/static/chunks/333-37213d2ef5db9c6d.js",revision:"cx3ArNqXK2h0Z4rMyux6E"},{url:"/_next/static/chunks/425-b58dae49a8f2a9ff.js",revision:"cx3ArNqXK2h0Z4rMyux6E"},{url:"/_next/static/chunks/4f9d9cd8-314dc1cf6bcd2e99.js",revision:"cx3ArNqXK2h0Z4rMyux6E"},{url:"/_next/static/chunks/50-95725d779d624a58.js",revision:"cx3ArNqXK2h0Z4rMyux6E"},{url:"/_next/static/chunks/596-ed4a1bed6a665460.js",revision:"cx3ArNqXK2h0Z4rMyux6E"},{url:"/_next/static/chunks/685-768df2d4c4fbc1c3.js",revision:"cx3ArNqXK2h0Z4rMyux6E"},{url:"/_next/static/chunks/749-a6efd0e38d1a9dd9.js",revision:"cx3ArNqXK2h0Z4rMyux6E"},{url:"/_next/static/chunks/93854f56-5348706620378d66.js",revision:"cx3ArNqXK2h0Z4rMyux6E"},{url:"/_next/static/chunks/app/about/page-5c15b69fc3f83ba8.js",revision:"cx3ArNqXK2h0Z4rMyux6E"},{url:"/_next/static/chunks/app/contact/loading-0af6447f757f9408.js",revision:"cx3ArNqXK2h0Z4rMyux6E"},{url:"/_next/static/chunks/app/contact/page-f8beb12f27f2b7e4.js",revision:"cx3ArNqXK2h0Z4rMyux6E"},{url:"/_next/static/chunks/app/dashboard/(auth)/login/page-77c15aa763785408.js",revision:"cx3ArNqXK2h0Z4rMyux6E"},{url:"/_next/static/chunks/app/dashboard/(auth)/register/page-bd01ec9b85747eba.js",revision:"cx3ArNqXK2h0Z4rMyux6E"},{url:"/_next/static/chunks/app/dashboard/admin/page-5a651274174a143c.js",revision:"cx3ArNqXK2h0Z4rMyux6E"},{url:"/_next/static/chunks/app/dashboard/page-6e207c9e7d802506.js",revision:"cx3ArNqXK2h0Z4rMyux6E"},{url:"/_next/static/chunks/app/layout-12bd6be80b21ddf4.js",revision:"cx3ArNqXK2h0Z4rMyux6E"},{url:"/_next/static/chunks/app/page-4be61fb6d4a33e88.js",revision:"cx3ArNqXK2h0Z4rMyux6E"},{url:"/_next/static/chunks/app/portfolio/%5Bid%5D/page-39e5cd4836647a71.js",revision:"cx3ArNqXK2h0Z4rMyux6E"},{url:"/_next/static/chunks/app/portfolio/layout-f66311d5198c78ed.js",revision:"cx3ArNqXK2h0Z4rMyux6E"},{url:"/_next/static/chunks/app/portfolio/page-b1e280c364f52312.js",revision:"cx3ArNqXK2h0Z4rMyux6E"},{url:"/_next/static/chunks/fd9d1056-c4a247ce7b6b11b2.js",revision:"cx3ArNqXK2h0Z4rMyux6E"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"cx3ArNqXK2h0Z4rMyux6E"},{url:"/_next/static/chunks/main-app-ded7b685fcf2b968.js",revision:"cx3ArNqXK2h0Z4rMyux6E"},{url:"/_next/static/chunks/main-b0f316dd148fa083.js",revision:"cx3ArNqXK2h0Z4rMyux6E"},{url:"/_next/static/chunks/pages/_app-52924524f99094ab.js",revision:"cx3ArNqXK2h0Z4rMyux6E"},{url:"/_next/static/chunks/pages/_error-c92d5c4bb2b49926.js",revision:"cx3ArNqXK2h0Z4rMyux6E"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-84eabd67471f0b53.js",revision:"cx3ArNqXK2h0Z4rMyux6E"},{url:"/_next/static/css/7c6f9d1287cc22ed.css",revision:"7c6f9d1287cc22ed"},{url:"/_next/static/cx3ArNqXK2h0Z4rMyux6E/_buildManifest.js",revision:"66a650a40453999ca40002ee32e3481e"},{url:"/_next/static/cx3ArNqXK2h0Z4rMyux6E/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/1c57ca6f5208a29b-s.woff2",revision:"491a7a9678c3cfd4f86c092c68480f23"},{url:"/_next/static/media/3ac9e278b157e2f6-s.p.woff2",revision:"01a0c59494358c146cae3bbcb1ca4344"},{url:"/_next/static/media/3dbd163d3bb09d47-s.woff2",revision:"93dcb0c222437699e9dd591d8b5a6b85"},{url:"/_next/static/media/5647e4c23315a2d2-s.woff2",revision:"e64969a373d0acf2586d1fd4224abb90"},{url:"/_next/static/media/71ad252c9224a7b0-s.woff2",revision:"517888cd05d3f0555135b4be1e96fe4d"},{url:"/_next/static/media/7be645d133f3ee22-s.woff2",revision:"3ba6fb27a0ea92c2f1513add6dbddf37"},{url:"/_next/static/media/7c53f7419436e04b-s.woff2",revision:"fd4ff709e3581e3f62e40e90260a1ad7"},{url:"/_next/static/media/934c4b7cb736f2a3-s.p.woff2",revision:"1f6d3cf6d38f25d83d95f5a800b8cac3"},{url:"/_next/static/media/cff529cd86cc0276-s.woff2",revision:"c2b2c28b98016afb2cb7e029c23f1f9f"},{url:"/_next/static/media/e416a694f2e9cbce-s.woff2",revision:"0732b9a8d1307e0538ec2ded18e4c064"},{url:"/icon-192x192.png",revision:"f180f0a73ea67e0a1406df6761634b03"},{url:"/icon-256x256.png",revision:"8e8656545a2a337ccf80bbc8777a5724"},{url:"/icon-384x384.png",revision:"0eed0f40e51cb6402f35ba17a62393bc"},{url:"/icon-512x512.png",revision:"abe99d5a1fdb3ca2c35cc862649ba358"},{url:"/images/Accueil.png",revision:"72972bcb54c321fadd3de6ba1cc594dc"},{url:"/images/HeroContact.png",revision:"58dfabdc2564a5f6ffea6db848b8bc60"},{url:"/images/HeroContact.svg",revision:"51bb67e7461865236e96eeced19b005c"},{url:"/images/Learn_Home.jpg",revision:"f5d8ee30a4de8e1d34bd06d43690d6da"},{url:"/images/React-icon.svg",revision:"8e26f22094a11f6a689d8302dc30782c"},{url:"/images/Votre.jpg",revision:"cdcfbc82ebeba05fdda37f8c7b16eed9"},{url:"/images/expressjs.svg",revision:"9de32921fe1e3899c721d066d10da3ef"},{url:"/images/headshot_kb.jpg",revision:"09b390b487c684c0c1973d09d9778662"},{url:"/images/heroMoi.png",revision:"2336b500b460bf0ceea7dd2f41d29b92"},{url:"/images/intheskyline.jpg",revision:"5515ec4ddf5de5fdf14490efb1a7b59f"},{url:"/images/kworks.png",revision:"7a0d3de27c056f63bd16601474a3edb2"},{url:"/images/mongodb.svg",revision:"c2a864c96dbfc449ec45dd7ac4438628"},{url:"/images/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/images/nodejs-icon.svg",revision:"ddd3342cd4917adc644ff531e3ec945d"},{url:"/images/techno.gif",revision:"ed37258e8cd7275f0141a601f8e3a01c"},{url:"/images/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"},{url:"/images/workHard.jpg",revision:"a530991da23705d21faef375b9b0cc31"},{url:"/manifest.json",revision:"273f33a6d5219cadb766b66a6b959daa"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
