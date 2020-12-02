import { placa } from './placa.ts'

// 0 = A
// 1 = B
// 2 = C
// 3 = D
// 4 = E
// 5 = F
// 6 = G
// 7 = H
// 8 = I
// 9 = J

test('placa invariável', () => {
  expect(placa('IYT1050')).toBe('IYT1A50')
})

test('placa retorna em maiúsculas', () => {
  expect(placa('iyt1050')).toBe('IYT1A50')
})

test('placa converte o segundo dígito em letra 5', () => {
  expect(placa('iyt1550')).toBe('IYT1F50')
})

test('placa converte o segundo dígito em letra 9', () => {
  expect(placa('iyt1950')).toBe('IYT1J50')
})

test('placa deve entrada estar no formato 3 letras e 4 números', () => {
  expect(() => placa('iyt 1950')).toThrow()
  expect(() => placa('1yt1950')).toThrow()
  expect(() => placa('TTT195T')).toThrow()
  expect(() => placa('TTT195Q')).toThrow()
  expect(() => placa('TTT954')).toThrow()
  expect(() => placa('TTT95488')).toThrow()
})

test('placa formato novo não causa exception', () => {
  expect(() => placa('IRQ1E50')).not.toThrow()
})

test('placa formato novo mas não maiúscula causa exception', () => {
  expect(() => placa('irq1e50')).toThrow()
})
