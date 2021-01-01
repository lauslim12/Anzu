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
    "revision": "77d3d4bc283bacf61f38fdba4d52482b"
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
    "url": "assets/js/11.e4b8fa9c.js",
    "revision": "b57d5a1bed8f4e9aec021f99802180f5"
  },
  {
    "url": "assets/js/12.76d543de.js",
    "revision": "c5fb0abbd3489a7d381508f5fa059241"
  },
  {
    "url": "assets/js/13.0c260d1d.js",
    "revision": "357d56fbecce301c6d53714688dfd9cd"
  },
  {
    "url": "assets/js/14.39e2d4f4.js",
    "revision": "154fa9505efb1f40dcd170703940f1af"
  },
  {
    "url": "assets/js/15.e440aea8.js",
    "revision": "6f38df04d6906c8fca4ee3e4780a4fa3"
  },
  {
    "url": "assets/js/16.61fd67dc.js",
    "revision": "8bbbf7931e9d75d7a7d1730a82fc46ba"
  },
  {
    "url": "assets/js/17.8b11c1b3.js",
    "revision": "a4d76185e5b97b2682b25dec1281e296"
  },
  {
    "url": "assets/js/18.d9c14378.js",
    "revision": "16b4b630e47f559e7e39283ffd7d0057"
  },
  {
    "url": "assets/js/19.8580e4bd.js",
    "revision": "e081bca86f315699ae148f373babdaa8"
  },
  {
    "url": "assets/js/2.00c218b4.js",
    "revision": "7c2b133b4ddd8d245a8448a5d8293569"
  },
  {
    "url": "assets/js/20.24fd9c79.js",
    "revision": "656130486b348033594aeddf70e9e813"
  },
  {
    "url": "assets/js/21.b701f6a2.js",
    "revision": "36dbe92874723c30870d1409baa8b3ad"
  },
  {
    "url": "assets/js/22.fe4fc397.js",
    "revision": "9f6a48dd453c0769c53fdd78c38b7de2"
  },
  {
    "url": "assets/js/23.54c76dcf.js",
    "revision": "59498faf8cf87ea66b1b55ca8994dc42"
  },
  {
    "url": "assets/js/24.139ad038.js",
    "revision": "879fdb9785f0908c77172db1bd147e0e"
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
    "url": "assets/js/app.e4484d65.js",
    "revision": "d0b4d8d2dcd088af083468c50f205a86"
  },
  {
    "url": "automation.html",
    "revision": "0be28c44b741faeedbfdb7b9e9a87e9c"
  },
  {
    "url": "automation/setup-automation.html",
    "revision": "1d57a1ce5d7a3c6bfe3ec7f6cc9325f9"
  },
  {
    "url": "commands.html",
    "revision": "4e8b62256f4187e2cf045c89a3870952"
  },
  {
    "url": "commands/admin-commands.html",
    "revision": "0b8fd635c28bff825d82931417f4947a"
  },
  {
    "url": "commands/behavior-commands.html",
    "revision": "cb4e137409ef24272704da086851b5fd"
  },
  {
    "url": "commands/error-commands.html",
    "revision": "b7db4f4e6188dc52cfa4d945eed0fab2"
  },
  {
    "url": "commands/task-commands.html",
    "revision": "4b58e4599571aa043f75fca998ccacfb"
  },
  {
    "url": "contribution.html",
    "revision": "1244d38cf3b87b3478e83eaf6230ad46"
  },
  {
    "url": "contribution/CHANGELOG.html",
    "revision": "6f5e5ca669d910b78f417186f75b8f43"
  },
  {
    "url": "contribution/CONTRIBUTING.html",
    "revision": "a5374df91746bb6f63dc0f944c6ce653"
  },
  {
    "url": "contribution/credits.html",
    "revision": "38b2171d059b88f2a145dde7f076155b"
  },
  {
    "url": "contribution/LICENSE.html",
    "revision": "7e88d8c5fce5cb7fc2e9165e2dc3e861"
  },
  {
    "url": "getting-started.html",
    "revision": "29bc2b851f39b009893d6710919889cc"
  },
  {
    "url": "getting-started/configurations.html",
    "revision": "eb4f6e683755986c7fbc3b374cc28f9b"
  },
  {
    "url": "getting-started/installation.html",
    "revision": "089c9361d3a344778974706f635b8ada"
  },
  {
    "url": "getting-started/requirements.html",
    "revision": "97e727a7f5f8ad3a0d69d3ee96534216"
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
    "revision": "c637f0d28295ebb615a27eb93a8243ef"
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
