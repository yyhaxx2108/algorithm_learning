class Path{
  constructor (graph, s) {
    this.graph = graph
    this.s = s
    this.visited = new Array(graph.V()).fill(false)
    this.fromP = new Array(graph.V()).fill(-1)
    this._dfs(this.s)
  }
  _dfs(v){
    this.visited[v] = true
    let item = this.graph['g'][v]
    for(let i = 0; i < item.length; i++){
      if(item[i]){
        if(!this.visited[i]){
          this.fromP[i] = v
          this._dfs(i)
        }
      }
    }
  }
  hasPath(w){
    return this.visited[w]
  }
  getPath(w){
    let s = new Array(), r = new Array()
    let p = w
    while (p != -1) {
      s.push(p)
      p = this.fromP[p]
    }
    while (s.length !== 0) {
      r.push(s.pop())
    }
    return r
  }
}

module.exports = Path