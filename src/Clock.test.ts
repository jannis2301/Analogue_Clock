import { describe, it, expect } from 'vitest'

describe('Clock', () => {
  it('should start with Drei mal ist...', () => {
    const proverb = 'Drei mal ist Bremer Recht'
    expect(proverb.startsWith('Drei mal ist')).toBe(true)
  })
})
