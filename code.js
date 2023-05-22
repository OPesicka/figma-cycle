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
/* harmony export */   "fetchActors": () => (/* binding */ fetchActors)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchActors(search) {
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


/***/ }),

/***/ "./src/help.ts":
/*!*********************!*\
  !*** ./src/help.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hasFill": () => (/* binding */ hasFill),
/* harmony export */   "fillTextNode": () => (/* binding */ fillTextNode)
/* harmony export */ });
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
/* harmony import */ var _help__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./help */ "./src/help.ts");
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
    const actorData = yield (0,_fetch_actors__WEBPACK_IMPORTED_MODULE_0__.fetchActors)(msg.search ? msg.search : " ");
    if (msg.type === "actorName") {
        (0,_help__WEBPACK_IMPORTED_MODULE_1__.fillTextNode)("title", actorData);
    }
    if (msg.type === "authorName") {
        (0,_help__WEBPACK_IMPORTED_MODULE_1__.fillTextNode)("userFullName", actorData);
    }
    if (msg.type === "authorUsername") {
        (0,_help__WEBPACK_IMPORTED_MODULE_1__.fillTextNode)("username", actorData);
    }
    if (msg.type === "description") {
        (0,_help__WEBPACK_IMPORTED_MODULE_1__.fillTextNode)("description", actorData);
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
    if (msg.type === "image") {
        (() => __awaiter(void 0, void 0, void 0, function* () {
            for (const [index, node] of figma.currentPage.selection.entries()) {
                if ((0,_help__WEBPACK_IMPORTED_MODULE_1__.hasFill)(node)) {
                    const imageUrl = actorData[index].pictureUrl;
                    figma.createImageAsync(imageUrl).then((image) => __awaiter(void 0, void 0, void 0, function* () {
                        node.fills = [
                            {
                                type: "IMAGE",
                                imageHash: image.hash,
                                scaleMode: "FILL",
                            },
                        ];
                    }));
                }
                else {
                    figma.notify("❌ Please select a shape layer");
                }
            }
        }))();
    }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3Qiw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7O0FDckNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7VUNkQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05BLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3Qiw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUM2QztBQUNFO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsNEJBQTRCLDBEQUFXO0FBQ3ZDO0FBQ0EsUUFBUSxtREFBWTtBQUNwQjtBQUNBO0FBQ0EsUUFBUSxtREFBWTtBQUNwQjtBQUNBO0FBQ0EsUUFBUSxtREFBWTtBQUNwQjtBQUNBO0FBQ0EsUUFBUSxtREFBWTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw4Q0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL1Rlc3QvLi9zcmMvZmV0Y2hfYWN0b3JzLnRzIiwid2VicGFjazovL1Rlc3QvLi9zcmMvaGVscC50cyIsIndlYnBhY2s6Ly9UZXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1Rlc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1Rlc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9UZXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vVGVzdC8uL3NyYy9jb2RlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIGZldGNoQWN0b3JzKHNlYXJjaCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSB7fTtcbiAgICAgICAgY29uc3QgdXJsID0gXCJodHRwczovL293MG81aTNxbzctZHNuLmFsZ29saWEubmV0LzEvaW5kZXhlcy9wcm9kX1BVQkxJQ19TVE9SRS9xdWVyeT94LWFsZ29saWEtYXBpLWtleT0wZWNjY2QwOWY1MDM5NmE0ZGJiZTVkYmZiMTdmNDUyNSZ4LWFsZ29saWEtYXBwbGljYXRpb24taWQ9T1cwTzVJM1FPN1wiO1xuICAgICAgICBjb25zdCBib2R5ID0ge1xuICAgICAgICAgICAgcXVlcnk6IHNlYXJjaCxcbiAgICAgICAgICAgIHBhZ2U6IDAsXG4gICAgICAgICAgICBoaXRzUGVyUGFnZTogMTAsXG4gICAgICAgICAgICByZXN0cmljdFNlYXJjaGFibGVBdHRyaWJ1dGVzOiBbXSxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXNUb0hpZ2hsaWdodDogW10sXG4gICAgICAgICAgICBhdHRyaWJ1dGVzVG9SZXRyaWV2ZTogW1widGl0bGVcIiwgXCJuYW1lXCIsIFwidXNlcm5hbWVcIiwgXCJ1c2VyRnVsbE5hbWVcIiwgXCJzdGF0c1wiLCBcImRlc2NyaXB0aW9uXCIsIFwicGljdHVyZVVybFwiLCBcInVzZXJQaWN0dXJlVXJsXCIsIFwibm90aWNlXCIsIFwiY3VycmVudFByaWNpbmdJbmZvXCJdLFxuICAgICAgICB9O1xuICAgICAgICB5aWVsZCBmZXRjaCh1cmwsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICByZXN1bHQgPSBkYXRhLmhpdHM7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gaGFzRmlsbChub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUudHlwZSA9PT0gXCJSRUNUQU5HTEVcIiB8fCBub2RlLnR5cGUgPT09IFwiRlJBTUVcIiB8fCBub2RlLnR5cGUgPT09IFwiRUxMSVBTRVwiO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZpbGxUZXh0Tm9kZShzdHJpbmdLZXksIGRhdGEpIHtcbiAgICBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24uZm9yRWFjaCgobm9kZSwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKG5vZGUudHlwZSA9PT0gXCJURVhUXCIgJiYgdHlwZW9mIG5vZGUuZm9udE5hbWUgIT09IFwic3ltYm9sXCIpIHtcbiAgICAgICAgICAgIGZpZ21hLmxvYWRGb250QXN5bmMobm9kZS5mb250TmFtZSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5jaGFyYWN0ZXJzID0gZGF0YVtpbmRleF1bc3RyaW5nS2V5XTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZmlnbWEubm90aWZ5KFwi4p2MIFBsZWFzZSBzZWxlY3QgYSB0ZXh0IGxheWVyXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgZmV0Y2hBY3RvcnMgfSBmcm9tIFwiLi9mZXRjaF9hY3RvcnNcIjtcbmltcG9ydCB7IGZpbGxUZXh0Tm9kZSwgaGFzRmlsbCB9IGZyb20gXCIuL2hlbHBcIjtcbmZpZ21hLnNob3dVSShfX2h0bWxfXywge1xuICAgIHdpZHRoOiA0ODAsXG4gICAgaGVpZ2h0OiA0ODAsXG4gICAgdGl0bGU6IFwiQ3ljbGVcIixcbn0pO1xuZmlnbWEudWkub25tZXNzYWdlID0gKG1zZykgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3QgYWN0b3JEYXRhID0geWllbGQgZmV0Y2hBY3RvcnMobXNnLnNlYXJjaCA/IG1zZy5zZWFyY2ggOiBcIiBcIik7XG4gICAgaWYgKG1zZy50eXBlID09PSBcImFjdG9yTmFtZVwiKSB7XG4gICAgICAgIGZpbGxUZXh0Tm9kZShcInRpdGxlXCIsIGFjdG9yRGF0YSk7XG4gICAgfVxuICAgIGlmIChtc2cudHlwZSA9PT0gXCJhdXRob3JOYW1lXCIpIHtcbiAgICAgICAgZmlsbFRleHROb2RlKFwidXNlckZ1bGxOYW1lXCIsIGFjdG9yRGF0YSk7XG4gICAgfVxuICAgIGlmIChtc2cudHlwZSA9PT0gXCJhdXRob3JVc2VybmFtZVwiKSB7XG4gICAgICAgIGZpbGxUZXh0Tm9kZShcInVzZXJuYW1lXCIsIGFjdG9yRGF0YSk7XG4gICAgfVxuICAgIGlmIChtc2cudHlwZSA9PT0gXCJkZXNjcmlwdGlvblwiKSB7XG4gICAgICAgIGZpbGxUZXh0Tm9kZShcImRlc2NyaXB0aW9uXCIsIGFjdG9yRGF0YSk7XG4gICAgfVxuICAgIGlmIChtc2cudHlwZSA9PT0gXCJzbHVnXCIpIHtcbiAgICAgICAgZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uLmZvckVhY2goKG5vZGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAobm9kZS50eXBlID09PSBcIlRFWFRcIiAmJiB0eXBlb2Ygbm9kZS5mb250TmFtZSAhPT0gXCJzeW1ib2xcIikge1xuICAgICAgICAgICAgICAgIGZpZ21hLmxvYWRGb250QXN5bmMobm9kZS5mb250TmFtZSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFjdG9yTmFtZSA9IFthY3RvckRhdGFbaW5kZXhdLnVzZXJuYW1lLCBhY3RvckRhdGFbaW5kZXhdLm5hbWVdO1xuICAgICAgICAgICAgICAgICAgICBub2RlLmNoYXJhY3RlcnMgPSBhY3Rvck5hbWUuam9pbihcIi9cIik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAobXNnLnR5cGUgPT09IFwiaW1hZ2VcIikge1xuICAgICAgICAoKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtpbmRleCwgbm9kZV0gb2YgZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uLmVudHJpZXMoKSkge1xuICAgICAgICAgICAgICAgIGlmIChoYXNGaWxsKG5vZGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlVXJsID0gYWN0b3JEYXRhW2luZGV4XS5waWN0dXJlVXJsO1xuICAgICAgICAgICAgICAgICAgICBmaWdtYS5jcmVhdGVJbWFnZUFzeW5jKGltYWdlVXJsKS50aGVuKChpbWFnZSkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmZpbGxzID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJJTUFHRVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZUhhc2g6IGltYWdlLmhhc2gsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlTW9kZTogXCJGSUxMXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZpZ21hLm5vdGlmeShcIuKdjCBQbGVhc2Ugc2VsZWN0IGEgc2hhcGUgbGF5ZXJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSkoKTtcbiAgICB9XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==