const arraySize = document.querySelector("#array_size");

function disableSortingBtn() {
  document.querySelector(".selectionSort").disabled = true;
  document.querySelector(".mergeSort").disabled = true;
}

function enableSortingBtn() {
  document.querySelector(".selectionSort").disabled = false;
  document.querySelector(".mergeSort").disabled = false;
}

function disableSizeSlider() {
  arraySize.disabled = true;
}

function enableSizeSlider() {
  arraySize.disabled = false;
}

function disableNewArray() {
  document.querySelector(".button1").disabled = true;
}

function enableNewArray() {
  document.querySelector(".button1").disabled = false;
}

arraySize.addEventListener("input", function () {
  console.log(arraySize.value, typeof arraySize.value);
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

generateArr();

let delay = 260;

let delayTime = document.querySelector("#delay_time");

delayTime.addEventListener("input", function () {
  delay = 320 - parseInt(delayTime.value);
});

function generateArr(size = 10) {
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
