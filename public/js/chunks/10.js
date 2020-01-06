(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/banner/AddBanner.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/banner/AddBanner.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-dropzone */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-dropzone/dist/vue2Dropzone.min.css */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.min.css");
/* harmony import */ var vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_1__);
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
  name: "AddBanner",
  components: {
    vueDropzone: vue2_dropzone__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      data: {
        banner: 'images/placeholder/placeholder.png',
        title: ''
      },
      bannerOptions: {
        url: route('file.upload.original'),
        maxFiles: 1,
        addRemoveLinks: true,
        dictDefaultMessage: "Insert Banner"
      }
    };
  },
  methods: {
    show: function show() {
      this.$modal.show('add');
    },
    //image upload
    successUploadBanner: function successUploadBanner(file, res) {
      this.data.banner = res.path;
    },
    //store
    storeBanner: function storeBanner() {
      var _this = this;

      var self = this;
      this.$validator.validateAll().then(function (result) {
        if (result) {
          self.$vs.loading();

          _this.$store.dispatch('storeBanner', self.data).then(function (data) {
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
              self.resetField();
              self.$refs.banner.removeAllFiles(true);
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
    //reset
    resetField: function resetField() {
      this.data = {
        logo: 'images/placeholder/placeholder.png',
        project_name: '',
        project_from: '',
        project_status: 'ongoing',
        description: ''
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/banner/Banner.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/banner/Banner.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AddBanner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddBanner */ "./resources/js/src/views/banner/AddBanner.vue");
/* harmony import */ var _EditBanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditBanner */ "./resources/js/src/views/banner/EditBanner.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  name: "Banner",
  components: {
    EditBanner: _EditBanner__WEBPACK_IMPORTED_MODULE_2__["default"],
    AddBanner: _AddBanner__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      selected: [],
      users: [{
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "website": "hildegard.org"
      }, {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "website": "anastasia.net"
      }]
    };
  },
  computed: {
    all_banners: function all_banners() {
      return this.$store.getters.all_banner;
    }
  },
  created: function () {
    var _created = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.fetchBanner();

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function created() {
      return _created.apply(this, arguments);
    }

    return created;
  }(),
  methods: {
    //fetch banner
    fetchBanner: function () {
      var _fetchBanner = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.$store.dispatch('fetchBanner');

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function fetchBanner() {
        return _fetchBanner.apply(this, arguments);
      }

      return fetchBanner;
    }(),
    //destroy
    destroyBanner: function destroyBanner() {
      var self = this;
      self.$vs.loading();
      var promises = self.selected.map(
      /*#__PURE__*/
      function () {
        var _ref = _asyncToGenerator(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(x) {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return self.$store.dispatch('destroyBanner', x.id);

                case 2:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
      Promise.all(promises).then(function () {
        self.$vs.notify({
          time: 4000,
          title: 'ប្រតិបត្តិការជោគជ័យ',
          text: 'ទិន្នន័យបានកែប្រែ',
          color: 'success',
          iconPack: 'feather',
          icon: 'icon-check',
          position: 'top-center'
        });
        self.$vs.loading.close();
        self.selected = [];
      });
    },
    //toggle status
    toggleBannerStatus: function toggleBannerStatus() {
      var self = this;
      self.$store.dispatch('toggleBannerStatus', self.selected[0].id).then(function (data) {
        if (data) {
          self.$vs.notify({
            time: 4000,
            title: 'ប្រតិបត្តិការជោគជ័យ',
            text: 'ទិន្នន័យបានកែប្រែ',
            color: 'success',
            iconPack: 'feather',
            icon: 'icon-check',
            position: 'top-center'
          });
          self.$vs.loading.close();
          self.fetchBanner();
          self.selected = [];
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/banner/EditBanner.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/banner/EditBanner.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-dropzone */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue2-dropzone/dist/vue2Dropzone.min.css */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.min.css");
/* harmony import */ var vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_2__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  name: "EditBanner",
  components: {
    vueDropzone: vue2_dropzone__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  data: function data() {
    return {
      data: {
        banner: 'images/placeholder/placeholder.png',
        title: ''
      },
      bannerOptions: {
        url: route('file.upload.original'),
        maxFiles: 1,
        addRemoveLinks: true,
        dictDefaultMessage: "Insert Banner"
      }
    };
  },
  methods: {
    //fetch project
    fetchBanner: function () {
      var _fetchBanner = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.$store.dispatch('fetchBanner');

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function fetchBanner() {
        return _fetchBanner.apply(this, arguments);
      }

      return fetchBanner;
    }(),
    show: function show(data) {
      this.$modal.show('edit');
      this.data = data;
    },
    //edit thumb
    loadBanner: function loadBanner() {
      this.$refs.banner.manuallyAddFile({
        size: 123
      }, this.data.banner);
    },
    //image upload
    successUploadBanner: function successUploadBanner(file, res) {
      this.data.banner = res.path;
    },
    //store
    updateBanner: function updateBanner() {
      var _this = this;

      var self = this;
      this.$validator.validateAll().then(function (result) {
        if (result) {
          self.$vs.loading();

          _this.$store.dispatch('updateBanner', self.data).then(function (data) {
            if (data) {
              self.$vs.notify({
                time: 4000,
                title: 'ប្រតិបត្តិការជោគជ័យ',
                text: 'ទិន្នន័យបានកែប្រែ',
                color: 'success',
                iconPack: 'feather',
                icon: 'icon-check',
                position: 'top-center'
              });
              self.fetchBanner();
              self.$emit('finished');
            } else {
              self.$vs.notify({
                title: 'ប្រតិបត្តិការបរាជ័យ',
                text: 'ទិន្នន័យមិនបានកែប្រែ',
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
    //reset
    resetField: function resetField() {
      this.data = {
        logo: 'images/placeholder/placeholder.png',
        project_name: null,
        project_from: null,
        project_status: 'ongoing',
        description: 'description'
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/banner/AddBanner.vue?vue&type=template&id=6bcf0818&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/banner/AddBanner.vue?vue&type=template&id=6bcf0818&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
    "modal",
    {
      attrs: {
        height: "auto",
        scrollable: true,
        pivotY: 0.07,
        clickToClose: false,
        name: "add"
      }
    },
    [
      _c("div", { staticClass: "flex justify-end" }, [
        _c(
          "i",
          {
            staticClass: "vs-icon vs-popup--close material-icons text-warning",
            staticStyle: { background: "rgb(255, 255, 255)" },
            on: {
              click: function($event) {
                return _vm.$modal.hide("add")
              }
            }
          },
          [_vm._v("close")]
        )
      ]),
      _vm._v(" "),
      _c(
        "vx-card",
        { attrs: { "no-shadow": "" } },
        [
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
                  attrs: { "label-placeholder": "Title", name: "title" },
                  model: {
                    value: _vm.data.title,
                    callback: function($$v) {
                      _vm.$set(_vm.data, "title", $$v)
                    },
                    expression: "data.title"
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
              { staticClass: "vx-col w-full mt-2" },
              [
                _c("label", [_vm._v("Banner")]),
                _vm._v(" "),
                _c("vue-dropzone", {
                  ref: "banner",
                  attrs: {
                    duplicateCheck: true,
                    id: "thumbnail",
                    options: _vm.bannerOptions
                  },
                  on: { "vdropzone-success": _vm.successUploadBanner }
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
              _c(
                "vs-button",
                {
                  attrs: {
                    icon: "icon-save",
                    "icon-pack": "feather",
                    type: "relief"
                  },
                  on: { click: _vm.storeBanner }
                },
                [_vm._v("រក្សាទុក")]
              )
            ],
            1
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/banner/Banner.vue?vue&type=template&id=3ba1dd16&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/banner/Banner.vue?vue&type=template&id=3ba1dd16&scoped=true& ***!
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
      _c(
        "div",
        { staticClass: "flex btn-group" },
        [
          _c(
            "vs-button",
            {
              attrs: {
                type: "relief",
                "icon-pack": "feather",
                icon: "icon-plus-square"
              },
              on: {
                click: function($event) {
                  return _vm.$refs.addBanner.show()
                }
              }
            },
            [_vm._v("\n            បន្ថែម\n        ")]
          ),
          _vm._v(" "),
          _vm.selected.length === 1
            ? _c(
                "vs-button",
                {
                  attrs: {
                    color: "warning",
                    type: "relief",
                    "icon-pack": "feather",
                    icon: "icon-edit"
                  },
                  on: {
                    click: function($event) {
                      return _vm.$refs.editBanner.show(_vm.selected[0])
                    }
                  }
                },
                [_vm._v("កែប្រែ\n        ")]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.selected.length === 1
            ? _c(
                "vs-button",
                {
                  attrs: {
                    color: "dark",
                    type: "relief",
                    "icon-pack": "feather",
                    icon: "icon-check"
                  },
                  on: { click: _vm.toggleBannerStatus }
                },
                [_vm._v("Active\n        ")]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.selected.length
            ? _c(
                "vs-button",
                {
                  attrs: {
                    color: "danger",
                    type: "relief",
                    "icon-pack": "feather",
                    icon: "icon-trash-2"
                  },
                  on: { click: _vm.destroyBanner }
                },
                [_vm._v("លុប\n        ")]
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c("add-banner", { ref: "addBanner" }),
      _vm._v(" "),
      _c("edit-banner", {
        ref: "editBanner",
        on: {
          finished: function($event) {
            _vm.selected = []
          }
        }
      }),
      _vm._v(" "),
      _c(
        "vs-table",
        {
          attrs: {
            multiple: "",
            pagination: "",
            "max-items": "10",
            search: "",
            data: _vm.all_banners
          },
          scopedSlots: _vm._u([
            {
              key: "default",
              fn: function(ref) {
                var data = ref.data
                return _vm._l(data, function(tr, indextr) {
                  return _c(
                    "vs-tr",
                    { key: indextr, attrs: { data: tr } },
                    [
                      _c("vs-td", { attrs: { data: data[indextr].id } }, [
                        _vm._v(
                          "\n                    " +
                            _vm._s(data[indextr].id) +
                            "\n                "
                        )
                      ]),
                      _vm._v(" "),
                      _c("vs-td", { attrs: { data: data[indextr].banner } }, [
                        _c("img", {
                          attrs: {
                            src: tr.banner,
                            alt: tr.banner,
                            height: "150"
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("vs-td", { attrs: { data: data[indextr].title } }, [
                        _vm._v(
                          "\n                    " +
                            _vm._s(data[indextr].title) +
                            "\n                "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "vs-td",
                        { attrs: { data: data[indextr].status } },
                        [
                          tr.status
                            ? _c("vs-chip", { attrs: { color: "primary" } }, [
                                _vm._v("Active")
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          !tr.status
                            ? _c("vs-chip", { attrs: { color: "danger" } }, [
                                _vm._v("Inactive")
                              ])
                            : _vm._e()
                        ],
                        1
                      )
                    ],
                    1
                  )
                })
              }
            }
          ]),
          model: {
            value: _vm.selected,
            callback: function($$v) {
              _vm.selected = $$v
            },
            expression: "selected"
          }
        },
        [
          _c(
            "template",
            { slot: "thead" },
            [
              _c("vs-th", { attrs: { "sort-key": "id" } }, [_vm._v("ID")]),
              _vm._v(" "),
              _c("vs-th", { attrs: { "sort-key": "banner" } }, [
                _vm._v("Banner")
              ]),
              _vm._v(" "),
              _c("vs-th", { attrs: { "sort-key": "title" } }, [
                _vm._v("Title")
              ]),
              _vm._v(" "),
              _c("vs-th", { attrs: { "sort-key": "status" } }, [
                _vm._v("Status")
              ])
            ],
            1
          )
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/banner/EditBanner.vue?vue&type=template&id=2e8cd2c2&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/banner/EditBanner.vue?vue&type=template&id=2e8cd2c2&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
    "modal",
    {
      attrs: {
        height: "auto",
        scrollable: true,
        pivotY: 0.07,
        clickToClose: false,
        name: "edit"
      }
    },
    [
      _c("div", { staticClass: "flex justify-end" }, [
        _c(
          "i",
          {
            staticClass: "vs-icon vs-popup--close material-icons text-warning",
            staticStyle: { background: "rgb(255, 255, 255)" },
            on: {
              click: function($event) {
                return _vm.$modal.hide("edit")
              }
            }
          },
          [_vm._v("close")]
        )
      ]),
      _vm._v(" "),
      _c(
        "vx-card",
        { attrs: { "no-shadow": "" } },
        [
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
                  attrs: { "label-placeholder": "Title", name: "title" },
                  model: {
                    value: _vm.data.title,
                    callback: function($$v) {
                      _vm.$set(_vm.data, "title", $$v)
                    },
                    expression: "data.title"
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
              { staticClass: "vx-col w-full mt-2" },
              [
                _c("label", [_vm._v("Banner")]),
                _vm._v(" "),
                _c("vue-dropzone", {
                  ref: "banner",
                  attrs: {
                    duplicateCheck: true,
                    id: "thumbnail",
                    options: _vm.bannerOptions
                  },
                  on: {
                    "vdropzone-mounted": _vm.loadBanner,
                    "vdropzone-success": _vm.successUploadBanner
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
              _c(
                "vs-button",
                {
                  attrs: {
                    icon: "icon-edit",
                    "icon-pack": "feather",
                    type: "relief"
                  },
                  on: { click: _vm.updateBanner }
                },
                [_vm._v("កែប្រែ")]
              )
            ],
            1
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

/***/ "./resources/js/src/views/banner/AddBanner.vue":
/*!*****************************************************!*\
  !*** ./resources/js/src/views/banner/AddBanner.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddBanner_vue_vue_type_template_id_6bcf0818_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddBanner.vue?vue&type=template&id=6bcf0818&scoped=true& */ "./resources/js/src/views/banner/AddBanner.vue?vue&type=template&id=6bcf0818&scoped=true&");
/* harmony import */ var _AddBanner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddBanner.vue?vue&type=script&lang=js& */ "./resources/js/src/views/banner/AddBanner.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddBanner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddBanner_vue_vue_type_template_id_6bcf0818_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddBanner_vue_vue_type_template_id_6bcf0818_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6bcf0818",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/banner/AddBanner.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/banner/AddBanner.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/src/views/banner/AddBanner.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBanner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddBanner.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/banner/AddBanner.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBanner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/banner/AddBanner.vue?vue&type=template&id=6bcf0818&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/views/banner/AddBanner.vue?vue&type=template&id=6bcf0818&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBanner_vue_vue_type_template_id_6bcf0818_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddBanner.vue?vue&type=template&id=6bcf0818&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/banner/AddBanner.vue?vue&type=template&id=6bcf0818&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBanner_vue_vue_type_template_id_6bcf0818_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddBanner_vue_vue_type_template_id_6bcf0818_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/banner/Banner.vue":
/*!**************************************************!*\
  !*** ./resources/js/src/views/banner/Banner.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Banner_vue_vue_type_template_id_3ba1dd16_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Banner.vue?vue&type=template&id=3ba1dd16&scoped=true& */ "./resources/js/src/views/banner/Banner.vue?vue&type=template&id=3ba1dd16&scoped=true&");
/* harmony import */ var _Banner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Banner.vue?vue&type=script&lang=js& */ "./resources/js/src/views/banner/Banner.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Banner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Banner_vue_vue_type_template_id_3ba1dd16_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Banner_vue_vue_type_template_id_3ba1dd16_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3ba1dd16",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/banner/Banner.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/banner/Banner.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/banner/Banner.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Banner.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/banner/Banner.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/banner/Banner.vue?vue&type=template&id=3ba1dd16&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/banner/Banner.vue?vue&type=template&id=3ba1dd16&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_template_id_3ba1dd16_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Banner.vue?vue&type=template&id=3ba1dd16&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/banner/Banner.vue?vue&type=template&id=3ba1dd16&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_template_id_3ba1dd16_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Banner_vue_vue_type_template_id_3ba1dd16_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/banner/EditBanner.vue":
/*!******************************************************!*\
  !*** ./resources/js/src/views/banner/EditBanner.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditBanner_vue_vue_type_template_id_2e8cd2c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditBanner.vue?vue&type=template&id=2e8cd2c2&scoped=true& */ "./resources/js/src/views/banner/EditBanner.vue?vue&type=template&id=2e8cd2c2&scoped=true&");
/* harmony import */ var _EditBanner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditBanner.vue?vue&type=script&lang=js& */ "./resources/js/src/views/banner/EditBanner.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditBanner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditBanner_vue_vue_type_template_id_2e8cd2c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditBanner_vue_vue_type_template_id_2e8cd2c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2e8cd2c2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/banner/EditBanner.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/banner/EditBanner.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/banner/EditBanner.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditBanner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditBanner.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/banner/EditBanner.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditBanner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/banner/EditBanner.vue?vue&type=template&id=2e8cd2c2&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/banner/EditBanner.vue?vue&type=template&id=2e8cd2c2&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditBanner_vue_vue_type_template_id_2e8cd2c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditBanner.vue?vue&type=template&id=2e8cd2c2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/banner/EditBanner.vue?vue&type=template&id=2e8cd2c2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditBanner_vue_vue_type_template_id_2e8cd2c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditBanner_vue_vue_type_template_id_2e8cd2c2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);