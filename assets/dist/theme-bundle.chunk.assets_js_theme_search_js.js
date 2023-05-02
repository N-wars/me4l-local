"use strict";
(self["webpackChunkbigcommerce_cornerstone"] = self["webpackChunkbigcommerce_cornerstone"] || []).push([["assets_js_theme_search_js"],{

/***/ "./assets/js/theme/search.js":
/*!***********************************!*\
  !*** ./assets/js/theme/search.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Search)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/utils/url-utils */ "./assets/js/theme/common/utils/url-utils.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var jstree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jstree */ "./node_modules/jstree/dist/jstree.min.js");
/* harmony import */ var jstree__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jstree__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var leftArrowKey = 37;
var rightArrowKey = 39;
var Search = /*#__PURE__*/function (_CatalogPage) {
  _inheritsLoose(Search, _CatalogPage);
  function Search() {
    return _CatalogPage.apply(this, arguments) || this;
  }
  var _proto = Search.prototype;
  _proto.formatCategoryTreeForJSTree = function formatCategoryTreeForJSTree(node) {
    var _this = this;
    var nodeData = {
      text: node.data,
      id: node.metadata.id,
      state: {
        selected: node.selected
      }
    };
    if (node.state) {
      nodeData.state.opened = node.state === 'open';
      nodeData.children = true;
    }
    if (node.children) {
      nodeData.children = [];
      node.children.forEach(function (childNode) {
        nodeData.children.push(_this.formatCategoryTreeForJSTree(childNode));
      });
    }
    return nodeData;
  };
  _proto.showProducts = function showProducts(navigate) {
    if (navigate === void 0) {
      navigate = true;
    }
    this.$productListingContainer.removeClass('u-hidden');
    this.$facetedSearchContainer.removeClass('u-hidden');
    this.$contentResultsContainer.addClass('u-hidden');
    $('[data-content-results-toggle]').removeClass('navBar-action-color--active');
    $('[data-content-results-toggle]').addClass('navBar-action');
    $('[data-product-results-toggle]').removeClass('navBar-action');
    $('[data-product-results-toggle]').addClass('navBar-action-color--active');
    this.activateTab($('[data-product-results-toggle]'));
    if (!navigate) {
      return;
    }
    var searchData = $('#search-results-product-count span').data();
    var url = searchData.count > 0 ? searchData.url : _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].replaceParams(searchData.url, {
      page: 1
    });
    _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].goToUrl(url);
  };
  _proto.showContent = function showContent(navigate) {
    if (navigate === void 0) {
      navigate = true;
    }
    this.$contentResultsContainer.removeClass('u-hidden');
    this.$productListingContainer.addClass('u-hidden');
    this.$facetedSearchContainer.addClass('u-hidden');
    $('[data-product-results-toggle]').removeClass('navBar-action-color--active');
    $('[data-product-results-toggle]').addClass('navBar-action');
    $('[data-content-results-toggle]').removeClass('navBar-action');
    $('[data-content-results-toggle]').addClass('navBar-action-color--active');
    this.activateTab($('[data-content-results-toggle]'));
    if (!navigate) {
      return;
    }
    var searchData = $('#search-results-content-count span').data();
    var url = searchData.count > 0 ? searchData.url : _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].replaceParams(searchData.url, {
      page: 1
    });
    _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].goToUrl(url);
  };
  _proto.activateTab = function activateTab($tabToActivate) {
    var $tabsCollection = $('[data-search-page-tabs]').find('[role="tab"]');
    $tabsCollection.each(function (idx, tab) {
      var $tab = $(tab);
      if ($tab.is($tabToActivate)) {
        $tab.removeAttr('tabindex');
        $tab.attr('aria-selected', true);
        return;
      }
      $tab.attr('tabindex', '-1');
      $tab.attr('aria-selected', false);
    });
  };
  _proto.onTabChangeWithArrows = function onTabChangeWithArrows(event) {
    var eventKey = event.which;
    var isLeftOrRightArrowKeydown = eventKey === leftArrowKey || eventKey === rightArrowKey;
    if (!isLeftOrRightArrowKeydown) return;
    var $tabsCollection = $('[data-search-page-tabs]').find('[role="tab"]');
    var isActiveElementNotTab = $tabsCollection.index($(document.activeElement)) === -1;
    if (isActiveElementNotTab) return;
    var $activeTab = $("#" + document.activeElement.id);
    var activeTabIdx = $tabsCollection.index($activeTab);
    var lastTabIdx = $tabsCollection.length - 1;
    var nextTabIdx;
    switch (eventKey) {
      case leftArrowKey:
        nextTabIdx = activeTabIdx === 0 ? lastTabIdx : activeTabIdx - 1;
        break;
      case rightArrowKey:
        nextTabIdx = activeTabIdx === lastTabIdx ? 0 : activeTabIdx + 1;
        break;
      default:
        break;
    }
    $($tabsCollection.get(nextTabIdx)).focus().trigger('click');
  };
  _proto.onReady = function onReady() {
    var _this2 = this;
    (0,_global_compare_products__WEBPACK_IMPORTED_MODULE_4__["default"])(this.context);
    this.arrangeFocusOnSortBy();
    var $searchForm = $('[data-advanced-search-form]');
    var $categoryTreeContainer = $searchForm.find('[data-search-category-tree]');
    var url = url__WEBPACK_IMPORTED_MODULE_6__.parse(window.location.href, true);
    var treeData = [];
    this.$productListingContainer = $('#product-listing-container');
    this.$facetedSearchContainer = $('#faceted-search-container');
    this.$contentResultsContainer = $('#search-results-content');

    // Init faceted search
    if ($('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__.hooks.on('sortBy-submitted', this.onSortBySubmit);
    }

    // Init collapsibles
    (0,_common_collapsible__WEBPACK_IMPORTED_MODULE_7__["default"])();
    $('[data-product-results-toggle]').on('click', function (event) {
      event.preventDefault();
      _this2.showProducts();
    });
    $('[data-content-results-toggle]').on('click', function (event) {
      event.preventDefault();
      _this2.showContent();
    });
    $('[data-search-page-tabs]').on('keyup', this.onTabChangeWithArrows);
    if (this.$productListingContainer.find('li.product').length === 0 || url.query.section === 'content') {
      this.showContent(false);
    } else {
      this.showProducts(false);
    }
    var validator = this.initValidation($searchForm).bindValidation($searchForm.find('#search_query_adv'));
    this.context.categoryTree.forEach(function (node) {
      treeData.push(_this2.formatCategoryTreeForJSTree(node));
    });
    this.categoryTreeData = treeData;
    this.createCategoryTree($categoryTreeContainer);
    $searchForm.on('submit', function (event) {
      var selectedCategoryIds = $categoryTreeContainer.jstree().get_selected();
      if (!validator.check()) {
        return event.preventDefault();
      }
      $searchForm.find('input[name="category\[\]"]').remove();
      for (var _iterator = _createForOfIteratorHelperLoose(selectedCategoryIds), _step; !(_step = _iterator()).done;) {
        var categoryId = _step.value;
        var input = $('<input>', {
          type: 'hidden',
          name: 'category[]',
          value: categoryId
        });
        $searchForm.append(input);
      }
    });
    var $searchResultsMessage = $("<p\n            class=\"aria-description--hidden\"\n            tabindex=\"-1\"\n            role=\"status\"\n            aria-live=\"polite\"\n            >" + this.context.searchResultsCount + "</p>").prependTo('body');
    setTimeout(function () {
      return $searchResultsMessage.focus();
    }, 100);
  };
  _proto.loadTreeNodes = function loadTreeNodes(node, cb) {
    var _this3 = this;
    $.ajax({
      url: '/remote/v1/category-tree',
      data: {
        selectedCategoryId: node.id,
        prefix: 'category'
      },
      headers: {
        'x-xsrf-token': window.BCData && window.BCData.csrf_token ? window.BCData.csrf_token : ''
      }
    }).done(function (data) {
      var formattedResults = [];
      data.forEach(function (dataNode) {
        formattedResults.push(_this3.formatCategoryTreeForJSTree(dataNode));
      });
      cb(formattedResults);
    });
  };
  _proto.createCategoryTree = function createCategoryTree($container) {
    var _this4 = this;
    var treeOptions = {
      core: {
        data: function data(node, cb) {
          // Root node
          if (node.id === '#') {
            cb(_this4.categoryTreeData);
          } else {
            // Lazy loaded children
            _this4.loadTreeNodes(node, cb);
          }
        },
        themes: {
          icons: true
        }
      },
      checkbox: {
        three_state: false
      },
      plugins: ['checkbox']
    };
    $container.jstree(treeOptions);
  };
  _proto.initFacetedSearch = function initFacetedSearch() {
    var _this5 = this;
    // eslint-disable-next-line object-curly-newline
    var _this$context = this.context,
      onMinPriceError = _this$context.onMinPriceError,
      onMaxPriceError = _this$context.onMaxPriceError,
      minPriceNotEntered = _this$context.minPriceNotEntered,
      maxPriceNotEntered = _this$context.maxPriceNotEntered,
      onInvalidPrice = _this$context.onInvalidPrice;
    var $productListingContainer = $('#product-listing-container');
    var $contentListingContainer = $('#search-results-content');
    var $facetedSearchContainer = $('#faceted-search-container');
    var $searchHeading = $('#search-results-heading');
    var $searchCount = $('#search-results-product-count');
    var $contentCount = $('#search-results-content-count');
    var productsPerPage = this.context.searchProductsPerPage;
    var requestOptions = {
      template: {
        productListing: 'search/product-listing',
        contentListing: 'search/content-listing',
        sidebar: 'search/sidebar',
        heading: 'search/heading',
        productCount: 'search/product-count',
        contentCount: 'search/content-count'
      },
      config: {
        product_results: {
          limit: productsPerPage
        }
      },
      showMore: 'search/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_2__["default"](requestOptions, function (content) {
      $searchHeading.html(content.heading);
      var url = url__WEBPACK_IMPORTED_MODULE_6__.parse(window.location.href, true);
      if (url.query.section === 'content') {
        $contentListingContainer.html(content.contentListing);
        $contentCount.html(content.contentCount);
        _this5.showContent(false);
      } else {
        $productListingContainer.html(content.productListing);
        $facetedSearchContainer.html(content.sidebar);
        $searchCount.html(content.productCount);
        _this5.showProducts(false);
      }
      $('body').triggerHandler('compareReset');
      $('html, body').animate({
        scrollTop: 0
      }, 100);
    }, {
      validationErrorMessages: {
        onMinPriceError: onMinPriceError,
        onMaxPriceError: onMaxPriceError,
        minPriceNotEntered: minPriceNotEntered,
        maxPriceNotEntered: maxPriceNotEntered,
        onInvalidPrice: onInvalidPrice
      }
    });
  };
  _proto.initValidation = function initValidation($form) {
    this.$form = $form;
    this.validator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_9__["default"])({
      submit: $form,
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__.announceInputErrorMessage
    });
    return this;
  };
  _proto.bindValidation = function bindValidation($element) {
    if (this.validator) {
      this.validator.add({
        selector: $element,
        validate: 'presence',
        errorMessage: $element.data('errorMessage')
      });
    }
    return this;
  };
  _proto.check = function check() {
    if (this.validator) {
      this.validator.performCheck();
      return this.validator.areAll('valid');
    }
    return false;
  };
  return Search;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9zZWFyY2hfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ2Y7QUFDZ0I7QUFDa0I7QUFDZDtBQUNSO0FBQzFCO0FBQ2dDO0FBQ3RDO0FBQ2U7QUFFL0IsSUFBTVMsWUFBWSxHQUFHLEVBQUU7QUFDdkIsSUFBTUMsYUFBYSxHQUFHLEVBQUU7QUFBQyxJQUVKQyxNQUFNLDBCQUFBQyxZQUFBO0VBQUFDLGNBQUEsQ0FBQUYsTUFBQSxFQUFBQyxZQUFBO0VBQUEsU0FBQUQsT0FBQTtJQUFBLE9BQUFDLFlBQUEsQ0FBQUUsS0FBQSxPQUFBQyxTQUFBO0VBQUE7RUFBQSxJQUFBQyxNQUFBLEdBQUFMLE1BQUEsQ0FBQU0sU0FBQTtFQUFBRCxNQUFBLENBQ3ZCRSwyQkFBMkIsR0FBM0IsU0FBQUEsNEJBQTRCQyxJQUFJLEVBQUU7SUFBQSxJQUFBQyxLQUFBO0lBQzlCLElBQU1DLFFBQVEsR0FBRztNQUNiQyxJQUFJLEVBQUVILElBQUksQ0FBQ0ksSUFBSTtNQUNmQyxFQUFFLEVBQUVMLElBQUksQ0FBQ00sUUFBUSxDQUFDRCxFQUFFO01BQ3BCRSxLQUFLLEVBQUU7UUFDSEMsUUFBUSxFQUFFUixJQUFJLENBQUNRO01BQ25CO0lBQ0osQ0FBQztJQUVELElBQUlSLElBQUksQ0FBQ08sS0FBSyxFQUFFO01BQ1pMLFFBQVEsQ0FBQ0ssS0FBSyxDQUFDRSxNQUFNLEdBQUdULElBQUksQ0FBQ08sS0FBSyxLQUFLLE1BQU07TUFDN0NMLFFBQVEsQ0FBQ1EsUUFBUSxHQUFHLElBQUk7SUFDNUI7SUFFQSxJQUFJVixJQUFJLENBQUNVLFFBQVEsRUFBRTtNQUNmUixRQUFRLENBQUNRLFFBQVEsR0FBRyxFQUFFO01BQ3RCVixJQUFJLENBQUNVLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDLFVBQUNDLFNBQVMsRUFBSztRQUNqQ1YsUUFBUSxDQUFDUSxRQUFRLENBQUNHLElBQUks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O1FBQ2xCRyxRQUFRLEVBQUUsVUFBVTtRQUNwQkMsWUFBWSxFQUFFSixRQUFRLENBQUN2SixJQUFJLENBQUMsY0FBYztNQUM5QyxDQUFDLENBQUM7SUFDTjtJQUVBLE9BQU8sSUFBSTtFQUNmLENBQUM7RUFBQVAsTUFBQSxDQUVEdUYsS0FBSyxHQUFMLFNBQUFBLE1BQUEsRUFBUTtJQUNKLElBQUksSUFBSSxDQUFDVCxTQUFTLEVBQUU7TUFDaEIsSUFBSSxDQUFDQSxTQUFTLENBQUNxRixZQUFZLENBQUMsQ0FBQztNQUM3QixPQUFPLElBQUksQ0FBQ3JGLFNBQVMsQ0FBQ3NGLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDekM7SUFFQSxPQUFPLEtBQUs7RUFDaEIsQ0FBQztFQUFBLE9BQUF6SyxNQUFBO0FBQUEsRUFsVitCVixnREFBVyIsInNvdXJjZXMiOlsid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL3NlYXJjaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBob29rcyB9IGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcclxuaW1wb3J0IENhdGFsb2dQYWdlIGZyb20gJy4vY2F0YWxvZyc7XHJcbmltcG9ydCBGYWNldGVkU2VhcmNoIGZyb20gJy4vY29tbW9uL2ZhY2V0ZWQtc2VhcmNoJztcclxuaW1wb3J0IHsgYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSB9IGZyb20gJy4vY29tbW9uL3V0aWxzL2Zvcm0tdXRpbHMnO1xyXG5pbXBvcnQgY29tcGFyZVByb2R1Y3RzIGZyb20gJy4vZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMnO1xyXG5pbXBvcnQgdXJsVXRpbHMgZnJvbSAnLi9jb21tb24vdXRpbHMvdXJsLXV0aWxzJztcclxuaW1wb3J0IFVybCBmcm9tICd1cmwnO1xyXG5pbXBvcnQgY29sbGFwc2libGVGYWN0b3J5IGZyb20gJy4vY29tbW9uL2NvbGxhcHNpYmxlJztcclxuaW1wb3J0ICdqc3RyZWUnO1xyXG5pbXBvcnQgbm9kIGZyb20gJy4vY29tbW9uL25vZCc7XHJcblxyXG5jb25zdCBsZWZ0QXJyb3dLZXkgPSAzNztcclxuY29uc3QgcmlnaHRBcnJvd0tleSA9IDM5O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoIGV4dGVuZHMgQ2F0YWxvZ1BhZ2Uge1xyXG4gICAgZm9ybWF0Q2F0ZWdvcnlUcmVlRm9ySlNUcmVlKG5vZGUpIHtcclxuICAgICAgICBjb25zdCBub2RlRGF0YSA9IHtcclxuICAgICAgICAgICAgdGV4dDogbm9kZS5kYXRhLFxyXG4gICAgICAgICAgICBpZDogbm9kZS5tZXRhZGF0YS5pZCxcclxuICAgICAgICAgICAgc3RhdGU6IHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBub2RlLnNlbGVjdGVkLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmIChub2RlLnN0YXRlKSB7XHJcbiAgICAgICAgICAgIG5vZGVEYXRhLnN0YXRlLm9wZW5lZCA9IG5vZGUuc3RhdGUgPT09ICdvcGVuJztcclxuICAgICAgICAgICAgbm9kZURhdGEuY2hpbGRyZW4gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG5vZGUuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgbm9kZURhdGEuY2hpbGRyZW4gPSBbXTtcclxuICAgICAgICAgICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgIG5vZGVEYXRhLmNoaWxkcmVuLnB1c2godGhpcy5mb3JtYXRDYXRlZ29yeVRyZWVGb3JKU1RyZWUoY2hpbGROb2RlKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5vZGVEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dQcm9kdWN0cyhuYXZpZ2F0ZSA9IHRydWUpIHtcclxuICAgICAgICB0aGlzLiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5yZW1vdmVDbGFzcygndS1oaWRkZW4nKTtcclxuICAgICAgICB0aGlzLiRmYWNldGVkU2VhcmNoQ29udGFpbmVyLnJlbW92ZUNsYXNzKCd1LWhpZGRlbicpO1xyXG4gICAgICAgIHRoaXMuJGNvbnRlbnRSZXN1bHRzQ29udGFpbmVyLmFkZENsYXNzKCd1LWhpZGRlbicpO1xyXG5cclxuICAgICAgICAkKCdbZGF0YS1jb250ZW50LXJlc3VsdHMtdG9nZ2xlXScpLnJlbW92ZUNsYXNzKCduYXZCYXItYWN0aW9uLWNvbG9yLS1hY3RpdmUnKTtcclxuICAgICAgICAkKCdbZGF0YS1jb250ZW50LXJlc3VsdHMtdG9nZ2xlXScpLmFkZENsYXNzKCduYXZCYXItYWN0aW9uJyk7XHJcblxyXG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtcmVzdWx0cy10b2dnbGVdJykucmVtb3ZlQ2xhc3MoJ25hdkJhci1hY3Rpb24nKTtcclxuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LXJlc3VsdHMtdG9nZ2xlXScpLmFkZENsYXNzKCduYXZCYXItYWN0aW9uLWNvbG9yLS1hY3RpdmUnKTtcclxuXHJcbiAgICAgICAgdGhpcy5hY3RpdmF0ZVRhYigkKCdbZGF0YS1wcm9kdWN0LXJlc3VsdHMtdG9nZ2xlXScpKTtcclxuXHJcbiAgICAgICAgaWYgKCFuYXZpZ2F0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzZWFyY2hEYXRhID0gJCgnI3NlYXJjaC1yZXN1bHRzLXByb2R1Y3QtY291bnQgc3BhbicpLmRhdGEoKTtcclxuICAgICAgICBjb25zdCB1cmwgPSAoc2VhcmNoRGF0YS5jb3VudCA+IDApID8gc2VhcmNoRGF0YS51cmwgOiB1cmxVdGlscy5yZXBsYWNlUGFyYW1zKHNlYXJjaERhdGEudXJsLCB7XHJcbiAgICAgICAgICAgIHBhZ2U6IDEsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwodXJsKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93Q29udGVudChuYXZpZ2F0ZSA9IHRydWUpIHtcclxuICAgICAgICB0aGlzLiRjb250ZW50UmVzdWx0c0NvbnRhaW5lci5yZW1vdmVDbGFzcygndS1oaWRkZW4nKTtcclxuICAgICAgICB0aGlzLiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5hZGRDbGFzcygndS1oaWRkZW4nKTtcclxuICAgICAgICB0aGlzLiRmYWNldGVkU2VhcmNoQ29udGFpbmVyLmFkZENsYXNzKCd1LWhpZGRlbicpO1xyXG5cclxuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LXJlc3VsdHMtdG9nZ2xlXScpLnJlbW92ZUNsYXNzKCduYXZCYXItYWN0aW9uLWNvbG9yLS1hY3RpdmUnKTtcclxuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LXJlc3VsdHMtdG9nZ2xlXScpLmFkZENsYXNzKCduYXZCYXItYWN0aW9uJyk7XHJcblxyXG4gICAgICAgICQoJ1tkYXRhLWNvbnRlbnQtcmVzdWx0cy10b2dnbGVdJykucmVtb3ZlQ2xhc3MoJ25hdkJhci1hY3Rpb24nKTtcclxuICAgICAgICAkKCdbZGF0YS1jb250ZW50LXJlc3VsdHMtdG9nZ2xlXScpLmFkZENsYXNzKCduYXZCYXItYWN0aW9uLWNvbG9yLS1hY3RpdmUnKTtcclxuXHJcbiAgICAgICAgdGhpcy5hY3RpdmF0ZVRhYigkKCdbZGF0YS1jb250ZW50LXJlc3VsdHMtdG9nZ2xlXScpKTtcclxuXHJcbiAgICAgICAgaWYgKCFuYXZpZ2F0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzZWFyY2hEYXRhID0gJCgnI3NlYXJjaC1yZXN1bHRzLWNvbnRlbnQtY291bnQgc3BhbicpLmRhdGEoKTtcclxuICAgICAgICBjb25zdCB1cmwgPSAoc2VhcmNoRGF0YS5jb3VudCA+IDApID8gc2VhcmNoRGF0YS51cmwgOiB1cmxVdGlscy5yZXBsYWNlUGFyYW1zKHNlYXJjaERhdGEudXJsLCB7XHJcbiAgICAgICAgICAgIHBhZ2U6IDEsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwodXJsKTtcclxuICAgIH1cclxuXHJcbiAgICBhY3RpdmF0ZVRhYigkdGFiVG9BY3RpdmF0ZSkge1xyXG4gICAgICAgIGNvbnN0ICR0YWJzQ29sbGVjdGlvbiA9ICQoJ1tkYXRhLXNlYXJjaC1wYWdlLXRhYnNdJykuZmluZCgnW3JvbGU9XCJ0YWJcIl0nKTtcclxuXHJcbiAgICAgICAgJHRhYnNDb2xsZWN0aW9uLmVhY2goKGlkeCwgdGFiKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICR0YWIgPSAkKHRhYik7XHJcblxyXG4gICAgICAgICAgICBpZiAoJHRhYi5pcygkdGFiVG9BY3RpdmF0ZSkpIHtcclxuICAgICAgICAgICAgICAgICR0YWIucmVtb3ZlQXR0cigndGFiaW5kZXgnKTtcclxuICAgICAgICAgICAgICAgICR0YWIuYXR0cignYXJpYS1zZWxlY3RlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkdGFiLmF0dHIoJ3RhYmluZGV4JywgJy0xJyk7XHJcbiAgICAgICAgICAgICR0YWIuYXR0cignYXJpYS1zZWxlY3RlZCcsIGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvblRhYkNoYW5nZVdpdGhBcnJvd3MoZXZlbnQpIHtcclxuICAgICAgICBjb25zdCBldmVudEtleSA9IGV2ZW50LndoaWNoO1xyXG4gICAgICAgIGNvbnN0IGlzTGVmdE9yUmlnaHRBcnJvd0tleWRvd24gPSBldmVudEtleSA9PT0gbGVmdEFycm93S2V5XHJcbiAgICAgICAgICAgIHx8IGV2ZW50S2V5ID09PSByaWdodEFycm93S2V5O1xyXG4gICAgICAgIGlmICghaXNMZWZ0T3JSaWdodEFycm93S2V5ZG93bikgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCAkdGFic0NvbGxlY3Rpb24gPSAkKCdbZGF0YS1zZWFyY2gtcGFnZS10YWJzXScpLmZpbmQoJ1tyb2xlPVwidGFiXCJdJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGlzQWN0aXZlRWxlbWVudE5vdFRhYiA9ICR0YWJzQ29sbGVjdGlvbi5pbmRleCgkKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKSA9PT0gLTE7XHJcbiAgICAgICAgaWYgKGlzQWN0aXZlRWxlbWVudE5vdFRhYikgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCAkYWN0aXZlVGFiID0gJChgIyR7ZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5pZH1gKTtcclxuICAgICAgICBjb25zdCBhY3RpdmVUYWJJZHggPSAkdGFic0NvbGxlY3Rpb24uaW5kZXgoJGFjdGl2ZVRhYik7XHJcbiAgICAgICAgY29uc3QgbGFzdFRhYklkeCA9ICR0YWJzQ29sbGVjdGlvbi5sZW5ndGggLSAxO1xyXG5cclxuICAgICAgICBsZXQgbmV4dFRhYklkeDtcclxuICAgICAgICBzd2l0Y2ggKGV2ZW50S2V5KSB7XHJcbiAgICAgICAgY2FzZSBsZWZ0QXJyb3dLZXk6XHJcbiAgICAgICAgICAgIG5leHRUYWJJZHggPSBhY3RpdmVUYWJJZHggPT09IDAgPyBsYXN0VGFiSWR4IDogYWN0aXZlVGFiSWR4IC0gMTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSByaWdodEFycm93S2V5OlxyXG4gICAgICAgICAgICBuZXh0VGFiSWR4ID0gYWN0aXZlVGFiSWR4ID09PSBsYXN0VGFiSWR4ID8gMCA6IGFjdGl2ZVRhYklkeCArIDE7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6IGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCgkdGFic0NvbGxlY3Rpb24uZ2V0KG5leHRUYWJJZHgpKS5mb2N1cygpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25SZWFkeSgpIHtcclxuICAgICAgICBjb21wYXJlUHJvZHVjdHModGhpcy5jb250ZXh0KTtcclxuICAgICAgICB0aGlzLmFycmFuZ2VGb2N1c09uU29ydEJ5KCk7XHJcblxyXG4gICAgICAgIGNvbnN0ICRzZWFyY2hGb3JtID0gJCgnW2RhdGEtYWR2YW5jZWQtc2VhcmNoLWZvcm1dJyk7XHJcbiAgICAgICAgY29uc3QgJGNhdGVnb3J5VHJlZUNvbnRhaW5lciA9ICRzZWFyY2hGb3JtLmZpbmQoJ1tkYXRhLXNlYXJjaC1jYXRlZ29yeS10cmVlXScpO1xyXG4gICAgICAgIGNvbnN0IHVybCA9IFVybC5wYXJzZSh3aW5kb3cubG9jYXRpb24uaHJlZiwgdHJ1ZSk7XHJcbiAgICAgICAgY29uc3QgdHJlZURhdGEgPSBbXTtcclxuICAgICAgICB0aGlzLiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciA9ICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJyk7XHJcbiAgICAgICAgdGhpcy4kZmFjZXRlZFNlYXJjaENvbnRhaW5lciA9ICQoJyNmYWNldGVkLXNlYXJjaC1jb250YWluZXInKTtcclxuICAgICAgICB0aGlzLiRjb250ZW50UmVzdWx0c0NvbnRhaW5lciA9ICQoJyNzZWFyY2gtcmVzdWx0cy1jb250ZW50Jyk7XHJcblxyXG4gICAgICAgIC8vIEluaXQgZmFjZXRlZCBzZWFyY2hcclxuICAgICAgICBpZiAoJCgnI2ZhY2V0ZWRTZWFyY2gnKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdEZhY2V0ZWRTZWFyY2goKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm9uU29ydEJ5U3VibWl0ID0gdGhpcy5vblNvcnRCeVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICBob29rcy5vbignc29ydEJ5LXN1Ym1pdHRlZCcsIHRoaXMub25Tb3J0QnlTdWJtaXQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSW5pdCBjb2xsYXBzaWJsZXNcclxuICAgICAgICBjb2xsYXBzaWJsZUZhY3RvcnkoKTtcclxuXHJcbiAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1yZXN1bHRzLXRvZ2dsZV0nKS5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1Byb2R1Y3RzKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJ1tkYXRhLWNvbnRlbnQtcmVzdWx0cy10b2dnbGVdJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dDb250ZW50KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJ1tkYXRhLXNlYXJjaC1wYWdlLXRhYnNdJykub24oJ2tleXVwJywgdGhpcy5vblRhYkNoYW5nZVdpdGhBcnJvd3MpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy4kcHJvZHVjdExpc3RpbmdDb250YWluZXIuZmluZCgnbGkucHJvZHVjdCcpLmxlbmd0aCA9PT0gMCB8fCB1cmwucXVlcnkuc2VjdGlvbiA9PT0gJ2NvbnRlbnQnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0NvbnRlbnQoZmFsc2UpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1Byb2R1Y3RzKGZhbHNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHZhbGlkYXRvciA9IHRoaXMuaW5pdFZhbGlkYXRpb24oJHNlYXJjaEZvcm0pXHJcbiAgICAgICAgICAgIC5iaW5kVmFsaWRhdGlvbigkc2VhcmNoRm9ybS5maW5kKCcjc2VhcmNoX3F1ZXJ5X2FkdicpKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmNhdGVnb3J5VHJlZS5mb3JFYWNoKChub2RlKSA9PiB7XHJcbiAgICAgICAgICAgIHRyZWVEYXRhLnB1c2godGhpcy5mb3JtYXRDYXRlZ29yeVRyZWVGb3JKU1RyZWUobm9kZSkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNhdGVnb3J5VHJlZURhdGEgPSB0cmVlRGF0YTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUNhdGVnb3J5VHJlZSgkY2F0ZWdvcnlUcmVlQ29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgJHNlYXJjaEZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRDYXRlZ29yeUlkcyA9ICRjYXRlZ29yeVRyZWVDb250YWluZXIuanN0cmVlKCkuZ2V0X3NlbGVjdGVkKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXZhbGlkYXRvci5jaGVjaygpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJHNlYXJjaEZvcm0uZmluZCgnaW5wdXRbbmFtZT1cImNhdGVnb3J5XFxbXFxdXCJdJykucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNhdGVnb3J5SWQgb2Ygc2VsZWN0ZWRDYXRlZ29yeUlkcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXQgPSAkKCc8aW5wdXQ+Jywge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdoaWRkZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjYXRlZ29yeVtdJyxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY2F0ZWdvcnlJZCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICRzZWFyY2hGb3JtLmFwcGVuZChpbnB1dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgJHNlYXJjaFJlc3VsdHNNZXNzYWdlID0gJChgPHBcclxuICAgICAgICAgICAgY2xhc3M9XCJhcmlhLWRlc2NyaXB0aW9uLS1oaWRkZW5cIlxyXG4gICAgICAgICAgICB0YWJpbmRleD1cIi0xXCJcclxuICAgICAgICAgICAgcm9sZT1cInN0YXR1c1wiXHJcbiAgICAgICAgICAgIGFyaWEtbGl2ZT1cInBvbGl0ZVwiXHJcbiAgICAgICAgICAgID4ke3RoaXMuY29udGV4dC5zZWFyY2hSZXN1bHRzQ291bnR9PC9wPmApXHJcbiAgICAgICAgICAgIC5wcmVwZW5kVG8oJ2JvZHknKTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiAkc2VhcmNoUmVzdWx0c01lc3NhZ2UuZm9jdXMoKSwgMTAwKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkVHJlZU5vZGVzKG5vZGUsIGNiKSB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiAnL3JlbW90ZS92MS9jYXRlZ29yeS10cmVlJyxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDYXRlZ29yeUlkOiBub2RlLmlkLFxyXG4gICAgICAgICAgICAgICAgcHJlZml4OiAnY2F0ZWdvcnknLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAneC14c3JmLXRva2VuJzogd2luZG93LkJDRGF0YSAmJiB3aW5kb3cuQkNEYXRhLmNzcmZfdG9rZW4gPyB3aW5kb3cuQkNEYXRhLmNzcmZfdG9rZW4gOiAnJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KS5kb25lKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWRSZXN1bHRzID0gW107XHJcblxyXG4gICAgICAgICAgICBkYXRhLmZvckVhY2goKGRhdGFOb2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWRSZXN1bHRzLnB1c2godGhpcy5mb3JtYXRDYXRlZ29yeVRyZWVGb3JKU1RyZWUoZGF0YU5vZGUpKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjYihmb3JtYXR0ZWRSZXN1bHRzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVDYXRlZ29yeVRyZWUoJGNvbnRhaW5lcikge1xyXG4gICAgICAgIGNvbnN0IHRyZWVPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBjb3JlOiB7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiAobm9kZSwgY2IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBSb290IG5vZGVcclxuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5pZCA9PT0gJyMnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNiKHRoaXMuY2F0ZWdvcnlUcmVlRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTGF6eSBsb2FkZWQgY2hpbGRyZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkVHJlZU5vZGVzKG5vZGUsIGNiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdGhlbWVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbnM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjaGVja2JveDoge1xyXG4gICAgICAgICAgICAgICAgdGhyZWVfc3RhdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwbHVnaW5zOiBbXHJcbiAgICAgICAgICAgICAgICAnY2hlY2tib3gnLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgICRjb250YWluZXIuanN0cmVlKHRyZWVPcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0RmFjZXRlZFNlYXJjaCgpIHtcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgb2JqZWN0LWN1cmx5LW5ld2xpbmVcclxuICAgICAgICBjb25zdCB7IG9uTWluUHJpY2VFcnJvciwgb25NYXhQcmljZUVycm9yLCBtaW5QcmljZU5vdEVudGVyZWQsIG1heFByaWNlTm90RW50ZXJlZCwgb25JbnZhbGlkUHJpY2UgfSA9IHRoaXMuY29udGV4dDtcclxuICAgICAgICBjb25zdCAkcHJvZHVjdExpc3RpbmdDb250YWluZXIgPSAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIGNvbnN0ICRjb250ZW50TGlzdGluZ0NvbnRhaW5lciA9ICQoJyNzZWFyY2gtcmVzdWx0cy1jb250ZW50Jyk7XHJcbiAgICAgICAgY29uc3QgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIgPSAkKCcjZmFjZXRlZC1zZWFyY2gtY29udGFpbmVyJyk7XHJcbiAgICAgICAgY29uc3QgJHNlYXJjaEhlYWRpbmcgPSAkKCcjc2VhcmNoLXJlc3VsdHMtaGVhZGluZycpO1xyXG4gICAgICAgIGNvbnN0ICRzZWFyY2hDb3VudCA9ICQoJyNzZWFyY2gtcmVzdWx0cy1wcm9kdWN0LWNvdW50Jyk7XHJcbiAgICAgICAgY29uc3QgJGNvbnRlbnRDb3VudCA9ICQoJyNzZWFyY2gtcmVzdWx0cy1jb250ZW50LWNvdW50Jyk7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdHNQZXJQYWdlID0gdGhpcy5jb250ZXh0LnNlYXJjaFByb2R1Y3RzUGVyUGFnZTtcclxuICAgICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgdGVtcGxhdGU6IHtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RMaXN0aW5nOiAnc2VhcmNoL3Byb2R1Y3QtbGlzdGluZycsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50TGlzdGluZzogJ3NlYXJjaC9jb250ZW50LWxpc3RpbmcnLFxyXG4gICAgICAgICAgICAgICAgc2lkZWJhcjogJ3NlYXJjaC9zaWRlYmFyJyxcclxuICAgICAgICAgICAgICAgIGhlYWRpbmc6ICdzZWFyY2gvaGVhZGluZycsXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0Q291bnQ6ICdzZWFyY2gvcHJvZHVjdC1jb3VudCcsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50Q291bnQ6ICdzZWFyY2gvY29udGVudC1jb3VudCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbmZpZzoge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdF9yZXN1bHRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGltaXQ6IHByb2R1Y3RzUGVyUGFnZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNob3dNb3JlOiAnc2VhcmNoL3Nob3ctbW9yZScsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5mYWNldGVkU2VhcmNoID0gbmV3IEZhY2V0ZWRTZWFyY2gocmVxdWVzdE9wdGlvbnMsIChjb250ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICRzZWFyY2hIZWFkaW5nLmh0bWwoY29udGVudC5oZWFkaW5nKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IFVybC5wYXJzZSh3aW5kb3cubG9jYXRpb24uaHJlZiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGlmICh1cmwucXVlcnkuc2VjdGlvbiA9PT0gJ2NvbnRlbnQnKSB7XHJcbiAgICAgICAgICAgICAgICAkY29udGVudExpc3RpbmdDb250YWluZXIuaHRtbChjb250ZW50LmNvbnRlbnRMaXN0aW5nKTtcclxuICAgICAgICAgICAgICAgICRjb250ZW50Q291bnQuaHRtbChjb250ZW50LmNvbnRlbnRDb3VudCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dDb250ZW50KGZhbHNlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5odG1sKGNvbnRlbnQucHJvZHVjdExpc3RpbmcpO1xyXG4gICAgICAgICAgICAgICAgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuaHRtbChjb250ZW50LnNpZGViYXIpO1xyXG4gICAgICAgICAgICAgICAgJHNlYXJjaENvdW50Lmh0bWwoY29udGVudC5wcm9kdWN0Q291bnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93UHJvZHVjdHMoZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkKCdib2R5JykudHJpZ2dlckhhbmRsZXIoJ2NvbXBhcmVSZXNldCcpO1xyXG5cclxuICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiAwLFxyXG4gICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yTWVzc2FnZXM6IHtcclxuICAgICAgICAgICAgICAgIG9uTWluUHJpY2VFcnJvcixcclxuICAgICAgICAgICAgICAgIG9uTWF4UHJpY2VFcnJvcixcclxuICAgICAgICAgICAgICAgIG1pblByaWNlTm90RW50ZXJlZCxcclxuICAgICAgICAgICAgICAgIG1heFByaWNlTm90RW50ZXJlZCxcclxuICAgICAgICAgICAgICAgIG9uSW52YWxpZFByaWNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRWYWxpZGF0aW9uKCRmb3JtKSB7XHJcbiAgICAgICAgdGhpcy4kZm9ybSA9ICRmb3JtO1xyXG4gICAgICAgIHRoaXMudmFsaWRhdG9yID0gbm9kKHtcclxuICAgICAgICAgICAgc3VibWl0OiAkZm9ybSxcclxuICAgICAgICAgICAgdGFwOiBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBiaW5kVmFsaWRhdGlvbigkZWxlbWVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLnZhbGlkYXRvcikge1xyXG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRvci5hZGQoe1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICRlbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICRlbGVtZW50LmRhdGEoJ2Vycm9yTWVzc2FnZScpLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnZhbGlkYXRvcikge1xyXG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOlsiaG9va3MiLCJDYXRhbG9nUGFnZSIsIkZhY2V0ZWRTZWFyY2giLCJhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlIiwiY29tcGFyZVByb2R1Y3RzIiwidXJsVXRpbHMiLCJVcmwiLCJjb2xsYXBzaWJsZUZhY3RvcnkiLCJub2QiLCJsZWZ0QXJyb3dLZXkiLCJyaWdodEFycm93S2V5IiwiU2VhcmNoIiwiX0NhdGFsb2dQYWdlIiwiX2luaGVyaXRzTG9vc2UiLCJhcHBseSIsImFyZ3VtZW50cyIsIl9wcm90byIsInByb3RvdHlwZSIsImZvcm1hdENhdGVnb3J5VHJlZUZvckpTVHJlZSIsIm5vZGUiLCJfdGhpcyIsIm5vZGVEYXRhIiwidGV4dCIsImRhdGEiLCJpZCIsIm1ldGFkYXRhIiwic3RhdGUiLCJzZWxlY3RlZCIsIm9wZW5lZCIsImNoaWxkcmVuIiwiZm9yRWFjaCIsImNoaWxkTm9kZSIsInB1c2giLCJzaG93UHJvZHVjdHMiLCJuYXZpZ2F0ZSIsIiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciIsInJlbW92ZUNsYXNzIiwiJGZhY2V0ZWRTZWFyY2hDb250YWluZXIiLCIkY29udGVudFJlc3VsdHNDb250YWluZXIiLCJhZGRDbGFzcyIsIiQiLCJhY3RpdmF0ZVRhYiIsInNlYXJjaERhdGEiLCJ1cmwiLCJjb3VudCIsInJlcGxhY2VQYXJhbXMiLCJwYWdlIiwiZ29Ub1VybCIsInNob3dDb250ZW50IiwiJHRhYlRvQWN0aXZhdGUiLCIkdGFic0NvbGxlY3Rpb24iLCJmaW5kIiwiZWFjaCIsImlkeCIsInRhYiIsIiR0YWIiLCJpcyIsInJlbW92ZUF0dHIiLCJhdHRyIiwib25UYWJDaGFuZ2VXaXRoQXJyb3dzIiwiZXZlbnQiLCJldmVudEtleSIsIndoaWNoIiwiaXNMZWZ0T3JSaWdodEFycm93S2V5ZG93biIsImlzQWN0aXZlRWxlbWVudE5vdFRhYiIsImluZGV4IiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50IiwiJGFjdGl2ZVRhYiIsImFjdGl2ZVRhYklkeCIsImxhc3RUYWJJZHgiLCJsZW5ndGgiLCJuZXh0VGFiSWR4IiwiZ2V0IiwiZm9jdXMiLCJ0cmlnZ2VyIiwib25SZWFkeSIsIl90aGlzMiIsImNvbnRleHQiLCJhcnJhbmdlRm9jdXNPblNvcnRCeSIsIiRzZWFyY2hGb3JtIiwiJGNhdGVnb3J5VHJlZUNvbnRhaW5lciIsInBhcnNlIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwidHJlZURhdGEiLCJpbml0RmFjZXRlZFNlYXJjaCIsIm9uU29ydEJ5U3VibWl0IiwiYmluZCIsIm9uIiwicHJldmVudERlZmF1bHQiLCJxdWVyeSIsInNlY3Rpb24iLCJ2YWxpZGF0b3IiLCJpbml0VmFsaWRhdGlvbiIsImJpbmRWYWxpZGF0aW9uIiwiY2F0ZWdvcnlUcmVlIiwiY2F0ZWdvcnlUcmVlRGF0YSIsImNyZWF0ZUNhdGVnb3J5VHJlZSIsInNlbGVjdGVkQ2F0ZWdvcnlJZHMiLCJqc3RyZWUiLCJnZXRfc2VsZWN0ZWQiLCJjaGVjayIsInJlbW92ZSIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UiLCJfc3RlcCIsImRvbmUiLCJjYXRlZ29yeUlkIiwidmFsdWUiLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwiYXBwZW5kIiwiJHNlYXJjaFJlc3VsdHNNZXNzYWdlIiwic2VhcmNoUmVzdWx0c0NvdW50IiwicHJlcGVuZFRvIiwic2V0VGltZW91dCIsImxvYWRUcmVlTm9kZXMiLCJjYiIsIl90aGlzMyIsImFqYXgiLCJzZWxlY3RlZENhdGVnb3J5SWQiLCJwcmVmaXgiLCJoZWFkZXJzIiwiQkNEYXRhIiwiY3NyZl90b2tlbiIsImZvcm1hdHRlZFJlc3VsdHMiLCJkYXRhTm9kZSIsIiRjb250YWluZXIiLCJfdGhpczQiLCJ0cmVlT3B0aW9ucyIsImNvcmUiLCJ0aGVtZXMiLCJpY29ucyIsImNoZWNrYm94IiwidGhyZWVfc3RhdGUiLCJwbHVnaW5zIiwiX3RoaXM1IiwiX3RoaXMkY29udGV4dCIsIm9uTWluUHJpY2VFcnJvciIsIm9uTWF4UHJpY2VFcnJvciIsIm1pblByaWNlTm90RW50ZXJlZCIsIm1heFByaWNlTm90RW50ZXJlZCIsIm9uSW52YWxpZFByaWNlIiwiJGNvbnRlbnRMaXN0aW5nQ29udGFpbmVyIiwiJHNlYXJjaEhlYWRpbmciLCIkc2VhcmNoQ291bnQiLCIkY29udGVudENvdW50IiwicHJvZHVjdHNQZXJQYWdlIiwic2VhcmNoUHJvZHVjdHNQZXJQYWdlIiwicmVxdWVzdE9wdGlvbnMiLCJ0ZW1wbGF0ZSIsInByb2R1Y3RMaXN0aW5nIiwiY29udGVudExpc3RpbmciLCJzaWRlYmFyIiwiaGVhZGluZyIsInByb2R1Y3RDb3VudCIsImNvbnRlbnRDb3VudCIsImNvbmZpZyIsInByb2R1Y3RfcmVzdWx0cyIsImxpbWl0Iiwic2hvd01vcmUiLCJmYWNldGVkU2VhcmNoIiwiY29udGVudCIsImh0bWwiLCJ0cmlnZ2VySGFuZGxlciIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJ2YWxpZGF0aW9uRXJyb3JNZXNzYWdlcyIsIiRmb3JtIiwic3VibWl0IiwidGFwIiwiJGVsZW1lbnQiLCJhZGQiLCJzZWxlY3RvciIsInZhbGlkYXRlIiwiZXJyb3JNZXNzYWdlIiwicGVyZm9ybUNoZWNrIiwiYXJlQWxsIiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=