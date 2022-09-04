function printHouse(arr){
  let res = Infinity
  const m = arr.length
  const n = arr[0].length
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(Infinity))
  for(let i = 0; i < n; i++){
    dp[0][i] = arr[0][i]
  }
  for(let i = 1; i < m; i++){
    for(let j = 0; j < n; j++){
      for(let k = 0; k < n; k++){
        if(j !== k){
          dp[i][j] = Math.min((dp[i - 1][k] + arr[i][j]), dp[i][j])
        }
      }
    }
  }
  for(let i = 0; i < n; i++){
    res = Math.min(dp[m - 1][i], res)
  }
  console.log(dp)
  return res
}


const houseArr = [
  [7, 12, 9, 3],
  [12, 3, 7, 9],
  [6, 8, 12, 7],
  [3, 18, 11, 6],
  [9, 8, 12, 5],
  [5, 23, 6, 8]
]
console.time('printHouse')
console.log(printHouse(houseArr))
console.timeEnd('printHouse')


function printHouse2(arr){
  let res = Infinity
  const m = arr.length
  const n = arr[0].length
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(Infinity))
  for(let i = 0; i < n; i++){
    dp[0][i] = arr[0][i]
  }
  for(let i = 1; i < m; i++){
    let min1 = Infinity
    let min2 = Infinity
    let j1, j2
    for(let j = 0; j < n; j++){
      if(dp[i - 1][j] < min1){
        min2 = min1
        min1 = dp[i - 1][j]
        j2 = j1
        j1 = j
      }else if(dp[i - 1][j] < min2){
        min2 = dp[i - 1][j]
        j2 = j
      }
    }
    for(let j = 0; j < n; j++){
      if(j === j1){
        dp[i][j] = Math.min(arr[i][j] + min2, dp[i][j])
      }else{
        dp[i][j] = Math.min(arr[i][j] + min1, dp[i][j])
      }
    }
  }
  for(let i = 0; i < n; i++){
    res = Math.min(dp[m - 1][i], res)
  }
  return res
}
console.time('printHouse2')
console.log(printHouse2(houseArr))
console.timeEnd('printHouse2')