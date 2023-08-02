import React from 'react'
import Map from './components/Map'
import Table from './components/Table'
import Header from 'components/Header'
import Footer from 'components/Footer'
import { Loading } from 'common/lib/Loading/Loading'
import { getIsLoading } from 'store/selectors/roadRotes.selector'
import { useAppSelector } from 'common/hooks'
import s from './App.module.scss'

function App() {
  const isLoading = useAppSelector(getIsLoading)
  return (
    <div className={s.wrapperApp}>
      <Header />
      {isLoading && (
        <div className={s.loading}>
          <Loading />
        </div>
      )}
      <div className={s.wrapperContent}>
        <Table />
        <Map />
      </div>
      <Footer />
    </div>
  )
}

export default App
