/* 
binary tree: at most 2 child nodes, exactly 1 root node, exactl 1 path b/w root to anyy node.
empty tree = binary tree
*/

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

console.log(JSON.stringify(root));
