const maxHeap = require('../heap/maxHeap.js')

// 统一注释: 
// @param l 长度
// @param tempC 临时变量
// @param arr  数组,整形


// 交换函数
const toolMethods = {
  swap(arr, a, b){
    arr[a] = arr[a] + arr[b];
    arr[b] = arr[a] - arr[b];
    arr[a] = arr[a] - arr[b];
  },
}

const sortMethods = {
  /**
   * 冒泡排序 
   * @param {Array} arr 待排序的数组
   */
  bubbleSort(arr) {
    let l = arr.length
    let tempC
    // 外层循环,循环整个数组的长度
    for (let i = 0; i < l; i++) {
      // 内层循环,找到最大值，并且将最大值放到数组l-i位置上
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
  shellSort(arr) {
    const l = arr.length
    let temp
    // f定义为间隔长度
    for (let f = Math.floor(l / 2); f >= 1; f = Math.floor(f / 2)) {
      for (let i = f; i < l; i++) {
        // 将当前位置的i与间隔f的前一位置比较，并且确定位置
        for (let j = i - f; j >= 0 && arr[j] > arr[f + j]; j -= f) {
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
    // 缓存数组长度
    const l = arr.length
    // 初始传入的是做边界值和又边界值
    _mergeSort(arr, 0, l - 1)

    /**
     * 递归
     * mid值应该取整数，否则会造成_merge函数中r值不为整数的bug
     * @param {Array} arr 
     * @param {Integer} l 数组左边值
     * @param {Integer} r 数组右边值
     */
    function _mergeSort(arr, l, r) {
      // 当l = r时，当前arr只有1个元素，递归中止
      if (l >= r) {
        return
      }
      // mid为正中或者中间偏左那个位置元素
      let mid = Math.floor((l + r) / 2)
      // 递归调用左边和右边
      _mergeSort(arr, l, mid)
      _mergeSort(arr, mid + 1, r)
      // 合并左边和右边
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
      // 声明一个零时数组，并存储arr中[l, r]的值
      let tempArr = new Array(r - l + 1)
      for (let i = l; i <= r; i++) {
        tempArr[i - l] = arr[i]
      }

      // i是左边数组开始的值，j是右边数组开始的值
      let i = l, j = mid + 1
      // 对arr在[l, k]长度进行遍历，并从tempArr中给相应的位置放上正确的值
      for (let k = l; k <= r; k++) {
        // 当 i > mid 说明左边数组的值已经遍历完全，可以直接将右边数组的值放到arr相应的位置
        // 当 j > r 说明右边数组的值已经遍历完全，可以直接将左边数组的值放到arr相应的位置
        // 将 tempArr[i - l] 与 tempArr[j - l]进行比较，在arr中放入较大的那个值，同时将其对应的索引右移
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
    // 遍历层数，sz为递归最小单元的元素个数，初始时赋值为1
    for (let sz = 1; sz <= l; sz += sz) {
      // 遍历当前层，所有需要归并的单元，并对其进行归并
      for (let i = 0; i + sz < l; i += sz + sz) {
        // 最右边元素的索引应该取 Math.min(i + sz + sz - 1, l - 1)
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
      // v为最左边的值，这里将他放到正确位置，也就是说v左边的元素全部不大于v，右边元素不小于v
      let v = arr[l]
      // v左边区间为[l + 1, j]
      let j = l
      let tempC
      for (let i = l + 1; i <= r; i++) {
        // 当 arr[i] < v 时，arr[i]和arr[j + 1]交换，同时将左边区间像有移动一位
        if (arr[i] < v) {
          tempC = arr[j + 1]
          arr[j + 1] = arr[i]
          arr[i] = tempC
          j++
        }
      }
      // 遍历一遍数组之后，交换j 与 v 的位置，从而让v处于正确位置
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
      // 此处对近乎有序的数组进行优化
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
      // 当 l = r 时说明arr只有一个元素，可以跳出递归
      if (l >= r) {
        return
      }
      // 获取已经排序好的位置
      let p = _partition(arr, l, r)
      // 递归对p左边和右边的元素找正确位置
      _quickSort(arr, l, p - 1)
      _quickSort(arr, p + 1, r)
    }
    function _partition(arr, l, r) {
      let tempC
      // 取随机位置作为基准值,并放到最左边，防止近乎有序的数组退化成O(n*n)
      let random = Math.round(Math.random() * (r - l)) + l
      tempC = arr[l]
      arr[l] = arr[random]
      arr[random] = tempC

      // 取最左边位置作为基准值，然后找出他的位置，并且返回
      let v = arr[l]
      // 从i+1开始遍历数组，其中(l + 1, i)是小于等于v的区间 (j, r]为大于v的区间
      let i = l + 1, j = r
      // 循环终止条件是i > j
      while (true) {
        // 向右移动i，arr[i]小于v时，扩大小于v的区间
        while (i <= r && arr[i] < v) {
          i++
        }
        // 向左移动j，arr[j] > v时，扩大大于v的区间
        while (j >= l + 1 && arr[j] > v) {
          j--
        }
        // 两边移动之后，如果i 不大于 j，那么交换当前i 和 j 的位置，将左边和右边的区间同时扩大1，然后继续循环
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
      // 将l和j元素进行交换，让l到达正确位置
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
    /**
     * 对arr进行三路快排    
     * @param {Array} arr 需要找出最大值的数组
     * @param {Integer} l 数组的左边界
     * @param {Integer} r 数组的右边界
     */
    function _quickSort(arr, l, r) {
      // 当 l = r 时说明arr只有一个元素，可以跳出递归
      if (l >= r) {
        return
      }
      let tempC
      // v为arr的左值，也就是用来比较的基准值，[l, lt]为小于v的区间, [gt, r]为大于v的区间, i为当前读取值
      let v = arr[l], lt = l, gt = r + 1, i = l + 1
      // 循环终止条件是i < gt其中gt的初始值为r + 1
      while (i < gt) {
        // 如果arr[i]小于v时将arr[i]和lt+1那个值交换，同时将lt++， i++；如果arr[i]大于v时将当前值和gt-1的值交换，同时gt--；如果arr[i]等于v，那么将i++即可
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
      // 最后得将v与lt位置的元素进行交换，使v放到他正确的位置
      tempC = arr[l]
      arr[l] = arr[lt]
      arr[lt] = tempC
      // 继续递归对左边进行排序
      _quickSort(arr, l, lt - 1)
      // 继续递归对右边进行排序
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
    // 缓存数组长度
    const l = arr.length
    // 找到需要shiftDown的元素，观察可知道Math.floor(l / 2) - 1需要shiftDown
    const hl = Math.floor(l / 2) - 1
    // 进行原地堆化
    for(let i = hl; i >= 0; i--){
      _shiftDown(arr, l, i)
    }
    let temp
    // 找出最大值
    for(let i = l - 1; i > 0; i--){
      temp = arr[i]
      arr[i] = arr[0]
      arr[0] = temp
      _shiftDown(arr, i, 0)
    }
    /**
     * 
     * @param {Array} arr 需要shiftDown的数组
     * @param {Integer} l 需要shiftDown的长度
     * @param {Integer} k 需要堆化的下标
     */   
    function _shiftDown(arr, l, k){
      let temp
      // 判断k是否存在左子节点
      while(2 * k + 1 < l){
        let j = 2 * k + 1
        // 判读是否存在比左子节点大的右子节点，如果存在赋值给j
        if(j + 1 < l && arr[j] < arr[j + 1]){
          j += 1
        }
        // 判断当前节点是否比子节点小，如果小则进行交换
        if(arr[j] > arr[k]){
          temp = arr[k]
          arr[k] = arr[j]
          arr[j] = temp
        }
        k = j
      }
    }
  },
  /**
   * 栈排序
   * @param {Array} arr 
   */
  stackSort(arr){
    const b = []
    let temp 
    while (arr.length > 0) {
      temp = arr.pop()
      if(b.length > 0){
        while(temp < b[b.length - 1]){
          arr.push(b.pop())
        }
        b.push(temp)
      }else{
        b.push(temp)
      }
    }
    arr = b
  }
}

module.exports = sortMethods