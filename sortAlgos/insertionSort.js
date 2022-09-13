async function insertionSort() {
  const arr = document.querySelectorAll(".bar");
  // color
  arr[0].style.background = "green";
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let curr = arr[i].style.height;
    // color
    arr[i].style.background = "blue";

    await sortDelay(delay);

    while (j >= 0 && parseInt(arr[j].style.height) > parseInt(curr)) {
      // color
      arr[j].style.background = "blue";
      arr[j + 1].style.height = arr[j].style.height;
      j--;

      await sortDelay(delay);

      // color
      for (let k = i; k >= 0; k--) {
        arr[k].style.background = "green";
      }
    }
    arr[j + 1].style.height = curr;
    // color
    arr[i].style.background = "green";
  }
}

const insertionSortBtn = document.querySelector(".insertionSort");
insertionSortBtn.addEventListener("click", async function () {
  disableSizeSlider();
  disableSortingBtn();
  disableNewArray();
  await insertionSort();
  enableSortingBtn();
  enableSizeSlider();
  enableNewArray();
});
