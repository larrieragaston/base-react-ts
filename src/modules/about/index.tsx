import { useEffect, useState } from 'react'
import pkg from '../../../package.json'
import { Spin, Typography } from 'antd'
import { rootApiService } from '../../services/rootApi'
import { content } from '../../utils/content'
import { ApiGetRootResponse } from '../../types/ApiService.types'

const { Title } = Typography

export const About = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [apiInfo, setApiInfo] = useState<ApiGetRootResponse>()

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const response = await rootApiService.getRoot()
      console.log(response)
      setApiInfo(response)
      setIsLoading(false)
    }
    fetchData()
  }, [])
  return (
    <>
      <Title level={2}>About</Title>
      <p>AppName: {pkg.name}</p>
      <p>Version: {pkg.version}</p>
      {isLoading ? (
        <Spin tip="Cargando información principal de la API..." size="large">
          {content}
        </Spin>
      ) : (
        <div>
          <Title level={2}>API</Title>
          <p>ApiName: {apiInfo?.name}</p>
          <p>Version: {apiInfo?.version}</p>
        </div>
      )}
    </>
  )
}
