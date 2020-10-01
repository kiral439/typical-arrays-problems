exports.min = function min(array) {
  if (
    typeof array === "undefined" ||
    array === null ||
    array.length === null ||
    array.length < 1
  )
    return 0;
  const qSort = new QuickSort();
  return qSort.sort(array, 0, array.length - 1)[0];
};

exports.max = function max(array) {
  if (
    typeof array === "undefined" ||
    array === null ||
    array.length === null ||
    array.length < 1
  )
    return 0;
  const qSort = new QuickSort();
  return qSort.sort(array, 0, array.length - 1)[array.length - 1];
};

exports.avg = function avg(array) {
  if (
    typeof array === "undefined" ||
    array === null ||
    array.length === null ||
    array.length < 1
  )
    return 0;
  return array.reduce((current, prev) => current + prev) / array.length;
};

class QuickSort {
  swap(items, leftIndex, rightIndex) {
    let temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
  }
  partition(items, left, right) {
    // const random = Math.floor(Math.random() * (high + 1));
    const pivot = items[Math.floor((left + right) / 2)];
    let i = left;
    let j = right;
    while (i <= j) {
      while (items[i] < pivot) {
        i++;
      }
      while (items[j] > pivot) {
        j--;
      }
      if (i <= j) {
        this.swap(items, i, j);
        i++;
        j--;
      }
    }
    return i;
  }

  sort(items, left, right) {
    let index;
    if (items.length > 1) {
      index = this.partition(items, left, right);
      if (left < index - 1) {
        this.sort(items, left, index - 1);
      }
      if (index < right) {
        this.sort(items, index, right);
      }
    }
    return items;
  }
}
