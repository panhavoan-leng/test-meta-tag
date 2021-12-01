"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_SignatureForm_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SignatureForm.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SignatureForm.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      errors: [],
      saved: false,
      signature: {
        name: null,
        email: null,
        body: null
      }
    };
  },
  mounted: function mounted() {
    console.log('ss');
  },
  methods: {
    onSubmit: function onSubmit() {
      var _this = this;

      this.saved = false;
      axios.post('api/signatures', this.signature).then(function (_ref) {
        var data = _ref.data;
        return _this.setSuccessMessage();
      })["catch"](function (_ref2) {
        var response = _ref2.response;
        return _this.setErrors(response);
      });
    },
    setErrors: function setErrors(response) {
      this.errors = response.data.errors;
    },
    setSuccessMessage: function setSuccessMessage() {
      this.reset();
      this.saved = true;
    },
    reset: function reset() {
      this.errors = [];
      this.signature = {
        name: null,
        email: null,
        body: null
      };
    }
  }
});

/***/ }),

/***/ "./resources/js/components/SignatureForm.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/SignatureForm.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SignatureForm_vue_vue_type_template_id_36d5eb41___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SignatureForm.vue?vue&type=template&id=36d5eb41& */ "./resources/js/components/SignatureForm.vue?vue&type=template&id=36d5eb41&");
/* harmony import */ var _SignatureForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignatureForm.vue?vue&type=script&lang=js& */ "./resources/js/components/SignatureForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SignatureForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SignatureForm_vue_vue_type_template_id_36d5eb41___WEBPACK_IMPORTED_MODULE_0__.render,
  _SignatureForm_vue_vue_type_template_id_36d5eb41___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SignatureForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/SignatureForm.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/SignatureForm.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SignatureForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SignatureForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SignatureForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SignatureForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/SignatureForm.vue?vue&type=template&id=36d5eb41&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/SignatureForm.vue?vue&type=template&id=36d5eb41& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SignatureForm_vue_vue_type_template_id_36d5eb41___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SignatureForm_vue_vue_type_template_id_36d5eb41___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SignatureForm_vue_vue_type_template_id_36d5eb41___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SignatureForm.vue?vue&type=template&id=36d5eb41& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SignatureForm.vue?vue&type=template&id=36d5eb41&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SignatureForm.vue?vue&type=template&id=36d5eb41&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SignatureForm.vue?vue&type=template&id=36d5eb41& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.saved
      ? _c("div", { staticClass: "alert alert-success" }, [
          _c("strong", [_vm._v("Success!")]),
          _vm._v(" Your signature has been saved successfully.\n    "),
        ])
      : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "well well-sm", attrs: { id: "signature-form" } },
      [
        _c(
          "form",
          {
            staticClass: "form-horizontal",
            attrs: { method: "post" },
            on: {
              submit: function ($event) {
                $event.preventDefault()
                return _vm.onSubmit.apply(null, arguments)
              },
            },
          },
          [
            _c("fieldset", [
              _c("legend", { staticClass: "text-center" }, [
                _vm._v("Sign the GuestBook"),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c(
                  "label",
                  {
                    staticClass: "col-md-3 control-label",
                    attrs: { for: "name" },
                  },
                  [_vm._v("Name")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "col-md-9",
                    class: { "has-error": _vm.errors.name },
                  },
                  [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.signature.name,
                          expression: "signature.name",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        id: "name",
                        type: "text",
                        placeholder: "Your name",
                      },
                      domProps: { value: _vm.signature.name },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.signature, "name", $event.target.value)
                        },
                      },
                    }),
                    _vm._v(" "),
                    _vm.errors.name
                      ? _c("span", { staticClass: "help-block text-danger" }, [
                          _vm._v(_vm._s(_vm.errors.name[0])),
                        ])
                      : _vm._e(),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c(
                  "label",
                  {
                    staticClass: "col-md-3 control-label",
                    attrs: { for: "email" },
                  },
                  [_vm._v("Your E-mail")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "col-md-9",
                    class: { "has-error": _vm.errors.email },
                  },
                  [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.signature.email,
                          expression: "signature.email",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        id: "email",
                        type: "text",
                        placeholder: "Your email",
                      },
                      domProps: { value: _vm.signature.email },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.signature, "email", $event.target.value)
                        },
                      },
                    }),
                    _vm._v(" "),
                    _vm.errors.email
                      ? _c("span", { staticClass: "help-block text-danger" }, [
                          _vm._v(_vm._s(_vm.errors.email[0])),
                        ])
                      : _vm._e(),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group" }, [
                _c(
                  "label",
                  {
                    staticClass: "col-md-3 control-label",
                    attrs: { for: "body" },
                  },
                  [_vm._v("Your message")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "col-md-9",
                    class: { "has-error": _vm.errors.body },
                  },
                  [
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.signature.body,
                          expression: "signature.body",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: {
                        id: "body",
                        placeholder: "Please enter your message here...",
                        rows: "5",
                      },
                      domProps: { value: _vm.signature.body },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.signature, "body", $event.target.value)
                        },
                      },
                    }),
                    _vm._v(" "),
                    _vm.errors.body
                      ? _c("span", { staticClass: "help-block text-danger" }, [
                          _vm._v(_vm._s(_vm.errors.body[0])),
                        ])
                      : _vm._e(),
                  ]
                ),
              ]),
              _vm._v(" "),
              _vm._m(0),
            ]),
          ]
        ),
      ]
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("div", { staticClass: "col-md-12 text-right" }, [
        _c(
          "button",
          { staticClass: "btn btn-primary btn-lg", attrs: { type: "submit" } },
          [_vm._v("Submit")]
        ),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);