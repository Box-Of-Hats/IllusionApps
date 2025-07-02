"use strict";

/** Helper functions for running a k5 app */
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Kindling = /*#__PURE__*/function () {
  function Kindling() {
    _classCallCheck(this, Kindling);
  }
  return _createClass(Kindling, [{
    key: "init",
    value: function init() {
      var body = document.querySelector("body");
      var alertPopup = document.createElement("div");
      alertPopup.classList.add("alert");
      body === null || body === void 0 || body.appendChild(alertPopup);
      this.dom = {
        alertPopup: alertPopup
      };
    }
  }, {
    key: "showAlert",
    value: function showAlert(text) {
      var _this = this;
      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5000;
      this.dom.alertPopup.innerText = text;
      this.dom.alertPopup.style.display = "block";
      setTimeout(function () {
        _this.dom.alertPopup.style.display = "none";
      }, duration);
    }
  }]);
}();
var counterElement = document.querySelector(".counter");
var counter = 0;
setInterval(function () {
  counter += 1;
  if (counterElement) {
    counterElement.innerText = "".concat(counter);
  }
}, 2000);
var kindling = new Kindling();
kindling.init();
kindling.showAlert("Hello world!");