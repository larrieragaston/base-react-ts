import { swService } from '../../services/swapi'
import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { SWCharacterProps } from '../../types/sw.types'
import { Spin, Typography } from 'antd'
import { content } from '../../utils/content'

const { Title } = Typography

export const SWCharacterDetail: FC = () => {
  const { id } = useParams()

  const [isLoading, setIsLoading] = useState(false)
  const [characterInfo, setCharacterInfo] = useState<SWCharacterProps>()

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const response = await swService.getPersonById(id)
      console.log(response)
      setCharacterInfo(response)
      setIsLoading(false)
    }
    fetchData()
  }, [id])
  return (
    <>
      <Title level={2}>Información del personaje</Title>
      {isLoading ? (
        <Spin tip="Cargando info del personaje..." size="large">
          {content}
        </Spin>
      ) : (
        <div>
          <pre>{JSON.stringify(characterInfo, null, 2)}</pre>
        </div>
      )}
    </>
  )
}
