const sortTestHelper = {

  /**
   * 生成一个规模为n，范围为【rangeL，rangeR】的数组
   * @param {int} n 数组规模
   * @param {int} rangeL 数组最小值
   * @param {int} rangeR 数组最大值
   */
  generateRandomArray(n, rangeL, rangeR){
    if(rangeL > rangeR) {
      let tempC = rangeL;
      rangeL = rangeR;
      rangeR = tempC
    }
    let arr = new Array(n);
    for (let i = 0; i < n; i++) {
      arr[i] = Math.round(Math.random() * (rangeR - rangeL)) + rangeL
    }
    return arr;
  },

  /**
   * 算法所花费时间
   * @param {String} name 算法名称
   * @param {Arrary} arr 待排序的数组
   * @param {Integer} n 数组规模
   * @param {Function} func 算法
   */
  testSort(name, arr, n, func) {
    let start = new Date()
    func(arr)
    let end = new Date() 
    if(this.isSorted(arr)){
      console.log(name, '算法在数据为', n, '条所用时间是：', end - start, 'ms')
    }else {
      console.log(name, '算法没有排序成功')
    }
  },

  /**
   * 验证数组是否正确排序
   * @param {Array} arr 待测试的数组
   */
  isSorted(arr)  {
    let l = arr.length
    for (let i = 0; i < l; i++ ){
      if(arr[i] > arr [i + 1]){
        return false
      }
    }
    return true
  }
}

module.exports = sortTestHelper