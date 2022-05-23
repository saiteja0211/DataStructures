/* Max root to leaf path sum */

function DfsMaxPath(node) {
  if (!node) {
    return -Infinity;
  }
  if (!node.left && !node.right) return node.value;
  const maxChildPathSum = Math.max(
    DfsMaxPath(node.left),
    DfsMaxPath(node.right)
  );
  return node.value + maxChildPathSum;
}
