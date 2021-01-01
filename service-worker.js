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
    "revision": "ccd9fc33c0017fc16cadb1d16bc8a354"
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
    "url": "assets/js/11.f9954adf.js",
    "revision": "5cbb21f0edac4c5c61a740757d99a1a4"
  },
  {
    "url": "assets/js/12.57f76a17.js",
    "revision": "c453371295d5bea590dae9eea7279bf1"
  },
  {
    "url": "assets/js/13.e6d7da80.js",
    "revision": "ecde9d00fe681d3c1f5d846ad653e564"
  },
  {
    "url": "assets/js/14.6886d405.js",
    "revision": "9d2e25993ad5cd838c4f099ba31bc3cd"
  },
  {
    "url": "assets/js/15.e440aea8.js",
    "revision": "6f38df04d6906c8fca4ee3e4780a4fa3"
  },
  {
    "url": "assets/js/16.98b0bb63.js",
    "revision": "8f6b76440c819797437dbdb0f3298901"
  },
  {
    "url": "assets/js/17.9a680eb6.js",
    "revision": "f4ee68322beed8d117e0d8b2b555e268"
  },
  {
    "url": "assets/js/18.3f700ddf.js",
    "revision": "14c8d639b32193ccade32a6e60d353f2"
  },
  {
    "url": "assets/js/19.5c46b119.js",
    "revision": "17dba43ea228517e81328812fae2d22c"
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
    "url": "assets/js/21.441536e6.js",
    "revision": "1a07509f2e58ae3eff4c977587f51d52"
  },
  {
    "url": "assets/js/22.4517d9f8.js",
    "revision": "411c47dd520a003e177adb5ce167de3f"
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
    "url": "assets/js/9.33b83bdb.js",
    "revision": "69b62b070148ec8e2e82194eef939e94"
  },
  {
    "url": "assets/js/app.252cd369.js",
    "revision": "2978b8dd8787328299d0a045af989bb6"
  },
  {
    "url": "automation.html",
    "revision": "2c03825efe626d907a5999b10f7fbb0c"
  },
  {
    "url": "automation/setup-automation.html",
    "revision": "760e97751fff0169d03db29ca9ccef5a"
  },
  {
    "url": "commands.html",
    "revision": "87b3cc6de75e914160766ae7f49bb25a"
  },
  {
    "url": "commands/admin-commands.html",
    "revision": "dee592d5ed308f9ef152936628d66e69"
  },
  {
    "url": "commands/behavior-commands.html",
    "revision": "1242f59f42c878d0f03c0e8b753f8af2"
  },
  {
    "url": "commands/error-commands.html",
    "revision": "27159b0c837019b216a1b4d9b338c979"
  },
  {
    "url": "commands/task-commands.html",
    "revision": "a15fa35e60cfabf2f65ceb05620a9df6"
  },
  {
    "url": "contribution.html",
    "revision": "38034951db15760d77a8abacfbdea125"
  },
  {
    "url": "contribution/CHANGELOG.html",
    "revision": "7d650d67fe1dc0a8062d9cbe3076bdcb"
  },
  {
    "url": "contribution/CONTRIBUTING.html",
    "revision": "58770d8577242f27b0bffc19ae0e5136"
  },
  {
    "url": "contribution/credits.html",
    "revision": "c96e6327087d8368510d649ad9036407"
  },
  {
    "url": "contribution/LICENSE.html",
    "revision": "6862ca03e326ec39cdb7fa92f47a7094"
  },
  {
    "url": "getting-started.html",
    "revision": "d5ae3b69b94e1b654f3f84b5cb2787c7"
  },
  {
    "url": "getting-started/configurations.html",
    "revision": "87c1232a750c5cce9988f30e070def72"
  },
  {
    "url": "getting-started/installation.html",
    "revision": "eb7df8eb21b1c0f163262afc6fd6a10e"
  },
  {
    "url": "getting-started/requirements.html",
    "revision": "ebae67b6a47d14b4f0a8907cd5446595"
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
    "revision": "c983ffc50ad6366ad56cfeca06c21f1b"
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
