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
    "revision": "4c6f545f992bd4439e2a9d74af1c2abe"
  },
  {
    "url": "assets/css/0.styles.23408438.css",
    "revision": "b2f82d70fe7585b1747e45083a0ae29c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.86b39ce9.js",
    "revision": "7a3692520a8f17894676c4b092279716"
  },
  {
    "url": "assets/js/11.b111b8f4.js",
    "revision": "d3a6c44a446a13223b851e89f9c60f8d"
  },
  {
    "url": "assets/js/12.73c756cf.js",
    "revision": "7210d0608a2fffe093e35955d4830325"
  },
  {
    "url": "assets/js/13.f1d35911.js",
    "revision": "80d4ad8250cb8817e77f57fa51e90a0b"
  },
  {
    "url": "assets/js/14.0cea3bff.js",
    "revision": "107f02c579b25de2c0e7e9ee8aa82c8b"
  },
  {
    "url": "assets/js/15.c88378d3.js",
    "revision": "fd879dfc3284e835698f5439bd9134ab"
  },
  {
    "url": "assets/js/16.037fd961.js",
    "revision": "e8eb916319b32fe05a9d80f1a078c23f"
  },
  {
    "url": "assets/js/17.50126c08.js",
    "revision": "d7cb02a515f48b9e557f78aaa73bf1e7"
  },
  {
    "url": "assets/js/18.8e45632c.js",
    "revision": "5fafa862c9a04945e2e2d4957b07666f"
  },
  {
    "url": "assets/js/19.ad44ab8e.js",
    "revision": "45621e853bd082bb4d4e0977a6b63ab0"
  },
  {
    "url": "assets/js/2.e93712d5.js",
    "revision": "c0ff542001dc4d0795240a62c58ec2f4"
  },
  {
    "url": "assets/js/20.4469a13b.js",
    "revision": "703624465a1bad21ee0e794c7a705c2a"
  },
  {
    "url": "assets/js/21.e5fc531a.js",
    "revision": "bb49e92e5e4b34e8a96e1219ee1458c2"
  },
  {
    "url": "assets/js/22.2aadfad6.js",
    "revision": "48e9160d8aa670660167eb5046ce8f0d"
  },
  {
    "url": "assets/js/23.3f614edc.js",
    "revision": "4f326f9689fc722bb83989483c86b567"
  },
  {
    "url": "assets/js/24.90484504.js",
    "revision": "f1c8108b4577a145dbdddea6766c3ed1"
  },
  {
    "url": "assets/js/25.4c7a4529.js",
    "revision": "442bc611cf57fd21b739271593d16734"
  },
  {
    "url": "assets/js/3.2c8636e5.js",
    "revision": "3f18ae8ece3da258a97ce2326bf7d76d"
  },
  {
    "url": "assets/js/4.574bf697.js",
    "revision": "f1a63c2852ce09162bb40c600a649986"
  },
  {
    "url": "assets/js/5.f775be8f.js",
    "revision": "1fb1331345f4a2320f6096cfe7b0b129"
  },
  {
    "url": "assets/js/6.3194af32.js",
    "revision": "fdb1f73036d4228f219a1206ac0429be"
  },
  {
    "url": "assets/js/7.109641aa.js",
    "revision": "a1c3d93edcaec6021c60171e97716b2d"
  },
  {
    "url": "assets/js/8.f0144fe0.js",
    "revision": "89275b017afeb571c904d75dad8f8ea9"
  },
  {
    "url": "assets/js/9.27bad013.js",
    "revision": "1654f3202970b79345b22e063cdf913c"
  },
  {
    "url": "assets/js/app.e3199f5b.js",
    "revision": "7f086a6080926e4e08139ebaf91b4216"
  },
  {
    "url": "automation.html",
    "revision": "1e06ae2ae587b6d98e0e82e60ca4c8c8"
  },
  {
    "url": "automation/setup-automation.html",
    "revision": "8b469cccf72a5aa047b063e735814405"
  },
  {
    "url": "commands.html",
    "revision": "c4064d2beeba97036ae7ba1d1c709370"
  },
  {
    "url": "commands/admin-commands.html",
    "revision": "aa6dbc38269114aaa1a916a160e34e26"
  },
  {
    "url": "commands/behavior-commands.html",
    "revision": "e6f5ed1ddcb41ff20b44cbb55771c267"
  },
  {
    "url": "commands/error-commands.html",
    "revision": "d40dff81042ad497f9c3df42396cc8cc"
  },
  {
    "url": "commands/task-commands.html",
    "revision": "362caedcb3237e2262b3943e7ae18ce1"
  },
  {
    "url": "contribution.html",
    "revision": "cac519c56efe61af5e378fd2c4849c6f"
  },
  {
    "url": "contribution/CHANGELOG.html",
    "revision": "aeacbbe3690d77e6a45306790fda028b"
  },
  {
    "url": "contribution/CONTRIBUTING.html",
    "revision": "ad805fcef915ed101dd60a4b87835caa"
  },
  {
    "url": "contribution/credits.html",
    "revision": "9f28e54f58a9479194032d49ae8b064f"
  },
  {
    "url": "contribution/LICENSE.html",
    "revision": "416a515b2ed09530ebe0583752c875f4"
  },
  {
    "url": "getting-started.html",
    "revision": "0fbe1134e4da5a362a44b596f8357756"
  },
  {
    "url": "getting-started/configurations.html",
    "revision": "f37c211fc1838c0676ed7615d576ec01"
  },
  {
    "url": "getting-started/installation.html",
    "revision": "ba64095556f7d6862e27446cd6747648"
  },
  {
    "url": "getting-started/requirements.html",
    "revision": "69525e9fe057c4df5998c496d2f777da"
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
    "revision": "ed81fba2eeaf01a001e700bfe6aa3c8c"
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
