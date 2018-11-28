const sortTestHelper = require('./sort_test_helper.js')
const sortMethods = require('./sort_methods.js')

function main() {

  let n = 3000000
  let arr = sortTestHelper.generateRandomArray(n, 10, n)
  // let arr = sortTestHelper.generateNearlyRandomArray(n, 100)

  let arr2 = JSON.parse(JSON.stringify(arr))
  let arr3 = JSON.parse(JSON.stringify(arr))
  let arr4 = JSON.parse(JSON.stringify(arr))
  let arr5 = JSON.parse(JSON.stringify(arr))
  let arr6 = JSON.parse(JSON.stringify(arr))
  let arr7 = JSON.parse(JSON.stringify(arr))
  let arr8 = JSON.parse(JSON.stringify(arr))
  let arr9 = JSON.parse(JSON.stringify(arr))
  let arr10 = JSON.parse(JSON.stringify(arr))

  sortTestHelper.testSort('冒泡排序', arr2, n, sortMethods.bubbleSort)
  // sortTestHelper.testSort('选择排序', arr, n, sortMethods.selectionSort)
  // sortTestHelper.testSort('插入排序', arr2, n, sortMethods.insertionSort)
  // sortTestHelper.testSort('插入排序(优化)', arr3, n, sortMethods.insertionSort1)
  // sortTestHelper.testSort('归并排序', arr4, n, sortMethods.mergeSort)

  sortTestHelper.testSort('归并排序(无递归)', arr5, n, sortMethods.mergeSortBU)
  // sortTestHelper.testSort('快速排序', arr6, n, sortMethods.quickSort)
  // sortTestHelper.testSort('快速排序(优化)', arr7, n, sortMethods.quickSort1)
  sortTestHelper.testSort('快速排序(优化2)', arr8, n, sortMethods.quickSort2)
  // sortTestHelper.testSort('三路快排', arr9, n, sortMethods.quickSort3)
  sortTestHelper.testSort('堆排序', arr10, n, sortMethods.heapSort)

}

main()