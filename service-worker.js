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
    "revision": "6cf217b37c25a52739af6db4b80f73de"
  },
  {
    "url": "assets/css/0.styles.1ade6980.css",
    "revision": "c4a66d81769b934c96aabb43bbab4338"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d0bfff2e.js",
    "revision": "2cfd032f0ece3da925a6933e6510c1dd"
  },
  {
    "url": "assets/js/11.a890fac4.js",
    "revision": "8046d3843af00290c746035a259c7661"
  },
  {
    "url": "assets/js/12.f8b8e926.js",
    "revision": "05ec2358922a3fe25c9e0b89db690048"
  },
  {
    "url": "assets/js/13.9d8364c7.js",
    "revision": "6b809f7d7419a1b65063fe0d48724ecb"
  },
  {
    "url": "assets/js/14.71c426ca.js",
    "revision": "e6688b4f96f6e9af9fd3940f700c67d2"
  },
  {
    "url": "assets/js/15.e440aea8.js",
    "revision": "6f38df04d6906c8fca4ee3e4780a4fa3"
  },
  {
    "url": "assets/js/16.45cc480b.js",
    "revision": "01e4b913fafc0ee9f0dceec4a48a6cee"
  },
  {
    "url": "assets/js/17.30f5cd63.js",
    "revision": "fbed6742e2f168fac87e2bd136f880af"
  },
  {
    "url": "assets/js/18.df58955c.js",
    "revision": "e52a7f8092a34fa632bc8d604dba3833"
  },
  {
    "url": "assets/js/19.f013cad2.js",
    "revision": "2289f812b69bc172610f99e7f40db5ca"
  },
  {
    "url": "assets/js/2.00c218b4.js",
    "revision": "7c2b133b4ddd8d245a8448a5d8293569"
  },
  {
    "url": "assets/js/20.71e0e4e9.js",
    "revision": "f5fca46d9ef82d21b825a9cc20fb1819"
  },
  {
    "url": "assets/js/21.356a933e.js",
    "revision": "efa03881c1814498e446d9972ef0d4e6"
  },
  {
    "url": "assets/js/22.3e177092.js",
    "revision": "6dfc8e999b413f55931165e95dcc2481"
  },
  {
    "url": "assets/js/23.0eb8c981.js",
    "revision": "45e064aab4295af9c101c1cb520fadb3"
  },
  {
    "url": "assets/js/24.cfbe3644.js",
    "revision": "ef8e5f6825f3c04c2229ef72919e7cfd"
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
    "url": "assets/js/5.67518aeb.js",
    "revision": "9df3cb4519cdb0e97a0b174c385cfc98"
  },
  {
    "url": "assets/js/6.725f8c42.js",
    "revision": "2cbe8ea97628f1cdaf34f6036152b2a7"
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
    "url": "assets/js/9.ac3bf558.js",
    "revision": "f88e1f7f124cd23b223d0e8e1df92ac6"
  },
  {
    "url": "assets/js/app.95a817e1.js",
    "revision": "69a1a25ba71c057e03b144ac734c59d8"
  },
  {
    "url": "automation.html",
    "revision": "e25c88fd4834c70f58e9016735a7062f"
  },
  {
    "url": "automation/setup-automation.html",
    "revision": "7a190a5f62c0a7bd1e0e197a51516352"
  },
  {
    "url": "commands.html",
    "revision": "967c3fbc7d26734db69d016fbf667229"
  },
  {
    "url": "commands/admin-commands.html",
    "revision": "46d8ab4f3e6caf41184b1b81c640a494"
  },
  {
    "url": "commands/behavior-commands.html",
    "revision": "6e7c5d1dbfd9e6c1f31f389af34e86b2"
  },
  {
    "url": "commands/error-commands.html",
    "revision": "65af5a4f6aa08a6e0eff58271d75cd23"
  },
  {
    "url": "commands/task-commands.html",
    "revision": "1bfdd017b0ef0b934662075ed29f96a3"
  },
  {
    "url": "contribution.html",
    "revision": "70e03db5a8ca2d1548ec2ebac1970e14"
  },
  {
    "url": "contribution/CHANGELOG.html",
    "revision": "fddf995e1e7ed0baea2b09fa516d8d10"
  },
  {
    "url": "contribution/CONTRIBUTING.html",
    "revision": "0d2e8a9de277d888f8a739ddedf29d17"
  },
  {
    "url": "contribution/credits.html",
    "revision": "013dae8892d8e2d24e638db2a2c208dc"
  },
  {
    "url": "contribution/LICENSE.html",
    "revision": "ac71e3305cd8eab38e775d8ce96338df"
  },
  {
    "url": "getting-started.html",
    "revision": "20d75d96000ea7bfe05ff8fac9af4f9c"
  },
  {
    "url": "getting-started/configurations.html",
    "revision": "fe7c3318a6ca230f425fc09d40c58dd9"
  },
  {
    "url": "getting-started/installation.html",
    "revision": "6b1996a768e8e246ef9ae5370d17aa9e"
  },
  {
    "url": "getting-started/requirements.html",
    "revision": "bd6779bb71d50ebb0ef95c62a17d7026"
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
    "revision": "fbc1434cbb271833424515ca708058f9"
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
