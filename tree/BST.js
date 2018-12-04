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
    this._preOrderTraverseNode(this.rootNode, callback)
  }

  // 中序遍历
  inOrderTraverseNode(callback){
    this._inOrderTraverseNode(this.rootNode, callback)
  }

  // 后序遍历
  postOrderTraverseNode(callback){
    this._postOrderTraverseNode(this.rootNode, callback)
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
console.log(JSON.stringify(bst))
console.log(bst.contain(42))
console.log(bst.search(42))
console.log('先序')
bst.preOrderTraverseNode(function(node){
  console.log(node.key)
})
console.log('中序')
bst.inOrderTraverseNode(function(node){
  console.log(node.key)
})
console.log('后序')
bst.postOrderTraverseNode(function(node){
  console.log(node.key)
})