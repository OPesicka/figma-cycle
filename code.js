/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/fetch_actors.ts":
/*!*****************************!*\
  !*** ./src/fetch_actors.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getActor": () => (/* binding */ getActor)
/* harmony export */ });
//return hits
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getActor(search) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = {};
        const url = "https://ow0o5i3qo7-dsn.algolia.net/1/indexes/prod_PUBLIC_STORE/query?x-algolia-api-key=0ecccd09f50396a4dbbe5dbfb17f4525&x-algolia-application-id=OW0O5I3QO7";
        const body = {
            query: search,
            page: 0,
            hitsPerPage: 10,
            restrictSearchableAttributes: [],
            attributesToHighlight: [],
            attributesToRetrieve: ["title", "name", "username", "userFullName", "stats", "description", "pictureUrl", "userPictureUrl", "notice", "currentPricingInfo"],
        };
        yield fetch(url, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
            result = data.hits;
        })
            .catch((error) => {
            console.error("Error:", error);
        });
        return result;
    });
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/code.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fetch_actors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch_actors */ "./src/fetch_actors.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

figma.showUI(__html__, {
    width: 480,
    height: 480,
    title: "Cycle",
});
figma.ui.onmessage = (msg) => __awaiter(void 0, void 0, void 0, function* () {
    const actorData = yield (0,_fetch_actors__WEBPACK_IMPORTED_MODULE_0__.getActor)(msg.search);
    if (msg.type === "actorName") {
        fillTextNode("title", actorData);
    }
    if (msg.type === "authorName") {
        fillTextNode("userFullName", actorData);
    }
    if (msg.type === "authorUsername") {
        fillTextNode("username", actorData);
    }
    if (msg.type === "description") {
        fillTextNode("description", actorData);
    }
    if (msg.type === "slug") {
        figma.currentPage.selection.forEach((node, index) => {
            if (node.type === "TEXT" && typeof node.fontName !== "symbol") {
                figma.loadFontAsync(node.fontName).then(() => {
                    const actorName = [actorData[index].username, actorData[index].name];
                    node.characters = actorName.join("/");
                });
            }
        });
    }
    //TODO: Ask someone about image proxy or any other way to get around CORS
    if (msg.type === "image") {
        (() => __awaiter(void 0, void 0, void 0, function* () {
            for (const [index, node] of figma.currentPage.selection.entries()) {
                if (hasFill(node)) {
                    const imageUrl = actorData[0].pictureUrl;
                    let image8array = yield getImageHash(imageUrl);
                    let image = figma.createImage(new Uint8Array(image8array));
                    //Assign imagehash to fill
                    const nodeFills = node;
                    nodeFills.fills = [{ type: "IMAGE", scaleMode: "FILL", imageHash: image.hash }];
                }
            }
        }))();
    }
});
// Takes URL of an image and downloads it and turns it into a blob
function getImageHash(imageUrl) {
    figma.ui.postMessage({ type: "loadImage", imageUrl });
    return new Promise((resolve) => {
        figma.ui.once("message", (msg) => {
            if (msg.type === "blobResult") {
                console.log("vojta");
                const imageArrayBuffer = msg.result;
                resolve(imageArrayBuffer);
            }
        });
    });
}
function hasFill(node) {
    return node.type === "RECTANGLE" || node.type === "FRAME" || node.type === "ELLIPSE";
}
function fillTextNode(stringKey, data) {
    figma.currentPage.selection.forEach((node, index) => {
        if (node.type === "TEXT" && typeof node.fontName !== "symbol") {
            figma.loadFontAsync(node.fontName).then(() => {
                node.characters = data[index][stringKey];
            });
        }
        else {
            figma.notify("❌ Please select a text layer");
        }
    });
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EsaUJBQWlCLFNBQUksSUFBSSxTQUFJO0FBQzdCLDRCQUE0QiwrREFBK0QsaUJBQWlCO0FBQzVHO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7VUN0Q0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3Qiw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUMwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDRCQUE0Qix1REFBUTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5Qyx5REFBeUQ7QUFDbEc7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsMkJBQTJCLDZCQUE2QjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vVGVzdC8uL3NyYy9mZXRjaF9hY3RvcnMudHMiLCJ3ZWJwYWNrOi8vVGVzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9UZXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9UZXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vVGVzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL1Rlc3QvLi9zcmMvY29kZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL3JldHVybiBoaXRzXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBnZXRBY3RvcihzZWFyY2gpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBsZXQgcmVzdWx0ID0ge307XG4gICAgICAgIGNvbnN0IHVybCA9IFwiaHR0cHM6Ly9vdzBvNWkzcW83LWRzbi5hbGdvbGlhLm5ldC8xL2luZGV4ZXMvcHJvZF9QVUJMSUNfU1RPUkUvcXVlcnk/eC1hbGdvbGlhLWFwaS1rZXk9MGVjY2NkMDlmNTAzOTZhNGRiYmU1ZGJmYjE3ZjQ1MjUmeC1hbGdvbGlhLWFwcGxpY2F0aW9uLWlkPU9XME81STNRTzdcIjtcbiAgICAgICAgY29uc3QgYm9keSA9IHtcbiAgICAgICAgICAgIHF1ZXJ5OiBzZWFyY2gsXG4gICAgICAgICAgICBwYWdlOiAwLFxuICAgICAgICAgICAgaGl0c1BlclBhZ2U6IDEwLFxuICAgICAgICAgICAgcmVzdHJpY3RTZWFyY2hhYmxlQXR0cmlidXRlczogW10sXG4gICAgICAgICAgICBhdHRyaWJ1dGVzVG9IaWdobGlnaHQ6IFtdLFxuICAgICAgICAgICAgYXR0cmlidXRlc1RvUmV0cmlldmU6IFtcInRpdGxlXCIsIFwibmFtZVwiLCBcInVzZXJuYW1lXCIsIFwidXNlckZ1bGxOYW1lXCIsIFwic3RhdHNcIiwgXCJkZXNjcmlwdGlvblwiLCBcInBpY3R1cmVVcmxcIiwgXCJ1c2VyUGljdHVyZVVybFwiLCBcIm5vdGljZVwiLCBcImN1cnJlbnRQcmljaW5nSW5mb1wiXSxcbiAgICAgICAgfTtcbiAgICAgICAgeWllbGQgZmV0Y2godXJsLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgcmVzdWx0ID0gZGF0YS5oaXRzO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnJvcik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IGdldEFjdG9yIH0gZnJvbSBcIi4vZmV0Y2hfYWN0b3JzXCI7XG5maWdtYS5zaG93VUkoX19odG1sX18sIHtcbiAgICB3aWR0aDogNDgwLFxuICAgIGhlaWdodDogNDgwLFxuICAgIHRpdGxlOiBcIkN5Y2xlXCIsXG59KTtcbmZpZ21hLnVpLm9ubWVzc2FnZSA9IChtc2cpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IGFjdG9yRGF0YSA9IHlpZWxkIGdldEFjdG9yKG1zZy5zZWFyY2gpO1xuICAgIGlmIChtc2cudHlwZSA9PT0gXCJhY3Rvck5hbWVcIikge1xuICAgICAgICBmaWxsVGV4dE5vZGUoXCJ0aXRsZVwiLCBhY3RvckRhdGEpO1xuICAgIH1cbiAgICBpZiAobXNnLnR5cGUgPT09IFwiYXV0aG9yTmFtZVwiKSB7XG4gICAgICAgIGZpbGxUZXh0Tm9kZShcInVzZXJGdWxsTmFtZVwiLCBhY3RvckRhdGEpO1xuICAgIH1cbiAgICBpZiAobXNnLnR5cGUgPT09IFwiYXV0aG9yVXNlcm5hbWVcIikge1xuICAgICAgICBmaWxsVGV4dE5vZGUoXCJ1c2VybmFtZVwiLCBhY3RvckRhdGEpO1xuICAgIH1cbiAgICBpZiAobXNnLnR5cGUgPT09IFwiZGVzY3JpcHRpb25cIikge1xuICAgICAgICBmaWxsVGV4dE5vZGUoXCJkZXNjcmlwdGlvblwiLCBhY3RvckRhdGEpO1xuICAgIH1cbiAgICBpZiAobXNnLnR5cGUgPT09IFwic2x1Z1wiKSB7XG4gICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbi5mb3JFYWNoKChub2RlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKG5vZGUudHlwZSA9PT0gXCJURVhUXCIgJiYgdHlwZW9mIG5vZGUuZm9udE5hbWUgIT09IFwic3ltYm9sXCIpIHtcbiAgICAgICAgICAgICAgICBmaWdtYS5sb2FkRm9udEFzeW5jKG5vZGUuZm9udE5hbWUpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhY3Rvck5hbWUgPSBbYWN0b3JEYXRhW2luZGV4XS51c2VybmFtZSwgYWN0b3JEYXRhW2luZGV4XS5uYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5jaGFyYWN0ZXJzID0gYWN0b3JOYW1lLmpvaW4oXCIvXCIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy9UT0RPOiBBc2sgc29tZW9uZSBhYm91dCBpbWFnZSBwcm94eSBvciBhbnkgb3RoZXIgd2F5IHRvIGdldCBhcm91bmQgQ09SU1xuICAgIGlmIChtc2cudHlwZSA9PT0gXCJpbWFnZVwiKSB7XG4gICAgICAgICgoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgW2luZGV4LCBub2RlXSBvZiBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24uZW50cmllcygpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGhhc0ZpbGwobm9kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1hZ2VVcmwgPSBhY3RvckRhdGFbMF0ucGljdHVyZVVybDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGltYWdlOGFycmF5ID0geWllbGQgZ2V0SW1hZ2VIYXNoKGltYWdlVXJsKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGltYWdlID0gZmlnbWEuY3JlYXRlSW1hZ2UobmV3IFVpbnQ4QXJyYXkoaW1hZ2U4YXJyYXkpKTtcbiAgICAgICAgICAgICAgICAgICAgLy9Bc3NpZ24gaW1hZ2VoYXNoIHRvIGZpbGxcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm9kZUZpbGxzID0gbm9kZTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZUZpbGxzLmZpbGxzID0gW3sgdHlwZTogXCJJTUFHRVwiLCBzY2FsZU1vZGU6IFwiRklMTFwiLCBpbWFnZUhhc2g6IGltYWdlLmhhc2ggfV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSkoKTtcbiAgICB9XG59KTtcbi8vIFRha2VzIFVSTCBvZiBhbiBpbWFnZSBhbmQgZG93bmxvYWRzIGl0IGFuZCB0dXJucyBpdCBpbnRvIGEgYmxvYlxuZnVuY3Rpb24gZ2V0SW1hZ2VIYXNoKGltYWdlVXJsKSB7XG4gICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoeyB0eXBlOiBcImxvYWRJbWFnZVwiLCBpbWFnZVVybCB9KTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgZmlnbWEudWkub25jZShcIm1lc3NhZ2VcIiwgKG1zZykgPT4ge1xuICAgICAgICAgICAgaWYgKG1zZy50eXBlID09PSBcImJsb2JSZXN1bHRcIikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidm9qdGFcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2VBcnJheUJ1ZmZlciA9IG1zZy5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShpbWFnZUFycmF5QnVmZmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBoYXNGaWxsKG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZS50eXBlID09PSBcIlJFQ1RBTkdMRVwiIHx8IG5vZGUudHlwZSA9PT0gXCJGUkFNRVwiIHx8IG5vZGUudHlwZSA9PT0gXCJFTExJUFNFXCI7XG59XG5mdW5jdGlvbiBmaWxsVGV4dE5vZGUoc3RyaW5nS2V5LCBkYXRhKSB7XG4gICAgZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uLmZvckVhY2goKG5vZGUsIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChub2RlLnR5cGUgPT09IFwiVEVYVFwiICYmIHR5cGVvZiBub2RlLmZvbnROYW1lICE9PSBcInN5bWJvbFwiKSB7XG4gICAgICAgICAgICBmaWdtYS5sb2FkRm9udEFzeW5jKG5vZGUuZm9udE5hbWUpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUuY2hhcmFjdGVycyA9IGRhdGFbaW5kZXhdW3N0cmluZ0tleV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZpZ21hLm5vdGlmeShcIuKdjCBQbGVhc2Ugc2VsZWN0IGEgdGV4dCBsYXllclwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9