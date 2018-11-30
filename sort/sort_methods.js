const maxHeap = require('../heap/maxHeap.js')

const sortMethods = {
  /**
   * 冒泡排序 
   * @param {Array} arr 待排序的数组
   */
  bubbleSort(arr) {
    let l = arr.length
    let tempC
    // 需要循环l次
    for (let i = 0; i < l; i++) {
      // 找到最大值，并且将最大值放到数组l-i位置上
      for (let k = 0; k < l - i; k++) {
        if (arr[k] > arr[k + 1]) {
          tempC = arr[k]
          arr[k] = arr[k + 1]
          arr[k + 1] = tempC
        }
      }
    }
  },

  /**
   * 希尔排序
   * @param {Array} arr 
   */
  shellSort(arr){
    const l = arr.length  // 将l定义为数组的长度
    let temp
    // f定义为间隔长度
    for(let f = Math.floor(l / 2); f >= 1; f = Math.floor(f / 2)){
      for(let i = f; i < l; i++){
        // 将当前位置的i与间隔f的前一位置比较，并且确定位置
        for(let j = i - f; j >= 0 && arr[j] > arr[f + j]; j -= f){
          temp = arr[j]
          arr[j] = arr[f + j]
          arr[f + j] = temp
        }
      }
    }
  },

  /**
   * 选择排序 
   * @param {Array} arr 待排序的数组
   */
  selectionSort(arr) {
    let l = arr.length
    let tempC
    for (let i = 0; i < l; i++) {
      let minIndex = i
      for (let j = i + 1; j < l; j++) {
        if (arr[minIndex] > arr[j]) {
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
    for (let i = 1; i < l; i++) {
      for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
        tempC = arr[j]
        arr[j] = arr[j - 1]
        arr[j - 1] = tempC
      }
    }
  },

  /**
   * 插入排序(优化)
   * 减少赋值操作
   * @param {Array} arr 
   */
  insertionSort1(arr) {
    let l = arr.length
    for (let i = 1; i < l; i++) {
      let e = arr[i]
      let j
      for (j = i; j > 0 && e < arr[j - 1]; j--) {
        arr[j] = arr[j - 1]
      }
      arr[j] = e
    }
  },

  /**
   * 归并排序
   * @param {Array} arr 
   */
  mergeSort(arr) {
    const l = arr.length
    _mergeSort(arr, 0, l - 1)

    /**
     * 递归
     * mid值应该取整数，否则会造成_merge函数中r值不为整数的bug
     * @param {Array} arr 
     * @param {Integer} l 数组左边值
     * @param {Integer} r 数组右边值
     */
    function _mergeSort(arr, l, r) {
      if (l >= r) {
        return
      }
      let mid = Math.floor((l + r) / 2)
      _mergeSort(arr, l, mid)
      _mergeSort(arr, mid + 1, r)
      _merge(arr, l, mid, r)
    }

    /**
     * 将排好序的左边和右边进行合并
     * @param {Array} arr 原始数组
     * @param {Integer} l 数组左边值
     * @param {Integer} mid 数组中间值
     * @param {Integer} r 数组右边值
     */
    function _merge(arr, l, mid, r) {
      let tempArr = new Array(r - l + 1)
      for (let i = l; i <= r; i++) {
        tempArr[i - l] = arr[i]
      }
      let i = l, j = mid + 1
      for (let k = l; k <= r; k++) {
        if (i > mid) {
          arr[k] = tempArr[j - l];
          j++
        } else if (j > r) {
          arr[k] = tempArr[i - l]
          i++
        } else if (tempArr[i - l] < tempArr[j - l]) {
          arr[k] = tempArr[i - l]
          i++
        } else {
          arr[k] = tempArr[j - l]
          j++
        }
      }
    }
  },

  /**
   * 不是使用递归实现归并排序
   * 自底想上归并排序
   * @param {Array} arr 
   */
  mergeSortBU(arr) {
    let l = arr.length
    for (let sz = 1; sz <= l; sz += sz) {
      for (let i = 0; i + sz < l; i += sz + sz) {
        _merge(arr, i, i + sz - 1, Math.min(i + sz + sz - 1, l - 1))
      }
    }
    /**
     * 将排好序的左边和右边进行合并
     * @param {Array} arr 原始数组
     * @param {Integer} l 数组左边值
     * @param {Integer} mid 数组中间值
     * @param {Integer} r 数组右边值
     */
    function _merge(arr, l, mid, r) {
      let tempArr = new Array(r - l + 1)
      for (let i = l; i <= r; i++) {
        tempArr[i - l] = arr[i]
      }
      let i = l, j = mid + 1
      for (let k = l; k <= r; k++) {
        if (i > mid) {
          arr[k] = tempArr[j - l];
          j++
        } else if (j > r) {
          arr[k] = tempArr[i - l]
          i++
        } else if (tempArr[i - l] < tempArr[j - l]) {
          arr[k] = tempArr[i - l]
          i++
        } else {
          arr[k] = tempArr[j - l]
          j++
        }
      }
    }
  },

  /**
   * 快速排序
   * @param {Array} arr 
   */
  quickSort(arr) {
    let l = arr.length
    _quickSort(arr, 0, l - 1)

    /**
     * 通过p位置的元素对数组进行分割，并且递归的进行排序  
     * @param {Array} arr 
     * @param {Integer} l 
     * @param {Integer} r 
     */
    function _quickSort(arr, l, r) {
      if (l >= r) {
        return
      }
      let p = _partition(arr, l, r)
      _quickSort(arr, l, p - 1)
      _quickSort(arr, p + 1, r)
    }

    /**
     * 找出p的正确位置
     * @param {Array} arr 
     * @param {Integer} l 
     * @param {Integer} r 
     */
    function _partition(arr, l, r) {
      let v = arr[l]
      let j = l
      let tempC
      for (let i = l + 1; i <= r; i++) {
        if (arr[i] < v) {
          tempC = arr[j + 1]
          arr[j + 1] = arr[i]
          arr[i] = tempC
          j++
        }
      }
      tempC = arr[l]
      arr[l] = arr[j]
      arr[j] = tempC
      return j
    }
  },

  /**
   * 快速排序
   * _partition时使用一个随机位置替换第一个位置,对于近乎有序数组的优化
   * @param {Array} arr 
   */
  quickSort1(arr) {
    let l = arr.length
    _quickSort(arr, 0, l - 1)

    /**
     * 通过p位置的元素对数组进行分割，并且递归的进行排序  
     * @param {Array} arr 
     * @param {Integer} l 
     * @param {Integer} r 
     */
    function _quickSort(arr, l, r) {
      if (l >= r) {
        return
      }
      let p = _partition(arr, l, r)
      _quickSort(arr, l, p - 1)
      _quickSort(arr, p + 1, r)
    }

    /**
     * 找出p的正确位置
     * @param {Array} arr 
     * @param {Integer} l 
     * @param {Integer} r 
     */
    function _partition(arr, l, r) {
      let tempC
      let random = Math.round(Math.random() * (r - l)) + l
      tempC = arr[l]
      arr[l] = arr[random]
      arr[random] = tempC
      let v = arr[l]
      let j = l
      for (let i = l + 1; i <= r; i++) {
        if (arr[i] < v) {
          tempC = arr[j + 1]
          arr[j + 1] = arr[i]
          arr[i] = tempC
          j++
        }
      }
      tempC = arr[l]
      arr[l] = arr[j]
      arr[j] = tempC
      return j
    }
  },

  /**
   * 快速排序
   * 对有大量相同元素的数组进行了优化
   * @param {Array} arr 
   */
  quickSort2(arr) {
    let l = arr.length
    _quickSort(arr, 0, l - 1)
    function _quickSort(arr, l, r) {
      if (l >= r) {
        return
      }
      let p = _partition(arr, l, r)
      _quickSort(arr, l, p - 1)
      _quickSort(arr, p + 1, r)
    }
    function _partition(arr, l, r) {
      let tempC
      let random = Math.round(Math.random() * (r - l)) + l
      tempC = arr[l]
      arr[l] = arr[random]
      arr[random] = tempC
      let v = arr[l]
      let i = l + 1, j = r
      while (true) {
        while (i <= r && arr[i] < v) {
          i++
        }
        while (j >= l + 1 && arr[j] > v) {
          j--
        }
        if (i > j) {
          break
        } else {
          tempC = arr[i]
          arr[i] = arr[j]
          arr[j] = tempC
          i++
          j--
        }
      }
      tempC = arr[l]
      arr[l] = arr[j]
      arr[j] = tempC
      return j
    }
  },

  /**
   * 三路快排
   * @param {Array} arr 
   */
  quickSort3(arr) {
    let l = arr.length

    // 注意边界条件
    _quickSort(arr, 0, l - 1)
    function _quickSort(arr, l, r) {
      if (l >= r) {
        return
      }
      let tempC
      let v = arr[l], lt = l, gt = r + 1, i = l + 1
      while (i < gt) {
        if (arr[i] < v) {
          tempC = arr[i]
          arr[i] = arr[lt + 1]
          arr[lt + 1] = tempC
          lt++
          i++
        } else if (arr[i] > v) {
          tempC = arr[i]
          arr[i] = arr[gt - 1]
          arr[gt - 1] = tempC
          gt--
        } else {
          i++
        }
      }
      tempC = arr[l]
      arr[l] = arr[lt]
      arr[lt] = tempC
      _quickSort(arr, l, lt - 1)
      _quickSort(arr, gt, r)
    }
  },

  /**
   * 堆排序
   * @param {Array} arr 
   */
  heapSort(arr) {
    const l = arr.length - 1
    let heaps = new maxHeap(arr)
    for (let i = l; i >= 0; i--) {
      arr[i] = heaps.pop()
    }
  },

  /**
   * 原地堆排序
   * @param {Array} arr 
   */
  heapSort1(arr) {
    const l = arr.length
    const hl = Math.floor(l / 2) - 1
    for(let i = hl; i >= 0; i--){
      _shiftDown(arr, l, i)
    }
    let temp
    for(let i = l - 1; i > 0; i--){
      temp = arr[i]
      arr[i] = arr[0]
      arr[0] = temp
      _shiftDown(arr, i, 0)
    }    
    function _shiftDown(arr, l, k){
      let temp
      while(2 * k + 1 < l){
        let j = 2 * k + 1
        if(j + 1 < l && arr[j] < arr[j + 1]){
          j += 1
        }
        if(arr[j] > arr[k]){
          temp = arr[k]
          arr[k] = arr[j]
          arr[j] = temp
        }
        k = j
      }
    }
  }
}

module.exports = sortMethods