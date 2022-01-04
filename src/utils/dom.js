/*!
 * code source: https://marshall-ku.com/web/log/%ec%97%98%eb%a6%ac%ec%8a%a4-sw%ed%8a%b8%eb%9e%99-%ed%8c%80-%ed%94%84%eb%a1%9c%ec%a0%9d%ed%8a%b8-%ec%a4%91%ea%b0%84-%ed%9a%8c%ea%b3%a0
*/

export default function el(nodeName, attributes, ...children) {
  const node =
    nodeName === "fragment"
      ? document.createDocumentFragment()
      : document.createElement(nodeName);

  Object.entries(attributes).forEach(([key, value]) => {
    if (key === "events") {
      Object.entries(value).forEach(([type, listener]) => {
        node.addEventListener(type, listener);
      });
    } else if (key in node) {
      try {
        node[key] = value;
      } catch (err) {
        node.setAttribute(key, value);
      }
    } else {
      node.setAttribute(key, value);
    }
  });

  children.forEach((childNode) => {
    if (typeof childNode === "string") {
      node.appendChild(document.createTextNode(childNode));
    } else {
      node.appendChild(childNode);
    }
  });

  return node;
}

// use hyperscript
el(
  "div",
  { className: "image-content__inner" },
  el("i", { className: "icon-insert_photo" }),
  el(
    "div",
    { className: "image-content__text" },
    "드래그하거나 클릭해서 업로드",
  ),
);
