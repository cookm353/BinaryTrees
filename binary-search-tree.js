class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (!this.root) {
      this.root = new Node(val)
    } else {
      let currNode = this.root
  
      while (currNode) {
        if (currNode.val > val) {
          if (currNode.left) {
            currNode = currNode.left
          } else {
            currNode.left = new Node(val)
            break
          }
        } else {
          if (currNode.right) {
            currNode = currNode.right
          } else {
            currNode.right = new Node(val)
            break
          }
        }
      }
    }
    return this
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    function insert(val, node) {
      if (val < node.val) {
          if (node.left) return insert(val, node.left)
          else {
              node.left = new Node(val)
              return
          }
      }
      else {
          if (node.right) return insert(val, node.right)
          else {
              node.right = new Node(val)
              return
          }
        }
      }
  
    if (!this.root) this.root = new Node(val)
    else insert(val, this.root)
    return this
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currNode = this.root

    while (currNode) {
      if (currNode.val === val) return currNode
      else if (currNode.val > val) currNode = currNode.left
      else if (currNode.val < val) currNode = currNode.right
    }
    return undefined
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, node=this.root) {
    if (!node) return undefined
    
    if (val === node.val) return node
    else if (node.val > val) return this.findRecursively(val, node.left)
    else if (node.val < val) return this.findRecursively(val, node.right)
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    const nodesVisited = []

    function traverse(node, nodesVisited) {
      nodesVisited.push(node.val)
      if (node.left) traverse(node.left, nodesVisited)
      if (node.right) traverse(node.right, nodesVisited)
    }
    traverse(this.root, nodesVisited)
    return nodesVisited
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    const nodesVisited = []

    function traverse(node, nodesVisited) {
      if (node.left) traverse(node.left, nodesVisited)
      nodesVisited.push(node.val)
      if (node.right) traverse(node.right, nodesVisited)
    }
    traverse(this.root, nodesVisited)
    return nodesVisited
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    const nodesVisited = []

    function traverse(node, nodesVisited) {
      if (node.left) traverse(node.left, nodesVisited)
      if (node.right) traverse(node.right, nodesVisited)
      nodesVisited.push(node.val)
    }
    traverse(this.root, nodesVisited)
    return nodesVisited
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const nodes = []
    const toVisitQueue = [this.root]

    while (toVisitQueue.length) {
      const currNode = toVisitQueue.shift()
      nodes.push(currNode.val)

      if (currNode.left) toVisitQueue.push(currNode.left)
      if (currNode.right) toVisitQueue.push(currNode.right)
    }

    return nodes
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
