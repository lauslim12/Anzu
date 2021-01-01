/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6aa0dd6d6244174c27b2d9dc9c18b280"
  },
  {
    "url": "assets/css/0.styles.3c0e0e2b.css",
    "revision": "eada099a371b3911aaa73560b0191d50"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d81b273e.js",
    "revision": "6a49d0762703c289e4645dbc3e15ccb5"
  },
  {
    "url": "assets/js/11.f9954adf.js",
    "revision": "5cbb21f0edac4c5c61a740757d99a1a4"
  },
  {
    "url": "assets/js/12.454b9b08.js",
    "revision": "0cb92f64ed6d415408e4c1a1f2c756e2"
  },
  {
    "url": "assets/js/13.3fb3168b.js",
    "revision": "93985641b3870decae32e1cbba50908f"
  },
  {
    "url": "assets/js/14.6886d405.js",
    "revision": "9d2e25993ad5cd838c4f099ba31bc3cd"
  },
  {
    "url": "assets/js/15.37465401.js",
    "revision": "a496eaa20200d6127ce682de1560cb0b"
  },
  {
    "url": "assets/js/16.6686cb9e.js",
    "revision": "85d2d1ffd0db622bcc120e41c7689481"
  },
  {
    "url": "assets/js/17.9a680eb6.js",
    "revision": "f4ee68322beed8d117e0d8b2b555e268"
  },
  {
    "url": "assets/js/18.9c98e1b4.js",
    "revision": "71e4d101b4d4c9c391664c21cbe23212"
  },
  {
    "url": "assets/js/19.c2f49e3d.js",
    "revision": "7791566282fc7964466b0c500c0d8b9f"
  },
  {
    "url": "assets/js/2.00c218b4.js",
    "revision": "7c2b133b4ddd8d245a8448a5d8293569"
  },
  {
    "url": "assets/js/20.ae1026b8.js",
    "revision": "8b0a852e1e20da65666cda3134b6cbf7"
  },
  {
    "url": "assets/js/21.b701f6a2.js",
    "revision": "36dbe92874723c30870d1409baa8b3ad"
  },
  {
    "url": "assets/js/22.4517d9f8.js",
    "revision": "411c47dd520a003e177adb5ce167de3f"
  },
  {
    "url": "assets/js/23.0eb8c981.js",
    "revision": "45e064aab4295af9c101c1cb520fadb3"
  },
  {
    "url": "assets/js/24.c1675124.js",
    "revision": "8dc7fd1b2e076ec3d81d439743a85bf7"
  },
  {
    "url": "assets/js/25.9cedbf6e.js",
    "revision": "f9f8f6610d9c5868370e44f4b44472f4"
  },
  {
    "url": "assets/js/3.7ffcbd81.js",
    "revision": "33b4db11728e41bfb72abd432d986e42"
  },
  {
    "url": "assets/js/4.29522062.js",
    "revision": "eef5b212e16cc580a8e3433b12f5041c"
  },
  {
    "url": "assets/js/5.141423bb.js",
    "revision": "ee3d4910160e3c366c6320526c49a493"
  },
  {
    "url": "assets/js/6.685b0a0b.js",
    "revision": "5f2c948f05bcd231237eea8876b8b347"
  },
  {
    "url": "assets/js/7.0e63420f.js",
    "revision": "64893169496f377eaf19ab47a73e146c"
  },
  {
    "url": "assets/js/8.0618f2cb.js",
    "revision": "f86c0510eb3d7796a30cf70a6fc7939b"
  },
  {
    "url": "assets/js/9.d3af6832.js",
    "revision": "f658071924da19ce15417e337ef3e168"
  },
  {
    "url": "assets/js/app.04ddaf61.js",
    "revision": "9eff434fa4ed5967ef6fd9d748eedda9"
  },
  {
    "url": "automation.html",
    "revision": "2bd371d17cf4b2662a9cd1a68f596fec"
  },
  {
    "url": "automation/setup-automation.html",
    "revision": "076b240e61760c97da0689322c4355ac"
  },
  {
    "url": "commands.html",
    "revision": "81442a1f1b35cea88b285292f2252847"
  },
  {
    "url": "commands/admin-commands.html",
    "revision": "03181771015d3e6be1828d1393d6905e"
  },
  {
    "url": "commands/behavior-commands.html",
    "revision": "ad23384c224b0992923d83bb690a7bed"
  },
  {
    "url": "commands/error-commands.html",
    "revision": "80a9e226332f9359be5254213e95012c"
  },
  {
    "url": "commands/task-commands.html",
    "revision": "3595a27ae656807a0d8a2b4a14557e4d"
  },
  {
    "url": "contribution.html",
    "revision": "ed7932115474ed974986ca9d2b2c351a"
  },
  {
    "url": "contribution/CHANGELOG.html",
    "revision": "a175dc567eaec68813a3fac0b8196cc3"
  },
  {
    "url": "contribution/CONTRIBUTING.html",
    "revision": "e3080c1fc91c32c3497120233d8bbeac"
  },
  {
    "url": "contribution/credits.html",
    "revision": "1f537303b1c607d5f8c756a1d87a7a26"
  },
  {
    "url": "contribution/LICENSE.html",
    "revision": "65f47ee68a689e2b7a74a2d431c859f0"
  },
  {
    "url": "getting-started.html",
    "revision": "0b42d7c3bff096f31e39675da75a1cc3"
  },
  {
    "url": "getting-started/configurations.html",
    "revision": "796081edb2b0bdcbd83b19a10e5c0fe1"
  },
  {
    "url": "getting-started/installation.html",
    "revision": "5c601c789a50efd2529032f021ba5995"
  },
  {
    "url": "getting-started/requirements.html",
    "revision": "84ba357fd2dd1c8beecdb035205aa6fa"
  },
  {
    "url": "icons/robot-face-icon-128.png",
    "revision": "8ed7f8e4da229c99ced48ed25328eabf"
  },
  {
    "url": "icons/robot-face-icon-48.png",
    "revision": "e3f1181d230a449ddd2969bf089e7f66"
  },
  {
    "url": "icons/robot-face-icon-512.png",
    "revision": "bd33db95a4a990ec4eeb95724a6d7a12"
  },
  {
    "url": "icons/robot-face-icon-72.png",
    "revision": "fe85ac8a0a7c518cf52447779e6bc610"
  },
  {
    "url": "icons/robot-face-icon-96.png",
    "revision": "85be67508c718286119c2a15fa2b0dd2"
  },
  {
    "url": "index.html",
    "revision": "4e1438895f94bb72405e03fde607e24d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
