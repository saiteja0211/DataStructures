function BfsTreeIncludes(node, searchValue) {
  if (!node) {
    return false;
  }

  const queue = [node];
  while (queue.length) {
    const currentNode = queue.shift();
    if (currentNode.value === searchValue) {
      return true;
    }
    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right);
  }
  return false;
}

function DftTreeIncludes(node, searchValue) {
  if (!node) return false;
  if (node.target === searchValue) return true;
  return (
    DftTreeIncludes(node.left, searchValue) ||
    DftTreeIncludes(node.right, searchValue)
  );
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

console.log(BfsTreeIncludes(root, "e"));
