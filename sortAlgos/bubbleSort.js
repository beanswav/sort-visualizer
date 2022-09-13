async function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      arr[j].style.backgroundColor = "orange";
      arr[j + 1].style.backgroundColor = "orange";

      await sortDelay(delay);
      const valueOne = parseInt(arr[j].style.height);
      const valueTwo = parseInt(arr[j + 1].style.height);

      if (valueOne > valueTwo) {
        await sortDelay(delay);

        //swap
        let temp1 = arr[j].style.height;
        arr[j].style.height = arr[j + 1].style.height;
        arr[j + 1].style.height = temp1;
      }
      arr[j].style.backgroundColor = "yellow";
      arr[j + 1].style.backgroundColor = "yellow";
    }
    arr[arr.length - 1 - i].style.backgroundColor = "green";
  }
  arr[0].style.backgroundColor = "green";
}

const bubbleSortBtn = document.querySelector(".bubbleSort");
bubbleSortBtn.addEventListener("click", async function () {
  let arr = document.querySelectorAll(".bar");
  disableSizeSlider();
  disableSortingBtn();
  disableNewArray();
  await bubbleSort(arr);
  enableSortingBtn();
  enableSizeSlider();
  enableNewArray();
});
