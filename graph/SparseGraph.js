class SparseGraph {
  constructor(n, directived){
    this.n = n;
    this.m = 0
    this.directived = directived;
    this.g = []
    for(let i = 0; i < n; i ++){
      this.g.push(new Set())
    }
  }

  // 返回顶点数量
  V () {
    return this.n
  }

  // 返回边数量
  E () {
    return this.m
  }

  // 添加一条边
  addEdge (v, w) {
    if (v < 0 || v > this.n || w < 0 || w > this.n){
      return
    }
    this.g[v].add(w)
    if(!this.directived){
      this.g[w].add(v)
    }
  }

  // 判断是否存在边
  hasEdge (v, w){
    if (v < 0 || v > this.n || w < 0 || w > this.n){
      return
    }
    return this.g[v].has(w)
  }
}

let sparseGraph = new SparseGraph(10, false)
console.log(sparseGraph)
sparseGraph.addEdge(3, 5)
console.log(sparseGraph)
console.log(sparseGraph.hasEdge(5,3))