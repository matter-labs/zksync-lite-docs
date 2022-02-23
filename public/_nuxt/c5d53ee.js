(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@inkline/inkline/src/components/IHamburgerMenu/template.html?vue&type=template&id=e83a9892&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hamburger",class:_vm.classes,on:{"click":_vm.emitClick}},[_c('span',{staticClass:"bars"})])}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@inkline/inkline/src/components/IHamburgerMenu/template.html?vue&type=template&id=e83a9892&scoped=true&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@inkline/inkline/src/mixins/index.js + 93 modules
var mixins = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@inkline/inkline/src/components/IHamburgerMenu/script.js?vue&type=script&lang=js&


/* harmony default export */ var scriptvue_type_script_lang_js_ = ({
  name: 'IHamburgerMenu',
  mixins: [mixins["d" /* ClassesProviderMixin */], mixins["l" /* EmitClickMethodMixin */], mixins["E" /* VariantPropertyMixin */]],
  props: {
    active: {
      type: Boolean,
      default: false
    },
    animation: {
      type: String,
      default: 'close'
    }
  },
  created: function created() {
    var _this = this;

    this.classesProvider.add(function () {
      return Object(defineProperty["a" /* default */])({
        '-active': _this.active
      }, "-".concat(_this.animation), true);
    });
  }
});
// CONCATENATED MODULE: ./node_modules/@inkline/inkline/src/components/IHamburgerMenu/script.js?vue&type=script&lang=js&
 /* harmony default export */ var IHamburgerMenu_scriptvue_type_script_lang_js_ = (scriptvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@inkline/inkline/src/components/IHamburgerMenu/style.scss?vue&type=style&index=0&id=e83a9892&lang=scss&scoped=true&
var stylevue_type_style_index_0_id_e83a9892_lang_scss_scoped_true_ = __webpack_require__(409);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@inkline/inkline/src/components/IHamburgerMenu/index.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  IHamburgerMenu_scriptvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "e83a9892",
  null
  
)

/* harmony default export */ var IHamburgerMenu = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@inkline/inkline/src/components/ILinkable/template.html?vue&type=template&id=3be692ba&scoped=true& + 1 modules
var templatevue_type_template_id_3be692ba_scoped_true_ = __webpack_require__(167);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/@inkline/inkline/src/components/ILinkable/index.vue + 4 modules
var ILinkable = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/@inkline/inkline/src/mixins/index.js + 93 modules
var mixins = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@inkline/inkline/src/components/IDropdownItem/script.js?vue&type=script&lang=js&



/* harmony default export */ var scriptvue_type_script_lang_js_ = ({
  name: 'IDropdownItem',
  extends: ILinkable["default"],
  mixins: [mixins["j" /* DisabledPropertyMixin */], mixins["d" /* ClassesProviderMixin */], mixins["q" /* EmitProviderMixin */]],
  props: {
    action: {
      type: [String, Number, Boolean],
      default: undefined
    },
    tabindex: {
      type: [Number, String],
      default: -1
    }
  },
  methods: {
    onClick: function onClick() {
      this.dispatch('IDropdown', 'item-click', [this.action, this]);
      this.$emit('click');
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@inkline/inkline/src/components/IDropdownItem/script.js?vue&type=script&lang=js&
 /* harmony default export */ var IDropdownItem_scriptvue_type_script_lang_js_ = (scriptvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@inkline/inkline/src/components/IDropdownItem/style.scss?vue&type=style&index=0&id=3be692ba&lang=scss&scoped=true&
var stylevue_type_style_index_0_id_3be692ba_lang_scss_scoped_true_ = __webpack_require__(374);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@inkline/inkline/src/components/IDropdownItem/index.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  IDropdownItem_scriptvue_type_script_lang_js_,
  templatevue_type_template_id_3be692ba_scoped_true_["a" /* render */],
  templatevue_type_template_id_3be692ba_scoped_true_["b" /* staticRenderFns */],
  false,
  null,
  "3be692ba",
  null
  
)

/* harmony default export */ var IDropdownItem = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {};

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "defaults", function() { return /* reexport */ defaults; });
__webpack_require__.d(__webpack_exports__, "idColumn", function() { return /* reexport */ idColumn; });
__webpack_require__.d(__webpack_exports__, "countColumn", function() { return /* reexport */ countColumn; });
__webpack_require__.d(__webpack_exports__, "expandColumn", function() { return /* reexport */ expandColumn; });

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@inkline/inkline/src/components/IDatatable/template.html?vue&type=template&id=22db628b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"datatable-wrapper"},[_c('div',{staticClass:"header-wrapper"},[_vm._t("header-wrapper",function(){return [(_vm.pagination)?_c('div',{staticClass:"pagination-select"},[_vm._l((_vm.i18nConfig.pagination.rowsPerPage),function(part){return [(part === 'rowsPerPage')?_c('i-select',{attrs:{"size":_vm.paginationConfig.size},model:{value:(_vm.rowsPerPage),callback:function ($$v) {_vm.rowsPerPage=$$v},expression:"rowsPerPage"}},_vm._l((_vm.paginationConfig.rowsPerPageOptions),function(item,index){return _c('i-select-option',{key:index,attrs:{"value":item,"label":'' + item}})}),1):[_vm._v(_vm._s(part))]]})],2):_vm._e(),_vm._v(" "),(_vm.filtering)?_c('div',{staticClass:"filtering-input"},[_c('i-input',{attrs:{"placeholder":_vm.i18nConfig.filtering.inputPlaceholder},model:{value:(_vm.filter),callback:function ($$v) {_vm.filter=$$v},expression:"filter"}},[_c('i-icon',{attrs:{"slot":"suffix","icon":"search"},slot:"suffix"})],1)],1):_vm._e()]},{"rowsFrom":_vm.rowsFrom + 1,"rowsTo":_vm.rowsTo,"rowsCount":_vm.rowsLength,"page":_vm.page,"rowsPerPage":_vm.rowsPerPage,"filter":_vm.filter,"onPageChange":_vm.setValueCallback('page'),"onRowsPerPageChange":_vm.setValueCallback('rowsPerPage'),"onFilterChange":_vm.setValueCallback('filter')})],2),_vm._v(" "),_c('div',{staticClass:"table-wrapper",class:_vm.classes['wrapper']},[_c('table',{staticClass:"datatable",class:_vm.classes['root']},[_c('thead',[_c('tr',{staticClass:"dtr"},[_vm._t("header",function(){return _vm._l((_vm.tableColumns),function(column,index){return (!column.custom)?_c('th',{key:index,ref:_vm.tableColumns,refInFor:true,staticClass:"dth",class:_vm.columnClass(column),style:(_vm.columnStyle(column)),on:{"click":function($event){return _vm.onTableHeadingClick($event, column)}}},[(!column.headerComponent)?_c('span',[_vm._v("\n                                "+_vm._s(_vm.tableColumnsHeaderRendered[column.path])+"\n                                "),(column.sortable)?_c('i-icon',{staticClass:"sortable-icon",attrs:{"icon":"sort"}},[(_vm.sortBy === column.path)?_c('i-icon',{attrs:{"icon":("sort-" + _vm.sortDirection)}}):_vm._e()],1):_vm._e()],1):_c(column.headerComponent,{tag:"span",attrs:{"column":column,"index":index,"sort-by":_vm.sortBy}})],1):_vm._e()})},{"sortBy":_vm.sortBy}),_vm._v(" "),(_vm.hasExpandableRows)?_c('th',{staticClass:"dth"}):_vm._e()],2)]),_vm._v(" "),_c('tbody',[_vm._l((_vm.tableRowsRendered),function(row,rowIndex){return [_c('tr',{key:row.id,staticClass:"dtr",class:_vm.rowClass(_vm.tableRows[row.indexRef]),style:(_vm.rowStyle(_vm.tableRows[row.indexRef])),on:{"click":function($event){return _vm.onTableRowClick($event, row)}}},[_vm._t("row",function(){return _vm._l((_vm.tableColumns),function(column,columnIndex){return (!column.custom)?_c('td',{key:row.id + '-' + columnIndex,staticClass:"dtd",class:_vm.columnClass(column, _vm.tableRows[row.indexRef]),style:(_vm.columnStyle(column, _vm.tableRows[row.indexRef])),on:{"click":function($event){return _vm.onTableDataClick($event, column, row)}}},[(!column.component)?_c('span',[_vm._v("\n                                    "+_vm._s(row[column.path])+"\n                                ")]):_c(column.component,{tag:"span",attrs:{"row":row,"data":_vm.tableRows[row.indexRef],"column":column}})],1):_vm._e()})},{"row":_vm.tableRows[row.indexRef],"index":row.indexRef}),_vm._v(" "),(_vm.hasExpandableRows)?_c('td',{staticClass:"dtd"},[_c('span',{staticClass:"expand-row",class:{ '-active': _vm.expanded[row.id] },attrs:{"role":"tab","id":("expand-row-" + (row.id)),"aria-expanded":_vm.expanded[row.id],"aria-controls":("expandable-row-" + (row.id)),"aria-describedby":("expandable-row-" + (row.id)),"tabindex":"0"},on:{"click":function($event){return _vm.onClickExpand(row.id)}}},[_c('i',{staticClass:"icon"})])]):_vm._e()],2),_vm._v(" "),(_vm.hasExpandableRows)?_c('tr',{directives:[{name:"show",rawName:"v-show",value:(_vm.expanded[row.id]),expression:"expanded[row.id]"}],key:row.id + '-expandable',staticClass:"dtr",class:_vm.rowClass(row),attrs:{"role":"tabpanel","id":("expandable-row-" + (row.id)),"aria-hidden":!_vm.expanded[row.id],"aria-labelledby":("expand-row-" + (row.id))}},[_vm._t("expand",null,{"columns":_vm.tableColumns,"row":row,"expaned":_vm.expanded[row.id]})],2):_vm._e()]}),_vm._v(" "),(_vm.tableRows.length === 0)?_c('tr',{staticClass:"dtr"},[_c('td',{staticClass:"dtd",attrs:{"colspan":_vm.tableColumns.length}},[(_vm.filter)?_vm._t("filtering-no-results",function(){return [_c('div',{staticClass:"_text-center"},[_vm._v(_vm._s(_vm.i18nConfig.filtering.noResultsFound))])]}):_vm._e()],2)]):_vm._e()],2),_vm._v(" "),(_vm.footer)?_c('tfoot',[_c('tr',{staticClass:"dtr"},[_vm._t("footer",function(){return _vm._l((_vm.tableColumns),function(column,index){return (!column.custom)?_c('th',{key:index,staticClass:"dth",class:_vm.columnClass(column),style:(_vm.columnStyle(column))},[(!column.footerComponent)?_c('span',[_vm._v("\n                                "+_vm._s(_vm.tableColumnsFooterRendered[column.path])+"\n                            ")]):_c(column.footerComponent,{tag:"span",attrs:{"column":column,"index":index}})],1):_vm._e()})}),_vm._v(" "),(_vm.hasExpandableRows)?_c('th',{staticClass:"dth"}):_vm._e()],2)]):_vm._e()])]),_vm._v(" "),(_vm.pagination)?_c('div',{staticClass:"footer-wrapper"},[_vm._t("footer-wrapper",function(){return [_c('div',{staticClass:"pagination-range"},[_vm._l((_vm.i18nConfig.pagination.rowsRange),function(part){return [(part === 'rowsFrom')?[_vm._v(_vm._s(_vm.rowsFrom + 1))]:(part === 'rowsTo')?[_vm._v(_vm._s(_vm.rowsTo))]:(part === 'rowsCount')?[_vm._v(_vm._s(_vm.rowsLength))]:[_vm._v(" "+_vm._s(part)+" ")]]})],2),_vm._v(" "),_vm._t("pagination",function(){return [_c('i-pagination',{attrs:{"items":_vm.rowsLength,"items-per-page":_vm.rowsPerPage,"limit":_vm.paginationConfig.limit,"size":_vm.paginationConfig.size,"variant":_vm.paginationConfig.variant},model:{value:(_vm.page),callback:function ($$v) {_vm.page=$$v},expression:"page"}})]},{"page":_vm.page,"rowsPerPage":_vm.rowsPerPage,"rowsCount":_vm.rowsLength})]},{"rowsFrom":_vm.rowsFrom + 1,"rowsTo":_vm.rowsTo,"rowsCount":_vm.rowsLength,"page":_vm.page,"rowsPerPage":_vm.rowsPerPage,"filter":_vm.filter,"onPageChange":_vm.setValueCallback('page'),"onRowsPerPageChange":_vm.setValueCallback('rowsPerPage'),"onFilterChange":_vm.setValueCallback('filter')})],2):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@inkline/inkline/src/components/IDatatable/template.html?vue&type=template&id=22db628b&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(71);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__(36);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__(117);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.sort.js
var es_array_sort = __webpack_require__(331);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.search.js
var es_string_search = __webpack_require__(157);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/fuse.js/dist/fuse.esm.js
var fuse_esm = __webpack_require__(326);

// EXTERNAL MODULE: ./node_modules/@inkline/inkline/src/components/ITable/index.vue + 4 modules
var ITable = __webpack_require__(103);

// EXTERNAL MODULE: ./node_modules/@inkline/inkline/src/components/IIcon/index.vue + 4 modules
var IIcon = __webpack_require__(122);

// EXTERNAL MODULE: ./node_modules/@inkline/inkline/src/components/IInput/index.vue + 2 modules
var IInput = __webpack_require__(49);

// EXTERNAL MODULE: ./node_modules/@inkline/inkline/src/components/ISelect/index.vue + 4 modules
var ISelect = __webpack_require__(123);

// EXTERNAL MODULE: ./node_modules/@inkline/inkline/src/components/ISelectOption/index.vue + 4 modules
var ISelectOption = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/@inkline/inkline/src/components/IPagination/index.vue + 4 modules
var IPagination = __webpack_require__(125);

// EXTERNAL MODULE: ./node_modules/@inkline/inkline/src/transitions/ITransitionExpand/index.vue + 2 modules
var ITransitionExpand = __webpack_require__(84);

// EXTERNAL MODULE: ./node_modules/@inkline/inkline/src/helpers/index.js + 24 modules
var helpers = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@inkline/inkline/src/components/IDatatable/script.js?vue&type=script&lang=js&






function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
























var defaults = {
  pagination: {
    limit: {
      xs: 3,
      sm: 5
    },
    size: 'md',
    variant: null,
    rowsPerPage: 10,
    rowsPerPageOptions: [10, 25, 50, 100]
  },
  filtering: {
    size: 'md',
    variant: null,
    fuse: {
      isCaseSensitive: false,
      shouldSort: false,
      includeMatches: true,
      includeScore: true,
      threshold: 0.25,
      location: 0,
      distance: 75,
      tokenize: true,
      maxPatternLength: 32,
      minMatchCharLength: 1
    }
  },
  i18n: {
    pagination: {
      rowsPerPage: 'Show {rowsPerPage} entries',
      rowsRange: 'Showing {rowsFrom} to {rowsTo} of {rowsCount} entries'
    },
    filtering: {
      inputPlaceholder: 'Search',
      noResultsFound: 'No matching records found'
    }
  }
};
var idColumn = {
  title: '',
  path: 'id',
  custom: true
};
var countColumn = {
  title: '#',
  path: '#',
  class: '-count',
  align: 'right',
  sortable: true,
  render: function render(row, column, index) {
    return (this.page - 1) * this.rowsPerPage + index + 1;
  }
};
var expandColumn = {
  title: '',
  path: '^',
  classes: '-expand',
  custom: true
};
/* harmony default export */ var scriptvue_type_script_lang_js_ = ({
  name: 'IDatatable',
  extends: ITable["default"],
  components: {
    IIcon: IIcon["default"],
    IInput: IInput["default"],
    ISelect: ISelect["default"],
    ISelectOption: ISelectOption["default"],
    IPagination: IPagination["default"],
    ITransitionExpand: ITransitionExpand["a" /* default */]
  },
  props: {
    async: {
      type: Boolean,
      default: false
    },
    columns: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    countColumn: {
      type: [Boolean, Object],
      default: function _default() {
        return {};
      }
    },
    expandColumn: {
      type: [Boolean, Object],
      default: function _default() {
        return {};
      }
    },
    rows: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    rowsCount: {
      type: Number,
      default: null
    },
    defaultSortKey: {
      type: String,
      default: '#'
    },
    filtering: {
      type: [Boolean, Object],
      default: true
    },
    pagination: {
      type: [Boolean, Object],
      default: true
    },
    footer: {
      type: Boolean,
      default: true
    },
    singleExpand: {
      type: Boolean,
      default: false
    },
    i18n: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      sortBy: this.defaultSortKey,
      sortDirection: 'asc',
      rowsPerPage: 0,
      page: 1,
      filter: '',
      expanded: {}
    };
  },
  computed: {
    tableColumns: function tableColumns() {
      var columns = Object(toConsumableArray["a" /* default */])(this.columns);

      columns = this.addColumnIndexRef(columns);
      columns = this.addCountColumn(columns);
      columns = this.addIdColumn(columns);
      columns = this.addExpandColumn(columns);
      columns = this.filterColumns(columns);
      return columns;
    },
    tableColumnsHeaderRendered: function tableColumnsHeaderRendered() {
      return this.renderColumns(this.tableColumns, 'renderHeader');
    },
    tableColumnsFooterRendered: function tableColumnsFooterRendered() {
      return this.renderColumns(this.tableColumns, 'renderFooter');
    },
    tableRows: function tableRows() {
      var rows = Object(toConsumableArray["a" /* default */])(this.rows);

      rows = this.sortRows(rows);
      rows = this.filterRows(rows);
      return rows;
    },
    tableRowsRendered: function tableRowsRendered() {
      var rows = this.tableRows;
      rows = this.paginateRows(rows);
      rows = this.renderRows(rows);
      return rows;
    },
    paginationConfig: function paginationConfig() {
      return this.getConfig('pagination');
    },
    filteringConfig: function filteringConfig() {
      var config = this.getConfig('filtering');
      config.fuse = _objectSpread(_objectSpread({}, defaults.filtering.fuse), this.filtering.fuse || {});
      return config;
    },
    i18nConfig: function i18nConfig() {
      var config = {
        pagination: _objectSpread(_objectSpread({}, defaults.i18n.pagination), this.i18n.pagination),
        filtering: _objectSpread(_objectSpread({}, defaults.i18n.filtering), this.i18n.filtering)
      };
      Object.keys(config.pagination).forEach(function (key) {
        config.pagination[key] = String.prototype.split.apply(config.pagination[key], [/ *[{}] */]);
      });
      return config;
    },
    filterableColumns: function filterableColumns() {
      return this.filteringConfig.fuse.keys || this.tableColumns.map(function (column) {
        return column.path;
      });
    },
    rowsLength: function rowsLength() {
      return this.rowsCount || // this.filter !== '' && !this.filteringConfig.async && this.tableRows.length ||
      this.tableRows.length;
    },
    rowsFrom: function rowsFrom() {
      return (this.page - 1) * this.rowsPerPage;
    },
    rowsTo: function rowsTo() {
      var to = this.page * this.rowsPerPage;
      return to > this.rowsLength ? this.rowsLength : to;
    },
    hasExpandableRows: function hasExpandableRows() {
      return Boolean(this.$slots.expand || this.$scopedSlots.expand);
    }
  },
  methods: {
    /**
     * Return rendered column header values
     *
     * @param columns
     * @param renderMethod
     * @returns {*}
     */
    renderColumns: function renderColumns(columns, renderMethod) {
      return columns.reduce(function (renderedColumn, column, index) {
        renderedColumn[column.path] = column[renderMethod] ? column[renderMethod](column, index) : column.title;
        return renderedColumn;
      }, {});
    },

    /**
     * Compute class names for the given column
     *
     * @param column
     * @param row
     * @returns {string[]}
     */
    columnClass: function columnClass(column, row) {
      var _row$config, _row$config$columns, _row$config$columns$c, _row$config2, _row$config2$columns, _row$config2$columns$;

      var classes = ["-align-".concat(column.align || 'left')];

      if (!row && column.sortable) {
        classes = classes.concat('-sortable');
      }

      if (column.sticky) {
        classes = classes.concat('-sticky');
      } // Add column specific classes


      if (column.class) {
        classes = classes.concat(column.class.constructor === Array ? column.class : [column.class]);
      } // Add row specific classes for current column


      if (row !== null && row !== void 0 && (_row$config = row.config) !== null && _row$config !== void 0 && (_row$config$columns = _row$config.columns) !== null && _row$config$columns !== void 0 && (_row$config$columns$c = _row$config$columns[column.path]) !== null && _row$config$columns$c !== void 0 && _row$config$columns$c.class) {
        classes = classes.concat(row.config.columns[column.path].class);
      } // Add row specific classes for all columns


      if (row !== null && row !== void 0 && (_row$config2 = row.config) !== null && _row$config2 !== void 0 && (_row$config2$columns = _row$config2.columns) !== null && _row$config2$columns !== void 0 && (_row$config2$columns$ = _row$config2$columns['*']) !== null && _row$config2$columns$ !== void 0 && _row$config2$columns$.class) {
        classes = classes.concat(row.config.columns['*'].class);
      }

      return classes;
    },

    /**
     * Compute style for the given column
     *
     * @param column
     * @param row
     */
    columnStyle: function columnStyle(column, row) {
      var _row$config3, _row$config3$columns, _row$config3$columns$, _row$config4, _row$config4$columns, _row$config4$columns$;

      var style = _objectSpread(_objectSpread(_objectSpread({}, column.style), (row === null || row === void 0 ? void 0 : (_row$config3 = row.config) === null || _row$config3 === void 0 ? void 0 : (_row$config3$columns = _row$config3.columns) === null || _row$config3$columns === void 0 ? void 0 : (_row$config3$columns$ = _row$config3$columns[column.path]) === null || _row$config3$columns$ === void 0 ? void 0 : _row$config3$columns$.style) || {}), (row === null || row === void 0 ? void 0 : (_row$config4 = row.config) === null || _row$config4 === void 0 ? void 0 : (_row$config4$columns = _row$config4.columns) === null || _row$config4$columns === void 0 ? void 0 : (_row$config4$columns$ = _row$config4$columns['*']) === null || _row$config4$columns$ === void 0 ? void 0 : _row$config4$columns$.style) || {});

      return Object.keys(style).length > 0 && style;
    },

    /**
     * Compute class names for the given row
     *
     * @param row
     * @returns {Array}
     */
    rowClass: function rowClass(row) {
      var _row$config5;

      var classes = []; // Add row specific classes

      if (row !== null && row !== void 0 && (_row$config5 = row.config) !== null && _row$config5 !== void 0 && _row$config5.class) {
        classes = classes.concat(row.config.class.constructor === Array ? row.config.class : [row.config.class]);
      }

      return classes;
    },

    /**
     * Compute style for the given row
     *
     * @param row
     */
    rowStyle: function rowStyle(row) {
      var _row$config6;

      var style = _objectSpread({}, row === null || row === void 0 ? void 0 : (_row$config6 = row.config) === null || _row$config6 === void 0 ? void 0 : _row$config6.style);

      return Object.keys(style).length > 0 && style;
    },

    /**
     * Add an extended count column if enabled
     *
     * @param columns
     * @returns {*}
     */
    addIdColumn: function addIdColumn(columns) {
      columns.unshift(_objectSpread({}, idColumn));
      return columns;
    },

    /**
     * Add a reference to column index
     *
     * @param columns
     * @returns {*}
     */
    addColumnIndexRef: function addColumnIndexRef(columns) {
      return columns.map(function (column, index) {
        return _objectSpread(_objectSpread({}, column), {}, {
          indexRef: index
        });
      });
    },

    /**
     * Add an extended count column if enabled
     *
     * @param columns
     * @returns {*}
     */
    addCountColumn: function addCountColumn(columns) {
      if (this.countColumn) {
        columns.unshift(_objectSpread(_objectSpread({}, countColumn), this.countColumn));
      }

      return columns;
    },

    /**
     * Add the expand handler column
     *
     * @param columns
     * @returns {*}
     */
    addExpandColumn: function addExpandColumn(columns) {
      if (this.hasExpandableRows && this.expandColumn) {
        columns.push(_objectSpread(_objectSpread({}, expandColumn), this.expandColumn));
      }

      return columns;
    },

    /**
     * Remove hidden columns from the columns array
     *
     * @param columns
     * @returns {*}
     */
    filterColumns: function filterColumns(columns) {
      return columns.filter(function (column) {
        return !column.hidden;
      });
    },

    /**
     * Return rows array with rendered row values
     *
     * @param rows
     * @returns {*}
     */
    renderRows: function renderRows(rows) {
      var _this = this;

      return rows.map(function (row, index) {
        return _this.tableColumns.reduce(function (renderedRow, column) {
          renderedRow[column.path] = column.render ? column.render.call(_this, row, column, index) : Object(helpers["f" /* getValueByPath */])(row, column.path);
          renderedRow.indexRef = index;
          return renderedRow;
        }, {});
      });
    },

    /**
     * Sort rows based on sorting direction and sorting function
     *
     * @param rows
     * @returns {*}
     */
    sortRows: function sortRows(rows) {
      var _this2 = this;

      var sortColumn = this.tableColumns.find(function (column) {
        return column.path === _this2.sortBy;
      });

      if (sortColumn) {
        rows = sortColumn.sortFn ? rows.sort(sortColumn.sortFn) : rows.sort(Object(helpers["p" /* sortByPath */])(sortColumn.path)); // If sort direction is set to descending, reverse the rows array

        if (this.sortDirection === 'desc') {
          rows = rows.reverse();
        }
      }

      return rows;
    },

    /**
     * Find rows that match the given filter string
     *
     * @param rows
     * @returns {*}
     */
    filterRows: function filterRows(rows) {
      if (!this.filtering || this.async || this.filter === '') {
        return rows;
      }

      var keys = this.filterableColumns;
      var fuse = new fuse_esm["a" /* default */](rows, _objectSpread(_objectSpread({}, this.filteringConfig.fuse), {}, {
        keys: keys
      }));
      return fuse.search(this.filter).map(function (result) {
        return result.item;
      });
    },

    /**
     * Slice rows to display current page
     *
     * @param rows
     * @returns {*}
     */
    paginateRows: function paginateRows(rows) {
      if (!this.pagination || this.async) {
        return rows;
      }

      return rows.slice(this.rowsFrom, this.rowsTo);
    },

    /**
     * Extend default configuration object with provided override values
     *
     * @param key
     * @returns {*}
     */
    getConfig: function getConfig(key) {
      return this[key] && this[key] !== true ? _objectSpread(_objectSpread({}, defaults[key]), this[key]) : _objectSpread({}, defaults[key]);
    },

    /**
     * Emit an extended update event
     *
     * @param event
     * @returns {*}
     */
    emitUpdate: function emitUpdate(event) {
      this.$emit('update', _objectSpread({
        page: this.page,
        rowsPerPage: this.rowsPerPage,
        filter: this.filter
      }, event));
    },

    /**
     * Toggle expand for the row with the given id
     *
     * @param rowId
     * @returns {{}}
     */
    onClickExpand: function onClickExpand(rowId) {
      if (this.singleExpand) {
        return this.expanded = this.expanded[rowId] ? {} : Object(defineProperty["a" /* default */])({}, rowId, true);
      }

      this.expanded = _objectSpread(_objectSpread({}, this.expanded), {}, Object(defineProperty["a" /* default */])({}, rowId, !this.expanded[rowId]));
      this.$emit('expand', rowId);
    },

    /**
     * Click handler for header cell that triggers sorting and toggles sort direction
     *
     * @param event
     * @param column
     */
    onTableHeadingClick: function onTableHeadingClick(event, column) {
      if (column.sortable) {
        if (this.sortBy !== column.path) {
          this.sortBy = column.path;
          this.sortDirection = 'asc';
        } else {
          this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
        }
      }

      this.$emit('th-click', event, this.columns[column.indexRef] || column, column.indexRef);
    },

    /**
     * Toggle row click event
     *
     * @param event
     * @param row
     */
    onTableRowClick: function onTableRowClick(event, row) {
      this.$emit('tr-click', event, this.tableRows[row.indexRef], row.indexRef);
    },

    /**
     * Toggle cell click event
     *
     * @param event
     * @param column
     * @param row
     */
    onTableDataClick: function onTableDataClick(event, column, row) {
      this.$emit('td-click', event, this.columns[column.indexRef] || column, column.indexRef, this.tableRows[row.indexRef], row.indexRef);
    },

    /**
     * Return a callback for setting a specific datatable field
     *
     * @param field
     * @returns {function(*): *}
     */
    setValueCallback: function setValueCallback(field) {
      var _this3 = this;

      return function (value) {
        return _this3[field] = value;
      };
    }
  },
  watch: {
    rowsPerPage: function rowsPerPage(value) {
      value = parseInt(value, 10);
      this.rowsPerPage = value;
      var maxPage = Math.ceil(this.rowsLength / value);
      maxPage = maxPage === 0 ? 1 : maxPage;

      if (this.page > maxPage) {
        this.page = maxPage;
      } else {
        this.emitUpdate({
          rowsPerPage: value
        });
      }
    },
    page: function page(value) {
      this.emitUpdate({
        page: value
      });
    },
    filter: function filter(value) {
      this.page = 1;
      this.emitUpdate({
        page: 1,
        filter: value
      });
    }
  },
  created: function created() {
    this.rowsPerPage = this.paginationConfig.rowsPerPage;
  }
});
// CONCATENATED MODULE: ./node_modules/@inkline/inkline/src/components/IDatatable/script.js?vue&type=script&lang=js&
 /* harmony default export */ var IDatatable_scriptvue_type_script_lang_js_ = (scriptvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@inkline/inkline/src/components/IDatatable/style.scss?vue&type=style&index=0&lang=scss&
var stylevue_type_style_index_0_lang_scss_ = __webpack_require__(407);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@inkline/inkline/src/components/IDatatable/index.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  IDatatable_scriptvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var IDatatable = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@inkline/inkline/src/components/IDropdownDivider/template.html?vue&type=template&id=539f1977&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"divider"})}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@inkline/inkline/src/components/IDropdownDivider/template.html?vue&type=template&id=539f1977&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@inkline/inkline/src/components/IDropdownDivider/script.js?vue&type=script&lang=js&
/* harmony default export */ var scriptvue_type_script_lang_js_ = ({
  name: 'IDropdownDivider'
});
// CONCATENATED MODULE: ./node_modules/@inkline/inkline/src/components/IDropdownDivider/script.js?vue&type=script&lang=js&
 /* harmony default export */ var IDropdownDivider_scriptvue_type_script_lang_js_ = (scriptvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@inkline/inkline/src/components/IDropdownDivider/style.scss?vue&type=style&index=0&id=539f1977&lang=scss&scoped=true&
var stylevue_type_style_index_0_id_539f1977_lang_scss_scoped_true_ = __webpack_require__(408);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@inkline/inkline/src/components/IDropdownDivider/index.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  IDropdownDivider_scriptvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "539f1977",
  null
  
)

/* harmony default export */ var IDropdownDivider = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@inkline/inkline/src/components/IHeader/template.html?vue&type=template&id=bd6d85b4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"header",class:_vm.classes},[_c('i-container',{attrs:{"fluid":_vm.fluid}},[_c('i-row',[_c('i-column',[_vm._t("default")],2)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@inkline/inkline/src/components/IHeader/template.html?vue&type=template&id=bd6d85b4&scoped=true&

// EXTERNAL MODULE: ./node_modules/@inkline/inkline/src/mixins/index.js + 93 modules
var mixins = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/@inkline/inkline/src/components/IContainer/index.vue + 4 modules
var IContainer = __webpack_require__(59);

// EXTERNAL MODULE: ./node_modules/@inkline/inkline/src/components/IRow/index.vue + 4 modules
var IRow = __webpack_require__(60);

// EXTERNAL MODULE: ./node_modules/@inkline/inkline/src/components/IColumn/index.vue + 4 modules
var IColumn = __webpack_require__(63);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@inkline/inkline/src/components/IHeader/script.js?vue&type=script&lang=js&




/* harmony default export */ var scriptvue_type_script_lang_js_ = ({
  name: 'IHeader',
  mixins: [mixins["C" /* SizePropertyMixin */], mixins["E" /* VariantPropertyMixin */], mixins["d" /* ClassesProviderMixin */]],
  components: {
    IContainer: IContainer["default"],
    IRow: IRow["default"],
    IColumn: IColumn["default"]
  },
  props: {
    cover: {
      type: Boolean,
      default: true
    },
    fluid: {
      type: Boolean,
      default: false
    },
    fullscreen: {
      type: Boolean,
      default: false
    }
  },
  created: function created() {
    var _this = this;

    this.classesProvider.add(function () {
      return {
        '-cover': _this.cover,
        '-fullscreen': _this.fullscreen
      };
    });
  }
});
// CONCATENATED MODULE: ./node_modules/@inkline/inkline/src/components/IHeader/script.js?vue&type=script&lang=js&
 /* harmony default export */ var IHeader_scriptvue_type_script_lang_js_ = (scriptvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@inkline/inkline/src/components/IHeader/style.scss?vue&type=style&index=0&id=bd6d85b4&lang=scss&scoped=true&
var stylevue_type_style_index_0_id_bd6d85b4_lang_scss_scoped_true_ = __webpack_require__(410);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@inkline/inkline/src/components/IHeader/index.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  IHeader_scriptvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "bd6d85b4",
  null
  
)

/* harmony default export */ var IHeader = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@inkline/inkline/src/components/IForm/template.html?vue&type=template&id=1f2563ba&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form',{staticClass:"form",class:_vm.classes,attrs:{"role":"form","name":_vm.name,"disabled":_vm.disabled},on:{"submit":_vm.emitSubmit}},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@inkline/inkline/src/components/IForm/template.html?vue&type=template&id=1f2563ba&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/@inkline/inkline/src/mixins/index.js + 93 modules
var mixins = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/@inkline/inkline/src/constants/index.js + 3 modules
var constants = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/@inkline/inkline/src/factories/FormBuilder.js
var FormBuilder = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@inkline/inkline/src/components/IForm/script.js?vue&type=script&lang=js&






/* harmony default export */ var scriptvue_type_script_lang_js_ = ({
  name: 'IForm',
  mixins: [mixins["c" /* AttributesProviderMixin */], mixins["d" /* ClassesProviderMixin */], mixins["j" /* DisabledPropertyMixin */], mixins["t" /* LoadingPropertyMixin */], mixins["A" /* ReadonlyPropertyMixin */], mixins["C" /* SizePropertyMixin */], mixins["w" /* NamePropertyMixin */]],
  props: {
    inline: {
      type: Boolean,
      default: false
    },
    value: {
      type: Object,
      default: function _default() {
        return null;
      }
    }
  },
  provide: function provide() {
    return {
      parentForm: this
    };
  },
  created: function created() {
    var _this = this;

    this.classesProvider.add(function () {
      return {
        '-inline': _this.inline
      };
    });
  },
  methods: {
    /**
     * Retrieve form schema
     */
    getSchema: function getSchema() {
      return this.value;
    },

    /**
     * Callback on form control input event
     *
     * @param formControl
     */
    onFormControlInput: function onFormControlInput(formControl) {
      var _this2 = this;

      return function (value) {
        formControl.schema[FormBuilder["a" /* FormBuilder */].keys.VALUE] = value;

        _this2.$emit('input', _this2.value);
      };
    },

    /**
     * Callback on form control input event
     *
     * @param formControl
     */
    onFormControlBlur: function onFormControlBlur(formControl) {
      var _this3 = this;

      return function () {
        formControl.schema[FormBuilder["a" /* FormBuilder */].keys.TOUCH]({
          getSchema: _this3.getSchema
        });
      };
    },

    /**
     * Callback on form control input event
     *
     * @param formControl
     */
    onFormControlValidate: function onFormControlValidate(formControl, event) {
      var _this4 = this;

      var eventFn = constants["c" /* eventValueMap */][event] ? constants["c" /* eventValueMap */][event] : constants["c" /* eventValueMap */].input;
      return function (value) {
        formControl.schema[FormBuilder["a" /* FormBuilder */].keys.VALIDATE](eventFn(value), {
          getSchema: _this4.getSchema
        });

        _this4.$emit('validate', _this4.value);
      };
    },

    /**
     * Retrieve validateOn field based as array of events, also taking the validation config into account
     *
     * @param formControl
     */
    getFormControlValidationEvents: function getFormControlValidationEvents(formControl) {
      var validateOn = [];

      if (formControl.schema[FormBuilder["a" /* FormBuilder */].keys.VALIDATE_ON]) {
        validateOn = formControl.schema[FormBuilder["a" /* FormBuilder */].keys.VALIDATE_ON].constructor === Array ? formControl.schema[FormBuilder["a" /* FormBuilder */].keys.VALIDATE_ON] : [formControl.schema[FormBuilder["a" /* FormBuilder */].keys.VALIDATE_ON]];
      } else {
        validateOn = this.$inkline.config.validation.validateOn;
      }

      return validateOn;
    },

    /**
     * Add required schema event listeners for one of the form's child inputs
     *
     * @param formControl
     */
    add: function add(formControl) {
      var _this5 = this;

      formControl.$on('input', this.onFormControlInput(formControl));
      formControl.$on('blur', this.onFormControlBlur(formControl));
      this.getFormControlValidationEvents(formControl).forEach(function (event) {
        formControl.$on(event, _this5.onFormControlValidate(formControl, event));
      });
    },

    /**
     * Remove event listeners for one of the form's child inputs
     *
     * @param formControl
     */
    remove: function remove(formControl) {
      var _this6 = this;

      formControl.$off('input', this.onFormControlInput(formControl));
      formControl.$off('blur', this.onFormControlBlur(formControl));
      this.getFormControlValidationEvents(formControl).forEach(function (event) {
        formControl.$off(event, _this6.onFormControlValidate(formControl, event));
      });
      this.$emit('input', this.value);
    },

    /**
     * Handler for submit event
     */
    emitSubmit: function emitSubmit(event) {
      event.preventDefault();

      if (this.value) {
        this.value[FormBuilder["a" /* FormBuilder */].keys.VALIDATE](this.validationOptions);

        if (this.value[FormBuilder["a" /* FormBuilder */].keys.INVALID]) {
          return;
        }
      }

      return this.$emit('submit', event);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@inkline/inkline/src/components/IForm/script.js?vue&type=script&lang=js&
 /* harmony default export */ var IForm_scriptvue_type_script_lang_js_ = (scriptvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@inkline/inkline/src/components/IInput/style.scss?vue&type=style&index=0&id=1f2563ba&lang=scss&scoped=true&
var stylevue_type_style_index_0_id_1f2563ba_lang_scss_scoped_true_ = __webpack_require__(440);

// EXTERNAL MODULE: ./node_modules/@inkline/inkline/src/components/IForm/style.scss?vue&type=style&index=1&id=1f2563ba&lang=scss&scoped=true&
var stylevue_type_style_index_1_id_1f2563ba_lang_scss_scoped_true_ = __webpack_require__(441);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@inkline/inkline/src/components/IForm/index.vue







/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  IForm_scriptvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "1f2563ba",
  null
  
)

/* harmony default export */ var IForm = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@inkline/inkline/src/components/IFormLabel/template.html?vue&type=template&id=03bf9a2f&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{staticClass:"form-label",class:_vm.classes,on:{"click":_vm.focusInput}},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@inkline/inkline/src/components/IFormLabel/template.html?vue&type=template&id=03bf9a2f&scoped=true&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__(117);

// EXTERNAL MODULE: ./node_modules/@inkline/inkline/src/mixins/index.js + 93 modules
var mixins = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@inkline/inkline/src/components/IFormLabel/script.js?vue&type=script&lang=js&



/* harmony default export */ var scriptvue_type_script_lang_js_ = ({
  name: 'IFormLabel',
  mixins: [mixins["d" /* ClassesProviderMixin */], mixins["s" /* InjectParentFormProviderMixin */], mixins["C" /* SizePropertyMixin */]],
  props: {
    placement: {
      type: String,
      default: 'default'
    }
  },
  methods: {
    focusInput: function focusInput() {
      var siblings = this.$parent.$children;
      var selfIndex = siblings.indexOf(this);
      var input = siblings.find(function (sibling, index) {
        return index > selfIndex && sibling.hasOwnProperty('focusInputRef');
      });

      if (input) {
        input.focusInputRef();
      }
    }
  },
  created: function created() {
    var _this = this;

    this.classesProvider.add(function () {
      return Object(defineProperty["a" /* default */])({}, "-".concat(_this.placement), _this.placement !== 'default');
    });
  }
});
// CONCATENATED MODULE: ./node_modules/@inkline/inkline/src/components/IFormLabel/script.js?vue&type=script&lang=js&
 /* harmony default export */ var IFormLabel_scriptvue_type_script_lang_js_ = (scriptvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@inkline/inkline/src/components/IFormLabel/style.scss?vue&type=style&index=0&id=03bf9a2f&lang=scss&scoped=true&
var stylevue_type_style_index_0_id_03bf9a2f_lang_scss_scoped_true_ = __webpack_require__(442);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@inkline/inkline/src/components/IFormLabel/index.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  IFormLabel_scriptvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "03bf9a2f",
  null
  
)

/* harmony default export */ var IFormLabel = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _extract_css_chunks_webpack_plugin_dist_loader_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_style_scss_vue_type_style_index_0_id_3be692ba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(215);
/* harmony import */ var _extract_css_chunks_webpack_plugin_dist_loader_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_style_scss_vue_type_style_index_0_id_3be692ba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_extract_css_chunks_webpack_plugin_dist_loader_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_style_scss_vue_type_style_index_0_id_3be692ba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _extract_css_chunks_webpack_plugin_dist_loader_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_style_scss_vue_type_style_index_0_id_3b18157a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(216);
/* harmony import */ var _extract_css_chunks_webpack_plugin_dist_loader_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_style_scss_vue_type_style_index_0_id_3b18157a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_extract_css_chunks_webpack_plugin_dist_loader_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_style_scss_vue_type_style_index_0_id_3b18157a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _extract_css_chunks_webpack_plugin_dist_loader_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_style_scss_vue_type_style_index_0_id_104c86a2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(217);
/* harmony import */ var _extract_css_chunks_webpack_plugin_dist_loader_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_style_scss_vue_type_style_index_0_id_104c86a2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_extract_css_chunks_webpack_plugin_dist_loader_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_style_scss_vue_type_style_index_0_id_104c86a2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _extract_css_chunks_webpack_plugin_dist_loader_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_style_scss_vue_type_style_index_0_id_2b7cea9b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(233);
/* harmony import */ var _extract_css_chunks_webpack_plugin_dist_loader_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_style_scss_vue_type_style_index_0_id_2b7cea9b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_extract_css_chunks_webpack_plugin_dist_loader_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_style_scss_vue_type_style_index_0_id_2b7cea9b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _extract_css_chunks_webpack_plugin_dist_loader_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_style_scss_vue_type_style_index_0_id_784007c4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(234);
/* harmony import */ var _extract_css_chunks_webpack_plugin_dist_loader_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_style_scss_vue_type_style_index_0_id_784007c4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_extract_css_chunks_webpack_plugin_dist_loader_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_style_scss_vue_type_style_index_0_id_784007c4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _extract_css_chunks_webpack_plugin_dist_loader_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(240);
/* harmony import */ var _extract_css_chunks_webpack_plugin_dist_loader_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_extract_css_chunks_webpack_plugin_dist_loader_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_style_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _extract_css_chunks_webpack_plugin_dist_loader_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_style_scss_vue_type_style_index_0_id_539f1977_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(241);
/* harmony import */ var _extract_css_chunks_webpack_plugin_dist_loader_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_style_scss_vue_type_style_index_0_id_539f1977_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_extract_css_chunks_webpack_plugin_dist_loader_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_style_scss_vue_type_style_index_0_id_539f1977_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _extract_css_chunks_webpack_plugin_dist_loader_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_style_scss_vue_type_style_index_0_id_e83a9892_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(242);
/* harmony import */ var _extract_css_chunks_webpack_plugin_dist_loader_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_style_scss_vue_type_style_index_0_id_e83a9892_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_extract_css_chunks_webpack_plugin_dist_loader_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_style_scss_vue_type_style_index_0_id_e83a9892_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _extract_css_chunks_webpack_plugin_dist_loader_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_style_scss_vue_type_style_index_0_id_bd6d85b4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(243);
/* harmony import */ var _extract_css_chunks_webpack_plugin_dist_loader_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_style_scss_vue_type_style_index_0_id_bd6d85b4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_extract_css_chunks_webpack_plugin_dist_loader_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_style_scss_vue_type_style_index_0_id_bd6d85b4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _extract_css_chunks_webpack_plugin_dist_loader_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_style_scss_vue_type_style_index_1_id_1f2563ba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(272);
/* harmony import */ var _extract_css_chunks_webpack_plugin_dist_loader_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_style_scss_vue_type_style_index_1_id_1f2563ba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_extract_css_chunks_webpack_plugin_dist_loader_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_style_scss_vue_type_style_index_1_id_1f2563ba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _extract_css_chunks_webpack_plugin_dist_loader_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_style_scss_vue_type_style_index_0_id_03bf9a2f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(273);
/* harmony import */ var _extract_css_chunks_webpack_plugin_dist_loader_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_style_scss_vue_type_style_index_0_id_03bf9a2f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_extract_css_chunks_webpack_plugin_dist_loader_js_ref_7_oneOf_1_0_css_loader_dist_cjs_js_ref_7_oneOf_1_1_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_7_oneOf_1_2_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_style_scss_vue_type_style_index_0_id_03bf9a2f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@inkline/inkline/src/components/IFormGroup/template.html?vue&type=template&id=784007c4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form-group",class:_vm.classes,attrs:{"role":"inputgroup"}},[_vm._t("default"),_vm._v(" "),(_vm.validate)?_c('i-form-error',{attrs:{"schema":_vm.inputSchema}}):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@inkline/inkline/src/components/IFormGroup/template.html?vue&type=template&id=784007c4&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/@inkline/inkline/src/components/IFormError/index.vue + 4 modules
var IFormError = __webpack_require__(79);

// EXTERNAL MODULE: ./node_modules/@inkline/inkline/src/mixins/index.js + 93 modules
var mixins = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/@inkline/inkline/src/factories/FormBuilder.js
var FormBuilder = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@inkline/inkline/src/components/IFormGroup/script.js?vue&type=script&lang=js&





/* harmony default export */ var scriptvue_type_script_lang_js_ = ({
  name: 'IFormGroup',
  mixins: [mixins["c" /* AttributesProviderMixin */], mixins["d" /* ClassesProviderMixin */], mixins["s" /* InjectParentFormProviderMixin */], mixins["o" /* EmitInputMethodMixin */], mixins["i" /* DisabledFormPropertyMixin */], mixins["t" /* LoadingPropertyMixin */], mixins["w" /* NamePropertyMixin */], mixins["x" /* ParentFormGroupPropertyMixin */], mixins["A" /* ReadonlyPropertyMixin */], mixins["C" /* SizePropertyMixin */], mixins["D" /* TabIndexPropertyMixin */]],
  components: {
    IFormError: IFormError["default"]
  },
  props: {
    inline: {
      type: Boolean,
      default: false
    },
    validate: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      inputSchema: null
    };
  },
  created: function created() {
    var _this = this;

    this.classesProvider.add(function () {
      return {
        '-inline': _this.inline,
        '-error': _this.inputSchema && _this.inputSchema[FormBuilder["a" /* FormBuilder */].keys.INVALID],
        '-required': _this.inputSchema && _this.inputSchema[FormBuilder["a" /* FormBuilder */].keys.VALIDATORS] && _this.inputSchema[FormBuilder["a" /* FormBuilder */].keys.VALIDATORS].some(function (v) {
          return v.rule === 'required';
        })
      };
    });
  }
});
// CONCATENATED MODULE: ./node_modules/@inkline/inkline/src/components/IFormGroup/script.js?vue&type=script&lang=js&
 /* harmony default export */ var IFormGroup_scriptvue_type_script_lang_js_ = (scriptvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@inkline/inkline/src/components/IFormGroup/style.scss?vue&type=style&index=0&id=784007c4&lang=scss&scoped=true&
var stylevue_type_style_index_0_id_784007c4_lang_scss_scoped_true_ = __webpack_require__(401);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@inkline/inkline/src/components/IFormGroup/index.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  IFormGroup_scriptvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "784007c4",
  null
  
)

/* harmony default export */ var IFormGroup = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@inkline/inkline/src/components/IFormError/template.html?vue&type=template&id=2b7cea9b&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.schema)?_c('transition',{attrs:{"name":"fade-in-transition"},on:{"after-leave":function($event){return _vm.clearErrors()}}},[(_vm.hasErrors)?_c('ul',{staticClass:"form-group-error"},_vm._l((_vm.errors),function(error){return _c('li',[_vm._v(_vm._s(error))])}),0):_vm._e()]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@inkline/inkline/src/components/IFormError/template.html?vue&type=template&id=2b7cea9b&scoped=true&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/@inkline/inkline/src/factories/FormBuilder.js
var FormBuilder = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@inkline/inkline/src/components/IFormError/script.js?vue&type=script&lang=js&







/* harmony default export */ var scriptvue_type_script_lang_js_ = ({
  name: 'IFormError',
  props: {
    schema: {
      type: Object,
      default: function _default() {
        return null;
      }
    }
  },
  data: function data() {
    return {
      errors: []
    };
  },
  watch: Object(defineProperty["a" /* default */])({}, 'schema.' + FormBuilder["a" /* FormBuilder */].keys.INVALID, function (invalid) {
    var _this = this;

    if (invalid) {
      this.errors = Object.keys(this.schema[FormBuilder["a" /* FormBuilder */].keys.ERRORS]).filter(function (key) {
        return key !== 'length';
      }).map(function (key) {
        return _this.schema[FormBuilder["a" /* FormBuilder */].keys.ERRORS][key];
      });
    } else {
      this.errors = [];
    }
  }),
  computed: {
    hasErrors: function hasErrors() {
      return this.schema[FormBuilder["a" /* FormBuilder */].keys.ERRORS] && this.schema[FormBuilder["a" /* FormBuilder */].keys.ERRORS].length > 0;
    }
  },
  methods: {
    clearErrors: function clearErrors() {
      this.errors = [];
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@inkline/inkline/src/components/IFormError/script.js?vue&type=script&lang=js&
 /* harmony default export */ var IFormError_scriptvue_type_script_lang_js_ = (scriptvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@inkline/inkline/src/components/IFormError/style.scss?vue&type=style&index=0&id=2b7cea9b&lang=scss&scoped=true&
var stylevue_type_style_index_0_id_2b7cea9b_lang_scss_scoped_true_ = __webpack_require__(400);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@inkline/inkline/src/components/IFormError/index.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  IFormError_scriptvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "2b7cea9b",
  null
  
)

/* harmony default export */ var IFormError = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@inkline/inkline/src/components/IDropdownMenu/template.html?vue&type=template&id=3b18157a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"zoom-in-top-transition"},on:{"after-leave":_vm.destroyPopper}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"menu",class:_vm.classes},[(_vm.arrow)?_c('span',{staticClass:"arrow"}):_vm._e(),_vm._v(" "),_vm._t("default")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@inkline/inkline/src/components/IDropdownMenu/template.html?vue&type=template&id=3b18157a&scoped=true&

// EXTERNAL MODULE: ./node_modules/@inkline/inkline/src/mixins/index.js + 93 modules
var mixins = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@inkline/inkline/src/components/IDropdownMenu/script.js?vue&type=script&lang=js&

/* harmony default export */ var scriptvue_type_script_lang_js_ = ({
  name: 'IDropdownMenu',
  inject: ['dropdown'],
  mixins: [mixins["C" /* SizePropertyMixin */], mixins["d" /* ClassesProviderMixin */], mixins["z" /* PopupProviderMixin */]],
  props: {
    arrow: {
      type: Boolean,
      default: true
    }
  },
  created: function created() {
    var _this = this;

    this.$on('updatePopper', function () {
      if (_this.visible) _this.updatePopper();
    });
    this.$on('visibility-change', function (value) {
      _this.visible = value;
    });
  },
  mounted: function mounted() {
    this.popupElement = this.$el;
    this.referenceElement = this.dropdown.$el;
    this.currentPlacement = this.dropdown.placement;
  },
  watch: {
    'dropdown.placement': {
      immediate: true,
      handler: function handler(value) {
        this.currentPlacement = value;
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@inkline/inkline/src/components/IDropdownMenu/script.js?vue&type=script&lang=js&
 /* harmony default export */ var IDropdownMenu_scriptvue_type_script_lang_js_ = (scriptvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@inkline/inkline/src/components/IDropdownMenu/style.scss?vue&type=style&index=0&id=3b18157a&lang=scss&scoped=true&
var stylevue_type_style_index_0_id_3b18157a_lang_scss_scoped_true_ = __webpack_require__(375);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@inkline/inkline/src/components/IDropdownMenu/index.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  IDropdownMenu_scriptvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "3b18157a",
  null
  
)

/* harmony default export */ var IDropdownMenu = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@inkline/inkline/src/components/IDropdown/template.html?vue&type=template&id=104c86a2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._b({directives:[{name:"click-outside",rawName:"v-click-outside",value:(_vm.hide),expression:"hide"}],staticClass:"dropdown",class:_vm.classes},'div',_vm.attributes,false),[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@inkline/inkline/src/components/IDropdown/template.html?vue&type=template&id=104c86a2&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find-index.js
var es_array_find_index = __webpack_require__(209);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.timers.js
var web_timers = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/@inkline/inkline/src/helpers/index.js + 24 modules
var helpers = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/@inkline/inkline/src/directives/click-outside.js
var click_outside = __webpack_require__(51);

// EXTERNAL MODULE: ./node_modules/@inkline/inkline/src/mixins/index.js + 93 modules
var mixins = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@inkline/inkline/src/components/IDropdown/script.js?vue&type=script&lang=js&










function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




/* harmony default export */ var scriptvue_type_script_lang_js_ = ({
  name: 'IDropdown',
  mixins: [mixins["c" /* AttributesProviderMixin */], mixins["d" /* ClassesProviderMixin */], mixins["q" /* EmitProviderMixin */], mixins["y" /* PopupControlsProviderMixin */], mixins["m" /* EmitFocusMethodMixin */], mixins["C" /* SizePropertyMixin */], mixins["E" /* VariantPropertyMixin */], mixins["j" /* DisabledPropertyMixin */]],
  directives: {
    ClickOutside: click_outside["a" /* default */]
  },
  provide: function provide() {
    return {
      dropdown: this
    };
  },
  props: {
    hideOnClick: {
      type: Boolean,
      default: true
    },
    placement: {
      type: String,
      default: 'bottom'
    },
    keymap: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    var basename = 'dropdown';
    return {
      id: this.$attrs.id || Object(helpers["q" /* uid */])(basename + '-menu'),
      items: [],
      menu: null,
      basename: basename
    };
  },
  computed: {
    actionKeymap: function actionKeymap() {
      return _objectSpread({
        navigate: ['up', 'down'],
        select: ['enter', 'space'],
        show: ['enter', 'space'],
        hide: ['esc', 'tab']
      }, this.keymap);
    },
    focusableItems: function focusableItems() {
      return this.items.filter(function (item) {
        return !(item.disabled || (item.componentInstance || {}).disabled) && Object(helpers["j" /* isVisible */])(item.elm || item.$el);
      });
    }
  },
  watch: {
    visible: function visible(value) {
      this.broadcast('IDropdownMenu', 'visibility-change', value);
      this.$emit('change', value);
    }
  },
  methods: {
    onTriggerKeyDown: function onTriggerKeyDown(e) {
      if (!this.focusableItems.length > 0) {
        return;
      }

      var activeIndex = this.focusableItems.findIndex(function (e) {
        return e.active;
      });
      var initialIndex = activeIndex > -1 ? activeIndex : 0;
      var focusTarget = this.focusableItems[initialIndex].elm || this.focusableItems[initialIndex].$el; // Default key: up or down

      if (this.actionKeymap.navigate.some(function (key) {
        return Object(helpers["h" /* isKey */])(key, e);
      })) {
        this.show();
        setTimeout(function () {
          focusTarget.focus();
        }, this.visible ? 0 : this.showTimeout);
        e.preventDefault();
        e.stopPropagation(); // Default key: enter or space
      } else if (this.actionKeymap.show.some(function (key) {
        return Object(helpers["h" /* isKey */])(key, e);
      })) {
        this.onClick();

        if (!this.visible) {
          setTimeout(function () {
            focusTarget.focus();
          }, this.showTimeout);
        }

        e.preventDefault(); // Default key: tab or esc
      } else if (this.actionKeymap.hide.some(function (key) {
        return Object(helpers["h" /* isKey */])(key, e);
      })) {
        this.hide();
      }
    },
    onItemKeyDown: function onItemKeyDown(e) {
      if (!this.focusableItems.length > 0) {
        return;
      } // Default key: up or down


      if (this.actionKeymap.navigate.some(function (key) {
        return Object(helpers["h" /* isKey */])(key, e);
      })) {
        var currentIndex = this.focusableItems.findIndex(function (i) {
          return (i.elm || i.$el) === e.target;
        });
        var maxIndex = this.focusableItems.length - 1;
        var nextIndex;

        if (Object(helpers["h" /* isKey */])('up', e)) {
          nextIndex = currentIndex > 0 ? currentIndex - 1 : 0;
        } else {
          nextIndex = currentIndex < maxIndex ? currentIndex + 1 : maxIndex;
        }

        var focusTarget = this.focusableItems[nextIndex].elm || this.focusableItems[nextIndex].$el;
        focusTarget.focus();
        e.preventDefault();
        e.stopPropagation(); // Default key: enter or space
      } else if (this.actionKeymap.select.some(function (key) {
        return Object(helpers["h" /* isKey */])(key, e);
      })) {
        e.target.click();

        if (e.target.hasAttribute('aria-haspopup')) {
          this.initItems();
        } else {
          this.triggerElement.focus();
        }

        if (this.hideOnClick) {
          this.visible = false;
        }

        e.preventDefault(); // Default key: tab or esc
      } else if (this.actionKeymap.hide.some(function (key) {
        return Object(helpers["h" /* isKey */])(key, e);
      })) {
        this.hide();
        this.triggerElement.focus();
      }
    },
    onItemClick: function onItemClick(action, instance) {
      if (this.hideOnClick) {
        this.visible = false;
      }

      this.$emit('action', action, instance);
    },
    initElements: function initElements() {
      if ((this.$slots.default || []).length < 2) {
        throw new Error("IDropdown component requires two child elements.\n                The first one will be used as a trigger. The second one should be a IDropdownMenu component.");
      }

      this.menu = Object(helpers["m" /* querySelector */])(this.$slots.default, 'IDropdownMenu');

      if (!this.menu) {
        throw new Error('Could not find child IDropdownMenu in IDropdown.');
      }

      this.triggerElement = this.$slots.default[0].elm;
      this.popupElement = this.menu.elm;
      this.initItems();
    },
    initItems: function initItems() {
      this.items = Object(helpers["n" /* querySelectorAll */])(this.menu.componentInstance.$slots.default, 'IDropdownItem');
    }
  },
  mounted: function mounted() {
    this.$on('init', this.initElements);
    this.$on('item-click', this.onItemClick);
    this.triggerElement.addEventListener('keydown', this.onTriggerKeyDown);
    this.popupElement.addEventListener('keydown', this.onItemKeyDown, true);

    if (this.trigger === 'hover') {
      this.popupElement.addEventListener('mouseenter', this.show);
      this.popupElement.addEventListener('mouseleave', this.hide);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@inkline/inkline/src/components/IDropdown/script.js?vue&type=script&lang=js&
 /* harmony default export */ var IDropdown_scriptvue_type_script_lang_js_ = (scriptvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@inkline/inkline/src/components/IDropdown/style.scss?vue&type=style&index=0&id=104c86a2&lang=scss&scoped=true&
var stylevue_type_style_index_0_id_104c86a2_lang_scss_scoped_true_ = __webpack_require__(376);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@inkline/inkline/src/components/IDropdown/index.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  IDropdown_scriptvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "104c86a2",
  null
  
)

/* harmony default export */ var IDropdown = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);