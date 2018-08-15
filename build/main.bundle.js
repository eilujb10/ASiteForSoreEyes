/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _googleMap = __webpack_require__(1);

var _googleMap2 = _interopRequireDefault(_googleMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

var initMap = exports.initMap = function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    mapTypeControl: false,
    center: { lat: -33.8688, lng: 151.2195 },
    zoom: 13
  });

  new AutocompleteDirectionsHandler(map);
};

/**
 * @constructor
*/
var AutocompleteDirectionsHandler = function AutocompleteDirectionsHandler(map) {
  undefined.map = map;
  undefined.originPlaceId = null;
  undefined.destinationPlaceId = null;
  undefined.travelMode = 'WALKING';
  var originInput = document.getElementById('origin-input');
  var destinationInput = document.getElementById('destination-input');
  var modeSelector = document.getElementById('mode-selector');
  undefined.directionsService = new google.maps.DirectionsService();
  undefined.directionsDisplay = new google.maps.DirectionsRenderer();
  undefined.directionsDisplay.setMap(map);

  var originAutocomplete = new google.maps.places.Autocomplete(originInput, { placeIdOnly: true });
  var destinationAutocomplete = new google.maps.places.Autocomplete(destinationInput, { placeIdOnly: true });

  undefined.setupClickListener('changemode-walking', 'WALKING');
  undefined.setupClickListener('changemode-transit', 'TRANSIT');
  undefined.setupClickListener('changemode-driving', 'DRIVING');

  undefined.setupPlaceChangedListener(originAutocomplete, 'ORIG');
  undefined.setupPlaceChangedListener(destinationAutocomplete, 'DEST');

  undefined.map.controls[google.maps.ControlPosition.TOP_LEFT].push(originInput);
  undefined.map.controls[google.maps.ControlPosition.TOP_LEFT].push(destinationInput);
  undefined.map.controls[google.maps.ControlPosition.TOP_LEFT].push(modeSelector);
};

// Sets a listener on a radio button to change the filter type on Places
// Autocomplete.
AutocompleteDirectionsHandler.prototype.setupClickListener = function (id, mode) {
  var radioButton = document.getElementById(id);
  var me = undefined;
  radioButton.addEventListener('click', function () {
    me.travelMode = mode;
    me.route();
  });
};

AutocompleteDirectionsHandler.prototype.setupPlaceChangedListener = function (autocomplete, mode) {
  var me = undefined;
  autocomplete.bindTo('bounds', undefined.map);
  autocomplete.addListener('place_changed', function () {
    var place = autocomplete.getPlace();
    if (!place.place_id) {
      window.alert("Please select an option from the dropdown list.");
      return;
    }
    if (mode === 'ORIG') {
      me.originPlaceId = place.place_id;
    } else {
      me.destinationPlaceId = place.place_id;
    }
    me.route();
  });
};

AutocompleteDirectionsHandler.prototype.route = function () {
  if (!undefined.originPlaceId || !undefined.destinationPlaceId) {
    return;
  }
  var me = undefined;

  undefined.directionsService.route({
    origin: { 'placeId': undefined.originPlaceId },
    destination: { 'placeId': undefined.destinationPlaceId },
    travelMode: undefined.travelMode
  }, function (response, status) {
    if (status === 'OK') {
      me.directionsDisplay.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
};

/***/ })
/******/ ]);