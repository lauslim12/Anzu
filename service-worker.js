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
    "revision": "7a447bb2025ddd27194b67b6d9b9d3f0"
  },
  {
    "url": "assets/css/0.styles.cb1be27b.css",
    "revision": "fa8436ed9cf8fc25c32585eabc8dd079"
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
    "url": "assets/js/13.3833582b.js",
    "revision": "7238d28d5df2d68e05d39930bb2badbf"
  },
  {
    "url": "assets/js/14.e699344f.js",
    "revision": "23d80c017c5f222122f49ddb2a9a9276"
  },
  {
    "url": "assets/js/15.207a43e9.js",
    "revision": "cee2c2b231a3757e78b2befa76c7cfcb"
  },
  {
    "url": "assets/js/16.1aa404c0.js",
    "revision": "a6fe8a9d43f070fe2bb1a7074433fe6b"
  },
  {
    "url": "assets/js/17.195c3886.js",
    "revision": "4f1d74787455447405499b8118902f80"
  },
  {
    "url": "assets/js/18.f5583cf0.js",
    "revision": "b01485546662fd4157eb9a9708f43ab5"
  },
  {
    "url": "assets/js/19.135318ca.js",
    "revision": "dd9b73bf74186ad4ee4f374700f18f7e"
  },
  {
    "url": "assets/js/2.00c218b4.js",
    "revision": "7c2b133b4ddd8d245a8448a5d8293569"
  },
  {
    "url": "assets/js/20.deb2067e.js",
    "revision": "e711c945dc232b6329185b853bdf6137"
  },
  {
    "url": "assets/js/21.a18a6101.js",
    "revision": "384411fadb09f74e7802145ab5ace6b9"
  },
  {
    "url": "assets/js/22.20071825.js",
    "revision": "c8295a6ce1182f66722b7b8f72f48325"
  },
  {
    "url": "assets/js/23.e16f65ee.js",
    "revision": "e9befea674be2e5bf82dd72188513979"
  },
  {
    "url": "assets/js/24.e0306779.js",
    "revision": "cc289d298b5ae4448d463646a57ed609"
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
    "url": "assets/js/4.94adcb92.js",
    "revision": "928aaa07a940067b25ebc3ac74ed3dea"
  },
  {
    "url": "assets/js/5.d36d972d.js",
    "revision": "9db3e21588c5c70af5cacdeaad210dc4"
  },
  {
    "url": "assets/js/6.725f8c42.js",
    "revision": "2cbe8ea97628f1cdaf34f6036152b2a7"
  },
  {
    "url": "assets/js/7.777fee2e.js",
    "revision": "60fa1592c2b5dd22747c309c9dfd76f2"
  },
  {
    "url": "assets/js/8.0618f2cb.js",
    "revision": "f86c0510eb3d7796a30cf70a6fc7939b"
  },
  {
    "url": "assets/js/9.4722cd9f.js",
    "revision": "32c6c6c402221311348860c0cbd999b9"
  },
  {
    "url": "assets/js/app.84f7b947.js",
    "revision": "54d947c26211a972c0f2619804ad3621"
  },
  {
    "url": "automation.html",
    "revision": "dd67105719b6d5059a8cb1bf0632b333"
  },
  {
    "url": "automation/setup-automation.html",
    "revision": "4e5c5d30549d5928cb4f1a95eeb2405e"
  },
  {
    "url": "commands.html",
    "revision": "aeb955e4dd9cb0ca2dc53b7db2f1359e"
  },
  {
    "url": "commands/admin-commands.html",
    "revision": "1910378099a3f49445ec7abd6aacf61c"
  },
  {
    "url": "commands/behavior-commands.html",
    "revision": "beb67bdb6162dafcee552db450ab5a9a"
  },
  {
    "url": "commands/error-commands.html",
    "revision": "67bba74898710e9797b1b6e737fde8f2"
  },
  {
    "url": "commands/task-commands.html",
    "revision": "821c3eee9edb38f724ef2bf2aa1ae323"
  },
  {
    "url": "contribution.html",
    "revision": "a21f12dd920d7a85107b930bf1356d91"
  },
  {
    "url": "contribution/CHANGELOG.html",
    "revision": "c9b7f82556e9abd532ba59ec4abdca8b"
  },
  {
    "url": "contribution/CONTRIBUTING.html",
    "revision": "327dc45861e02de28680973b1be5e379"
  },
  {
    "url": "contribution/credits.html",
    "revision": "3aa1ae3c1e4e017f74bb612083c7a826"
  },
  {
    "url": "contribution/LICENSE.html",
    "revision": "c6bdbc9388df505f311f21dc5a719175"
  },
  {
    "url": "getting-started.html",
    "revision": "f543d8c5823fe926d56cefa19e1f9869"
  },
  {
    "url": "getting-started/configurations.html",
    "revision": "3def628e8240edbca0a52f2ce0f681cd"
  },
  {
    "url": "getting-started/installation.html",
    "revision": "e61d7b7a313390dd0b1c1c40c32043f7"
  },
  {
    "url": "getting-started/requirements.html",
    "revision": "c89f48927e18f391119f782b71536875"
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
    "revision": "8003f8d86e304d29d5e6825427b77d6e"
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
