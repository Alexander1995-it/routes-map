import React from 'react'
import { Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { useAppDispatch, useAppSelector } from '../../common/hooks'
import { createEndpointFromArray } from '../../common/helpers/createEndpointFromArray'
import { reverseLatAndLng } from '../../common/helpers/reverseLatAndLng'
import { getPolyline } from '../../store/sagas/roadRoutesSagas'
import s from './Table.module.scss'

interface DataType {
  key: number
  routeName: string
  point1: [number, number]
  point2: [number, number]
  point3: [number, number]
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Маршрут',
    dataIndex: 'routeName',
  },
  {
    title: 'Точка 1 (lat, lng)',
    dataIndex: 'point1',
    render: (point: [number, number]) => (
      <div>
        {point[0]}, {point[1]}
      </div>
    ),
  },
  {
    title: 'Точка 2 (lat, lng)',
    dataIndex: 'point2',
    render: (point: [number, number]) => (
      <div>
        {point[0]}, {point[1]}
      </div>
    ),
  },
  {
    title: 'Точка 3 (lat, lng)',
    dataIndex: 'point3',
    render: (point: [number, number]) => (
      <div>
        {point[0]}, {point[1]}
      </div>
    ),
  },
]

export const TableContainer: React.FC = () => {
  const routes = useAppSelector(state => state.roadRoutes.routes)
  const dispatch = useAppDispatch()

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      let reversArray = reverseLatAndLng([
        selectedRows[0].point1,
        selectedRows[0].point2,
        selectedRows[0].point3,
      ])
      let endpointRoute = createEndpointFromArray(reversArray)
      dispatch(getPolyline({ endpointRoute, id: selectedRows[0].key }))
    },
  }
  const data = routes.map(route => {
    return {
      key: route.id,
      routeName: route.routeName,
      point1: route.points[0],
      point2: route.points[1],
      point3: route.points[2],
    }
  })
  return (
    <div className={s.tableBlock}>
      <Table
        rowSelection={{
          type: 'radio',
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  )
}
