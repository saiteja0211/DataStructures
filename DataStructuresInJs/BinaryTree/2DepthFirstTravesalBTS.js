/* 
 Depth First Traversal: go to deep from root to leaf
 Uses a data structure: Stack
 */

function depthFirstTraverse(node) {
  if (!node) {
    return [];
  }
  const myStack = [node];
  const traversedNodes = [];
  while (myStack.length) {
    const currentNode = myStack.pop();
    if (currentNode.right) {
      myStack.push(currentNode.right);
    }
    if (currentNode.left) {
      myStack.push(currentNode.left);
    }

    traversedNodes.push(currentNode.value);
  }
  return traversedNodes;
}

// recursive

function depthFirstTraverse2(node) {
  if (!node) {
    return [];
  }
  const leftValues = depthFirstTraverse2(node.left);
  const rightValues = depthFirstTraverse2(node.right);
  return [node.value, ...leftValues, ...rightValues];
}

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const root = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const g = new Node("g");

root.left = b;
root.right = c;
b.left = d;
b.right = e;
d.left = f;
e.right = g;

/* 
         a
        / \
       b   c
      /\   
     d  e
    /    \
   f      g
*/
console.log(depthFirstTraverse(root));
console.log(depthFirstTraverse2(root));
