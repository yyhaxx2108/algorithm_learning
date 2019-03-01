class Edge {
  constructor (a, b, weight) {
    this.a = a
    this.b = b
    this.weight = weight
  }
  Edge () {},
  v () {
    return this.a
  },
  w () {
    return this.b
  },
  wt () {
    return this.weight
  }
  other (x) {
    if(x === this.a || x == this.b){
      return x === this.a ? this.b : this.a
    }
  }
}