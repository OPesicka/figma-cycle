// This plugin will open a window to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.

import { actorData } from "./actors";

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
          node.characters = actorData[index].title;
        });
      }
    });
  }

  if (msg.type === "authorName") {
    figma.currentPage.selection.forEach((node, index) => {
      if (node.type === "TEXT" && typeof node.fontName !== "symbol") {
        figma.loadFontAsync(node.fontName).then(() => {
          node.characters = actorData[index].authorName;
        });
      }
    });
  }

  if (msg.type === "authorUsername") {
    figma.currentPage.selection.forEach((node, index) => {
      if (node.type === "TEXT" && typeof node.fontName !== "symbol") {
        figma.loadFontAsync(node.fontName).then(() => {
          node.characters = actorData[index].username;
        });
      }
    });
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
    (async () => {
      for (const [index, node] of figma.currentPage.selection.entries()) {
        if (hasFill(node)) {
          const imageUrl = actorData[index].pictureUrl;
          let image8array = await getImageHash(imageUrl);
          let image = figma.createImage(new Uint8Array(image8array));

          //Assign imagehash to fill
          const nodeFills = node;
          nodeFills.fills = [
            { type: "IMAGE", scaleMode: "FILL", imageHash: image.hash },
          ];
        }
      }
    })();
  }

  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.
  // figma.closePlugin();
};

// Takes URL of an image and downloads it and turns it into a blob
function getImageHash(imageUrl) {
  figma.ui.postMessage({ type: "loadImage", imageUrl });
  return new Promise<ArrayBuffer>((resolve) => {
    figma.ui.once("message", (msg) => {
      if (msg.type === "blobResult") {
        console.log("vojta");
        const imageArrayBuffer = msg.result as ArrayBuffer;
        resolve(imageArrayBuffer);
      }
    });
  });
}

function hasFill(node: SceneNode): node is FrameNode | RectangleNode {
  return (
    node.type === "RECTANGLE" ||
    node.type === "FRAME" ||
    node.type === "ELLIPSE"
  );
}

function fillTextNode(stringKey) {
  figma.currentPage.selection.forEach((node, index) => {
    if (node.type === "TEXT" && typeof node.fontName !== "symbol") {
      figma.loadFontAsync(node.fontName).then(() => {
        node.characters = actorData[index][stringKey];
      });
    }
  });
}
