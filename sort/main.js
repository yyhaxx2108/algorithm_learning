const sortTestHelper =  require('./sort_test_helper.js')
const sortMethods =  require('./sort_methods.js')

function main() {
  let n = 6000000
  // let arr = sortTestHelper.generateRandomArray(n, 0, 3*n)
  let arr = sortTestHelper.generateNearlyRandomArray(n, 100)

  let arr2 = JSON.parse(JSON.stringify(arr))
  let arr3 = JSON.parse(JSON.stringify(arr))
  let arr4 = JSON.parse(JSON.stringify(arr))
  let arr5 = JSON.parse(JSON.stringify(arr))
  let arr6 = JSON.parse(JSON.stringify(arr))
  let arr7 = JSON.parse(JSON.stringify(arr))

  // sortTestHelper.testSort('选择排序', arr, n, sortMethods.selectionSort)
  // sortTestHelper.testSort('插入排序', arr2, n, sortMethods.insertionSort)
  // sortTestHelper.testSort('插入排序(优化)', arr3, n, sortMethods.insertionSort1)
  // sortTestHelper.testSort('归并排序', arr4, n, sortMethods.mergeSort)
  // sortTestHelper.testSort('归并排序(无递归)', arr5, n, sortMethods.mergeSortBU)
  // sortTestHelper.testSort('快速排序', arr6, n, sortMethods.quickSort)
  sortTestHelper.testSort('快速排序(优化)', arr7, n, sortMethods.quickSort1)

}

main()