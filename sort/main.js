const sortTestHelper = require('./sort_test_helper.js')
const sortMethods = require('./sort_methods.js')

function main() {

  let n = 10000
  let arr = sortTestHelper.generateRandomArray(n, 100, n)
  // let arr = sortTestHelper.generateNearlyRandomArray(n, 100)
  // let arr = sortTestHelper.generateMostSameArray(n, 300)

  let arr1 = JSON.parse(JSON.stringify(arr))
  let arr2 = JSON.parse(JSON.stringify(arr))
  let arr3 = JSON.parse(JSON.stringify(arr))
  let arr4 = JSON.parse(JSON.stringify(arr))
  let arr5 = JSON.parse(JSON.stringify(arr))
  let arr6 = JSON.parse(JSON.stringify(arr))
  let arr7 = JSON.parse(JSON.stringify(arr))
  let arr8 = JSON.parse(JSON.stringify(arr))
  let arr9 = JSON.parse(JSON.stringify(arr))
  let arr10 = JSON.parse(JSON.stringify(arr))
  let arr11 = JSON.parse(JSON.stringify(arr))
  let arr12 = JSON.parse(JSON.stringify(arr))
  let arr13 = JSON.parse(JSON.stringify(arr))

  sortTestHelper.testSort('冒泡排序', arr1, n, sortMethods.bubbleSort)
  sortTestHelper.testSort('选择排序', arr2, n, sortMethods.selectionSort)
  sortTestHelper.testSort('插入排序', arr3, n, sortMethods.insertionSort)
  sortTestHelper.testSort('插入排序(优化)', arr4, n, sortMethods.insertionSort1)
  sortTestHelper.testSort('归并排序', arr5, n, sortMethods.mergeSort)
  sortTestHelper.testSort('归并排序(无递归)', arr6, n, sortMethods.mergeSortBU)
  sortTestHelper.testSort('快速排序', arr7, n, sortMethods.quickSort)
  sortTestHelper.testSort('快速排序(优化)', arr8, n, sortMethods.quickSort1)
  sortTestHelper.testSort('快速排序(优化2)', arr9, n, sortMethods.quickSort2)
  sortTestHelper.testSort('三路快排', arr10, n, sortMethods.quickSort3)
  sortTestHelper.testSort('希尔排序', arr12, n, sortMethods.shellSort)
  sortTestHelper.testSort('堆排序', arr11, n, sortMethods.heapSort)
  sortTestHelper.testSort('原地堆排序', arr13, n, sortMethods.heapSort1)

}

main()