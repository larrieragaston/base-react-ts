import { FC, useEffect, useState } from 'react'
import { swService } from '../../services/swapi'
import { SWCharacter } from '../../components/SWCharacter'
import { SWCharacterProps } from '../../types/sw.types'

export const SWCharacters: FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [characters, setCharacters] = useState<Array<SWCharacterProps>>([])

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const response = await swService.getPeople()
      console.log(response)
      setCharacters(response.results)
      setIsLoading(false)
    }
    fetchData()
  }, [])

  return (
    <>
      <h1>Listado de personajes de Star Wars</h1>
      {isLoading ? <p>Cargando listado...</p> : characters.map((x) => <SWCharacter key={x.url} {...x} />)}
    </>
  )
}
