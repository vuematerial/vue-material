const generatedIds = new Set()

function mdUuid (): string {
  const id = `md-${new Date().getTime().toString(36)}`

  if (generatedIds.has(id)) {
    return mdUuid()
  }

  generatedIds.add(id)

  return id
}

export default mdUuid
