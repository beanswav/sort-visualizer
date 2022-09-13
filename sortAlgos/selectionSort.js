async function selectionSort() {
  let array = document.querySelectorAll(".bar");
  let len = array.length;

  for (let i = 0; i < len; i++) {
    let min = i;

    array[i].style.backgroundColor = "yellow";
    for (let j = i + 1; j < len; j++) {
      array[j].style.backgroundColor = "orange";

      await sortDelay(delay);

      const valueOne = parseInt(array[j].style.height);
      const valueTwo = parseInt(array[min].style.height);

      if (valueOne < valueTwo) {
        if (min !== i) {
          array[min].style.backgroundColor = "yellow";
        }
        min = j;
      } else {
        array[j].style.backgroundColor = "yellow";
      }
    }

    const temp1 = array[min].style.height;
    array[min].style.height = array[i].style.height;
    array[i].style.height = temp1;

    await sortDelay(delay);

    array[min].style.backgroundColor = "yellow";

    array[i].style.backgroundColor = "green";
  }
}

const selectionSortBtn = document.querySelector(".selectionSort");
selectionSortBtn.addEventListener("click", async function () {
  disableSizeSlider();
  disableSortingBtn();
  disableNewArray();
  await selectionSort();
  enableSortingBtn();
  enableSizeSlider();
  enableNewArray();
});
