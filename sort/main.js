const sortTestHelper =  require('./sort_test_helper.js')
const sortMethods =  require('./sort_methods.js')

function main() {
  let n = 10000
  let arr = sortTestHelper.generateRandomArray(n, 0, n)
  let arr2 = JSON.parse(JSON.stringify(arr))

  sortTestHelper.testSort('选择排序', arr, n, sortMethods.selectionSort)
  sortTestHelper.testSort('插入排序', arr2, n, sortMethods.insertionSort)

}

main()