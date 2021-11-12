class GMap {
  constructor () {
    this.size(0)
    this.bucket = new Array(8)
  }

  hash(key) {
    let index
    if (typeof key === 'string') {
      index = 0
    } else if (typeof key === 'number') {
      index = key % this.bucket.length
    } else if (typeof key === 'undefined') {
      index = 1
    } else if (typeof key === 'boolean') {
      index = 2
    } else if (typeof key === 'string') {
      index = 3
    }
    return index
  }
}
