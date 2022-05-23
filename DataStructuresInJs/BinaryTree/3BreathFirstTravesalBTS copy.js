/* 
 Breath First Traversal: go to deep from root to leaf
 Uses a data structure: queue
 */

function breathFirstTraverse(node) {
  if (!node) {
    return [];
  }
  const myQueue = [node];
  const traversedNodes = [];
  while (myQueue.length) {
    const currentNode = myQueue.shift();
    if (currentNode.left) {
      myQueue.push(currentNode.left);
    }
    if (currentNode.right) {
      myQueue.push(currentNode.right);
    }
    traversedNodes.push(currentNode.value);
  }
  return traversedNodes;
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
console.log(breathFirstTraverse(root));
