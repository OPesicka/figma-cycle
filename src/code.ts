import { fetchActors } from "./fetch_actors";
import { fillTextNode, hasFill } from "./help";

figma.showUI(__html__, {
  width: 480,
  height: 480,
  title: "Cycle",
});

figma.ui.onmessage = async (msg) => {
  const actorData = await fetchActors(msg.search ? msg.search : " ");

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

  if (msg.type === "image") {
    (async () => {
      for (const [index, node] of figma.currentPage.selection.entries()) {
        if (hasFill(node)) {
          const imageUrl = actorData[index].pictureUrl;

          figma.createImageAsync(imageUrl).then(async (image: Image) => {
            node.fills = [
              {
                type: "IMAGE",
                imageHash: image.hash,
                scaleMode: "FILL",
              },
            ];
          });
        } else {
          figma.notify("❌ Please select a shape layer");
        }
      }
    })();
  }
};
