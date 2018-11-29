class IndexMaxHeap {

  constructor(arr){
    // 原数组
    this.arr = arr
    // 索引数组
    this.indexArr = Array.from(arr.keys())
    // 堆中最后一个元素索引
    this.k = arr.length - 1
    // 将索引数组堆化
    for(let i = Math.floor((this.k - 1) / 2); i >= 0; i --){
      this.shiftDown(i)
    }
  }

  /**
   * 插入节点
   * @param {num} num 
   */
  insert(num){
    // 数组索引加一
    this.k++
    // 向原数组插入元素
    this.arr.splice(this.k, 0, num)
    // 向索引数组插入索引
    this.indexArr.splice(this.k, 0, this.k)
    // 上移最后一个节点
    this.shiftUp(this.k)
  }

  /**
   * 推出节点
   */
  pop(){
    // 交换第一个元素和最后一个元素
    let temp = this.indexArr[0]
    this.indexArr[0] = this.indexArr[this.k]
    this.indexArr[this.k] = temp
    // 向前移动最后一个元素
    this.k--
    // 下移第一个元素
    this.shiftDown(0)
    // 返回值
    return this.arr[temp]
  }

  /**
   * 上移当前节点
   * @param {num} i 
   */
  shiftUp(i){
    let temp
    while(i / 2 > 0){
      // 缓存父节点
      const p = Math.floor((i - 1) / 2)
      // 将当前节点与父节点进行比较
      if(this.arr[this.indexArr[i]] > this.arr[this.indexArr[p]]){
        temp = this.indexArr[i]
        this.indexArr[i] = this.indexArr[p]
        this.indexArr[p] = temp
        // 继续上移父节点
        i = p
      }else{
        break;
      }
    }
  }

  /**
   * 下移当前节点
   * @param {num} i 需要下移的节点
   */
  shiftDown(i){
    let temp
    while(i * 2 + 1 <= this.k){
      let j = i * 2 + 1 //左子节点索引
      // 存在右子节点，且右子节点大于左子节点,取右子节点的值
      if(j + 1 <= this.k && this.arr[this.indexArr[j + 1]] > this.arr[this.indexArr[j]]){
        j += 1
      }
      // 如果子节点的值大于当前节点，则进行交换
      if(this.arr[this.indexArr[j]] > this.arr[this.indexArr[i]]){
        temp = this.indexArr[j]
        this.indexArr[j] = this.indexArr[i]
        this.indexArr[i] = temp
        // 继续下一层节点
        i = j
      }else{
        break;
      }
    }
  }
}

let arr = [12, 17, 15, 16, 3, 8, 2]
const l = arr.length
let indexMH = new IndexMaxHeap(arr)
