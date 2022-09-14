let SELECTION = "";
const arraySize = document.querySelector("#array_size");
const sortSelect = document.querySelector(".form-select");
const startBtn = document.querySelector(".startSort");

sortSelect.addEventListener("change", function (e) {
  SELECTION = e.target.value;
});

startBtn.addEventListener("click", function () {
  switch (SELECTION) {
    case "selectionSort":
      selectionSort();
      break;
    case "mergeSort":
      mergeSort();
      break;
    case "bubbleSort":
      bubbleSort();
      break;
    case "insertionSort":
      insertionSort();
      break;
    default:
      return;
  }
});

function disableSortingBtn() {
  sortSelect.disabled = true;
}

function enableSortingBtn() {
  sortSelect.disabled = false;
}

function disableSizeSlider() {
  arraySize.disabled = true;
}

function enableSizeSlider() {
  arraySize.disabled = false;
}

function disableNewArray() {
  document.querySelector(".newArray").disabled = true;
}

function enableNewArray() {
  document.querySelector(".newArray").disabled = false;
}

arraySize.addEventListener("input", function () {
  generateArr(parseInt(arraySize.value));
});

function sortDelay(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, time);
  });
}

const container = document.querySelector(".data-container");

generateArr(arraySize.value);

let delay = 260;

let delayTime = document.querySelector("#delay_time");

delayTime.addEventListener("input", function () {
  delay = 320 - parseInt(delayTime.value);
});

let newArray = document.querySelector("#new_array");

newArray.addEventListener("click", function () {
  generateArr(parseInt(arraySize.value));
});

function generateArr(size) {
  container.innerHTML = "";
  for (let i = 0; i < size; i++) {
    const numWidth = Math.floor(document.body.clientWidth / (size * 3));
    const width = `${numWidth}px`;

    const numMargin =
      size < 5
        ? 8
        : size < 8
        ? 6
        : size < 11
        ? 4
        : size < 20
        ? 3
        : size < 50
        ? 2.5
        : size < 100
        ? 1.5
        : size < 130
        ? 1
        : 0.5;
    const margin = `${numMargin}px`;

    const value = Math.floor(Math.random(size - 1) * 200) + 1;

    const bar = document.createElement("div");

    bar.classList.add("bar");

    bar.style.height = `${value * 4}px`;
    bar.style.width = width;
    bar.style.margin = margin;

    container.appendChild(bar);
  }
}
