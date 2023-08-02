import React from 'react'
import { useMap } from 'react-leaflet'

type MapCenterType = {
  position: [number, number]
}

export const MapCenter = (props: MapCenterType) => {
  const map = useMap()
  const options = { animate: true, duration: 0.5, noMoveStart: true }
  map.setView(props.position, 12, options)
  return null
}
