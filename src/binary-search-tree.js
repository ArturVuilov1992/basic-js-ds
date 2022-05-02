const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  root() {
    this.root=null;
    if (!this.root) return this.root
  }

  add(data) {
    this.rootTree = addWithin(this.rootTree, data);
  
      function addWithin(node, data) {
        if (!node) {
          return new Node(data);
        }
  
        if (node.data === data) {
          return node;
        }
  
        if (data < node.data) {
          node.left = addWithin(node.left, data);
        } else {
          node.right = addWithin(node.right, data);
        }
  
        return node;
      }
  }

  has() {
    
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    if (!this.root) {
      return;
    }

    let node = this.root;
    while (node.left) {
      node = node.left;
    }

    return node.value;
  }

  max() {
    if (!this.root) {
      return;
    }

    let node = this.root;
    while (node.right) {
      node = node.right;
    }

    return node.value;
  }
}

module.exports = {
  BinarySearchTree
};