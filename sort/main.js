const sortTestHelper =  require('./sort_test_helper.js')
const sortMethods =  require('./sort_methods.js')

function main() {
  let n = 10000
  let arr = sortTestHelper.generateRandomArray(n, 0, n)

  sortTestHelper.testSort('选择排序', arr, n, sortMethods.selectionSort)

}

main()