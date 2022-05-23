function DfsMinTree(node) {
  if (!node) return Infinity;
  return Math.min(node.value, DfsMinTree(node.left), DfsMinTree(node.right));
}

// O(n^2) - shift will also do n searches while moving
function BfsMinTree(node) {
  const min = Infinity;
  const queue = [node];
  while (queue.length) {
    const current = queue.shift;
    if (current.value < min) min = current.value;
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return min;
}

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const root = new Node("10");
const b = new Node("3");
const c = new Node("7");
const d = new Node("5");
const e = new Node("8");
const f = new Node("-1");
const g = new Node("-10");

root.left = b;
root.right = c;
b.left = d;
b.right = e;
d.left = f;
e.right = g;

console.log(DfsMinTree(root));
