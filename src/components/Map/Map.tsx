import React from 'react'
import { MapContainer, Marker, Polyline, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import {
  getCoordinatorsPayline,
  getIdCurrentRoute,
  getWaypoints,
} from '../../store/selectors/roadRotes.selector'
import { useAppSelector } from '../../common/hooks'
import { reverseLatAndLng } from '../../common/helpers/reverseLatAndLng'
import icon from '../../common/icons/marker.svg'
import { setCenterMap } from '../../common/helpers/setCenterMap'
import { MapCenter } from './MapCenter'
import { Icon } from 'leaflet'
import s from './Map.module.scss'

export const Map = () => {
  let arrayPoints = useAppSelector(getWaypoints)
  const polyline = useAppSelector(getCoordinatorsPayline)
  const idCurrentRoute = useAppSelector(getIdCurrentRoute)

  const customIcon = new Icon({
    iconUrl: icon,
    iconSize: [38, 38],
  })

  let positionMapCenter = arrayPoints.length
    ? setCenterMap(arrayPoints[0].points)
    : [59.82934196, 30.42423701]

  arrayPoints = arrayPoints.filter(route => route.id === idCurrentRoute)

  return (
    <div>
      <MapContainer
        className={s.mapContainer}
        center={positionMapCenter}
        zoom={12}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapCenter position={positionMapCenter} />
        <Polyline weight={5} positions={reverseLatAndLng(polyline)} />
        {arrayPoints.length &&
          arrayPoints[0].points.map((point, index) => {
            return (
              <Marker key={index} icon={customIcon} position={point}>
                <Popup>{point.toString()}</Popup>
              </Marker>
            )
          })}
      </MapContainer>
    </div>
  )
}
