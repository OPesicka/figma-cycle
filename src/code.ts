import { getActor } from "./fetch_actors";

figma.showUI(__html__, {
  width: 480,
  height: 480,
  title: "Cycle",
});

figma.ui.onmessage = async (msg) => {
  const actorData = await getActor(msg.search);

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
    (async () => {
      for (const [index, node] of figma.currentPage.selection.entries()) {
        if (hasFill(node)) {
          const imageUrl = actorData[0].pictureUrl;
          let image8array = await getImageHash(imageUrl);
          let image = figma.createImage(new Uint8Array(image8array));

          //Assign imagehash to fill
          const nodeFills = node;
          nodeFills.fills = [{ type: "IMAGE", scaleMode: "FILL", imageHash: image.hash }];
        }
      }
    })();
  }
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
  return node.type === "RECTANGLE" || node.type === "FRAME" || node.type === "ELLIPSE";
}

function fillTextNode(stringKey, data) {
  figma.currentPage.selection.forEach((node, index) => {
    if (node.type === "TEXT" && typeof node.fontName !== "symbol") {
      figma.loadFontAsync(node.fontName).then(() => {
        node.characters = data[index][stringKey];
      });
    } else {
      figma.notify("❌ Please select a text layer");
    }
  });
}
