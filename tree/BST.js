class BST{
  constructor(){
    this.rootNode = {}
  }

  // 添加节点
  insert(obj){
    const newNode = {
      key: obj.key,
      value: obj.value,
      left: null,
      right: null
    }
    // 判读根节点是否存在
    if(this.rootNode.key === undefined){
      this.rootNode = newNode
    }else{
      this._insert(this.rootNode, newNode)
    }
  }

  // 判断是否有key
  contain(key){
    if(this.rootNode.key === undefined){
      return false
    }else{
      return this._contain(this.rootNode, key)
    }
  }

  // 通过key查找值
  search(key) {
    if(this.rootNode.key === undefined){
      return false
    }else{
      return this._search(this.rootNode, key)
    }
  }

  // 先序遍历
  preOrderTraverseNode(callback){
    if(this.rootNode.key){
      this._preOrderTraverseNode(this.rootNode, callback)
    }
  }

  // 中序遍历
  inOrderTraverseNode(callback){
    if(this.rootNode.key){
      this._inOrderTraverseNode(this.rootNode, callback)
    }
  }

  // 后序遍历
  postOrderTraverseNode(callback){
    if(this.rootNode.key){
      this._postOrderTraverseNode(this.rootNode, callback)
    }
  }

  // 横向遍历
  rawOrderTraverseNode(callback){
    // 数组堆栈
    let arr = []
    if(this.rootNode.key){
      arr.push(this.rootNode)
      this._rawOrderTraverseNode(this.rootNode, callback, arr)
    }
  }

  // 取出最大key及对应的值
  getMaxKeyAndValue(){
    if(this.rootNode.key){
      const node = this._getMaxKeyAndValue(this.rootNode)
      return {
        key: node.key,
        value: node.value
      }
    }
  }

  // 取出最小key及对应的值
  getMinKeyAndValue(){
    if(this.rootNode.key){
      const node = this._getMinKeyAndValue(this.rootNode)
      return {
        key: node.key,
        value: node.value
      }
    }
  }

  // 删除最大节点
  removeMaxKeyNode(){
    if(this.rootNode.key){
      this.rootNode = this._removeMaxKeyNode(this.rootNode)
    }
  }

  // 删除最小节点
  removeMinKeyNode(){
    if(this.rootNode.key){
      this.rootNode = this._removeMinKeyNode(this.rootNode)
    }
  }

  // 删除节点
  removeNode(key){
    if(this.rootNode.key){
      this.rootNode = _removeNode(this.rootNode, key)
    }
  }

  // 添加节点的内部调用
  _insert(node, newNode){
    if(newNode.key === node.key){
      node.value = newNode.value
    }else if(newNode.key < node.key ){
      if(node.left === null){
        node.left = newNode
      }else{
        this._insert(node.left, newNode)
      }
    }else{
      if(node.right === null){
        node.right = newNode
      }else{
        this._insert(node.right, newNode)
      }
    }
  }

  _contain(node, key){
    if(node.key === key){
      return true
    }else if(key < node.key){
      if(node.left === null){
        return false
      }else{
        return this._contain(node.left, key)
      }
    }else{
      if(node.right === null){
        return false
      }else{
        return this._contain(node.right, key)
      }
    }
  }

  _search(node, key){
    if(node.key === key){
      return node.value
    }else if(key < node.key){
      if(node.left === null){
        return false
      }else{
        return this._search(node.left, key)
      }
    }else{
      if(node.right === null){
        return false
      }else{
        return this._search(node.right, key)
      }
    }
  }

  _preOrderTraverseNode(node, callback){
    callback(node)
    if(node.left){
      this._preOrderTraverseNode(node.left, callback)
    }
    if(node.right){
      this._preOrderTraverseNode(node.right, callback)
    }
  }

  _inOrderTraverseNode(node, callback){
    if(node.left){
      this._inOrderTraverseNode(node.left, callback)
    }
    callback(node)
    if(node.right){
      this._inOrderTraverseNode(node.right, callback)
    }
  }

  _postOrderTraverseNode(node, callback){
    if(node.left){
      this._postOrderTraverseNode(node.left, callback)
    }
    if(node.right){
      this._postOrderTraverseNode(node.right, callback)
    }
    callback(node)
  }

  _rawOrderTraverseNode(node, callback, arr){
    while(arr.length > 0) {
      // 取出队列的第一个node
      const nowNode = arr.shift()
      // 调用callback方法
      callback(nowNode)
      // 将取出node的子节点分别压入队列
      if(nowNode.left){
        arr.push(nowNode.left)
      }
      if(nowNode.right){
        arr.push(nowNode.right)
      }
    }
  }

  _getMaxKeyAndValue(node){
    if(node.right){
      return this._getMaxKeyAndValue(node.right)
    }else{
      return node
    }
  }

  _getMinKeyAndValue(node){
    if(node.left){
      return this._getMinKeyAndValue(node.left)
    }else{
      return node
    }
  }

  _removeMaxKeyNode(node){
    if(node.right === null){
      return node.left
    }else{
      node.right = this._removeMaxKeyNode(node.right)
      return node
    }
  }

  _removeMinKeyNode(node){
    if(node.left === null){
      return node.right
    }else{
      node.left = this._removeMaxKeyNode(node.left)
      return node
    }
  }

  _removeNode(node, key){
    if(node === null){
      return 
    }else{
      if(key < node.key){
        node.left = this._removeNode(node.left, key)
        return node
      }else if (key > node.key){
        node.right = this._removeNode(node.right, key)
        return node
      }else{
        if(node.left === null){
          return node.right
        }else if(node.right === null){
          return node.left
        }else{
          let replace = this._getMinKeyAndValue(node)
          node = this._removeMinKeyNode(node)
          node.key = replace.key
          node.value = replace.value
          return node
        }
      }
    }
  }
}

// 测试代码
const bst = new BST()
for (let i = 0; i < 10; i++){
  let k = Math.floor(Math.random() * 100)
  let v = Math.floor(Math.random() * 100)
  const obj = {
    key: k,
    value: v,
  }
  bst.insert(obj)
}
// console.log(JSON.stringify(bst))
// console.log(bst.contain(42))
// console.log(bst.search(42))
// console.log('先序')
// bst.preOrderTraverseNode(function(node){
//   console.log(node.key)
// })
// console.log('中序')
// bst.inOrderTraverseNode(function(node){
//   console.log(node.key)
// })
// console.log('后序')
// bst.postOrderTraverseNode(function(node){
//   console.log(node.key)
// })
// console.log('横向遍历')
// bst.rawOrderTraverseNode(function(node){
//   console.log(node.key)
// })
// console.log('最大key')
// console.log(bst.getMaxKeyAndValue())
// console.log('最小key')
// console.log(bst.getMinKeyAndValue())
// console.log('删除最大节点')
// bst.removeMaxKeyNode()
// console.log('删除最大节点')
// bst.removeMinKeyNode()
// console.log('中序')
// bst.inOrderTraverseNode(function(node){
//   console.log(node.key)
// })