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
    "revision": "b539e75e4a0a9fabc5cdb58af68e452a"
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
    "url": "assets/js/10.0eaa4d13.js",
    "revision": "3aed5b0bc45248e4434855e941b90884"
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
    "url": "assets/js/14.cd8d86c8.js",
    "revision": "86449473b52b240aea4cb36ea1bee314"
  },
  {
    "url": "assets/js/15.91641f7b.js",
    "revision": "7147ec34618b93caed4ac461b9356986"
  },
  {
    "url": "assets/js/16.98b0bb63.js",
    "revision": "8f6b76440c819797437dbdb0f3298901"
  },
  {
    "url": "assets/js/17.8b11c1b3.js",
    "revision": "a4d76185e5b97b2682b25dec1281e296"
  },
  {
    "url": "assets/js/18.f5583cf0.js",
    "revision": "b01485546662fd4157eb9a9708f43ab5"
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
    "url": "assets/js/20.f2c997fc.js",
    "revision": "c8c79ecbeee24357b73fc07a3038f661"
  },
  {
    "url": "assets/js/21.81df4f35.js",
    "revision": "e2d8b7d2d7f75d8459ec181e05e84bc2"
  },
  {
    "url": "assets/js/22.626a79b4.js",
    "revision": "a405860167a7c005391abbacf8fbdb2f"
  },
  {
    "url": "assets/js/23.4d0e4bfd.js",
    "revision": "e84e285619d5ef982bb0e284ad2c4f74"
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
    "url": "assets/js/7.0e63420f.js",
    "revision": "64893169496f377eaf19ab47a73e146c"
  },
  {
    "url": "assets/js/8.0618f2cb.js",
    "revision": "f86c0510eb3d7796a30cf70a6fc7939b"
  },
  {
    "url": "assets/js/9.bee14156.js",
    "revision": "d4a146a6d51c312d0aeef64f89f55b66"
  },
  {
    "url": "assets/js/app.ba97635b.js",
    "revision": "566b844c238c61b01046ff58a0184dc4"
  },
  {
    "url": "automation.html",
    "revision": "0801ba887c3f640e248f8455e355214b"
  },
  {
    "url": "automation/setup-automation.html",
    "revision": "0ce1da028019fedea46a4f1066d1bbd6"
  },
  {
    "url": "commands.html",
    "revision": "477208917b489fea434a6f27992b7c4a"
  },
  {
    "url": "commands/admin-commands.html",
    "revision": "73430c9126be28e474e1f21d526ac087"
  },
  {
    "url": "commands/behavior-commands.html",
    "revision": "366cbf8d6624024e30d24832e9ce2c23"
  },
  {
    "url": "commands/error-commands.html",
    "revision": "f5d6d426ea194a9420e0913674cc6337"
  },
  {
    "url": "commands/task-commands.html",
    "revision": "57ccb204ad1c6630325865c7d2e7a73e"
  },
  {
    "url": "contribution.html",
    "revision": "cc53e4ebe58e15fbfefd1966acc85f96"
  },
  {
    "url": "contribution/CHANGELOG.html",
    "revision": "af4b027d87b61084482153515619c78b"
  },
  {
    "url": "contribution/CONTRIBUTING.html",
    "revision": "5211998b162ae7dc47ce55a6df5b6949"
  },
  {
    "url": "contribution/credits.html",
    "revision": "81983c93472ca8d34957a00b923a2efa"
  },
  {
    "url": "contribution/LICENSE.html",
    "revision": "40d43cc748765a41422e2f3491282690"
  },
  {
    "url": "getting-started.html",
    "revision": "8ae93b7eba4ccd522efb722946d13ed6"
  },
  {
    "url": "getting-started/configurations.html",
    "revision": "2391aaaff25a36082dabeee299e35877"
  },
  {
    "url": "getting-started/installation.html",
    "revision": "59ba1f7e76f564bc988a25c7d004448b"
  },
  {
    "url": "getting-started/requirements.html",
    "revision": "47fc6cfd86773564df37691240b7b275"
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
    "revision": "abd2007468a31f89ba32f818fb010095"
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
