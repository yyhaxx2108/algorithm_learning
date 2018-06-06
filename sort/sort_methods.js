const sortMethods = {
  /**
   * 选择排序 
   * @param {Array} arr 待排序的数组
   */
  selectionSort(arr) {
    let l = arr.length
    let tempC
    for(let i = 0; i < l; i++) {
      let minIndex = i
      for(let j = i + 1; j < l; j++) {
        if (arr[minIndex] > arr[j] ){
          minIndex = j
        }
      }
      tempC = arr[i]
      arr[i] = arr[minIndex]
      arr[minIndex] = tempC
    }
  },

}

module.exports = sortMethods