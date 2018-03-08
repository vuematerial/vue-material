import MdTable from './MdTable'

function processChildren (children, createElement) {
  const slotNames = ['md-table-toolbar', 'md-table-empty-state', 'md-table-pagination']
  let nodes = Array.from(children)
  let namedSlots = {}

  function getTag ({ componentOptions }) {
    return componentOptions && componentOptions.tag
  }

  nodes.forEach((node, index) => {
    if (node && node.tag) {
      const tag = getTag(node)

      if (tag && slotNames.includes(tag)) {
        node.data.slot = tag
        node.data.attrs = node.data.attrs || {}
        namedSlots[tag] = () => node
        nodes.splice(index, 1)
      }
    }
  })

  return {
    childNodes: nodes,
    slots: namedSlots
  }
}

export default {
  name: 'MdTableContainer',
  functional: true,
  render (createElement, { data, props, children }) {
    let slotChildren = []
    let scopedSlots = data.scopedSlots

    if (children) {
      const { childNodes, slots } = processChildren(children, createElement)

      slotChildren = childNodes
      scopedSlots = {
        ...scopedSlots,
        ...slots
      }
    }

    return createElement(MdTable, {
      ...data,
      props,
      scopedSlots
    }, [slotChildren])
  }
}
