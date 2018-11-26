const sortTestHelper =  require('./sort_test_helper.js')
const sortMethods =  require('./sort_methods.js')

function main() {
  let n = 30000
  let tempArr = [21, 12, 4, 7, 9, 2, 1]
  let arr1 = sortTestHelper.generateRandomArray(n, 0, 1*n)
  // let arr1 = sortTestHelper.generateNearlyRandomArray(n, 100)
  let arr2 = JSON.parse(JSON.stringify(arr1))
  let arr3 = JSON.parse(JSON.stringify(arr1))
  let arr4 = JSON.parse(JSON.stringify(arr1))
  let arr5 = JSON.parse(JSON.stringify(arr1))

  // sortTestHelper.testSort('选择排序', arr1, n, sortMethods.selectionSort)
  // sortTestHelper.testSort('插入排序', arr2, n, sortMethods.insertionSort)
  sortTestHelper.testSort('插入排序(优化)', arr3, n, sortMethods.insertionSort)
  sortTestHelper.testSort('归并排序', arr4, n, sortMethods.mergeSort)
  sortTestHelper.testSort('快速排序', arr5, n, sortMethods.quickSort)
  // sortTestHelper.testSort('快速排序', tempArr, n, sortMethods.quickSort)

}

main()