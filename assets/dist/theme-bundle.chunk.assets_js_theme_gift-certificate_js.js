"use strict";
(self["webpackChunkbigcommerce_cornerstone"] = self["webpackChunkbigcommerce_cornerstone"] || []).push([["assets_js_theme_gift-certificate_js"],{

/***/ "./assets/js/theme/common/gift-certificate-validator.js":
/*!**************************************************************!*\
  !*** ./assets/js/theme/common/gift-certificate-validator.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(cert) {
  if (typeof cert !== 'string' || cert.length === 0) {
    return false;
  }

  // Add any custom gift certificate validation logic here
  return true;
}

/***/ }),

/***/ "./assets/js/theme/common/utils/translations-utils.js":
/*!************************************************************!*\
  !*** ./assets/js/theme/common/utils/translations-utils.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslationDictionary": () => (/* binding */ createTranslationDictionary)
/* harmony export */ });
var TRANSLATIONS = 'translations';
var isTranslationDictionaryNotEmpty = function isTranslationDictionaryNotEmpty(dictionary) {
  return !!Object.keys(dictionary[TRANSLATIONS]).length;
};
var chooseActiveDictionary = function chooseActiveDictionary() {
  for (var i = 0; i < arguments.length; i++) {
    var dictionary = JSON.parse(i < 0 || arguments.length <= i ? undefined : arguments[i]);
    if (isTranslationDictionaryNotEmpty(dictionary)) {
      return dictionary;
    }
  }
};

/**
 * defines Translation Dictionary to use
 * @param context provides access to 3 validation JSONs from en.json:
 * validation_messages, validation_fallback_messages and default_messages
 * @returns {Object}
 */
var createTranslationDictionary = function createTranslationDictionary(context) {
  var validationDictionaryJSON = context.validationDictionaryJSON,
    validationFallbackDictionaryJSON = context.validationFallbackDictionaryJSON,
    validationDefaultDictionaryJSON = context.validationDefaultDictionaryJSON;
  var activeDictionary = chooseActiveDictionary(validationDictionaryJSON, validationFallbackDictionaryJSON, validationDefaultDictionaryJSON);
  var localizations = Object.values(activeDictionary[TRANSLATIONS]);
  var translationKeys = Object.keys(activeDictionary[TRANSLATIONS]).map(function (key) {
    return key.split('.').pop();
  });
  return translationKeys.reduce(function (acc, key, i) {
    acc[key] = localizations[i];
    return acc;
  }, {});
};

/***/ }),

/***/ "./assets/js/theme/gift-certificate.js":
/*!*********************************************!*\
  !*** ./assets/js/theme/gift-certificate.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GiftCertificate)
/* harmony export */ });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/gift-certificate-validator */ "./assets/js/theme/common/gift-certificate-validator.js");
/* harmony import */ var _common_models_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/models/forms */ "./assets/js/theme/common/models/forms.js");
/* harmony import */ var _common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var GiftCertificate = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(GiftCertificate, _PageManager);
  function GiftCertificate(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    _this.validationDictionary = (0,_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__.createTranslationDictionary)(context);
    var $certBalanceForm = $('#gift-certificate-balance');
    var purchaseModel = {
      recipientName: function recipientName(val) {
        return val.length;
      },
      recipientEmail: function recipientEmail() {
        return _common_models_forms__WEBPACK_IMPORTED_MODULE_3__["default"].email.apply(_common_models_forms__WEBPACK_IMPORTED_MODULE_3__["default"], arguments);
      },
      senderName: function senderName(val) {
        return val.length;
      },
      senderEmail: function senderEmail() {
        return _common_models_forms__WEBPACK_IMPORTED_MODULE_3__["default"].email.apply(_common_models_forms__WEBPACK_IMPORTED_MODULE_3__["default"], arguments);
      },
      customAmount: function customAmount(value, min, max) {
        return value && value >= min && value <= max;
      },
      setAmount: function setAmount(value, options) {
        var found = false;
        options.forEach(function (option) {
          if (option === value) {
            found = true;
            return false;
          }
        });
        return found;
      }
    };
    var $purchaseForm = $('#gift-certificate-form');
    var $customAmounts = $purchaseForm.find('input[name="certificate_amount"]');
    var purchaseValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_1__["default"])({
      submit: '#gift-certificate-form input[type="submit"]',
      delay: 300,
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.announceInputErrorMessage
    });
    if ($customAmounts.length) {
      var $element = $purchaseForm.find('input[name="certificate_amount"]');
      var min = $element.data('min');
      var minFormatted = $element.data('minFormatted');
      var max = $element.data('max');
      var maxFormatted = $element.data('maxFormatted');
      var insertFormattedAmountsIntoErrorMessage = function insertFormattedAmountsIntoErrorMessage(message) {
        for (var _len = arguments.length, amountRange = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          amountRange[_key - 1] = arguments[_key];
        }
        var amountPlaceholders = ['[MIN]', '[MAX]'];
        var updatedErrorText = message;
        amountPlaceholders.forEach(function (placeholder, i) {
          updatedErrorText = updatedErrorText.includes(placeholder) ? updatedErrorText.replace(placeholder, amountRange[i]) : updatedErrorText;
        });
        return updatedErrorText;
      };
      purchaseValidator.add({
        selector: '#gift-certificate-form input[name="certificate_amount"]',
        validate: function validate(cb, val) {
          var numberVal = Number(val);
          if (!numberVal) {
            cb(false);
          }
          cb(numberVal >= min && numberVal <= max);
        },
        errorMessage: insertFormattedAmountsIntoErrorMessage(_this.validationDictionary.certificate_amount_range, minFormatted, maxFormatted)
      });
    }
    purchaseValidator.add([{
      selector: '#gift-certificate-form input[name="to_name"]',
      validate: function validate(cb, val) {
        var result = purchaseModel.recipientName(val);
        cb(result);
      },
      errorMessage: _this.context.toName
    }, {
      selector: '#gift-certificate-form input[name="to_email"]',
      validate: function validate(cb, val) {
        var result = purchaseModel.recipientEmail(val);
        cb(result);
      },
      errorMessage: _this.context.toEmail
    }, {
      selector: '#gift-certificate-form input[name="from_name"]',
      validate: function validate(cb, val) {
        var result = purchaseModel.senderName(val);
        cb(result);
      },
      errorMessage: _this.context.fromName
    }, {
      selector: '#gift-certificate-form input[name="from_email"]',
      validate: function validate(cb, val) {
        var result = purchaseModel.senderEmail(val);
        cb(result);
      },
      errorMessage: _this.context.fromEmail
    }, {
      selector: '#gift-certificate-form input[name="certificate_theme"]:first-of-type',
      triggeredBy: '#gift-certificate-form input[name="certificate_theme"]',
      validate: function validate(cb) {
        var val = $purchaseForm.find('input[name="certificate_theme"]:checked').val();
        cb(typeof val === 'string');
      },
      errorMessage: _this.context.certTheme
    }, {
      selector: '#gift-certificate-form input[name="agree"]',
      validate: function validate(cb) {
        var val = $purchaseForm.find('input[name="agree"]').get(0).checked;
        cb(val);
      },
      errorMessage: _this.context.agreeToTerms
    }, {
      selector: '#gift-certificate-form input[name="agree2"]',
      validate: function validate(cb) {
        var val = $purchaseForm.find('input[name="agree2"]').get(0).checked;
        cb(val);
      },
      errorMessage: _this.context.agreeToTerms
    }]);
    if ($certBalanceForm.length) {
      var balanceVal = _this.checkCertBalanceValidator($certBalanceForm);
      $certBalanceForm.on('submit', function () {
        balanceVal.performCheck();
        if (!balanceVal.areAll('valid')) {
          return false;
        }
      });
    }
    $purchaseForm.on('submit', function (event) {
      purchaseValidator.performCheck();
      if (!purchaseValidator.areAll('valid')) {
        return event.preventDefault();
      }
    });
    $('#gift-certificate-preview').click(function (event) {
      event.preventDefault();
      purchaseValidator.performCheck();
      if (!purchaseValidator.areAll('valid')) {
        return;
      }
      var modal = (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__.defaultModal)();
      var previewUrl = $(event.currentTarget).data('previewUrl') + "&" + $purchaseForm.serialize();
      modal.open();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__.api.getPage(previewUrl, {}, function (err, content) {
        if (err) {
          return modal.updateContent(_this.context.previewError);
        }
        modal.updateContent(content, {
          wrap: true
        });
      });
    });
    return _this;
  }
  var _proto = GiftCertificate.prototype;
  _proto.checkCertBalanceValidator = function checkCertBalanceValidator($balanceForm) {
    var balanceValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_1__["default"])({
      submit: $balanceForm.find('input[type="submit"]'),
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.announceInputErrorMessage
    });
    balanceValidator.add({
      selector: $balanceForm.find('input[name="giftcertificatecode"]'),
      validate: function validate(cb, val) {
        cb((0,_common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_2__["default"])(val));
      },
      errorMessage: this.validationDictionary.invalid_gift_certificate
    });
    return balanceValidator;
  };
  return GiftCertificate;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9naWZ0LWNlcnRpZmljYXRlX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSw2QkFBZSxvQ0FBVUEsSUFBSSxFQUFFO0VBQzNCLElBQUksT0FBT0EsSUFBSSxLQUFLLFFBQVEsSUFBSUEsSUFBSSxDQUFDQyxNQUFNLEtBQUssQ0FBQyxFQUFFO0lBQy9DLE9BQU8sS0FBSztFQUNoQjs7RUFFQTtFQUNBLE9BQU8sSUFBSTtBQUNmOzs7Ozs7Ozs7Ozs7OztBQ1BBLElBQU1DLFlBQVksR0FBRyxjQUFjO0FBQ25DLElBQU1DLCtCQUErQixHQUFHLFNBQWxDQSwrQkFBK0JBLENBQUlDLFVBQVU7RUFBQSxPQUFLLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUNGLFVBQVUsQ0FBQ0YsWUFBWSxDQUFDLENBQUMsQ0FBQ0QsTUFBTTtBQUFBO0FBQ3RHLElBQU1NLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBc0JBLENBQUEsRUFBOEI7RUFDdEQsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdDLFNBQUEsQ0FBbUJSLE1BQU0sRUFBRU8sQ0FBQyxFQUFFLEVBQUU7SUFDaEQsSUFBTUosVUFBVSxHQUFHTSxJQUFJLENBQUNDLEtBQUssQ0FBb0JILENBQUMsUUFBQUMsU0FBQSxDQUFBUixNQUFBLElBQURPLENBQUMsR0FBQUksU0FBQSxHQUFBSCxTQUFBLENBQURELENBQUMsQ0FBQyxDQUFDO0lBQ3BELElBQUlMLCtCQUErQixDQUFDQyxVQUFVLENBQUMsRUFBRTtNQUM3QyxPQUFPQSxVQUFVO0lBQ3JCO0VBQ0o7QUFDSixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLElBQU1TLDJCQUEyQixHQUFHLFNBQTlCQSwyQkFBMkJBLENBQUlDLE9BQU8sRUFBSztFQUNwRCxJQUFRQyx3QkFBd0IsR0FBd0VELE9BQU8sQ0FBdkdDLHdCQUF3QjtJQUFF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Q0FBQzNELElBQUksQ0FBQyxtQ0FBbUMsQ0FBQztNQUNoRXNCLFFBQVEsV0FBQUEsU0FBQ0MsRUFBRSxFQUFFeEMsR0FBRyxFQUFFO1FBQ2R3QyxFQUFFLENBQUN2RCw4RUFBb0IsQ0FBQ2UsR0FBRyxDQUFDLENBQUM7TUFDakMsQ0FBQztNQUNEMkMsWUFBWSxFQUFFLElBQUksQ0FBQ2hELG9CQUFvQixDQUFDbUY7SUFDNUMsQ0FBQyxDQUFDO0lBRUYsT0FBT0QsZ0JBQWdCO0VBQzNCLENBQUM7RUFBQSxPQUFBdkYsZUFBQTtBQUFBLEVBM013Q1AscURBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vZ2lmdC1jZXJ0aWZpY2F0ZS12YWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3V0aWxzL3RyYW5zbGF0aW9ucy11dGlscy5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS9naWZ0LWNlcnRpZmljYXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjZXJ0KSB7XHJcbiAgICBpZiAodHlwZW9mIGNlcnQgIT09ICdzdHJpbmcnIHx8IGNlcnQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCBhbnkgY3VzdG9tIGdpZnQgY2VydGlmaWNhdGUgdmFsaWRhdGlvbiBsb2dpYyBoZXJlXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG4iLCJjb25zdCBUUkFOU0xBVElPTlMgPSAndHJhbnNsYXRpb25zJztcclxuY29uc3QgaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eSA9IChkaWN0aW9uYXJ5KSA9PiAhIU9iamVjdC5rZXlzKGRpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSkubGVuZ3RoO1xyXG5jb25zdCBjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5ID0gKC4uLmRpY3Rpb25hcnlKc29uTGlzdCkgPT4ge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaWN0aW9uYXJ5SnNvbkxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBkaWN0aW9uYXJ5ID0gSlNPTi5wYXJzZShkaWN0aW9uYXJ5SnNvbkxpc3RbaV0pO1xyXG4gICAgICAgIGlmIChpc1RyYW5zbGF0aW9uRGljdGlvbmFyeU5vdEVtcHR5KGRpY3Rpb25hcnkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkaWN0aW9uYXJ5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBkZWZpbmVzIFRyYW5zbGF0aW9uIERpY3Rpb25hcnkgdG8gdXNlXHJcbiAqIEBwYXJhbSBjb250ZXh0IHByb3ZpZGVzIGFjY2VzcyB0byAzIHZhbGlkYXRpb24gSlNPTnMgZnJvbSBlbi5qc29uOlxyXG4gKiB2YWxpZGF0aW9uX21lc3NhZ2VzLCB2YWxpZGF0aW9uX2ZhbGxiYWNrX21lc3NhZ2VzIGFuZCBkZWZhdWx0X21lc3NhZ2VzXHJcbiAqIEByZXR1cm5zIHtPYmplY3R9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5ID0gKGNvbnRleHQpID0+IHtcclxuICAgIGNvbnN0IHsgdmFsaWRhdGlvbkRpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRmFsbGJhY2tEaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkRlZmF1bHREaWN0aW9uYXJ5SlNPTiB9ID0gY29udGV4dDtcclxuICAgIGNvbnN0IGFjdGl2ZURpY3Rpb25hcnkgPSBjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5KHZhbGlkYXRpb25EaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkZhbGxiYWNrRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25EZWZhdWx0RGljdGlvbmFyeUpTT04pO1xyXG4gICAgY29uc3QgbG9jYWxpemF0aW9ucyA9IE9iamVjdC52YWx1ZXMoYWN0aXZlRGljdGlvbmFyeVtUUkFOU0xBVElPTlNdKTtcclxuICAgIGNvbnN0IHRyYW5zbGF0aW9uS2V5cyA9IE9iamVjdC5rZXlzKGFjdGl2ZURpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSkubWFwKGtleSA9PiBrZXkuc3BsaXQoJy4nKS5wb3AoKSk7XHJcblxyXG4gICAgcmV0dXJuIHRyYW5zbGF0aW9uS2V5cy5yZWR1Y2UoKGFjYywga2V5LCBpKSA9PiB7XHJcbiAgICAgICAgYWNjW2tleV0gPSBsb2NhbGl6YXRpb25zW2ldO1xyXG4gICAgICAgIHJldHVybiBhY2M7XHJcbiAgICB9LCB7fSk7XHJcbn07XHJcbiIsImltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XHJcbmltcG9ydCBub2QgZnJvbSAnLi9jb21tb24vbm9kJztcclxuaW1wb3J0IGNoZWNrSXNHaWZ0Q2VydFZhbGlkIGZyb20gJy4vY29tbW9uL2dpZnQtY2VydGlmaWNhdGUtdmFsaWRhdG9yJztcclxuaW1wb3J0IGZvcm1Nb2RlbCBmcm9tICcuL2NvbW1vbi9tb2RlbHMvZm9ybXMnO1xyXG5pbXBvcnQgeyBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkgfSBmcm9tICcuL2NvbW1vbi91dGlscy90cmFuc2xhdGlvbnMtdXRpbHMnO1xyXG5pbXBvcnQgeyBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlIH0gZnJvbSAnLi9jb21tb24vdXRpbHMvZm9ybS11dGlscyc7XHJcbmltcG9ydCB7IGFwaSB9IGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcclxuaW1wb3J0IHsgZGVmYXVsdE1vZGFsIH0gZnJvbSAnLi9nbG9iYWwvbW9kYWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2lmdENlcnRpZmljYXRlIGV4dGVuZHMgUGFnZU1hbmFnZXIge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xyXG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xyXG4gICAgICAgIHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnkgPSBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkoY29udGV4dCk7XHJcblxyXG4gICAgICAgIGNvbnN0ICRjZXJ0QmFsYW5jZUZvcm0gPSAkKCcjZ2lmdC1jZXJ0aWZpY2F0ZS1iYWxhbmNlJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHB1cmNoYXNlTW9kZWwgPSB7XHJcbiAgICAgICAgICAgIHJlY2lwaWVudE5hbWUodmFsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsLmxlbmd0aDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmVjaXBpZW50RW1haWwoLi4uYXJncykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvcm1Nb2RlbC5lbWFpbCguLi5hcmdzKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2VuZGVyTmFtZSh2YWwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWwubGVuZ3RoO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZW5kZXJFbWFpbCguLi5hcmdzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9ybU1vZGVsLmVtYWlsKC4uLmFyZ3MpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjdXN0b21BbW91bnQodmFsdWUsIG1pbiwgbWF4KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgJiYgdmFsdWUgPj0gbWluICYmIHZhbHVlIDw9IG1heDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2V0QW1vdW50KHZhbHVlLCBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZm91bmQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb24gPT09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBmb3VuZDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCAkcHVyY2hhc2VGb3JtID0gJCgnI2dpZnQtY2VydGlmaWNhdGUtZm9ybScpO1xyXG4gICAgICAgIGNvbnN0ICRjdXN0b21BbW91bnRzID0gJHB1cmNoYXNlRm9ybS5maW5kKCdpbnB1dFtuYW1lPVwiY2VydGlmaWNhdGVfYW1vdW50XCJdJyk7XHJcbiAgICAgICAgY29uc3QgcHVyY2hhc2VWYWxpZGF0b3IgPSBub2Qoe1xyXG4gICAgICAgICAgICBzdWJtaXQ6ICcjZ2lmdC1jZXJ0aWZpY2F0ZS1mb3JtIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nLFxyXG4gICAgICAgICAgICBkZWxheTogMzAwLFxyXG4gICAgICAgICAgICB0YXA6IGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICgkY3VzdG9tQW1vdW50cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY29uc3QgJGVsZW1lbnQgPSAkcHVyY2hhc2VGb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJjZXJ0aWZpY2F0ZV9hbW91bnRcIl0nKTtcclxuICAgICAgICAgICAgY29uc3QgbWluID0gJGVsZW1lbnQuZGF0YSgnbWluJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1pbkZvcm1hdHRlZCA9ICRlbGVtZW50LmRhdGEoJ21pbkZvcm1hdHRlZCcpO1xyXG4gICAgICAgICAgICBjb25zdCBtYXggPSAkZWxlbWVudC5kYXRhKCdtYXgnKTtcclxuICAgICAgICAgICAgY29uc3QgbWF4Rm9ybWF0dGVkID0gJGVsZW1lbnQuZGF0YSgnbWF4Rm9ybWF0dGVkJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGluc2VydEZvcm1hdHRlZEFtb3VudHNJbnRvRXJyb3JNZXNzYWdlID0gKG1lc3NhZ2UsIC4uLmFtb3VudFJhbmdlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhbW91bnRQbGFjZWhvbGRlcnMgPSBbJ1tNSU5dJywgJ1tNQVhdJ107XHJcbiAgICAgICAgICAgICAgICBsZXQgdXBkYXRlZEVycm9yVGV4dCA9IG1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICBhbW91bnRQbGFjZWhvbGRlcnMuZm9yRWFjaCgocGxhY2Vob2xkZXIsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVkRXJyb3JUZXh0ID0gdXBkYXRlZEVycm9yVGV4dC5pbmNsdWRlcyhwbGFjZWhvbGRlcikgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVkRXJyb3JUZXh0LnJlcGxhY2UocGxhY2Vob2xkZXIsIGFtb3VudFJhbmdlW2ldKSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZWRFcnJvclRleHQ7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1cGRhdGVkRXJyb3JUZXh0O1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcHVyY2hhc2VWYWxpZGF0b3IuYWRkKHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2dpZnQtY2VydGlmaWNhdGUtZm9ybSBpbnB1dFtuYW1lPVwiY2VydGlmaWNhdGVfYW1vdW50XCJdJyxcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG51bWJlclZhbCA9IE51bWJlcih2YWwpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIW51bWJlclZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYihudW1iZXJWYWwgPj0gbWluICYmIG51bWJlclZhbCA8PSBtYXgpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogaW5zZXJ0Rm9ybWF0dGVkQW1vdW50c0ludG9FcnJvck1lc3NhZ2UodGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeS5jZXJ0aWZpY2F0ZV9hbW91bnRfcmFuZ2UsIG1pbkZvcm1hdHRlZCwgbWF4Rm9ybWF0dGVkKSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdXJjaGFzZVZhbGlkYXRvci5hZGQoW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNnaWZ0LWNlcnRpZmljYXRlLWZvcm0gaW5wdXRbbmFtZT1cInRvX25hbWVcIl0nLFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcHVyY2hhc2VNb2RlbC5yZWNpcGllbnROYW1lKHZhbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQudG9OYW1lLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNnaWZ0LWNlcnRpZmljYXRlLWZvcm0gaW5wdXRbbmFtZT1cInRvX2VtYWlsXCJdJyxcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHB1cmNoYXNlTW9kZWwucmVjaXBpZW50RW1haWwodmFsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC50b0VtYWlsLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNnaWZ0LWNlcnRpZmljYXRlLWZvcm0gaW5wdXRbbmFtZT1cImZyb21fbmFtZVwiXScsXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBwdXJjaGFzZU1vZGVsLnNlbmRlck5hbWUodmFsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5mcm9tTmFtZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjZ2lmdC1jZXJ0aWZpY2F0ZS1mb3JtIGlucHV0W25hbWU9XCJmcm9tX2VtYWlsXCJdJyxcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHB1cmNoYXNlTW9kZWwuc2VuZGVyRW1haWwodmFsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5mcm9tRW1haWwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2dpZnQtY2VydGlmaWNhdGUtZm9ybSBpbnB1dFtuYW1lPVwiY2VydGlmaWNhdGVfdGhlbWVcIl06Zmlyc3Qtb2YtdHlwZScsXHJcbiAgICAgICAgICAgICAgICB0cmlnZ2VyZWRCeTogJyNnaWZ0LWNlcnRpZmljYXRlLWZvcm0gaW5wdXRbbmFtZT1cImNlcnRpZmljYXRlX3RoZW1lXCJdJyxcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSAkcHVyY2hhc2VGb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJjZXJ0aWZpY2F0ZV90aGVtZVwiXTpjaGVja2VkJykudmFsKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNiKHR5cGVvZiAodmFsKSA9PT0gJ3N0cmluZycpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmNlcnRUaGVtZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjZ2lmdC1jZXJ0aWZpY2F0ZS1mb3JtIGlucHV0W25hbWU9XCJhZ3JlZVwiXScsXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsID0gJHB1cmNoYXNlRm9ybS5maW5kKCdpbnB1dFtuYW1lPVwiYWdyZWVcIl0nKS5nZXQoMCkuY2hlY2tlZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2IodmFsKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5hZ3JlZVRvVGVybXMsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2dpZnQtY2VydGlmaWNhdGUtZm9ybSBpbnB1dFtuYW1lPVwiYWdyZWUyXCJdJyxcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSAkcHVyY2hhc2VGb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJhZ3JlZTJcIl0nKS5nZXQoMCkuY2hlY2tlZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2IodmFsKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5hZ3JlZVRvVGVybXMsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgIGlmICgkY2VydEJhbGFuY2VGb3JtLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjb25zdCBiYWxhbmNlVmFsID0gdGhpcy5jaGVja0NlcnRCYWxhbmNlVmFsaWRhdG9yKCRjZXJ0QmFsYW5jZUZvcm0pO1xyXG5cclxuICAgICAgICAgICAgJGNlcnRCYWxhbmNlRm9ybS5vbignc3VibWl0JywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYmFsYW5jZVZhbC5wZXJmb3JtQ2hlY2soKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWJhbGFuY2VWYWwuYXJlQWxsKCd2YWxpZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICRwdXJjaGFzZUZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgcHVyY2hhc2VWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXB1cmNoYXNlVmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnI2dpZnQtY2VydGlmaWNhdGUtcHJldmlldycpLmNsaWNrKGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIHB1cmNoYXNlVmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFwdXJjaGFzZVZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgbW9kYWwgPSBkZWZhdWx0TW9kYWwoKTtcclxuICAgICAgICAgICAgY29uc3QgcHJldmlld1VybCA9IGAkeyQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgncHJldmlld1VybCcpfSYkeyRwdXJjaGFzZUZvcm0uc2VyaWFsaXplKCl9YDtcclxuXHJcbiAgICAgICAgICAgIG1vZGFsLm9wZW4oKTtcclxuXHJcbiAgICAgICAgICAgIGFwaS5nZXRQYWdlKHByZXZpZXdVcmwsIHt9LCAoZXJyLCBjb250ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vZGFsLnVwZGF0ZUNvbnRlbnQodGhpcy5jb250ZXh0LnByZXZpZXdFcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbW9kYWwudXBkYXRlQ29udGVudChjb250ZW50LCB7IHdyYXA6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrQ2VydEJhbGFuY2VWYWxpZGF0b3IoJGJhbGFuY2VGb3JtKSB7XHJcbiAgICAgICAgY29uc3QgYmFsYW5jZVZhbGlkYXRvciA9IG5vZCh7XHJcbiAgICAgICAgICAgIHN1Ym1pdDogJGJhbGFuY2VGb3JtLmZpbmQoJ2lucHV0W3R5cGU9XCJzdWJtaXRcIl0nKSxcclxuICAgICAgICAgICAgdGFwOiBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBiYWxhbmNlVmFsaWRhdG9yLmFkZCh7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yOiAkYmFsYW5jZUZvcm0uZmluZCgnaW5wdXRbbmFtZT1cImdpZnRjZXJ0aWZpY2F0ZWNvZGVcIl0nKSxcclxuICAgICAgICAgICAgdmFsaWRhdGUoY2IsIHZhbCkge1xyXG4gICAgICAgICAgICAgICAgY2IoY2hlY2tJc0dpZnRDZXJ0VmFsaWQodmFsKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeS5pbnZhbGlkX2dpZnRfY2VydGlmaWNhdGUsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBiYWxhbmNlVmFsaWRhdG9yO1xyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJjZXJ0IiwibGVuZ3RoIiwiVFJBTlNMQVRJT05TIiwiaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eSIsImRpY3Rpb25hcnkiLCJPYmplY3QiLCJrZXlzIiwiY2hvb3NlQWN0aXZlRGljdGlvbmFyeSIsImkiLCJhcmd1bWVudHMiLCJKU09OIiwicGFyc2UiLCJ1bmRlZmluZWQiLCJjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkiLCJjb250ZXh0IiwidmFsaWRhdGlvbkRpY3Rpb25hcnlKU09OIiwidmFsaWRhdGlvbkZhbGxiYWNrRGljdGlvbmFyeUpTT04iLCJ2YWxpZGF0aW9uRGVmYXVsdERpY3Rpb25hcnlKU09OIiwiYWN0aXZlRGljdGlvbmFyeSIsImxvY2FsaXphdGlvbnMiLCJ2YWx1ZXMiLCJ0cmFuc2xhdGlvbktleXMiLCJtYXAiLCJrZXkiLCJzcGxpdCIsInBvcCIsInJlZHVjZSIsImFjYyIsIlBhZ2VNYW5hZ2VyIiwibm9kIiwiY2hlY2tJc0dpZnRDZXJ0VmFsaWQiLCJmb3JtTW9kZWwiLCJhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlIiwiYXBpIiwiZGVmYXVsdE1vZGFsIiwiR2lmdENlcnRpZmljYXRlIiwiX1BhZ2VNYW5hZ2VyIiwiX2luaGVyaXRzTG9vc2UiLCJfdGhpcyIsImNhbGwiLCJ2YWxpZGF0aW9uRGljdGlvbmFyeSIsIiRjZXJ0QmFsYW5jZUZvcm0iLCIkIiwicHVyY2hhc2VNb2RlbCIsInJlY2lwaWVudE5hbWUiLCJ2YWwiLCJyZWNpcGllbnRFbWFpbCIsImVtYWlsIiwiYXBwbHkiLCJzZW5kZXJOYW1lIiwic2VuZGVyRW1haWwiLCJjdXN0b21BbW91bnQiLCJ2YWx1ZSIsIm1pbiIsIm1heCIsInNldEFtb3VudCIsIm9wdGlvbnMiLCJmb3VuZCIsImZvckVhY2giLCJvcHRpb24iLCIkcHVyY2hhc2VGb3JtIiwiJGN1c3RvbUFtb3VudHMiLCJmaW5kIiwicHVyY2hhc2VWYWxpZGF0b3IiLCJzdWJtaXQiLCJkZWxheSIsInRhcCIsIiRlbGVtZW50IiwiZGF0YSIsIm1pbkZvcm1hdHRlZCIsIm1heEZvcm1hdHRlZCIsImluc2VydEZvcm1hdHRlZEFtb3VudHNJbnRvRXJyb3JNZXNzYWdlIiwibWVzc2FnZSIsIl9sZW4iLCJhbW91bnRSYW5nZSIsIkFycmF5IiwiX2tleSIsImFtb3VudFBsYWNlaG9sZGVycyIsInVwZGF0ZWRFcnJvclRleHQiLCJwbGFjZWhvbGRlciIsImluY2x1ZGVzIiwicmVwbGFjZSIsImFkZCIsInNlbGVjdG9yIiwidmFsaWRhdGUiLCJjYiIsIm51bWJlclZhbCIsIk51bWJlciIsImVycm9yTWVzc2FnZSIsImNlcnRpZmljYXRlX2Ftb3VudF9yYW5nZSIsInJlc3VsdCIsInRvTmFtZSIsInRvRW1haWwiLCJmcm9tTmFtZSIsImZyb21FbWFpbCIsInRyaWdnZXJlZEJ5IiwiY2VydFRoZW1lIiwiZ2V0IiwiY2hlY2tlZCIsImFncmVlVG9UZXJtcyIsImJhbGFuY2VWYWwiLCJjaGVja0NlcnRCYWxhbmNlVmFsaWRhdG9yIiwib24iLCJwZXJmb3JtQ2hlY2siLCJhcmVBbGwiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY2xpY2siLCJtb2RhbCIsInByZXZpZXdVcmwiLCJjdXJyZW50VGFyZ2V0Iiwic2VyaWFsaXplIiwib3BlbiIsImdldFBhZ2UiLCJlcnIiLCJjb250ZW50IiwidXBkYXRlQ29udGVudCIsInByZXZpZXdFcnJvciIsIndyYXAiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCIkYmFsYW5jZUZvcm0iLCJiYWxhbmNlVmFsaWRhdG9yIiwiaW52YWxpZF9naWZ0X2NlcnRpZmljYXRlIiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=