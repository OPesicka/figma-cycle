export function hasFill(node: SceneNode): node is FrameNode | RectangleNode {
  return node.type === "RECTANGLE" || node.type === "FRAME" || node.type === "ELLIPSE";
}

export function fillTextNode(stringKey, data) {
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
