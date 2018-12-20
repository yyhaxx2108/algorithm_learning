class DenseGraph {
  // 构造函数
  constructor (n, directived) {
    // 顶点数量
    this.n = n
    // 边的数量
    this.m = 0
    // 方向
    this.directived = directived
    // 记录是否连接
    this.g = []
    // 初始化连接状态
    for (let i = 0; i < n; i ++){
      this.g.push((new Array(n)).fill(false))
    }
  }

  // 返回顶点数量
  V () {
    return this.n
  }

  // 返回边的数量
  E () {
    return this.m
  }

  // 添加一条边
  addEdge (v, w) {
    if (v < 0 || v > this.n || w < 0 || w > this.n){
      return
    }
    if(this.hasEdge(v, w)){
      return 
    }
    this.g[v][w] = true
    if(!this.directived){
      this.g[v][w] = true
    }
    this.m++
  }

  // 判断是否存在边
  hasEdge (v, w){
    if (v < 0 || v > this.n || w < 0 || w > this.n){
      return
    }
    return this.g[v][w]
  }

}

let denseGraph = new DenseGraph(10, false)
console.log(denseGraph)
denseGraph.addEdge(3, 7)
console.log(denseGraph)