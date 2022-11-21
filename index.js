const DOMSelectors = {
  button: document.getElementById("btn"),
  box: document.getElementById("container-box"),
  input1: document.querySelector("#input1"),
  input2: document.querySelector("#input2"),
  inputs: document.querySelectorAll(".input"),
};
console.log(DOMSelectors.inputs);
DOMSelectors.button.addEventListener(
  "click",
  function (Inject) {
    let input1 = DOMSelectors.input1.value;
    let input2 = DOMSelectors.input2.value;
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<p>${input1} from ${input2}</p>`
    );
  },
  function (Clear) {
    DOMSelectors.inputs.forEach((inputs) => {
      DOMSelectors.inputs.values = null;
    });
  }
);
