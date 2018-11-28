module.exports = class MaxHeap {
  constructor(arr = []){
    this.arr = JSON.parse(JSON.stringify(arr))
    const l = arr.length
    const hl = Math.floor(arr.length / 2) - 1
    for(let i = hl; i >= 0 ; i--){
      this.shiftDown(l, this.arr, i)
    }
  }
  insert(num){
    this.arr.push(num)
    this.shiftUp(this.arr.length - 1, this.arr)
  }
  pop(){
    const l = this.arr.length - 1
    let temp = this.arr[0]
    this.arr[0] = this.arr[l]
    this.arr.pop()
    this.shiftDown(l, this.arr, 0)
    return temp
  }
  shiftUp(l, arr){
    while(l > 0){
      let k = l, v = arr[k]
      l = Math.floor(l / 2)
      let temp
      if(arr[l] < v){
        temp = arr[l]
        arr[l] = arr[k]
        arr[k] = temp
      }
    }
  }
  shiftDown(l, arr, k){
    let temp
    while(2 * k + 1 < l){
      let j = 2 * k + 1
      if(j + 1 < l){
        if(arr[j + 1] > arr[j]){
          j = j + 1
        }
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

