(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/aoc/AOC.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/aoc/AOC.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AocAdd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AocAdd */ "./resources/js/src/views/aoc/AocAdd.vue");
/* harmony import */ var _editAoc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editAoc */ "./resources/js/src/views/aoc/editAoc.vue");


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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AOC',
  components: {
    EditAoc: _editAoc__WEBPACK_IMPORTED_MODULE_2__["default"],
    AocAdd: _AocAdd__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      selected: [],
      'tableList': ['vs-th: Component', 'vs-tr: Component', 'vs-td: Component', 'thread: Slot', 'tbody: Slot', 'header: Slot']
    };
  },
  computed: {
    isSmallerScreen: function isSmallerScreen() {
      return this.$store.state.windowWidth < 768;
    },
    all_aocs: function all_aocs() {
      return this.$store.getters.all_aocs;
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
              return this.fetchAocName();

            case 2:
              _context.next = 4;
              return this.fetchAoc();

            case 4:
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
    fetchNews: function () {
      var _fetchNews = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.$store.dispatch('fetchNews');

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function fetchNews() {
        return _fetchNews.apply(this, arguments);
      }

      return fetchNews;
    }(),
    fetchAocName: function () {
      var _fetchAocName = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.$store.dispatch('fetchAocName');

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function fetchAocName() {
        return _fetchAocName.apply(this, arguments);
      }

      return fetchAocName;
    }(),
    fetchAoc: function () {
      var _fetchAoc = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.$store.dispatch('fetchAoc');

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function fetchAoc() {
        return _fetchAoc.apply(this, arguments);
      }

      return fetchAoc;
    }(),
    destroyAoc: function () {
      var _destroyAoc = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var self, promises;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                self = this;
                self.$vs.loading();
                promises = self.selected.map(
                /*#__PURE__*/
                function () {
                  var _ref = _asyncToGenerator(
                  /*#__PURE__*/
                  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(data) {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            _context5.next = 2;
                            return self.$store.dispatch('destroyAoc', data.id);

                          case 2:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee5);
                  }));

                  return function (_x) {
                    return _ref.apply(this, arguments);
                  };
                }());
                _context6.next = 5;
                return Promise.all(promises).then(function () {
                  self.$vs.notify({
                    time: 4000,
                    title: 'ប្រតិបត្តិការជោគជ័យ',
                    text: 'ទិន្នន័យបានបន្ថែម',
                    color: 'success',
                    iconPack: 'feather',
                    icon: 'icon-check',
                    position: 'top-center'
                  });
                  self.selected = [];
                  self.$vs.loading.close();
                });

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function destroyAoc() {
        return _destroyAoc.apply(this, arguments);
      }

      return destroyAoc;
    }()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/aoc/editAoc.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/aoc/editAoc.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ImageUpload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ImageUpload */ "./resources/js/src/components/ImageUpload.vue");


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
  name: "editAoc",
  components: {
    ImageUpload: _components_ImageUpload__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      /*user data*/
      selected_aoc: false,
      is_major: false,
      major: null,
      majors: [{
        name: 'ឈ្មោះជំនាញ'
      }],
      aoc: {
        id: false,
        name: 'ICT',
        content: 'អត្ថបទ',
        majors: []
      },
      options: {
        height: 300,
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
    all_aocs: function all_aocs() {
      return this.$store.getters.all_aocs;
    },
    all_aoc_names: function all_aoc_names() {
      return this.$store.getters.all_aoc_names;
    },
    isSmallerScreen: function isSmallerScreen() {
      return this.$store.state.windowWidth < 768;
    }
  },
  methods: {
    //fetch aoc
    fetchAoc: function () {
      var _fetchAoc = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.$store.dispatch('fetchAoc');

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function fetchAoc() {
        return _fetchAoc.apply(this, arguments);
      }

      return fetchAoc;
    }(),
    //add major
    addMajor: function addMajor(index) {
      this.majors.push({
        name: index
      });
    },
    removeMajor: function removeMajor(index) {
      this.majors.splice(index, 1);
    },

    /*set thumbnail*/
    setThumb: function setThumb(thumb) {
      this.news.thumb = thumb;
    },
    //store
    updateAoc: function updateAoc() {
      var _this = this;

      var self = this;
      this.$validator.validateAll().then(function (result) {
        if (result && self.aoc.name && self.aoc.content && self.selected_aoc) {
          self.$vs.loading();

          _this.$store.dispatch('updateAoc', {
            id: self.selected_aoc,
            aoc: self.aoc
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
              self.fetchAoc();
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
    //edit
    editAoc: function editAoc() {
      var self = this;
      self.aoc.majors = [];
      self.$store.dispatch('editAoc', self.selected_aoc).then(function (data) {
        self.aoc = data;
      });
    },
    //editAddMajorAoc
    editAddMajorAoc: function editAddMajorAoc() {
      var self = this;

      if (self.major) {
        self.$vs.loading();
        self.$store.dispatch('editAddMajorAoc', {
          id: self.selected_aoc,
          major: self.major
        }).then(function (data) {
          self.aoc.majors.push(data);
          self.$vs.notify({
            time: 4000,
            title: 'ប្រតិបត្តិការជោគជ័យ',
            text: 'ទិន្នន័យបានបន្ថែម',
            color: 'success',
            iconPack: 'feather',
            icon: 'icon-check',
            position: 'top-center'
          });
          self.$vs.loading.close();
          self.major = null;
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
    },
    //editUpdateMajorAoc
    editUpdateMajorAoc: function editUpdateMajorAoc(content, id, key) {
      var self = this;

      if (content) {
        self.$vs.loading();
        self.$store.dispatch('editUpdateMajorAoc', {
          id: id,
          content: content,
          key: key
        }).then(function () {
          self.$vs.notify({
            time: 4000,
            title: 'ប្រតិបត្តិការជោគជ័យ',
            text: 'ទិន្នន័យបានបន្ថែម',
            color: 'success',
            iconPack: 'feather',
            icon: 'icon-check',
            position: 'top-center'
          });
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
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/aoc/AOC.vue?vue&type=template&id=8e7b05be&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/aoc/AOC.vue?vue&type=template&id=8e7b05be& ***!
  \*********************************************************************************************************************************************************************************************************/
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
    "vs-tabs",
    { key: _vm.isSmallerScreen },
    [
      _c(
        "vs-tab",
        {
          attrs: { "icon-pack": "feather", icon: "icon-list", label: "បញ្ជី" }
        },
        [
          _c(
            "vx-card",
            { attrs: { "no-shadow": "" } },
            [
              _c(
                "div",
                { staticClass: "btn-group flex" },
                [
                  _vm.selected.length
                    ? _c(
                        "vs-button",
                        {
                          attrs: {
                            color: "danger",
                            icon: "icon-trash-2",
                            "icon-pack": "feather",
                            type: "relief"
                          },
                          on: { click: _vm.destroyAoc }
                        },
                        [_vm._v("លុប")]
                      )
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "vs-table",
                {
                  attrs: {
                    multiple: "",
                    pagination: "",
                    "max-items": "10",
                    search: "",
                    data: _vm.all_aocs
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
                              _c(
                                "vs-td",
                                { attrs: { data: data[indextr].id } },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(data[indextr].id) +
                                      "\n                        "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-td",
                                { attrs: { data: data[indextr].name } },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(data[indextr].name) +
                                      "\n                        "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "vs-td",
                                { attrs: { data: data[indextr].created_at } },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(data[indextr].created_at) +
                                      "\n                        "
                                  )
                                ]
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
                      _c("vs-th", { attrs: { "sort-key": "id" } }, [
                        _vm._v("ល.រ")
                      ]),
                      _vm._v(" "),
                      _c("vs-th", { attrs: { "sort-key": "name" } }, [
                        _vm._v("ឈ្មោះ")
                      ]),
                      _vm._v(" "),
                      _c("vs-th", { attrs: { "sort-key": "created_at" } }, [
                        _vm._v("កាលបរិច្ឆេទ")
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
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vs-tab",
        {
          attrs: {
            "icon-pack": "feather",
            icon: "icon-plus-square",
            label: "បន្ថែម"
          }
        },
        [_c("aoc-add")],
        1
      ),
      _vm._v(" "),
      _c(
        "vs-tab",
        {
          attrs: { "icon-pack": "feather", icon: "icon-edit", label: "កែប្រែ" }
        },
        [_c("edit-aoc")],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/aoc/editAoc.vue?vue&type=template&id=5deb4c52&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/aoc/editAoc.vue?vue&type=template&id=5deb4c52&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
                attrs: { autocomplete: "", label: "ជ្រើរើសបញ្ជី" },
                on: { input: _vm.editAoc },
                model: {
                  value: _vm.selected_aoc,
                  callback: function($$v) {
                    _vm.selected_aoc = $$v
                  },
                  expression: "selected_aoc"
                }
              },
              _vm._l(_vm.all_aocs, function(aoc, index) {
                return _c("vs-select-item", {
                  key: index,
                  attrs: { text: aoc.name, value: aoc.id }
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
        _c(
          "div",
          { staticClass: "vx-col w-full" },
          [
            _c(
              "vs-select",
              {
                staticClass: "w-full",
                attrs: { autocomplete: "", label: "ឈ្មោះ", name: "name" },
                model: {
                  value: _vm.aoc.name,
                  callback: function($$v) {
                    _vm.$set(_vm.aoc, "name", $$v)
                  },
                  expression: "aoc.name"
                }
              },
              _vm._l(_vm.all_aoc_names, function(aoc, index) {
                return _c("vs-select-item", {
                  key: index,
                  attrs: { text: aoc.name, value: aoc.name }
                })
              }),
              1
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.errors.has("name"),
                    expression: "errors.has('name')"
                  }
                ],
                staticClass: "text-danger text-sm"
              },
              [_vm._v(_vm._s(_vm.errors.first("name")))]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "vx-col w-full my-2" },
          [
            _c("tinymce", {
              attrs: { other_options: _vm.options, id: "aoc-content" },
              model: {
                value: _vm.aoc.content,
                callback: function($$v) {
                  _vm.$set(_vm.aoc, "content", $$v)
                },
                expression: "aoc.content"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _vm.aoc.id
          ? _c(
              "div",
              { staticClass: "vx-col w-full" },
              [
                _c("label", [_vm._v("បន្ថែមជំនាញ")]),
                _vm._v(" "),
                _c(
                  "vx-input-group",
                  { staticClass: "mb-2" },
                  [
                    _c("vs-input", {
                      on: {
                        keyup: function($event) {
                          if (
                            !$event.type.indexOf("key") &&
                            _vm._k(
                              $event.keyCode,
                              "enter",
                              13,
                              $event.key,
                              "Enter"
                            )
                          ) {
                            return null
                          }
                          return _vm.editAddMajorAoc($event)
                        }
                      },
                      model: {
                        value: _vm.major,
                        callback: function($$v) {
                          _vm.major = $$v
                        },
                        expression: "major"
                      }
                    }),
                    _vm._v(" "),
                    _c("template", { slot: "append" }, [
                      _c(
                        "div",
                        { staticClass: "append-text btn-addon" },
                        [
                          _c("vs-button", {
                            attrs: {
                              type: "relief",
                              "icon-pack": "feather",
                              icon: "icon-plus-square"
                            },
                            on: { click: _vm.editAddMajorAoc }
                          })
                        ],
                        1
                      )
                    ])
                  ],
                  2
                )
              ],
              1
            )
          : _vm._e()
      ]),
      _vm._v(" "),
      _vm.aoc.majors.length
        ? _c(
            "vs-tabs",
            _vm._l(_vm.aoc.majors, function(major, index) {
              return _c(
                "vs-tab",
                { key: index, attrs: { label: major.major } },
                [
                  _c(
                    "vs-tabs",
                    {
                      attrs: { position: _vm.isSmallerScreen ? "top" : "left" }
                    },
                    [
                      _c(
                        "vs-tab",
                        { attrs: { label: "Home" } },
                        [
                          _c(
                            "div",
                            { staticClass: "flex btn-group my-2" },
                            [
                              _c("vs-button", {
                                attrs: {
                                  radius: "",
                                  icon: "icon-save",
                                  "icon-pack": "feather",
                                  type: "relief"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.editUpdateMajorAoc(
                                      major.content,
                                      major.id,
                                      "content"
                                    )
                                  }
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("tinymce", {
                            attrs: {
                              other_options: _vm.options,
                              id: "content-" + index
                            },
                            model: {
                              value: major.content,
                              callback: function($$v) {
                                _vm.$set(major, "content", $$v)
                              },
                              expression: "major.content"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-tab",
                        { attrs: { label: "Curriculum" } },
                        [
                          _c(
                            "div",
                            { staticClass: "flex btn-group my-2" },
                            [
                              _c("vs-button", {
                                attrs: {
                                  radius: "",
                                  icon: "icon-save",
                                  "icon-pack": "feather",
                                  type: "relief"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.editUpdateMajorAoc(
                                      major.curriculum,
                                      major.id,
                                      "curriculum"
                                    )
                                  }
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("tinymce", {
                            attrs: {
                              other_options: _vm.options,
                              id: "curriculum-" + index
                            },
                            model: {
                              value: major.curriculum,
                              callback: function($$v) {
                                _vm.$set(major, "curriculum", $$v)
                              },
                              expression: "major.curriculum"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-tab",
                        { attrs: { label: "Schedule" } },
                        [
                          _c(
                            "div",
                            { staticClass: "flex btn-group my-2" },
                            [
                              _c("vs-button", {
                                attrs: {
                                  radius: "",
                                  icon: "icon-save",
                                  "icon-pack": "feather",
                                  type: "relief"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.editUpdateMajorAoc(
                                      major.schedule,
                                      major.id,
                                      "schedule"
                                    )
                                  }
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("tinymce", {
                            attrs: {
                              other_options: _vm.options,
                              id: "schedule-" + index
                            },
                            model: {
                              value: major.schedule,
                              callback: function($$v) {
                                _vm.$set(major, "schedule", $$v)
                              },
                              expression: "major.schedule"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            }),
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c("vs-divider"),
      _vm._v(" "),
      _vm.selected_aoc
        ? _c(
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
                  on: { click: _vm.updateAoc }
                },
                [_vm._v("រក្សាទុក")]
              )
            ],
            1
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/aoc/AOC.vue":
/*!********************************************!*\
  !*** ./resources/js/src/views/aoc/AOC.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AOC_vue_vue_type_template_id_8e7b05be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AOC.vue?vue&type=template&id=8e7b05be& */ "./resources/js/src/views/aoc/AOC.vue?vue&type=template&id=8e7b05be&");
/* harmony import */ var _AOC_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AOC.vue?vue&type=script&lang=js& */ "./resources/js/src/views/aoc/AOC.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AOC_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AOC_vue_vue_type_template_id_8e7b05be___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AOC_vue_vue_type_template_id_8e7b05be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/aoc/AOC.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/aoc/AOC.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/src/views/aoc/AOC.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AOC_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AOC.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/aoc/AOC.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AOC_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/aoc/AOC.vue?vue&type=template&id=8e7b05be&":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/aoc/AOC.vue?vue&type=template&id=8e7b05be& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AOC_vue_vue_type_template_id_8e7b05be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AOC.vue?vue&type=template&id=8e7b05be& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/aoc/AOC.vue?vue&type=template&id=8e7b05be&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AOC_vue_vue_type_template_id_8e7b05be___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AOC_vue_vue_type_template_id_8e7b05be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/aoc/editAoc.vue":
/*!************************************************!*\
  !*** ./resources/js/src/views/aoc/editAoc.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editAoc_vue_vue_type_template_id_5deb4c52_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editAoc.vue?vue&type=template&id=5deb4c52&scoped=true& */ "./resources/js/src/views/aoc/editAoc.vue?vue&type=template&id=5deb4c52&scoped=true&");
/* harmony import */ var _editAoc_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editAoc.vue?vue&type=script&lang=js& */ "./resources/js/src/views/aoc/editAoc.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _editAoc_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _editAoc_vue_vue_type_template_id_5deb4c52_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _editAoc_vue_vue_type_template_id_5deb4c52_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5deb4c52",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/aoc/editAoc.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/aoc/editAoc.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/aoc/editAoc.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_editAoc_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./editAoc.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/aoc/editAoc.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_editAoc_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/aoc/editAoc.vue?vue&type=template&id=5deb4c52&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/aoc/editAoc.vue?vue&type=template&id=5deb4c52&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editAoc_vue_vue_type_template_id_5deb4c52_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./editAoc.vue?vue&type=template&id=5deb4c52&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/aoc/editAoc.vue?vue&type=template&id=5deb4c52&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editAoc_vue_vue_type_template_id_5deb4c52_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_editAoc_vue_vue_type_template_id_5deb4c52_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);