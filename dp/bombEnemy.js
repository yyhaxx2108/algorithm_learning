function bombEnemy(arr){
  const m = arr.length
  const n = arr[0].length
  const f = new Array(m).fill(0).map(() => new Array(n).fill(0))
  const res = new Array(m).fill(0).map(() => new Array(n).fill(0))
  for(let i = 0; i < m; i++){
    for(let j = 0; j < n; j++){
      f[i][j] = 0
      if(arr[i][j] !== 'W'){
        if(arr[i][j] === 'E'){
          f[i][j] = 1
        }
        if(i > 0){
          f[i][j] += f[i - 1][j]
        }
      }
      res[i][j] += f[i][j]
    }
  }
  for(let i = m - 1; i >= 0; i--){
    for(let j = 0; j < n; j++){
      f[i][j] = 0
      if(arr[i][j] !== 'W'){
        if(arr[i][j] === 'E'){
          f[i][j] = 1
        }
        if(i < m - 1){
          f[i][j] += f[i + 1][j]
        }
      }
      res[i][j] += f[i][j]
    }
  }
  for(let j = 0; j < n; j++){
    for(let i = 0; i < m; i++){
      f[i][j] = 0
      if(arr[i][j] !== 'W'){
        if(arr[i][j] === 'E'){
          f[i][j] = 1
        }
        if(j > 0){
          f[i][j] += f[i][j - 1]
        }
      }
      res[i][j] += f[i][j]
    }
  }
  for(let j = n - 1; j >= 0; j--){
    for(let i = 0; i < m; i++){
      f[i][j] = 0
      if(arr[i][j] !== 'W'){
        if(arr[i][j] === 'E'){
          f[i][j] = 1
        }
        if(j < n - 1){
          f[i][j] += f[i][j + 1]
        }
      }
      res[i][j] += f[i][j]
    }
  }
  let ans = 0
  for(let i = 0; i < m; i++){
    for(let j = 0; j < n; j++){
      if(arr[i][j] === '0'){
        ans = Math.max(res[i][j], ans)
      }
    }
  }
  return ans
}

const arr = [
  ['0', 'E', '0', '0'],
  ['E', '0', 'E', 'E'],
  ['0', 'E', '0', '0'],
  ['E', 'W', '0', 'E']
]

console.log(bombEnemy(arr))