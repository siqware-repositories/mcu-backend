(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/news/editNews.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/news/editNews.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ImageUpload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/ImageUpload */ "./resources/js/src/components/ImageUpload.vue");
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
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "editNews",
  components: {
    ImageUpload: _components_ImageUpload__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      /*news data*/
      selected_news: null,
      news: {
        title: 'ចំណងជើង',
        category: 'ICT',
        thumb: null,
        content: 'អត្ថបទ'
      },
      categories: [{
        id: 1,
        category: 'ICT'
      }, {
        id: 2,
        category: 'Administrator'
      }, {
        id: 3,
        category: 'Faculty of Science and Technology'
      }],
      options: {
        height: 500,
        plugins: 'link image imagetools table contextmenu lists',
        automatic_uploads: true,
        images_upload_url: route('file.upload.tinymce'),
        images_reuse_filename: true,
        relative_urls: false,
        remove_script_host: false,
        convert_urls: true
      }
    };
  },
  computed: {
    placeholder: function placeholder() {
      return this.$store.getters.getAppUrl + 'images/placeholder/placeholder.png';
    },
    all_news: function all_news() {
      return this.$store.getters.all_news;
    },
    all_aoc_names: function all_aoc_names() {
      return this.$store.getters.all_aoc_names;
    }
  },
  methods: {
    /*set thumbnail*/
    setThumb: function setThumb(thumb) {
      this.news.thumb = thumb;
    },
    //store
    updateNews: function updateNews() {
      var _this = this;

      var self = this;
      this.$validator.validateAll().then(function (result) {
        if (result && self.news.category && self.news.thumb && self.news.content) {
          self.$vs.loading();

          _this.$store.dispatch('updateNews', {
            id: self.selected_news,
            data: self.news
          }).then(function (data) {
            if (data) {
              self.$vs.notify({
                time: 4000,
                title: 'ប្រតិបត្តិការជោគជ័យ',
                text: 'ទិន្នន័យបានបន្ថែម',
                color: 'success',
                iconPack: 'feather',
                icon: 'icon-check',
                position: 'top-center'
              });
              self.news = data;
            } else {
              self.$vs.notify({
                title: 'ប្រតិបត្តិការបរាជ័យ',
                text: 'ទិន្នន័យមិនបានបន្ថែម',
                color: 'danger',
                iconPack: 'feather',
                icon: 'icon-message-square',
                position: 'top-center'
              });
            }

            self.$vs.loading.close();
          });
        } else {
          self.$vs.notify({
            title: 'ប្រតិបត្តិការបរាជ័យ',
            text: 'សូមបំពេញទិន្នន័យអោយបានត្រឹមត្រូវ',
            color: 'danger',
            iconPack: 'feather',
            icon: 'icon-message-square',
            position: 'top-center'
          });
        }
      });
    },
    //reset field
    resetField: function resetField() {
      this.news = {
        title: 'ចំណងជើង',
        category: 'ICT',
        thumb: null,
        content: 'អត្ថបទ'
      };
    },
    //edit
    editNews: function editNews() {
      var self = this;
      self.$store.dispatch('editNews', self.selected_news).then(function (data) {
        self.news = data;
      });
    },
    //destroy
    destroyNews: function destroyNews() {
      var self = this;
      self.$store.dispatch('editNews', self.selected_news).then(function (data) {
        self.news = data;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/news/editNews.vue?vue&type=template&id=60f4f49f&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/news/editNews.vue?vue&type=template&id=60f4f49f&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "vx-card",
    { attrs: { "no-shadow": "" } },
    [
      _c("div", { staticClass: "vx-row" }, [
        _c(
          "div",
          { staticClass: "vx-col w-full" },
          [
            _c(
              "vs-select",
              {
                staticClass: "w-full",
                attrs: { autocomplete: "", label: "ជ្រើរើសពត៌មាន" },
                on: { input: _vm.editNews },
                model: {
                  value: _vm.selected_news,
                  callback: function($$v) {
                    _vm.selected_news = $$v
                  },
                  expression: "selected_news"
                }
              },
              _vm._l(_vm.all_news, function(news, index) {
                return _c("vs-select-item", {
                  key: index,
                  attrs: { text: news.title, value: news.id }
                })
              }),
              1
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("vs-divider"),
      _vm._v(" "),
      _c("div", { staticClass: "vx-row" }, [
        _c("div", { staticClass: "vx-col lg:w-3/4 w-full" }, [
          _c("div", { staticClass: "vx-row" }, [
            _c(
              "div",
              { staticClass: "vx-col w-full" },
              [
                _c("vs-input", {
                  directives: [
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required",
                      expression: "'required'"
                    }
                  ],
                  staticClass: "w-full",
                  attrs: { "label-placeholder": "ចំណងជើង", name: "title" },
                  model: {
                    value: _vm.news.title,
                    callback: function($$v) {
                      _vm.$set(_vm.news, "title", $$v)
                    },
                    expression: "news.title"
                  }
                }),
                _vm._v(" "),
                _c(
                  "span",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.errors.has("title"),
                        expression: "errors.has('title')"
                      }
                    ],
                    staticClass: "text-danger text-sm"
                  },
                  [_vm._v(_vm._s(_vm.errors.first("title")))]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "vx-col w-full" },
              [
                _c(
                  "vs-select",
                  {
                    staticClass: "w-full",
                    attrs: { autocomplete: "", label: "ប្រភេទ" },
                    on: { "input-change": function($event) {} },
                    model: {
                      value: _vm.news.category,
                      callback: function($$v) {
                        _vm.$set(_vm.news, "category", $$v)
                      },
                      expression: "news.category"
                    }
                  },
                  _vm._l(_vm.all_aoc_names, function(aoc, index) {
                    return _c("vs-select-item", {
                      key: index,
                      attrs: { text: aoc.name, value: aoc.name }
                    })
                  }),
                  1
                )
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "vx-col lg:w-1/4 w-full" },
          [
            _c("image-upload", {
              attrs: {
                "image-src": _vm.news.thumb ? _vm.news.thumb : _vm.placeholder,
                "upload-url": "file.upload.thumb"
              },
              on: { "get-image-path": _vm.setThumb }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "vx-row" }, [
        _c(
          "div",
          { staticClass: "vx-col w-full my-2" },
          [
            _c("tinymce", {
              attrs: { other_options: _vm.options, id: "news-content-edit" },
              model: {
                value: _vm.news.content,
                callback: function($$v) {
                  _vm.$set(_vm.news, "content", $$v)
                },
                expression: "news.content"
              }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("vs-divider"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex justify-end btn-group" },
        [
          _vm.selected_news
            ? _c(
                "vs-button",
                {
                  attrs: {
                    icon: "icon-edit",
                    "icon-pack": "feather",
                    type: "relief"
                  },
                  on: { click: _vm.updateNews }
                },
                [_vm._v("កែប្រែ")]
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "vs-button",
            {
              attrs: {
                color: "warning",
                icon: "icon-delete",
                "icon-pack": "feather",
                type: "relief"
              },
              on: { click: _vm.resetField }
            },
            [_vm._v("សម្អាត")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/news/editNews.vue":
/*!**************************************************!*\
  !*** ./resources/js/src/views/news/editNews.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editNews_vue_vue_type_template_id_60f4f49f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editNews.vue?vue&type=template&id=60f4f49f&scoped=true& */ "./resources/js/src/views/news/editNews.vue?vue&type=template&id=60f4f49f&scoped=true&");
/* harmony import */ var _editNews_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editNews.vue?vue&type=script&lang=js& */ "./resources/js/src/views/news/editNews.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _editNews_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _editNews_vue_vue_type_template_id_60f4f49f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _editNews_vue_vue_type_template_id_60f4f49f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "60f4f49f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/news/editNews.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/news/editNews.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/news/editNews.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_editNews_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./editNews.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/news/editNews.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_editNews_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/news/editNews.vue?vue&type=template&id=60f4f49f&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/news/editNews.vue?vue&type=template&id=60f4f49f&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editNews_vue_vue_type_template_id_60f4f49f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./editNews.vue?vue&type=template&id=60f4f49f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/news/editNews.vue?vue&type=template&id=60f4f49f&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editNews_vue_vue_type_template_id_60f4f49f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editNews_vue_vue_type_template_id_60f4f49f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);