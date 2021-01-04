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
    "revision": "8be12921c7370cb18696376a59739568"
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
    "url": "assets/js/10.27a10e2a.js",
    "revision": "e0a070a554f2bd0fd79f2cd95c77f4b9"
  },
  {
    "url": "assets/js/11.f9954adf.js",
    "revision": "5cbb21f0edac4c5c61a740757d99a1a4"
  },
  {
    "url": "assets/js/12.c27635cd.js",
    "revision": "1e013caaa97f989ee2d45e8cf14c53fa"
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
    "url": "assets/js/15.91641f7b.js",
    "revision": "7147ec34618b93caed4ac461b9356986"
  },
  {
    "url": "assets/js/16.ed155bdb.js",
    "revision": "34088b2222dd18ef7f4fd441abe44f5d"
  },
  {
    "url": "assets/js/17.47f0f15d.js",
    "revision": "8dcea7d3fb0c9573d70e2aaa79e35084"
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
    "url": "assets/js/21.81df4f35.js",
    "revision": "e2d8b7d2d7f75d8459ec181e05e84bc2"
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
    "url": "assets/js/24.e8649077.js",
    "revision": "e9fdd45d3d05c8fd82e4bd4ff4631aa0"
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
    "url": "assets/js/7.e0661ca5.js",
    "revision": "faaf3946d0f9c65460f470912cbeed1d"
  },
  {
    "url": "assets/js/8.0618f2cb.js",
    "revision": "f86c0510eb3d7796a30cf70a6fc7939b"
  },
  {
    "url": "assets/js/9.472cd931.js",
    "revision": "fde4536c6d2054c19559426da33fc715"
  },
  {
    "url": "assets/js/app.a27280c1.js",
    "revision": "7e2dd61757a41abcf1828fbaf95eb829"
  },
  {
    "url": "automation.html",
    "revision": "6feac570a25875735fc4b918b78241ee"
  },
  {
    "url": "automation/setup-automation.html",
    "revision": "6dadf5a717917098eb56969612de06a3"
  },
  {
    "url": "commands.html",
    "revision": "ac7026e68e3d9563925f71b5541e6e16"
  },
  {
    "url": "commands/admin-commands.html",
    "revision": "ce2b960a152a4aa6f654e14f46a2e5ce"
  },
  {
    "url": "commands/behavior-commands.html",
    "revision": "a35cd55add0b47be33aa9c86f34a5fbc"
  },
  {
    "url": "commands/error-commands.html",
    "revision": "0be66c9752ef268fc769c732fbbc1489"
  },
  {
    "url": "commands/task-commands.html",
    "revision": "2cd09d3a7993713adeddfe2cc66895fb"
  },
  {
    "url": "contribution.html",
    "revision": "19f1c9eee0d75f1d464813571f095c97"
  },
  {
    "url": "contribution/CHANGELOG.html",
    "revision": "ea7aea548f511979a4c93374b32b281d"
  },
  {
    "url": "contribution/CONTRIBUTING.html",
    "revision": "60562809f368a56a355a15679f206660"
  },
  {
    "url": "contribution/credits.html",
    "revision": "b73a4d765a83d4aebfba99a1d3aa60f4"
  },
  {
    "url": "contribution/LICENSE.html",
    "revision": "d317d80163938c83b24adeb9776f834c"
  },
  {
    "url": "getting-started.html",
    "revision": "c3acb8487ab0055584ecf6487994cef2"
  },
  {
    "url": "getting-started/configurations.html",
    "revision": "46197488cc87409e946f87523589a421"
  },
  {
    "url": "getting-started/installation.html",
    "revision": "070752bf6246cc811e3a96f3b90a2374"
  },
  {
    "url": "getting-started/requirements.html",
    "revision": "9a36452abfe36e7285b740c80f1883fb"
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
    "revision": "d75f1d7c37f9235f71f23324cc439001"
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
