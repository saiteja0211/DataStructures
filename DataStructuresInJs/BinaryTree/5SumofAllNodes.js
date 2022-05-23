function DfsTotalSum(node) {
  if (!node) {
    return 0;
  }
  return node.value + DfsTotalSum(node.left) + DfsTotalSum(node.right);
}

function BfsTotalSum(node) {
  if (!node) return 0;
  const queue = [node];
  const sum = 0;
  while (queue.length) {
    const currentNode = queue.shift();
    sum += currentNode.value;
    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right);
  }
  return sum;
}
