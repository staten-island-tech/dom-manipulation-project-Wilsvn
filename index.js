const DOMSelectors = {
  button: document.getElementById("btn"),
  button2: document.getElementById("btn2"),
  box: document.getElementById("result-box"),
  input1: document.querySelector("#input1"),
  input2: document.querySelector("#input2"),
  input3: document.querySelector("#input3"),
  inputs: document.querySelectorAll(".input"),
};

DOMSelectors.button.addEventListener(
  "click",
  function (Inject) {
    let input1 = DOMSelectors.input1.value;
    let input2 = DOMSelectors.input2.value;
    let input3 = DOMSelectors.input3.value;
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<p>${input1} from ${input2}, served in a ${input3}</p>`
    );
    DOMSelectors.input1.value = "";
    DOMSelectors.input2.value = "";
    DOMSelectors.input3.value = "";
  })
  DOMSelectors.button2.addEventListener(
    "click",
    function (clear) {
      
    }
  )
