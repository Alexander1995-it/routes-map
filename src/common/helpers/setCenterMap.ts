export const setCenterMap = (points: [number, number][]): any => {
  let latCenter
  let lngCenter
  if (!points.length) {
    return [59.82934196, 30.42423701]
  }
  let latMin = points[0][0]
  let latMax = points[0][0]
  let lngMin = points[0][1]
  let lngMax = points[0][1]

  points.forEach((point: [number, number]) => {
    if (point[0] > latMax) {
      latMax = point[0]
    }
    if (point[0] < latMin) {
      latMin = point[0]
    }
    if (point[1] > lngMax) {
      lngMax = point[1]
    }
    if (point[1] < lngMin) {
      lngMin = point[1]
    }
  })

  latCenter = (latMin + latMax) / 2
  lngCenter = (lngMin + lngMax) / 2

  return [latCenter, lngCenter]
}
