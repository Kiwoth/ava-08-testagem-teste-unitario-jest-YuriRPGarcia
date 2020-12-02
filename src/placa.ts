

export const placa = (strplaca: string): string => {
  const regexMercosul: RegExp = /^[A-Z]{3}[0-9][A-Z][0-9]{2}$/

  if (strplaca.match(regexMercosul))
    return strplaca

  const regexNormal: RegExp = /^[a-zA-Z]{3}[0-9]{4}$/

  if (strplaca.match(regexNormal)) {
    const charsToReplace: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
    return strplaca
      .split('')
      .map((char, i) => i == 4 ? charsToReplace[parseInt(char)] : char)
      .join('')
      .toUpperCase()
  }

  throw new Error("Placa inválida")
}