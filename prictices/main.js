/**
 * 归并实现查找逆序对
 * @param {Array} data 
 */
function InversePairs1(data){
  let P = 0
  const l = 0
  const r = data.length - 1
  _inversePairs(data, l, r)
  function _inversePairs(data, l, r){
    if(l >= r){
      return
    }else{
      let mid = Math.floor((r + l) / 2)
      _inversePairs(data, l, mid)
      _inversePairs(data, mid + 1, r)
      _merge(data, l, mid, r)
    }
  }
  function _merge(data, l, mid, r){
    let arr = new Array(r - l + 1)
    for(let i = l; i <= r; i++ ){
      arr[i - l] = data [i]
    }
    let i = l, j = mid + 1
    for(let k = l; k <= r; k++){
      if(i > mid){
        data[k] = arr[j - l]
        j++
      }else if(j > r){
        data[k] = arr[i - l]
        i++
      }else if(arr[i - l] < arr [j - l]){
        data[k] = arr[i - l]
        i++
      }else{
        data[k] = arr[j - l]
        j++
        P = (mid - i + 1) + P
      }
    }
  }
  return P % 1000000007
}

/**
 * 利用快排查找第n大的元素
 * @param {Array} arr 
 */
function findKthLargest(nums, k){
  k = k - 1
  const l = nums.length
  _findKthLargest(nums, 0, l - 1)
  return nums[k]
  function _findKthLargest(nums, l, r){
    if(l >= r){
      return
    }else{
      let p = _partition(nums, l, r)
      if( p > k){
        return _findKthLargest(nums, l, p - 1)
      }else if(p < k) {
        return _findKthLargest(nums, p + 1, r)
      }else{
        return p
      }
    }
  }
  function _partition(nums, l, r){
    const v = nums[l]
    let j = l, temp
    for(let i = l + 1; i <= r; i++){
      if(nums[i] > v){
        temp = nums[j + 1]
        nums[j + 1] = nums[i]
        nums[i] = temp
        j++
      }
    }
    nums[l] = nums[j]
    nums[j] = v
    return j
  }
}

let arr = [3,2,3,1,2,4,5,5,6]
let k = 4

console.log(findKthLargest(arr, k))