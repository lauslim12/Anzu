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
    "revision": "1a7a29f533c8e0e43624891401f087cc"
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
    "url": "assets/js/12.57f76a17.js",
    "revision": "c453371295d5bea590dae9eea7279bf1"
  },
  {
    "url": "assets/js/13.3833582b.js",
    "revision": "7238d28d5df2d68e05d39930bb2badbf"
  },
  {
    "url": "assets/js/14.e699344f.js",
    "revision": "23d80c017c5f222122f49ddb2a9a9276"
  },
  {
    "url": "assets/js/15.8b7727da.js",
    "revision": "a77a655513d83696d9a3dc3b958964a5"
  },
  {
    "url": "assets/js/16.eb6411bc.js",
    "revision": "31a4e082d8c4bac8ed42e32888e66864"
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
    "url": "assets/js/19.02aca7cf.js",
    "revision": "15d66d6c44460141cba2ec369e5a3d50"
  },
  {
    "url": "assets/js/2.00c218b4.js",
    "revision": "7c2b133b4ddd8d245a8448a5d8293569"
  },
  {
    "url": "assets/js/20.47571008.js",
    "revision": "e2edc5e4ff6d9b5733aa662a91739a8c"
  },
  {
    "url": "assets/js/21.1a6e2104.js",
    "revision": "e9498c2735d9d555c53d5293df71be20"
  },
  {
    "url": "assets/js/22.3e177092.js",
    "revision": "6dfc8e999b413f55931165e95dcc2481"
  },
  {
    "url": "assets/js/23.995f50b8.js",
    "revision": "a72f842eb5f2f9bfde9bb11e5f5cb472"
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
    "url": "assets/js/9.8cc2cfc1.js",
    "revision": "a8b6de57b0e17262a28d6ddede93b919"
  },
  {
    "url": "assets/js/app.0ee4c980.js",
    "revision": "ad2762fd4ed20cafe53731fa34d61059"
  },
  {
    "url": "automation.html",
    "revision": "220a4742ab140927f03765a0bc020222"
  },
  {
    "url": "automation/setup-automation.html",
    "revision": "1566af7130062b8b1fb4f7e4ab064320"
  },
  {
    "url": "commands.html",
    "revision": "a81541ed923078ffe9ea84a2aaef25b5"
  },
  {
    "url": "commands/admin-commands.html",
    "revision": "8b9dd85803ae1d74c0bfe3e34aac73dc"
  },
  {
    "url": "commands/behavior-commands.html",
    "revision": "1434b75fdd84616a2226895248861219"
  },
  {
    "url": "commands/error-commands.html",
    "revision": "32f4d5b62a1aeb81a4db0ec8f534f629"
  },
  {
    "url": "commands/task-commands.html",
    "revision": "baeaacb128368648960a7f2b5369019d"
  },
  {
    "url": "contribution.html",
    "revision": "8d15a9e3acc58d663d8dddf5c10c6d14"
  },
  {
    "url": "contribution/CHANGELOG.html",
    "revision": "a250c3f94d74d26a241656bfc0719052"
  },
  {
    "url": "contribution/CONTRIBUTING.html",
    "revision": "a7b0e19615daad692a550ae568b8ebe1"
  },
  {
    "url": "contribution/credits.html",
    "revision": "bdfd46fd731ea2b4ba5033c99d0a8e8e"
  },
  {
    "url": "contribution/LICENSE.html",
    "revision": "670b2d89327ff98e8cc69d7e20956feb"
  },
  {
    "url": "getting-started.html",
    "revision": "d047dc99f8b525d12c1e8de12c3832f7"
  },
  {
    "url": "getting-started/configurations.html",
    "revision": "b880532cc7b7cc36cf30a85289bcfbd7"
  },
  {
    "url": "getting-started/installation.html",
    "revision": "7ef7dd0ec607729f2087170ab896d839"
  },
  {
    "url": "getting-started/requirements.html",
    "revision": "1317f30eab445b9efeaae4b03f41d047"
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
    "revision": "6aec72703ec784ceae5d5ec106199ee7"
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
