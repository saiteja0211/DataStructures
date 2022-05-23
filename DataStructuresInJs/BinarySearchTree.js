/* BinarySearchTree: Should have 2 Branches for everynode.
Are ordered: means left subtree <= Parent Node <= Right subtree.
Uses binary search: so search perations are skiped to half of tree.
  */

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = left;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  add = function (params) {};
}
