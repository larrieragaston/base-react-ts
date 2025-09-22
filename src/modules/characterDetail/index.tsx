import { swService } from '../../services/swapi'
import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { SWCharacterProps } from '../../types/sw.types'

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
      <h1>Información del personaje</h1>
      {isLoading ? (
        <p>Cargando info del personaje...</p>
      ) : (
        <div>
          <pre>{JSON.stringify(characterInfo, null, 2)}</pre>
        </div>
      )}
    </>
  )
}
