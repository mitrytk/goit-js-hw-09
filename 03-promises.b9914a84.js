!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequire7bc7;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},t.parcelRequire7bc7=i);var l=i("6JpON"),r={delayFeldEl:document.querySelector('input[name="delay"]'),stepFeldEl:document.querySelector('input[name="step"]'),amountFeldEl:document.querySelector('input[name="amount"]'),createBtEl:document.querySelector('.form > button[type="submit"]')};function a(e,t){var n=Math.random()>.3;return new Promise((function(o,i){n?o({position:e,delay:t}):i({position:e,delay:t})}))}r.createBtEl.addEventListener("click",(function(t){t.preventDefault();var n=Number(r.amountFeldEl.value),o=Number(r.stepFeldEl.value),i=Number(r.delayFeldEl.value),c=1;setTimeout((function(){0!==n&&(a(c,o).then((function(t){var n=t.position,o=t.delay;e(l).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(t){var n=t.position,o=t.delay;e(l).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))})),setInterval((function(){c<=n-1&&(a(c,o).then((function(t){var n=t.position,o=t.delay;e(l).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(t){var n=t.position,o=t.delay;e(l).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))})),c+=1)}),o))}),i)}))}();
//# sourceMappingURL=03-promises.b9914a84.js.map
