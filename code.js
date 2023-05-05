/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/actors.ts":
/*!***********************!*\
  !*** ./src/actors.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "actorData": () => (/* binding */ actorData)
/* harmony export */ });
const actorData = [
    {
        name: "web-scraper",
        username: "apify",
        authorName: "Apify",
        description: "Crawls arbitrary websites using the Chrome browser and extracts data from pages using a provided JavaScript code. The actor supports both recursive crawling and lists of URLs and automatically manages concurrency for maximum performance. This is Apify's basic tool for web crawling and scraping.",
        title: "Web Scraper",
        pictureUrl: "https://raw.githubusercontent.com/OPesicka/images/master/actor-images/web-scraper.png",
    },
    {
        name: "google-search-scraper",
        username: "apify",
        authorName: "Apify",
        description: "SERP API to enable you to scrape Google Search Engine Results Pages (SERPs). Extract organic and paid results, ads, queries, People Also Ask, prices, reviews. Supports custom country or language and extraction of custom attributes. Download data as HTML table, JSON, CSV, Excel, XML.",
        title: "Google Search Results Scraper",
        pictureUrl: "https://raw.githubusercontent.com/OPesicka/images/master/actor-images/google-search-scraper.png",
    },
    {
        name: "crawler-google-places",
        username: "drobnikj",
        authorName: "Jakub Drobnik",
        description: "Extend the official Google Maps API and scrape reviews, photos, and popular times from Google Places. Google popular times API and more. Extract data from Google My Business. Download your data as HTML table, JSON, CSV, Excel, XML, and RSS feed.",
        title: "Google Maps Scraper",
        pictureUrl: "https://raw.githubusercontent.com/OPesicka/images/master/actor-images/google.png",
    },
    {
        name: "instagram-scraper",
        username: "jaroslavhejlek",
        authorName: "Jaroslav Hejlek",
        description: "Scrape and download Instagram posts, profiles, places, hashtags, photos, and comments. Supports search queries and URL lists. Download your data as HTML table, JSON, CSV, Excel, XML, and RSS feed.",
        title: "Instagram Scraper",
        pictureUrl: "https://raw.githubusercontent.com/OPesicka/images/master/actor-images/instagram.jpg",
    },
    {
        name: "facebook-pages-scraper",
        username: "pocesar",
        authorName: "Paulo Cesar",
        description: "Facebook scraping tool to crawl and extract data from Facebook Pages. Our fully updated FB scraper downloads posts, likes, comments, reviews, contact details, social media profiles, address, and all public data from Facebook Pages. Download data as JSON, CSV, Excel, XML, and more.",
        pictureUrl: "https://raw.githubusercontent.com/OPesicka/images/master/actor-images/facebook.png",
        title: "Facebook Pages Scraper",
    },
    {
        name: "contact-info-scraper",
        username: "vdrmota",
        authorName: "Vojta Drmota",
        description: "Free contact details scraper to extract and download emails, phone numbers, Facebook, Twitter, LinkedIn, and Instagram profiles from any website. Extract contact information at scale from lists of URLs and download the data as Excel, CSV, JSON, HTML, and XML.",
        title: "Contact Details Scraper",
        pictureUrl: "https://raw.githubusercontent.com/OPesicka/images/master/actor-images/contact-details.jpeg",
    },
    {
        name: "twitter-scraper",
        username: "vdrmota",
        authorName: "Vojta Drmota",
        description: "Scrape any Twitter user profile. Creates an unofficial Twitter API to extract tweets, retweets, replies, favorites, and conversation threads with no Twitter API limits. Download your data as HTML table, JSON, CSV, Excel, XML, and use it in spreadsheets, applications, reports, and databases.",
        pictureUrl: "https://raw.githubusercontent.com/OPesicka/images/master/actor-images/twitter.png",
        title: "Twitter Scraper",
    },
    {
        name: "instagram-profile-scraper",
        username: "zuzka",
        authorName: "Zuzana Pelechová",
        description: "Scrape all Instagram profile info. Add one or more Instagram usernames and extract followers & follows count, URLs, bio, posts, likes, counts, channel, duration, highlight reel, and more. Download structured data in JSON, CSV, XML, Excel, and HTML to use in applications, reports, and spreadsheets.",
        pictureUrl: "https://raw.githubusercontent.com/OPesicka/images/master/actor-images/instagram-profiles.png",
        title: "Instagram Profile Scraper",
    },
    {
        name: "youtube-scraper",
        username: "bernardo",
        authorName: "Bernard O.",
        description: "YouTube crawler and video scraper. Alternative YouTube API with no limits or quotas. Extract and download channel name, likes, number of views, and number of subscribers. Scrape by keyword or URL. Customize your searches with human-friendly date formats. Download your data as HTML table, JSON, CSV,",
        pictureUrl: "https://raw.githubusercontent.com/OPesicka/images/master/actor-images/youtube.png",
        title: "YouTube Scraper",
    },
    {
        name: "hello-world",
        username: "apify",
        authorName: "",
        description: "An example of a simple Apify actor. It takes a greeting message on input, prints it and stores a new message to output.",
        title: "Hello World Example",
        pictureUrl: "https://raw.githubusercontent.com/OPesicka/images/master/actor-images/hello-world.png",
    },
    {
        name: "Amazon-crawler",
        username: "vaclavrut",
        authorName: "",
        description: "Amazon scraper to extract data from Amazon based on keywords and country. Scrape and download product information without using the Amazon API, including reviews, prices, descriptions, and ASIN. Download your data as HTML table, JSON, CSV, Excel, XML.",
        title: "Amazon Scraper",
        pictureUrl: "https://raw.githubusercontent.com/OPesicka/images/master/actor-images/amazon.png",
    },
    {
        name: "zillow-api-scraper",
        username: "petr_cermak",
        authorName: "",
        description: "Our free Zillow scraper lets you extract data about properties for sale and rent on Zillow using the Zillow API, but with no daily call limits. Scrape millions of listings and download your data as HTML, JSON, CSV, Excel, XML, and RSS feed.",
        pictureUrl: "https://raw.githubusercontent.com/OPesicka/images/master/actor-images/zillow-api-scraper.png",
        title: "Zillow Real Estate Scraper",
    },
    {
        name: "screenshot-url",
        username: "apify",
        authorName: "Apify",
        description: "Create a screenshot of a website based on a specified URL. The screenshot is stored as the output in a key-value store. It can be used to monitor web changes regularly after setting up the scheduler.",
        title: "Website Screenshot Generator",
        pictureUrl: "https://raw.githubusercontent.com/OPesicka/images/master/actor-images/screenshot.png",
    },
    {
        name: "gif-scroll-animation",
        username: "glenn",
        authorName: "Glenn Goossens",
        description: "Free tool to automatically create an animated GIF of any scrolling web page. Useful for testing UX, showcasing your work, and capturing any website as a GIF, including clickable elements and animations. Includes settings to adjust speed, wait before scrolling, slow down on-page animations, and more.",
        pictureUrl: "https://raw.githubusercontent.com/OPesicka/images/master/actor-images/gif-scroll.png",
        title: "GIF Scroll Animation",
    },
    {
        name: "cheerio-scraper",
        username: "apify",
        authorName: "Apify",
        description: "Crawls websites using raw HTTP requests, parses the HTML with the Cheerio library, and extracts data from the pages using a Node.js code. Supports both recursive crawling and lists of URLs. This actor is a high-performance alternative to apify/web-scraper for websites that do not require JavaScript.",
        title: "Cheerio Scraper",
        pictureUrl: "https://raw.githubusercontent.com/OPesicka/images/master/actor-images/cheerio.png",
    },
    {
        name: "legacy-phantomjs-crawler",
        username: "apify",
        authorName: "Apify",
        description: "Replacement for the legacy Apify Crawler product with a backward-compatible interface. The actor uses PhantomJS headless browser to recursively crawl websites and extract data from them using a piece of front-end JavaScript code.",
        title: "Legacy PhantomJS Crawler",
        pictureUrl: "https://raw.githubusercontent.com/OPesicka/images/master/actor-images/legacy-phantomjs-crawler.png",
    },
    {
        name: "tripadvisor",
        username: "maxcopell",
        authorName: "Maximillian Copelli",
        description: "Scrape Tripadvisor restaurants and hotels. Get reviews, pricing, contact details, amenities, awards. Download your data as HTML table, JSON, CSV, Excel, XML, and RSS feed.",
        pictureUrl: "https://raw.githubusercontent.com/OPesicka/images/master/actor-images/tripadvisor.png",
        title: "Tripadvisor",
    },
    {
        name: "puppeteer-scraper",
        username: "apify",
        authorName: "Apify",
        description: "Crawls websites with the headless Chrome and Puppeteer library using a provided server-side Node.js code. This crawler is an alternative to apify/web-scraper that gives you finer control over the process. Supports both recursive crawling and list of URLs. Supports login to website.",
        title: "Puppeteer Scraper",
        pictureUrl: "https://raw.githubusercontent.com/OPesicka/images/master/actor-images/puppeteer.png",
    },
    {
        name: "send-mail",
        username: "apify",
        authorName: "Apify",
        description: "The actor automatically sends an email to a specific address. This actor is useful for notifications and reporting. With only 3 lines of javascript code, you'll be on top of your scraping actors and never miss important results or issues.",
        title: "Send Email",
        pictureUrl: "https://raw.githubusercontent.com/OPesicka/images/master/actor-images/email-sender.png",
    },
    {
        name: "content-checker",
        username: "jakubbalada",
        authorName: "Jakub Balada",
        description: "Monitor a website or web page for content changes. Automatically saves before and after screenshots and sends an email notification when content changes are detected.",
        title: "Content Checker",
        pictureUrl: "https://raw.githubusercontent.com/OPesicka/images/master/actor-images/content-checker.png",
    },
];


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
/* harmony import */ var _actors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actors */ "./src/actors.ts");
// This plugin will open a window to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (see documentation).
// This shows the HTML page in "ui.html".
//figma.showUI(__html__);
figma.showUI(__html__, {
    width: 480,
    height: 480,
    title: "Cycle",
});
// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = (msg) => {
    // One way of distinguishing between different types of messages sent from
    // your HTML page is to use an object with a "type" property like this.
    if (msg.type === "actorName") {
        figma.currentPage.selection.forEach((node, index) => {
            if (node.type === "TEXT" && typeof node.fontName !== "symbol") {
                figma.loadFontAsync(node.fontName).then(() => {
                    node.characters = _actors__WEBPACK_IMPORTED_MODULE_0__.actorData[index].title;
                });
            }
        });
    }
    if (msg.type === "authorName") {
        figma.currentPage.selection.forEach((node, index) => {
            if (node.type === "TEXT" && typeof node.fontName !== "symbol") {
                figma.loadFontAsync(node.fontName).then(() => {
                    node.characters = _actors__WEBPACK_IMPORTED_MODULE_0__.actorData[index].authorName;
                });
            }
        });
    }
    if (msg.type === "authorUsername") {
        figma.currentPage.selection.forEach((node, index) => {
            if (node.type === "TEXT" && typeof node.fontName !== "symbol") {
                figma.loadFontAsync(node.fontName).then(() => {
                    node.characters = _actors__WEBPACK_IMPORTED_MODULE_0__.actorData[index].username;
                });
            }
        });
    }
    if (msg.type === "slug") {
        figma.currentPage.selection.forEach((node, index) => {
            if (node.type === "TEXT" && typeof node.fontName !== "symbol") {
                figma.loadFontAsync(node.fontName).then(() => {
                    const actorName = [_actors__WEBPACK_IMPORTED_MODULE_0__.actorData[index].username, _actors__WEBPACK_IMPORTED_MODULE_0__.actorData[index].name];
                    node.characters = actorName.join("/");
                });
            }
        });
    }
    // if (msg.type === "description") {
    //   figma.currentPage.selection.forEach((node, index) => {
    //     if (node.type === "TEXT" && typeof node.fontName !== "symbol") {
    //       figma.loadFontAsync(node.fontName).then(() => {
    //         node.characters = actorData[index].description;
    //       });
    //     }
    //   });
    // }
    if (msg.type === "description") {
        fillTextNode("description");
    }
    if (msg.type === "image") {
        (() => __awaiter(void 0, void 0, void 0, function* () {
            for (const [index, node] of figma.currentPage.selection.entries()) {
                if (hasFill(node)) {
                    const imageUrl = _actors__WEBPACK_IMPORTED_MODULE_0__.actorData[index].pictureUrl;
                    let image8array = yield getImageHash(imageUrl);
                    let image = figma.createImage(new Uint8Array(image8array));
                    //Assign imagehash to fill
                    const nodeFills = node;
                    nodeFills.fills = [
                        { type: "IMAGE", scaleMode: "FILL", imageHash: image.hash },
                    ];
                }
            }
        }))();
    }
    // Make sure to close the plugin when you're done. Otherwise the plugin will
    // keep running, which shows the cancel button at the bottom of the screen.
    // figma.closePlugin();
};
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
    return (node.type === "RECTANGLE" ||
        node.type === "FRAME" ||
        node.type === "ELLIPSE");
}
function fillTextNode(stringKey) {
    figma.currentPage.selection.forEach((node, index) => {
        if (node.type === "TEXT" && typeof node.fontName !== "symbol") {
            figma.loadFontAsync(node.fontName).then(() => {
                node.characters = _actors__WEBPACK_IMPORTED_MODULE_0__.actorData[index][stringKey];
            });
        }
    });
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7VUNqS0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0IsNEJBQTRCLCtEQUErRCxpQkFBaUI7QUFDNUc7QUFDQSxvQ0FBb0MsTUFBTSwrQkFBK0IsWUFBWTtBQUNyRixtQ0FBbUMsTUFBTSxtQ0FBbUMsWUFBWTtBQUN4RixnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7QUFDcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLDhDQUFTO0FBQy9DLGlCQUFpQjtBQUNqQjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLDhDQUFTO0FBQy9DLGlCQUFpQjtBQUNqQjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLDhDQUFTO0FBQy9DLGlCQUFpQjtBQUNqQjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLDhDQUFTLGtCQUFrQiw4Q0FBUztBQUMzRTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyw4Q0FBUztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHlEQUF5RDtBQUNuRjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsNkJBQTZCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyw4Q0FBUztBQUMzQyxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9UZXN0Ly4vc3JjL2FjdG9ycy50cyIsIndlYnBhY2s6Ly9UZXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1Rlc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1Rlc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9UZXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vVGVzdC8uL3NyYy9jb2RlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBhY3RvckRhdGEgPSBbXG4gICAge1xuICAgICAgICBuYW1lOiBcIndlYi1zY3JhcGVyXCIsXG4gICAgICAgIHVzZXJuYW1lOiBcImFwaWZ5XCIsXG4gICAgICAgIGF1dGhvck5hbWU6IFwiQXBpZnlcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQ3Jhd2xzIGFyYml0cmFyeSB3ZWJzaXRlcyB1c2luZyB0aGUgQ2hyb21lIGJyb3dzZXIgYW5kIGV4dHJhY3RzIGRhdGEgZnJvbSBwYWdlcyB1c2luZyBhIHByb3ZpZGVkIEphdmFTY3JpcHQgY29kZS4gVGhlIGFjdG9yIHN1cHBvcnRzIGJvdGggcmVjdXJzaXZlIGNyYXdsaW5nIGFuZCBsaXN0cyBvZiBVUkxzIGFuZCBhdXRvbWF0aWNhbGx5IG1hbmFnZXMgY29uY3VycmVuY3kgZm9yIG1heGltdW0gcGVyZm9ybWFuY2UuIFRoaXMgaXMgQXBpZnkncyBiYXNpYyB0b29sIGZvciB3ZWIgY3Jhd2xpbmcgYW5kIHNjcmFwaW5nLlwiLFxuICAgICAgICB0aXRsZTogXCJXZWIgU2NyYXBlclwiLFxuICAgICAgICBwaWN0dXJlVXJsOiBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9PUGVzaWNrYS9pbWFnZXMvbWFzdGVyL2FjdG9yLWltYWdlcy93ZWItc2NyYXBlci5wbmdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJnb29nbGUtc2VhcmNoLXNjcmFwZXJcIixcbiAgICAgICAgdXNlcm5hbWU6IFwiYXBpZnlcIixcbiAgICAgICAgYXV0aG9yTmFtZTogXCJBcGlmeVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJTRVJQIEFQSSB0byBlbmFibGUgeW91IHRvIHNjcmFwZSBHb29nbGUgU2VhcmNoIEVuZ2luZSBSZXN1bHRzIFBhZ2VzIChTRVJQcykuIEV4dHJhY3Qgb3JnYW5pYyBhbmQgcGFpZCByZXN1bHRzLCBhZHMsIHF1ZXJpZXMsIFBlb3BsZSBBbHNvIEFzaywgcHJpY2VzLCByZXZpZXdzLiBTdXBwb3J0cyBjdXN0b20gY291bnRyeSBvciBsYW5ndWFnZSBhbmQgZXh0cmFjdGlvbiBvZiBjdXN0b20gYXR0cmlidXRlcy4gRG93bmxvYWQgZGF0YSBhcyBIVE1MIHRhYmxlLCBKU09OLCBDU1YsIEV4Y2VsLCBYTUwuXCIsXG4gICAgICAgIHRpdGxlOiBcIkdvb2dsZSBTZWFyY2ggUmVzdWx0cyBTY3JhcGVyXCIsXG4gICAgICAgIHBpY3R1cmVVcmw6IFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL09QZXNpY2thL2ltYWdlcy9tYXN0ZXIvYWN0b3ItaW1hZ2VzL2dvb2dsZS1zZWFyY2gtc2NyYXBlci5wbmdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJjcmF3bGVyLWdvb2dsZS1wbGFjZXNcIixcbiAgICAgICAgdXNlcm5hbWU6IFwiZHJvYm5pa2pcIixcbiAgICAgICAgYXV0aG9yTmFtZTogXCJKYWt1YiBEcm9ibmlrXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkV4dGVuZCB0aGUgb2ZmaWNpYWwgR29vZ2xlIE1hcHMgQVBJIGFuZCBzY3JhcGUgcmV2aWV3cywgcGhvdG9zLCBhbmQgcG9wdWxhciB0aW1lcyBmcm9tIEdvb2dsZSBQbGFjZXMuIEdvb2dsZSBwb3B1bGFyIHRpbWVzIEFQSSBhbmQgbW9yZS4gRXh0cmFjdCBkYXRhIGZyb20gR29vZ2xlIE15IEJ1c2luZXNzLiBEb3dubG9hZCB5b3VyIGRhdGEgYXMgSFRNTCB0YWJsZSwgSlNPTiwgQ1NWLCBFeGNlbCwgWE1MLCBhbmQgUlNTIGZlZWQuXCIsXG4gICAgICAgIHRpdGxlOiBcIkdvb2dsZSBNYXBzIFNjcmFwZXJcIixcbiAgICAgICAgcGljdHVyZVVybDogXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vT1Blc2lja2EvaW1hZ2VzL21hc3Rlci9hY3Rvci1pbWFnZXMvZ29vZ2xlLnBuZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcImluc3RhZ3JhbS1zY3JhcGVyXCIsXG4gICAgICAgIHVzZXJuYW1lOiBcImphcm9zbGF2aGVqbGVrXCIsXG4gICAgICAgIGF1dGhvck5hbWU6IFwiSmFyb3NsYXYgSGVqbGVrXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlNjcmFwZSBhbmQgZG93bmxvYWQgSW5zdGFncmFtIHBvc3RzLCBwcm9maWxlcywgcGxhY2VzLCBoYXNodGFncywgcGhvdG9zLCBhbmQgY29tbWVudHMuIFN1cHBvcnRzIHNlYXJjaCBxdWVyaWVzIGFuZCBVUkwgbGlzdHMuIERvd25sb2FkIHlvdXIgZGF0YSBhcyBIVE1MIHRhYmxlLCBKU09OLCBDU1YsIEV4Y2VsLCBYTUwsIGFuZCBSU1MgZmVlZC5cIixcbiAgICAgICAgdGl0bGU6IFwiSW5zdGFncmFtIFNjcmFwZXJcIixcbiAgICAgICAgcGljdHVyZVVybDogXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vT1Blc2lja2EvaW1hZ2VzL21hc3Rlci9hY3Rvci1pbWFnZXMvaW5zdGFncmFtLmpwZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcImZhY2Vib29rLXBhZ2VzLXNjcmFwZXJcIixcbiAgICAgICAgdXNlcm5hbWU6IFwicG9jZXNhclwiLFxuICAgICAgICBhdXRob3JOYW1lOiBcIlBhdWxvIENlc2FyXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkZhY2Vib29rIHNjcmFwaW5nIHRvb2wgdG8gY3Jhd2wgYW5kIGV4dHJhY3QgZGF0YSBmcm9tIEZhY2Vib29rIFBhZ2VzLiBPdXIgZnVsbHkgdXBkYXRlZCBGQiBzY3JhcGVyIGRvd25sb2FkcyBwb3N0cywgbGlrZXMsIGNvbW1lbnRzLCByZXZpZXdzLCBjb250YWN0IGRldGFpbHMsIHNvY2lhbCBtZWRpYSBwcm9maWxlcywgYWRkcmVzcywgYW5kIGFsbCBwdWJsaWMgZGF0YSBmcm9tIEZhY2Vib29rIFBhZ2VzLiBEb3dubG9hZCBkYXRhIGFzIEpTT04sIENTViwgRXhjZWwsIFhNTCwgYW5kIG1vcmUuXCIsXG4gICAgICAgIHBpY3R1cmVVcmw6IFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL09QZXNpY2thL2ltYWdlcy9tYXN0ZXIvYWN0b3ItaW1hZ2VzL2ZhY2Vib29rLnBuZ1wiLFxuICAgICAgICB0aXRsZTogXCJGYWNlYm9vayBQYWdlcyBTY3JhcGVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiY29udGFjdC1pbmZvLXNjcmFwZXJcIixcbiAgICAgICAgdXNlcm5hbWU6IFwidmRybW90YVwiLFxuICAgICAgICBhdXRob3JOYW1lOiBcIlZvanRhIERybW90YVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJGcmVlIGNvbnRhY3QgZGV0YWlscyBzY3JhcGVyIHRvIGV4dHJhY3QgYW5kIGRvd25sb2FkIGVtYWlscywgcGhvbmUgbnVtYmVycywgRmFjZWJvb2ssIFR3aXR0ZXIsIExpbmtlZEluLCBhbmQgSW5zdGFncmFtIHByb2ZpbGVzIGZyb20gYW55IHdlYnNpdGUuIEV4dHJhY3QgY29udGFjdCBpbmZvcm1hdGlvbiBhdCBzY2FsZSBmcm9tIGxpc3RzIG9mIFVSTHMgYW5kIGRvd25sb2FkIHRoZSBkYXRhIGFzIEV4Y2VsLCBDU1YsIEpTT04sIEhUTUwsIGFuZCBYTUwuXCIsXG4gICAgICAgIHRpdGxlOiBcIkNvbnRhY3QgRGV0YWlscyBTY3JhcGVyXCIsXG4gICAgICAgIHBpY3R1cmVVcmw6IFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL09QZXNpY2thL2ltYWdlcy9tYXN0ZXIvYWN0b3ItaW1hZ2VzL2NvbnRhY3QtZGV0YWlscy5qcGVnXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwidHdpdHRlci1zY3JhcGVyXCIsXG4gICAgICAgIHVzZXJuYW1lOiBcInZkcm1vdGFcIixcbiAgICAgICAgYXV0aG9yTmFtZTogXCJWb2p0YSBEcm1vdGFcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiU2NyYXBlIGFueSBUd2l0dGVyIHVzZXIgcHJvZmlsZS4gQ3JlYXRlcyBhbiB1bm9mZmljaWFsIFR3aXR0ZXIgQVBJIHRvIGV4dHJhY3QgdHdlZXRzLCByZXR3ZWV0cywgcmVwbGllcywgZmF2b3JpdGVzLCBhbmQgY29udmVyc2F0aW9uIHRocmVhZHMgd2l0aCBubyBUd2l0dGVyIEFQSSBsaW1pdHMuIERvd25sb2FkIHlvdXIgZGF0YSBhcyBIVE1MIHRhYmxlLCBKU09OLCBDU1YsIEV4Y2VsLCBYTUwsIGFuZCB1c2UgaXQgaW4gc3ByZWFkc2hlZXRzLCBhcHBsaWNhdGlvbnMsIHJlcG9ydHMsIGFuZCBkYXRhYmFzZXMuXCIsXG4gICAgICAgIHBpY3R1cmVVcmw6IFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL09QZXNpY2thL2ltYWdlcy9tYXN0ZXIvYWN0b3ItaW1hZ2VzL3R3aXR0ZXIucG5nXCIsXG4gICAgICAgIHRpdGxlOiBcIlR3aXR0ZXIgU2NyYXBlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcImluc3RhZ3JhbS1wcm9maWxlLXNjcmFwZXJcIixcbiAgICAgICAgdXNlcm5hbWU6IFwienV6a2FcIixcbiAgICAgICAgYXV0aG9yTmFtZTogXCJadXphbmEgUGVsZWNob3bDoVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJTY3JhcGUgYWxsIEluc3RhZ3JhbSBwcm9maWxlIGluZm8uIEFkZCBvbmUgb3IgbW9yZSBJbnN0YWdyYW0gdXNlcm5hbWVzIGFuZCBleHRyYWN0IGZvbGxvd2VycyAmIGZvbGxvd3MgY291bnQsIFVSTHMsIGJpbywgcG9zdHMsIGxpa2VzLCBjb3VudHMsIGNoYW5uZWwsIGR1cmF0aW9uLCBoaWdobGlnaHQgcmVlbCwgYW5kIG1vcmUuIERvd25sb2FkIHN0cnVjdHVyZWQgZGF0YSBpbiBKU09OLCBDU1YsIFhNTCwgRXhjZWwsIGFuZCBIVE1MIHRvIHVzZSBpbiBhcHBsaWNhdGlvbnMsIHJlcG9ydHMsIGFuZCBzcHJlYWRzaGVldHMuXCIsXG4gICAgICAgIHBpY3R1cmVVcmw6IFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL09QZXNpY2thL2ltYWdlcy9tYXN0ZXIvYWN0b3ItaW1hZ2VzL2luc3RhZ3JhbS1wcm9maWxlcy5wbmdcIixcbiAgICAgICAgdGl0bGU6IFwiSW5zdGFncmFtIFByb2ZpbGUgU2NyYXBlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcInlvdXR1YmUtc2NyYXBlclwiLFxuICAgICAgICB1c2VybmFtZTogXCJiZXJuYXJkb1wiLFxuICAgICAgICBhdXRob3JOYW1lOiBcIkJlcm5hcmQgTy5cIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiWW91VHViZSBjcmF3bGVyIGFuZCB2aWRlbyBzY3JhcGVyLiBBbHRlcm5hdGl2ZSBZb3VUdWJlIEFQSSB3aXRoIG5vIGxpbWl0cyBvciBxdW90YXMuIEV4dHJhY3QgYW5kIGRvd25sb2FkIGNoYW5uZWwgbmFtZSwgbGlrZXMsIG51bWJlciBvZiB2aWV3cywgYW5kIG51bWJlciBvZiBzdWJzY3JpYmVycy4gU2NyYXBlIGJ5IGtleXdvcmQgb3IgVVJMLiBDdXN0b21pemUgeW91ciBzZWFyY2hlcyB3aXRoIGh1bWFuLWZyaWVuZGx5IGRhdGUgZm9ybWF0cy4gRG93bmxvYWQgeW91ciBkYXRhIGFzIEhUTUwgdGFibGUsIEpTT04sIENTVixcIixcbiAgICAgICAgcGljdHVyZVVybDogXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vT1Blc2lja2EvaW1hZ2VzL21hc3Rlci9hY3Rvci1pbWFnZXMveW91dHViZS5wbmdcIixcbiAgICAgICAgdGl0bGU6IFwiWW91VHViZSBTY3JhcGVyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiaGVsbG8td29ybGRcIixcbiAgICAgICAgdXNlcm5hbWU6IFwiYXBpZnlcIixcbiAgICAgICAgYXV0aG9yTmFtZTogXCJcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQW4gZXhhbXBsZSBvZiBhIHNpbXBsZSBBcGlmeSBhY3Rvci4gSXQgdGFrZXMgYSBncmVldGluZyBtZXNzYWdlIG9uIGlucHV0LCBwcmludHMgaXQgYW5kIHN0b3JlcyBhIG5ldyBtZXNzYWdlIHRvIG91dHB1dC5cIixcbiAgICAgICAgdGl0bGU6IFwiSGVsbG8gV29ybGQgRXhhbXBsZVwiLFxuICAgICAgICBwaWN0dXJlVXJsOiBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9PUGVzaWNrYS9pbWFnZXMvbWFzdGVyL2FjdG9yLWltYWdlcy9oZWxsby13b3JsZC5wbmdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJBbWF6b24tY3Jhd2xlclwiLFxuICAgICAgICB1c2VybmFtZTogXCJ2YWNsYXZydXRcIixcbiAgICAgICAgYXV0aG9yTmFtZTogXCJcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQW1hem9uIHNjcmFwZXIgdG8gZXh0cmFjdCBkYXRhIGZyb20gQW1hem9uIGJhc2VkIG9uIGtleXdvcmRzIGFuZCBjb3VudHJ5LiBTY3JhcGUgYW5kIGRvd25sb2FkIHByb2R1Y3QgaW5mb3JtYXRpb24gd2l0aG91dCB1c2luZyB0aGUgQW1hem9uIEFQSSwgaW5jbHVkaW5nIHJldmlld3MsIHByaWNlcywgZGVzY3JpcHRpb25zLCBhbmQgQVNJTi4gRG93bmxvYWQgeW91ciBkYXRhIGFzIEhUTUwgdGFibGUsIEpTT04sIENTViwgRXhjZWwsIFhNTC5cIixcbiAgICAgICAgdGl0bGU6IFwiQW1hem9uIFNjcmFwZXJcIixcbiAgICAgICAgcGljdHVyZVVybDogXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vT1Blc2lja2EvaW1hZ2VzL21hc3Rlci9hY3Rvci1pbWFnZXMvYW1hem9uLnBuZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcInppbGxvdy1hcGktc2NyYXBlclwiLFxuICAgICAgICB1c2VybmFtZTogXCJwZXRyX2Nlcm1ha1wiLFxuICAgICAgICBhdXRob3JOYW1lOiBcIlwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJPdXIgZnJlZSBaaWxsb3cgc2NyYXBlciBsZXRzIHlvdSBleHRyYWN0IGRhdGEgYWJvdXQgcHJvcGVydGllcyBmb3Igc2FsZSBhbmQgcmVudCBvbiBaaWxsb3cgdXNpbmcgdGhlIFppbGxvdyBBUEksIGJ1dCB3aXRoIG5vIGRhaWx5IGNhbGwgbGltaXRzLiBTY3JhcGUgbWlsbGlvbnMgb2YgbGlzdGluZ3MgYW5kIGRvd25sb2FkIHlvdXIgZGF0YSBhcyBIVE1MLCBKU09OLCBDU1YsIEV4Y2VsLCBYTUwsIGFuZCBSU1MgZmVlZC5cIixcbiAgICAgICAgcGljdHVyZVVybDogXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vT1Blc2lja2EvaW1hZ2VzL21hc3Rlci9hY3Rvci1pbWFnZXMvemlsbG93LWFwaS1zY3JhcGVyLnBuZ1wiLFxuICAgICAgICB0aXRsZTogXCJaaWxsb3cgUmVhbCBFc3RhdGUgU2NyYXBlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcInNjcmVlbnNob3QtdXJsXCIsXG4gICAgICAgIHVzZXJuYW1lOiBcImFwaWZ5XCIsXG4gICAgICAgIGF1dGhvck5hbWU6IFwiQXBpZnlcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQ3JlYXRlIGEgc2NyZWVuc2hvdCBvZiBhIHdlYnNpdGUgYmFzZWQgb24gYSBzcGVjaWZpZWQgVVJMLiBUaGUgc2NyZWVuc2hvdCBpcyBzdG9yZWQgYXMgdGhlIG91dHB1dCBpbiBhIGtleS12YWx1ZSBzdG9yZS4gSXQgY2FuIGJlIHVzZWQgdG8gbW9uaXRvciB3ZWIgY2hhbmdlcyByZWd1bGFybHkgYWZ0ZXIgc2V0dGluZyB1cCB0aGUgc2NoZWR1bGVyLlwiLFxuICAgICAgICB0aXRsZTogXCJXZWJzaXRlIFNjcmVlbnNob3QgR2VuZXJhdG9yXCIsXG4gICAgICAgIHBpY3R1cmVVcmw6IFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL09QZXNpY2thL2ltYWdlcy9tYXN0ZXIvYWN0b3ItaW1hZ2VzL3NjcmVlbnNob3QucG5nXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiZ2lmLXNjcm9sbC1hbmltYXRpb25cIixcbiAgICAgICAgdXNlcm5hbWU6IFwiZ2xlbm5cIixcbiAgICAgICAgYXV0aG9yTmFtZTogXCJHbGVubiBHb29zc2Vuc1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJGcmVlIHRvb2wgdG8gYXV0b21hdGljYWxseSBjcmVhdGUgYW4gYW5pbWF0ZWQgR0lGIG9mIGFueSBzY3JvbGxpbmcgd2ViIHBhZ2UuIFVzZWZ1bCBmb3IgdGVzdGluZyBVWCwgc2hvd2Nhc2luZyB5b3VyIHdvcmssIGFuZCBjYXB0dXJpbmcgYW55IHdlYnNpdGUgYXMgYSBHSUYsIGluY2x1ZGluZyBjbGlja2FibGUgZWxlbWVudHMgYW5kIGFuaW1hdGlvbnMuIEluY2x1ZGVzIHNldHRpbmdzIHRvIGFkanVzdCBzcGVlZCwgd2FpdCBiZWZvcmUgc2Nyb2xsaW5nLCBzbG93IGRvd24gb24tcGFnZSBhbmltYXRpb25zLCBhbmQgbW9yZS5cIixcbiAgICAgICAgcGljdHVyZVVybDogXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vT1Blc2lja2EvaW1hZ2VzL21hc3Rlci9hY3Rvci1pbWFnZXMvZ2lmLXNjcm9sbC5wbmdcIixcbiAgICAgICAgdGl0bGU6IFwiR0lGIFNjcm9sbCBBbmltYXRpb25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJjaGVlcmlvLXNjcmFwZXJcIixcbiAgICAgICAgdXNlcm5hbWU6IFwiYXBpZnlcIixcbiAgICAgICAgYXV0aG9yTmFtZTogXCJBcGlmeVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJDcmF3bHMgd2Vic2l0ZXMgdXNpbmcgcmF3IEhUVFAgcmVxdWVzdHMsIHBhcnNlcyB0aGUgSFRNTCB3aXRoIHRoZSBDaGVlcmlvIGxpYnJhcnksIGFuZCBleHRyYWN0cyBkYXRhIGZyb20gdGhlIHBhZ2VzIHVzaW5nIGEgTm9kZS5qcyBjb2RlLiBTdXBwb3J0cyBib3RoIHJlY3Vyc2l2ZSBjcmF3bGluZyBhbmQgbGlzdHMgb2YgVVJMcy4gVGhpcyBhY3RvciBpcyBhIGhpZ2gtcGVyZm9ybWFuY2UgYWx0ZXJuYXRpdmUgdG8gYXBpZnkvd2ViLXNjcmFwZXIgZm9yIHdlYnNpdGVzIHRoYXQgZG8gbm90IHJlcXVpcmUgSmF2YVNjcmlwdC5cIixcbiAgICAgICAgdGl0bGU6IFwiQ2hlZXJpbyBTY3JhcGVyXCIsXG4gICAgICAgIHBpY3R1cmVVcmw6IFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL09QZXNpY2thL2ltYWdlcy9tYXN0ZXIvYWN0b3ItaW1hZ2VzL2NoZWVyaW8ucG5nXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwibGVnYWN5LXBoYW50b21qcy1jcmF3bGVyXCIsXG4gICAgICAgIHVzZXJuYW1lOiBcImFwaWZ5XCIsXG4gICAgICAgIGF1dGhvck5hbWU6IFwiQXBpZnlcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiUmVwbGFjZW1lbnQgZm9yIHRoZSBsZWdhY3kgQXBpZnkgQ3Jhd2xlciBwcm9kdWN0IHdpdGggYSBiYWNrd2FyZC1jb21wYXRpYmxlIGludGVyZmFjZS4gVGhlIGFjdG9yIHVzZXMgUGhhbnRvbUpTIGhlYWRsZXNzIGJyb3dzZXIgdG8gcmVjdXJzaXZlbHkgY3Jhd2wgd2Vic2l0ZXMgYW5kIGV4dHJhY3QgZGF0YSBmcm9tIHRoZW0gdXNpbmcgYSBwaWVjZSBvZiBmcm9udC1lbmQgSmF2YVNjcmlwdCBjb2RlLlwiLFxuICAgICAgICB0aXRsZTogXCJMZWdhY3kgUGhhbnRvbUpTIENyYXdsZXJcIixcbiAgICAgICAgcGljdHVyZVVybDogXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vT1Blc2lja2EvaW1hZ2VzL21hc3Rlci9hY3Rvci1pbWFnZXMvbGVnYWN5LXBoYW50b21qcy1jcmF3bGVyLnBuZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcInRyaXBhZHZpc29yXCIsXG4gICAgICAgIHVzZXJuYW1lOiBcIm1heGNvcGVsbFwiLFxuICAgICAgICBhdXRob3JOYW1lOiBcIk1heGltaWxsaWFuIENvcGVsbGlcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiU2NyYXBlIFRyaXBhZHZpc29yIHJlc3RhdXJhbnRzIGFuZCBob3RlbHMuIEdldCByZXZpZXdzLCBwcmljaW5nLCBjb250YWN0IGRldGFpbHMsIGFtZW5pdGllcywgYXdhcmRzLiBEb3dubG9hZCB5b3VyIGRhdGEgYXMgSFRNTCB0YWJsZSwgSlNPTiwgQ1NWLCBFeGNlbCwgWE1MLCBhbmQgUlNTIGZlZWQuXCIsXG4gICAgICAgIHBpY3R1cmVVcmw6IFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL09QZXNpY2thL2ltYWdlcy9tYXN0ZXIvYWN0b3ItaW1hZ2VzL3RyaXBhZHZpc29yLnBuZ1wiLFxuICAgICAgICB0aXRsZTogXCJUcmlwYWR2aXNvclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcInB1cHBldGVlci1zY3JhcGVyXCIsXG4gICAgICAgIHVzZXJuYW1lOiBcImFwaWZ5XCIsXG4gICAgICAgIGF1dGhvck5hbWU6IFwiQXBpZnlcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQ3Jhd2xzIHdlYnNpdGVzIHdpdGggdGhlIGhlYWRsZXNzIENocm9tZSBhbmQgUHVwcGV0ZWVyIGxpYnJhcnkgdXNpbmcgYSBwcm92aWRlZCBzZXJ2ZXItc2lkZSBOb2RlLmpzIGNvZGUuIFRoaXMgY3Jhd2xlciBpcyBhbiBhbHRlcm5hdGl2ZSB0byBhcGlmeS93ZWItc2NyYXBlciB0aGF0IGdpdmVzIHlvdSBmaW5lciBjb250cm9sIG92ZXIgdGhlIHByb2Nlc3MuIFN1cHBvcnRzIGJvdGggcmVjdXJzaXZlIGNyYXdsaW5nIGFuZCBsaXN0IG9mIFVSTHMuIFN1cHBvcnRzIGxvZ2luIHRvIHdlYnNpdGUuXCIsXG4gICAgICAgIHRpdGxlOiBcIlB1cHBldGVlciBTY3JhcGVyXCIsXG4gICAgICAgIHBpY3R1cmVVcmw6IFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL09QZXNpY2thL2ltYWdlcy9tYXN0ZXIvYWN0b3ItaW1hZ2VzL3B1cHBldGVlci5wbmdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJzZW5kLW1haWxcIixcbiAgICAgICAgdXNlcm5hbWU6IFwiYXBpZnlcIixcbiAgICAgICAgYXV0aG9yTmFtZTogXCJBcGlmeVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgYWN0b3IgYXV0b21hdGljYWxseSBzZW5kcyBhbiBlbWFpbCB0byBhIHNwZWNpZmljIGFkZHJlc3MuIFRoaXMgYWN0b3IgaXMgdXNlZnVsIGZvciBub3RpZmljYXRpb25zIGFuZCByZXBvcnRpbmcuIFdpdGggb25seSAzIGxpbmVzIG9mIGphdmFzY3JpcHQgY29kZSwgeW91J2xsIGJlIG9uIHRvcCBvZiB5b3VyIHNjcmFwaW5nIGFjdG9ycyBhbmQgbmV2ZXIgbWlzcyBpbXBvcnRhbnQgcmVzdWx0cyBvciBpc3N1ZXMuXCIsXG4gICAgICAgIHRpdGxlOiBcIlNlbmQgRW1haWxcIixcbiAgICAgICAgcGljdHVyZVVybDogXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vT1Blc2lja2EvaW1hZ2VzL21hc3Rlci9hY3Rvci1pbWFnZXMvZW1haWwtc2VuZGVyLnBuZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcImNvbnRlbnQtY2hlY2tlclwiLFxuICAgICAgICB1c2VybmFtZTogXCJqYWt1YmJhbGFkYVwiLFxuICAgICAgICBhdXRob3JOYW1lOiBcIkpha3ViIEJhbGFkYVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJNb25pdG9yIGEgd2Vic2l0ZSBvciB3ZWIgcGFnZSBmb3IgY29udGVudCBjaGFuZ2VzLiBBdXRvbWF0aWNhbGx5IHNhdmVzIGJlZm9yZSBhbmQgYWZ0ZXIgc2NyZWVuc2hvdHMgYW5kIHNlbmRzIGFuIGVtYWlsIG5vdGlmaWNhdGlvbiB3aGVuIGNvbnRlbnQgY2hhbmdlcyBhcmUgZGV0ZWN0ZWQuXCIsXG4gICAgICAgIHRpdGxlOiBcIkNvbnRlbnQgQ2hlY2tlclwiLFxuICAgICAgICBwaWN0dXJlVXJsOiBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9PUGVzaWNrYS9pbWFnZXMvbWFzdGVyL2FjdG9yLWltYWdlcy9jb250ZW50LWNoZWNrZXIucG5nXCIsXG4gICAgfSxcbl07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIFRoaXMgcGx1Z2luIHdpbGwgb3BlbiBhIHdpbmRvdyB0byBwcm9tcHQgdGhlIHVzZXIgdG8gZW50ZXIgYSBudW1iZXIsIGFuZFxuLy8gaXQgd2lsbCB0aGVuIGNyZWF0ZSB0aGF0IG1hbnkgcmVjdGFuZ2xlcyBvbiB0aGUgc2NyZWVuLlxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBhY3RvckRhdGEgfSBmcm9tIFwiLi9hY3RvcnNcIjtcbi8vIFRoaXMgZmlsZSBob2xkcyB0aGUgbWFpbiBjb2RlIGZvciB0aGUgcGx1Z2lucy4gSXQgaGFzIGFjY2VzcyB0byB0aGUgKmRvY3VtZW50Ki5cbi8vIFlvdSBjYW4gYWNjZXNzIGJyb3dzZXIgQVBJcyBpbiB0aGUgPHNjcmlwdD4gdGFnIGluc2lkZSBcInVpLmh0bWxcIiB3aGljaCBoYXMgYVxuLy8gZnVsbCBicm93c2VyIGVudmlyb25tZW50IChzZWUgZG9jdW1lbnRhdGlvbikuXG4vLyBUaGlzIHNob3dzIHRoZSBIVE1MIHBhZ2UgaW4gXCJ1aS5odG1sXCIuXG4vL2ZpZ21hLnNob3dVSShfX2h0bWxfXyk7XG5maWdtYS5zaG93VUkoX19odG1sX18sIHtcbiAgICB3aWR0aDogNDgwLFxuICAgIGhlaWdodDogNDgwLFxuICAgIHRpdGxlOiBcIkN5Y2xlXCIsXG59KTtcbi8vIENhbGxzIHRvIFwicGFyZW50LnBvc3RNZXNzYWdlXCIgZnJvbSB3aXRoaW4gdGhlIEhUTUwgcGFnZSB3aWxsIHRyaWdnZXIgdGhpc1xuLy8gY2FsbGJhY2suIFRoZSBjYWxsYmFjayB3aWxsIGJlIHBhc3NlZCB0aGUgXCJwbHVnaW5NZXNzYWdlXCIgcHJvcGVydHkgb2YgdGhlXG4vLyBwb3N0ZWQgbWVzc2FnZS5cbmZpZ21hLnVpLm9ubWVzc2FnZSA9IChtc2cpID0+IHtcbiAgICAvLyBPbmUgd2F5IG9mIGRpc3Rpbmd1aXNoaW5nIGJldHdlZW4gZGlmZmVyZW50IHR5cGVzIG9mIG1lc3NhZ2VzIHNlbnQgZnJvbVxuICAgIC8vIHlvdXIgSFRNTCBwYWdlIGlzIHRvIHVzZSBhbiBvYmplY3Qgd2l0aCBhIFwidHlwZVwiIHByb3BlcnR5IGxpa2UgdGhpcy5cbiAgICBpZiAobXNnLnR5cGUgPT09IFwiYWN0b3JOYW1lXCIpIHtcbiAgICAgICAgZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uLmZvckVhY2goKG5vZGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAobm9kZS50eXBlID09PSBcIlRFWFRcIiAmJiB0eXBlb2Ygbm9kZS5mb250TmFtZSAhPT0gXCJzeW1ib2xcIikge1xuICAgICAgICAgICAgICAgIGZpZ21hLmxvYWRGb250QXN5bmMobm9kZS5mb250TmFtZSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuY2hhcmFjdGVycyA9IGFjdG9yRGF0YVtpbmRleF0udGl0bGU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAobXNnLnR5cGUgPT09IFwiYXV0aG9yTmFtZVwiKSB7XG4gICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbi5mb3JFYWNoKChub2RlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKG5vZGUudHlwZSA9PT0gXCJURVhUXCIgJiYgdHlwZW9mIG5vZGUuZm9udE5hbWUgIT09IFwic3ltYm9sXCIpIHtcbiAgICAgICAgICAgICAgICBmaWdtYS5sb2FkRm9udEFzeW5jKG5vZGUuZm9udE5hbWUpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBub2RlLmNoYXJhY3RlcnMgPSBhY3RvckRhdGFbaW5kZXhdLmF1dGhvck5hbWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAobXNnLnR5cGUgPT09IFwiYXV0aG9yVXNlcm5hbWVcIikge1xuICAgICAgICBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24uZm9yRWFjaCgobm9kZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChub2RlLnR5cGUgPT09IFwiVEVYVFwiICYmIHR5cGVvZiBub2RlLmZvbnROYW1lICE9PSBcInN5bWJvbFwiKSB7XG4gICAgICAgICAgICAgICAgZmlnbWEubG9hZEZvbnRBc3luYyhub2RlLmZvbnROYW1lKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5jaGFyYWN0ZXJzID0gYWN0b3JEYXRhW2luZGV4XS51c2VybmFtZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChtc2cudHlwZSA9PT0gXCJzbHVnXCIpIHtcbiAgICAgICAgZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uLmZvckVhY2goKG5vZGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAobm9kZS50eXBlID09PSBcIlRFWFRcIiAmJiB0eXBlb2Ygbm9kZS5mb250TmFtZSAhPT0gXCJzeW1ib2xcIikge1xuICAgICAgICAgICAgICAgIGZpZ21hLmxvYWRGb250QXN5bmMobm9kZS5mb250TmFtZSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFjdG9yTmFtZSA9IFthY3RvckRhdGFbaW5kZXhdLnVzZXJuYW1lLCBhY3RvckRhdGFbaW5kZXhdLm5hbWVdO1xuICAgICAgICAgICAgICAgICAgICBub2RlLmNoYXJhY3RlcnMgPSBhY3Rvck5hbWUuam9pbihcIi9cIik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBpZiAobXNnLnR5cGUgPT09IFwiZGVzY3JpcHRpb25cIikge1xuICAgIC8vICAgZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uLmZvckVhY2goKG5vZGUsIGluZGV4KSA9PiB7XG4gICAgLy8gICAgIGlmIChub2RlLnR5cGUgPT09IFwiVEVYVFwiICYmIHR5cGVvZiBub2RlLmZvbnROYW1lICE9PSBcInN5bWJvbFwiKSB7XG4gICAgLy8gICAgICAgZmlnbWEubG9hZEZvbnRBc3luYyhub2RlLmZvbnROYW1lKS50aGVuKCgpID0+IHtcbiAgICAvLyAgICAgICAgIG5vZGUuY2hhcmFjdGVycyA9IGFjdG9yRGF0YVtpbmRleF0uZGVzY3JpcHRpb247XG4gICAgLy8gICAgICAgfSk7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH0pO1xuICAgIC8vIH1cbiAgICBpZiAobXNnLnR5cGUgPT09IFwiZGVzY3JpcHRpb25cIikge1xuICAgICAgICBmaWxsVGV4dE5vZGUoXCJkZXNjcmlwdGlvblwiKTtcbiAgICB9XG4gICAgaWYgKG1zZy50eXBlID09PSBcImltYWdlXCIpIHtcbiAgICAgICAgKCgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBbaW5kZXgsIG5vZGVdIG9mIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbi5lbnRyaWVzKCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoaGFzRmlsbChub2RlKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWFnZVVybCA9IGFjdG9yRGF0YVtpbmRleF0ucGljdHVyZVVybDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGltYWdlOGFycmF5ID0geWllbGQgZ2V0SW1hZ2VIYXNoKGltYWdlVXJsKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGltYWdlID0gZmlnbWEuY3JlYXRlSW1hZ2UobmV3IFVpbnQ4QXJyYXkoaW1hZ2U4YXJyYXkpKTtcbiAgICAgICAgICAgICAgICAgICAgLy9Bc3NpZ24gaW1hZ2VoYXNoIHRvIGZpbGxcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm9kZUZpbGxzID0gbm9kZTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZUZpbGxzLmZpbGxzID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgeyB0eXBlOiBcIklNQUdFXCIsIHNjYWxlTW9kZTogXCJGSUxMXCIsIGltYWdlSGFzaDogaW1hZ2UuaGFzaCB9LFxuICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpKCk7XG4gICAgfVxuICAgIC8vIE1ha2Ugc3VyZSB0byBjbG9zZSB0aGUgcGx1Z2luIHdoZW4geW91J3JlIGRvbmUuIE90aGVyd2lzZSB0aGUgcGx1Z2luIHdpbGxcbiAgICAvLyBrZWVwIHJ1bm5pbmcsIHdoaWNoIHNob3dzIHRoZSBjYW5jZWwgYnV0dG9uIGF0IHRoZSBib3R0b20gb2YgdGhlIHNjcmVlbi5cbiAgICAvLyBmaWdtYS5jbG9zZVBsdWdpbigpO1xufTtcbi8vIFRha2VzIFVSTCBvZiBhbiBpbWFnZSBhbmQgZG93bmxvYWRzIGl0IGFuZCB0dXJucyBpdCBpbnRvIGEgYmxvYlxuZnVuY3Rpb24gZ2V0SW1hZ2VIYXNoKGltYWdlVXJsKSB7XG4gICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoeyB0eXBlOiBcImxvYWRJbWFnZVwiLCBpbWFnZVVybCB9KTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgZmlnbWEudWkub25jZShcIm1lc3NhZ2VcIiwgKG1zZykgPT4ge1xuICAgICAgICAgICAgaWYgKG1zZy50eXBlID09PSBcImJsb2JSZXN1bHRcIikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidm9qdGFcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2VBcnJheUJ1ZmZlciA9IG1zZy5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShpbWFnZUFycmF5QnVmZmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBoYXNGaWxsKG5vZGUpIHtcbiAgICByZXR1cm4gKG5vZGUudHlwZSA9PT0gXCJSRUNUQU5HTEVcIiB8fFxuICAgICAgICBub2RlLnR5cGUgPT09IFwiRlJBTUVcIiB8fFxuICAgICAgICBub2RlLnR5cGUgPT09IFwiRUxMSVBTRVwiKTtcbn1cbmZ1bmN0aW9uIGZpbGxUZXh0Tm9kZShzdHJpbmdLZXkpIHtcbiAgICBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24uZm9yRWFjaCgobm9kZSwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKG5vZGUudHlwZSA9PT0gXCJURVhUXCIgJiYgdHlwZW9mIG5vZGUuZm9udE5hbWUgIT09IFwic3ltYm9sXCIpIHtcbiAgICAgICAgICAgIGZpZ21hLmxvYWRGb250QXN5bmMobm9kZS5mb250TmFtZSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5jaGFyYWN0ZXJzID0gYWN0b3JEYXRhW2luZGV4XVtzdHJpbmdLZXldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==