module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = (typeof self !== 'undefined' ? self : this)["webpackJsonpxxo"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpxxo"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["fb15",0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "0302":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4e5ad2c1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b319");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4e5ad2c1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_4e5ad2c1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "09c0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6919279e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c727");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6919279e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6919279e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "35cf":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "3a0d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0ad4ef98-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/views/lButton/index.vue?vue&type=template&id=4e5ad2c1&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"l-button",on:{"click":function($event){return _vm.$emit('click',$event)}}},[_vm._v("???????????????????????????")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/views/lButton/index.vue?vue&type=template&id=4e5ad2c1&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/views/lButton/index.vue?vue&type=script&lang=js&
//
//
//
//
/* harmony default export */ var lButtonvue_type_script_lang_js_ = ({
  name: "lButton",
  components: {},
  props: {},
  data: function data() {
    return {};
  },
  watch: {},
  created: function created() {},
  mounted: function mounted() {},
  computed: {},
  methods: {}
});
// CONCATENATED MODULE: ./packages/views/lButton/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_lButtonvue_type_script_lang_js_ = (lButtonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/views/lButton/index.vue?vue&type=style&index=0&id=4e5ad2c1&lang=scss&scoped=true&
var lButtonvue_type_style_index_0_id_4e5ad2c1_lang_scss_scoped_true_ = __webpack_require__("0302");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./packages/views/lButton/index.vue






/* normalize component */

var lButton_component = Object(componentNormalizer["a" /* default */])(
  views_lButtonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "4e5ad2c1",
  null
  
)

/* harmony default export */ var lButton = (lButton_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0ad4ef98-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/views/lInput/index.vue?vue&type=template&id=6919279e&scoped=true&
var lInputvue_type_template_id_6919279e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('input',{staticClass:"l-input",attrs:{"type":"text"}})}
var lInputvue_type_template_id_6919279e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/views/lInput/index.vue?vue&type=template&id=6919279e&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/views/lInput/index.vue?vue&type=script&lang=js&
//
//
//
//
/* harmony default export */ var lInputvue_type_script_lang_js_ = ({
  name: 'lInput',
  components: {},
  props: {},
  data: function data() {
    return {};
  },
  watch: {},
  created: function created() {},
  mounted: function mounted() {},
  computed: {},
  methods: {}
});
// CONCATENATED MODULE: ./packages/views/lInput/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_lInputvue_type_script_lang_js_ = (lInputvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/views/lInput/index.vue?vue&type=style&index=0&id=6919279e&lang=scss&scoped=true&
var lInputvue_type_style_index_0_id_6919279e_lang_scss_scoped_true_ = __webpack_require__("09c0");

// CONCATENATED MODULE: ./packages/views/lInput/index.vue






/* normalize component */

var lInput_component = Object(componentNormalizer["a" /* default */])(
  views_lInputvue_type_script_lang_js_,
  lInputvue_type_template_id_6919279e_scoped_true_render,
  lInputvue_type_template_id_6919279e_scoped_true_staticRenderFns,
  false,
  null,
  "6919279e",
  null
  
)

/* harmony default export */ var lInput = (lInput_component.exports);
// CONCATENATED MODULE: ./packages/views/index.js


var COMPONENTS = [lButton, lInput];
/* harmony default export */ var views = (COMPONENTS);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__("5530");

// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__("8bbf");
var external_Vue_default = /*#__PURE__*/__webpack_require__.n(external_Vue_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0ad4ef98-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/views/VMessage/Confirm/main.vue?vue&type=template&id=d4107a56&scoped=true&
var mainvue_type_template_id_d4107a56_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"private-vant-confirm-container"},[_c('private-dialog',{attrs:{"before-close":_vm.beforeClose,"show-cancel-button":_vm.showCancelButton,"show-confirm-button":_vm.showConfirmButton,"close-on-click-overlay":_vm.closeOnClickOverlay},model:{value:(_vm.show),callback:function ($$v) {_vm.show=$$v},expression:"show"}},[_c('section',[(_vm.iconClass)?_c('img',{staticStyle:{"width":"50px","height":"50px"},attrs:{"src":_vm.getImgUrl(_vm.iconClass),"icon-class":_vm.iconClass,"class-name":"icon"}}):_vm._e(),(
           _vm.tips)?_c('span',{staticClass:"tips"},[_vm._v(_vm._s(_vm.tips))]):_vm._e(),(_vm.message)?_c('span',{staticClass:"message"},[_vm._v(_vm._s(_vm.message))]):_vm._e()])])],1)}
var mainvue_type_template_id_d4107a56_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/views/VMessage/Confirm/main.vue?vue&type=template&id=d4107a56&scoped=true&

// EXTERNAL MODULE: ./node_modules/vant/es/dialog/index.js + 36 modules
var dialog = __webpack_require__("2241");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/views/VMessage/Confirm/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* ???????????? */

/* harmony default export */ var mainvue_type_script_lang_js_ = ({
  components: {
    'private-dialog': dialog["a" /* default */].Component
  },
  data: function data() {
    return {
      show: false,
      type: 'success',
      tips: '',
      icon: '',
      message: '',
      showCancelButton: false
      /* ???????????????????????? */
      ,
      showConfirmButton: false
      /* ???????????????????????? */
      ,
      closeOnClickOverlay: false
      /* ??????????????????????????????????????? */
      ,
      onClose: null,
      duration: 2000
    };
  },
  watch: {
    show: function show(val) {
      var _this = this;

      var _this$$data = this.$data,
          showCancelButton = _this$$data.showCancelButton,
          showConfirmButton = _this$$data.showConfirmButton,
          duration = _this$$data.duration;

      if (val && !showCancelButton && !showConfirmButton) {
        setTimeout(function () {
          _this.show = false;

          _this.handleCallback('close');
        }, duration);
      }
    }
  },
  computed: {
    iconClass: function iconClass() {
      return this.icon || this.type;
    }
  },
  methods: {
    getImgUrl: function getImgUrl(type) {
      console.log(type);
      if (type === 'success') return 'https://s3.bmp.ovh/imgs/2021/11/6abd17e957da5bdc.png';
      if (type === 'warning') return 'https://s3.bmp.ovh/imgs/2021/11/c93eb16d80d89633.png';
      if (type === 'errorT') return 'https://s3.bmp.ovh/imgs/2021/11/bce92ace5d9b3a9c.png';
      if (type === 'error') return 'https://s3.bmp.ovh/imgs/2021/11/42acd0fd343830b6.png';
    },
    beforeClose: function beforeClose(action, done) {
      this.show = false;
      done();
      this.handleCallback(action);
    },
    handleCallback: function handleCallback(action) {
      if (typeof this.onClose === 'function') {
        this.onClose(action);
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/views/VMessage/Confirm/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var Confirm_mainvue_type_script_lang_js_ = (mainvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/views/VMessage/Confirm/main.vue?vue&type=style&index=0&id=d4107a56&lang=scss&scoped=true&
var mainvue_type_style_index_0_id_d4107a56_lang_scss_scoped_true_ = __webpack_require__("515a");

// CONCATENATED MODULE: ./packages/views/VMessage/Confirm/main.vue






/* normalize component */

var main_component = Object(componentNormalizer["a" /* default */])(
  Confirm_mainvue_type_script_lang_js_,
  mainvue_type_template_id_d4107a56_scoped_true_render,
  mainvue_type_template_id_d4107a56_scoped_true_staticRenderFns,
  false,
  null,
  "d4107a56",
  null
  
)

/* harmony default export */ var main = (main_component.exports);
// CONCATENATED MODULE: ./packages/views/VMessage/Confirm/main.js




var ConfirmConstructor = external_Vue_default.a.extend(main);

var Confirm = function Confirm(options) {
  options = options || {};

  if (typeof options === 'string') {
    options = {
      message: options
    };
  }

  var instance = new ConfirmConstructor({
    data: options
  });
  instance.$mount();
  document.body.appendChild(instance.$el);
  instance.show = true;
  return instance;
};

['success', 'warning', 'error'].forEach(function (type) {
  Confirm[type] = function (options) {
    if (typeof options === 'string') {
      options = {
        message: options
      };
    }

    options.type = type;
    return Confirm(options);
  };
});
/* harmony default export */ var Confirm_main = (Confirm);
// CONCATENATED MODULE: ./packages/views/VMessage/index.js





/* ???????????? */


/**

  ????????????
  this.$vConfirm.success({
    message: "????????????",
    onClose(action) {
      console.log(action, " action");
    }
  });

  this.$vConfirm.warning({
    message: "????????????????????????",
    tips: "??????",
    showCancelButton: true,
    showConfirmButton: true,
    onClose(action) {
      console.log(action, " action");
    }
  });

  try {
    const action = await this.$vConfirmSync({
      type: "warning",
      message: "????????????",
      showCancelButton: true,
      closeOnClickOverlay: false
    });
    console.log(action, " action");
  } catch (error) {
    console.log(error, " error");
  }

*/

/**
 * ????????????
 * @param {String} tips ??????
 * @param {String} message ??????
 * @param {String} type success (default) | warning
 * @param {Boolean} showCancelButton ???????????????????????? default:false
 * @param {Boolean} showConfirmButton ???????????????????????? default:false
 * @param {Boolean} closeOnClickOverlay ??????????????????????????????????????? default: false
 * @param {Number} duration ???????????? showCancelButton???false && showConfirmButton???false??? default:2000
 */

function vConfirmSync(options) {
  return new Promise(function (resolve, reject) {
    Confirm_main(Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, options), {}, {
      onClose: function onClose(action) {
        if (action === 'confirm') resolve(action);else reject(action);
      }
    }));
  });
}

/* harmony default export */ var VMessage = ({
  Confirm: Confirm_main,
  vConfirmSync: vConfirmSync
});
// CONCATENATED MODULE: ./utils/index.js
// ?????? ?????????????????????
const throttle = function (fn, interval) {
  // ????????????????????????
  let last = 0;
  return function () {
    // ???????????????
    let now = +new Date();
    // ??????????????? ??? ?????????????????? ???????????? ?????????????????? interval ms??????
    if (now - last > interval) {
      // ??????????????????????????????
      last = now;
      // ???????????????????????????????????? ??????end
      fn('end')
      // console.log('?????????interval???????????????????????????');
    }
  };
}

// ??????(?????????) ???????????????????????? ????????????????????? ??????????????????????????????
const debounce = function (fn, delay) {
  // ???????????????????????????
  let timer = null;
  return function () {
    // ?????????????????????????????????
    if (timer) {
      // ???????????????????????? ??????????????????
      clearTimeout(timer)
    }
    //  ??????????????????
    timer = setTimeout(() => {
      // ???????????????delay ms????????????????????????????????? ?????????????????????
      fn('end')
      // console.log('??????delay??????????????????????????????')
    }, delay)
  }
}

// ??????(??????) ???????????????????????? ????????????????????? ??????1s?????????????????????
const betterDebounce = function (fn, delay) {
  let last = 0
  let timer = null
  return function () {
    let now = +new Date()
    if ((now - last) < delay) {
      clearTimeout(timer)
      timer = setTimeout(() => {
        fn('end')
        // console.log('??????delay??????????????????????????????');
        last = now
      }, delay)
    } else {
      last = now
      fn('auto')
      // console.log('????????????????????? delay??????????????????????????????');
    }
  }
}


/* harmony default export */ var utils = ({
  throttle,
  debounce,
  betterDebounce
});
// CONCATENATED MODULE: ./packages/index.js






 // components ??????

 // toast 

 // ?????????????????? ?????????

var packages_install = function install(Vue, options) {
  // ????????????
  if (options && options.components) {
    var components = options.components;
    components.forEach(function (component) {
      views.forEach(function (COMPONENT) {
        if (component === COMPONENT.name) {
          Vue.component(COMPONENT.name, COMPONENT);
        }
      });
    });
  } else {
    // ????????????
    views.forEach(function (COMPONENT) {
      Vue.component(COMPONENT.name, COMPONENT);
    });
  } // ????????????


  Vue.prototype.$msg = VMessage;
  Vue.prototype.$utils = utils;
};

/* harmony default export */ var packages_0 = __webpack_exports__["a"] = (packages_install);

/***/ }),

/***/ "515a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_style_index_0_id_d4107a56_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("35cf");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_style_index_0_id_d4107a56_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_style_index_0_id_d4107a56_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("Vue");

/***/ }),

/***/ "b319":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c727":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=xxo.common.js.map