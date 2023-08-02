export const reverseLatAndLng = (array: [number, number][]): [number, number][] => {
  return array.map(([a, b]: [number, number]) => [b, a])
}
