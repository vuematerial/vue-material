export default (parent, child) => {
  if (typeof Node.prototype.contains === 'function') {
    return Node.prototype.contains.call(parent, child)
  } else {
    return (Node.prototype.compareDocumentPosition.call(child, parent) & Node.prototype.DOCUMENT_POSITION_CONTAINS) !== 0
  }
}
