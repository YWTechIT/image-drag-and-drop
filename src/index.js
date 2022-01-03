import changeEvent from "./js/changeEvent";
import isValidation from "./js/isValidation";
import handleUpdate from "./js/handleUpdate";
import "./css/reset.css";
import "./css/style.css";
import "./css/upload.css";

const input = document.getElementById("input");
const initLabel = document.getElementById("label");

input.addEventListener("change", (event) => {
  const files = changeEvent(event);
  const isValidFiles = isValidation(files);
  handleUpdate(isValidFiles);
});

initLabel.addEventListener("mouseover", (event) => {
  event.preventDefault();
  const label = document.getElementById("label");
  label?.classList.add("label--hover");
});

initLabel.addEventListener("mouseout", (event) => {
  event.preventDefault();
  const label = document.getElementById("label");
  label?.classList.remove("label--hover");
});

initLabel.addEventListener("dragover", (event) => {
  event.preventDefault();
  const label = document.getElementById("label");
  label?.classList.add("label--hover");
});

initLabel.addEventListener("dragleave", (event) => {
  event.preventDefault();
  const label = document.getElementById("label");
  label?.classList.remove("label--hover");
});

initLabel.addEventListener("drop", (event) => {
  event.preventDefault();
  const label = document.getElementById("label");
  const files = event.dataTransfer?.files;
  const isValidFiles = isValidation(files);
  handleUpdate(isValidFiles);
  label?.classList.remove("label--hover");
});
