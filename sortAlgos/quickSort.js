async function partition(ele, l, r) {
  let i = l - 1;
  // color pivot element
  ele[r].style.background = "red";
  for (let j = l; j <= r - 1; j++) {
    console.log("In partitionLomuto for j");
    // color current element
    ele[j].style.background = "yellow";
    await sortDelay(delay);

    if (parseInt(ele[j].style.height) < parseInt(ele[r].style.height)) {
      i++;
      let temp = ele[i].style.height;
      ele[i].style.height = ele[j].style.height;
      ele[j].style.height = temp;
      // color
      ele[i].style.background = "orange";
      if (i != j) ele[j].style.background = "orange";

      await sortDelay(delay);
    } else {
      // color if not less than pivot
      ele[j].style.background = "pink";
    }
  }
  i++;
  await sortDelay(delay);
  let temp = ele[i].style.height;
  ele[i].style.height = ele[r].style.height;
  ele[r].style.height = temp;
  // color
  ele[r].style.background = "pink";
  ele[i].style.background = "green";

  await sortDelay(delay);

  // color
  for (let k = 0; k < ele.length; k++) {
    if (ele[k].style.background != "green") ele[k].style.background = "cyan";
  }

  return i;
}

async function quickSort(ele, l, r) {
  console.log("In quickSort()", `l=${l} r=${r}`, typeof l, typeof r);
  if (l < r) {
    let pivot_index = await partition(ele, l, r);
    await quickSort(ele, l, pivot_index - 1);
    await quickSort(ele, pivot_index + 1, r);
  } else {
    if (l >= 0 && r >= 0 && l < ele.length && r < ele.length) {
      ele[r].style.background = "green";
      ele[l].style.background = "green";
    }
  }
}
