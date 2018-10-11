(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("babylonjs"));
	else if(typeof define === 'function' && define.amd)
		define("babylonjs-procedural-textures", ["babylonjs"], factory);
	else if(typeof exports === 'object')
		exports["babylonjs-procedural-textures"] = factory(require("babylonjs"));
	else
		root["PTLIB"] = factory(root["BABYLON"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_babylonjs__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./legacy/legacy-normalMap.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../Tools/Gulp/node_modules/webpack/buildin/global.js":
/*!************************************************************!*\
  !*** ../Tools/Gulp/node_modules/webpack/buildin/global.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./legacy/legacy-normalMap.ts":
/*!************************************!*\
  !*** ./legacy/legacy-normalMap.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var proceduralTexture = __webpack_require__(/*! ../src/normalMap */ "./src/normalMap/index.ts");
/**
 * This is the entry point for the UMD module.
 * The entry point for a future ESM package should be index.ts
 */
var globalObject = (typeof global !== 'undefined') ? global : ((typeof window !== 'undefined') ? window : undefined);
if (typeof globalObject !== "undefined") {
    for (var key in proceduralTexture) {
        globalObject.BABYLON[key] = proceduralTexture[key];
    }
}
__export(__webpack_require__(/*! ../src/normalMap */ "./src/normalMap/index.ts"));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../Tools/Gulp/node_modules/webpack/buildin/global.js */ "../Tools/Gulp/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/normalMap/index.ts":
/*!********************************!*\
  !*** ./src/normalMap/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./normalMapProceduralTexture */ "./src/normalMap/normalMapProceduralTexture.ts"));


/***/ }),

/***/ "./src/normalMap/normalMapProceduralTexture.fragment.fx":
/*!**************************************************************!*\
  !*** ./src/normalMap/normalMapProceduralTexture.fragment.fx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "precision highp float;\n\nuniform sampler2D baseSampler;\nuniform float size;\n\nvarying vec2 vUV;\n\nconst vec3 LUMA_COEFFICIENT=vec3(0.2126,0.7152,0.0722);\nfloat lumaAtCoord(vec2 coord)\n{\nvec3 pixel=texture2D(baseSampler,coord).rgb;\nfloat luma=dot(pixel,LUMA_COEFFICIENT);\nreturn luma;\n}\nvoid main()\n{\nfloat lumaU0=lumaAtCoord(vUV+vec2(-1.0,0.0)/size);\nfloat lumaU1=lumaAtCoord(vUV+vec2( 1.0,0.0)/size);\nfloat lumaV0=lumaAtCoord(vUV+vec2( 0.0,-1.0)/size);\nfloat lumaV1=lumaAtCoord(vUV+vec2( 0.0,1.0)/size);\nvec2 slope=(vec2(lumaU0-lumaU1,lumaV0-lumaV1)+1.0)*0.5;\ngl_FragColor=vec4(slope,1.0,1.0);\n}\n"

/***/ }),

/***/ "./src/normalMap/normalMapProceduralTexture.ts":
/*!*****************************************************!*\
  !*** ./src/normalMap/normalMapProceduralTexture.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var babylonjs_1 = __webpack_require__(/*! babylonjs */ "babylonjs");
babylonjs_1.Effect.ShadersStore["normalMapProceduralTexturePixelShader"] = __webpack_require__(/*! ./normalMapProceduralTexture.fragment.fx */ "./src/normalMap/normalMapProceduralTexture.fragment.fx");
var NormalMapProceduralTexture = /** @class */ (function (_super) {
    __extends(NormalMapProceduralTexture, _super);
    function NormalMapProceduralTexture(name, size, scene, fallbackTexture, generateMipMaps) {
        var _this = _super.call(this, name, size, "normalMapProceduralTexture", scene, fallbackTexture, generateMipMaps) || this;
        _this.updateShaderUniforms();
        return _this;
    }
    NormalMapProceduralTexture.prototype.updateShaderUniforms = function () {
        this.setTexture("baseSampler", this._baseTexture);
        this.setFloat("size", this.getRenderSize());
    };
    NormalMapProceduralTexture.prototype.render = function (useCameraPostProcess) {
        _super.prototype.render.call(this, useCameraPostProcess);
    };
    NormalMapProceduralTexture.prototype.resize = function (size, generateMipMaps) {
        _super.prototype.resize.call(this, size, generateMipMaps);
        // We need to update the "size" uniform
        this.updateShaderUniforms();
    };
    Object.defineProperty(NormalMapProceduralTexture.prototype, "baseTexture", {
        get: function () {
            return this._baseTexture;
        },
        set: function (texture) {
            this._baseTexture = texture;
            this.updateShaderUniforms();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Serializes this normal map procedural texture
     * @returns a serialized normal map procedural texture object
     */
    NormalMapProceduralTexture.prototype.serialize = function () {
        var serializationObject = babylonjs_1.SerializationHelper.Serialize(this, _super.prototype.serialize.call(this));
        serializationObject.customType = "BABYLON.NormalMapProceduralTexture";
        return serializationObject;
    };
    /**
     * Creates a Normal Map Procedural Texture from parsed normal map procedural texture data
     * @param parsedTexture defines parsed texture data
     * @param scene defines the current scene
     * @param rootUrl defines the root URL containing normal map procedural texture information
     * @returns a parsed Normal Map Procedural Texture
     */
    NormalMapProceduralTexture.Parse = function (parsedTexture, scene, rootUrl) {
        var texture = babylonjs_1.SerializationHelper.Parse(function () { return new NormalMapProceduralTexture(parsedTexture.name, parsedTexture._size, scene, undefined, parsedTexture._generateMipMaps); }, parsedTexture, scene, rootUrl);
        return texture;
    };
    __decorate([
        babylonjs_1.serializeAsTexture()
    ], NormalMapProceduralTexture.prototype, "baseTexture", null);
    return NormalMapProceduralTexture;
}(babylonjs_1.ProceduralTexture));
exports.NormalMapProceduralTexture = NormalMapProceduralTexture;


/***/ }),

/***/ "babylonjs":
/*!****************************************************************************************************!*\
  !*** external {"root":"BABYLON","commonjs":"babylonjs","commonjs2":"babylonjs","amd":"babylonjs"} ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_babylonjs__;

/***/ })

/******/ });
});
//# sourceMappingURL=babylon.normalMapProceduralTexture.js.map