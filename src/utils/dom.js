/*!
 * code source: https://kdt-gitlab.elice.io/sw-001-project/team2/have-u-tried-this/-/blob/master/frontend/src/ts/utils/dom.ts
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
