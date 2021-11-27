describe('Array Diff', () => {
  it('1. 左边查找', () => {
    const mountElement = jest.fn()
    const unmount = jest.fn()
    const patch = jest.fn()
    const move = jest.fn()
    const { diffArray } = require('./longestIncreasingSubsequence')
    diffArray(
      [{ key: 'a' }, { key: 'b' }, { key: 'c' }],
      [{ key: 'a' }, { key: 'b' }, { key: 'd' }, { key: 'e' }],
      {
        mountElement,
        unmount,
        patch,
        move
      }
    )
    expect(patch.mock.calls.length).toBe(2)
    expect(patch.mock.calls[0][0]).toBe('a')
    expect(patch.mock.calls[1][0]).toBe('b')
  })
})