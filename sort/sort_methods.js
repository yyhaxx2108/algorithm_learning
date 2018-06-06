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

  /**
   * 插入排序
   * @param {Array} arr 
   */
  insertionSort(arr) {
    let l = arr.length
    let tempC
    for(let i = 1; i < l; i++){
      for(let j = i; j > 0 && arr[j] < arr [j - 1]; j--){
        tempC = arr [j]
        arr[j] = arr[j - 1]
        arr[j - 1] = tempC
      }
    }
  }

}

module.exports = sortMethods